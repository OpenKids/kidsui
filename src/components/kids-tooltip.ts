import { KidsElement } from "../core/kids-element";

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

  protected template(): string {
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
          transform: translateX(-50%);
        }
        .tip.bottom {
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        }
        .tip.left {
          right: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
        }
        .tip.right {
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
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

  connectedCallback(): void {
    super.connectedCallback();

    const trigger = this.root.querySelector(".trigger");
    if (!trigger) return;

    trigger.addEventListener("pointerenter", () => this._show());
    trigger.addEventListener("pointerleave", () => this._hide());
    trigger.addEventListener("focusin", () => this._show());
    trigger.addEventListener("focusout", () => this._hide());
  }

  private _show(): void {
    const tip = this.root.querySelector<HTMLElement>(".tip");
    if (!tip) return;
    const position = this.attr("position", "top");

    const offsets: Record<string, Record<string, number[]>> = {
      top:    { y: [6, 0] },
      bottom: { y: [-6, 0] },
      left:   { x: [6, 0] },
      right:  { x: [-6, 0] },
    };

    this.motionAnimate(tip, { opacity: [0, 1], ...(offsets[position] ?? offsets.top) }, {
      type: "spring",
      stiffness: 500,
      damping: 22,
    });
  }

  private _hide(): void {
    const tip = this.root.querySelector<HTMLElement>(".tip");
    if (!tip) return;
    this.motionAnimate(tip, { opacity: 0 }, { duration: 0.15 });
  }

  attributeChangedCallback(): void {
    this.render();
  }
}

customElements.define("kids-tooltip", KidsTooltip);
