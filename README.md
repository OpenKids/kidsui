# KidsUI 🎨

[![Demo](https://img.shields.io/badge/demo-live-green.svg)](https://openkids.github.io/kidsui/)
[![npm](https://img.shields.io/npm/v/@openkids/kidsui.svg)](https://www.npmjs.com/package/@openkids/kidsui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A playful, animation-rich UI component library for kids — built with Web Components and Motion.

## 🚀 Quick Start

### npm

```bash
npm install @openkids/kidsui
```

```javascript
import '@openkids/kidsui';
```

### CDN

```html
<script type="module" src="https://unpkg.com/@openkids/kidsui/dist/kidsui.js"></script>
```

### Usage

```html
<kids-button variant="primary">Click me!</kids-button>
<kids-badge animate="bounce">New!</kids-badge>
<kids-toggle checked>Fun Mode</kids-toggle>
```

## 🧩 Components

**Core:** button, card, badge, toggle, input, textarea, select, checkbox, radio, chip, avatar, tooltip, spinner, alert, progress, slider, tabs, accordion, dialog, toast

**Learning:** callout, flashcard, match-grid, sort-list, timer, question-card, choice-card, lesson-progress, achievement

## 🎨 Theming

Override CSS custom properties:

```css
:root {
  --kids-primary: #6366f1;
  --kids-accent: #f43f5e;
  --kids-font-family: 'Nunito', sans-serif;
}
```

## 🛠️ Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## 📦 Package

- **npm:** `@openkids/kidsui`
- **GitHub:** [OpenKids/kidsui](https://github.com/OpenKids/kidsui)
- **License:** MIT
