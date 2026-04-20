import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-badge> — A small status/label badge with attention-grabbing animations.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *   animate  — "pulse" | "wiggle" | "bounce" | "none" (default: "none")
 *
 * Animations:
 *   - Entrance: pops in with spring
 *   - Continuous: optional pulse / wiggle / bounce via attribute
 */
export class KidsBadge extends KidsElement {
  static observedAttributes = ["variant", "animate"];

  /** Handle for any looping animation so we can cancel on disconnect */
  _loopAnimation;

  template() {
    const variant = this.attr("variant", "primary");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-xs);
          padding: var(--kids-space-xs) var(--kids-space-md);
          border-radius: var(--kids-radius-full);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.03em;
          white-space: nowrap;
          user-select: none;
          will-change: transform;
        }

        .badge.primary {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }
        .badge.secondary {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }
        .badge.accent {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
        }
        .badge.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
        }
        .badge.info {
          background: var(--kids-color-info);
          color: var(--kids-color-text-light);
        }
      </style>

      <span class="badge ${variant}" part="badge">
        <slot></slot>
      </span>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(
      this.root.querySelector(".badge"),
      { scale: [0, 1.15, 1] },
      { type: "spring", stiffness: 500, damping: 14 },
    );

    this.startLoop();
  }

  startLoop() {
    const mode = this.attr("animate", "none");
    if (mode === "none") return;

    const badge = this.root.querySelector(".badge");
    if (!badge) return;

    switch (mode) {
      case "pulse":
        this._loopAnimation = animate(
          badge,
          { scale: [1, 1.12, 1] },
          { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        );
        break;

      case "wiggle":
        this._loopAnimation = animate(
          badge,
          { rotate: [0, -6, 6, -4, 4, 0] },
          { duration: 0.6, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" },
        );
        break;

      case "bounce":
        this._loopAnimation = animate(
          badge,
          { y: [0, -8, 0] },
          { duration: 0.5, repeat: Infinity, repeatDelay: 2, type: "spring", stiffness: 400, damping: 10 },
        );
        break;
    }
  }

  disconnectedCallback() {
    this._loopAnimation?.cancel();
  }

  attributeChangedCallback() {
    this._loopAnimation?.cancel();
    this.render();
    this.startLoop();
  }
}

customElements.define("kids-badge", KidsBadge);
