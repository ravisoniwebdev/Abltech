'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Building,
  HeartPulse,
  BadgeDollarSign,
  GraduationCap,
  ShoppingCart,
  Factory,
  Truck,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { Industry } from '@/types'

interface IndustriesGridProps {
  heading?: string
  description?: string
  industries?: Industry[]
}

const defaultIndustries = [
  {
    name: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    description: 'HIPAA-compliant platforms, EHR integration, telemetry, and AI clinical diagnostic tooling.',
    icon: HeartPulse,
  },
  {
    name: 'Fintech & Digital Banking',
    slug: 'financial-services',
    description: 'PCI-DSS transaction rails, algorithmic fraud mitigation, and next-gen core banking suites.',
    icon: BadgeDollarSign,
  },
  {
    name: 'Retail & E-Commerce',
    slug: 'retail-ecommerce',
    description: 'Sub-second commerce engines, omni-channel inventory sync, and personalized AI merchandising.',
    icon: ShoppingCart,
  },
  {
    name: 'Logistics & Supply Chain',
    slug: 'logistics',
    description: 'Fleet tracking, route optimization engines, automated dispatch, and IoT cold-chain visibility.',
    icon: Truck,
  },
  {
    name: 'EdTech & Learning',
    slug: 'education',
    description: 'Scalable LMS platforms, adaptive testing algorithms, and video streaming ecosystems.',
    icon: GraduationCap,
  },
  {
    name: 'Manufacturing & Industry 4.0',
    slug: 'manufacturing',
    description: 'Predictive maintenance pipelines, factory floor IoT telemetry, and digital twin architectures.',
    icon: Factory,
  },
  {
    name: 'Real Estate & PropTech',
    slug: 'real-estate',
    description: 'Property asset marketplaces, lease automation, smart building IoT, and investment portals.',
    icon: Building,
  },
  {
    name: 'Enterprise Software & Startups',
    slug: 'startups',
    description: 'Rapid MVP scaling, multi-tenant SaaS engineering, and enterprise readiness compliance.',
    icon: Rocket,
  },
]

export function IndustriesGrid({ heading, description }: IndustriesGridProps) {
  const shouldReduce = useReducedMotion()
  const displayHeading = heading || 'Domain Expertise Across Critical Industries'
  const displayDescription =
    description ||
    'Deep vertical knowledge combined with modern software engineering to build solutions tailored to unique regulatory and operational realities.'

  return (
    <section
      id="industries"
      className="relative py-24 lg:py-32 bg-[#F7F9FA] overflow-hidden border-b border-gray-200"
      aria-label="Industries served"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#037C9E] mb-3 font-sans">
              Industries Served
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
              href="/industries"
              variant="outline"
              size="md"
              className="border-gray-300 text-gray-700 hover:border-[#004771] hover:text-[#004771]"
            >
              Explore All Industries
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* 8-Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultIndustries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.name}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/industries`}
                  className="group flex flex-col justify-between h-full p-6 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-[#05A7D4]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[#F3F4F6] border border-gray-200/80 flex items-center justify-center text-[#05A7D4] group-hover:bg-[#05A7D4] group-hover:text-white transition-colors duration-300 mb-5">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#111827] mb-2 font-display group-hover:text-[#004771] transition-colors">
                      {industry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-4">
                      {industry.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-semibold text-[#004771] group-hover:text-[#05A7D4] transition-colors">
                    <span>Learn industry solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
