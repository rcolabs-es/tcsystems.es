import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guía para elegir el kiosco de autoservicio ideal según tu sector | Soluciones personalizadas para negocios',
  description: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium para hostelería, lavanderías, parkings y administraciones públicas.',
  keywords: 'guía kioscos autoservicio, elegir kiosco, sectores negocios, EVO, Prometheus, Elysium, terminales pago, sistemas autoservicio',
  authors: [{ name: 'TCSystems' }],
  creator: 'TCSystems',
  publisher: 'TCSystems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Guía para elegir el kiosco de autoservicio ideal según tu sector | TCSystems',
    description: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium.',
    url: 'https://tcsystems.es/blog/guia-elegir-kiosco-autoservicio',
    siteName: 'TCSystems',
    images: [
      {
        url: '/T-Cobro Prometheus.webp',
        width: 1200,
        height: 630,
        alt: 'Guía para elegir kioscos de autoservicio TCSystems',
      },
    ],
    locale: 'es_ES',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guía para elegir el kiosco de autoservicio ideal según tu sector',
    description: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium.',
    images: ['/T-Cobro Prometheus.webp'],
  },
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
  alternates: {
    canonical: 'https://tcsystems.es/blog/guia-elegir-kiosco-autoservicio',
  },
}

export default function GuiaElegirKioscoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 