import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-progress> — A colourful animated progress bar.
 *
 * Attributes:
 *   value   — 0–100 (default: 0)
 *   variant — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *   size    — "sm" | "md" (default) | "lg"
 *   striped — boolean, adds animated diagonal stripes
 *   label   — boolean, shows percentage text inside the bar
 *
 * Animations:
 *   - Entrance: bar width springs from 0 to current value
 *   - Value changes: bar width springs to new value
 */
export class KidsProgress extends KidsElement {
  static observedAttributes = ["value", "variant", "size", "striped", "label"];

  template() {
    const value = Math.min(100, Math.max(0, Number(this.attr("value", "0")) || 0));
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
    const striped = this.boolAttr("striped");
    const label = this.boolAttr("label");

    return /* html */ `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .track {
          width: 100%;
          border-radius: var(--kids-radius-full);
          background: var(--kids-color-surface-alt);
          overflow: hidden;
          position: relative;
        }

        /* ---- Sizes ---- */
        .track.sm { height: 8px; }
        .track.md { height: 16px; }
        .track.lg { height: 24px; }

        .fill {
          height: 100%;
          border-radius: var(--kids-radius-full);
          width: 0%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: var(--kids-space-xs);
          will-change: width;
          position: relative;
          overflow: hidden;
        }

        /* ---- Variants ---- */
        .fill.primary { background: var(--kids-color-primary); }
        .fill.secondary { background: var(--kids-color-secondary); }
        .fill.accent { background: var(--kids-color-accent); }
        .fill.warning { background: var(--kids-color-warning); }
        .fill.info { background: var(--kids-color-info); }

        /* ---- Stripes ---- */
        .fill.striped::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(255, 255, 255, 0.2) 6px,
            rgba(255, 255, 255, 0.2) 12px
          );
          animation: stripe-move 0.8s linear infinite;
        }

        @keyframes stripe-move {
          0% { background-position: 0 0; }
          100% { background-position: 17px 0; }
        }

        /* ---- Label ---- */
        .label-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text-light);
          position: relative;
          z-index: 1;
          line-height: 1;
        }

        .fill.accent .label-text,
        .fill.warning .label-text {
          color: var(--kids-color-text);
        }
      </style>

      <div class="track ${size}" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100" part="track">
        <div class="fill ${variant} ${striped ? "striped" : ""}" part="fill">
          ${label ? `<span class="label-text">${value}%</span>` : ""}
        </div>
      </div>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    const value = Math.min(100, Math.max(0, Number(this.attr("value", "0")) || 0));
    animate(this.root.querySelector(".fill"), { width: [`0%`, `${value}%`] }, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
  }

  attributeChangedCallback() {
    this.render();
    const value = Math.min(100, Math.max(0, Number(this.attr("value", "0")) || 0));
    animate(this.root.querySelector(".fill"), { width: `${value}%` }, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
  }
}

customElements.define("kids-progress", KidsProgress);
