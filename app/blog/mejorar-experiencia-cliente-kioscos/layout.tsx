import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mejora la experiencia del cliente con kioscos de autoservicio | Ventajas y consejos clave',
  description: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos para su implementación y mejores prácticas para aumentar la satisfacción y eficiencia.',
  keywords: 'experiencia cliente, kioscos autoservicio, mejores prácticas, satisfacción cliente, autoservicio, transformación digital',
  authors: [{ name: 'TCSystems' }],
  creator: 'TCSystems',
  publisher: 'TCSystems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mejora la experiencia del cliente con kioscos de autoservicio | TCSystems',
    description: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos y mejores prácticas.',
    url: 'https://tcsystems.es/blog/mejorar-experiencia-cliente-kioscos',
    siteName: 'TCSystems',
    images: [
      {
        url: '/T-COBRO ELYSIUM SIN FONDO (1).webp',
        width: 1200,
        height: 630,
        alt: 'Mejorar experiencia del cliente con kioscos de autoservicio',
      },
    ],
    locale: 'es_ES',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mejora la experiencia del cliente con kioscos de autoservicio',
    description: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos y mejores prácticas.',
    images: ['/T-COBRO ELYSIUM SIN FONDO (1).webp'],
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
    canonical: 'https://tcsystems.es/blog/mejorar-experiencia-cliente-kioscos',
  },
}

export default function MejorarExperienciaClienteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 