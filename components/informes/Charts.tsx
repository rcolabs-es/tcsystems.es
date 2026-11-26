'use client'

import { useState } from 'react'

// useGrouping 'always': en es-ES Intl no agrupa números de 4 cifras (8244 → 8.244)
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' } as Intl.NumberFormatOptions)
export const fmt = (n: number) => nf.format(n)
export const fmt1 = (n: number) => n.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

export function cambio(ahora: number, antes: number) {
  if (!antes) return null
  return Math.round(((ahora - antes) / antes) * 100)
}

export function Delta({ ahora, antes, invert = false }: { ahora: number; antes: number; invert?: boolean }) {
  const pct = cambio(ahora, antes)
  if (pct === null) return <span className="text-[var(--muted)]">nuevo</span>
  const good = invert ? pct < 0 : pct > 0
  return (
    <span className={good ? 'text-[var(--up)]' : pct === 0 ? 'text-[var(--muted)]' : 'text-[var(--down)]'}>
      {pct > 0 ? '▲' : pct < 0 ? '▼' : '='} {pct > 0 ? '+' : ''}
      {fmt(pct)} %
    </span>
  )
}

type CompareRow = { label: string; ahora: number; antes: number }

/** Barras horizontales emparejadas: periodo anterior (gris) frente al actual (cian). */
export function CompareBars({ rows, unit, caption }: { rows: CompareRow[]; unit: string; caption: string }) {
  const [hover, setHover] = useState<number | null>(null)
  const max = Math.max(...rows.flatMap((r) => [r.ahora, r.antes]))

  return (
    <figure className="informe-figure">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="text-[15px] font-semibold text-[var(--ink)]">{caption}</span>
        <span className="flex items-center gap-4 text-[13px] text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-2 w-4 rounded-full bg-[var(--prev)]" aria-hidden /> jun–ago
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block h-2 w-4 rounded-full bg-[var(--cyan)]" aria-hidden /> sep–nov
          </span>
        </span>
      </figcaption>

      <ul className="mt-5 space-y-3.5">
        {rows.map((r, i) => (
          <li
            key={r.label}
            tabIndex={0}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className="group relative grid grid-cols-[minmax(0,11rem)_minmax(0,1fr)] items-center gap-x-4 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] max-sm:grid-cols-1 max-sm:gap-y-1.5"
          >
            <span className="truncate text-[14px] text-[var(--ink-2)]" title={r.label}>
              {r.label}
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="flex items-center gap-2">
                <span
                  className="informe-bar h-[7px] rounded-r-full bg-[var(--prev)]"
                  style={{ width: `${Math.max(0.6, (r.antes / max) * 100) * 0.82}%` }}
                />
                <span className="tabular-nums text-[12px] text-[var(--muted)]">{fmt(r.antes)}</span>
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="informe-bar h-[11px] rounded-r-full bg-[var(--cyan)] transition-[filter] group-hover:brightness-125"
                  style={{ width: `${Math.max(0.6, (r.ahora / max) * 100) * 0.82}%` }}
                />
                <span className="tabular-nums text-[13px] font-semibold text-[var(--ink)]">{fmt(r.ahora)}</span>
              </span>
            </span>

            {hover === i && (
              <span
                role="status"
                className="pointer-events-none absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-3 py-2 text-[12.5px] shadow-[0_8px_24px_rgb(0_0_0/0.35)] max-sm:hidden"
              >
                <span className="block font-semibold text-[var(--ink)]">{r.label}</span>
                <span className="tabular-nums text-[var(--muted)]">
                  {fmt(r.antes)} → {fmt(r.ahora)} {unit} · <Delta ahora={r.ahora} antes={r.antes} />
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </figure>
  )
}

type RankRow = { label: string; value: number }

/** Ranking de una sola serie. La primera fila puede destacarse. */
export function RankBars({ rows, unit, caption, highlight }: { rows: RankRow[]; unit: string; caption: string; highlight?: string }) {
  const max = Math.max(...rows.map((r) => r.value))
  const total = rows.reduce((s, r) => s + r.value, 0)
  return (
    <figure className="informe-figure">
      <figcaption className="text-[15px] font-semibold text-[var(--ink)]">{caption}</figcaption>
      <ul className="mt-5 space-y-3">
        {rows.map((r) => {
          const hot = r.label === highlight
          return (
            <li
              key={r.label}
              className="grid grid-cols-[minmax(0,11rem)_minmax(0,1fr)] items-center gap-x-4 max-sm:grid-cols-1 max-sm:gap-y-1.5"
              title={`${r.label}: ${fmt(r.value)} ${unit} (${fmt(Math.round((r.value / total) * 100))} %)`}
            >
              <span className={`truncate text-[14px] ${hot ? 'font-semibold text-[var(--ink)]' : 'text-[var(--ink-2)]'}`}>{r.label}</span>
              <span className="flex items-center gap-2">
                <span
                  className={`informe-bar h-[11px] rounded-r-full ${hot ? 'bg-[var(--cyan)]' : 'bg-[var(--cyan-dim)]'}`}
                  style={{ width: `${Math.max(0.8, (r.value / max) * 100) * 0.8}%` }}
                />
                <span className="tabular-nums text-[13px] font-semibold text-[var(--ink)]">{fmt(r.value)}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </figure>
  )
}
