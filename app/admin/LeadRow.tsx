'use client'

import { useState, useTransition } from 'react'
import {
  ChevronDown,
  FileText,
  Loader2,
  MessageCircle,
  Phone,
  Trash2,
} from 'lucide-react'
import { updateLead, deleteLead } from './actions'

export interface LeadDTO {
  id: string
  type: 'formulario' | 'whatsapp' | 'llamada'
  name: string | null
  email: string | null
  phone: string | null
  company: string | null
  message: string | null
  product: string | null
  source: string | null
  page: string | null
  status: 'nuevo' | 'atendido' | 'ganado' | 'perdido'
  closedAmount: string | null
  notes: string | null
  createdAt: string
}

const TYPE_META = {
  formulario: {
    label: 'Formulario',
    icon: FileText,
    cls: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300',
  },
  whatsapp: {
    label: 'WhatsApp',
    icon: MessageCircle,
    cls: 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300',
  },
  llamada: {
    label: 'Llamada',
    icon: Phone,
    cls: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  },
} as const

const STATUS_META = {
  nuevo: { label: 'Nuevo', dot: 'bg-[#0e9acd]' },
  atendido: { label: 'Atendido', dot: 'bg-amber-500' },
  ganado: { label: 'Ganado', dot: 'bg-green-500' },
  perdido: { label: 'Perdido', dot: 'bg-zinc-400' },
} as const

const dateFmt = new Intl.DateTimeFormat('es-ES', {
  day: '2-digit',
  month: 'short',
  year: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
})

const eur = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export default function LeadRow({ lead }: { lead: LeadDTO }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<LeadDTO['status']>(lead.status)
  const [amount, setAmount] = useState(lead.closedAmount ?? '')
  const [notes, setNotes] = useState(lead.notes ?? '')
  const [saving, startSaving] = useTransition()
  const [deleting, startDeleting] = useTransition()
  const [feedback, setFeedback] = useState<string | null>(null)

  const meta = TYPE_META[lead.type]
  const TypeIcon = meta.icon
  const isClosed = status === 'ganado' || status === 'perdido'
  const dirty =
    status !== lead.status ||
    amount !== (lead.closedAmount ?? '') ||
    notes !== (lead.notes ?? '')

  function handleSave() {
    setFeedback(null)
    startSaving(async () => {
      try {
        await updateLead(lead.id, { status, closedAmount: amount, notes })
        setFeedback('Guardado')
        setTimeout(() => setFeedback(null), 2500)
      } catch {
        setFeedback('Error al guardar')
      }
    })
  }

  function handleDelete() {
    if (!confirm('¿Eliminar este lead definitivamente?')) return
    startDeleting(async () => {
      try {
        await deleteLead(lead.id)
      } catch {
        setFeedback('Error al eliminar')
      }
    })
  }

  return (
    <div className={deleting ? 'opacity-40 pointer-events-none' : ''}>
      {/* Fila resumen */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
      >
        <span
          className={`inline-flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${meta.cls}`}
        >
          <TypeIcon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{meta.label}</span>
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium truncate">
            {lead.name || (
              <span className="text-zinc-400 italic">
                Clic anónimo{lead.page ? ` en ${lead.page}` : ''}
              </span>
            )}
            {lead.company && (
              <span className="text-zinc-500 font-normal"> · {lead.company}</span>
            )}
          </p>
          <p className="text-xs text-zinc-500 truncate">
            {[lead.source || lead.product, lead.email, lead.phone]
              .filter(Boolean)
              .join(' · ') || lead.page}
          </p>
        </div>

        {lead.closedAmount && lead.status === 'ganado' && (
          <span className="hidden sm:inline text-sm font-medium text-green-600 dark:text-green-400 shrink-0">
            {eur.format(Number(lead.closedAmount))}
          </span>
        )}

        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 shrink-0">
          <span className={`w-2 h-2 rounded-full ${STATUS_META[lead.status].dot}`} />
          <span className="hidden sm:inline">{STATUS_META[lead.status].label}</span>
        </span>

        <span className="text-xs text-zinc-400 [font-family:var(--font-geist-mono)] shrink-0 hidden md:inline">
          {dateFmt.format(new Date(lead.createdAt))}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Detalle + gestión */}
      {open && (
        <div className="px-4 sm:px-6 pb-6 pt-1 bg-zinc-50/60 dark:bg-zinc-800/20">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Datos del lead */}
            <dl className="space-y-2 text-sm">
              {(
                [
                  ['Fecha', dateFmt.format(new Date(lead.createdAt))],
                  ['Email', lead.email],
                  ['Teléfono', lead.phone],
                  ['Empresa', lead.company],
                  ['Producto', lead.product],
                  ['Origen', lead.source],
                  ['Página', lead.page],
                  ['Mensaje', lead.message],
                ] as const
              )
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] uppercase tracking-[0.18em] [font-family:var(--font-geist-mono)] text-zinc-500 pt-0.5">
                      {k}
                    </dt>
                    <dd className="text-zinc-700 dark:text-zinc-300 break-words min-w-0">
                      {v}
                    </dd>
                  </div>
                ))}
            </dl>

            {/* Gestión */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {(Object.keys(STATUS_META) as LeadDTO['status'][]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(s)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition-colors ${
                      status === s
                        ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-transparent'
                        : 'border-zinc-300 dark:border-zinc-700 hover:border-[#0e9acd]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_META[s].dot}`} />
                    {STATUS_META[s].label}
                  </button>
                ))}
              </div>

              {isClosed && status === 'ganado' && (
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] [font-family:var(--font-geist-mono)] text-zinc-500 mb-1.5">
                    Importe de cierre (€)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ej. 12500"
                    className="w-full max-w-xs bg-transparent border-0 border-b border-zinc-300 dark:border-zinc-700 focus:border-[#0e9acd] outline-none py-2 text-sm transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-[10px] uppercase tracking-[0.18em] [font-family:var(--font-geist-mono)] text-zinc-500 mb-1.5">
                  Notas internas
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Seguimiento, próximos pasos…"
                  className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:border-[#0e9acd] outline-none p-3 text-sm transition-colors resize-y"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || !dirty}
                  className="inline-flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white disabled:opacity-40"
                >
                  {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  Guardar
                </button>
                {feedback && (
                  <span
                    className={`text-xs [font-family:var(--font-geist-mono)] uppercase tracking-[0.15em] ${
                      feedback === 'Guardado'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {feedback}
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={deleting}
                  className="ml-auto inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
