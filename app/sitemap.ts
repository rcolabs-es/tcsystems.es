import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tcsystems.es'
  const currentDate = new Date()

  return [
    // Página principal
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Páginas principales
    {
      url: `${baseUrl}/productos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Páginas de productos individuales
    {
      url: `${baseUrl}/productos/elysium`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/evo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/prometheus`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog principal
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Posts del blog
    {
      url: `${baseUrl}/blog/beneficios-kioscos-autoservicio`,
      lastModified: new Date('2024-12-27'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/guia-elegir-kiosco-autoservicio`,
      lastModified: new Date('2024-12-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/mejorar-experiencia-cliente-kioscos`,
      lastModified: new Date('2024-12-23'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
} 