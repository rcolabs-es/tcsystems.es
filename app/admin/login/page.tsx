'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Loader2, Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const res = await signIn('credentials', {
      user,
      password,
      redirect: false,
    })
    if (res?.error) {
      setError('Usuario o contraseña incorrectos')
      setSubmitting(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  const inputCls =
    'w-full bg-transparent border-0 border-b border-zinc-300 dark:border-zinc-700 focus:border-[#0e9acd] outline-none py-2.5 text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-colors duration-200'
  const labelCls =
    'block text-[10px] uppercase tracking-[0.22em] [font-family:var(--font-geist-mono)] text-zinc-500 mb-2'

  return (
    <div className="max-w-sm mx-auto mt-16">
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.webp"
          alt="TCSystems"
          width={1000}
          height={1000}
          className="w-24 h-24 dark:brightness-0 dark:invert"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-zinc-900/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-8 space-y-6"
      >
        <div className="flex items-center gap-3">
          <Lock className="w-4 h-4 text-[#0e9acd]" />
          <h2 className="text-xl font-medium tracking-tight [font-family:var(--font-fraunces)]">
            Acceso al panel
          </h2>
        </div>

        <div>
          <label htmlFor="login-user" className={labelCls}>
            Usuario
          </label>
          <input
            id="login-user"
            type="text"
            required
            autoComplete="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="login-password" className={labelCls}>
            Contraseña
          </label>
          <input
            id="login-password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputCls}
          />
        </div>

        {error && (
          <p
            role="alert"
            className="text-sm text-red-600 dark:text-red-400 [font-family:var(--font-geist-mono)] uppercase tracking-[0.15em]"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-6 py-3.5 rounded-full text-base font-medium tracking-tight transition-all duration-200 hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white disabled:opacity-40"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Entrando…
            </>
          ) : (
            'Entrar'
          )}
        </button>
      </form>
    </div>
  )
}
