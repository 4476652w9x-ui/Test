/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Photography lives locally in /public/images (see CREDITS.md). Unsplash is
    // pre-whitelisted so the owner can swap in remote photography later.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
