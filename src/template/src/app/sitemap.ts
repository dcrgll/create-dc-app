import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

import { site } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()

  let domain = headersList.get('host') || site.domain

  if (process.env.NODE_ENV === 'development') {
    // for local development and preview URLs
    domain = 'example.com'
  }

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date()
    }
  ]
}
