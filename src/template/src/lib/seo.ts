import { Metadata, Viewport } from 'next'

export const site = {
  description: 'Site Description',
  domain: 'example.com',
  name: 'Site Name',
  themeColor: '#000000',
  themeColorDark: '#000000'
}

export const metadata: Metadata = {
  description: site.description,
  icons: {
    icon: '/favicon.ico'
  },
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : `https://${site.domain}/`
  ),
  openGraph: {
    description: site.description,
    locale: 'en',
    siteName: site.name,
    title: site.name,
    type: 'website',
    url: `https://${site.domain}`
  },
  robots: {
    follow: true,
    index: true
  },
  title: site.name
}

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: site.themeColor,
  width: 'device-width'
}
