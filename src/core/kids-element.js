import { themeStyles } from "./theme";

/**
 * Base class for all KidsUI web components.
 *
 * Provides:
 * - Shadow DOM with shared theme tokens
 * - Lifecycle hooks for entrance / exit animations
 * - Attribute-to-property reflection helpers
 */
export class KidsElement extends HTMLElement {
  /** Shadow root created in constructor */
  root;

  /** Tracks whether the component has played its entrance animation */
  _entered = false;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */

  connectedCallback() {
    this.render();
    if (!this._entered) {
      this._entered = true;
      this.onEnter();
    }
  }

  disconnectedCallback() {
    /* subclasses can override for cleanup */
  }

  /* ------------------------------------------------------------------ */
  /*  Rendering                                                          */
  /* ------------------------------------------------------------------ */

  /**
   * Subclasses override this to return the component's inner HTML
   * (everything inside the shadow root, excluding the shared theme style).
   */
  template() {
    return "";
  }

  /**
   * Full render — injects shared theme + component template into shadow DOM.
   * Call this whenever you need to re-render.
   */
  render() {
    this.root.innerHTML = `<style>${themeStyles}</style>${this.template()}`;
  }

  /* ------------------------------------------------------------------ */
  /*  Animation lifecycle                                                */
  /* ------------------------------------------------------------------ */

  /**
   * Called once the component is first connected.
   * Override in subclasses to add entrance animations.
   */
  onEnter() {
    /* default: no-op */
  }

  /* ------------------------------------------------------------------ */
  /*  Attribute helpers                                                   */
  /* ------------------------------------------------------------------ */

  /** Read a string attribute with fallback */
  attr(name, fallback = "") {
    return this.getAttribute(name) ?? fallback;
  }

  /** Check if a boolean attribute is present */
  boolAttr(name) {
    return this.hasAttribute(name);
  }
}
