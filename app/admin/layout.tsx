import type { Metadata } from 'next'
import Image from 'next/image'
import { auth, signOut } from '@/auth'
import { LogOut } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Panel de leads · TCSystems',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.webp"
            alt="TCSystems"
            width={1000}
            height={1000}
            className="w-12 h-12 dark:brightness-0 dark:invert"
          />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {session?.user && (
              <form
                action={async () => {
                  'use server'
                  await signOut({ redirectTo: '/admin/login' })
                }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Salir
                </button>
              </form>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  )
}
