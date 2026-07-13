'use client'

import { useEffect } from 'react'
import { firePhoneConversion, fireWhatsAppConversion } from './conversion'

/**
 * Registra el clic en el backend propio (/api/track → tabla leads) para que
 * aparezca en el panel /admin. sendBeacon sobrevive a la navegación que
 * provoca el propio enlace (abrir WhatsApp / marcador del teléfono).
 */
function trackClick(type: 'llamada' | 'whatsapp') {
  try {
    const payload = JSON.stringify({ type, page: window.location.pathname })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/track',
        new Blob([payload], { type: 'application/json' })
      )
    } else {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {})
    }
  } catch {
    // El tracking nunca debe interferir con la navegación
  }
}

/**
 * Listener global de conversiones de contacto directo.
 *
 * Captura cualquier clic en un enlace `tel:` (→ conversión "Lead - Llamada") o
 * de WhatsApp (→ conversión "Lead - WhatsApp") en TODA la web, sin tener que
 * cablear cada botón. Cubre también enlaces añadidos dinámicamente.
 *
 * Cada clic dispara la conversión de Google Ads y además queda registrado
 * como lead en el panel /admin vía /api/track.
 *
 * Se monta una vez en ConditionalLayout (fuera del Studio). Cada función no hace
 * nada si la etiqueta correspondiente no está configurada en googleAds.ts.
 */
export default function ConversionClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null
      const a = el?.closest?.('a')
      if (!a) return
      const href = a.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        firePhoneConversion()
        trackClick('llamada')
      } else if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) {
        fireWhatsAppConversion()
        trackClick('whatsapp')
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () =>
      document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
