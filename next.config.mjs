/** @type {import('next').NextConfig} */

// When building for GitHub Pages we export a fully static site. The Pages
// workflow sets BUILD_STATIC=true and passes the repo sub-path as
// PAGES_BASE_PATH (e.g. "/Test"). A normal `next build` / `next dev` is
// unaffected and keeps image optimisation.
const isStaticExport = process.env.BUILD_STATIC === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Exposed to the client so the asset() helper can prefix next/image src and
  // metadata icons on GitHub Pages (where basePath isn't applied to them).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // Photography lives locally in /public/images (see CREDITS.md). Unsplash is
    // pre-whitelisted so the owner can swap in remote photography later.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // The Pages CDN can't run the Next image optimiser, so serve images as-is.
    unoptimized: isStaticExport,
  },
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true, // serve nested routes as /path/index.html on Pages
      }
    : {}),
};

export default nextConfig;
