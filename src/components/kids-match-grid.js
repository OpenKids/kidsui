import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-match-grid> — An interactive matching exercise where kids connect pairs.
 *
 * Attributes:
 *   pairs     — JSON array of pairs, e.g. '[{"left":"Cat","right":"Meow"},{"left":"Dog","right":"Woof"}]'
 *   status    — "playing" (default) | "checking" | "completed"
 *   shuffle   — boolean, shuffle the right-side items (default true)
 *
 * Events:
 *   kids-match    — fired when a match is made, detail: { left: string, right: string, correct: boolean }
 *   kids-complete — fired when all pairs are matched, detail: { correct: number, total: number }
 *
 * Animations:
 *   - Entrance: items stagger in
 *   - Match correct: green glow + bounce
 *   - Match incorrect: red shake
 */
export class KidsMatchGrid extends KidsElement {
  static observedAttributes = ["pairs", "status", "shuffle"];

  _selectedLeft = null;
  _selectedRight = null;
  _matched = new Set();
  _shuffledRight = [];

  template() {
    const pairsAttr = this.attr("pairs", "[]");

    let pairs = [];
    try {
      pairs = JSON.parse(pairsAttr);
    } catch {
      pairs = [];
    }

    // Shuffle right side once
    if (this._shuffledRight.length === 0 || this._shuffledRight.length !== pairs.length) {
      this._shuffledRight = pairs.map((p) => p.right);
      if (this.getAttribute("shuffle") !== "false") {
        for (let i = this._shuffledRight.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this._shuffledRight[i], this._shuffledRight[j]] = [this._shuffledRight[j], this._shuffledRight[i]];
        }
      }
    }

    const leftItems = pairs
      .map(
        (p) => `
        <div class="item left-item ${this._matched.has(p.left) ? "matched" : ""} ${this._selectedLeft === p.left ? "selected" : ""}"
             data-value="${p.left}" data-side="left">
          ${p.left}
        </div>`,
      )
      .join("");

    const rightItems = this._shuffledRight
      .map(
        (val) => `
        <div class="item right-item ${this._matched.has(val) ? "matched" : ""} ${this._selectedRight === val ? "selected" : ""}"
             data-value="${val}" data-side="right">
          ${val}
        </div>`,
      )
      .join("");

    const total = pairs.length;
    const matched = this._matched.size / 2;

    return /* html */ `
      <style>
        :host { display: block; }

        .match-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--kids-space-lg);
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .item {
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          text-align: center;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          border: 3px solid var(--kids-color-surface-alt);
          background: var(--kids-color-surface);
          will-change: transform;
        }

        .item:hover:not(.matched) {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-sm);
        }

        .item.selected {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-15);
        }

        .item.matched {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
          opacity: 0.7;
          cursor: default;
        }

        .item.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
        }

        .progress {
          text-align: center;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          opacity: 0.6;
          margin-top: var(--kids-space-md);
        }
      </style>

      <div class="match-grid" part="grid">
        <div class="column left-column">${leftItems}</div>
        <div class="column right-column">${rightItems}</div>
      </div>
      <div class="progress">${matched} / ${total} matched</div>
    `;
  }

  onEnter() {
    const items = Array.from(this.root.querySelectorAll(".item"));
    items.forEach((item, i) => {
      this.motionAnimate(item, { opacity: [0, 1], scale: [0.9, 1] }, {
        type: "spring",
        stiffness: 400,
        damping: 22,
        delay: i * 0.05,
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    this.root.querySelectorAll(".item:not(.matched)").forEach((item) => {
      item.addEventListener("click", () => {
        const el = item;
        const value = el.dataset.value || "";
        const side = el.dataset.side || "";

        if (side === "left") {
          this._selectedLeft = this._selectedLeft === value ? null : value;
        } else {
          this._selectedRight = this._selectedRight === value ? null : value;
        }

        // Check match if both selected
        if (this._selectedLeft && this._selectedRight) {
          this._checkMatch();
        } else {
          this.render();
          this._bindEvents();
        }
      });
    });
  }

  _checkMatch() {
    const pairsAttr = this.attr("pairs", "[]");
    let pairs = [];
    try {
      pairs = JSON.parse(pairsAttr);
    } catch {
      pairs = [];
    }

    const pair = pairs.find((p) => p.left === this._selectedLeft);
    const correct = pair ? pair.right === this._selectedRight : false;

    if (correct) {
      this._matched.add(this._selectedLeft);
      this._matched.add(this._selectedRight);
    }

    this.dispatchEvent(new CustomEvent("kids-match", {
      bubbles: true,
      detail: { left: this._selectedLeft, right: this._selectedRight, correct },
    }));

    // Save refs to selected items BEFORE clearing state and re-rendering
    const selectedItems = !correct
      ? Array.from(this.root.querySelectorAll(".item.selected"))
      : [];

    this._selectedLeft = null;
    this._selectedRight = null;
    this.render();
    this._bindEvents();

    if (!correct) {
      // Shake incorrect items using saved refs
      selectedItems.forEach((item) => {
        this.motionAnimate(item, { x: [0, -6, 6, -4, 4, 0] }, { duration: 0.4 });
      });
    }

    // Check completion
    if (this._matched.size / 2 === pairs.length) {
      this.setAttribute("status", "completed");
      this.dispatchEvent(new CustomEvent("kids-complete", {
        bubbles: true,
        detail: { correct: pairs.length, total: pairs.length },
      }));
    }
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-match-grid", KidsMatchGrid);
