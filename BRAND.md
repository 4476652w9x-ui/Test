# Ainslie Plumbing Co. — Brand & Design System

This document records the deliberate design decisions behind the site so the
look stays consistent as it grows. The goal: a premium, distinctly *local*
trades brand that looks a generation newer than the competition — not a
templated plumber site.

---

## Colour

A real palette built from **one brand hue + one warm accent**, on lots of warm
white space. We deliberately avoid the default "plumber blue gradient" cliché.

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| **Brand** | `forest-800` | `#1c3e2c` | Headers, primary surfaces, logo mark |
| Brand (deep) | `forest-950` | `#0b1a13` | Footer, dark feature panels |
| Brand (tint) | `forest-50` / `forest-100` | `#f1f6f2` / `#dcebe0` | Section backgrounds, icon chips |
| **Accent** | `copper-500` | `#bd6630` | Primary CTA ("Book Online"), highlights, focus ring |
| Accent (deep) | `copper-600` / `copper-700` | `#a85327` / `#8a4022` | Hover states, links |
| Accent (tint) | `copper-100` | `#f4e2d2` | Accent icon chips |
| Ink | `ink` / `ink-soft` / `ink-muted` | `#11140f` / `#2a2e26` / `#5b6157` | Body text hierarchy |
| Background | warm off-white | `hsl(80 14% 98%)` | Page background |

Full 50–950 scales for `forest` and `copper` live in `tailwind.config.ts`.
The shadcn **semantic tokens** (`--primary`, `--accent`, `--ring`, …) are defined
in `app/globals.css` and map onto these scales — change them there to retune the
whole UI at once.

**Contrast / accessibility:** forest-800/900 and ink on white meet WCAG 2.1 AA.
Copper is used for accents and large/bold text; copper-600 is used where copper
sits on light backgrounds as text. White text sits on forest-800+ and copper-500+
only. The focus ring is copper at 2px with a background offset, visible on every
interactive element.

---

## Typography

Self-hosted via `next/font` (zero layout shift, no runtime external requests).

| Role | Family | Notes |
| --- | --- | --- |
| **Display** | Bricolage Grotesque (`--font-display`) | Big, tight, characterful headlines. Weights 500–800. Stands in for "Clash Display" so the project runs out of the box. |
| **Body** | Inter (`--font-inter`) | Clean, highly legible at all sizes. Generous line-height for readability. |

Headlines use tight tracking + `text-wrap: balance`; body copy is constrained to
a comfortable `max-w-prose` (~68ch) measure with `text-wrap: pretty`.

### Swapping in Clash Display (optional)

Bricolage Grotesque is the runnable default. To use the real
[Clash Display](https://www.fontshare.com/fonts/clash-display):

1. Download the Clash Display `.woff2` files from Fontshare.
2. Put them in `app/fonts/`.
3. In `app/fonts.ts`, replace the `Bricolage_Grotesque` import with
   `next/font/local`:

   ```ts
   import localFont from "next/font/local";
   export const fontDisplay = localFont({
     src: [
       { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500" },
       { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600" },
       { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700" },
     ],
     variable: "--font-display",
     display: "swap",
   });
   ```

Nothing else changes — everything reads from the `--font-display` variable.

---

## Layout & spacing

- Centered container, max width `1280px`, responsive padding.
- Strong grid with intentional **asymmetry** where it earns attention (e.g. the
  hero's 1.05fr / 0.95fr split, the feature block's 2-column panel).
- Generous vertical rhythm (`py-20` between major sections).
- Rounded geometry: `--radius` = `0.75rem`; feature panels use `2rem` radii;
  buttons and chips are fully pill-shaped.
- Two soft shadow tiers: `shadow-soft` (resting) and `shadow-lift` (hover/raised).

---

## Components

shadcn-style, accessible primitives in `components/ui` (built on Radix):

- **Button** (`components/ui/button.tsx`) — variants: `copper` (primary CTA),
  `forest`, `outline`, `ghost`, `white`, `link`; sizes `sm`/`md`/`lg`. Built on
  `class-variance-authority` with `asChild` support.
- **Accordion** (`components/ui/accordion.tsx`) — for SEO-friendly FAQ sections.

Brand components in `components/brand`: `Logo` (droplet-meets-leaf mark),
`Stars` (accessible rating), `CallButton` / `BookButton` (the two conversion
CTAs, defined once and reused everywhere).

Motion helpers in `components/motion`: `Reveal`, `Stagger`, `StaggerItem` —
tasteful fade/slide on scroll. **All motion respects `prefers-reduced-motion`**
(renders instantly, no transform) and never blocks content or shifts layout.

---

## Conversion patterns

Both CTAs carry equal weight and appear on every page:

1. **Call now** — click-to-call, phone number always visible in the header.
2. **Book Online** — copper primary button.

Plus a **persistent mobile sticky bottom bar** (`Call · Book · Emergency`) and a
sticky header that **condenses on scroll**. A repeatable `CtaBand` closes most
pages.

---

## Voice

Trustworthy, local, family-owned; premium but approachable. Short, confident
sentences. Leads with the customer's problem, backs claims with the guarantee,
licensing and local knowledge. Australian English spelling throughout.
