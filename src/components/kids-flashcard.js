import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

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
 *   - Flip: 3D Y-axis rotation with spring physics via motion.dev
 *   - Entrance: spring pop
 *   - Hover: subtle lift with motion.dev
 */
export class KidsFlashcard extends KidsElement {
  static observedAttributes = ["flipped", "variant"];

  /** Current rotation state for the flip animation */
  _currentRotation = 0;

  /** Whether the flip animation is currently running */
  _isFlipping = false;

  template() {
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
          /* Remove CSS transition - we use motion.dev for animations */
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
          will-change: transform;
        }

        .front {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-md);
          border: 3px solid var(--kids-color-primary);
          /* Ensure front face is at rotation 0 */
          transform: rotateY(0deg);
        }

        .back {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
          /* Back face starts rotated 180 degrees */
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
      </style>

      <div class="card-container" part="card" tabindex="0" role="button" aria-label="Flashcard - click to flip" aria-pressed="false">
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

  onEnter() {
    const card = this.root.querySelector(".card-container");
    if (!card) return;

    // Entrance animation with spring physics
    animate(
      card,
      { scale: [0.85, 1], opacity: [0, 1] },
      { type: "spring", stiffness: 300, damping: 20 }
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
    
    // Set initial rotation state based on attribute
    this._currentRotation = this.boolAttr("flipped") ? 180 : 0;
    this._applyRotation(this._currentRotation);
  }

  _bindEvents() {
    const card = this.root.querySelector(".card-container");
    if (!card) return;

    // Click to flip
    card.addEventListener("click", () => this._flip());
    
    // Keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this._flip();
      }
    });

    // Hover effect using motion.dev
    card.addEventListener("mouseenter", () => {
      if (!this._isFlipping) {
        animate(
          card,
          { y: -4, scale: 1.02 },
          { type: "spring", stiffness: 400, damping: 25 }
        );
      }
    });

    card.addEventListener("mouseleave", () => {
      if (!this._isFlipping) {
        animate(
          card,
          { y: 0, scale: 1 },
          { type: "spring", stiffness: 400, damping: 25 }
        );
      }
    });
  }

  _flip() {
    if (this._isFlipping) return; // Prevent double-clicks during animation

    const card = this.root.querySelector(".card-container");
    if (!card) return;

    this._isFlipping = true;

    // Calculate target rotation
    const isCurrentlyFlipped = this._currentRotation >= 90;
    const targetRotation = isCurrentlyFlipped ? 0 : 180;

    // Update the attribute (triggers attributeChangedCallback, but we handle it properly)
    if (isCurrentlyFlipped) {
      this.removeAttribute("flipped");
    } else {
      this.setAttribute("flipped", "");
    }

    // Update aria-pressed for accessibility
    card.setAttribute("aria-pressed", String(!isCurrentlyFlipped));

    // Perform the flip animation using motion.dev with spring physics
    animate(
      card,
      { 
        rotateY: [this._currentRotation, targetRotation],
        // Add subtle scale effect during flip for extra visual appeal
        scale: [1, 0.95, 1]
      },
      { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.6
      }
    ).then(() => {
      this._isFlipping = false;
      this._currentRotation = targetRotation;
    });

    // Dispatch event
    this.dispatchEvent(new CustomEvent("kids-flip", {
      bubbles: true,
      detail: { flipped: !isCurrentlyFlipped },
    }));
  }

  _applyRotation(degrees) {
    const card = this.root.querySelector(".card-container");
    if (card) {
      card.style.transform = `rotateY(${degrees}deg)`;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Only re-render for variant changes, not for flip state changes
    // Flip state is handled by _flip() with motion.dev animations
    if (name === "variant") {
      this.render();
      this._bindEvents();
      // Restore rotation after re-render
      this._applyRotation(this._currentRotation);
    } else if (name === "flipped") {
      // Sync internal state with attribute if changed externally
      const shouldBeFlipped = newValue !== null;
      const isCurrentlyFlipped = this._currentRotation >= 90;
      
      if (shouldBeFlipped !== isCurrentlyFlipped && !this._isFlipping) {
        // External change (not from _flip), animate to match
        this._flip();
      }
    }
  }
}

customElements.define("kids-flashcard", KidsFlashcard);
