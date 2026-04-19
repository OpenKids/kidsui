/**
 * KidsUI Theme — CSS custom properties for kid-friendly defaults.
 *
 * Inspired by vibrant, optimistic children's media design — a full-spectrum
 * rainbow palette that celebrates curiosity, play, and learning.
 *
 * Consumers can override any variable at :root or on a per-component basis.
 * All components read from these tokens so theming is centralised.
 */

export const themeStyles = /* css */ `
  :host {
    /* ---- Colors ---- */
    --kids-color-primary: #4F46E5;
    --kids-color-secondary: #F43F7A;
    --kids-color-accent: #10B964;
    --kids-color-warning: #F5A623;
    --kids-color-error: #EF4444;
    --kids-color-info: #06B6D4;
    --kids-color-success: #10B964;
    --kids-color-surface: #FFFFFF;
    --kids-color-surface-alt: #F5F3FF;
    --kids-color-text: #1E1B4B;
    --kids-color-text-light: #FFFFFF;
    --kids-color-border: #E0DAF5;

    /* ---- Derived alpha colors (for backgrounds, glows, overlays) ---- */
    --kids-alpha-primary-12: rgba(79, 70, 229, 0.12);
    --kids-alpha-primary-15: rgba(79, 70, 229, 0.15);
    --kids-alpha-primary-18: rgba(79, 70, 229, 0.18);
    --kids-alpha-secondary-12: rgba(244, 63, 122, 0.12);
    --kids-alpha-secondary-15: rgba(244, 63, 122, 0.15);
    --kids-alpha-accent-12: rgba(16, 185, 100, 0.12);
    --kids-alpha-accent-15: rgba(16, 185, 100, 0.15);
    --kids-alpha-accent-20: rgba(16, 185, 100, 0.2);
    --kids-alpha-warning-12: rgba(245, 166, 35, 0.12);
    --kids-alpha-warning-15: rgba(245, 166, 35, 0.15);
    --kids-alpha-error-12: rgba(239, 68, 68, 0.12);
    --kids-alpha-error-15: rgba(239, 68, 68, 0.15);
    --kids-alpha-info-12: rgba(6, 182, 212, 0.12);

    /* ---- Typography ---- */
    --kids-font-family: 'Nunito', 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
    --kids-font-size-sm: 0.85rem;
    --kids-font-size-md: 1rem;
    --kids-font-size-lg: 1.25rem;
    --kids-font-size-xl: 1.6rem;
    --kids-font-weight-normal: 600;
    --kids-font-weight-bold: 800;

    /* ---- Shape ---- */
    --kids-radius-sm: 10px;
    --kids-radius-md: 16px;
    --kids-radius-lg: 24px;
    --kids-radius-full: 9999px;

    /* ---- Spacing ---- */
    --kids-space-xs: 4px;
    --kids-space-sm: 8px;
    --kids-space-md: 16px;
    --kids-space-lg: 24px;
    --kids-space-xl: 32px;

    /* ---- Shadows (warm, friendly) ---- */
    --kids-shadow-sm: 0 2px 8px rgba(30, 27, 75, 0.08);
    --kids-shadow-md: 0 4px 16px rgba(30, 27, 75, 0.10);
    --kids-shadow-lg: 0 8px 30px rgba(30, 27, 75, 0.14);

    /* ---- Animation ---- */
    --kids-anim-duration-fast: 0.15s;
    --kids-anim-duration-normal: 0.3s;
    --kids-anim-duration-slow: 0.6s;
    --kids-anim-spring-bounce: 0.35;
    --kids-anim-spring-duration: 0.5;

    /* ---- Base styles ---- */
    font-family: var(--kids-font-family);
    color: var(--kids-color-text);
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
