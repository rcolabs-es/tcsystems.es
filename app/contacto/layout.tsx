import type { Metadata } from 'next'
import { faqPageSchema } from '@/lib/schema'
import { contactoFaqs } from './faq'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
  title: 'Contacto | TCSystems - Kioscos y Sistemas de Cobro Automático',
  description:
    'Contacta con TCSystems: teléfono 916 216 237, consultoria@tcsystems.es o WhatsApp. Consulta y presupuesto gratuitos para kioscos de autoservicio y sistemas de cobro automático. Respuesta en menos de 24 horas.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tcsystems.es/contacto',
    siteName: 'TCSystems',
    title: 'Contacto | TCSystems',
    description:
      'Consulta y presupuesto gratuitos para kioscos de autoservicio y sistemas de cobro automático. Respuesta en menos de 24 horas.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contacto TCSystems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | TCSystems',
    description:
      'Consulta y presupuesto gratuitos para kioscos de autoservicio y sistemas de cobro automático.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://www.tcsystems.es/contacto',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto TCSystems',
  url: 'https://www.tcsystems.es/contacto',
  inLanguage: 'es-ES',
  isPartOf: {
    '@type': 'WebSite',
    name: 'TCSystems',
    url: 'https://www.tcsystems.es',
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'TCSystems',
    url: 'https://www.tcsystems.es',
    telephone: '+34916216237',
    email: 'consultoria@tcsystems.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C. Centauro, 15',
      postalCode: '28971',
      addressLocality: 'Griñón',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(contactoFaqs)),
        }}
      />
      {children}
    </>
  )
}
