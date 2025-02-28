import { MetadataRoute } from 'next'

import { site } from '@/lib/seo'

/**
 * Generates a robots.txt file for the website
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: '/',
        userAgent: '*'
      }
    ],
    sitemap: `https://${site.domain}/sitemap.xml`
  }
}
