/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
  "presets": ["next/babel"]
}

module.exports = nextConfig
