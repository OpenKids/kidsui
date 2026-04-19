import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-choice-group> — Manages a group of <kids-choice-card> elements for single or multi-select.
 *
 * Attributes:
 *   mode      — "single" (default) | "multiple"
 *   value     — selected value(s), comma-separated for multiple
 *   disabled  — boolean
 *   direction — "vertical" (default) | "horizontal" | "grid"
 *   columns   — number of grid columns (default "2", only for direction="grid")
 *
 * Events:
 *   kids-change — fired when selection changes, detail: { value: string | string[], selected: string[] }
 *
 * Animations:
 *   - Children stagger in on entrance
 */
export class KidsChoiceGroup extends KidsElement {
  static observedAttributes = ["mode", "value", "disabled", "direction", "columns"];

  template() {
    const direction = this.attr("direction", "vertical");
    const columns = this.attr("columns", "2");

    return /* html */ `
      <style>
        :host { display: block; }

        .group {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .group.horizontal {
          flex-direction: row;
          flex-wrap: wrap;
        }

        .group.horizontal ::slotted(*) {
          flex: 1;
          min-width: 120px;
        }

        .group.grid {
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="group ${direction}" role="listbox" aria-multiselectable="${this.attr("mode", "single") === "multiple"}" part="group">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._syncSelection();
    this._bindEvents();
  }

  onEnter() {
    const items = Array.from(this.querySelectorAll("kids-choice-card"));
    items.forEach((item, i) => {
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transition = "none";
      }, 60 + i * 60);
    });
  }

  _syncSelection() {
    const value = this.attr("value");
    const selected = value ? value.split(",").map((v) => v.trim()) : [];
    const disabled = this.boolAttr("disabled");

    Array.from(this.querySelectorAll("kids-choice-card")).forEach((card) => {
      const cardValue = card.getAttribute("value") || "";
      if (selected.includes(cardValue)) {
        card.setAttribute("selected", "");
      } else {
        card.removeAttribute("selected");
      }
      if (disabled) {
        card.setAttribute("disabled", "");
      }
    });
  }

  _bindEvents() {
    this.addEventListener("kids-select", (e) => {
      e.stopPropagation();
      if (this.boolAttr("disabled")) return;

      const selectedValue = e.detail.value;
      const mode = this.attr("mode", "single");
      const currentValue = this.attr("value");
      const selected = currentValue ? currentValue.split(",").map((v) => v.trim()) : [];

      if (mode === "single") {
        this.setAttribute("value", selectedValue);
      } else {
        const idx = selected.indexOf(selectedValue);
        if (idx >= 0) {
          selected.splice(idx, 1);
        } else {
          selected.push(selectedValue);
        }
        this.setAttribute("value", selected.join(","));
      }

      this._syncSelection();

      const newSelected = this.attr("value").split(",").map((v) => v.trim()).filter(Boolean);
      this.dispatchEvent(new CustomEvent("kids-change", {
        bubbles: true,
        detail: {
          value: mode === "single" ? selectedValue : newSelected,
          selected: newSelected,
        },
      }));
    });
  }

  attributeChangedCallback() {
    this.render();
    this._syncSelection();
  }
}

customElements.define("kids-choice-group", KidsChoiceGroup);
