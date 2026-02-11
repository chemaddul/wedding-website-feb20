# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Architecture

This is a single-page React wedding website built with Vite and Tailwind CSS.

**Stack:** React 18 + Vite 5 + Tailwind CSS 3

**Structure:**
- `src/App.jsx` - The entire application lives in one component with inline event data
- `src/index.css` - Tailwind directives + Noto Sans Telugu font import
- `src/main.jsx` - React entry point

**Key patterns:**
- All wedding event data (3 events with rituals, venues) is defined as a static `events` array at the top of App.jsx
- Modal-based event detail view using `selectedEvent` state
- Styling uses inline style objects for gradients/shadows combined with Tailwind utility classes
- Telugu text appears alongside English throughout (names, blessings, event names)
- Google Maps links open in new tabs for venue locations

**Deployment:** Designed for Vercel or Netlify static hosting.
