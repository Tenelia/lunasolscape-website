/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import { NextRequest, NextResponse } from 'next/server'

// Fallback handler when Payload is not available
const fallbackHandler = () => {
  return NextResponse.json(
    { 
      error: 'GraphQL functionality unavailable', 
      message: 'This deployment does not include database connectivity' 
    },
    { status: 503 }
  )
}

export async function GET(request: NextRequest) {
  try {
    const { GRAPHQL_POST } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = GRAPHQL_POST(config.default)
    return handler(request)
  } catch (error) {
    console.warn('Payload GraphQL GET route unavailable:', error)
    return fallbackHandler()
  }
}

export async function POST(request: NextRequest) {
  try {
    const { GRAPHQL_POST } = await import('@payloadcms/next/routes')
    const config = await import('@payload-config')
    const handler = GRAPHQL_POST(config.default)
    return handler(request)
  } catch (error) {
    console.warn('Payload GraphQL POST route unavailable:', error)
    return fallbackHandler()
  }
}
