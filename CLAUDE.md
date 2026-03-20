# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript check + production build (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

There are no tests in this project.

## Architecture

**Tech stack**: React 18 + TypeScript + Vite SPA, styled with Tailwind CSS, animated with Framer Motion, smooth scrolling via Lenis, routing via React Router DOM 6. Deployed to Vercel (`vercel.json` rewrites all routes to `/index.html`).

**Route structure**:
- `/` → `LandingPage` (composed from section components)
- `/company/*` → Company pages wrapped in `CompanyLayout` (About, Blog, Careers, Contact, Help)
- `/legal/*` → Legal pages wrapped in `LegalLayout` (Terms, Privacy, DMCA, Transparency, Takedown)

**Component organization** (`src/components/`):
- `layout/` — Header, Footer, SmoothScroll (Lenis wrapper), ScrollToTop
- `sections/` — Full-page landing sections (Hero, Features, HowItWorks, Security, etc.)
- `ui/` — Reusable primitives: `Button` (variants: primary/secondary/outline/ghost; sizes: sm/md/lg), `Card`, `AnimatedText`, `AppDownloadModal`, `FloatingParticles`
- `legal/` — `TableOfContents`, `ViolationModal`

**Styling**: Tailwind CSS with custom theme — primary `#0ea5e9` (cyan), secondary `#7c3aed` (purple), background `#0f172a` (deep navy). Custom glassmorphism utilities (`.glass`, `.glass-card`) and animations (`float`, `pulse-glow`) are defined in `tailwind.config.js`. Use the `cn()` utility from `src/utils/cn.ts` (clsx + tailwind-merge) for conditional class merging.

**Layouts**: `CompanyLayout` and `LegalLayout` provide sidebar navigation with active route highlighting and breadcrumbs — new company/legal pages should be added to the sidebar nav arrays in those layout files.
