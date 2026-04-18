import { animate } from "motion";
import type { AnimationOptions, DOMKeyframesDefinition } from "motion-dom";
import { themeStyles } from "./theme";

/**
 * Base class for all KidsUI web components.
 *
 * Provides:
 * - Shadow DOM with shared theme tokens
 * - Convenience animation helpers wrapping Motion's `animate()`
 * - Lifecycle hooks for entrance / exit animations
 * - Attribute-to-property reflection helpers
 */
export class KidsElement extends HTMLElement {
  /** Shadow root created in constructor */
  protected root: ShadowRoot;

  /** Tracks whether the component has played its entrance animation */
  private _entered = false;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */

  connectedCallback(): void {
    this.render();
    // Queue entrance animation for next frame so the DOM is painted first.
    requestAnimationFrame(() => {
      if (!this._entered) {
        this._entered = true;
        this.onEnter();
      }
    });
  }

  disconnectedCallback(): void {
    /* subclasses can override for cleanup */
  }

  /* ------------------------------------------------------------------ */
  /*  Rendering                                                          */
  /* ------------------------------------------------------------------ */

  /**
   * Subclasses override this to return the component's inner HTML
   * (everything inside the shadow root, excluding the shared theme style).
   */
  protected template(): string {
    return "";
  }

  /**
   * Full render — injects shared theme + component template into shadow DOM.
   * Call this whenever you need to re-render.
   */
  protected render(): void {
    this.root.innerHTML = `<style>${themeStyles}</style>${this.template()}`;
  }

  /* ------------------------------------------------------------------ */
  /*  Animation helpers                                                  */
  /* ------------------------------------------------------------------ */

  /**
   * Animate one or more elements inside the shadow root.
   * Thin wrapper around Motion's `animate()` so components don't
   * need to import it directly.
   *
   * Named `motionAnimate` to avoid conflict with `HTMLElement.animate()`.
   */
  protected motionAnimate(
    target: Element | Element[] | string,
    keyframes: DOMKeyframesDefinition,
    options?: AnimationOptions,
  ) {
    // If `target` is a CSS selector, scope it to the shadow root.
    const resolved =
      typeof target === "string"
        ? Array.from(this.root.querySelectorAll(target))
        : target;

    return animate(resolved as Element | Element[], keyframes, options);
  }

  /**
   * Called once the component is first connected and painted.
   * Override in subclasses to add entrance animations.
   */
  protected onEnter(): void {
    /* default: no-op */
  }

  /* ------------------------------------------------------------------ */
  /*  Attribute helpers                                                   */
  /* ------------------------------------------------------------------ */

  /** Read a string attribute with fallback */
  protected attr(name: string, fallback = ""): string {
    return this.getAttribute(name) ?? fallback;
  }

  /** Check if a boolean attribute is present */
  protected boolAttr(name: string): boolean {
    return this.hasAttribute(name);
  }
}
