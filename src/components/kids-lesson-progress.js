import { KidsElement } from "../core/kids-element.js";
import { animate } from "motion";

/**
 * <kids-lesson-progress> — Visual progress tracker for lessons/courses.
 *
 * Attributes:
 *   lessons — JSON array of lesson objects, e.g. '[{"title":"Intro","status":"completed"},...]'
 *             status: "completed" | "current" | "locked"
 *   variant — "list" (default) | "map" (visual path)
 *
 * Events:
 *   kids-lesson-click — fired when a completed/current lesson is clicked, detail: { index: number, title: string }
 *
 * Animations:
 *   - Entrance: lessons stagger in
 *   - Completed: checkmark spring pop
 */
export class KidsLessonProgress extends KidsElement {
  static observedAttributes = ["lessons", "variant"];

  template() {
    const lessonsAttr = this.attr("lessons", "[]");
    const variant = this.attr("variant", "list");

    let lessons = [];
    try {
      lessons = JSON.parse(lessonsAttr);
    } catch {
      lessons = [];
    }

    const items = lessons
      .map(
        (lesson, i) => `
        <div class="lesson ${lesson.status}" data-index="${i}">
          <div class="lesson-icon">
            ${lesson.status === "completed" ? "✓" : lesson.status === "locked" ? "🔒" : "▶"}
          </div>
          <div class="lesson-info">
            <span class="lesson-number">Lesson ${i + 1}</span>
            <span class="lesson-title">${lesson.title}</span>
          </div>
        </div>`,
      )
      .join("");

    return /* html */ `
      <style>
        :host { display: block; }

        .progress-list {
          display: flex;
          flex-direction: column;
          gap: var(--kids-space-sm);
        }

        .progress-list.map {
          gap: 0;
          padding-left: var(--kids-space-lg);
          border-left: 4px solid var(--kids-color-surface-alt);
        }

        .lesson {
          display: flex;
          align-items: center;
          gap: var(--kids-space-md);
          padding: var(--kids-space-sm) var(--kids-space-md);
          border-radius: var(--kids-radius-md);
          font-family: var(--kids-font-family);
          cursor: pointer;
          transition: background 0.15s ease;
          will-change: transform, opacity;
        }

        .map .lesson {
          position: relative;
          margin-left: calc(-1 * var(--kids-space-lg) - 2px);
          padding-left: calc(var(--kids-space-lg) + var(--kids-space-md));
        }

        .lesson:hover:not(.locked) {
          background: var(--kids-color-surface-alt);
        }

        .lesson.locked {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .lesson-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          flex-shrink: 0;
        }

        .completed .lesson-icon {
          background: var(--kids-color-accent);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-sm);
        }

        .current .lesson-icon {
          background: var(--kids-color-primary);
          color: var(--kids-color-text-light);
          box-shadow: var(--kids-shadow-md);
        }

        .locked .lesson-icon {
          background: var(--kids-color-surface-alt);
          color: var(--kids-color-text);
        }

        .lesson-info {
          display: flex;
          flex-direction: column;
        }

        .lesson-number {
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.6;
        }

        .lesson-title {
          font-size: var(--kids-font-size-md);
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
        }

        .locked .lesson-title { opacity: 0.6; }
      </style>

      <div class="progress-list ${variant}" part="list">
        ${items}
      </div>
    `;
  }

  onEnter() {
    const items = Array.from(this.root.querySelectorAll(".lesson"));
    items.forEach((item, i) => {
      animate(item, { opacity: [0, 1], x: [-15, 0] }, {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.06,
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    this.root.querySelectorAll(".lesson:not(.locked)").forEach((lesson) => {
      lesson.addEventListener("click", () => {
        const index = parseInt(lesson.dataset.index || "0", 10);
        const title = lesson.querySelector(".lesson-title")?.textContent || "";
        this.dispatchEvent(new CustomEvent("kids-lesson-click", {
          bubbles: true,
          detail: { index, title },
        }));
      });
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("kids-lesson-progress", KidsLessonProgress);
