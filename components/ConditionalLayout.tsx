'use client'

import { usePathname } from 'next/navigation'
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

  if (isStudio || isStandaloneLanding) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  )
}

