'use client'

import { sendGAEvent } from '@next/third-parties/google'

/**
 * Dispara la conversión de un lead capturado en una landing de campaña.
 *
 * - GA4: evento `generate_lead` (siempre).
 * - Google Ads: evento `conversion` si están definidas las variables de entorno
 *   NEXT_PUBLIC_GOOGLE_ADS_ID (p. ej. "AW-123456789") y
 *   NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL (la etiqueta de conversión de "envío de
 *   formulario de lead"). Si no están, no hace nada — sin errores.
 *
 * El tag de Google Ads se carga en <GoogleAdsTag /> (ver ConditionalLayout).
 */
export function fireLeadConversion(meta: { product?: string; origin?: string }) {
  try {
    sendGAEvent('event', 'generate_lead', {
      product: meta.product ?? 'general',
      origin: meta.origin,
      form_location:
        typeof window !== 'undefined' ? window.location.pathname : undefined,
    })
  } catch {
    /* GA4 no disponible — no bloquea el flujo del formulario */
  }

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const leadLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL

  if (
    adsId &&
    leadLabel &&
    typeof window !== 'undefined' &&
    typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag ===
      'function'
  ) {
    ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
      'event',
      'conversion',
      { send_to: `${adsId}/${leadLabel}` }
    )
  }
}
