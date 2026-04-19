import { KidsElement } from "../core/kids-element";

/**
 * <kids-alert> — A friendly notification / alert banner.
 *
 * Attributes:
 *   variant     — "info" (default) | "success" | "warning" | "error"
 *   dismissible — boolean, shows a close button
 *
 * Slots:
 *   (default) — alert message content
 *
 * Events:
 *   kids-dismiss — fired when the close button is clicked
 *
 * Animations:
 *   - Entrance: slides down + fades in with spring
 *   - Dismiss: slides up + fades out, then removes from DOM
 */
export class KidsAlert extends KidsElement {
  static observedAttributes = ["variant", "dismissible"];

  protected template(): string {
    const variant = this.attr("variant", "info");
    const dismissible = this.boolAttr("dismissible");

    const icons: Record<string, string> = {
      info: "&#9432;",     // ⓘ
      success: "&#10004;", // ✔
      warning: "&#9888;",  // ⚠
      error: "&#10008;",   // ✘
    };
    const icon = icons[variant] ?? icons.info;

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          will-change: transform, opacity;
          border-left: 5px solid transparent;
        }

        /* ---- Variants ---- */
        .alert.info {
          background: #EFF6FF;
          border-left-color: var(--kids-color-info);
          color: #1E40AF;
        }
        .alert.success {
          background: #ECFDF5;
          border-left-color: var(--kids-color-accent);
          color: #166534;
        }
        .alert.warning {
          background: #FFFBEB;
          border-left-color: var(--kids-color-warning);
          color: #92400E;
        }
        .alert.error {
          background: #FEF2F2;
          border-left-color: var(--kids-color-error);
          color: #991B1B;
        }

        .icon {
          font-size: var(--kids-font-size-lg);
          flex-shrink: 0;
          line-height: 1;
        }

        .content {
          flex: 1;
          line-height: 1.5;
        }

        .close {
          border: none;
          background: none;
          cursor: pointer;
          font-size: var(--kids-font-size-lg);
          opacity: 0.5;
          padding: 0;
          line-height: 1;
          color: inherit;
          flex-shrink: 0;
          transition: opacity 0.15s ease;
        }

        .close:hover {
          opacity: 1;
        }
      </style>

      <div class="alert ${variant}" role="alert" part="alert">
        <span class="icon">${icon}</span>
        <div class="content"><slot></slot></div>
        ${dismissible ? `<button class="close" aria-label="Dismiss">&times;</button>` : ""}
      </div>
    `;
  }

  /* ---- animations ---- */

  protected onEnter(): void {
    this.motionAnimate(".alert", { opacity: [0, 1], y: [-16, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (this.boolAttr("dismissible")) {
      const btn = this.root.querySelector(".close");
      btn?.addEventListener("click", () => this._dismiss());
    }
  }

  private _dismiss(): void {
    this.motionAnimate(
      ".alert",
      { opacity: [1, 0], y: [0, -16] },
      { duration: 0.25, ease: "easeIn" },
    );

    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("kids-dismiss", { bubbles: true, composed: true }),
      );
      this.remove();
    }, 280);
  }

  attributeChangedCallback(): void {
    this.render();
  }
}

customElements.define("kids-alert", KidsAlert);
