import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-stepper> — A playful step indicator for multi-step flows.
 *
 * Attributes:
 *   steps    — JSON array of step labels, e.g. '["Step 1","Step 2","Step 3"]'
 *   active   — current step index (0-based, default "0")
 *   variant  — "default" | "compact" (default "default")
 *
 * Events:
 *   kids-step-click — fired when a completed step is clicked, detail: { index: number }
 *
 * Animations:
 *   - Entrance: steps stagger in
 *   - Step completion: checkmark pops with spring
 */
export class KidsStepper extends KidsElement {
  static observedAttributes = ["steps", "active", "variant"];

  template() {
    const stepsAttr = this.attr("steps", "[]");
    const active = parseInt(this.attr("active", "0"), 10);
    const variant = this.attr("variant", "default");

    let steps = [];
    try {
      steps = JSON.parse(stepsAttr);
    } catch {
      steps = [];
    }

    const stepItems = steps
      .map((label, i) => {
        const state = i < active ? "completed" : i === active ? "active" : "upcoming";
        return `
          <div class="step ${state}" data-index="${i}">
            <div class="circle">
              ${state === "completed" ? "✓" : i + 1}
            </div>
            ${variant === "default" ? `<span class="label">${label}</span>` : ""}
          </div>
          ${i < steps.length - 1 ? `<div class="connector"><div class="connector-fill" style="transform: scaleX(${i < active ? 1 : 0})"></div></div>` : ""}
        `;
      })
      .join("");

    return /* html */ `
      <style>
        :host { display: block; }

        .stepper {
          display: flex;
          align-items: flex-start;
          gap: 0;
          width: 100%;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-xs);
          flex-shrink: 0;
          cursor: default;
        }

        .step.completed {
          cursor: pointer;
        }

        .circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          transition: background 0.3s ease, color 0.3s ease;
          will-change: transform;
        }

        .step.completed .circle {
          background: var(--kids-color-accent);
          color: var(--kids-color-text);
          box-shadow: var(--kids-shadow-sm);
        }

        .step.active .circle {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }

        .step.upcoming .circle {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
          opacity: 0.5;
        }

        .label {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          text-align: center;
          max-width: 80px;
        }

        .step.upcoming .label { opacity: 0.5; }

        .connector {
          flex: 1;
          height: 4px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          margin-top: 18px;
          overflow: hidden;
          min-width: 20px;
        }

        .connector-fill {
          width: 100%;
          height: 100%;
          background: var(--kids-color-accent);
          border-radius: var(--kids-radius-full);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
      </style>

      <div class="stepper" role="navigation" aria-label="Progress" part="stepper">
        ${stepItems}
      </div>
    `;
  }

  onEnter() {
    const circles = Array.from(this.root.querySelectorAll(".circle"));
    circles.forEach((circle, i) => {
      animate(circle, { scale: [0, 1], opacity: [0, 1] }, {
        type: "spring",
        stiffness: 400,
        damping: 18,
        delay: i * 0.08,
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    this.root.querySelectorAll(".step.completed").forEach((step) => {
      step.addEventListener("click", () => {
        const index = parseInt(step.dataset.index || "0", 10);
        this.dispatchEvent(new CustomEvent("kids-step-click", {
          bubbles: true,
          detail: { index },
        }));
      });
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-stepper", KidsStepper);
