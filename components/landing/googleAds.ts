/**
 * Configuración de Google Ads — única fuente de verdad.
 *
 * Estos valores son PÚBLICOS (aparecen en el HTML del cliente, no son secretos):
 * el ID de la cuenta de conversión y la etiqueta de la acción de conversión.
 *
 * El gtag.js se carga una sola vez en app/layout.tsx con GOOGLE_ADS_ID.
 * La conversión concreta se dispara en components/landing/conversion.ts.
 */

/** ID de la cuenta de conversión de Google Ads de TC Systems. */
export const GOOGLE_ADS_ID = 'AW-18233086137'

/**
 * Etiqueta de la acción de conversión "Lead - Envío formulario".
 * Es la parte que va DESPUÉS de la barra en el send_to del fragmento de evento:
 *   send_to: 'AW-18233086137/SKcOCKyivsMcELmhm_ZD'  →  'SKcOCKyivsMcELmhm_ZD'
 * Se puede sobrescribir con la env var NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL (Vercel)
 * sin tocar código. Vacía = no se envía conversión a Google Ads (sin errores).
 */
export const GOOGLE_ADS_LEAD_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? 'SKcOCKyivsMcELmhm_ZD'

/**
 * Etiqueta de la acción de conversión "Lead - Llamada" (clic en botón de llamar).
 * Sobrescribible con NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL. Vacía = no se envía.
 */
export const GOOGLE_ADS_CALL_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL ?? 'lTz1CMDavsMcELmhm_ZD'

/**
 * Etiqueta de la acción de conversión "Lead - WhatsApp" (clic en botón de WhatsApp).
 * Pega aquí la etiqueta cuando crees la acción en Google Ads, o ponla en
 * NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL. Vacía = no se envía.
 */
export const GOOGLE_ADS_WHATSAPP_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? '7Ef0CNC2pMMcELmhm_ZD'

/** send_to completo de la conversión de lead (formulario), o null si falta la etiqueta. */
export const leadSendTo = GOOGLE_ADS_LEAD_LABEL
  ? `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`
  : null

/** send_to completo de la conversión de llamada, o null si falta la etiqueta. */
export const callSendTo = GOOGLE_ADS_CALL_LABEL
  ? `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CALL_LABEL}`
  : null

/** send_to completo de la conversión de WhatsApp, o null si falta la etiqueta. */
export const whatsappSendTo = GOOGLE_ADS_WHATSAPP_LABEL
  ? `${GOOGLE_ADS_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}`
  : null
