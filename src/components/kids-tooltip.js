import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-tooltip> — A playful tooltip that appears on hover.
 *
 * Attributes:
 *   text      — the tooltip text to display
 *   position  — "top" (default) | "bottom" | "left" | "right"
 *   variant   — "dark" (default) | "primary" | "secondary"
 *
 * Slots:
 *   (default) — the trigger element
 *
 * Animations:
 *   - Show: spring pop-in + fade from the relevant direction
 *   - Hide: fade out
 */
export class KidsTooltip extends KidsElement {
  static observedAttributes = ["text", "position", "variant"];

  template() {
    const text = this.attr("text", "");
    const position = this.attr("position", "top");
    const variant = this.attr("variant", "dark");

    return /* html */ `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        .trigger {
          display: inline-block;
        }

        .tip {
          position: absolute;
          z-index: 1000;
          padding: var(--kids-space-xs) var(--kids-space-sm);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          will-change: transform, opacity;
        }

        /* ---- Variants ---- */
        .tip.dark  { background: var(--kids-color-text); color: var(--kids-color-text-light); }
        .tip.primary { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .tip.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }

        /* ---- Positions ---- */
        .tip.top {
          bottom: calc(100% + 8px);
          left: 50%;
        }
        .tip.bottom {
          top: calc(100% + 8px);
          left: 50%;
        }
        .tip.left {
          right: calc(100% + 8px);
          top: 50%;
        }
        .tip.right {
          left: calc(100% + 8px);
          top: 50%;
        }

        /* ---- Arrow ---- */
        .tip::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: inherit;
          transform: rotate(45deg);
        }
        .tip.top::after    { bottom: -4px; left: calc(50% - 4px); }
        .tip.bottom::after { top: -4px; left: calc(50% - 4px); }
        .tip.left::after   { right: -4px; top: calc(50% - 4px); }
        .tip.right::after  { left: -4px; top: calc(50% - 4px); }
      </style>

      <div class="trigger" part="trigger">
        <slot></slot>
      </div>
      <div class="tip ${position} ${variant}" part="tip">${text}</div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    const trigger = this.root.querySelector(".trigger");
    if (!trigger) return;

    trigger.addEventListener("pointerenter", () => this._show());
    trigger.addEventListener("pointerleave", () => this._hide());
    trigger.addEventListener("focusin", () => this._show());
    trigger.addEventListener("focusout", () => this._hide());
  }

  _show() {
    const tip = this.root.querySelector(".tip");
    if (!tip) return;
    const position = this.attr("position", "top");

    // Keep the centering transform while animating the offset
    const isHorizontal = position === "top" || position === "bottom";
    const centering = isHorizontal ? "translateX(-50%)" : "translateY(-50%)";

    const offsets = {
      top:    `${centering} translateY(6px)`,
      bottom: `${centering} translateY(-6px)`,
      left:   `${centering} translateX(6px)`,
      right:  `${centering} translateX(-6px)`,
    };

    const finals = {
      top:    `${centering} translateY(0)`,
      bottom: `${centering} translateY(0)`,
      left:   `${centering} translateX(0)`,
      right:  `${centering} translateX(0)`,
    };

    animate(tip, {
      opacity: [0, 1],
      transform: [offsets[position] ?? offsets.top, finals[position] ?? finals.top],
    }, {
      type: "spring",
      stiffness: 400,
      damping: 20,
    });
  }

  _hide() {
    const tip = this.root.querySelector(".tip");
    if (!tip) return;
    animate(tip, { opacity: 0 }, { duration: 0.15 });
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-tooltip", KidsTooltip);
