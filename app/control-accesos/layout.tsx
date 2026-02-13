import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tcsystems.es'),
  title: 'Control de Accesos | Sistemas de Seguridad Inteligente | TCSystems',
  description: 'Sistemas profesionales de control de accesos para empresas e instalaciones. Tornos, barreras, lectores biométricos, tarjetas RFID, gestión de visitantes y software de control centralizado. Soluciones integrales de seguridad.',
  keywords: [
    'control de accesos',
    'sistemas control acceso',
    'control acceso empresas',
    'tornos de acceso',
    'barreras de seguridad',
    'lectores biométricos',
    'tarjetas RFID acceso',
    'control de visitantes',
    'gestión de accesos',
    'seguridad perimetral',
    'control horario empleados',
    'sistemas seguridad empresas',
    'control acceso inteligente',
    'software control accesos',
    'cerraduras electrónicas',
    'control acceso edificios',
    'sistemas acceso España',
    'soluciones seguridad TCSystems',
    'control acceso biométrico',
    'identificación por huella'
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
    url: 'https://tcsystems.es/control-accesos',
    siteName: 'TCSystems',
    title: 'Control de Accesos | Sistemas de Seguridad Inteligente | TCSystems',
    description: 'Sistemas profesionales de control de accesos para empresas e instalaciones. Tornos, barreras, lectores biométricos, tarjetas RFID y software de gestión centralizado.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Control de Accesos - TCSystems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control de Accesos | Sistemas de Seguridad Inteligente | TCSystems',
    description: 'Sistemas profesionales de control de accesos para empresas e instalaciones. Soluciones integrales de seguridad con gestión centralizada.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://tcsystems.es/control-accesos',
  },
}

export default function ControlAccesosLayout({
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
            "name": "Sistemas de Control de Accesos",
            "description": "Soluciones profesionales de control de accesos para empresas e instalaciones con lectores biométricos, tarjetas RFID, gestión de visitantes y software de control centralizado",
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
            "serviceType": "Sistemas de Control de Accesos y Seguridad",
            "offers": {
              "@type": "Offer",
              "description": "Sistemas completos de control de accesos con hardware y software integrado para empresas e instalaciones",
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
            "name": "Sistemas de Control de Accesos",
            "description": "Soluciones integrales de control de accesos para empresas incluyendo tornos, barreras, lectores biométricos y software de gestión centralizado",
            "url": "https://tcsystems.es/control-accesos",
            "inLanguage": "es-ES",
            "isPartOf": {
              "@type": "WebSite",
              "name": "TCSystems",
              "url": "https://tcsystems.es"
            },
            "about": {
              "@type": "Thing",
              "name": "Control de Accesos",
              "description": "Sistemas profesionales de control de accesos y seguridad para empresas"
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Control de Accesos",
              "description": "Soluciones completas de control de accesos con tecnología avanzada de identificación y gestión centralizada"
            }
          })
        }}
      />
      {children}
    </>
  )
}
