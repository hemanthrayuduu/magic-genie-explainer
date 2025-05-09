/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // WARNING: This allows production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 