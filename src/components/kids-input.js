import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-input> — A playful text input with animated focus states.
 *
 * Attributes:
 *   placeholder — placeholder text
 *   value       — current value
 *   type        — "text" (default) | "password" | "number" | "email"
 *   disabled    — boolean
 *   variant     — "default" (default) | "outlined"
 *   size        — "sm" | "md" (default) | "lg"
 *
 * Events:
 *   kids-input  — fired on input, detail: { value: string }
 *   kids-change — fired on change, detail: { value: string }
 *
 * Animations:
 *   - Entrance: spring slide-up + fade
 *   - Focus: border color + gentle scale-up
 */
export class KidsInput extends KidsElement {
  static observedAttributes = ["placeholder", "value", "type", "disabled", "variant", "size"];

  template() {
    const placeholder = this.attr("placeholder", "");
    const value = this.attr("value", "");
    const type = this.attr("type", "text");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "default");
    const size = this.attr("size", "md");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
          min-width: 200px;
        }

        .wrapper {
          position: relative;
          will-change: transform, opacity;
        }

        input {
          width: 100%;
          border: 3px solid transparent;
          outline: none;
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-sm);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* ---- Sizes ---- */
        input.sm {
          padding: var(--kids-space-xs) var(--kids-space-sm);
          font-size: var(--kids-font-size-sm);
        }
        input.md {
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-size: var(--kids-font-size-md);
        }
        input.lg {
          padding: var(--kids-space-md) var(--kids-space-lg);
          font-size: var(--kids-font-size-lg);
        }

        /* ---- Variants ---- */
        input.outlined {
          border-color: var(--kids-color-primary);
          box-shadow: none;
        }

        /* ---- Focus ---- */
        input:focus {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-md);
        }

        input.outlined:focus {
          border-color: var(--kids-color-secondary);
          box-shadow: 0 0 0 3px var(--kids-alpha-primary-15);
        }

        /* ---- Disabled ---- */
        input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Placeholder ---- */
        input::placeholder {
          color: var(--kids-color-text);
          opacity: 0.4;
          font-weight: var(--kids-font-weight-normal);
        }
      </style>

      <div class="wrapper">
        <input
          class="${variant} ${size}"
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          ${disabled ? "disabled" : ""}
          part="input"
        />
      </div>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(this.root.querySelector(".wrapper"), { opacity: [0, 1], y: [12, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const input = this.root.querySelector("input");
    if (!input) return;

    input.addEventListener("focus", () => {
      if (this.boolAttr("disabled")) return;
      animate(this.root.querySelector(".wrapper"), { scale: 1.02 }, {
        type: "spring",
        stiffness: 400,
        damping: 15,
      });
    });

    input.addEventListener("blur", () => {
      animate(this.root.querySelector(".wrapper"), { scale: 1 }, {
        type: "spring",
        stiffness: 400,
        damping: 15,
      });
    });

    input.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("kids-input", {
          detail: { value: input.value },
          bubbles: true,
          composed: true,
        }),
      );
    });

    input.addEventListener("change", () => {
      this.dispatchEvent(
        new CustomEvent("kids-change", {
          detail: { value: input.value },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-input", KidsInput);
