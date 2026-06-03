'use client'

import Script from 'next/script'

/**
 * Registra la cuenta de Google Ads sobre el gtag.js que ya carga
 * <GoogleAnalytics /> (@next/third-parties). Solo se activa si está definida
 * NEXT_PUBLIC_GOOGLE_ADS_ID (p. ej. "AW-123456789"); si no, no renderiza nada.
 *
 * La conversión concreta se dispara en components/landing/conversion.ts.
 */
export default function GoogleAdsTag() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  if (!id) return null

  return (
    <Script id="google-ads-config" strategy="afterInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
    </Script>
  )
}
