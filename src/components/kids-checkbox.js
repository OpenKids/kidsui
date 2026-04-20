import { KidsElement } from "../core/kids-element.js";
import { animate, press } from "motion";

/**
 * <kids-checkbox> — A playful animated checkbox.
 *
 * Attributes:
 *   checked  — boolean
 *   disabled — boolean
 *   variant  — "primary" (default) | "secondary" | "accent"
 *
 * Events:
 *   kids-checkbox-change — fired on toggle, detail: { checked: boolean }
 *
 * Animations:
 *   - Entrance: spring scale-in
 *   - Check: box fills + checkmark draws in with spring
 *   - Uncheck: box empties + checkmark shrinks out
 */
export class KidsCheckbox extends KidsElement {
  static observedAttributes = ["checked", "disabled", "variant"];

  _box = null;

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

        .box {
          width: 24px;
          height: 24px;
          border-radius: var(--kids-radius-sm);
          border: 3px solid #D1D5DB;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease;
          will-change: transform;
          flex-shrink: 0;
          background: var(--kids-color-surface);
        }

        .box.checked.primary   { background: var(--kids-color-primary); border-color: var(--kids-color-primary); }
        .box.checked.secondary { background: var(--kids-color-secondary); border-color: var(--kids-color-secondary); }
        .box.checked.accent    { background: var(--kids-color-accent); border-color: var(--kids-color-accent); }

        .box.disabled {
          opacity: 0.5;
        }

        .check {
          width: 14px;
          height: 14px;
          will-change: transform;
          transform: scale(0);
        }

        .check svg {
          width: 100%;
          height: 100%;
        }

        .check svg path {
          fill: none;
          stroke: var(--kids-color-text-light);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .box.checked.accent .check svg path {
          stroke: var(--kids-color-text-light);
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }
        .label.disabled { opacity: 0.5; }

        /* ---- Focus ---- */
        :host(:focus-visible) .box {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }
      </style>

      <div class="box ${variant} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}" part="box">
        <div class="check">
          <svg viewBox="0 0 16 16">
            <path d="M3 8.5 L6.5 12 L13 4"></path>
          </svg>
        </div>
      </div>
      <span class="label ${disabled ? "disabled" : ""}"><slot></slot></span>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("tabindex") && !this.boolAttr("disabled")) {
      this.setAttribute("tabindex", "0");
    }
    this.setAttribute("role", "checkbox");

    this._box = this.root.querySelector(".box");

    // Press: squish effect on the box
    press(this, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(this._box, { scale: 0.85 }, {
        type: "spring",
        stiffness: 500,
        damping: 20,
      });

      return () => {
        animate(this._box, { scale: 1 }, {
          type: "spring",
          stiffness: 400,
          damping: 15,
        });
      };
    });

    this.addEventListener("click", () => this._toggle());
    this.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        this._toggle();
      }
    });
  }

  onEnter() {
    animate(this.root.querySelector(".box"), { scale: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 18,
    });
    // Set initial checkmark state
    if (this.boolAttr("checked")) {
      const check = this.root.querySelector(".check");
      if (check) check.style.transform = "scale(1)";
    }
  }

  _toggle() {
    if (this.boolAttr("disabled")) return;

    const next = !this.boolAttr("checked");
    if (next) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }

    this.dispatchEvent(
      new CustomEvent("kids-checkbox-change", {
        detail: { checked: next },
        bubbles: true,
        composed: true,
      }),
    );
  }

  attributeChangedCallback(name) {
    if (!this._box) return;

    if (name === "checked") {
      const checked = this.boolAttr("checked");
      this._box.classList.toggle("checked", checked);
      this.setAttribute("aria-checked", String(checked));

      // Update variant class on box
      const variant = this.attr("variant", "primary");
      for (const v of ["primary", "secondary", "accent"]) {
        this._box.classList.toggle(v, v === variant);
      }

      // Animate checkmark
      const check = this.root.querySelector(".check");
      if (check) {
        animate(check, { scale: checked ? 1 : 0 }, {
          type: "spring",
          stiffness: 500,
          damping: checked ? 15 : 22,
        });
      }

      // Bounce the box on check
      if (checked) {
        animate(this._box, { scale: [1, 1.15, 1] }, {
          type: "spring",
          stiffness: 400,
          damping: 14,
        });
      }
      return;
    }

    // For other attribute changes, full re-render
    this.render();
    this._box = this.root.querySelector(".box");
  }
}

customElements.define("kids-checkbox", KidsCheckbox);
