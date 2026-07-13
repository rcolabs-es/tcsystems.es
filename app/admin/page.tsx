import Link from 'next/link'
import { and, desc, eq, ilike, or, sql, type SQL } from 'drizzle-orm'
import { Search } from 'lucide-react'
import { getDb, hasDb, schema } from '@/lib/db'
import LeadRow, { type LeadDTO } from './LeadRow'

export const dynamic = 'force-dynamic'

const TIPOS = [
  { value: 'formulario', label: 'Formularios' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'llamada', label: 'Llamadas' },
] as const

const ESTADOS = [
  { value: 'nuevo', label: 'Nuevos' },
  { value: 'atendido', label: 'Atendidos' },
  { value: 'ganado', label: 'Ganados' },
  { value: 'perdido', label: 'Perdidos' },
] as const

function buildUrl(params: Record<string, string | undefined>) {
  const qs = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) if (v) qs.set(k, v)
  const s = qs.toString()
  return s ? `/admin?${s}` : '/admin'
}

const eur = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string; estado?: string; q?: string }>
}) {
  const { tipo, estado, q } = await searchParams

  if (!hasDb()) {
    return (
      <div className="rounded-3xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 p-8">
        <h2 className="text-xl font-medium mb-2 [font-family:var(--font-fraunces)]">
          Base de datos sin configurar
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Falta la variable de entorno <code>DATABASE_URL</code>. Crea la base
          de datos Neon desde el Marketplace de Vercel, añade la variable y
          ejecuta <code>bun run db:push</code> para crear la tabla de leads.
        </p>
      </div>
    )
  }

  const db = getDb()
  const { leads } = schema

  const conditions: SQL[] = []
  if (tipo && TIPOS.some((t) => t.value === tipo)) {
    conditions.push(eq(leads.type, tipo as (typeof TIPOS)[number]['value']))
  }
  if (estado && ESTADOS.some((e) => e.value === estado)) {
    conditions.push(
      eq(leads.status, estado as (typeof ESTADOS)[number]['value'])
    )
  }
  if (q?.trim()) {
    const pattern = `%${q.trim()}%`
    const search = or(
      ilike(leads.name, pattern),
      ilike(leads.email, pattern),
      ilike(leads.company, pattern),
      ilike(leads.phone, pattern)
    )
    if (search) conditions.push(search)
  }

  const [stats] = await db
    .select({
      total: sql<number>`count(*)::int`,
      nuevos: sql<number>`count(*) filter (where ${leads.status} = 'nuevo')::int`,
      atendidos: sql<number>`count(*) filter (where ${leads.status} = 'atendido')::int`,
      ganados: sql<number>`count(*) filter (where ${leads.status} = 'ganado')::int`,
      importe: sql<string>`coalesce(sum(${leads.closedAmount}) filter (where ${leads.status} = 'ganado'), 0)::text`,
    })
    .from(leads)

  const rows = await db
    .select()
    .from(leads)
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(leads.createdAt))
    .limit(500)

  const leadDtos: LeadDTO[] = rows.map((l) => ({
    id: l.id,
    type: l.type,
    name: l.name,
    email: l.email,
    phone: l.phone,
    company: l.company,
    message: l.message,
    product: l.product,
    source: l.source,
    page: l.page,
    status: l.status,
    closedAmount: l.closedAmount,
    notes: l.notes,
    createdAt: l.createdAt.toISOString(),
  }))

  const tiles = [
    { label: 'Total leads', value: String(stats.total) },
    { label: 'Sin atender', value: String(stats.nuevos), accent: true },
    { label: 'Atendidos', value: String(stats.atendidos) },
    { label: 'Ganados', value: String(stats.ganados) },
    { label: 'Facturación cerrada', value: eur.format(Number(stats.importe)) },
  ]

  return (
    <div className="space-y-8">
      {/* Resumen */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] [font-family:var(--font-geist-mono)] text-zinc-500 mb-1.5">
              {t.label}
            </p>
            <p
              className={`text-2xl font-medium tracking-tight [font-family:var(--font-fraunces)] ${
                t.accent ? 'text-[#0e9acd]' : ''
              }`}
            >
              {t.value}
            </p>
          </div>
        ))}
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={buildUrl({ estado, q })}
          className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
            !tipo
              ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-transparent'
              : 'border-zinc-300 dark:border-zinc-700 hover:border-[#0e9acd]'
          }`}
        >
          Todos
        </Link>
        {TIPOS.map((t) => (
          <Link
            key={t.value}
            href={buildUrl({ tipo: t.value, estado, q })}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
              tipo === t.value
                ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-transparent'
                : 'border-zinc-300 dark:border-zinc-700 hover:border-[#0e9acd]'
            }`}
          >
            {t.label}
          </Link>
        ))}
        <span className="mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700" />
        {ESTADOS.map((e) => (
          <Link
            key={e.value}
            href={buildUrl({
              tipo,
              estado: estado === e.value ? undefined : e.value,
              q,
            })}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
              estado === e.value
                ? 'bg-[#0e9acd] text-white border-transparent'
                : 'border-zinc-300 dark:border-zinc-700 hover:border-[#0e9acd]'
            }`}
          >
            {e.label}
          </Link>
        ))}

        <form action="/admin" className="ml-auto relative">
          {tipo && <input type="hidden" name="tipo" value={tipo} />}
          {estado && <input type="hidden" name="estado" value={estado} />}
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          <input
            type="search"
            name="q"
            defaultValue={q ?? ''}
            placeholder="Buscar nombre, email, empresa…"
            className="pl-10 pr-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm outline-none focus:border-[#0e9acd] transition-colors w-64"
          />
        </form>
      </div>

      {/* Listado */}
      {leadDtos.length === 0 ? (
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-12 text-center text-zinc-500">
          No hay leads que coincidan con el filtro.
        </div>
      ) : (
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 divide-y divide-zinc-100 dark:divide-zinc-800 overflow-hidden">
          {leadDtos.map((lead) => (
            <LeadRow key={lead.id} lead={lead} />
          ))}
        </div>
      )}

      {leadDtos.length === 500 && (
        <p className="text-xs text-zinc-500 [font-family:var(--font-geist-mono)] uppercase tracking-[0.15em]">
          Mostrando los 500 leads más recientes. Usa los filtros para acotar.
        </p>
      )}
    </div>
  )
}
