/**
 * Prefix a public asset path with the deployment base path.
 *
 * Next.js applies `basePath` to <Link> hrefs and its own asset pipeline
 * automatically, but NOT to `next/image` src when images are `unoptimized`
 * (our GitHub Pages static-export case) or to metadata icon URLs. Use this for
 * those. `NEXT_PUBLIC_BASE_PATH` is "" for normal builds and e.g. "/Test" on
 * GitHub Pages (set in next.config.mjs).
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  `${base}${path.startsWith("/") ? path : `/${path}`}`;
