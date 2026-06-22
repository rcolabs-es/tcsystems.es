'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { leadSendTo, callSendTo, whatsappSendTo } from './googleAds'

type Gtag = (...args: unknown[]) => void

function getGtag(): Gtag | null {
  if (typeof window === 'undefined') return null
  const g = (window as unknown as { gtag?: Gtag }).gtag
  return typeof g === 'function' ? g : null
}

/**
 * Alimenta las Conversiones Mejoradas (Enhanced Conversions): pasa los datos del
 * usuario en claro a gtag, que los normaliza y hashea (SHA-256) en el cliente
 * antes de enviarlos. Mejora la atribución de los leads cerrados offline.
 */
function setUserData(gtag: Gtag, user?: { email?: string; phone?: string }) {
  if (!user) return
  const data: Record<string, string> = {}
  if (user.email) data.email = user.email.trim().toLowerCase()
  if (user.phone) {
    // Normaliza a E.164 básico (asume España si no trae prefijo)
    const digits = user.phone.replace(/[^\d+]/g, '')
    data.phone_number = digits.startsWith('+')
      ? digits
      : `+34${digits.replace(/^0+/, '')}`
  }
  if (Object.keys(data).length > 0) {
    gtag('set', 'user_data', data)
  }
}

/**
 * Dispara la conversión de un lead capturado por formulario.
 * - GA4: evento `generate_lead` (siempre).
 * - Google Ads: evento `conversion` (solo si hay etiqueta en googleAds.ts).
 * - Enhanced Conversions: envía email/teléfono hasheados si se proporcionan.
 */
export function fireLeadConversion(meta: {
  product?: string
  origin?: string
  email?: string
  phone?: string
}) {
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

  const gtag = getGtag()
  if (gtag && leadSendTo) {
    setUserData(gtag, { email: meta.email, phone: meta.phone })
    gtag('event', 'conversion', { send_to: leadSendTo })
  }
}

/**
 * Dispara la conversión de "Lead - Llamada" al pulsar un botón/enlace de llamar.
 * No hace nada si no hay etiqueta de llamada configurada en googleAds.ts.
 */
export function firePhoneConversion() {
  const gtag = getGtag()
  if (gtag && callSendTo) {
    gtag('event', 'conversion', {
      send_to: callSendTo,
      value: 1.0,
      currency: 'EUR',
    })
  }
}

/**
 * Dispara la conversión de "Lead - WhatsApp" al pulsar el botón de WhatsApp.
 * No hace nada si no hay etiqueta de WhatsApp configurada en googleAds.ts.
 */
export function fireWhatsAppConversion() {
  const gtag = getGtag()
  if (gtag && whatsappSendTo) {
    gtag('event', 'conversion', { send_to: whatsappSendTo })
  }
}
