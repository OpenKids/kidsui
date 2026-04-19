import { KidsElement } from "../core/kids-element";

/**
 * <kids-select> — A playful dropdown select menu.
 *
 * Attributes:
 *   placeholder — placeholder text when nothing selected
 *   disabled    — boolean
 *   value       — currently selected value
 *   variant     — "default" | "outlined"
 *
 * Children:
 *   <option value="...">Label</option>
 *
 * Events:
 *   kids-change — fired when selection changes, detail: { value: string, label: string }
 *
 * Animations:
 *   - Entrance: spring scale-in
 *   - Dropdown open: slide down + fade
 */
export class KidsSelect extends KidsElement {
  static observedAttributes = ["placeholder", "disabled", "value", "variant"];

  private _open = false;
  private _options: { value: string; label: string }[] = [];

  private _onDocClick = (e: Event) => {
    if (!this.contains(e.target as Node) && this._open) {
      this._open = false;
      this.render();
      this._bindEvents();
    }
  };

  protected template(): string {
    const placeholder = this.attr("placeholder", "Pick one!");
    const disabled = this.boolAttr("disabled");
    const value = this.attr("value");
    const variant = this.attr("variant", "default");

    // Gather options from light DOM
    this._options = Array.from(this.querySelectorAll("option")).map((opt) => ({
      value: opt.value || opt.textContent || "",
      label: opt.textContent || opt.value || "",
    }));

    const selectedOption = this._options.find((o) => o.value === value);
    const displayText = selectedOption ? selectedOption.label : placeholder;

    const optionItems = this._options
      .map(
        (o) => `
        <div class="option ${o.value === value ? "selected" : ""}" data-value="${o.value}">
          ${o.label}
        </div>`,
      )
      .join("");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
          position: relative;
          min-width: 180px;
        }

        .trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          border-radius: var(--kids-radius-md);
          cursor: pointer;
          user-select: none;
          border: 3px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .trigger.default {
          background: var(--kids-color-surface-alt);
          box-shadow: var(--kids-shadow-sm);
        }

        .trigger.outlined {
          background: var(--kids-color-surface);
          border-color: var(--kids-color-primary);
        }

        .trigger.open,
        .trigger:focus-visible {
          border-color: var(--kids-color-primary);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-18);
        }

        .trigger.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .trigger.placeholder {
          color: var(--kids-color-text);
          opacity: 0.5;
        }

        .arrow {
          font-size: 0.7em;
          transition: transform 0.2s ease;
        }
        .arrow.open { transform: rotate(180deg); }

        .dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-lg);
          overflow: hidden;
          z-index: 100;
          display: none;
        }

        .dropdown.open { display: block; }

        .option {
          padding: var(--kids-space-sm) var(--kids-space-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .option:hover {
          background: var(--kids-color-surface-alt);
        }

        .option.selected {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          font-weight: var(--kids-font-weight-bold);
        }
      </style>

      <div
        class="trigger ${variant} ${disabled ? "disabled" : ""} ${!selectedOption ? "placeholder" : ""} ${this._open ? "open" : ""}"
        tabindex="${disabled ? "-1" : "0"}"
        role="combobox"
        aria-expanded="${this._open}"
        part="trigger"
      >
        <span class="display-text">${displayText}</span>
        <span class="arrow ${this._open ? "open" : ""}">▼</span>
      </div>

      <div class="dropdown ${this._open ? "open" : ""}" part="dropdown">
        ${optionItems}
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".trigger", { scale: [0.9, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 22,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._bindEvents();

    // Close on outside click
    document.addEventListener("click", this._onDocClick);
  }

  disconnectedCallback(): void {
    document.removeEventListener("click", this._onDocClick);
  }

  private _bindEvents(): void {
    const trigger = this.root.querySelector(".trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      if (this.boolAttr("disabled")) return;
      this._open = !this._open;
      this.render();
      this._bindEvents();

      if (this._open) {
        const dropdown = this.root.querySelector(".dropdown");
        if (dropdown) {
          this.motionAnimate(dropdown as Element, { opacity: [0, 1], y: [-8, 0] }, {
            duration: 0.2,
          });
        }
      }
    });

    trigger.addEventListener("keydown", (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter" || ke.key === " ") {
        ke.preventDefault();
        trigger.dispatchEvent(new Event("click"));
      } else if (ke.key === "Escape" && this._open) {
        this._open = false;
        this.render();
        this._bindEvents();
      }
    });

    // Option selection
    this.root.querySelectorAll(".option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const value = (opt as HTMLElement).dataset.value || "";
        this.setAttribute("value", value);
        this._open = false;
        this.render();
        this._bindEvents();

        const label = this._options.find((o) => o.value === value)?.label || "";
        this.dispatchEvent(new CustomEvent("kids-change", {
          bubbles: true,
          composed: true,
          detail: { value, label },
        }));
      });
    });
  }

  attributeChangedCallback(): void {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-select", KidsSelect);
