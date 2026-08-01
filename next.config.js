/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Standalone output is for the self-hosted Docker image, which copies
  // `.next/standalone` instead of the whole node_modules tree.
  //
  // Netlify must NOT get it. Netlify's Next.js Runtime does its own bundling,
  // and when `standalone` is set it never wires up the `/_next/image`
  // optimizer endpoint. Pages still render from static HTML, so the only
  // visible symptom is that every `next/image` is blank.
  output: process.env.NETLIFY ? undefined : "standalone",

  images: {
    // AVIF first, WebP as the fallback. Typically 20-30% smaller than WebP
    // alone on the screenshots this site is mostly made of.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    // Self-hosted behind Traefik, so nothing else sets cache headers for us.
    // Fonts and images are content-addressed by filename and never mutate.
    const immutable = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];

    return [
      { source: "/fonts/:path*", headers: immutable },
      { source: "/images/:path*", headers: immutable },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
