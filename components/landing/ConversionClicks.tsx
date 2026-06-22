'use client'

import { useEffect } from 'react'
import { firePhoneConversion, fireWhatsAppConversion } from './conversion'

/**
 * Listener global de conversiones de contacto directo.
 *
 * Captura cualquier clic en un enlace `tel:` (→ conversión "Lead - Llamada") o
 * de WhatsApp (→ conversión "Lead - WhatsApp") en TODA la web, sin tener que
 * cablear cada botón. Cubre también enlaces añadidos dinámicamente.
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
      } else if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) {
        fireWhatsAppConversion()
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () =>
      document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
