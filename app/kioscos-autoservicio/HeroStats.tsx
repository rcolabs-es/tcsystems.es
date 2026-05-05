'use client'

import { useEffect, useRef, useState } from 'react'

interface StatProps {
  end: number
  suffix?: string
  label: string
  duration?: number
}

function CountStat({ end, suffix = '', label, duration = 1400 }: StatProps) {
  const [value, setValue] = useState(end)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const node = ref.current
    if (!node) return

    setValue(0)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(end * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div
        className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight tabular-nums leading-none [font-family:var(--font-fraunces)] [font-feature-settings:'ss01']"
        style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
      >
        {value}
        <span className="text-[#0e9acd]">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-[0.2em] [font-family:var(--font-geist-mono)] text-zinc-500 dark:text-zinc-500">
        {label}
      </div>
    </div>
  )
}

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-2">
      <CountStat end={14} suffix="+" label="años" />
      <CountStat end={500} suffix="+" label="instalaciones" />
      <CountStat end={5} label="delegaciones" />
    </div>
  )
}
