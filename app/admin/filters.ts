import { and, eq, ilike, isNotNull, isNull, or, sql, type SQL } from 'drizzle-orm'
import { schema } from '@/lib/db'

const { leads } = schema

/** Zona horaria del cliente: todas las fechas y horas se filtran en hora de Madrid */
const TZ = 'Europe/Madrid'
const localTs = sql`(${leads.createdAt} at time zone 'Europe/Madrid')`

export const TIPOS = [
  { value: 'formulario', label: 'Formularios' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'llamada', label: 'Llamadas' },
] as const

export const ESTADOS = [
  { value: 'nuevo', label: 'Nuevos' },
  { value: 'atendido', label: 'Atendidos' },
  { value: 'ganado', label: 'Ganados' },
  { value: 'perdido', label: 'Perdidos' },
] as const

export const DIAS = [
  { value: 'laborables', label: 'Lunes a viernes' },
  { value: 'finde', label: 'Fin de semana' },
] as const

export const CONTACTO = [
  { value: 'identificados', label: 'Con datos de contacto' },
  { value: 'anonimos', label: 'Anónimos sin identificar' },
] as const

export const ORDEN = [
  { value: 'recientes', label: 'Más recientes' },
  { value: 'antiguos', label: 'Más antiguos' },
  { value: 'importe', label: 'Mayor importe' },
] as const

export type Filters = {
  tipo?: string
  estado?: string
  q?: string
  desde?: string
  hasta?: string
  horaDesde?: string
  horaHasta?: string
  dias?: string
  pagina?: string
  producto?: string
  contacto?: string
  orden?: string
}

const isDate = (v?: string) => !!v && /^\d{4}-\d{2}-\d{2}$/.test(v)
const inList = (list: readonly { value: string }[], v?: string) =>
  !!v && list.some((o) => o.value === v)
function toHour(v: string | undefined, min: number, max: number) {
  if (!v || !/^\d{1,2}$/.test(v)) return undefined
  const n = Number(v)
  return n >= min && n <= max ? n : undefined
}

/** Normaliza los searchParams: descarta valores inválidos para no romper la consulta */
export function parseFilters(raw: Record<string, string | string[] | undefined>): Filters {
  const get = (k: string) => {
    const v = raw[k]
    return (Array.isArray(v) ? v[0] : v)?.trim() || undefined
  }
  const horaDesde = toHour(get('horaDesde'), 0, 23)
  const horaHasta = toHour(get('horaHasta'), 1, 24)
  return {
    tipo: inList(TIPOS, get('tipo')) ? get('tipo') : undefined,
    estado: inList(ESTADOS, get('estado')) ? get('estado') : undefined,
    q: get('q')?.slice(0, 100),
    desde: isDate(get('desde')) ? get('desde') : undefined,
    hasta: isDate(get('hasta')) ? get('hasta') : undefined,
    horaDesde: horaDesde !== undefined ? String(horaDesde) : undefined,
    horaHasta: horaHasta !== undefined ? String(horaHasta) : undefined,
    dias: inList(DIAS, get('dias')) ? get('dias') : undefined,
    pagina: get('pagina')?.slice(0, 300),
    producto: get('producto')?.slice(0, 200),
    contacto: inList(CONTACTO, get('contacto')) ? get('contacto') : undefined,
    orden: inList(ORDEN, get('orden')) ? get('orden') : undefined,
  }
}

/** Filtros "avanzados" activos (todo salvo los chips de tipo/estado y la búsqueda) */
export function countAdvanced(f: Filters) {
  return [f.desde, f.hasta, f.horaDesde, f.horaHasta, f.dias, f.pagina, f.producto, f.contacto]
    .filter(Boolean).length
}

export function buildConditions(f: Filters): SQL | undefined {
  const c: SQL[] = []

  if (f.tipo) c.push(eq(leads.type, f.tipo as (typeof TIPOS)[number]['value']))
  if (f.estado) c.push(eq(leads.status, f.estado as (typeof ESTADOS)[number]['value']))

  if (f.q) {
    const p = `%${f.q}%`
    const s = or(
      ilike(leads.name, p),
      ilike(leads.email, p),
      ilike(leads.company, p),
      ilike(leads.phone, p),
      ilike(leads.notes, p),
      ilike(leads.message, p)
    )
    if (s) c.push(s)
  }

  // Rango de fechas (inclusivo, en hora de Madrid)
  if (f.desde) c.push(sql`${localTs}::date >= ${f.desde}::date`)
  if (f.hasta) c.push(sql`${localTs}::date <= ${f.hasta}::date`)

  // Franja horaria: [desde, hasta). Si desde > hasta cruza medianoche (p. ej. 20→8)
  if (f.horaDesde || f.horaHasta) {
    const from = Number(f.horaDesde ?? 0)
    const to = Number(f.horaHasta ?? 24)
    const hour = sql`extract(hour from ${localTs})`
    c.push(
      from < to
        ? sql`(${hour} >= ${from} and ${hour} < ${to})`
        : sql`(${hour} >= ${from} or ${hour} < ${to})`
    )
  }

  if (f.dias === 'laborables') c.push(sql`extract(isodow from ${localTs}) between 1 and 5`)
  if (f.dias === 'finde') c.push(sql`extract(isodow from ${localTs}) in (6, 7)`)

  if (f.pagina) c.push(eq(leads.page, f.pagina))
  if (f.producto) c.push(eq(leads.product, f.producto))

  const hasContact = or(isNotNull(leads.name), isNotNull(leads.phone), isNotNull(leads.email))
  if (f.contacto === 'identificados' && hasContact) c.push(hasContact)
  if (f.contacto === 'anonimos') {
    c.push(and(isNull(leads.name), isNull(leads.phone), isNull(leads.email))!)
  }

  return c.length ? and(...c) : undefined
}

export function buildUrl(params: Filters) {
  const qs = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) if (v) qs.set(k, v)
  const s = qs.toString()
  return s ? `/admin?${s}` : '/admin'
}

/** Fecha YYYY-MM-DD en Madrid, desplazada `offsetDays` días */
function madridDate(offsetDays = 0) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: TZ }).format(new Date())
  const d = new Date(`${today}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + offsetDays)
  return d.toISOString().slice(0, 10)
}

/** Atajos de fecha para los chips del panel */
export function datePresets() {
  const today = madridDate()
  const [y, m] = today.split('-').map(Number)
  const firstThisMonth = `${today.slice(0, 7)}-01`
  const prev = new Date(Date.UTC(y, m - 2, 1))
  const lastPrev = new Date(Date.UTC(y, m - 1, 0))
  return [
    { label: 'Hoy', desde: today, hasta: today },
    { label: 'Ayer', desde: madridDate(-1), hasta: madridDate(-1) },
    { label: 'Últimos 7 días', desde: madridDate(-6), hasta: today },
    { label: 'Últimos 30 días', desde: madridDate(-29), hasta: today },
    { label: 'Este mes', desde: firstThisMonth, hasta: today },
    {
      label: 'Mes pasado',
      desde: prev.toISOString().slice(0, 10),
      hasta: lastPrev.toISOString().slice(0, 10),
    },
  ]
}
