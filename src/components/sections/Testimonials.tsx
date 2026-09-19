'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Building2, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  heading?: string
  testimonials?: Testimonial[]
}

const enterpriseTestimonials = [
  {
    id: '1',
    clientName: 'Sarah Mitchell',
    designation: 'Chief Technology Officer',
    company: 'RetailVision Enterprise',
    companyLogo: 'RetailVision',
    industry: 'Omnichannel E-Commerce',
    testimonial:
      'ABL BusinessTech completely transformed how we operate digitally. Their team did not just build software—they engineered our entire AI recommendation engine and high-concurrency commerce architecture. Throughput increased by 3.8x with sub-second latency under peak holiday traffic.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
    stats: '+42% Conversion Rate',
  },
  {
    id: '2',
    clientName: 'Rajesh Kumar',
    designation: 'VP of Engineering',
    company: 'FinEdge Capital',
    companyLogo: 'FinEdge',
    industry: 'Digital Banking & Fintech',
    testimonial:
      'The engineering velocity and architectural rigor ABL brought to our core banking modernization was extraordinary. They migrated our legacy services to a zero-trust event-driven architecture with zero transaction drops and 99.999% uptime. They are our highest-performing engineering partner.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
    stats: '60% Ops Cost Reduction',
  },
  {
    id: '3',
    clientName: 'Dr. Amanda Chen',
    designation: 'Chief Digital Officer',
    company: 'HealthBridge Systems',
    companyLogo: 'HealthBridge',
    industry: 'Healthcare & Life Sciences',
    testimonial:
      'Finding a technical partner that understands both modern machine learning and strict HIPAA/FHIR compliance is nearly impossible. ABL BusinessTech delivered on both counts, unifying clinical records across 12 hospitals with zero security vulnerabilities.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80',
    stats: '85% Faster Diagnostics',
  },
]

export function Testimonials({ heading }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const shouldReduce = useReducedMotion()

  const displayHeading = heading || 'What Enterprise Leaders Say About ABL'
  const testimonials = enterpriseTestimonials

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (shouldReduce || !isAutoPlaying) return
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next, shouldReduce])

  const t = testimonials[current]

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-[#111827] text-white overflow-hidden border-b border-gray-800"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
        style={{ background: 'radial-gradient(circle, #004771 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#05A7D4] mb-3 font-sans">
              Verified Client Endorsements
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.12]">
              {displayHeading}
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl border border-gray-700 bg-[#1F2937] text-gray-200 flex items-center justify-center hover:bg-[#05A7D4] hover:text-white hover:border-[#05A7D4] transition-all cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl border border-gray-700 bg-[#1F2937] text-gray-200 flex items-center justify-center hover:bg-[#05A7D4] hover:text-white hover:border-[#05A7D4] transition-all cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-[#1F2937] border border-gray-800 shadow-2xl relative overflow-hidden"
            >
              {/* Giant Decorative Quote Mark */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.03] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Executive Profile Column */}
                <div className="lg:col-span-4 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-800 pb-8 lg:pb-0 lg:pr-10">
                  {/* Real Executive Headshot with verified badge */}
                  <div className="relative mb-5">
                    <img
                      src={t.avatarUrl}
                      alt={t.clientName}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#05A7D4]/40 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#05A7D4] text-white flex items-center justify-center border-2 border-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {t.clientName}
                  </h3>
                  <p className="text-sm font-semibold text-[#05A7D4] mt-0.5 font-sans">
                    {t.designation}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-sans">
                    {t.company} · {t.industry}
                  </p>

                  {/* Standout Result Metric Pill */}
                  <div className="mt-6 px-3.5 py-1.5 rounded-lg bg-[#05A7D4]/10 border border-[#05A7D4]/30 text-xs font-mono font-bold text-[#05A7D4]">
                    {t.stats}
                  </div>
                </div>

                {/* Right Quote Content Column */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-sans leading-relaxed mb-8">
                    &ldquo;{t.testimonial}&rdquo;
                  </blockquote>

                  {/* Company Verification Note */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span>Contractual Enterprise Verification: {t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx ? 'w-8 bg-[#05A7D4]' : 'w-2 bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  )
}
