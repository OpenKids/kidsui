import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-tabs> — A playful tabbed navigation component.
 *
 * Usage:
 *   <kids-tabs active="0">
 *     <kids-tab label="Tab 1">Content 1</kids-tab>
 *     <kids-tab label="Tab 2">Content 2</kids-tab>
 *   </kids-tabs>
 *
 * Attributes:
 *   active   — index of the active tab (default "0")
 *   variant  — "default" | "pills" (default "default")
 *
 * Events:
 *   kids-tab-change — fired when tab changes, detail: { index: number, label: string }
 *
 * Animations:
 *   - Tab indicator slides with spring physics
 *   - Panel fades in on switch
 */
export class KidsTabs extends KidsElement {
  static observedAttributes = ["active", "variant"];

  template() {
    const active = parseInt(this.attr("active", "0"), 10);
    const variant = this.attr("variant", "default");

    const tabs = Array.from(this.querySelectorAll("kids-tab"));
    const tabHeaders = tabs
      .map(
        (tab, i) => `
        <button
          class="tab-btn ${i === active ? "active" : ""}"
          data-index="${i}"
          role="tab"
          aria-selected="${i === active}"
        >
          ${tab.getAttribute("label") || `Tab ${i + 1}`}
        </button>`,
      )
      .join("");

    return /* html */ `
      <style>
        :host { display: block; }

        .tab-header {
          display: flex;
          gap: var(--kids-space-xs);
          border-bottom: 3px solid var(--kids-color-surface-alt);
          margin-bottom: var(--kids-space-md);
          position: relative;
        }

        .tab-header.pills {
          border-bottom: none;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          padding: var(--kids-space-xs);
        }

        .tab-btn {
          border: none;
          background: transparent;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          padding: var(--kids-space-sm) var(--kids-space-md);
          cursor: pointer;
          position: relative;
          opacity: 0.6;
          transition: opacity 0.2s ease;
          border-radius: 0;
          outline: none;
        }

        .pills .tab-btn {
          border-radius: var(--kids-radius-full);
        }

        .tab-btn:hover { opacity: 0.85; }

        .tab-btn.active {
          opacity: 1;
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-primary);
        }

        .pills .tab-btn.active {
          background: var(--kids-color-surface);
          box-shadow: var(--kids-shadow-sm);
          color: var(--kids-color-primary);
        }

        .tab-btn:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 2px;
        }

        /* Underline indicator for default variant */
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--kids-color-primary);
          border-radius: var(--kids-radius-full);
        }

        .pills .tab-btn.active::after { display: none; }

        .tab-panel {
          will-change: opacity;
        }
      </style>

      <div class="tab-header ${variant}" role="tablist" part="header">
        ${tabHeaders}
      </div>
      <div class="tab-panel" role="tabpanel" part="panel">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._updatePanels();
    this._bindEvents();
  }

  onEnter() {
    animate(this.root.querySelector(".tab-header"), { opacity: [0, 1], y: [-10, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  _updatePanels() {
    const active = parseInt(this.attr("active", "0"), 10);
    const tabs = Array.from(this.querySelectorAll("kids-tab"));
    tabs.forEach((tab, i) => {
      tab.style.display = i === active ? "block" : "none";
    });
  }

  _bindEvents() {
    this.root.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index || "0", 10);
        this.setAttribute("active", String(index));
      });
    });
  }

  attributeChangedCallback(name) {
    this.render();
    this._updatePanels();
    this._bindEvents();

    if (name === "active") {
      const index = parseInt(this.attr("active", "0"), 10);
      const tabs = Array.from(this.querySelectorAll("kids-tab"));
      const label = tabs[index]?.getAttribute("label") || "";

      animate(this.root.querySelector(".tab-panel"), { opacity: [0, 1] }, { duration: 0.2 });

      this.dispatchEvent(new CustomEvent("kids-tab-change", {
        bubbles: true,
        detail: { index, label },
      }));
    }
  }
}

/**
 * <kids-tab> — A single tab panel used inside <kids-tabs>.
 *
 * Attributes:
 *   label — tab header text
 */
export class KidsTab extends HTMLElement {
  connectedCallback() {
    this.style.display = "none";
  }
}

customElements.define("kids-tabs", KidsTabs);
customElements.define("kids-tab", KidsTab);
