import { KidsElement } from "../core/kids-element";

/**
 * <kids-timer> — A playful countdown/count-up timer for timed exercises.
 *
 * Attributes:
 *   duration   — total time in seconds (default "60")
 *   mode       — "countdown" (default) | "countup"
 *   running    — boolean, starts/stops the timer
 *   variant    — "default" | "compact" | "circular" (default "default")
 *   warn-at    — seconds remaining to show warning state (default "10")
 *
 * Events:
 *   kids-tick     — fired every second, detail: { remaining: number, elapsed: number }
 *   kids-complete — fired when countdown reaches 0
 *   kids-warning  — fired when entering warning zone
 *
 * Animations:
 *   - Entrance: spring pop
 *   - Warning: pulsing red glow
 *   - Complete: bounce
 */
export class KidsTimer extends KidsElement {
  static observedAttributes = ["duration", "mode", "running", "variant", "warn-at"];

  private _elapsed = 0;
  private _interval: ReturnType<typeof setInterval> | null = null;
  private _warned = false;

  protected template(): string {
    const duration = parseInt(this.attr("duration", "60"), 10);
    const mode = this.attr("mode", "countdown");
    const variant = this.attr("variant", "default");
    const running = this.boolAttr("running");

    const remaining = Math.max(0, duration - this._elapsed);
    const displayTime = mode === "countdown" ? remaining : this._elapsed;

    const minutes = Math.floor(displayTime / 60);
    const seconds = displayTime % 60;
    const timeStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const warnAt = parseInt(this.attr("warn-at", "10"), 10);
    const isWarning = mode === "countdown" && remaining <= warnAt && remaining > 0;
    const isComplete = mode === "countdown" && remaining === 0 && this._elapsed > 0;

    const percent = duration > 0 ? (remaining / duration) * 100 : 100;

    return /* html */ `
      <style>
        :host { display: inline-block; }

        .timer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--kids-space-sm);
          font-family: var(--kids-font-family);
          will-change: transform;
        }

        .time-display {
          font-size: 2.5rem;
          font-weight: var(--kids-font-weight-bold);
          color: var(--kids-color-text);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }

        .timer.compact .time-display {
          font-size: 1.5rem;
        }

        .timer.warning .time-display {
          color: var(--kids-color-secondary);
          animation: pulse 0.8s ease infinite;
        }

        .timer.complete .time-display {
          color: var(--kids-color-accent);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        .progress-bar {
          width: 100%;
          max-width: 200px;
          height: 8px;
          background: var(--kids-color-surface-alt);
          border-radius: var(--kids-radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: var(--kids-radius-full);
          transition: width 1s linear, background 0.3s ease;
          background: var(--kids-color-primary);
        }

        .progress-fill.warning {
          background: var(--kids-color-secondary);
        }

        /* Circular variant */
        .circular-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .circular-bg {
          fill: none;
          stroke: var(--kids-color-surface-alt);
          stroke-width: 8;
        }

        .circular-fill {
          fill: none;
          stroke: var(--kids-color-primary);
          stroke-width: 8;
          stroke-linecap: round;
          transition: stroke-dashoffset 1s linear, stroke 0.3s ease;
          transform: rotate(-90deg);
          transform-origin: center;
        }

        .circular-fill.warning {
          stroke: var(--kids-color-secondary);
        }

        .circular-time {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: var(--kids-font-weight-bold);
        }

        .status-label {
          font-size: var(--kids-font-size-sm);
          font-weight: var(--kids-font-weight-normal);
          opacity: 0.6;
        }

        .compact { flex-direction: row; gap: var(--kids-space-md); }
      </style>

      <div class="timer ${variant} ${isWarning ? "warning" : ""} ${isComplete ? "complete" : ""}" part="timer">
        ${variant === "circular" ? `
          <div class="circular-wrapper">
            <svg viewBox="0 0 120 120" width="120" height="120">
              <circle class="circular-bg" cx="60" cy="60" r="50" />
              <circle
                class="circular-fill ${isWarning ? "warning" : ""}"
                cx="60" cy="60" r="50"
                stroke-dasharray="${2 * Math.PI * 50}"
                stroke-dashoffset="${2 * Math.PI * 50 * (1 - percent / 100)}"
              />
            </svg>
            <div class="circular-time ${isWarning ? "warning" : ""}">${timeStr}</div>
          </div>
        ` : `
          <div class="time-display">${timeStr}</div>
          ${variant !== "compact" ? `
            <div class="progress-bar">
              <div class="progress-fill ${isWarning ? "warning" : ""}" style="width: ${mode === "countdown" ? percent : (this._elapsed / duration) * 100}%"></div>
            </div>
          ` : ""}
        `}
        <span class="status-label">
          ${isComplete ? "Time's up!" : running ? (mode === "countdown" ? "Time remaining" : "Elapsed") : "Paused"}
        </span>
      </div>
    `;
  }

  protected onEnter(): void {
    this.motionAnimate(".timer", { scale: [0.8, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 350,
      damping: 20,
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this.boolAttr("running")) {
      this._start();
    }
  }

  disconnectedCallback(): void {
    this._stop();
  }

  private _start(): void {
    if (this._interval) return;
    this._interval = setInterval(() => this._tick(), 1000);
  }

  private _stop(): void {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  private _tick(): void {
    const duration = parseInt(this.attr("duration", "60"), 10);
    const mode = this.attr("mode", "countdown");
    const warnAt = parseInt(this.attr("warn-at", "10"), 10);

    this._elapsed++;
    const remaining = Math.max(0, duration - this._elapsed);

    this.dispatchEvent(new CustomEvent("kids-tick", {
      bubbles: true,
      detail: { remaining, elapsed: this._elapsed },
    }));

    // Warning
    if (mode === "countdown" && remaining <= warnAt && !this._warned) {
      this._warned = true;
      this.dispatchEvent(new CustomEvent("kids-warning", { bubbles: true }));
    }

    // Completion
    if (mode === "countdown" && remaining <= 0) {
      this._stop();
      this.removeAttribute("running");
      this.dispatchEvent(new CustomEvent("kids-complete", { bubbles: true }));
      this.render();
      this.motionAnimate(".timer", { scale: [1, 1.1, 1] }, { duration: 0.5 });
      return;
    }

    this.render();
  }

  /** Public method to reset the timer */
  public reset(): void {
    this._stop();
    this._elapsed = 0;
    this._warned = false;
    this.removeAttribute("running");
    this.render();
  }

  attributeChangedCallback(name: string): void {
    if (name === "running") {
      if (this.boolAttr("running")) {
        this._start();
      } else {
        this._stop();
      }
    }
    this.render();
  }
}

customElements.define("kids-timer", KidsTimer);
