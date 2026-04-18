import { KidsElement } from "../core/kids-element";

/**
 * <kids-callout> — A playful highlighted info/tip/warning box for lessons.
 *
 * Attributes:
 *   variant — "tip" (default) | "info" | "warning" | "fun-fact" | "remember"
 *   title   — optional custom heading
 *
 * Slots:
 *   (default) — callout content
 *
 * Animations:
 *   - Entrance: slides in from left with spring
 */
export class KidsCallout extends KidsElement {
  static observedAttributes = ["variant", "title"];

  protected template(): string {
    const variant = this.attr("variant", "tip");
    const customTitle = this.attr("title");

    const config: Record<string, { icon: string; title: string; color: string }> = {
      tip: { icon: "💡", title: "Tip", color: "var(--kids-color-warning)" },
      info: { icon: "ℹ️", title: "Good to know", color: "var(--kids-color-info)" },
      warning: { icon: "⚠️", title: "Watch out!", color: "var(--kids-color-secondary)" },
      "fun-fact": { icon: "🌟", title: "Fun Fact", color: "var(--kids-color-accent)" },
      remember: { icon: "🧠", title: "Remember", color: "var(--kids-color-primary)" },
    };

    const c = config[variant] || config.tip;
    const title = customTitle || c.title;

    return /* html */ `
      <style>
        :host { display: block; }

        .callout {
          display: flex;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          background: var(--kids-color-surface);
          border-left: 5px solid ${c.color};
          box-shadow: var(--kids-shadow-sm);
          will-change: transform, opacity;
        }

        .icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 2px;
        }

        .body {
          flex: 1;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-xs);
        }

        .content {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          line-height: 1.5;
        }
      </style>

      <div class="callout" role="note" part="callout">
        <span class="icon">${c.icon}</span>
        <div class="body">
          <div class="title">${title}</div>
          <div class="content"><slot></slot></div>
        </div>
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".callout", { opacity: [0, 1], x: [-20, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  }

  attributeChangedCallback(): void {
    this.render();
  }
}

customElements.define("kids-callout", KidsCallout);
