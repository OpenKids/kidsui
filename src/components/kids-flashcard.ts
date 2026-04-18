import { KidsElement } from "../core/kids-element";

/**
 * <kids-flashcard> — A flippable flashcard for study/review.
 *
 * Attributes:
 *   flipped  — boolean, whether showing the back side
 *   variant  — "default" | "compact" (default "default")
 *
 * Slots:
 *   front — front face content (question/term)
 *   back  — back face content (answer/definition)
 *
 * Events:
 *   kids-flip — fired when the card flips, detail: { flipped: boolean }
 *
 * Animations:
 *   - Flip: 3D Y-axis rotation with spring
 *   - Entrance: spring pop
 *   - Hover: subtle lift
 */
export class KidsFlashcard extends KidsElement {
  static observedAttributes = ["flipped", "variant"];

  protected template(): string {
    const flipped = this.boolAttr("flipped");
    const variant = this.attr("variant", "default");

    return /* html */ `
      <style>
        :host {
          display: block;
          perspective: 1000px;
        }

        .card-container {
          position: relative;
          cursor: pointer;
          user-select: none;
          min-height: ${variant === "compact" ? "150px" : "220px"};
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-container.flipped {
          transform: rotateY(180deg);
        }

        .face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--kids-space-lg);
          border-radius: var(--kids-radius-lg);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-lg);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          text-align: center;
          line-height: 1.4;
        }

        .front {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-md);
          border: 3px solid var(--kids-color-primary);
        }

        .back {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
          transform: rotateY(180deg);
        }

        .flip-hint {
          position: absolute;
          bottom: var(--kids-space-sm);
          right: var(--kids-space-md);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.5;
        }

        .card-container:hover {
          filter: brightness(1.02);
        }
      </style>

      <div class="card-container ${flipped ? "flipped" : ""}" part="card" tabindex="0" role="button" aria-label="Flashcard - click to flip">
        <div class="face front">
          <slot name="front"></slot>
          <span class="flip-hint">tap to flip</span>
        </div>
        <div class="face back">
          <slot name="back"></slot>
        </div>
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".card-container", { scale: [0.85, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 350,
      damping: 20,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._bindEvents();
  }

  private _bindEvents(): void {
    const card = this.root.querySelector(".card-container");
    if (!card) return;

    card.addEventListener("click", () => this._flip());
    card.addEventListener("keydown", (e) => {
      if ((e as KeyboardEvent).key === "Enter" || (e as KeyboardEvent).key === " ") {
        e.preventDefault();
        this._flip();
      }
    });
  }

  private _flip(): void {
    const flipped = this.boolAttr("flipped");
    if (flipped) {
      this.removeAttribute("flipped");
    } else {
      this.setAttribute("flipped", "");
    }

    this.dispatchEvent(new CustomEvent("kids-flip", {
      bubbles: true,
      detail: { flipped: !flipped },
    }));
  }

  attributeChangedCallback(): void {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-flashcard", KidsFlashcard);
