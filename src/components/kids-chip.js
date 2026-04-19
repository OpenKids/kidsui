import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-chip> — A small interactive tag/chip that can be removed.
 *
 * Attributes:
 *   variant    — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *   removable  — boolean, shows a close button
 *   selected   — boolean, adds a selected/active style
 *   size       — "sm" | "md" (default)
 *
 * Slots:
 *   (default) — chip label
 *
 * Events:
 *   kids-remove — fired when the close button is clicked
 *   kids-chip-click — fired when the chip body is clicked
 *
 * Animations:
 *   - Entrance: spring pop-in
 *   - Remove: shrinks + fades out
 *   - Hover: gentle lift
 */
export class KidsChip extends KidsElement {
  static observedAttributes = ["variant", "removable", "selected", "size"];

  template() {
    const variant = this.attr("variant", "primary");
    const removable = this.boolAttr("removable");
    const selected = this.boolAttr("selected");
    const size = this.attr("size", "md");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-xs);
          border-radius: var(--kids-radius-full);
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.02em;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          will-change: transform;
          border: 2px solid transparent;
          transition: box-shadow 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* ---- Sizes ---- */
        .chip.sm {
          padding: 2px var(--kids-space-sm);
          font-size: var(--kids-font-size-sm);
        }
        .chip.md {
          padding: var(--kids-space-xs) var(--kids-space-md);
          font-size: var(--kids-font-size-md);
        }

        /* ---- Variants (outline by default, filled when selected) ---- */
        .chip.primary   { background: var(--kids-alpha-primary-12); color: var(--kids-color-primary); border-color: var(--kids-color-primary); }
        .chip.secondary { background: var(--kids-alpha-secondary-12); color: var(--kids-color-secondary); border-color: var(--kids-color-secondary); }
        .chip.accent    { background: var(--kids-alpha-accent-12); color: var(--kids-color-text); border-color: var(--kids-color-accent); }
        .chip.warning   { background: var(--kids-alpha-warning-12); color: var(--kids-color-text); border-color: var(--kids-color-warning); }
        .chip.info      { background: var(--kids-alpha-info-12); color: var(--kids-color-text); border-color: var(--kids-color-info); }

        /* ---- Selected (filled) ---- */
        .chip.selected.primary   { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .chip.selected.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }
        .chip.selected.accent    { background: var(--kids-color-accent); color: var(--kids-color-text); }
        .chip.selected.warning   { background: var(--kids-color-warning); color: var(--kids-color-text); }
        .chip.selected.info      { background: var(--kids-color-info); color: var(--kids-color-text-light); }

        .close {
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          margin-left: 2px;
          font-size: 1em;
          line-height: 1;
          opacity: 0.6;
          color: inherit;
          display: flex;
          align-items: center;
          transition: opacity 0.15s ease;
        }
        .close:hover { opacity: 1; }

        /* ---- Focus ---- */
        .chip:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 2px;
        }
      </style>

      <span class="chip ${variant} ${size} ${selected ? "selected" : ""}" tabindex="0" part="chip">
        <slot></slot>
        ${removable ? `<button class="close" aria-label="Remove">&times;</button>` : ""}
      </span>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(this.root.querySelector(".chip"), { scale: [0, 1.1, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 15,
    });
  }

  connectedCallback() {
    super.connectedCallback();

    const chip = this.root.querySelector(".chip");
    if (!chip) return;

    chip.addEventListener("pointerenter", () => {
      animate(this.root.querySelector(".chip"), { scale: 1.06 }, {
        type: "spring", stiffness: 400, damping: 15,
      });
    });

    chip.addEventListener("pointerleave", () => {
      animate(this.root.querySelector(".chip"), { scale: 1 }, {
        type: "spring", stiffness: 400, damping: 15,
      });
    });

    chip.addEventListener("click", (e) => {
      // Ignore clicks on the close button
      if (e.target.classList.contains("close")) return;
      this.dispatchEvent(
        new CustomEvent("kids-chip-click", { bubbles: true, composed: true }),
      );
    });

    if (this.boolAttr("removable")) {
      const btn = this.root.querySelector(".close");
      btn?.addEventListener("click", () => this._remove());
    }
  }

  _remove() {
    animate(this.root.querySelector(".chip"), { scale: [1, 0], opacity: [1, 0] }, {
      duration: 0.2,
    });
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("kids-remove", { bubbles: true, composed: true }),
      );
      this.remove();
    }, 220);
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-chip", KidsChip);
