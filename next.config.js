/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.cdnfonts.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    // Warning: This allows production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Remove experimental edge runtime as it might be causing issues
  // experimental: {
  //   runtime: 'edge'
  // }
  // You can add additional Next.js configuration below
};

module.exports = nextConfig; 