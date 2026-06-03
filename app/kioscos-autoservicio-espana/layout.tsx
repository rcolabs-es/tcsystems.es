import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabricante español de kioscos de autoservicio | TCSystems',
  description:
    'Fabricante nacional de kioscos de autoservicio y cobro automático. Diseñamos, fabricamos e instalamos en España, con SAT y recambios propios. 14+ años, 500+ instalaciones. Solicita tu estudio gratuito.',
  keywords: [
    'fabricante kioscos España',
    'kiosco autoservicio España',
    'comprar kiosco autoservicio fabricante',
    'fabricante kioscos autoservicio nacional',
    'kiosco fabricación española',
    'kioscos de cobro automático España',
  ],
  alternates: {
    canonical: 'https://www.tcsystems.es/kioscos-autoservicio-espana',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.tcsystems.es/kioscos-autoservicio-espana',
    siteName: 'TCSystems',
    title: 'Fabricante español de kioscos de autoservicio | TCSystems',
    description:
      'Fabricación nacional, SAT propio y 500+ instalaciones. No somos un revendedor. Estudio gratuito sin compromiso.',
    images: [
      {
        url: '/elysium-plus.png',
        width: 1200,
        height: 630,
        alt: 'Kioscos de autoservicio fabricados en España por TCSystems',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function KioscosEspanaLayout({
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
