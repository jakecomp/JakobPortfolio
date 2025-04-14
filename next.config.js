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
  // Configure images to work with static export
  images: {
    unoptimized: true
  },
  // Enable static exports
  output: 'export'
};

module.exports = nextConfig; 