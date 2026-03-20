# Accelate — Design Matrix

This document defines the shared design language across all Accelate product landing pages. Every new product page must follow these rules to maintain visual consistency across the organization.

---

## 1. Color Palette

| Token        | Hex / Value                    | Usage                                      |
|--------------|--------------------------------|--------------------------------------------|
| `background` | `#0f172a`                      | Page background (deep navy)                |
| `background-end` | `#1e293b`                  | Gradient end (body: top → bottom)          |
| `primary`    | `#0ea5e9`                      | CTAs, links, highlights, icon tints        |
| `secondary`  | `#7c3aed`                      | Accent gradients, secondary buttons, orbs  |
| `accent`     | `#f43f5e`                      | Badges, alerts, destructive actions        |
| `surface`    | `rgba(255, 255, 255, 0.1)`     | Glassmorphism base fill                    |
| `slate-950`  | Tailwind `slate-950`           | Footer background                          |
| `gray-400`   | Tailwind `gray-400`            | Body / supporting text                     |
| `gray-500`   | Tailwind `gray-500`            | Muted / meta text                          |
| White        | `#ffffff`                      | Headings, primary text                     |

**Gradient rules:**
- Logo icon: `bg-gradient-to-br from-primary to-secondary`
- Hero headline gradient: `bg-gradient-to-r from-cyan-400 to-purple-500` (text clip)
- Section headings: `bg-gradient-to-r from-white to-gray-400` (text clip)
- Page body: `linear-gradient(to bottom, #0f172a, #1e293b)` on `<body>`

---

## 2. Typography

| Role                  | Class / Value                                      |
|-----------------------|----------------------------------------------------|
| Font family           | `Inter` (sans-serif fallback)                      |
| Hero H1               | `text-5xl md:text-7xl font-bold leading-tight`     |
| Section heading (H2)  | `text-4xl md:text-5xl font-bold`                   |
| Card / sub-heading    | `text-xl font-bold`                                |
| Body / description    | `text-lg text-gray-400`                            |
| Small / meta          | `text-sm text-gray-500`                            |
| Nav links             | `text-sm font-medium text-gray-300`                |

Gradient text is applied with `bg-clip-text text-transparent bg-gradient-*`.

---

## 3. Background & Depth System

Every page uses a layered depth system:

1. **Page gradient** — `background` → `background-end`, full viewport height.
2. **Ambient orbs** — Large blurred circles (`blur-[100px]`, size `~500px`) positioned off-screen corners. Use `primary/20` and `secondary/20` opacity. Apply `animate-pulse-glow`.
3. **Section orbs** — Centered behind content grids (`blur-[120px]`, size `~800px`) at reduced opacity (`purple-500/5`, etc.).
4. **Glass surfaces** — Cards and overlays sit on top using glassmorphism (see §5).

Never use a plain white or light background. All pages are dark-first.

---

## 4. Spacing & Layout

| Token        | Value                |
|--------------|----------------------|
| Container    | `container mx-auto px-4` |
| Section padding | `py-24`           |
| Card gap (grid) | `gap-8`           |
| Heading bottom margin | `mb-16`    |
| Card inner padding | `p-6`         |
| Header height (scrolled) | `py-4`  |
| Header height (top) | `py-6`       |

**Grid patterns used on landing pages:**
- Feature cards: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- Hero (text + visual): `grid lg:grid-cols-2 gap-12 items-center`
- Footer columns: `grid md:grid-cols-2 lg:grid-cols-5 gap-12`

---

## 5. Glassmorphism

Two utility classes must be available on every product page:

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
```

- `.glass` — floating tooltips, badges, small overlays (blur: 10px, fill: 5%)
- `.glass-card` — primary content cards, hero visuals (blur: 16px, fill: 3%)
- Corner radius for glass surfaces: `rounded-2xl` (cards) or `rounded-3xl` (hero visual)
- Border always `border-white/10` or `border-white/20` — never opaque

---

## 6. Buttons

All buttons are pill-shaped (`rounded-full`), animated on hover (`scale: 1.05`) and tap (`scale: 0.95`).

| Variant    | Visual                                                              |
|------------|---------------------------------------------------------------------|
| `primary`  | `bg-primary text-white`, shadow `shadow-primary/20`                 |
| `secondary`| `bg-secondary text-white`, shadow `shadow-secondary/20`             |
| `outline`  | `border border-primary/50 text-primary`, hover `bg-primary/10`      |
| `ghost`    | `text-gray-300`, hover `text-white bg-white/5`                      |

| Size | Padding             |
|------|---------------------|
| `sm` | `px-4 py-2 text-sm` |
| `md` | `px-6 py-3 text-base` |
| `lg` | `px-8 py-4 text-lg` |

Focus ring: `focus:ring-2 focus:ring-primary/50 focus:ring-offset-2`

Prominent hero CTAs may add a glow: `shadow-[0_0_30px_rgba(14,165,233,0.3)]`

---

## 7. Cards

| Variant   | Style                                                              |
|-----------|--------------------------------------------------------------------|
| `glass`   | `.glass-card text-white` (default)                                 |
| `default` | `bg-slate-800 border border-slate-700`                             |
| `neon`    | `bg-black border border-primary/50 shadow-[0_0_15px_rgba(14,165,233,0.3)]` |

Feature cards use a **mouse-tracking radial gradient** on hover:
- On `mousemove`, compute cursor position relative to card
- Overlay: `radial-gradient(650px circle at {x}px {y}px, rgba(14,165,233,0.15), transparent 80%)`
- This overlay has `opacity-0` default → `opacity-100` on `group-hover`

Card icon containers: `rounded-lg bg-primary/10 p-3`, icon color `text-primary`, hover: `bg-primary/20 scale-110`.

---

## 8. Animations

| Name             | Definition                                                    | Usage                          |
|------------------|---------------------------------------------------------------|--------------------------------|
| `float`          | `translateY(0 → -20px → 0)` over 6s ease-in-out              | Hero visuals, decorative cards |
| `float-delayed`  | Same as float, 3s delay                                       | Secondary floating elements    |
| `pulse-glow`     | `opacity + scale(1.05)` over 4s cubic-bezier(0.4,0,0.6,1)    | Background ambient orbs        |

**Scroll-triggered entrance** (apply to all major sections):
```
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true }
transition: { delay: index * 0.1 }   ← stagger for lists
```

**Page entrance** (header):
```
initial: { y: -100 }
animate: { y: 0 }
transition: { duration: 0.5 }
```

**Smooth scroll**: Use Lenis for page-level smooth scrolling. All anchor-based navigation must go through Lenis.

---

## 9. Header

- Fixed, full-width, `z-50`
- **Transparent** at top of page → **`bg-background/80 backdrop-blur-md border-b border-white/10`** after 50px scroll
- Logo: gradient icon box (`from-primary to-secondary rounded-lg`) + product name in white
- Nav links: `text-sm font-medium text-gray-300 hover:text-white`
- Primary CTA button (size `sm`) on the right
- Mobile: hamburger toggle, full-width overlay menu with `bg-background/95 backdrop-blur-xl`

---

## 10. Footer

- Background: `bg-slate-950`, top border: `border-white/5`
- Padding: `pt-20 pb-10`
- Grid: logo + tagline (2 cols) + Product links + Company links + Legal links
- Footer bottom: copyright left, email subscribe input right
  - Subscribe input: `bg-white/5 rounded-full` pill, `Button size="sm"` inside
- Link hover color: `hover:text-primary`

---

## 11. Section Anatomy

Every landing section follows this pattern:

```
<section id="section-name" className="py-24 relative overflow-hidden">
  {/* Optional: ambient orb or decorative gradient */}
  <div className="absolute ... bg-*/5 rounded-full blur-[120px] pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Section Title
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Supporting description.
      </p>
    </div>

    {/* Content grid */}
  </div>
</section>
```

The hero section is a special case: `min-h-screen flex items-center`, two-column grid (text left, visual right on desktop).

---

## 12. Iconography

Use **Lucide React** exclusively for all icons. Do not mix icon libraries.

- Icon size in cards/features: `h-6 w-6` or `w-5 h-5`
- Always render inside a tinted container (e.g. `bg-primary/10 p-3 rounded-lg`) — never bare in body text

---

## 13. Status / Badge Pattern

Inline status indicators in the hero use:
```
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
Text label in cyan-400
```

Floating info badges (mini glass cards) follow `.glass p-4 rounded-2xl` with an icon + two lines (bold label + muted sub-label in `text-[10px]`).

---

## 14. Interaction Principles

- **No harsh borders** — all borders use white at low opacity (`/5` to `/20`)
- **Hover states always transition** — use `transition-colors` or `transition-all duration-300`
- **Group interactions** — use Tailwind `group` + `group-hover:` for card-level hover cascades
- **Scale on hover** — interactive icon containers use `group-hover:scale-110`
- **No layout shifts** — animations use `transform` and `opacity` only, never layout properties

---

## 15. Tech Stack (Reference Implementation)

| Concern         | Library                    |
|-----------------|----------------------------|
| Framework       | React 18 + TypeScript      |
| Build           | Vite                       |
| Styling         | Tailwind CSS 3             |
| Animation       | Framer Motion              |
| Smooth scroll   | Lenis                      |
| Routing         | React Router DOM 6         |
| Icons           | Lucide React               |
| Class merging   | clsx + tailwind-merge (`cn()` utility) |

Teams using a different framework must still reproduce the visual rules in §1–14. The tech stack in this section is a reference, not a requirement.
