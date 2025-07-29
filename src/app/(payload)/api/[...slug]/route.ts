/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import { NextRequest, NextResponse } from 'next/server'

// Fallback handler when Payload is not available
const fallbackHandler = () => {
  return NextResponse.json(
    { 
      error: 'CMS functionality unavailable', 
      message: 'This deployment does not include database connectivity' 
    },
    { status: 503 }
  )
}

// Dynamic route handlers with proper signature
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  try {
    const { REST_GET } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = REST_GET(config.default)
    return handler(request, { params })
  } catch (error) {
    console.warn('Payload CMS GET route unavailable:', error)
    return fallbackHandler()
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  try {
    const { REST_POST } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = REST_POST(config.default)
    return handler(request, { params })
  } catch (error) {
    console.warn('Payload CMS POST route unavailable:', error)
    return fallbackHandler()
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  try {
    const { REST_DELETE } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = REST_DELETE(config.default)
    return handler(request, { params })
  } catch (error) {
    console.warn('Payload CMS DELETE route unavailable:', error)
    return fallbackHandler()
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  try {
    const { REST_PATCH } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = REST_PATCH(config.default)
    return handler(request, { params })
  } catch (error) {
    console.warn('Payload CMS PATCH route unavailable:', error)
    return fallbackHandler()
  }
}
