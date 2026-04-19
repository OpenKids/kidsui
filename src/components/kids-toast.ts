import { KidsElement } from "../core/kids-element";

/**
 * <kids-toast> — A playful notification toast that auto-dismisses.
 *
 * Attributes:
 *   variant   — "info" (default) | "success" | "warning" | "error"
 *   duration  — auto-dismiss time in ms (default "4000", set "0" to disable)
 *   position  — "top-right" (default) | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
 *   open      — boolean, controls visibility
 *
 * Slots:
 *   (default) — message text
 *
 * Events:
 *   kids-close — fired when the toast closes
 *
 * Animations:
 *   - Enter: slides in from edge + spring bounce
 *   - Exit: slides out + fades
 */
export class KidsToast extends KidsElement {
  static observedAttributes = ["variant", "duration", "position", "open"];

  private _timer: ReturnType<typeof setTimeout> | null = null;

  protected template(): string {
    const variant = this.attr("variant", "info");
    const isOpen = this.boolAttr("open");
    const position = this.attr("position", "top-right");

    const icons: Record<string, string> = {
      info: "💡",
      success: "🎉",
      warning: "⚠️",
      error: "😿",
    };

    return /* html */ `
      <style>
        :host {
          display: block;
          position: fixed;
          z-index: 2000;
          pointer-events: none;
        }

        /* ---- Position ---- */
        :host { top: var(--kids-space-lg); right: var(--kids-space-lg); }
        :host(.top-left) { top: var(--kids-space-lg); left: var(--kids-space-lg); right: auto; }
        :host(.bottom-right) { top: auto; bottom: var(--kids-space-lg); right: var(--kids-space-lg); }
        :host(.bottom-left) { top: auto; bottom: var(--kids-space-lg); left: var(--kids-space-lg); right: auto; }
        :host(.top-center) { top: var(--kids-space-lg); left: 50%; right: auto; transform: translateX(-50%); }
        :host(.bottom-center) { top: auto; bottom: var(--kids-space-lg); left: 50%; right: auto; transform: translateX(-50%); }

        .toast {
          display: flex;
          align-items: center;
          gap: var(--kids-space-sm);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          box-shadow: var(--kids-shadow-lg);
          pointer-events: auto;
          min-width: 240px;
          max-width: 380px;
          will-change: transform, opacity;
          opacity: 0;
        }

        .toast.open { opacity: 1; }

        .toast.info {
          background: var(--kids-color-info);
          color: var(--kids-color-text-light);
        }
        .toast.success {
          background: var(--kids-color-accent);
          color: var(--kids-color-text);
        }
        .toast.warning {
          background: var(--kids-color-warning);
          color: var(--kids-color-text);
        }
        .toast.error {
          background: var(--kids-color-error);
          color: var(--kids-color-text-light);
        }

        .icon { font-size: 1.3em; flex-shrink: 0; }

        .message { flex: 1; }

        .close-btn {
          background: none;
          border: none;
          color: inherit;
          font-size: 1.1rem;
          cursor: pointer;
          opacity: 0.7;
          padding: 2px 6px;
          border-radius: var(--kids-radius-sm);
          transition: opacity 0.15s ease;
        }
        .close-btn:hover { opacity: 1; }
      </style>

      <div class="toast ${variant} ${isOpen ? "open" : ""}" role="alert" part="toast">
        <span class="icon">${icons[variant] || icons.info}</span>
        <span class="message"><slot></slot></span>
        <button class="close-btn" aria-label="Close">✕</button>
      </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Apply position class to host
    const position = this.attr("position", "top-right");
    this.className = position;
    this._bindEvents();
    this._startTimer();
  }

  private _bindEvents(): void {
    const closeBtn = this.root.querySelector(".close-btn");
    closeBtn?.addEventListener("click", () => this._close());
  }

  private _startTimer(): void {
    if (this._timer) clearTimeout(this._timer);
    const duration = parseInt(this.attr("duration", "4000"), 10);
    if (duration > 0 && this.boolAttr("open")) {
      this._timer = setTimeout(() => this._close(), duration);
    }
  }

  private _close(): void {
    if (this._timer) clearTimeout(this._timer);

    const toast = this.root.querySelector(".toast");
    if (toast) {
      this.motionAnimate(toast as Element, { opacity: [1, 0], x: [0, 60] }, {
        duration: 0.25,
      });
    }

    setTimeout(() => {
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("kids-close", { bubbles: true }));
    }, 280);
  }

  attributeChangedCallback(name: string): void {
    this.render();
    this._bindEvents();

    if (name === "open" && this.boolAttr("open")) {
      this.motionAnimate(".toast", { x: [60, 0], opacity: [0, 1] }, {
        type: "spring",
        stiffness: 400,
        damping: 22,
      });
      this._startTimer();
    }

    if (name === "position") {
      this.className = this.attr("position", "top-right");
    }
  }
}

customElements.define("kids-toast", KidsToast);
