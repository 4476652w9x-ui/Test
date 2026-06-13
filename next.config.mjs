/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The demo ships branded local SVG placeholders (in /public/images) so the
    // site renders perfectly offline and out of the box. Unsplash is
    // pre-whitelisted so the owner can drop in real remote photography later.
    // dangerouslyAllowSVG is safe here: we only serve our own trusted SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
