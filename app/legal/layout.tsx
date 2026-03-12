import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal | TCSystems',
  description: 'Información legal, políticas de privacidad y términos de uso de TCSystems.',
  robots: 'index, follow',
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  )
} 