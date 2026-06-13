import type { Metadata } from "next";
import { site } from "@/content/site";

/** Build per-page metadata with sensible OG/Twitter defaults. */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/" ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      // TODO(owner): add a real branded OG image at /public/og.jpg (1200×630).
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
