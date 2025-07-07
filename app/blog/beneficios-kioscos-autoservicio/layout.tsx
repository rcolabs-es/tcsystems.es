import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beneficios de los kioscos de autoservicio para negocios | Ahorro de costes y mejora de la experiencia cliente',
  description: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente en sectores como hostelería, lavanderías, parkings y estaciones de servicio. Casos reales y ventajas clave para tu negocio.',
  keywords: 'kioscos autoservicio, sistemas de pago automático, ahorro costes, experiencia cliente, automatización negocios, TPV autoservicio, kioscos pago',
  authors: [{ name: 'TCSystems' }],
  creator: 'TCSystems',
  publisher: 'TCSystems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Beneficios de los kioscos de autoservicio para negocios | TCSystems',
    description: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente.',
    url: 'https://tcsystems.es/blog/beneficios-kioscos-autoservicio',
    siteName: 'TCSystems',
    images: [
      {
        url: '/EVO LATERAL SIN FONDO.webp',
        width: 1200,
        height: 630,
        alt: 'Kiosco de autoservicio TCSystems EVO',
      },
    ],
    locale: 'es_ES',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficios de los kioscos de autoservicio para negocios',
    description: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente.',
    images: ['/EVO LATERAL SIN FONDO.webp'],
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
    canonical: 'https://tcsystems.es/blog/beneficios-kioscos-autoservicio',
  },
}

export default function BeneficiosKioscosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 