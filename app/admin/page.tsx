import Link from 'next/link'
import { asc, desc, isNotNull, sql } from 'drizzle-orm'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { getDb, hasDb, schema } from '@/lib/db'
import LeadRow, { type LeadDTO } from './LeadRow'
import {
  CONTACTO,
  DIAS,
  ESTADOS,
  ORDEN,
  TIPOS,
  buildConditions,
  buildUrl,
  countAdvanced,
  datePresets,
  parseFilters,
} from './filters'

export const dynamic = 'force-dynamic'

const eur = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const HORAS = Array.from({ length: 25 }, (_, h) => `${String(h).padStart(2, '0')}:00`)

const chip = (active: boolean, accent = false) =>
  `px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
    active
      ? accent
        ? 'bg-[#0e9acd] text-white border-transparent'
        : 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-transparent'
      : 'border-zinc-300 dark:border-zinc-700 hover:border-[#0e9acd]'
  }`

const fieldLabel =
  'block text-[10px] uppercase tracking-[0.18em] [font-family:var(--font-geist-mono)] text-zinc-500 mb-1.5'
const fieldInput =
  'w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-[#0e9acd] transition-colors'

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const f = parseFilters(await searchParams)

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
  const where = buildConditions(f)
  const advanced = countAdvanced(f)
  const anyFilter = advanced > 0 || !!(f.tipo || f.estado || f.q)

  const orderBy =
    f.orden === 'antiguos'
      ? [asc(leads.createdAt)]
      : f.orden === 'importe'
        ? [sql`${leads.closedAmount} desc nulls last`, desc(leads.createdAt)]
        : [desc(leads.createdAt)]

  const [[stats], rows, pages, products] = await Promise.all([
    db
      .select({
        total: sql<number>`count(*)::int`,
        nuevos: sql<number>`count(*) filter (where ${leads.status} = 'nuevo')::int`,
        anonimos: sql<number>`count(*) filter (where ${leads.name} is null and ${leads.phone} is null and ${leads.email} is null)::int`,
        ganados: sql<number>`count(*) filter (where ${leads.status} = 'ganado')::int`,
        importe: sql<string>`coalesce(sum(${leads.closedAmount}) filter (where ${leads.status} = 'ganado'), 0)::text`,
      })
      .from(leads)
      .where(where),
    db.select().from(leads).where(where).orderBy(...orderBy).limit(500),
    db
      .selectDistinct({ v: leads.page })
      .from(leads)
      .where(isNotNull(leads.page))
      .orderBy(leads.page),
    db
      .selectDistinct({ v: leads.product })
      .from(leads)
      .where(isNotNull(leads.product))
      .orderBy(leads.product),
  ])

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
    { label: 'Sin identificar', value: String(stats.anonimos) },
    { label: 'Ganados', value: String(stats.ganados) },
    { label: 'Facturación cerrada', value: eur.format(Number(stats.importe)) },
  ]

  const presets = datePresets()

  return (
    <div className="space-y-8">
      {/* Resumen */}
      <div className="space-y-2">
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
        {anyFilter && (
          <p className="text-xs text-zinc-500 [font-family:var(--font-geist-mono)] uppercase tracking-[0.15em]">
            Cifras calculadas sobre los filtros aplicados
          </p>
        )}
      </div>

      {/* Filtros rápidos */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={buildUrl({ ...f, tipo: undefined })} className={chip(!f.tipo)}>
            Todos
          </Link>
          {TIPOS.map((t) => (
            <Link
              key={t.value}
              href={buildUrl({ ...f, tipo: t.value })}
              className={chip(f.tipo === t.value)}
            >
              {t.label}
            </Link>
          ))}
          <span className="mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700" />
          {ESTADOS.map((e) => (
            <Link
              key={e.value}
              href={buildUrl({ ...f, estado: f.estado === e.value ? undefined : e.value })}
              className={chip(f.estado === e.value, true)}
            >
              {e.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {presets.map((p) => {
            const active = f.desde === p.desde && f.hasta === p.hasta
            return (
              <Link
                key={p.label}
                href={buildUrl({
                  ...f,
                  desde: active ? undefined : p.desde,
                  hasta: active ? undefined : p.hasta,
                })}
                className={chip(active, true)}
              >
                {p.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Filtros avanzados (GET: funcionan sin JS y la URL se puede compartir) */}
      <form
        action="/admin"
        className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-6 space-y-4"
      >
        {f.tipo && <input type="hidden" name="tipo" value={f.tipo} />}
        {f.estado && <input type="hidden" name="estado" value={f.estado} />}

        <div className="flex items-center gap-2 text-sm font-medium">
          <SlidersHorizontal className="w-4 h-4 text-[#0e9acd]" />
          Filtros
          {advanced > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-[#0e9acd] text-white text-xs">
              {advanced}
            </span>
          )}
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          <input
            type="search"
            name="q"
            defaultValue={f.q ?? ''}
            placeholder="Buscar nombre, teléfono, email, empresa, notas…"
            className={`${fieldInput} pl-10 rounded-full`}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={fieldLabel} htmlFor="f-desde">Desde</label>
            <input id="f-desde" type="date" name="desde" defaultValue={f.desde} className={fieldInput} />
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-hasta">Hasta</label>
            <input id="f-hasta" type="date" name="hasta" defaultValue={f.hasta} className={fieldInput} />
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-hd">Hora desde</label>
            <select id="f-hd" name="horaDesde" defaultValue={f.horaDesde ?? ''} className={fieldInput}>
              <option value="">Cualquiera</option>
              {HORAS.slice(0, 24).map((h, i) => (
                <option key={h} value={i}>{h}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-hh">Hora hasta</label>
            <select id="f-hh" name="horaHasta" defaultValue={f.horaHasta ?? ''} className={fieldInput}>
              <option value="">Cualquiera</option>
              {HORAS.slice(1).map((h, i) => (
                <option key={h} value={i + 1}>{h}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={fieldLabel} htmlFor="f-dias">Días</label>
            <select id="f-dias" name="dias" defaultValue={f.dias ?? ''} className={fieldInput}>
              <option value="">Todos</option>
              {DIAS.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-contacto">Contacto</label>
            <select id="f-contacto" name="contacto" defaultValue={f.contacto ?? ''} className={fieldInput}>
              <option value="">Todos</option>
              {CONTACTO.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-pagina">Página de origen</label>
            <select id="f-pagina" name="pagina" defaultValue={f.pagina ?? ''} className={fieldInput}>
              <option value="">Todas</option>
              {pages.map((p) => (
                <option key={p.v} value={p.v!}>{p.v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={fieldLabel} htmlFor="f-producto">Producto</label>
            <select id="f-producto" name="producto" defaultValue={f.producto ?? ''} className={fieldInput}>
              <option value="">Todos</option>
              {products.map((p) => (
                <option key={p.v} value={p.v!}>{p.v}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-3 pt-1">
          <div className="w-48">
            <label className={fieldLabel} htmlFor="f-orden">Ordenar</label>
            <select id="f-orden" name="orden" defaultValue={f.orden ?? ''} className={fieldInput}>
              {ORDEN.map((o) => (
                <option key={o.value} value={o.value === 'recientes' ? '' : o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white"
          >
            Aplicar filtros
          </button>
          {anyFilter && (
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <X className="w-4 h-4" />
              Limpiar todo
            </Link>
          )}
        </div>
      </form>

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
          Mostrando los 500 primeros resultados. Usa los filtros para acotar.
        </p>
      )}
    </div>
  )
}
