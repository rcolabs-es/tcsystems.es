import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog TCSystems | Noticias y artículos sobre sistemas de pago automático',
  description: 'Descubre las últimas tendencias, casos de éxito y guías especializadas en sistemas de pago automático, kioscos de autoservicio y tecnología TPV. Consejos y soluciones para optimizar tu negocio.',
  keywords: 'blog TCSystems, sistemas de pago automático, kioscos autoservicio, TPV, tecnología pagos, casos de éxito, guías negocio',
  authors: [{ name: 'TCSystems' }],
  creator: 'TCSystems',
  publisher: 'TCSystems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Blog TCSystems | Sistemas de pago automático y kioscos de autoservicio',
    description: 'Descubre las últimas tendencias, casos de éxito y guías especializadas en sistemas de pago automático y tecnología de autoservicio.',
    url: 'https://tcsystems.es/blog',
    siteName: 'TCSystems',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Blog TCSystems - Sistemas de pago automático',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog TCSystems | Sistemas de pago automático',
    description: 'Descubre las últimas tendencias, casos de éxito y guías especializadas en sistemas de pago automático y tecnología de autoservicio.',
    images: ['/logo.webp'],
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
    canonical: 'https://tcsystems.es/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 