'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ThemedProductImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function ThemedProductImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  priority
}: ThemedProductImageProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement

    // Estado inicial
    setIsDark(html.classList.contains('dark'))

    // Observar cambios en la clase del <html>
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains('dark'))
    })

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Image
      src={isDark ? darkSrc : lightSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
