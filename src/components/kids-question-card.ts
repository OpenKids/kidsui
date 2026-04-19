import { KidsElement } from "../core/kids-element";

/**
 * <kids-question-card> — A container card for quiz/exercise questions.
 *
 * Attributes:
 *   number   — question number (e.g. "1")
 *   total    — total questions (e.g. "10")
 *   status   — "unanswered" (default) | "correct" | "incorrect" | "skipped"
 *   points   — points value for this question
 *
 * Slots:
 *   question — the question text
 *   (default) — answer options / interactive content
 *   hint     — optional hint text
 *   explanation — shown after answering
 *
 * Events:
 *   kids-submit — fired when an answer is submitted
 *   kids-skip   — fired when question is skipped
 *
 * Animations:
 *   - Entrance: card slides in + springs
 *   - Correct: green border glow + confetti-like bounce
 *   - Incorrect: red shake
 */
export class KidsQuestionCard extends KidsElement {
  static observedAttributes = ["number", "total", "status", "points"];

  protected template(): string {
    const number = this.attr("number");
    const total = this.attr("total");
    const status = this.attr("status", "unanswered");
    const points = this.attr("points");

    const statusConfig: Record<string, { label: string; color: string; icon: string }> = {
      unanswered: { label: "", color: "var(--kids-color-surface-alt)", icon: "" },
      correct: { label: "Correct!", color: "var(--kids-color-accent)", icon: "🎉" },
      incorrect: { label: "Not quite!", color: "var(--kids-color-secondary)", icon: "🤔" },
      skipped: { label: "Skipped", color: "var(--kids-color-warning)", icon: "⏭" },
    };

    const cfg = statusConfig[status] || statusConfig.unanswered;

    return /* html */ `
      <style>
        :host { display: block; }

        .question-card {
          background: var(--kids-color-surface);
          border-radius: var(--kids-radius-lg);
          box-shadow: var(--kids-shadow-md);
          padding: var(--kids-space-lg);
          border: 3px solid transparent;
          transition: border-color 0.3s ease;
          will-change: transform;
        }

        .question-card.correct {
          border-color: var(--kids-color-accent);
        }
        .question-card.incorrect {
          border-color: var(--kids-color-secondary);
        }
        .question-card.skipped {
          border-color: var(--kids-color-warning);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--kids-space-md);
        }

        .question-number {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-primary);
          background: var(--kids-alpha-primary-12);
          padding: var(--kids-space-xs) var(--kids-space-md);
          border-radius: var(--kids-radius-full);
        }

        .points {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-warning);
        }

        .question-text {
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-lg);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          margin-bottom: var(--kids-space-lg);
          line-height: 1.4;
        }

        .answers {
          margin-bottom: var(--kids-space-md);
        }

        .hint {
          display: none;
        }
        .hint:has(::slotted(*)) {
          display: block;
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          background: var(--kids-alpha-warning-15);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-sm);
          color: var(--kids-color-text);
        }

        .explanation {
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-md);
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          font-size: var(--kids-font-size-md);
          display: none;
        }

        .explanation.show { display: block; }

        .status-bar {
          display: flex;
          align-items: center;
          gap: var(--kids-space-sm);
          margin-top: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          border-radius: var(--kids-radius-sm);
          font-family: var(--kids-font-family);
          font-weight: var(--kids-font-weight-bold);
          font-size: var(--kids-font-size-md);
          display: none;
        }

        .status-bar.show {
          display: flex;
        }

        .status-bar.correct { background: var(--kids-alpha-accent-15); color: var(--kids-color-text); }
        .status-bar.incorrect { background: var(--kids-alpha-secondary-15); color: var(--kids-color-text); }
        .status-bar.skipped { background: var(--kids-alpha-warning-15); color: var(--kids-color-text); }
      </style>

      <div class="question-card ${status}" part="card">
        <div class="header">
          ${number ? `<span class="question-number">Question ${number}${total ? ` / ${total}` : ""}</span>` : ""}
          ${points ? `<span class="points">⭐ ${points} pts</span>` : ""}
        </div>

        <div class="question-text">
          <slot name="question"></slot>
        </div>

        <div class="answers">
          <slot></slot>
        </div>

        <div class="hint">
          <slot name="hint"></slot>
        </div>

        <div class="status-bar ${status} ${status !== "unanswered" ? "show" : ""}">
          <span>${cfg.icon}</span>
          <span>${cfg.label}</span>
        </div>

        <div class="explanation ${status !== "unanswered" ? "show" : ""}">
          <slot name="explanation"></slot>
        </div>
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".question-card", { opacity: [0, 1], y: [25, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  }

  attributeChangedCallback(name: string): void {
    this.render();

    if (name === "status") {
      const status = this.attr("status", "unanswered");
      if (status === "correct") {
        this.motionAnimate(".question-card", { scale: [1, 1.03, 1] }, { duration: 0.4 });
      } else if (status === "incorrect") {
        this.motionAnimate(".question-card", { x: [0, -6, 6, -4, 4, 0] }, { duration: 0.5 });
      }
    }
  }
}

customElements.define("kids-question-card", KidsQuestionCard);
