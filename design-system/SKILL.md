---
name: scenario-three-design
description: Use this skill to generate well-branded interfaces and assets for Scenario Three / Steven Green CA (a weekly professional-services finance newsletter and fractional-CFO practice, Australia), either for production or throwaway prototypes/mocks. Contains the design guidelines, colours, type, fonts, logo assets, and UI-kit components for prototyping on-brand.
user-invocable: true
---

Read the `README.md` file within this skill, then explore the other files — `colors_and_type.css` (all tokens), `preview/` (specimen cards), `ui_kits/website/` (faithful site recreation + reusable components), and `ui_kits/applications/` (newsletter & LinkedIn templates).

If creating visual artifacts (slides, mocks, throwaway prototypes, social cards, newsletter issues), copy the assets out and produce static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

Core of the system, at a glance:
- **Type:** Cabinet Grotesk (display/headings/wordmark) + Satoshi (body/UI), both from the Fontshare CDN. No serif, no monospace; figures use Satoshi `tabular-nums`.
- **Colour:** forest `#2E4034` (primary AND default text) + sage `#748C7F` accents on **white**; `#F7F8F5` cards, `#EAF0EA` interludes.
- **Signatures:** two-tone headlines (forest clause + hush `#A8B2AC` clause), sage-underlined `cap-title` labels, leading-zero `01–09` indices, `↗`/`↓` arrows, generous radii (24px cards, pill buttons), surface-shift+lift elevation, smooth no-bounce motion.
- **Voice:** working-CFO, AU English, sentence case, no emoji, no exclamation marks.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few focused questions, then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
