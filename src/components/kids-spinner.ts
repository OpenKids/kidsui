import { KidsElement } from "../core/kids-element";

/**
 * <kids-spinner> — A fun animated loading indicator.
 *
 * Attributes:
 *   size    — "sm" | "md" (default) | "lg"
 *   variant — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *   style   — "spin" (default) | "dots" | "bounce"
 *
 * Animations:
 *   - spin: classic rotating ring
 *   - dots: three bouncing dots
 *   - bounce: single ball bouncing
 */
export class KidsSpinner extends KidsElement {
  static observedAttributes = ["size", "variant", "type"];

  /** Handle for looping animation so we can cancel on disconnect */
  private _loopAnimation: { cancel: () => void } | undefined;

  protected template(): string {
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
    const type = this.attr("type", "spin");

    const sizeMap: Record<string, string> = { sm: "24px", md: "40px", lg: "56px" };
    const dim = sizeMap[size] ?? sizeMap.md;
    const dotSize: Record<string, string> = { sm: "6px", md: "10px", lg: "14px" };
    const dot = dotSize[size] ?? dotSize.md;

    if (type === "dots") {
      return /* html */ `
        <style>
          :host { display: inline-flex; align-items: center; gap: var(--kids-space-xs); }
          .dot {
            width: ${dot};
            height: ${dot};
            border-radius: 50%;
            will-change: transform;
          }
          .dot.primary   { background: var(--kids-color-primary); }
          .dot.secondary { background: var(--kids-color-secondary); }
          .dot.accent    { background: var(--kids-color-accent); }
          .dot.warning   { background: var(--kids-color-warning); }
          .dot.info      { background: var(--kids-color-info); }
        </style>
        <div class="dot ${variant}" part="dot"></div>
        <div class="dot ${variant}" part="dot"></div>
        <div class="dot ${variant}" part="dot"></div>
      `;
    }

    if (type === "bounce") {
      return /* html */ `
        <style>
          :host { display: inline-block; }
          .ball {
            width: ${dim};
            height: ${dim};
            border-radius: 50%;
            will-change: transform;
          }
          .ball.primary   { background: var(--kids-color-primary); }
          .ball.secondary { background: var(--kids-color-secondary); }
          .ball.accent    { background: var(--kids-color-accent); }
          .ball.warning   { background: var(--kids-color-warning); }
          .ball.info      { background: var(--kids-color-info); }
        </style>
        <div class="ball ${variant}" part="ball"></div>
      `;
    }

    // Default: spin
    const border: Record<string, string> = { sm: "3px", md: "4px", lg: "5px" };
    const bw = border[size] ?? border.md;

    return /* html */ `
      <style>
        :host { display: inline-block; }
        .ring {
          width: ${dim};
          height: ${dim};
          border-radius: 50%;
          border: ${bw} solid var(--kids-color-surface-alt);
          will-change: transform;
        }
        .ring.primary   { border-top-color: var(--kids-color-primary); }
        .ring.secondary { border-top-color: var(--kids-color-secondary); }
        .ring.accent    { border-top-color: var(--kids-color-accent); }
        .ring.warning   { border-top-color: var(--kids-color-warning); }
        .ring.info      { border-top-color: var(--kids-color-info); }
      </style>
      <div class="ring ${variant}" role="status" aria-label="Loading" part="ring"></div>
    `;
  }

  /* ---- animations ---- */

  protected onEnter(): void {
    this._startAnimation();
  }

  private _startAnimation(): void {
    const type = this.attr("type", "spin");

    if (type === "dots") {
      const dots = Array.from(this.root.querySelectorAll(".dot"));
      dots.forEach((dot, i) => {
        this._loopAnimation = this.motionAnimate(
          dot,
          { y: [0, -10, 0] },
          {
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.8,
            delay: i * 0.15,
            ease: "easeInOut",
          },
        );
      });
      return;
    }

    if (type === "bounce") {
      this._loopAnimation = this.motionAnimate(
        ".ball",
        { y: [0, -20, 0], scaleY: [1, 0.9, 1.15, 1] },
        {
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      );
      return;
    }

    // spin
    this._loopAnimation = this.motionAnimate(
      ".ring",
      { rotate: [0, 360] },
      { duration: 0.8, repeat: Infinity, ease: "linear" },
    );
  }

  disconnectedCallback(): void {
    this._loopAnimation?.cancel();
  }

  attributeChangedCallback(): void {
    this._loopAnimation?.cancel();
    this.render();
    requestAnimationFrame(() => this._startAnimation());
  }
}

customElements.define("kids-spinner", KidsSpinner);
