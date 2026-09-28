'use client'

import { useEffect } from 'react'
import { firePhoneConversion, fireWhatsAppConversion } from './conversion'

const SOURCE_KEY = 'tc_source'

/**
 * Origen de la visita (first touch de la sesión): Google Ads, UTM o dominio
 * de referencia. Se guarda al entrar porque gclid/utm y el referrer se
 * pierden al navegar por la web.
 */
function detectSource(): string {
  const params = new URLSearchParams(window.location.search)
  if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) {
    return 'Google Ads'
  }
  const utm = params.get('utm_source')
  if (utm) {
    const medium = params.get('utm_medium')
    return medium ? `${utm} / ${medium}` : utm
  }
  let host = ''
  try {
    host = document.referrer ? new URL(document.referrer).hostname : ''
  } catch {}
  if (!host || host.endsWith('tcsystems.es')) return 'Directo'
  if (/(^|\.)google\./.test(host)) return 'Google (orgánico)'
  if (/(^|\.)bing\.com$/.test(host)) return 'Bing'
  if (/chatgpt\.com|openai\.com/.test(host)) return 'ChatGPT'
  if (/perplexity\.ai/.test(host)) return 'Perplexity'
  return host.replace(/^www\./, '')
}

function getSource(): string | undefined {
  try {
    return sessionStorage.getItem(SOURCE_KEY) ?? undefined
  } catch {
    return undefined
  }
}

/**
 * Registra el clic en el backend propio (/api/track → tabla leads) para que
 * aparezca en el panel /admin. sendBeacon sobrevive a la navegación que
 * provoca el propio enlace (abrir WhatsApp / marcador del teléfono).
 */
function trackClick(type: 'llamada' | 'whatsapp') {
  try {
    const payload = JSON.stringify({
      type,
      page: window.location.pathname,
      source: getSource(),
    })
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
    try {
      if (!sessionStorage.getItem(SOURCE_KEY)) {
        sessionStorage.setItem(SOURCE_KEY, detectSource())
      }
    } catch {}

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
