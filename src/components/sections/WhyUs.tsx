'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Brain,
  Users2,
  ShieldCheck,
  Zap,
  CloudCog,
  HeadphonesIcon,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { CompanyValue } from '@/types'

interface WhyUsProps {
  heading?: string
  description?: string
  values?: CompanyValue[]
}

const enterpriseDifferentiators = [
  {
    icon: Brain,
    title: 'Outcome-Driven AI Architecture',
    description:
      'We don’t build toy prototypes. Every AI model, autonomous agent, and RAG pipeline is evaluated against clear balance-sheet returns, throughput gains, and strict zero-hallucination thresholds.',
    badge: 'Measurable ROI',
  },
  {
    icon: Users2,
    title: 'Top 1% Senior Engineering Talent',
    description:
      'No junior hand-offs or bait-and-switch staffing. Your platform is designed and coded by senior architects and staff engineers averaging 8+ years of high-concurrency production experience.',
    badge: 'Elite Staff Engineers',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security & Compliance',
    description:
      'Architecture engineered from day one for SOC2 Type II, HIPAA, PCI-DSS Level 1, and ISO/IEC 27001 standards, with automated static vulnerability scanning integrated into CI/CD.',
    badge: 'ISO / SOC2 Standards',
  },
  {
    icon: Zap,
    title: 'Transparent Velocity & Direct Access',
    description:
      'Direct communication channels with your lead engineers, bi-weekly working sprint demos, milestone-locked delivery, and complete visibility into code repos and sprint burn-down.',
    badge: 'Bi-Weekly Demos',
  },
  {
    icon: CloudCog,
    title: 'High-Scale Multi-Cloud Mastery',
    description:
      'Native multi-cloud architecture across AWS, Azure, and GCP. Kubernetes autoscaling, resilient distributed microservices, and automated failover handling millions of events daily.',
    badge: '99.99% Guaranteed SLA',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Long-Term SLA Support',
    description:
      'We stand behind every line of code with contractual uptime SLAs, 24/7 APM monitoring, proactive security patching, and continuous performance optimization as your traffic scales.',
    badge: 'Contractual Guarantees',
  },
]

export function WhyUs({ heading, description }: WhyUsProps) {
  const shouldReduce = useReducedMotion()

  const displayHeading = heading || 'Why CTOs & Engineering Leaders Choose ABL'
  const displayDescription =
    description ||
    'We combine elite technical execution with deep enterprise accountability to deliver mission-critical software on time, within budget, and built for scale.'

  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-200"
      aria-label="Why choose ABL BusinessTech"
    >
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#037C9E] mb-3 font-sans">
            The ABL Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] font-display leading-[1.12] mb-4">
            {displayHeading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            {displayDescription}
          </p>
        </div>

        {/* 6 Differentiators in 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseDifferentiators.map((diff, index) => {
            const Icon = diff.icon

            return (
              <motion.div
                key={diff.title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group p-8 rounded-2xl bg-[#F7F9FA] border border-gray-200/90 hover:border-[#05A7D4]/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon and Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#004771]/5 border border-[#004771]/10 flex items-center justify-center text-[#004771] group-hover:bg-[#05A7D4] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
                      {diff.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111827] mb-3 font-display group-hover:text-[#004771] transition-colors">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/70 flex items-center gap-2 text-xs font-semibold text-[#037C9E]">
                  <CheckCircle2 className="w-4 h-4 text-[#05A7D4]" />
                  <span>Enterprise Commitment</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
