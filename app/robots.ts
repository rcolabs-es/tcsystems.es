import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/studio/', '/api/'],
      },
    ],
    sitemap: 'https://www.tcsystems.es/sitemap.xml',
    host: 'https://www.tcsystems.es',
  }
} 