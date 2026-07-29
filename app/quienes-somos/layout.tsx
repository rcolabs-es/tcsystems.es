import type { Metadata } from 'next'
import { faqPageSchema } from '@/lib/schema'
import { quienesSomosFaqs } from './faq'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
  title: 'Quiénes somos | TCSystems, fabricante español de kioscos de autoservicio',
  description:
    'TCSystems es un fabricante español de kioscos de autoservicio y sistemas de cobro automático con sede en Griñón (Madrid). Fundada en 2010: más de 14 años, más de 500 instalaciones y 5 delegaciones en España. Diseño, fabricación, instalación y SAT propios.',
  keywords: [
    'TCSystems',
    'quiénes somos TCSystems',
    'fabricante español kioscos autoservicio',
    'fabricante sistemas de cobro automático España',
    'empresa kioscos autoservicio Madrid',
    'TCSystems Griñón',
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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tcsystems.es/quienes-somos',
    siteName: 'TCSystems',
    title: 'Quiénes somos | TCSystems, fabricante español de kioscos de autoservicio',
    description:
      'Fabricante español de kioscos de autoservicio y sistemas de cobro automático. Fundada en 2010, con más de 500 instalaciones y 5 delegaciones en España.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'TCSystems — fabricante español de kioscos de autoservicio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes somos | TCSystems',
    description:
      'Fabricante español de kioscos de autoservicio y sistemas de cobro automático. Fundada en 2010, más de 500 instalaciones en España.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://www.tcsystems.es/quienes-somos',
  },
}

/**
 * AboutPage cuyo mainEntity es la Organization: es el marcado que permite a
 * buscadores y motores de IA resolver la entidad "TCSystems" (qué es, dónde
 * está, qué fabrica) desde una única página canónica.
 */
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Quiénes somos — TCSystems',
  url: 'https://www.tcsystems.es/quienes-somos',
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
    logo: 'https://www.tcsystems.es/logo.webp',
    description:
      'Fabricante español de kioscos de autoservicio y sistemas de cobro automático. Diseña, fabrica, instala y da soporte a sus propios terminales de pago desatendido para gasolineras, lavanderías, parkings, retail, centros deportivos y administración pública.',
    foundingDate: '2010',
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
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    knowsAbout: [
      'Kioscos de autoservicio',
      'Sistemas de cobro automático',
      'Terminales de pago desatendido',
      'Cobro automático para gasolineras y túneles de lavado',
      'Centrales de pago para lavanderías de autoservicio',
      'Control de accesos',
      'Facturación electrónica Veri*factu',
    ],
    sameAs: [
      'https://www.linkedin.com/company/tcsystems-grupotcobro/',
      'https://www.facebook.com/profile.php?id=61572716694969',
    ],
  },
}

export default function QuienesSomosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(quienesSomosFaqs)),
        }}
      />
      {children}
    </>
  )
}
