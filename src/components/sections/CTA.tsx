'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface CTAProps {
  heading?: string | null
  description?: string | null
  buttons?: { label: string; href: string; variant?: string }[] | null
}

export function CTA({ heading, description }: CTAProps) {
  const displayHeading =
    heading?.trim() || "Have a Digital Challenge? Let's Build the Solution."
  const displayDescription =
    description?.trim() ||
    'Schedule a technical audit with our principal engineers. We will analyze your architecture, identify bottlenecks, and build a milestone-driven implementation roadmap.'

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#003358] text-white overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background architectural pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #05A7D4 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle glow blurs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] opacity-25"
        style={{ background: 'radial-gradient(ellipse, #05A7D4 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-8 text-xs font-semibold text-[#05A7D4]">
          <span className="w-2 h-2 rounded-full bg-[#05A7D4] animate-pulse" aria-hidden="true" />
          <span className="tracking-wide uppercase text-[11px] font-bold">
            Start A Technical Conversation
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
          {displayHeading}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {displayDescription}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="shadow-[0_8px_30px_rgba(5,167,212,0.35)] min-h-[52px]"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            href="/work"
            variant="secondary"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 min-h-[52px]"
          >
            View Our Work
          </Button>
        </div>

        {/* Enterprise Social Proof Line */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300 font-sans">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#05A7D4]" />
            <span>Direct Access to Staff Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#05A7D4]" />
            <span>Strict NDA &amp; IP Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#05A7D4]" />
            <span>Zero-Commitment Initial Feasibility Audit</span>
          </div>
        </div>

      </Container>
    </section>
  )
}