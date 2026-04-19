import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-empty-state> — A playful placeholder for empty content areas.
 *
 * Attributes:
 *   icon    — emoji or icon character (default "🎒")
 *   title   — heading text (default "Nothing here yet!")
 *   message — description text
 *
 * Slots:
 *   action — optional CTA button/link
 *
 * Animations:
 *   - Entrance: icon bounces in, text fades up
 */
export class KidsEmptyState extends KidsElement {
  static observedAttributes = ["icon", "title", "message"];

  template() {
    const icon = this.attr("icon", "🎒");
    const title = this.attr("title", "Nothing here yet!");
    const message = this.attr("message", "");

    return /* html */ `
      <style>
        :host { display: block; }

        .empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--kids-space-xl) var(--kids-space-lg);
          gap: var(--kids-space-md);
        }

        .icon {
          font-size: 3.5rem;
          line-height: 1;
          will-change: transform;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .message {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          opacity: 0.7;
          max-width: 360px;
          line-height: 1.5;
        }

        .action {
          margin-top: var(--kids-space-sm);
        }
      </style>

      <div class="empty" part="empty">
        <div class="icon">${icon}</div>
        <div class="title">${title}</div>
        ${message ? `<div class="message">${message}</div>` : ""}
        <div class="action"><slot name="action"></slot></div>
      </div>
    `;
  }

  onEnter() {
    this.motionAnimate(".icon", { scale: [0, 1], rotate: ["-15deg", "0deg"] }, {
      type: "spring",
      stiffness: 350,
      damping: 15,
    });
    this.motionAnimate(".title", { opacity: [0, 1], y: [15, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
      delay: 0.1,
    });
    this.motionAnimate(".message", { opacity: [0, 0.7], y: [15, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
      delay: 0.15,
    });
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-empty-state", KidsEmptyState);
