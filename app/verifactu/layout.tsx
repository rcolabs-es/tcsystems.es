import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tcsystems.es'),
  title: 'Verifactu - Integración de Facturación Electrónica | TCSystems',
  description: 'Integra Verifactu en tus terminales TCSystems. Solución de facturación electrónica que garantiza el cumplimiento normativo español y la facturación automática. Disponible para todos nuestros terminales de pago.',
  keywords: [
    'Verifactu',
    'facturación electrónica',
    'integración Verifactu',
    'facturación electrónica España',
    'terminales pago con facturación',
    'cumplimiento normativo facturación',
    'facturación automática',
    'sistemas facturación electrónica',
    'Verifactu TCSystems',
    'integración facturación terminales',
    'facturación electrónica terminales pago',
    'solución facturación electrónica',
    'normativa facturación España',
    'facturación electrónica automática',
    'sistemas de cobro con facturación'
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
    url: 'https://tcsystems.es/verifactu',
    siteName: 'TCSystems',
    title: 'Verifactu - Integración de Facturación Electrónica | TCSystems',
    description: 'Integra Verifactu en tus terminales TCSystems. Solución de facturación electrónica que garantiza el cumplimiento normativo y la facturación automática.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Verifactu - Integración de Facturación Electrónica TCSystems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verifactu - Integración de Facturación Electrónica | TCSystems',
    description: 'Integra Verifactu en tus terminales TCSystems. Solución de facturación electrónica que garantiza el cumplimiento normativo y la facturación automática.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://tcsystems.es/verifactu',
  },
}

export default function VerifactuLayout({
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
            "name": "Integración Verifactu - Facturación Electrónica",
            "description": "Servicio de integración de Verifactu en terminales de pago TCSystems para facturación electrónica automática y cumplimiento normativo",
            "provider": {
              "@type": "Organization",
              "name": "TCSystems",
              "url": "https://tcsystems.es",
              "logo": "https://tcsystems.es/logo.webp"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "serviceType": "Integración de Facturación Electrónica",
            "offers": {
              "@type": "Offer",
              "description": "Integración de Verifactu en terminales de pago para facturación electrónica automática",
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
            "name": "Verifactu - Integración de Facturación Electrónica",
            "description": "Página informativa sobre la integración de Verifactu en terminales TCSystems para facturación electrónica automática",
            "url": "https://tcsystems.es/verifactu",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@type": "WebSite",
              "name": "TCSystems",
              "url": "https://tcsystems.es"
            },
            "about": {
              "@type": "Thing",
              "name": "Facturación Electrónica",
              "description": "Sistema de facturación electrónica Verifactu integrado en terminales de pago"
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Integración Verifactu",
              "description": "Servicio de integración de Verifactu para facturación electrónica en terminales de pago TCSystems"
            }
          })
        }}
      />
      {children}
    </>
  )
}

