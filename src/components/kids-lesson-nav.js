import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-lesson-nav> — Navigation bar for stepping through lessons.
 *
 * Attributes:
 *   current    — current lesson number (1-based, default "1")
 *   total      — total number of lessons
 *   prev-label — label for previous button (default "Back")
 *   next-label — label for next button (default "Next")
 *   show-progress — boolean, show progress text
 *
 * Events:
 *   kids-prev — fired when previous is clicked
 *   kids-next — fired when next is clicked
 *
 * Animations:
 *   - Entrance: slides up with spring
 */
export class KidsLessonNav extends KidsElement {
  static observedAttributes = ["current", "total", "prev-label", "next-label", "show-progress"];

  template() {
    const current = parseInt(this.attr("current", "1"), 10);
    const total = parseInt(this.attr("total", "1"), 10);
    const prevLabel = this.attr("prev-label", "Back");
    const nextLabel = this.attr("next-label", "Next");
    const showProgress = this.boolAttr("show-progress");

    const isFirst = current <= 1;
    const isLast = current >= total;
    const percent = total > 1 ? ((current - 1) / (total - 1)) * 100 : 100;

    return /* html */ `
      <style>
        :host { display: block; }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) 0;
          will-change: transform, opacity;
        }

        .btn {
          border: none;
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          padding: var(--kids-space-sm) var(--kids-space-lg);
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          box-shadow: var(--kids-shadow-sm);
          transition: opacity 0.2s ease, transform 0.15s ease;
          outline: none;
        }

        .btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .btn:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        .btn.prev {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
        }

        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-xs);
        }

        .progress-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          opacity: 0.7;
        }

        .progress-bar {
          width: 100%;
          max-width: 200px;
          height: 6px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--kids-color-primary);
          border-radius: var(--kids-radius-full);
          transition: width 0.4s ease;
        }
      </style>

      <div class="nav" part="nav">
        <button class="btn prev" ${isFirst ? "disabled" : ""} part="prev-btn">
          ← ${prevLabel}
        </button>

        <div class="center">
          ${showProgress ? `<span class="progress-text">${current} of ${total}</span>` : ""}
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
        </div>

        <button class="btn next" ${isLast ? "disabled" : ""} part="next-btn">
          ${isLast ? "Finish ✓" : `${nextLabel} →`}
        </button>
      </div>
    `;
  }

  onEnter() {
    this.motionAnimate(".nav", { opacity: [0, 1], y: [15, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const prevBtn = this.root.querySelector(".prev");
    const nextBtn = this.root.querySelector(".next");

    prevBtn?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("kids-prev", { bubbles: true }));
    });

    nextBtn?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("kids-next", { bubbles: true }));
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-lesson-nav", KidsLessonNav);
