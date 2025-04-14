/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Simple static export configuration
  output: 'export',
  // Configure images for static export
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 