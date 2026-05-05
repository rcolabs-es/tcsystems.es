'use client'

import { useState } from 'react'
import { Loader2, ArrowRight } from 'lucide-react'

const sectors = [
  { value: '', label: 'Selecciona tu sector' },
  { value: 'parking', label: 'Parking / Aparcamiento' },
  { value: 'lavadero', label: 'Lavadero / Túnel de lavado' },
  { value: 'deportivo', label: 'Centro deportivo / Gimnasio' },
  { value: 'hosteleria', label: 'Hostelería / Restauración' },
  { value: 'retail', label: 'Comercio / Retail' },
  { value: 'publico', label: 'Administración pública' },
  { value: 'comunidad', label: 'Comunidad / Edificio' },
  { value: 'otro', label: 'Otro' },
]

export default function LandingForm() {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    consent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [errMsg, setErrMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!data.consent) return
    setSubmitting(true)
    setErrMsg(null)
    try {
      const sectorLabel =
        sectors.find((s) => s.value === data.sector)?.label || data.sector
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.name,
          lastName: '',
          phone: data.phone,
          company: data.company,
          corporateEmail: data.email,
          project: `Sector: ${sectorLabel} · Origen: Landing Kioscos Autoservicio`,
          productName: 'Kioscos Autoservicio',
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'No se pudo enviar')
      setDone(true)
    } catch (err) {
      setErrMsg(
        err instanceof Error
          ? err.message
          : 'Error al enviar. Inténtalo de nuevo.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-8 lg:p-10">
        <div className="flex items-baseline gap-3 mb-5">
          <span className="text-xs uppercase tracking-[0.2em] [font-family:var(--font-geist-mono)] text-[#0e9acd]">
            Recibido
          </span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <h3
          className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.05] mb-4 [font-family:var(--font-fraunces)]"
          style={{ fontVariationSettings: '"opsz" 60, "SOFT" 50' }}
        >
          Gracias, te llamamos en menos de 24 h.
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Hemos recibido tu solicitud. Un especialista revisará tu caso y te
          contactará con una propuesta a medida.
        </p>
        <p className="mt-6 text-xs [font-family:var(--font-geist-mono)] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
          Ref · {Date.now().toString(36).toUpperCase()}
        </p>
      </div>
    )
  }

  const inputCls =
    'w-full bg-transparent border-0 border-b border-zinc-300 dark:border-zinc-700 focus:border-[#0e9acd] outline-none py-2.5 text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-colors duration-200'
  const labelCls =
    'block text-[10px] uppercase tracking-[0.22em] [font-family:var(--font-geist-mono)] text-zinc-500 dark:text-zinc-500 mb-2'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 sm:p-8 lg:p-10 space-y-6"
      noValidate
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-xs uppercase tracking-[0.2em] [font-family:var(--font-geist-mono)] text-[#0e9acd]">
          06 / Solicita estudio
        </span>
        <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div>
        <label htmlFor="lf-name" className={labelCls}>
          Nombre completo
        </label>
        <input
          id="lf-name"
          name="name"
          type="text"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          autoComplete="name"
          className={inputCls}
          placeholder="Ej. Marta García"
        />
      </div>

      <div>
        <label htmlFor="lf-company" className={labelCls}>
          Empresa
        </label>
        <input
          id="lf-company"
          name="company"
          type="text"
          required
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
          autoComplete="organization"
          className={inputCls}
          placeholder="Tu empresa"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lf-email" className={labelCls}>
            Email
          </label>
          <input
            id="lf-email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="email"
            inputMode="email"
            className={inputCls}
            placeholder="tu@empresa.com"
          />
        </div>
        <div>
          <label htmlFor="lf-phone" className={labelCls}>
            Teléfono{' '}
            <span className="normal-case tracking-normal text-zinc-400 dark:text-zinc-600">
              (opcional)
            </span>
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            autoComplete="tel"
            inputMode="tel"
            className={inputCls}
            placeholder="+34 600 000 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lf-sector" className={labelCls}>
          Sector
        </label>
        <select
          id="lf-sector"
          name="sector"
          required
          value={data.sector}
          onChange={(e) => setData({ ...data, sector: e.target.value })}
          className={`${inputCls} appearance-none bg-no-repeat bg-[length:12px] bg-[right_4px_center] bg-[image:linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%)] bg-[size:6px_6px,6px_6px] bg-[position:calc(100%-12px)_55%,calc(100%-6px)_55%]`}
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
            backgroundPosition: 'calc(100% - 12px) 55%, calc(100% - 6px) 55%',
            backgroundSize: '6px 6px, 6px 6px',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {sectors.map((s) => (
            <option key={s.value} value={s.value} disabled={s.value === ''}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <label
        htmlFor="lf-consent"
        className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer leading-relaxed pt-2"
      >
        <input
          id="lf-consent"
          type="checkbox"
          required
          checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })}
          className="mt-1 w-4 h-4 accent-[#0e9acd] cursor-pointer"
        />
        <span>
          Acepto la{' '}
          <a
            href="/legal/privacidad"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-[#0e9acd]"
          >
            política de privacidad
          </a>{' '}
          y el tratamiento de mis datos.
        </span>
      </label>

      {errMsg && (
        <div
          role="alert"
          aria-live="polite"
          className="text-sm text-red-600 dark:text-red-400 [font-family:var(--font-geist-mono)] uppercase tracking-[0.15em]"
        >
          {errMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || !data.consent}
        className="group relative w-full inline-flex items-center justify-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-6 py-4 rounded-full text-base font-medium tracking-tight transition-all duration-200 hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-950 dark:disabled:hover:bg-white"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Solicitar estudio gratuito
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="text-[10px] [font-family:var(--font-geist-mono)] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-600 text-center">
        Respuesta · &lt; 24 h · Sin compromiso
      </p>
    </form>
  )
}
