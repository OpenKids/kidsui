import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-radio> — A playful radio button.
 *
 * Attributes:
 *   name     — radio group name
 *   value    — the value this radio represents
 *   checked  — boolean, whether this radio is selected
 *   disabled — boolean
 *   variant  — "primary" (default) | "secondary" | "accent"
 *
 * Events:
 *   kids-radio-change — fired when selected, detail: { value: string, name: string }
 *
 * Animations:
 *   - Entrance: spring scale-in
 *   - Check: inner dot pops in with spring
 */
export class KidsRadio extends KidsElement {
  static observedAttributes = ["checked", "disabled", "variant", "name", "value"];

  _outer = null;

  template() {
    const checked = this.boolAttr("checked");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "primary");

    return /* html */ `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-sm);
          cursor: pointer;
          user-select: none;
        }
        :host([disabled]) { cursor: not-allowed; }

        .outer {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s ease;
          will-change: transform;
          flex-shrink: 0;
        }

        .outer.primary.checked   { border-color: var(--kids-color-primary); }
        .outer.secondary.checked { border-color: var(--kids-color-secondary); }
        .outer.accent.checked    { border-color: var(--kids-color-accent); }

        .inner {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transform: scale(0);
          will-change: transform;
        }

        .inner.primary   { background: var(--kids-color-primary); }
        .inner.secondary { background: var(--kids-color-secondary); }
        .inner.accent    { background: var(--kids-color-accent); }

        .outer.disabled {
          opacity: 0.5;
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }
        .label.disabled { opacity: 0.5; }

        /* ---- Focus ---- */
        :host(:focus-visible) .outer {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <div class="outer ${variant} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}" part="outer">
        <div class="inner ${variant}" part="inner"></div>
      </div>
      <span class="label ${disabled ? "disabled" : ""}"><slot></slot></span>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("tabindex") && !this.boolAttr("disabled")) {
      this.setAttribute("tabindex", "0");
    }
    this.setAttribute("role", "radio");

    this._outer = this.root.querySelector(".outer");

    this.addEventListener("click", () => this._select());
    this.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        this._select();
      }
    });
  }

  onEnter() {
    this.motionAnimate(".outer", { scale: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 18,
    });
    // Set initial inner dot state
    if (this.boolAttr("checked")) {
      const inner = this.root.querySelector(".inner");
      if (inner) inner.style.transform = "scale(1)";
    }
  }

  _select() {
    if (this.boolAttr("disabled") || this.boolAttr("checked")) return;

    // Uncheck siblings in the same named group
    const name = this.attr("name", "");
    if (name) {
      const parent = this.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll(`kids-radio[name="${name}"]`);
        siblings.forEach((radio) => {
          if (radio !== this && radio.hasAttribute("checked")) {
            radio.removeAttribute("checked");
          }
        });
      }
    }

    this.setAttribute("checked", "");

    this.dispatchEvent(
      new CustomEvent("kids-radio-change", {
        detail: { value: this.attr("value", ""), name: this.attr("name", "") },
        bubbles: true,
        composed: true,
      }),
    );
  }

  attributeChangedCallback(name) {
    if (!this._outer) return;

    if (name === "checked") {
      const checked = this.boolAttr("checked");
      this._outer.classList.toggle("checked", checked);
      this.setAttribute("aria-checked", String(checked));
      // Animate inner dot
      const inner = this.root.querySelector(".inner");
      if (inner) {
        this.motionAnimate(inner, { scale: checked ? 1 : 0 }, {
          type: "spring",
          stiffness: 500,
          damping: 18,
        });
      }
      return;
    }

    // For other attribute changes, full re-render is fine (rare)
    this.render();
    this._outer = this.root.querySelector(".outer");
  }
}

customElements.define("kids-radio", KidsRadio);
