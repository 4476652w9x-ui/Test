# Scenario Three — Design System

> **Antipodean palette, set in Cabinet Grotesk.** Forest green on white, sage accents, big two-tone headlines, generous radii.
> A design system for **Scenario Three** — a weekly newsletter on the financial decisions, systems and processes that run a professional-services business — and the shared brand of its author, **Steven Green CA**, fractional CFO / strategic-finance advisor (Australia).

---

## 1. What this is

**Scenario Three** is a weekly newsletter (free) written from a working-CFO perspective for owners, MDs, managing partners, CFOs, controllers and COOs of Australian & New Zealand professional-services firms (20+ FTE, real P&L). Each issue addresses **one of seven structural decisions** — cost shape, contract mix, leverage ratio, pricing model, capacity strategy, growth, equity & exits — or one of the systems/processes underneath them. It is **not** a controllership newsletter, a generic SaaS-CFO publication, an AI newsletter, or consulting bait.

**Steven Green CA** is the author — a Chartered Accountant (CA ANZ), twenty years in senior finance with sell-side M&A, now an AI-native fractional CFO / strategic-finance advisor. His site `stevengreen.com.au` is the live practice surface and the **source of truth for this design system**.

| | |
|---|---|
| **Primary brand** | Scenario Three (the newsletter) |
| **Author / practice** | Steven Green CA |
| **Live source surface** | `stevengreen.com.au` (single-scroll site) |
| **Audience** | AU/NZ professional-services owners & finance leaders, 20+ FTE |
| **Voice** | Working CFO, in the working vocabulary. No softening. |
| **Channels** | Weekly email · LinkedIn · SEO archive (planned `scenariothree.com.au`) |

---

## 2. Sources used to build this system

- **Brand summary** (pasted brief, May 2026) — worldview, the seven structural decisions, audience, voice, "what it isn't", channels, author bio.
- **`stevengreen.com.au` — the real `index.html` + `style.css`** (provided). This is the definitive source for type, colour, components and layout. The site shown is the "Australian wine" pilot EOI page; the **design system it implements is the shared one** and is recreated faithfully in `ui_kits/website/`.
- **`assets/scenario-three-logo.svg`** — the official two-tone wordmark. Colour source: "scenario" `#2E4034`, "three" `#748C7F`.

> ⚠️ An earlier draft of this system guessed an editorial-serif / warm-paper direction before the real source arrived. It was wrong and has been fully replaced. The truth is a **clean grotesque system on white** — see below.

---

## 3. The system at a glance

A clean, modern, **Pearl-inspired** single-scroll aesthetic. Two type families, two greens, lots of white.

- **Display — Cabinet Grotesk** (Fontshare, 400/500/700/800). A geometric grotesk with tight negative tracking. Carries every heading, the wordmark, and (faux-)italic pull-quotes.
- **Body / UI — Satoshi** (Fontshare, 300/400/500/700). Clean humanist-geometric sans for body, eyebrows, labels, buttons, figures.
- **No serif. No monospace.** Figures use Satoshi with `tabular-nums`.
- **Colour:** forest `#2E4034` (primary **and** default text — not black) and sage `#748C7F` (accents, rules, eyebrows) on a **white** ground, with `#F7F8F5` card surfaces and `#EAF0EA` sage-tint interludes.
- **Signature devices:** the **two-tone headline** (a strong forest clause + a muted `#A8B2AC` clause in one heading), the **sage-underlined `cap-title`** section label, leading-zero **01–09 indices**, and typographic **↗ / ↓ arrows**.
- **Shape language:** generous radii (24px cards, 28px forms, pill buttons), elevation by **surface-shift + lift**, not shadow.

> Every token lives in `colors_and_type.css`. Preview specimens are in `preview/` (Design System tab).

---

## 4. CONTENT FUNDAMENTALS — how the words are written

A working CFO talking to other operators. Precise, declarative, unhurried, quietly authoritative — confident enough to say what something *isn't*.

**Person.** First-person singular for the practice and the offer (*"I'm a chartered accountant."*, *"What I ask in return."*). Impersonal/aphoristic about the work itself (*"Bookkeepers record the past. Controllers report the present."*). Second-person, direct and sparing (*"Tell me your name, business, region…"*).

**The two-tone sentence is a content device, not just a visual one.** Headlines pair a **claim** with a **qualification**: *"Two pieces of work, at no cost."* + *"Two engagements, free, for a small number of producers selected through this EOI."* Write headings as strong-clause + muted-clause.

**Vocabulary — non-negotiable.** The working finance lexicon, unexplained: *utilisation, FTE, blended rate, recoverability, raw vs effective cost, agreed daily rate, leverage ratio, pyramid, T&M vs fixed-price, recurring engagement, sell-side M&A, covenant, stock-to-sales.* "No softening for the generalist reader."

**Casing & spelling.** Australian English (utilis**e**, organis**ation**, programme→program in tech). **Sentence case** for headlines and UI. **Wide-tracked ALL-CAPS** only for short section labels (`PRACTICE`, `OFFER`, `HOW IT RUNS`) and tiny field labels. Leading-zero numerals for indices (01–09).

**Punctuation & rhythm.** Em-dashes for asides, middots (`·`) for meta separation, short declarative kickers (*"Measured in weeks."*, *"Turnaround is short."*). Numbered structure throughout.

**Examples (verbatim from the live site):**
- *"A finance practice for Australian wine."*
- *"What I ask in return. Two things. Neither is financial."*
- *"The point is that it gets used after I leave."*
- *"No retainer behind it, no upsell, no follow-on obligation."*

**Don'ts.** No emoji. No exclamation marks. No "unlock / supercharge / game-changing". No SaaS-growth framing. No softening parentheticals for novices.

---

## 5. VISUAL FOUNDATIONS

A clean grotesque system on white. The texture is **type and whitespace**, not decoration.

**Colour.** Forest `#2E4034` is the primary brand **and** the default text colour (warmer and softer than black). Sage `#748C7F` carries eyebrows, the `cap-title` underline, list markers, quote rules and chart accents; `#9DAFA4` is a lighter sage. The ground is **white** `#FFFFFF`; cards sit on `#F7F8F5` (and `#F1F3EE` on hover); interludes use the sage tint `#EAF0EA`; dark sections/cards use forest with white text. Secondary text is `#6B7570` (muted) and `#A8B2AC` (hush — the muted half of two-tone headlines). True near-black `#0E1410` appears only inside form inputs.

**Type.** Cabinet Grotesk display + Satoshi body (see §3). Headings run a fluid clamp ramp: hero `clamp(44→104px)`, h1 `40→92`, h2 `32→60`, h3 `20→26`, all with tight negative tracking (−0.025 to −0.03em) and `line-height` near 1.0. Body 16px/1.6. Eyebrow 13px/500 sentence-case with a sage dot. Pull-quotes are Cabinet Grotesk *italic* (faux), forest, on a 2px sage left rule.

**Backgrounds.** Flat colour only — white, card grey, sage tint, or forest. **No gradients, no photographic hero washes, no textures.** (An optional portrait slot exists in `about`, rendered desaturated at 4:5 in a 16px-rounded frame.)

**Imagery & diagrams.** Sparse and documentary if photographic. The real "imagery" is **diagrams** drawn in the palette: the bespoke three-circle **Venn** (sage strokes that draw in, forest core), leverage pyramids, deal trackers, comp baskets, sensitivity tables — figures in Satoshi `tabular-nums`. Charts over photos.

**Layout.** Max width 1280px; inline padding `clamp(20→56px)`; sticky 72px header; section rhythm `clamp(72→140px)`. Sections separated by 1px `#E5E8E3` rules. Headings cap to ~920px; body to ~60–68ch. The recurring block is **section-head** = `cap-title` + two-tone `h2`. Nav collapses below 880px.

**Borders & dividers.** 1px `#E5E8E3` hairlines (section breaks, lists, timeline cards, the deal table). The `cap-title` gets a **3px sage underline**. List items use a 12px sage horizontal dash via `::before` (not bullets).

**Corner radii — generous.** Inputs 12px, timeline steps/medium 20px, **cards 24px**, **forms/large panels 28px**, **buttons + tags pill (999px)**, portrait 16px. Nothing is square.

**Cards.** Flat `#F7F8F5`, 24px radius, **no border, no shadow at rest**; hover shifts to `#F1F3EE` and lifts `translateY(-2px)`. Bordered variants (reckoner, timeline) use a 1px rule, hover → sage border + a whisper of shadow (`0 2px 4px rgba(46,64,52,0.05)`). Forest cards invert to white text. **No coloured left-border-accent cards.**

**Elevation.** Almost no shadow — elevation is **surface-shift + 1–2px lift**. Reserve real shadow for overlays only.

**Motion.** Easing `cubic-bezier(0.22, 1, 0.36, 1)` — smooth ease-out, **no bounce**. Reveal-on-scroll: opacity + `translateY(14px)` over 700ms. The Venn rings stroke-draw in; the core fades. Arrows nudge `translate(2px,-2px)` on hover; buttons lift 1px; smooth in-page scrolling. All motion respects `prefers-reduced-motion`.

**States.** Links → sage on hover. Pill button → forest-dark + lift; ghost → fills forest. Service arrow-circle → fills forest, arrow nudges. Inputs → forest border on focus; page focus ring is 2px sage, offset 3px. Selection: forest background, white text.

**Transparency & blur.** The sticky header uses `color-mix(white 84%)` + `saturate(180%) blur(14px)` once scrolled, with a hairline bottom border. Otherwise opaque. No glassmorphism elsewhere.

---

## 6. ICONOGRAPHY

Deliberately **typographic and minimal — there is no icon library.**

- **Unicode arrows are the entire affordance system:**
  - `↗` (U+2197) — external link / CTA / "go" (*"Express interest ↗"*, *"LinkedIn ↗"*). Wrapped in `.ar`, it nudges `translate(2px,-2px)` on hover.
  - `↓` (U+2193) — download / scroll-to (*"Download CV ↓"*, *"Try the reckoners ↓"*).
  - `↗` inside a **44px circle** (`.svc-arrow`) is the affordance for service/list rows; the circle fills forest on hover.
- **Sage middot** `·` separates meta (*"Strategic Finance · Australian Wine"*).
- **Leading-zero indices** `01`–`09` (Satoshi 600, sage) act as the only "icon set" — numbering offers, timeline steps, decisions.
- **List markers** are a 12px sage horizontal **dash** (`::before`), never disc bullets.
- **Bespoke SVG only:** the three-circle Venn diagram. Financial diagrams are CSS/SVG in the palette. Do not introduce a drawn icon set.
- **No emoji. Ever.** Not in product, copy, or on LinkedIn.
- **Logos / trust marks:** affiliations (CA ANZ, Xero, KPMG, Deloitte, Claude) render as **typographic wordmarks or muted forest/grayscale logos** in a single unified row — see `.trust-*` in the website kit's `site.css`.

⚠️ **Substitution flag:** none required — the brand ships no icon font, so nothing was substituted. If functional UI ever needs line icons, match the restraint with a 1.5px stroke set (e.g. Lucide) in forest/sage, and document it here.

---

## 7. Index — what's in this folder

| Path | What |
|---|---|
| `colors_and_type.css` | **Start here.** All colour, type, spacing, radius, shadow, motion tokens + `.s3` semantic helpers. |
| `README.md` | This file. |
| `SKILL.md` | Agent-Skills front-matter so this folder works as a downloadable Claude skill. |
| `assets/` | `scenario-three-logo.svg` (two-tone) + `scenario-three-logo-reversed.svg` (on-forest). |
| `fonts/` | Empty — Cabinet Grotesk + Satoshi load from the Fontshare CDN (see note in `colors_and_type.css`). |
| `preview/` | ~23 specimen cards that populate the Design System tab (Brand, Colors, Type, Spacing, Components). |
| `ui_kits/website/` | **Faithful recreation of `stevengreen.com.au`** — `index.html`, `site.css`, `components.jsx`, `sections.jsx`, `README.md`. |
| `ui_kits/applications/` | Derived, on-system templates — `newsletter.html` (weekly issue), `linkedin.html` (3 card formats), `README.md`. |

**Fonts:** Cabinet Grotesk + Satoshi are free under the ITF Font Licence and load from `api.fontshare.com`. To self-host, drop the woff2 into `fonts/` and swap the `@import` in `colors_and_type.css` for `@font-face`.
