import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-achievement> — A playful achievement/badge unlock notification.
 *
 * Attributes:
 *   icon    — emoji or icon character (default "🏆")
 *   title   — achievement title (default "Achievement Unlocked!")
 *   message — description text
 *   variant — "gold" (default) | "silver" | "bronze" | "special"
 *   open    — boolean, show the achievement
 *
 * Events:
 *   kids-close — fired when dismissed
 *
 * Animations:
 *   - Entrance: dramatic spring pop + glow
 *   - Idle: gentle float/pulse
 */
export class KidsAchievement extends KidsElement {
  static observedAttributes = ["icon", "title", "message", "variant", "open"];

  _onClick = (event) => {
    if (event.target.closest(".dismiss")) {
      this._close();
    }
  };

  template() {
    const icon = this.attr("icon", "🏆");
    const title = this.attr("title", "Achievement Unlocked!");
    const message = this.attr("message", "");
    const variant = this.attr("variant", "gold");
    const isOpen = this.boolAttr("open");

    const colors = {
      gold: { bg: "linear-gradient(135deg, #FFD700, #FFA500)", glow: "rgba(255, 215, 0, 0.4)" },
      silver: { bg: "linear-gradient(135deg, #C0C0C0, #A0A0A0)", glow: "rgba(192, 192, 192, 0.4)" },
      bronze: { bg: "linear-gradient(135deg, #CD7F32, #A0522D)", glow: "rgba(205, 127, 50, 0.4)" },
      special: { bg: "linear-gradient(135deg, var(--kids-color-primary), var(--kids-color-secondary))", glow: "rgba(108, 99, 255, 0.4)" },
    };

    const c = colors[variant] || colors.gold;

    return /* html */ `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3000;
          pointer-events: none;
        }

        :host([open]) {
          display: block;
        }

        .achievement {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: var(--kids-space-xl);
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: 0 0 40px ${c.glow}, var(--kids-shadow-lg);
          pointer-events: auto;
          will-change: transform, opacity;
          opacity: 0;
          transform: scale(0.5);
          position: relative;
          min-width: 280px;
          max-width: 380px;
        }

        .achievement.open {
          opacity: 1;
          transform: scale(1);
        }

        .badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: ${c.bg};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          box-shadow: 0 4px 20px ${c.glow};
          margin-bottom: var(--kids-space-md);
          will-change: transform;
        }

        .title {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-xs);
        }

        .message {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          opacity: 0.7;
          line-height: 1.4;
        }

        .dismiss {
          margin-top: var(--kids-space-lg);
          background: ${c.bg};
          border: none;
          color: var(--kids-color-text);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          padding: var(--kids-space-sm) var(--kids-space-xl);
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          box-shadow: var(--kids-shadow-sm);
        }

        .dismiss:hover { transform: scale(1.05); }
      </style>

      <div class="achievement" part="achievement">
        <div class="badge">${icon}</div>
        <div class="title">${title}</div>
        ${message ? `<div class="message">${message}</div>` : ""}
        <button class="dismiss">Awesome!</button>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.root.addEventListener("click", this._onClick);

    if (this.boolAttr("open")) {
      this._playOpenAnimation();
    }
  }

  disconnectedCallback() {
    this.root.removeEventListener("click", this._onClick);
  }

  _close() {
    cancelAnimationFrame(this._openFrame);
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("kids-close", { bubbles: true }));
  }

  _playOpenAnimation() {
    cancelAnimationFrame(this._openFrame);
    this._openFrame = requestAnimationFrame(() => {
      const achievement = this.root.querySelector(".achievement");
      const badge = this.root.querySelector(".badge");

      achievement?.classList.add("open");

      if (badge) {
        animate(badge, { scale: [0, 1.2, 1], rotate: ["0deg", "10deg", "0deg"] }, {
          type: "spring",
          stiffness: 400,
          damping: 12,
        });
      }

      if (achievement) {
        animate(achievement, { scale: [0.5, 1], opacity: [0, 1] }, {
          type: "spring",
          stiffness: 250,
          damping: 15,
        });
      }
    });
  }

  attributeChangedCallback(name) {
    if (!this.isConnected) return;

    if (name === "open") {
      if (this.boolAttr("open")) {
        this._playOpenAnimation();
      }

      return;
    }

    this.render();
  }
}

customElements.define("kids-achievement", KidsAchievement);
