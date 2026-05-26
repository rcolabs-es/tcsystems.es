type Props = {
  name: string
  description: string
  slug: string
  image: string
  serviceType: string
}

export default function ProductServiceSchema({
  name,
  description,
  slug,
  image,
  serviceType,
}: Props) {
  const baseUrl = 'https://www.tcsystems.es'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    category: 'Sistemas de cobro automático',
    url: `${baseUrl}${slug}`,
    image: image.startsWith('http') ? image : `${baseUrl}${image}`,
    provider: {
      '@type': 'Organization',
      name: 'TCSystems',
      url: baseUrl,
      logo: `${baseUrl}/logo.webp`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Empresas',
    },
    offers: {
      '@type': 'Offer',
      url: `${baseUrl}/contacto`,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      seller: {
        '@type': 'Organization',
        name: 'TCSystems',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
