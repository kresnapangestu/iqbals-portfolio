/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Ships a minimal server bundle instead of the whole node_modules tree,
  // which is what the production Docker image copies.
  output: "standalone",

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
