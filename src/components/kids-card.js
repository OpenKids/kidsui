import { stagger } from "motion";
import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-card> — A rounded content card with entrance animation.
 *
 * Attributes:
 *   variant  — "default" | "outlined"
 *   hoverable — boolean, adds a lift effect on hover
 *
 * Slots:
 *   (default) — main content
 *   header    — card header area
 *   footer    — card footer area
 *
 * Animations:
 *   - Entrance: fades + slides up with spring
 *   - Hover (if hoverable): lifts up + shadow grows
 */
export class KidsCard extends KidsElement {
  static observedAttributes = ["variant", "hoverable"];

  template() {
    const variant = this.attr("variant", "default");
    const hoverable = this.boolAttr("hoverable");

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .card {
          border-radius: var(--kids-radius-lg);
          padding: var(--kids-space-lg);
          font-family: var(--kids-font-family);
          overflow: hidden;
          will-change: transform, opacity;
        }

        .card.default {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-md);
        }

        .card.outlined {
          background: var(--kids-color-surface);
          border: 3px solid var(--kids-color-primary);
          box-shadow: none;
        }

        .card.hoverable {
          cursor: pointer;
          transition: box-shadow 0.25s ease;
        }

        /* ---- Slots ---- */
        ::slotted([slot="header"]) {
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          margin-bottom: var(--kids-space-md);
          display: block;
        }

        .body {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }

        ::slotted([slot="footer"]) {
          margin-top: var(--kids-space-md);
          display: block;
        }
      </style>

      <div class="card ${variant} ${hoverable ? "hoverable" : ""}" part="card">
        <slot name="header"></slot>
        <div class="body">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    this.motionAnimate(
      ".card",
      { opacity: [0, 1], y: [30, 0] },
      { type: "spring", stiffness: 260, damping: 20, delay: stagger(0.08) },
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindHoverEvents();
  }

  _bindHoverEvents() {
    if (this.boolAttr("hoverable")) {
      const card = this.root.querySelector(".card");
      if (!card) return;

      card.addEventListener("pointerenter", () => {
        this.motionAnimate(".card", { scale: 1.03, y: -4 }, {
          type: "spring",
          stiffness: 400,
          damping: 20,
        });
      });

      card.addEventListener("pointerleave", () => {
        this.motionAnimate(".card", { scale: 1, y: 0 }, {
          type: "spring",
          stiffness: 400,
          damping: 20,
        });
      });
    }
  }

  attributeChangedCallback() {
    this.render();
    this._bindHoverEvents();
  }
}

customElements.define("kids-card", KidsCard);
