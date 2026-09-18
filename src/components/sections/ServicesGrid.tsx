'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  BrainCircuit,
  RefreshCcw,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Palette,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { Service } from '@/types'

interface ServicesGridProps {
  heading?: string
  description?: string
  services?: Service[]
}

const defaultServices = [
  {
    title: 'Software Development',
    slug: 'software-engineering',
    description: 'Custom enterprise software platforms engineered for resilience, throughput, and strict security compliance.',
    icon: Code2,
    tag: 'Core Engineering',
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-data-engineering',
    description: 'Production-ready AI agents, domain-tuned LLMs, and real-time inference pipelines that create competitive moats.',
    icon: BrainCircuit,
    tag: 'GenAI & RAG',
  },
  {
    title: 'Digital Transformation',
    slug: 'enterprise-applications',
    description: 'Modernize legacy tech debt into agile, cloud-native microservices without interrupting live revenue operations.',
    icon: RefreshCcw,
    tag: 'Enterprise Modernization',
  },
  {
    title: 'Web Development',
    slug: 'digital-experiences-web-mobile',
    description: 'High-concurrency web applications, portal ecosystems, and customer-facing platforms with sub-second LCP.',
    icon: Globe,
    tag: 'Full-Stack Web',
  },
  {
    title: 'Mobile Development',
    slug: 'digital-experiences-web-mobile',
    description: 'Native iOS & Android and cross-platform Flutter/React Native applications built for mission-critical reliability.',
    icon: Smartphone,
    tag: 'iOS & Android',
  },
  {
    title: 'Cloud Engineering',
    slug: 'cloud-and-devops',
    description: 'Multi-cloud AWS, Azure & GCP architecture with automated CI/CD pipelines, Kubernetes, and FinOps optimization.',
    icon: Cloud,
    tag: 'Cloud & DevOps',
  },
  {
    title: 'Product Engineering',
    slug: 'software-engineering',
    description: 'End-to-end product delivery from rapid architecture prototyping to enterprise scaling and continuous iteration.',
    icon: Cpu,
    tag: 'SaaS & Platforms',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User-centered design systems, data-dense enterprise dashboards, and frictionless conversion journeys.',
    icon: Palette,
    tag: 'Design Systems',
  },
]

export function ServicesGrid({ heading, description, services }: ServicesGridProps) {
  const shouldReduce = useReducedMotion()

  const displayHeading = heading || 'Full-Cycle Engineering Capabilities'
  const displayDescription =
    description ||
    'We partner with CTOs and enterprise leaders to design, build, and deploy production software that drives measurable business ROI.'

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#111827] text-white overflow-hidden border-b border-gray-800"
      aria-label="Core services"
    >
      {/* Deep tech dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #05A7D4 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
        style={{ background: 'radial-gradient(circle, #05A7D4 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#05A7D4] mb-3 font-sans">
              Capabilities &amp; Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.12]">
              {displayHeading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed font-sans">
              {displayDescription}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href="/services"
              variant="outline"
              size="md"
              className="border-gray-700 text-gray-200 hover:border-[#05A7D4] hover:text-[#05A7D4]"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* 8-Service Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultServices.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between h-full p-6 rounded-xl bg-[#1F2937] border border-white/[0.08] hover:border-[#05A7D4]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(5,167,212,0.20)]"
                  aria-label={`Explore ${service.title}`}
                >
                  <div>
                    {/* Top row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-[#111827] border border-gray-700/60 flex items-center justify-center text-[#05A7D4] group-hover:bg-[#05A7D4] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-white/5 text-gray-400 group-hover:text-gray-200">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-[#05A7D4] transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Link Footnote */}
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-semibold text-[#05A7D4] group-hover:text-[#0390B5]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
