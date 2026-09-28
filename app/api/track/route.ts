import { after, NextRequest, NextResponse } from 'next/server'
import { and, eq, gt, isNull } from 'drizzle-orm'
import { getDb, hasDb, schema } from '@/lib/db'
import { notifyLeadClick } from '@/lib/notify-lead-click'

/** Clics repetidos del mismo canal y página en esta ventana no reenvían aviso */
const DEDUPE_MS = 3 * 60 * 1000

const VALID_TYPES = ['whatsapp', 'llamada'] as const
type TrackType = (typeof VALID_TYPES)[number]

/**
 * Registra en BD los clics de contacto directo (WhatsApp y tel:) que dispara
 * ConversionClicks.tsx vía sendBeacon. Son leads anónimos: solo sabemos el
 * canal, la página de origen y el momento del clic (el mismo dato que recibe
 * Google Ads como conversión).
 */
export async function POST(request: NextRequest) {
  try {
    if (!hasDb()) return new NextResponse(null, { status: 204 })

    // sendBeacon puede llegar como text/plain: parseamos el cuerpo a mano
    const raw = await request.text()
    let body: Record<string, unknown> = {}
    try {
      body = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
    }

    const type = body.type as TrackType
    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Tipo inválido' }, { status: 400 })
    }

    const page = typeof body.page === 'string' ? body.page.slice(0, 300) : null
    const source =
      typeof body.source === 'string' ? body.source.slice(0, 200) : null

    const db = getDb()
    const { leads } = schema

    // El mismo visitante suele pulsar varias veces seguidas: solo avisamos
    // del primer clic (el lead se sigue registrando igualmente)
    const [recent] = await db
      .select({ id: leads.id })
      .from(leads)
      .where(
        and(
          eq(leads.type, type),
          page ? eq(leads.page, page) : isNull(leads.page),
          gt(leads.createdAt, new Date(Date.now() - DEDUPE_MS))
        )
      )
      .limit(1)

    const [lead] = await db
      .insert(leads)
      .values({ type, page, source })
      .returning({ createdAt: leads.createdAt })

    // Email tras responder: no retrasa el beacon ni rompe nada si falla
    if (!recent) {
      after(() =>
        notifyLeadClick({ type, page, source, createdAt: lead.createdAt }).catch(
          (e) => console.error('Error en aviso de clic:', e)
        )
      )
    }

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    // Nunca romper la navegación del usuario por un fallo de tracking
    console.error('Error en API track:', error)
    return new NextResponse(null, { status: 204 })
  }
}
