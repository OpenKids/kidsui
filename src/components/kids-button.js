import { KidsElement } from "../core/kids-element.js";
import { animate, hover, press } from "motion";

/**
 * <kids-button> — A playful, bouncy button.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "accent" | "warning"
 *   size     — "sm" | "md" (default) | "lg"
 *   disabled — boolean
 *
 * Animations:
 *   - Entrance: pops in with spring scale
 *   - Hover: gentle scale-up + shadow lift
 *   - Press: squishes down with spring
 *   - Focus: ring pulse
 */
export class KidsButton extends KidsElement {
  static observedAttributes = ["variant", "size", "disabled"];

  /* ---- template ---- */

  template() {
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
    const disabled = this.boolAttr("disabled");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
        }

        button {
          /* Reset */
          border: none;
          cursor: pointer;
          outline: none;
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.02em;
          border-radius: var(--kids-radius-full);
          transition: box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;

          /* Default (md) sizing */
          padding: var(--kids-space-sm) var(--kids-space-lg);
          font-size: var(--kids-font-size-md);
        }

        /* ---- Sizes ---- */
        button.sm {
          padding: var(--kids-space-xs) var(--kids-space-md);
          font-size: var(--kids-font-size-sm);
        }
        button.lg {
          padding: var(--kids-space-md) var(--kids-space-xl);
          font-size: var(--kids-font-size-lg);
        }

        /* ---- Variants ---- */
        button.primary {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }
        button.secondary {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }
        button.accent {
          background: var(--kids-color-accent);
          color: var(--kids-color-text);
          box-shadow: var(--kids-shadow-md);
        }
        button.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
          box-shadow: var(--kids-shadow-md);
        }

        /* ---- Disabled ---- */
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ring ---- */
        button:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <button
        class="${variant} ${size}"
        ${disabled ? "disabled" : ""}
        part="button"
      >
        <slot></slot>
      </button>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(this.root.querySelector("button"), { scale: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 18,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const btn = this.root.querySelector("button");
    if (!btn) return;

    // Hover: gentle scale-up on enter, return to normal on leave
    hover(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 1.07 }, {
        type: "spring",
        stiffness: 500,
        damping: 15,
      });

      return () => {
        animate(element, { scale: 1 }, {
          type: "spring",
          stiffness: 500,
          damping: 15,
        });
      };
    });

    // Press: squish down on press, return to hover scale on release
    press(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 0.92 }, {
        type: "spring",
        stiffness: 600,
        damping: 20,
      });

      return () => {
        animate(element, { scale: 1.07 }, {
          type: "spring",
          stiffness: 500,
          damping: 12,
        });
      };
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-button", KidsButton);
