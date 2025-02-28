import { Metadata, Viewport } from 'next'

export const site = {
  name: 'Site Name',
  domain: 'example.com',
  description: 'Site Description',
  themeColor: '#000000',
  themeColorDark: '#000000'
}

export const meta: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://${site.domain}/`
  ),
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    siteName: site.name,
    url: `https://${site.domain}`,
    locale: 'en',
    type: 'website',
    description: site.description
  },
  icons: {
    icon: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true
  }
}

export const view: Viewport = {
  themeColor: site.themeColor,
  width: 'device-width',
  initialScale: 1
}
