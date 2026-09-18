import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe,
  Building2,
  Cloud,
  Database,
  ShieldCheck,
  Users,
  Palette,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getServices, getServicesPage } from '@/lib/payload/queries'
import type { Service } from '@/types'

export const metadata: Metadata = {
  title: 'Technology Services — AI, Software & Cloud Engineering | ABL BusinessTech',
  description:
    'From production-ready AI to enterprise software and cloud infrastructure — ABL BusinessTech LLP delivers engineering solutions that drive hard ROI for global enterprises.',
}

// Map slug → Lucide icon component
const serviceIconMap: Record<string, React.ElementType> = {
  'ai-data-engineering': BrainCircuit,
  'software-engineering': Code2,
  'digital-experiences-web-mobile': Globe,
  'enterprise-applications': Building2,
  'cloud-and-devops': Cloud,
  'data-analytics-solutions': Database,
  'quality-assurance-testing': ShieldCheck,
  'staff-augmentation': Users,
  'ui-ux-design': Palette,
  // legacy slugs
  'software-development': Code2,
  'ai-machine-learning': BrainCircuit,
  'web-development': Globe,
  'data-engineering': Database,
}

const fallbackIcons: React.ElementType[] = [
  BrainCircuit, Code2, Globe, Building2, Cloud, Database, ShieldCheck, Users, Palette,
]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D', glow: 'rgba(227,22,79,0.12)' },
  { from: '#008BCB', to: '#00C4FF', glow: 'rgba(0,139,203,0.12)' },
  { from: '#7C3AED', to: '#A78BFA', glow: 'rgba(124,58,237,0.12)' },
  { from: '#059669', to: '#34D399', glow: 'rgba(5,150,105,0.12)' },
  { from: '#D97706', to: '#FCD34D', glow: 'rgba(217,119,6,0.12)' },
  { from: '#0891B2', to: '#67E8F9', glow: 'rgba(8,145,178,0.12)' },
  { from: '#7C3AED', to: '#C084FC', glow: 'rgba(124,58,237,0.12)' },
  { from: '#E3164F', to: '#008BCB', glow: 'rgba(227,22,79,0.10)' },
  { from: '#6366F1', to: '#8B5CF6', glow: 'rgba(99,102,241,0.12)' },
]

export default async function ServicesPage() {
  let pageData = null
  let services: Service[] = []
  try {
    ;[pageData, services] = await Promise.all([getServicesPage(), getServices()])
  } catch {
    /* use defaults */
  }

  const defaultServices = [
    {
      _id: '1',
      title: 'AI & Data Engineering',
      shortDescription:
        'Turn AI hype into hard enterprise ROI. We engineer production-ready AI agents, automate data pipelines, and deploy custom ML models that solve real operational bottlenecks—securely and at scale.',
      slug: { current: 'ai-data-engineering' },
      featured: true,
      order: 1,
    },
    {
      _id: '2',
      title: 'Software Engineering',
      shortDescription:
        'Build software that scales, not technical debt. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to drive hard ROI.',
      slug: { current: 'software-engineering' },
      featured: true,
      order: 2,
    },
    {
      _id: '3',
      title: 'Digital Experiences',
      shortDescription:
        'Stop losing users to clunky interfaces. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption, engagement, and revenue.',
      slug: { current: 'digital-experiences-web-mobile' },
      featured: true,
      order: 3,
    },
    {
      _id: '4',
      title: 'Enterprise Applications',
      shortDescription:
        'Architected for scale. Engineered for your enterprise. We design and build custom ERPs, CRMs, and enterprise apps that adapt to your exact business operations—not the other way around.',
      slug: { current: 'enterprise-applications' },
      featured: true,
      order: 4,
    },
    {
      _id: '5',
      title: 'Cloud & DevOps',
      shortDescription:
        'Ship code faster. Never go down. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your teams can ship secure code in minutes.',
      slug: { current: 'cloud-and-devops' },
      featured: true,
      order: 5,
    },
    {
      _id: '6',
      title: 'Data & Analytics Solutions',
      shortDescription:
        'Stop drowning in data. Start driving revenue. We architect high-speed data pipelines, implement powerful BI platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
      slug: { current: 'data-analytics-solutions' },
      featured: true,
      order: 6,
    },
    {
      _id: '7',
      title: 'Quality Assurance & Testing',
      shortDescription:
        'Ruthless software testing. Enterprise quality assurance. We deploy senior QA engineering pods to stress-test your architecture, automate release pipelines, and execute rigorous security testing.',
      slug: { current: 'quality-assurance-testing' },
      featured: true,
      order: 7,
    },
    {
      _id: '8',
      title: 'Staff Augmentation',
      shortDescription:
        'Stop losing 6 months to hiring. Instantly inject vetted, top 1% engineers—AI specialists, cloud architects, full-stack developers—directly into your existing teams within 2 weeks.',
      slug: { current: 'staff-augmentation' },
      featured: true,
      order: 8,
    },
    {
      _id: '9',
      title: 'UI/UX Design Services',
      shortDescription:
        'Stop losing conversions to poor design. We execute UX-led design strategies—user research, wireframing, prototyping, and design systems—that turn complex workflows into intuitive user experiences.',
      slug: { current: 'ui-ux-design' },
      featured: false,
      order: 9,
    },
  ] as Service[]

  const displayServices = services.length ? services : defaultServices

  const eyebrow = pageData?.eyebrow || 'Our Capabilities'
  const headline = pageData?.headline || 'Engineering Solutions That Drive Hard ROI'
  const subheadline =
    pageData?.subheadline ||
    'From production-ready AI to cloud infrastructure and custom enterprise software — we deploy dedicated engineering pods that integrate directly into your business and deliver measurable results.'
  const ctaHeading = pageData?.cta?.heading || 'Ready to Build With a Team That Actually Ships?'
  const ctaDesc =
    pageData?.cta?.description ||
    'Stop experimenting. Speak with a senior architect today to evaluate your requirements and build a technical roadmap that drives revenue.'
  const ctaLabel = pageData?.cta?.buttonLabel || 'Book a Technical Consultation'
  const ctaHref = pageData?.cta?.buttonHref || '/contact'

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B1220] border-b border-slate-800">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#ED396D]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#ED396D]">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              {headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-[#ED396D] hover:bg-[#D9005B] border-none shadow-md"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/solutions" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Our Solutions Overview
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <Container className="relative z-10">
          {/* Section header */}
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#05A7D4]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#05A7D4]">
                Capabilities Matrix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] tracking-tight">
              Full-Lifecycle Engineering Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Every practice is led by senior architects with cross-domain experience, delivering code that scales with enterprise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service, index) => {
              const IconComponent =
                serviceIconMap[service.slug?.current || ''] ||
                fallbackIcons[index % fallbackIcons.length]

              return (
                <Link
                  key={service._id}
                  href={`/services/${service.slug.current}`}
                  className="group relative bg-white rounded-2xl p-7 flex flex-col justify-between border border-slate-200/80 hover:border-[#05A7D4]/50 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#05A7D4]/10 text-[#05A7D4]">
                      <IconComponent
                        className="w-5 h-5 transition-transform duration-200 group-hover:scale-105"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#05A7D4] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Learn more */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#05A7D4] group-hover:text-[#037C9E] transition-colors">
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-20 bg-[#0B1220] border-t border-slate-800">
        <Container className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {ctaHeading}
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto text-base leading-relaxed font-normal">
              {ctaDesc}
            </p>
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              className="bg-[#ED396D] hover:bg-[#D9005B] border-none shadow-md"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
