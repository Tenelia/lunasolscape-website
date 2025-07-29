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

// Only apply Payload wrapper if DATABASE_URI is available and we're not skipping Payload build
// This allows the app to build and run without Payload CMS for static deployment
const shouldUsePayload = 
  process.env.DATABASE_URI && 
  !process.env.SKIP_PAYLOAD_BUILD && 
  process.env.NODE_ENV !== 'production'

export default shouldUsePayload ? withPayload(nextConfig) : nextConfig
