/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Skip font optimization during build
  optimizeFonts: false,

  // Or use experimental flag
  experimental: {
    fontLoaders: [],
  },
};

module.exports = nextConfig;
