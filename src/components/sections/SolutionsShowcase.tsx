'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Car,
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Truck,
  Wallet,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const FEATURED_SOLUTIONS = [
  {
    id: 'ai-workflow',
    icon: BrainCircuit,
    category: 'Enterprise Automation',
    title: 'AI Workflow Automation',
    short: 'Intelligent process orchestration that replaces manual back-office tasks with autonomous, self-correcting AI pipelines.',
    impact: 'Up to 70% faster process throughput',
    tags: ['Autonomous Agents', 'OCR & NLP', 'ERP Sync'],
  },
  {
    id: 'ai-chatbot',
    icon: Bot,
    category: 'Conversational AI',
    title: 'Enterprise AI Chatbots',
    short: 'Multi-lingual customer support and internal knowledge agents powered by secure enterprise vector search.',
    impact: '80% first-contact resolution',
    tags: ['Domain RAG', 'Zero Hallucination', 'Omnichannel'],
  },
  {
    id: 'mobility',
    icon: Car,
    category: 'Connected Mobility',
    title: 'Mobility & Fleet Platforms',
    short: 'Real-time telemetry, driver dispatch, vehicle sharing, and route optimization systems handling millions of daily trips.',
    impact: 'Sub-second dispatch matching',
    tags: ['Real-Time GPS', 'Dynamic Pricing', 'Fleet IoT'],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    category: 'Healthcare Tech',
    title: 'Clinical & Healthcare Platforms',
    short: 'HIPAA-compliant patient portals, automated EHR synchronization, and AI-assisted clinical diagnostic assistants.',
    impact: '100% HIPAA/HITECH Compliance',
    tags: ['FHIR/HL7', 'Telehealth', 'Clinical AI'],
  },
  {
    id: 'education',
    icon: GraduationCap,
    category: 'EdTech & LMS',
    title: 'Adaptive Learning Ecosystems',
    short: 'Interactive LMS platforms with AI assessment engines, skill mapping, and video streaming for global institutions.',
    impact: '98% learner engagement rate',
    tags: ['Adaptive Testing', 'SCORM/xAPI', 'Live Video'],
  },
  {
    id: 'hospitality',
    icon: UtensilsCrossed,
    category: 'Hospitality Tech',
    title: 'Hospitality & Smart POS',
    short: 'Cloud-native restaurant management, table reservation, contactless ordering, and real-time inventory control.',
    impact: '35% reduction in table turnaround',
    tags: ['Cloud POS', 'Inventory Sync', 'Loyalty Engine'],
  },
  {
    id: 'delivery',
    icon: Truck,
    category: 'Supply Chain',
    title: 'Delivery & Smart Logistics',
    short: 'Automated warehouse sorting, cold-chain tracking, courier dispatch, and last-mile proof-of-delivery platforms.',
    impact: '28% lower last-mile delivery cost',
    tags: ['Route Optimizer', 'Driver App', 'Warehouse API'],
  },
  {
    id: 'fintech',
    icon: Wallet,
    category: 'Fintech & Payments',
    title: 'Fintech & Digital Banking Suite',
    short: 'PCI-DSS compliant payment gateways, wallet infrastructure, fraud prevention engines, and regulatory reporting.',
    impact: 'Under 120ms transaction latency',
    tags: ['PCI-DSS Level 1', 'Fraud ML', 'Open Banking'],
  },
]

export function SolutionsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const offset = direction === 'left' ? -380 : 380
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section
      className="relative py-24 lg:py-32 bg-[#F7F9FA] overflow-hidden border-b border-gray-200/90"
      aria-label="Industry solutions showcase"
    >
      <Container>
        {/* Section Header with Rail Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#037C9E]" />
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#037C9E] font-sans">
                Industry-Specific Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] font-display leading-[1.12]">
              Turnkey Platforms Built for Vertical Impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
              Pre-architected, enterprise-hardened software solutions tailored to solve complex industry-specific workflows.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-lg border border-gray-300 bg-white flex items-center justify-center text-[#111827] hover:border-[#05A7D4] hover:text-[#05A7D4] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Scroll solutions left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-lg border border-gray-300 bg-white flex items-center justify-center text-[#111827] hover:border-[#05A7D4] hover:text-[#05A7D4] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Scroll solutions right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Card Rail */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon

            return (
              <div
                key={solution.id}
                className="w-[340px] sm:w-[380px] shrink-0 snap-start"
              >
                <div className="group flex flex-col justify-between h-full p-7 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-[#05A7D4]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-[#004771]/5 border border-[#004771]/10 flex items-center justify-center text-[#004771] group-hover:bg-[#05A7D4] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-bold text-[#037C9E] uppercase tracking-wider font-sans">
                        {solution.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#111827] mb-2 font-display group-hover:text-[#004771] transition-colors">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 font-sans">
                      {solution.short}
                    </p>

                    {/* Impact Metric Callout */}
                    <div className="p-3 rounded-lg bg-[#F7F9FA] border border-gray-200/70 mb-5">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 font-sans">
                        Measurable Impact
                      </p>
                      <p className="text-sm font-bold text-[#004771] font-sans">
                        {solution.impact}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {solution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-[#05A7D4] group-hover:text-[#004771] transition-colors">
                    <Link href="/solutions" className="inline-flex items-center gap-1.5">
                      <span>Explore solution details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-xs">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#05A7D4]" />
            <p className="text-sm font-medium text-gray-700">
              Need a bespoke architecture? We build custom solutions aligned to your tech stack and compliance needs.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="sm" className="shrink-0">
            Discuss Your Architecture
          </Button>
        </div>

      </Container>
    </section>
  )
}
