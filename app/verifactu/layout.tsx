import { Metadata } from 'next'
import { faqPageSchema } from '@/lib/schema'
import { verifactuFaqs } from './faq'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
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
    url: 'https://www.tcsystems.es/verifactu',
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
    canonical: 'https://www.tcsystems.es/verifactu',
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
              "url": "https://www.tcsystems.es",
              "logo": "https://www.tcsystems.es/logo.webp"
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
            "url": "https://www.tcsystems.es/verifactu",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@type": "WebSite",
              "name": "TCSystems",
              "url": "https://www.tcsystems.es"
            },
            "about": {
              "@type": "Thing",
              "name": "Facturación Electrónica",
              "description": "Sistema de facturación electrónica Verifactu integrado en terminales de pago"
            },
            "citation": [
              {
                "@type": "Legislation",
                "name": "Real Decreto 1007/2023, de 5 de diciembre, por el que se aprueba el Reglamento que establece los requisitos que deben adoptar los sistemas y programas informáticos de facturación",
                "legislationIdentifier": "RD 1007/2023",
                "legislationDate": "2023-12-05",
                "legislationJurisdiction": "ES",
                "url": "https://www.boe.es/eli/es/rd/2023/12/05/1007"
              },
              {
                "@type": "Legislation",
                "name": "Real Decreto-ley 15/2025, de 2 de diciembre, que modifica los plazos de adaptación previstos en el Real Decreto 1007/2023",
                "legislationIdentifier": "RDL 15/2025",
                "legislationDate": "2025-12-02",
                "legislationJurisdiction": "ES",
                "url": "https://www.boe.es/eli/es/rdl/2025/12/02/15"
              },
              {
                "@type": "WebPage",
                "name": "AEAT — Nota informativa: ampliación del plazo de adaptación de los sistemas informáticos de facturación",
                "publisher": {
                  "@type": "GovernmentOrganization",
                  "name": "Agencia Estatal de Administración Tributaria"
                },
                "url": "https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html"
              }
            ],
            "mainEntity": {
              "@type": "Service",
              "name": "Integración Verifactu",
              "description": "Servicio de integración de Verifactu para facturación electrónica en terminales de pago TCSystems"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(verifactuFaqs)),
        }}
      />
      {children}
    </>
  )
}

