/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // WARNING: This allows production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  // Helps with Render deployment
  output: 'standalone',
  // Ensure proper headers for Render
  poweredByHeader: false,
  // Use the correct port
  serverRuntimeConfig: {
    port: process.env.PORT || 10000
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}

module.exports = nextConfig 