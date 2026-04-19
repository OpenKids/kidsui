import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-accordion> — A playful collapsible accordion panel.
 *
 * Usage:
 *   <kids-accordion>
 *     <kids-accordion-item label="Question 1">Answer 1</kids-accordion-item>
 *     <kids-accordion-item label="Question 2" open>Answer 2</kids-accordion-item>
 *   </kids-accordion>
 *
 * Attributes:
 *   multiple — boolean, allow multiple items open at once (default: single mode)
 *
 * Events:
 *   kids-toggle — fired when an item toggles, detail: { index: number, open: boolean }
 */
export class KidsAccordion extends KidsElement {
  static observedAttributes = ["multiple"];

  template() {
    return /* html */ `
      <style>
        :host { display: block; }

        .accordion {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="accordion" role="tablist" part="accordion">
        <slot></slot>
      </div>
    `;
  }

  onEnter() {
    this.motionAnimate(".accordion", { opacity: [0, 1], y: [10, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("kids-accordion-toggle", (e) => {
      const item = e.target;
      if (!this.boolAttr("multiple")) {
        // Close all other items
        Array.from(this.querySelectorAll("kids-accordion-item")).forEach((child) => {
          if (child !== item && child.hasAttribute("open")) {
            child.removeAttribute("open");
          }
        });
      }
    });
  }

  attributeChangedCallback() {
    this.render();
  }
}

/**
 * <kids-accordion-item> — A single accordion panel.
 *
 * Attributes:
 *   label — header text
 *   open  — boolean, whether expanded
 *
 * Animations:
 *   - Expand/collapse with smooth height + fade
 */
export class KidsAccordionItem extends KidsElement {
  static observedAttributes = ["label", "open"];

  template() {
    const label = this.attr("label", "");
    const isOpen = this.boolAttr("open");

    return /* html */ `
      <style>
        :host { display: block; }

        .item {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-md);
          box-shadow: var(--kids-shadow-sm);
          overflow: hidden;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--kids-space-md) var(--kids-space-lg);
          cursor: pointer;
          user-select: none;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          outline: none;
        }

        .header:hover {
          background: var(--kids-color-surface-alt);
        }

        .header:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: -3px;
        }

        .chevron {
          font-size: 0.8em;
          transition: transform 0.25s ease;
        }
        .chevron.open { transform: rotate(180deg); }

        .content {
          padding: 0 var(--kids-space-lg) var(--kids-space-lg);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          display: none;
        }

        .content.open {
          display: block;
        }
      </style>

      <div class="item" part="item">
        <button class="header" role="tab" aria-expanded="${isOpen}" part="header">
          <span>${label}</span>
          <span class="chevron ${isOpen ? "open" : ""}">▼</span>
        </button>
        <div class="content ${isOpen ? "open" : ""}" role="tabpanel" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const header = this.root.querySelector(".header");
    header?.addEventListener("click", () => this._toggle());
    header?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this._toggle();
      }
    });
  }

  _toggle() {
    const isOpen = this.boolAttr("open");
    if (isOpen) {
      this.removeAttribute("open");
    } else {
      this.setAttribute("open", "");
    }

    this.dispatchEvent(new CustomEvent("kids-accordion-toggle", {
      bubbles: true,
      detail: { open: !isOpen },
    }));
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();

    if (this.boolAttr("open")) {
      const content = this.root.querySelector(".content");
      if (content) {
        this.motionAnimate(content, { opacity: [0, 1] }, { duration: 0.2 });
      }
    }
  }
}

customElements.define("kids-accordion", KidsAccordion);
customElements.define("kids-accordion-item", KidsAccordionItem);
