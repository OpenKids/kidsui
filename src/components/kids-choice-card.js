import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-choice-card> — A selectable card for multiple-choice options.
 *
 * Attributes:
 *   value    — the option value
 *   selected — boolean, whether currently selected
 *   correct  — boolean, show as correct answer (green)
 *   incorrect — boolean, show as wrong answer (red shake)
 *   disabled — boolean
 *   variant  — "default" | "image" (default "default")
 *
 * Slots:
 *   (default) — option text/content
 *   icon      — optional icon/image for the option
 *
 * Events:
 *   kids-select — fired when clicked, detail: { value: string }
 *
 * Animations:
 *   - Entrance: spring pop-in
 *   - Select: bounce + border glow
 *   - Correct: green pulse + checkmark
 *   - Incorrect: red shake
 */
export class KidsChoiceCard extends KidsElement {
  static observedAttributes = ["value", "selected", "correct", "incorrect", "disabled", "variant"];

  template() {
    const selected = this.boolAttr("selected");
    const correct = this.boolAttr("correct");
    const incorrect = this.boolAttr("incorrect");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "default");

    const stateClass = correct
      ? "correct"
      : incorrect
        ? "incorrect"
        : selected
          ? "selected"
          : "";

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .choice {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-md) var(--kids-space-lg);
          border-radius: var(--kids-radius-md);
          border: 3px solid var(--kids-color-surface-alt);
          background: var(--kids-color-surface);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-normal);
          color: var(--kids-color-text);
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        .choice.image {
          flex-direction: column;
          text-align: center;
          padding: var(--kids-space-lg);
        }

        .choice:hover:not(.disabled) {
          border-color: var(--kids-color-primary);
          box-shadow: var(--kids-shadow-sm);
        }

        .choice.selected {
          border-color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-primary-15);
          font-weight: var(--kids-font-weight-bold);
        }

        .choice.correct {
          border-color: var(--kids-color-accent);
          background: var(--kids-alpha-accent-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-accent-20);
        }

        .choice.incorrect {
          border-color: var(--kids-color-secondary);
          background: var(--kids-alpha-secondary-12);
          box-shadow: 0 0 0 4px var(--kids-alpha-secondary-15);
        }

        .choice.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .choice:focus-visible {
          outline: 3px solid var(--kids-color-info);
          outline-offset: 3px;
        }

        .indicator {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 3px solid var(--kids-color-surface-alt);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .selected .indicator {
          border-color: var(--kids-color-primary);
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
        }

        .correct .indicator {
          border-color: var(--kids-color-accent);
          background: var(--kids-color-accent);
          color: var(--kids-color-text);
        }

        .incorrect .indicator {
          border-color: var(--kids-color-secondary);
          background: var(--kids-color-secondary);
          color: var(--kids-color-text-light);
        }

        .content {
          flex: 1;
        }

        .icon-slot {
          display: flex;
          align-items: center;
        }
      </style>

      <div
        class="choice ${variant} ${stateClass} ${disabled ? "disabled" : ""}"
        role="option"
        tabindex="${disabled ? "-1" : "0"}"
        aria-selected="${selected || correct}"
        part="choice"
      >
        ${variant !== "image" ? `
          <div class="indicator">
            ${correct ? "✓" : incorrect ? "✕" : selected ? "●" : ""}
          </div>
        ` : ""}
        <div class="icon-slot"><slot name="icon"></slot></div>
        <div class="content"><slot></slot></div>
      </div>
    `;
  }

  onEnter() {
    animate(this.root.querySelector(".choice"), { scale: [0.9, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const choice = this.root.querySelector(".choice");
    if (!choice) return;

    choice.addEventListener("click", () => {
      if (this.boolAttr("disabled")) return;

      this.dispatchEvent(new CustomEvent("kids-select", {
        bubbles: true,
        detail: { value: this.attr("value") },
      }));
    });

    choice.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        choice.dispatchEvent(new Event("click"));
      }
    });
  }

  attributeChangedCallback(name) {
    this.render();
    this._bindEvents();

    if (name === "correct" && this.boolAttr("correct")) {
      animate(this.root.querySelector(".choice"), { scale: [1, 1.05, 1] }, {
        duration: 0.3,
      });
    }

    if (name === "incorrect" && this.boolAttr("incorrect")) {
      animate(this.root.querySelector(".choice"), { x: [0, -8, 8, -6, 6, 0] }, {
        duration: 0.4,
      });
    }
  }
}

customElements.define("kids-choice-card", KidsChoiceCard);
