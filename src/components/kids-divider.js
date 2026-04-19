import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-divider> — A playful separator with optional label.
 *
 * Attributes:
 *   variant  — "solid" (default) | "dashed" | "dotted" | "wavy"
 *   color    — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *   spacing  — "sm" | "md" (default) | "lg"
 *
 * Slots:
 *   (default) — optional center label
 *
 * Animations:
 *   - Entrance: line draws in from center outward
 */
export class KidsDivider extends KidsElement {
  static observedAttributes = ["variant", "color", "spacing"];

  template() {
    const variant = this.attr("variant", "solid");
    const color = this.attr("color", "primary");
    const spacing = this.attr("spacing", "md");

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          will-change: transform, opacity;
        }

        /* ---- Spacing ---- */
        .divider.sm { margin: var(--kids-space-sm) 0; }
        .divider.md { margin: var(--kids-space-md) 0; }
        .divider.lg { margin: var(--kids-space-xl) 0; }

        .line {
          flex: 1;
          height: 3px;
          border: none;
          border-radius: var(--kids-radius-full);
        }

        /* ---- Variants ---- */
        .line.solid { background: currentColor; }
        .line.dashed {
          background: repeating-linear-gradient(
            90deg,
            currentColor 0,
            currentColor 8px,
            transparent 8px,
            transparent 14px
          );
        }
        .line.dotted {
          background: repeating-linear-gradient(
            90deg,
            currentColor 0,
            currentColor 4px,
            transparent 4px,
            transparent 10px
          );
        }
        .line.wavy {
          height: 8px;
          background: none;
          position: relative;
          overflow: hidden;
        }
        .line.wavy::after {
          content: "";
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M0 4 Q5 0 10 4 Q15 8 20 4' fill='none' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E") repeat-x;
        }

        /* ---- Colors ---- */
        .divider.primary { color: var(--kids-color-primary); }
        .divider.secondary { color: var(--kids-color-secondary); }
        .divider.accent { color: var(--kids-color-accent); }
        .divider.warning { color: var(--kids-color-warning); }
        .divider.info { color: var(--kids-color-info); }

        /* ---- Label ---- */
        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          white-space: nowrap;
        }
      </style>

      <div class="divider ${color} ${spacing}" role="separator" part="divider">
        <div class="line ${variant}"></div>
        <span class="label"><slot></slot></span>
        <div class="line ${variant}"></div>
      </div>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(this.root.querySelector(".divider"), { opacity: [0, 1], scaleX: [0, 1] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-divider", KidsDivider);
