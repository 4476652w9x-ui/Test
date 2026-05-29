# Scenario Three / Steven Green CA — Website

Implementation of the **Scenario Three** design system, handed off from Claude
Design (`claude.ai/design`). The repository root is the deployable marketing
site — a faithful, dependency-free recreation of `stevengreen.com.au` — and
`design-system/` holds the full system it's built from (tokens, specimens, UI
kits, application templates).

## What's here

| Path | What |
|---|---|
| `index.html` | The single-scroll marketing site (Expression-of-Interest pilot page). Real, semantic HTML with full SEO + JSON-LD. |
| `style.css` | The site's stylesheet — the antipodean palette (forest `#2E4034` + sage `#748C7F`) on white, Cabinet Grotesk + Satoshi, generous radii, pill buttons, two-tone headlines. |
| `app.js` | Progressive enhancement: sticky-header scroll state, the Venn stroke-draw reveal, dynamic footer year, and async form submission. The page is fully readable with JS disabled. |
| `assets/` | The two-tone `scenario-three-logo.svg` wordmark (+ reversed / tight crops). |
| `design-system/` | The complete design system — see `design-system/README.md`. |

## Running it

It's a static site — no build step. Serve the repo root with any static server:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Fonts load from the Fontshare CDN (Cabinet Grotesk + Satoshi), exactly as the
source site does. To self-host, drop the woff2 files into a `fonts/` directory
and swap the `@import` / `<link>` for `@font-face`.

## The design system

`design-system/` is the source of truth for the brand, copied verbatim from the
handoff bundle so every internal relative path resolves:

- `design-system/colors_and_type.css` — all colour, type, spacing, radius,
  shadow and motion tokens, plus `.s3` semantic helpers. **Start here.**
- `design-system/README.md` — brand context, content fundamentals, visual
  foundations, iconography, and a file index.
- `design-system/SKILL.md` — Agent-Skills front-matter so the folder works as a
  downloadable Claude skill.
- `design-system/preview/` — ~23 specimen cards (Brand, Colors, Type, Spacing,
  Components).
- `design-system/ui_kits/website/` — the React prototype of this site (the
  static implementation at the repo root is derived from it).
- `design-system/ui_kits/applications/` — derived, on-system templates:
  `newsletter.html` / `newsletter-issue.html` (weekly issue) and `linkedin.html`
  (three card formats). Open directly in a browser.

## Notes

- The form posts to the Formspree endpoint defined in the source markup;
  `app.js` submits it asynchronously and shows an inline confirmation.
- A few links in the source markup point at pages that were **not** part of the
  design bundle (`reckoner.html`, `margin-reckoner.html`, `disclaimer.html`,
  `privacy.html`, the CV PDF, favicons). They're kept for fidelity and will
  resolve once those assets exist.
