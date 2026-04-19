import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-sort-list> — A drag-to-reorder list for sequence/ordering exercises.
 *
 * Attributes:
 *   items     — JSON array of items, e.g. '["First","Second","Third"]'
 *   correct   — JSON array of the correct order (optional, for checking)
 *   status    — "playing" (default) | "correct" | "incorrect"
 *   shuffle   — boolean, shuffle items on init (default true)
 *
 * Events:
 *   kids-reorder — fired when order changes, detail: { items: string[], order: number[] }
 *   kids-check   — fired when checked against correct order, detail: { correct: boolean, items: string[] }
 *
 * Animations:
 *   - Items stagger in on entrance
 *   - Drag: item lifts with shadow
 *   - Drop: spring settle
 *   - Correct: green border
 *   - Incorrect: red shake
 */
export class KidsSortList extends KidsElement {
  static observedAttributes = ["items", "correct", "status", "shuffle"];

  _currentItems = [];
  _dragIndex = null;

  template() {
    const itemsAttr = this.attr("items", "[]");
    const status = this.attr("status", "playing");

    try {
      const parsed = JSON.parse(itemsAttr);
      if (this._currentItems.length === 0) {
        this._currentItems = [...parsed];
        if (this.getAttribute("shuffle") !== "false") {
          for (let i = this._currentItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._currentItems[i], this._currentItems[j]] = [this._currentItems[j], this._currentItems[i]];
          }
        }
      }
    } catch {
      /* ignore */
    }

    const items = this._currentItems
      .map(
        (item, i) => `
        <div class="sort-item ${status}" draggable="true" data-index="${i}" part="item">
          <span class="handle">⠿</span>
          <span class="number">${i + 1}</span>
          <span class="text">${item}</span>
          <div class="arrows">
            <button class="arrow-btn up" data-index="${i}" ${i === 0 ? "disabled" : ""}>▲</button>
            <button class="arrow-btn down" data-index="${i}" ${i === this._currentItems.length - 1 ? "disabled" : ""}>▼</button>
          </div>
        </div>`,
      )
      .join("");

    return /* html */ `
      <style>
        :host { display: block; }

        .sort-list {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .sort-item {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          border: 3px solid var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
          font-family: var(--kids-font-family);
          cursor: grab;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        .sort-item:active { cursor: grabbing; }

        .sort-item.dragging {
          opacity: 0.5;
          border-style: dashed;
        }

        .sort-item.drag-over {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
        }

        .sort-item.correct {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
        }

        .sort-item.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
        }

        .handle {
          color: var(--kids-color-text);
          opacity: 0.3;
          font-size: var(--kids-font-size-lg);
          flex-shrink: 0;
        }

        .number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--kids-color-surface-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          flex-shrink: 0;
        }

        .text {
          flex: 1;
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .arrows {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .arrow-btn {
          background: var(--kids-color-surface-alt);
          border: none;
          font-size: 0.6rem;
          padding: 2px 6px;
          cursor: pointer;
          border-radius: var(--kids-radius-sm);
          color: var(--kids-color-text);
          transition: background 0.15s ease;
        }

        .arrow-btn:hover:not(:disabled) {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }

        .arrow-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      </style>

      <div class="sort-list" part="list">
        ${items}
      </div>
    `;
  }

  onEnter() {
    const items = Array.from(this.root.querySelectorAll(".sort-item"));
    items.forEach((item, i) => {
      this.motionAnimate(item, { opacity: [0, 1], x: [-20, 0] }, {
        type: "spring",
        stiffness: 300,
        damping: 22,
        delay: i * 0.06,
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const items = this.root.querySelectorAll(".sort-item");

    items.forEach((item) => {
      const el = item;

      // Drag & drop
      el.addEventListener("dragstart", () => {
        this._dragIndex = parseInt(el.dataset.index || "0", 10);
        el.classList.add("dragging");
      });

      el.addEventListener("dragend", () => {
        el.classList.remove("dragging");
        this._dragIndex = null;
      });

      el.addEventListener("dragover", (e) => {
        e.preventDefault();
        el.classList.add("drag-over");
      });

      el.addEventListener("dragleave", () => {
        el.classList.remove("drag-over");
      });

      el.addEventListener("drop", (e) => {
        e.preventDefault();
        el.classList.remove("drag-over");
        const dropIndex = parseInt(el.dataset.index || "0", 10);
        if (this._dragIndex !== null && this._dragIndex !== dropIndex) {
          this._moveItem(this._dragIndex, dropIndex);
        }
      });
    });

    // Arrow buttons
    this.root.querySelectorAll(".arrow-btn.up").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index || "0", 10);
        if (idx > 0) this._moveItem(idx, idx - 1);
      });
    });

    this.root.querySelectorAll(".arrow-btn.down").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index || "0", 10);
        if (idx < this._currentItems.length - 1) this._moveItem(idx, idx + 1);
      });
    });
  }

  _moveItem(from, to) {
    const item = this._currentItems.splice(from, 1)[0];
    this._currentItems.splice(to, 0, item);

    this.render();
    this._bindEvents();

    this.dispatchEvent(new CustomEvent("kids-reorder", {
      bubbles: true,
      detail: { items: [...this._currentItems] },
    }));

    // Animate the moved item
    const movedEl = this.root.querySelectorAll(".sort-item")[to];
    if (movedEl) {
      this.motionAnimate(movedEl, { scale: [0.95, 1] }, {
        type: "spring",
        stiffness: 400,
        damping: 20,
      });
    }
  }

  /** Public method to check answer against correct order */
  check() {
    const correctAttr = this.attr("correct", "[]");
    let correct = [];
    try {
      correct = JSON.parse(correctAttr);
    } catch {
      return false;
    }

    const isCorrect = JSON.stringify(this._currentItems) === JSON.stringify(correct);
    this.setAttribute("status", isCorrect ? "correct" : "incorrect");

    this.dispatchEvent(new CustomEvent("kids-check", {
      bubbles: true,
      detail: { correct: isCorrect, items: [...this._currentItems] },
    }));

    if (!isCorrect) {
      this.motionAnimate(".sort-list", { x: [0, -6, 6, -4, 4, 0] }, { duration: 0.4 });
    }

    return isCorrect;
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-sort-list", KidsSortList);
