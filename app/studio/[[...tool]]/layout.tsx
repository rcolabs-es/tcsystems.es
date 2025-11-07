import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TCSystems Blog - Sanity Studio',
  description: 'Panel de administración del blog de TCSystems',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Layout independiente del resto de la app (sin Header ni Footer)
  return children
}

