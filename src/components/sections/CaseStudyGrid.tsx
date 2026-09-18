'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { CaseStudy } from '@/types'

interface CaseStudyGridProps {
  heading?: string
  description?: string
  caseStudies?: CaseStudy[]
}

const enterpriseCaseStudies = [
  {
    id: 'retailvision',
    slug: 'ai-ecommerce-platform',
    client: 'RetailVision Enterprise',
    industry: 'Retail & E-Commerce',
    title: 'Next-Gen AI Commerce & Real-Time Recommendation Engine',
    highlightMetric: '+42%',
    highlightLabel: 'Conversion Rate Increase',
    secondaryMetrics: [
      { value: '3.8x', label: 'Throughput Under Peak' },
      { value: '0.4s', label: 'Global LCP Latency' },
    ],
    narrative:
      'Engineered a high-concurrency commerce platform integrating autonomous AI recommendation models and distributed edge caching, handling over 250,000 peak concurrent users without performance degradation.',
    stack: ['Next.js', 'Python RAG', 'AWS ECS', 'Redis', 'PostgreSQL'],
    bannerImage: '/E-Commerce-banner.png',
  },
  {
    id: 'finedge',
    slug: 'enterprise-digital-banking',
    client: 'FinEdge Capital',
    industry: 'Financial Services & Banking',
    title: 'Core Digital Banking & Real-Time Fraud Prevention Architecture',
    highlightMetric: '60%',
    highlightLabel: 'Ops Cost Reduction',
    secondaryMetrics: [
      { value: '99.999%', label: 'Infrastructure Uptime' },
      { value: '<120ms', label: 'Payment Settlement' },
    ],
    narrative:
      'Re-engineered a legacy core banking ecosystem with distributed event streaming, zero-trust cloud architecture, and real-time ML anomaly detection processing millions of transactions daily.',
    stack: ['React Native', 'Java Spring', 'Apache Kafka', 'Azure K8s', 'PostgreSQL'],
    bannerImage: '/Digital-Banking.png',
  },
  {
    id: 'healthbridge',
    slug: 'smart-healthcare-platform',
    client: 'HealthBridge Systems',
    industry: 'Healthcare & Life Sciences',
    title: 'Unified Healthcare Data Lake & ML-Assisted Diagnostics Assistant',
    highlightMetric: '85%',
    highlightLabel: 'Faster Diagnostic Intake',
    secondaryMetrics: [
      { value: '100%', label: 'HIPAA / FHIR Compliant' },
      { value: '12 Networks', label: 'Hospitals Synchronized' },
    ],
    narrative:
      'Aggregated siloed electronic health records across a 12-hospital network into a unified HIPAA-compliant data mesh, empowering clinical staff with ML-assisted diagnostic records.',
    stack: ['Python FastAPI', 'GCP Healthcare API', 'Docker', 'React', 'Terraform'],
    bannerImage: '/Healthcare-ab.png',
  },
]

export function CaseStudyGrid({ heading, description }: CaseStudyGridProps) {
  const shouldReduce = useReducedMotion()
  const displayHeading = heading || 'Measurable Enterprise Impact'
  const displayDescription =
    description ||
    'Real-world case studies demonstrating how our engineering teams turn complex technical challenges into competitive market advantages.'

  return (
    <section
      id="work"
      className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-200"
      aria-label="Enterprise case studies"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#037C9E] mb-3 font-sans">
              Metrics-Driven Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] font-display leading-[1.12]">
              {displayHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
              {displayDescription}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/work"
              variant="outline"
              size="md"
              className="border-gray-300 text-gray-700 hover:border-[#004771] hover:text-[#004771]"
            >
              View All Client Work
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Alternating Case Studies List */}
        <div className="space-y-20 lg:space-y-28">
          {enterpriseCaseStudies.map((study, index) => {
            const isReversed = index % 2 === 1

            return (
              <motion.article
                key={study.id}
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-[#F7F9FA] border border-gray-200/90 overflow-hidden shadow-xs hover:border-gray-300 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  
                  {/* Left or Right Media Preview */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[440px] bg-[#003358] overflow-hidden ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {study.bannerImage ? (
                      <Image
                        src={study.bannerImage}
                        alt={study.title}
                        fill
                        className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20">
                        <TrendingUp className="w-16 h-16" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Client & Industry Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-semibold mb-1">
                        <span>{study.client}</span>
                        <span className="opacity-60">·</span>
                        <span className="text-[#05A7D4]">{study.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Left or Right Metrics-First Content Column */}
                  <div
                    className={`lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between h-full ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Standout Single Metric Leading the Narrative */}
                      <div className="flex flex-wrap items-baseline gap-4 mb-6 pb-6 border-b border-gray-200">
                        <div>
                          {/* Single highlight element per viewport rule using #ED396D */}
                          <p
                            className="text-5xl sm:text-6xl font-bold font-display tracking-tight text-[#ED396D] leading-none"
                            style={{ fontFeatureSettings: '"tnum"' }}
                          >
                            {study.highlightMetric}
                          </p>
                          <p className="text-xs font-bold text-gray-600 tracking-wide uppercase mt-1 font-sans">
                            {study.highlightLabel}
                          </p>
                        </div>

                        {/* Secondary metrics */}
                        <div className="flex items-center gap-6 border-l border-gray-200 pl-6 ml-auto">
                          {study.secondaryMetrics.map((sec) => (
                            <div key={sec.label}>
                              <p className="text-2xl font-bold text-[#111827] font-display">
                                {sec.value}
                              </p>
                              <p className="text-[11px] text-gray-500 font-sans">
                                {sec.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 font-display leading-[1.2] group-hover:text-[#004771] transition-colors">
                        {study.title}
                      </h3>

                      {/* Technical Narrative */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-6">
                        {study.narrative}
                      </p>

                      {/* Technology Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link with Illustrative Label */}
                    <div className="pt-6 border-t border-gray-200/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-gray-400">
                        Case Study Benchmark
                      </span>

                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#004771] hover:text-[#05A7D4] transition-colors group-hover:gap-3"
                      >
                        Read Technical Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.article>
            )
          })}
        </div>

      </Container>
    </section>
  )
}
