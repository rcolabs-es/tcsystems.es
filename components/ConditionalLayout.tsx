'use client'

import { usePathname } from 'next/navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CookieBanner from '@/components/CookieBanner'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // No mostrar Header/Footer en el Studio de Sanity ni en landings con chrome propio
  const isStudio = pathname?.startsWith('/studio')
  const isStandaloneLanding = pathname?.startsWith('/kioscos-autoservicio')

  // GA4 fuera del Studio (es tráfico interno y contamina la propiedad)
  const analytics = !isStudio ? <GoogleAnalytics gaId="G-FTNY37SJ4W" /> : null

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

