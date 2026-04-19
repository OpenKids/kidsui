import { KidsElement } from "../core/kids-element";

/**
 * <kids-toggle> — A playful on/off toggle switch.
 *
 * Attributes:
 *   checked  — boolean, whether the toggle is on
 *   disabled — boolean
 *   variant  — "primary" (default) | "secondary" | "accent"
 *   size     — "sm" | "md" (default) | "lg"
 *
 * Events:
 *   kids-toggle — fired when toggled, detail: { checked: boolean }
 *
 * Animations:
 *   - Entrance: spring scale-in
 *   - Toggle: thumb slides with spring physics + track color morphs
 */
export class KidsToggle extends KidsElement {
  static observedAttributes = ["checked", "disabled", "variant", "size"];

  /** Cached references so we don't query after every change */
  private _track: HTMLElement | null = null;
  private _thumb: HTMLElement | null = null;

  protected template(): string {
    const checked = this.boolAttr("checked");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");

    return /* html */ `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--kids-space-sm);
        }

        .track {
          position: relative;
          border-radius: var(--kids-radius-full);
          cursor: pointer;
          transition: background 0.3s ease;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          background: #D1D5DB;
        }

        /* ---- Sizes ---- */
        .track.sm { width: 36px; height: 20px; }
        .track.md { width: 48px; height: 26px; }
        .track.lg { width: 60px; height: 32px; }

        /* ---- On states by variant ---- */
        .track.checked.primary { background: var(--kids-color-primary); }
        .track.checked.secondary { background: var(--kids-color-secondary); }
        .track.checked.accent { background: var(--kids-color-accent); }

        /* ---- Thumb ---- */
        .thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          background: var(--kids-color-surface);
          border-radius: 50%;
          box-shadow: var(--kids-shadow-sm);
          will-change: transform;
        }

        .track.sm .thumb { width: 14px; height: 14px; }
        .track.md .thumb { width: 20px; height: 20px; }
        .track.lg .thumb { width: 26px; height: 26px; }

        /* ---- Disabled ---- */
        .track.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ---- */
        .track:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        /* ---- Label ---- */
        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          user-select: none;
          cursor: pointer;
        }
        .label.disabled { cursor: not-allowed; opacity: 0.5; }
      </style>

      <div
        class="track ${size} ${variant} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}"
        role="switch"
        tabindex="${disabled ? "-1" : "0"}"
        aria-checked="${checked}"
        part="track"
      >
        <div class="thumb" part="thumb"></div>
      </div>
      <span class="label ${disabled ? "disabled" : ""}"><slot></slot></span>
    `;
  }

  /* ---- lifecycle ---- */

  connectedCallback(): void {
    super.connectedCallback();

    this._track = this.root.querySelector(".track");
    this._thumb = this.root.querySelector(".thumb");

    if (!this._track) return;

    this._track.addEventListener("click", () => this._toggle());
    this._track.addEventListener("keydown", (e) => {
      if ((e as KeyboardEvent).key === " " || (e as KeyboardEvent).key === "Enter") {
        e.preventDefault();
        this._toggle();
      }
    });

    // Also let clicking the label toggle
    const label = this.root.querySelector(".label");
    label?.addEventListener("click", () => this._toggle());
  }

  /* ---- animations ---- */

  protected onEnter(): void {
    this.motionAnimate(".track", { scale: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 18,
    });
    // Set initial thumb position without animation
    this._setThumbPosition(false);
  }

  /* ---- toggle logic ---- */

  private _toggle(): void {
    if (this.boolAttr("disabled")) return;

    const next = !this.boolAttr("checked");
    // Update checked state — we bypass attributeChangedCallback re-render
    // by updating the DOM directly below.
    if (next) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }

    this.dispatchEvent(new CustomEvent("kids-toggle", {
      bubbles: true,
      composed: true,
      detail: { checked: next },
    }));
  }

  /**
   * Instead of re-rendering the full DOM (which destroys event listeners),
   * surgically update only the parts that changed.
   */
  attributeChangedCallback(name: string): void {
    // If this fires before first render (during parsing), bail — connectedCallback
    // will handle the initial render.
    if (!this._track || !this._thumb) return;

    if (name === "checked") {
      const checked = this.boolAttr("checked");
      // Update track classes
      this._track.classList.toggle("checked", checked);
      this._track.setAttribute("aria-checked", String(checked));
      // Animate thumb
      this._setThumbPosition(true);
      return;
    }

    if (name === "disabled") {
      const disabled = this.boolAttr("disabled");
      this._track.classList.toggle("disabled", disabled);
      this._track.setAttribute("tabindex", disabled ? "-1" : "0");
      const label = this.root.querySelector(".label");
      label?.classList.toggle("disabled", disabled);
      return;
    }

    // For variant/size changes, a full re-render is acceptable (rare)
    this.render();
    this._track = this.root.querySelector(".track");
    this._thumb = this.root.querySelector(".thumb");
    this._rebindListeners();
    this._setThumbPosition(false);
  }

  private _setThumbPosition(animated: boolean): void {
    const checked = this.boolAttr("checked");
    const size = this.attr("size", "md");
    const travel: Record<string, number> = { sm: 16, md: 22, lg: 28 };
    const x = checked ? (travel[size] ?? 22) : 0;

    if (animated && this._thumb) {
      this.motionAnimate(this._thumb, { x }, {
        type: "spring",
        stiffness: 500,
        damping: 25,
      });
    } else if (this._thumb) {
      this._thumb.style.transform = `translateX(${x}px)`;
    }
  }

  private _rebindListeners(): void {
    this._track?.addEventListener("click", () => this._toggle());
    this._track?.addEventListener("keydown", (e) => {
      if ((e as KeyboardEvent).key === " " || (e as KeyboardEvent).key === "Enter") {
        e.preventDefault();
        this._toggle();
      }
    });
    const label = this.root.querySelector(".label");
    label?.addEventListener("click", () => this._toggle());
  }
}

customElements.define("kids-toggle", KidsToggle);
