'use client'

import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CookieBanner from '@/components/CookieBanner'
import GoogleAdsTag from '@/components/landing/GoogleAdsTag'

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

  // GA4 + Google Ads fuera del Studio (es tráfico interno y contamina la propiedad)
  const analytics = !isStudio ? (
    <>
      <GoogleAnalytics gaId="G-FTNY37SJ4W" />
      <GoogleAdsTag />
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
