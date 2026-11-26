import type { Metadata, Viewport } from 'next'
import InformeSepNov from '@/components/informes/InformeSepNov'
import '../informes.css'

export const metadata: Metadata = {
  title: 'De Google al presupuesto · Informe SEO sep–nov 2026 | TCSystems × RCO Labs',
  description: 'De Google al presupuesto: resultados SEO del trimestre y plan para diciembre–febrero.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

export const viewport: Viewport = {
  themeColor: '#061017',
}

export default function InformeNoviembrePage() {
  return <InformeSepNov />
}
