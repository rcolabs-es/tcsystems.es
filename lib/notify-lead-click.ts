import { Resend } from 'resend'
import { EMAIL_CONFIG } from '@/emails'

const SITE = 'https://tcsystems.es'

const timeFmt = new Intl.DateTimeFormat('es-ES', {
  timeZone: 'Europe/Madrid',
  dateStyle: 'full',
  timeStyle: 'short',
})

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)

/**
 * Aviso por email de un clic en WhatsApp o teléfono (lead anónimo).
 * Correo deliberadamente simple: canal, hora, página y fuente.
 */
export async function notifyLeadClick(lead: {
  type: 'whatsapp' | 'llamada'
  page: string | null
  source: string | null
  createdAt: Date
}) {
  if (!process.env.RESEND_API_KEY) return

  const canal = lead.type === 'whatsapp' ? 'WhatsApp' : 'llamada'
  const subject =
    lead.type === 'whatsapp'
      ? 'Nuevo WhatsApp desde la web'
      : 'Nueva llamada desde la web'

  const rows: [string, string][] = [
    ['Hora', timeFmt.format(lead.createdAt)],
    ['Página', lead.page ? `${SITE}${lead.page}` : '—'],
    ['Fuente', lead.source || 'Desconocida'],
  ]
  const panelUrl = `${SITE}/admin?tipo=${lead.type}`

  const text = [
    `Alguien ha pulsado el botón de ${canal} en la web.`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    `Ver en el panel: ${panelUrl}`,
  ].join('\n')

  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#18181b;line-height:1.5">
  <p>Alguien ha pulsado el botón de <strong>${canal}</strong> en la web.</p>
  <table cellpadding="4" style="border-collapse:collapse">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><td style="color:#71717a;padding-right:12px">${k}</td><td>${escape(v)}</td></tr>`
      )
      .join('')}
  </table>
  <p style="margin-top:16px"><a href="${panelUrl}" style="color:#0e9acd">Ver en el panel de leads</a></p>
</div>`

  const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from: EMAIL_CONFIG.FROM,
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    subject,
    text,
    html,
  })
  if (error) console.error('Error enviando aviso de clic:', error)
}
