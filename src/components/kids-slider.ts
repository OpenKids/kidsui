import { KidsElement } from "../core/kids-element";

/**
 * <kids-slider> — A playful range slider.
 *
 * Attributes:
 *   min      — minimum value (default "0")
 *   max      — maximum value (default "100")
 *   value    — current value (default "50")
 *   step     — step increment (default "1")
 *   disabled — boolean
 *   variant  — "primary" (default) | "secondary" | "accent"
 *   label    — optional label text
 *
 * Events:
 *   kids-input  — fired continuously while sliding, detail: { value: number }
 *   kids-change — fired on release, detail: { value: number }
 *
 * Animations:
 *   - Entrance: track grows in width
 *   - Thumb: spring bounce on grab/release
 */
export class KidsSlider extends KidsElement {
  static observedAttributes = ["min", "max", "value", "step", "disabled", "variant", "label"];

  protected template(): string {
    const min = this.attr("min", "0");
    const max = this.attr("max", "100");
    const value = this.attr("value", "50");
    const step = this.attr("step", "1");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "primary");
    const label = this.attr("label");

    const numValue = parseFloat(value);
    const numMin = parseFloat(min);
    const numMax = parseFloat(max);
    const percent = ((numValue - numMin) / (numMax - numMin)) * 100;

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .slider-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-xs);
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .track-container {
          position: relative;
          height: 28px;
          display: flex;
          align-items: center;
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 10px;
          border-radius: var(--kids-radius-full);
          background: linear-gradient(
            to right,
            var(--track-color) 0%,
            var(--track-color) ${percent}%,
            var(--kids-color-surface-alt) ${percent}%,
            var(--kids-color-surface-alt) 100%
          );
          outline: none;
          cursor: pointer;
        }

        input[type="range"]:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Thumb */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--kids-color-surface);
          border: 3px solid var(--track-color);
          box-shadow: var(--kids-shadow-md);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        input[type="range"]::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--kids-color-surface);
          border: 3px solid var(--track-color);
          box-shadow: var(--kids-shadow-md);
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        input[type="range"]:focus-visible::-webkit-slider-thumb {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        /* Variant colors */
        :host { --track-color: var(--kids-color-primary); }
        .secondary { --track-color: var(--kids-color-secondary); }
        .accent { --track-color: var(--kids-color-accent); }
      </style>

      <div class="slider-wrapper ${variant}" part="wrapper">
        ${label ? `<div class="label-row"><span>${label}</span><span class="value-display">${value}</span></div>` : ""}
        <div class="track-container">
          <input
            type="range"
            min="${min}"
            max="${max}"
            value="${value}"
            step="${step}"
            ${disabled ? "disabled" : ""}
            part="input"
          />
        </div>
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".track-container", { scaleX: [0, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 300,
      damping: 25,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._bindEvents();
  }

  private _bindEvents(): void {
    const input = this.root.querySelector("input");
    if (!input) return;

    input.addEventListener("input", () => {
      this.setAttribute("value", input.value);
      this.dispatchEvent(new CustomEvent("kids-input", {
        bubbles: true,
        detail: { value: parseFloat(input.value) },
      }));
    });

    input.addEventListener("change", () => {
      this.dispatchEvent(new CustomEvent("kids-change", {
        bubbles: true,
        detail: { value: parseFloat(input.value) },
      }));
    });
  }

  attributeChangedCallback(): void {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-slider", KidsSlider);
