import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-avatar> — A circular avatar with initials or image.
 *
 * Attributes:
 *   src     — image URL (if provided, shows image; otherwise shows initials from slot)
 *   size    — "sm" | "md" (default) | "lg" | "xl"
 *   variant — "primary" (default) | "secondary" | "accent" | "warning" | "info"
 *
 * Animations:
 *   - Entrance: pop-in with spring scale
 *   - Hover: gentle wobble
 */
export class KidsAvatar extends KidsElement {
  static observedAttributes = ["src", "size", "variant"];

  template() {
    const src = this.attr("src", "");
    const size = this.attr("size", "md");
    const variant = this.attr("variant", "primary");

    const sizeMap = {
      sm: "32px",
      md: "48px",
      lg: "64px",
      xl: "96px",
    };
    const dim = sizeMap[size] ?? sizeMap.md;

    const fontMap = {
      sm: "var(--kids-font-size-sm)",
      md: "var(--kids-font-size-md)",
      lg: "var(--kids-font-size-lg)",
      xl: "var(--kids-font-size-xl)",
    };
    const fontSize = fontMap[size] ?? fontMap.md;

    return /* html */ `
      <style>
        :host {
          display: inline-block;
        }

        .avatar {
          width: ${dim};
          height: ${dim};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--kids-font-family);
          font-size: ${fontSize};
          font-weight: var(--kids-font-weight-bold);
          letter-spacing: 0.04em;
          overflow: hidden;
          user-select: none;
          cursor: default;
          will-change: transform;
          box-shadow: var(--kids-shadow-sm);
          border: 3px solid var(--kids-color-surface);
        }

        /* ---- Variants (background for initials mode) ---- */
        .avatar.primary { background: var(--kids-color-primary); color: var(--kids-color-text-light); }
        .avatar.secondary { background: var(--kids-color-secondary); color: var(--kids-color-text-light); }
        .avatar.accent { background: var(--kids-color-accent); color: var(--kids-color-text); }
        .avatar.warning { background: var(--kids-color-warning); color: var(--kids-color-text); }
        .avatar.info { background: var(--kids-color-info); color: var(--kids-color-text-light); }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      </style>

      <div class="avatar ${variant}" part="avatar">
        ${src ? `<img src="${src}" alt="avatar" />` : `<slot></slot>`}
      </div>
    `;
  }

  /* ---- animations ---- */

  onEnter() {
    animate(this.root.querySelector(".avatar"), { scale: [0, 1.1, 1] }, {
      type: "spring",
      stiffness: 450,
      damping: 15,
    });
  }

  connectedCallback() {
    super.connectedCallback();

    const avatar = this.root.querySelector(".avatar");
    if (!avatar) return;

    avatar.addEventListener("pointerenter", () => {
      animate(this.root.querySelector(".avatar"), { rotate: [0, -8, 8, -4, 0] }, {
        duration: 0.5,
        ease: "easeInOut",
      });
    });
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-avatar", KidsAvatar);
