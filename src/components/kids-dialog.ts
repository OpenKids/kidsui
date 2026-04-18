import { KidsElement } from "../core/kids-element";

/**
 * <kids-dialog> — A playful modal dialog / pop-up.
 *
 * Attributes:
 *   open    — boolean, controls visibility
 *   title   — dialog heading text
 *   size    — "sm" | "md" (default) | "lg"
 *
 * Slots:
 *   (default) — dialog body content
 *   footer    — action buttons area
 *
 * Events:
 *   kids-close — fired when the dialog is closed (via X button, backdrop, or Escape)
 *
 * Animations:
 *   - Open: backdrop fades, dialog springs in with scale
 *   - Close: fades out
 */
export class KidsDialog extends KidsElement {
  static observedAttributes = ["open", "title", "size"];

  protected template(): string {
    const isOpen = this.boolAttr("open");
    const title = this.attr("title");
    const size = this.attr("size", "md");

    return /* html */ `
      <style>
        :host { display: contents; }

        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(45, 43, 85, 0.45);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        .backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        .dialog {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: var(--kids-shadow-lg);
          padding: var(--kids-space-lg);
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          will-change: transform, opacity;
        }

        .dialog.sm { width: min(340px, 90vw); }
        .dialog.md { width: min(480px, 90vw); }
        .dialog.lg { width: min(640px, 90vw); }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--kids-space-md);
        }

        .title {
          font-size: var(--kids-font-size-xl);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin: 0;
        }

        .close-btn {
          background: var(--kids-color-surface-alt);
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--kids-color-text);
          transition: background 0.15s ease;
        }

        .close-btn:hover {
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }

        .body {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
        }

        .footer {
          margin-top: var(--kids-space-lg);
          display: flex;
          justify-content: flex-end;
          gap: var(--kids-space-sm);
        }
      </style>

      <div class="backdrop ${isOpen ? "open" : ""}" part="backdrop">
        <div class="dialog ${size}" role="dialog" aria-modal="true" part="dialog">
          <div class="header">
            <h2 class="title">${title}</h2>
            <button class="close-btn" aria-label="Close">✕</button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._bindEvents();
  }

  private _bindEvents(): void {
    // Close button
    const closeBtn = this.root.querySelector(".close-btn");
    closeBtn?.addEventListener("click", () => this._close());

    // Backdrop click
    const backdrop = this.root.querySelector(".backdrop");
    backdrop?.addEventListener("click", (e) => {
      if (e.target === backdrop) this._close();
    });

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.boolAttr("open")) {
        this._close();
      }
    });
  }

  private _close(): void {
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("kids-close", { bubbles: true }));
  }

  attributeChangedCallback(name: string): void {
    this.render();
    this._bindEvents();

    if (name === "open" && this.boolAttr("open")) {
      this.motionAnimate(".dialog", { scale: [0.8, 1], opacity: [0, 1] }, {
        type: "spring",
        stiffness: 400,
        damping: 22,
      });
    }
  }
}

customElements.define("kids-dialog", KidsDialog);
