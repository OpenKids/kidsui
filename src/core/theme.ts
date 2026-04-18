/**
 * KidsUI Theme — CSS custom properties for kid-friendly defaults.
 *
 * Consumers can override any variable at :root or on a per-component basis.
 * All components read from these tokens so theming is centralised.
 */

export const themeStyles = /* css */ `
  :host {
    /* ---- Colors ---- */
    --kids-color-primary: #6C63FF;
    --kids-color-secondary: #FF6584;
    --kids-color-accent: #43E97B;
    --kids-color-warning: #FFBC42;
    --kids-color-info: #38BDF8;
    --kids-color-surface: #FFFFFF;
    --kids-color-surface-alt: #F4F1FE;
    --kids-color-text: #2D2B55;
    --kids-color-text-light: #FFFFFF;

    /* ---- Typography ---- */
    --kids-font-family: 'Nunito', 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
    --kids-font-size-sm: 0.85rem;
    --kids-font-size-md: 1rem;
    --kids-font-size-lg: 1.25rem;
    --kids-font-size-xl: 1.6rem;
    --kids-font-weight-normal: 600;
    --kids-font-weight-bold: 800;

    /* ---- Shape ---- */
    --kids-radius-sm: 8px;
    --kids-radius-md: 14px;
    --kids-radius-lg: 22px;
    --kids-radius-full: 9999px;

    /* ---- Spacing ---- */
    --kids-space-xs: 4px;
    --kids-space-sm: 8px;
    --kids-space-md: 16px;
    --kids-space-lg: 24px;
    --kids-space-xl: 32px;

    /* ---- Shadows (playful, soft) ---- */
    --kids-shadow-sm: 0 2px 8px rgba(108, 99, 255, 0.12);
    --kids-shadow-md: 0 4px 16px rgba(108, 99, 255, 0.18);
    --kids-shadow-lg: 0 8px 30px rgba(108, 99, 255, 0.22);

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
