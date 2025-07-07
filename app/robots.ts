import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://tcsystems.es/sitemap.xml',
    host: 'https://tcsystems.es',
  }
} 