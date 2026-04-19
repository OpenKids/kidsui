import { KidsElement } from "../core/kids-element.js";
import { animate, hover } from "motion";

/**
 * <kids-textarea> — A playful multi-line text input.
 *
 * Attributes:
 *   placeholder — placeholder text
 *   rows        — number of visible rows (default 4)
 *   disabled    — boolean
 *   value       — initial text content
 *   variant     — "default" | "outlined" (default "default")
 *
 * Events:
 *   kids-input  — fired on input, detail: { value: string }
 *   kids-change — fired on change, detail: { value: string }
 *
 * Animations:
 *   - Entrance: fade in + slide up
 *   - Focus: border glow
 */
export class KidsTextarea extends KidsElement {
  static observedAttributes = ["placeholder", "rows", "disabled", "value", "variant"];

  template() {
    const placeholder = this.attr("placeholder", "Type something fun...");
    const rows = this.attr("rows", "4");
    const disabled = this.boolAttr("disabled");
    const value = this.attr("value");
    const variant = this.attr("variant", "default");

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        textarea {
          width: 100%;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          border-radius: var(--kids-radius-md);
          padding: var(--kids-space-md);
          border: 3px solid transparent;
          outline: none;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        textarea.default {
          background: var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
        }

        textarea.outlined {
          background: var(--kids-color-surface);
          border-color: var(--kids-color-primary);
        }

        textarea:focus {
          border-color: var(--kids-color-primary);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-18);
        }

        textarea:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        textarea::placeholder {
          color: var(--kids-color-text);
          opacity: 0.4;
        }
      </style>

      <textarea
        class="${variant}"
        placeholder="${placeholder}"
        rows="${rows}"
        ${disabled ? "disabled" : ""}
        part="textarea"
      >${value}</textarea>
    `;
  }

  onEnter() {
    animate(this.root.querySelector("textarea"), { opacity: [0, 1], y: [12, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }

  _bindEvents() {
    const textarea = this.root.querySelector("textarea");
    if (!textarea) return;

    // Hover: subtle lift effect
    hover(textarea, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { y: -2 }, {
        type: "spring",
        stiffness: 400,
        damping: 20,
      });

      return () => {
        animate(element, { y: 0 }, {
          type: "spring",
          stiffness: 400,
          damping: 20,
        });
      };
    });

    textarea.addEventListener("input", () => {
      this.dispatchEvent(new CustomEvent("kids-input", {
        bubbles: true,
        composed: true,
        detail: { value: textarea.value },
      }));
    });

    textarea.addEventListener("change", () => {
      this.dispatchEvent(new CustomEvent("kids-change", {
        bubbles: true,
        composed: true,
        detail: { value: textarea.value },
      }));
    });
  }
}

customElements.define("kids-textarea", KidsTextarea);
