# Ainslie Plumbing Co. — Website

A production-grade marketing website for a Canberra plumbing & gasfitting
business. Built with **Next.js (App Router) + TypeScript + Tailwind CSS +
Framer Motion**, with shadcn-style accessible components and SEO-first
structured data.

> **Status:** Home page + full design system, shared layout (header / footer /
> sticky CTAs) and content data files are complete. Service, area, about,
> reviews, specials and contact pages are templatised from the data files and
> built out next.

---

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static where possible)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

Requires Node 18.18+ (Node 20/22 recommended).

---

## Where to edit content

Everything the owner will realistically want to change lives in **`/content`** —
no need to touch components.

| File | What it controls |
| --- | --- |
| `content/site.ts` | **Start here.** Business name, phone, email, ABN, licence, opening hours, founded year, rating/review count, address & geo. Anything marked `⚠ PLACEHOLDER` needs the real value before launch. Phone/click-to-call, the footer and the JSON-LD all read from this file. |
| `content/services.ts` | The 7 service categories — title, summary, sub-services, "what to expect", and FAQ accordions. Add/reorder freely; pages and nav update automatically. |
| `content/areas.ts` | The service-area suburbs and their localised copy. |
| `content/testimonials.ts` | Customer reviews (⚠ replace placeholders with real, verifiable Google reviews — and keep the rating/count in `site.ts` honest). |

Icons for services use [lucide-react](https://lucide.dev). Change a service's
`icon` import in `content/services.ts`.

### Phone number — two places, kept in sync

In `content/site.ts`, update **both** the display string and the `tel:` href:

```ts
phone: "0411 111 111",
phoneHref: "tel:+61411111111",
```

---

## Wiring up the booking form (ServiceM8 / email)

The "Book Online" CTA currently points at `/contact`. The contact form (built
in the next pass) submits through a **server action** with a stub
`sendEnquiry()`. To go live, do one of:

1. **ServiceM8 booking link** — point the `BookButton` at your ServiceM8 online
   booking URL. Edit `components/brand/cta-buttons.tsx` and change the `Link`
   `href` (or swap to an `<a>` for an external URL).
2. **Email / API submission** — implement `sendEnquiry()` (look for the
   `TODO(owner)` marker) to forward the form payload to your provider, e.g.
   [Resend](https://resend.com), SendGrid, or a ServiceM8 webhook. The action
   validates input with [Zod](https://zod.dev), so you receive a typed, clean
   object.

Search the codebase for `TODO(owner)` to find every integration point.

---

## Design system

See **[BRAND.md](./BRAND.md)** for the full colour tokens, typography and
component rationale. In short:

- **Palette:** deep eucalypt **forest green** + warm **copper** accent on warm
  white. Defined as Tailwind theme tokens (`tailwind.config.ts`) and shadcn
  semantic CSS variables (`app/globals.css`).
- **Type:** a confident display grotesk for headlines + Inter for body, both
  self-hosted via `next/font`.
- **Motion:** tasteful Framer Motion scroll reveals; fully honours
  `prefers-reduced-motion`.

---

## Imagery

The demo ships **branded SVG placeholders** in `/public/images` (clearly
labelled "replace with real photo") so it renders perfectly offline. Replace
them with real, optimised photography:

- Drop files into `/public/images` and update the `src` in the relevant
  component, **or**
- Use remote photography — `images.unsplash.com` is already whitelisted in
  `next.config.mjs`; add your own host there. Always keep meaningful `alt` text.

All images go through `next/image` for automatic optimisation and zero layout
shift.

---

## SEO

- Per-page metadata via the Next.js Metadata API (`lib/seo.ts` →
  `buildMetadata`).
- JSON-LD structured data: `Plumber` / `LocalBusiness` + `AggregateRating` on
  the home page (`components/seo/json-ld.tsx`); `Service` and `FAQPage` schema
  are added to the service pages as they're built.
- Generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`)
  — both stay in sync with the content data files.
- Add a real branded Open Graph image at `/public/og.jpg` (1200×630).

---

## Deploy to Vercel

Zero-config:

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Next.js.
3. Set your production domain (`ainslieplumbingco.com.au`) and update
   `site.url` in `content/site.ts` if it differs.
4. Deploy.

No environment variables are required for the static build. You'll add them
later if you wire the form to an email/booking API.

---

## Project structure

```
app/                 Routes, layout, fonts, globals.css, sitemap & robots
components/
  brand/             Logo, stars, CTA buttons
  home/              Home-page sections
  layout/            Header, footer, mobile sticky bar
  motion/            Reveal / Stagger animation helpers
  seo/               JSON-LD helpers
  ui/                shadcn-style primitives (button, accordion)
  section.tsx        Shared section heading
content/             ★ Editable content data files
lib/                 utils (cn), seo helpers
public/              favicon, placeholder images
```

---

_Note: the repository also contains a legacy `index.html` from a previous
unrelated project. It is not used by the Next.js app and can be safely deleted._
