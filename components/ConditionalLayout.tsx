'use client'

import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CookieBanner from '@/components/CookieBanner'
import ConversionClicks from '@/components/landing/ConversionClicks'

// Landings de campaña con chrome propio (sin Header/Footer global)
const STANDALONE_LANDINGS = [
  '/kioscos-autoservicio',
  '/lavanderias',
  '/gasolineras',
]

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // No mostrar Header/Footer en el Studio de Sanity ni en landings con chrome propio
  const isStudio = pathname?.startsWith('/studio')
  const isStandaloneLanding = STANDALONE_LANDINGS.some((p) =>
    pathname?.startsWith(p)
  )

  // GA4 fuera del Studio (es tráfico interno y contamina la propiedad).
  // El gtag de Google Ads se carga globalmente en app/layout.tsx.
  // ConversionClicks captura clics en tel:/WhatsApp en toda la web.
  const analytics = !isStudio ? (
    <>
      <GoogleAnalytics gaId="G-FTNY37SJ4W" />
      <ConversionClicks />
    </>
  ) : null

  if (isStudio) {
    return <>{children}</>
  }

  if (isStandaloneLanding) {
    return (
      <>
        {analytics}
        {children}
      </>
    )
  }

  return (
    <>
      {analytics}
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  )
}
