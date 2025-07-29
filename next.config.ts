import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
  // Ensure CSS processing works correctly with TailwindCSS v4
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  },
}

export default withPayload(nextConfig)
