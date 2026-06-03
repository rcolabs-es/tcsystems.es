import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terminal de cobro automático para gasolineras y túnel de lavado | TCSystems',
  description:
    'Cobro automático 24/7 para gasolineras y túneles de lavado: efectivo, tarjeta y devolución de cambio a alta velocidad. Fabricante español, caso Ballenoil. Solicita tu estudio gratuito.',
  keywords: [
    'terminal pago automático gasolinera',
    'cobro automático gasolinera',
    'kiosco túnel de lavado coches',
    'pago desatendido estación de servicio',
    'cobro automático lavadero coches',
    'autopago gasolinera',
  ],
  alternates: { canonical: 'https://www.tcsystems.es/gasolineras' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tcsystems.es/gasolineras',
    siteName: 'TCSystems',
    title:
      'Terminal de cobro automático para gasolineras y túnel de lavado | TCSystems',
    description:
      'Cobro 24/7 con efectivo, tarjeta y devolución de cambio a alta velocidad. Fabricante español, caso Ballenoil. Estudio gratuito.',
    images: [
      {
        url: '/T-Cobro Prometheus.webp',
        width: 1200,
        height: 630,
        alt: 'Terminal de cobro automático Prometheus para gasolineras',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function GasolinerasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="[font-family:var(--font-geist-sans),system-ui,sans-serif] antialiased">
      {children}
    </div>
  )
}
