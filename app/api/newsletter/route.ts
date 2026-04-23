import { NextResponse } from 'next/server'
import { NewsletterAPI, type NewsletterConfig } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

const provider = siteMetadata.newsletter?.provider as NewsletterConfig['provider'] | undefined

const handler = provider
  ? NewsletterAPI({ provider })
  : async () => NextResponse.json({ error: 'Newsletter is not configured' }, { status: 404 })

export { handler as GET, handler as POST }
