import { KidsElement } from "../core/kids-element";

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

  protected template(): string {
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

  protected onEnter(): void {
    this.motionAnimate("button", { scale: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 18,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._bindEvents();
  }

  private _bindEvents(): void {
    const btn = this.root.querySelector("button");
    if (!btn) return;

    btn.addEventListener("pointerenter", () => {
      if (this.boolAttr("disabled")) return;
      this.motionAnimate("button", { scale: 1.07 }, {
        type: "spring",
        stiffness: 500,
        damping: 15,
      });
    });

    btn.addEventListener("pointerleave", () => {
      this.motionAnimate("button", { scale: 1 }, {
        type: "spring",
        stiffness: 500,
        damping: 15,
      });
    });

    btn.addEventListener("pointerdown", () => {
      if (this.boolAttr("disabled")) return;
      this.motionAnimate("button", { scale: 0.92 }, {
        type: "spring",
        stiffness: 600,
        damping: 20,
      });
    });

    btn.addEventListener("pointerup", () => {
      this.motionAnimate("button", { scale: 1.07 }, {
        type: "spring",
        stiffness: 500,
        damping: 12,
      });
    });
  }

  attributeChangedCallback(): void {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-button", KidsButton);
