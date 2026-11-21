import type { Metadata } from 'next'
import { faqPageSchema } from '@/lib/schema'
import { integradoresFaqs } from './faq'

const PAGE_URL = 'https://www.tcsystems.es/integradores-kioscos-autoservicio'
const TITLE = 'Kioscos autoservicio para integrar tu software | TCSystems'
const DESCRIPTION =
  'Fabricamos el kiosco, tú pones el software: kioscos autoservicio de catálogo o a medida, con API para cobrar en efectivo y tarjeta. Hablemos.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'kioscos autoservicio para integrar software',
    'fabricante de kioscos autoservicio a medida',
    'fabricante de terminales autoservicio a medida',
    'kiosco autoservicio para integradores',
    'hardware para software de gestión',
    'integrar software en kiosco autoservicio',
    'kiosco autoservicio marca blanca',
    'hardware autoservicio para TPV',
    'kiosco autoservicio con API',
    'API pago efectivo y tarjeta kiosco',
  ],
  authors: [{ name: 'TCSystems' }],
  creator: 'TCSystems',
  publisher: 'TCSystems',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: PAGE_URL,
    siteName: 'TCSystems',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/elysium-plus.png',
        width: 1200,
        height: 630,
        alt: 'Kiosco autoservicio Elysium Plus de TCSystems, listo para integrar software de terceros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/elysium-plus.png'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kioscos autoservicio para integrar software de terceros',
  serviceType: 'Fabricación de kioscos y terminales de autoservicio para integradores de software',
  description:
    'Fabricación de kioscos y terminales de autoservicio, de catálogo o a medida, sin software, con API y drivers para cobrar en efectivo y tarjeta, para que empresas de software e integradores instalen su propia aplicación en cualquier tipo de establecimiento.',
  url: PAGE_URL,
  image: 'https://www.tcsystems.es/elysium-plus.png',
  category: 'Kioscos de autoservicio',
  provider: {
    '@type': 'Organization',
    name: 'TCSystems',
    url: 'https://www.tcsystems.es',
    logo: 'https://www.tcsystems.es/logo.webp',
  },
  areaServed: { '@type': 'Country', name: 'España' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Empresas de software, desarrolladores e integradores',
  },
  offers: {
    '@type': 'Offer',
    url: `${PAGE_URL}#contacto`,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.tcsystems.es' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Integradores de software',
      item: PAGE_URL,
    },
  ],
}

export default function IntegradoresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(integradoresFaqs)) }}
      />
      {children}
    </>
  )
}
