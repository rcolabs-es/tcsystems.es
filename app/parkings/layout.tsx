import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
  title: 'Sistemas de Pago para Parkings | Soluciones Automatizadas | TCSystems',
  description: 'Sistemas especializados de cobro automático para parkings. Control de acceso, gestión de tarifas, pago con tarjeta y efectivo, lectura de matrículas y software de gestión integrado. Soluciones completas para parkings públicos y privados.',
  keywords: [
    'sistemas pago parkings',
    'parkings automatizados',
    'control acceso parking',
    'gestión parkings',
    'cobro automático parking',
    'terminales pago parking',
    'sistemas parking España',
    'automatización parkings',
    'software gestión parkings',
    'control tarifas parking',
    'lectores matrícula parking',
    'barreras parking automáticas',
    'TPV parking',
    'pago parking sin contacto',
    'sistemas inteligentes parking',
    'soluciones parking TCSystems',
    'parkings públicos automatizados',
    'parkings privados gestión',
    'máquinas expendedoras parking'
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
    url: 'https://www.tcsystems.es/parkings',
    siteName: 'TCSystems',
    title: 'Sistemas de Pago para Parkings | Soluciones Automatizadas | TCSystems',
    description: 'Sistemas especializados de cobro automático para parkings. Control de acceso, gestión de tarifas, pago con tarjeta y efectivo. Soluciones completas para parkings públicos y privados.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Sistemas de Pago para Parkings - TCSystems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemas de Pago para Parkings | Soluciones Automatizadas | TCSystems',
    description: 'Sistemas especializados de cobro automático para parkings. Control de acceso, gestión de tarifas y pago automatizado.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://www.tcsystems.es/parkings',
  },
}

export default function ParkingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sistemas de Pago para Parkings",
            "description": "Soluciones automatizadas de cobro y gestión para parkings públicos y privados con control de acceso, gestión de tarifas y pago automático",
            "provider": {
              "@type": "Organization",
              "name": "TCSystems",
              "url": "https://www.tcsystems.es",
              "logo": "https://www.tcsystems.es/logo.webp"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "serviceType": "Sistemas de Gestión y Pago para Parkings",
            "offers": {
              "@type": "Offer",
              "description": "Sistemas completos de gestión y cobro automático para parkings con control de acceso y software integrado",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sistemas de Pago para Parkings",
            "description": "Soluciones completas de automatización para parkings incluyendo control de acceso, gestión de tarifas y sistemas de pago",
            "url": "https://www.tcsystems.es/parkings",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@type": "WebSite",
              "name": "TCSystems",
              "url": "https://www.tcsystems.es"
            },
            "about": {
              "@type": "Thing",
              "name": "Sistemas de Parking",
              "description": "Sistemas automatizados de gestión y cobro para parkings"
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Sistemas para Parkings",
              "description": "Soluciones completas de automatización, control de acceso y cobro para parkings"
            }
          })
        }}
      />
      {children}
    </>
  )
}


