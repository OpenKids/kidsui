import { KidsElement } from "../core/kids-element.js";

/**
 * <kids-skeleton> — A playful loading placeholder with shimmer animation.
 *
 * Attributes:
 *   variant — "text" (default) | "circle" | "rect" | "card"
 *   width   — CSS width (default "100%")
 *   height  — CSS height (default varies by variant)
 *   lines   — number of text lines to show (default "1", only for variant="text")
 *
 * Animations:
 *   - Continuous shimmer/wave across the placeholder
 */
export class KidsSkeleton extends KidsElement {
  static observedAttributes = ["variant", "width", "height", "lines"];

  template() {
    const variant = this.attr("variant", "text");
    const width = this.attr("width", "100%");
    const height = this.attr("height");
    const lines = parseInt(this.attr("lines", "1"), 10);

    const defaultHeights = {
      text: "1em",
      circle: "48px",
      rect: "120px",
      card: "180px",
    };

    const h = height || defaultHeights[variant] || "1em";

    let content = "";
    if (variant === "text" && lines > 1) {
      const lineItems = Array.from({ length: lines }, (_, i) => {
        const w = i === lines - 1 ? "70%" : "100%";
        return `<div class="bone text" style="width: ${w}; height: ${h};"></div>`;
      }).join("");
      content = `<div class="lines">${lineItems}</div>`;
    } else {
      content = `<div class="bone ${variant}" style="width: ${variant === "circle" ? h : width}; height: ${h};"></div>`;
    }

    return /* html */ `
      <style>
        :host { display: block; }

        .bone {
          background: linear-gradient(
            90deg,
            var(--kids-color-surface-alt) 25%,
            #E8E4F8 37%,
            var(--kids-color-surface-alt) 63%
          );
          background-size: 200% 100%;
          animation: shimmer 1.8s ease infinite;
          border-radius: var(--kids-radius-sm);
        }

        .bone.circle {
          border-radius: 50%;
        }

        .bone.card {
          border-radius: var(--kids-radius-lg);
        }

        .lines {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      </style>

      ${content}
    `;
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("kids-skeleton", KidsSkeleton);
