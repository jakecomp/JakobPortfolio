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
  // Enable static exports
  output: 'export',
  // Enable image optimization for static export
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig; 