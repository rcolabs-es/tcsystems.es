import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Central de pago para lavandería de autoservicio | TCSystems',
  description:
    'Automatiza el cobro de tu lavandería de autoservicio con una central de pago: tarjeta, contactless y efectivo, control de máquinas y reporting 24/7. Fabricante español. Solicita tu estudio gratuito.',
  keywords: [
    'central de pago lavandería',
    'automatizar lavandería autoservicio',
    'kiosco lavandería contactless',
    'cobro automático lavandería',
    'sistema de pago lavandería autoservicio',
    'terminal pago lavandería',
  ],
  alternates: { canonical: 'https://www.tcsystems.es/lavanderias' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tcsystems.es/lavanderias',
    siteName: 'TCSystems',
    title: 'Central de pago para lavandería de autoservicio | TCSystems',
    description:
      'Tarjeta, contactless y efectivo en una sola central. Control de máquinas y reporting 24/7. Fabricante español, estudio gratuito.',
    images: [
      {
        url: '/elysium-plus.png',
        width: 1200,
        height: 630,
        alt: 'Central de pago para lavandería de autoservicio',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function LavanderiasLayout({
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
