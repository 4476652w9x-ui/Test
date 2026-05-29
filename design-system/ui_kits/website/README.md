# Website UI Kit — stevengreen.com.au

A faithful, interactive recreation of the **Steven Green CA** single-scroll site — the live surface that defines the shared Scenario Three / Steven Green design system. Built from the real `index.html` + `style.css`, so the structure, classes and styling match the production site.

> **Scope note.** This is the one product surface with real source. Scenario Three (the newsletter) and its site `scenariothree.com.au` are *planned* — they inherit this exact system. The newsletter & LinkedIn templates under `applications/` are **derived proposals** on this system, not copies of an existing design.

## Files
- `index.html` — mounts the full page in a scroll shell with sticky-header state, smooth in-page nav, reveal-on-scroll, animated Venn, and a working (mock) EOI form.
- `site.css` — the production stylesheet (adapted only to `@import` the Fontshare fonts).
- `components.jsx` — primitives: `Button` (pill / ghost / text-link), `CapTitle`, `SectionHead` (two-tone), `Header`, `Footer`.
- `sections.jsx` — `Hero`, `Venn`, `Offer`, `Reckoner`, `Exchange`, `Eligibility`, `Timeline`, `About`, `Contact`.

## How it works
The page scrolls inside `#kit-scroll` so the sticky header and scroll-spy behave inside the kit frame. `onNav` smooth-scrolls within that container (no `scrollIntoView`). Reveal-on-scroll uses an IntersectionObserver rooted to the scroll container.

## Faithful to the source
- **Type:** Cabinet Grotesk (display) + Satoshi (body), via Fontshare CDN — exactly as the live site loads them.
- **Two-tone headings:** `.hi-strong` (forest) + `.hi-muted` (hush) inside one `<h2>`.
- **Pill buttons**, 24px cards, 28px form, arrow-circle service rows, sage-underlined `cap-title` section labels, sage-dot eyebrows.
- **Palette:** forest `#2E4034` text on white, sage `#748C7F` accents.

## Reuse
Drop `site.css` + the component scripts into any page. Components export to `window`, so a second `<script type="text/babel">` can compose them. Swap copy freely — the system carries the brand, not the words.
