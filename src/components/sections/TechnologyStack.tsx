'use client'

import React, { useState, useEffect } from 'react'
import {
  Monitor,
  Server,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  GitMerge,
  ShoppingBag,
  FileText,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Technology } from '@/types'

interface TechnologyStackProps {
  heading?: string
  description?: string
  technologies?: Technology[]
}

const categories = [
  'Frontend',
  'Backend',
  'Mobile',
  'Cloud',
  'AI/ML',
  'Database',
  'DevOps',
  'E-commerce',
  'CMS',
]

const defaultTechnologies: Technology[] = [
  // Frontend
  { _id: 'f1', name: 'React', category: 'Frontend', featured: true, order: 1 },
  { _id: 'f2', name: 'Next.js', category: 'Frontend', featured: true, order: 2 },
  { _id: 'f3', name: 'TypeScript', category: 'Frontend', featured: true, order: 3 },
  { _id: 'f4', name: 'Vue.js', category: 'Frontend', featured: true, order: 4 },
  { _id: 'f5', name: 'Angular', category: 'Frontend', featured: false, order: 5 },
  { _id: 'f6', name: 'Tailwind CSS', category: 'Frontend', featured: false, order: 6 },
  // Backend
  { _id: 'b1', name: 'Node.js', category: 'Backend', featured: true, order: 1 },
  { _id: 'b2', name: 'Python', category: 'Backend', featured: true, order: 2 },
  { _id: 'b3', name: 'Go', category: 'Backend', featured: true, order: 3 },
  { _id: 'b4', name: 'Java / Spring', category: 'Backend', featured: false, order: 4 },
  { _id: 'b5', name: '.NET Core', category: 'Backend', featured: false, order: 5 },
  { _id: 'b6', name: 'PHP / Laravel', category: 'Backend', featured: false, order: 6 },
  // Mobile
  { _id: 'm1', name: 'React Native', category: 'Mobile', featured: true, order: 1 },
  { _id: 'm2', name: 'Flutter', category: 'Mobile', featured: true, order: 2 },
  { _id: 'm3', name: 'iOS (Swift)', category: 'Mobile', featured: false, order: 3 },
  { _id: 'm4', name: 'Android (Kotlin)', category: 'Mobile', featured: false, order: 4 },
  // Cloud
  { _id: 'c1', name: 'AWS', category: 'Cloud', featured: true, order: 1 },
  { _id: 'c2', name: 'Microsoft Azure', category: 'Cloud', featured: true, order: 2 },
  { _id: 'c3', name: 'Google Cloud', category: 'Cloud', featured: true, order: 3 },
  { _id: 'c4', name: 'Kubernetes', category: 'Cloud', featured: false, order: 4 },
  { _id: 'c5', name: 'Docker', category: 'Cloud', featured: false, order: 5 },
  // AI/ML
  { _id: 'a1', name: 'OpenAI / GPT-4o', category: 'AI/ML', featured: true, order: 1 },
  { _id: 'a2', name: 'Anthropic Claude', category: 'AI/ML', featured: true, order: 2 },
  { _id: 'a3', name: 'LangChain / LlamaIndex', category: 'AI/ML', featured: true, order: 3 },
  { _id: 'a4', name: 'PyTorch', category: 'AI/ML', featured: false, order: 4 },
  { _id: 'a5', name: 'Pinecone / Qdrant', category: 'AI/ML', featured: false, order: 5 },
  // Database
  { _id: 'd1', name: 'PostgreSQL', category: 'Database', featured: true, order: 1 },
  { _id: 'd2', name: 'Redis', category: 'Database', featured: true, order: 2 },
  { _id: 'd3', name: 'MongoDB', category: 'Database', featured: true, order: 3 },
  { _id: 'd4', name: 'Snowflake', category: 'Database', featured: false, order: 4 },
  // DevOps
  { _id: 'dev1', name: 'GitHub Actions', category: 'DevOps', featured: true, order: 1 },
  { _id: 'dev2', name: 'Terraform', category: 'DevOps', featured: true, order: 2 },
  { _id: 'dev3', name: 'ArgoCD', category: 'DevOps', featured: false, order: 3 },
  { _id: 'dev4', name: 'Datadog', category: 'DevOps', featured: false, order: 4 },
  // E-commerce
  { _id: 'e1', name: 'Shopify Plus', category: 'E-commerce', featured: true, order: 1 },
  { _id: 'e2', name: 'commercelayer', category: 'E-commerce', featured: true, order: 2 },
  { _id: 'e3', name: 'WooCommerce', category: 'E-commerce', featured: false, order: 3 },
  // CMS
  { _id: 'cms1', name: 'Payload CMS', category: 'CMS', featured: true, order: 1 },
  { _id: 'cms2', name: 'Sanity.io', category: 'CMS', featured: true, order: 2 },
  { _id: 'cms3', name: 'Strapi', category: 'CMS', featured: false, order: 3 },
]

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Monitor,
  Backend: Server,
  Mobile: Smartphone,
  Cloud: Cloud,
  'AI/ML': BrainCircuit,
  Database: Database,
  DevOps: GitMerge,
  'E-commerce': ShoppingBag,
  CMS: FileText,
}

export function TechnologyStack({ heading, description, technologies }: TechnologyStackProps) {
  const displayTechs = [...(technologies || [])]

  defaultTechnologies.forEach((dt) => {
    if (!displayTechs.some((t) => t.name.toLowerCase() === dt.name.toLowerCase())) {
      displayTechs.push(dt)
    }
  })

  const displayHeading = heading || 'Modern Enterprise Technology Ecosystem'
  const displayDescription =
    description ||
    'We build with production-proven frameworks, cloud platforms, and modern AI models engineered for scalability, high security, and low operational overhead.'

  const availableCategories = categories.filter((c) => displayTechs.some((t) => t.category === c))
  const [activeCategory, setActiveCategory] = useState<string>(availableCategories[0] || 'Frontend')

  useEffect(() => {
    if (availableCategories.length > 0 && !availableCategories.includes(activeCategory)) {
      setActiveCategory(availableCategories[0])
    }
  }, [displayTechs, activeCategory, availableCategories])

  const filtered = displayTechs.filter((t) => t.category === activeCategory)

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-200" aria-label="Technology ecosystem">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#037C9E] mb-3 font-sans">
            Technology Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] font-display leading-[1.12] mb-4">
            {displayHeading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            {displayDescription}
          </p>
        </div>

        {/* Tab Controls */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Technology categories"
        >
          {availableCategories.map((cat) => {
            const TabIcon = categoryIcons[cat] || Zap
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tech-panel-${cat}`}
                id={`tech-tab-${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#05A7D4] text-white shadow-sm shadow-[#05A7D4]/30'
                    : 'bg-[#F7F9FA] text-gray-700 hover:bg-gray-200/80 border border-gray-200'
                }`}
              >
                <TabIcon
                  className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}
                  aria-hidden="true"
                />
                {cat}
              </button>
            )
          })}
        </div>

        {/* Tech Grid */}
        <div
          id={`tech-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tech-tab-${activeCategory}`}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filtered.map((tech) => (
            <div
              key={tech._id}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#F7F9FA] border border-gray-200/80 hover:border-[#05A7D4]/40 hover:bg-white hover:shadow-md transition-all duration-200 text-center group"
            >
              <span className="text-sm font-bold text-[#111827] group-hover:text-[#004771] transition-colors font-sans">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-wider">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
