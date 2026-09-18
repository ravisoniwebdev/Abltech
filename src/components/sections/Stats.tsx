'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Briefcase, Globe2, HeartHandshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Statistic } from '@/types'

interface StatsProps {
  heading?: string
  statistics?: Statistic[]
}

const defaultStats = [
  {
    id: '1',
    value: '12+',
    label: 'Years of Excellence',
    sublabel: 'Engineering mission-critical enterprise systems since 2014',
    icon: Award,
  },
  {
    id: '2',
    value: '200+',
    label: 'Projects Delivered',
    sublabel: 'Shipped to production across North America, Europe & Asia',
    icon: Briefcase,
  },
  {
    id: '3',
    value: '40+',
    label: 'Industries Served',
    sublabel: 'From regulated banking and healthcare to autonomous mobility',
    icon: Globe2,
  },
  {
    id: '4',
    value: '95%',
    label: 'Client Retention Rate',
    sublabel: 'Multi-year strategic engineering retainers and partnerships',
    icon: HeartHandshake,
  },
]

function useCountUp(target: string, active: boolean, duration = 1600) {
  const [display, setDisplay] = useState('0')
  const hasRun = useRef(false)

  useEffect(() => {
    if (!active || hasRun.current) return
    const match = target.match(/^(\d+\.?\d*)(.*)$/)
    if (!match) {
      setDisplay(target)
      return
    }

    const end = parseFloat(match[1])
    const suffix = match[2]
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(ease * end)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }

    hasRun.current = true
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return display
}

export function Stats({ heading }: StatsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) {
      setActive(true)
      return
    }
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [shouldReduce])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#003358] text-white overflow-hidden border-y border-[#004771]"
      aria-label="Company metrics"
    >
      {/* Background ambient radial lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-20"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {heading && (
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">{heading}</h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {defaultStats.map((stat, index) => {
            const Icon = stat.icon
            const count = useCountUp(stat.value, active)

            return (
              <div
                key={stat.id}
                className="flex flex-col items-start p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#05A7D4]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Stat Icon */}
                <div className="w-11 h-11 rounded-lg bg-[#05A7D4]/15 border border-[#05A7D4]/30 flex items-center justify-center text-[#05A7D4] mb-6">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>

                {/* Counter Value */}
                <p className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2 tabular-nums">
                  {shouldReduce ? stat.value : count}
                </p>

                {/* Stat Label */}
                <p className="text-base font-bold text-gray-200 mb-1 font-sans">
                  {stat.label}
                </p>

                {/* Subtext */}
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {stat.sublabel}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
