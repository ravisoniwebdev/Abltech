'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Clock, User, BookOpen } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { Post } from '@/types'

interface InsightsGridProps {
  heading?: string
  description?: string
  posts?: Post[]
}

const defaultPosts = [
  {
    _id: '1',
    title: 'Architecting Enterprise GenAI: From Proof-of-Concept to Production RAG',
    slug: { current: 'architecting-enterprise-genai-production-rag' },
    excerpt:
      'Why 85% of corporate AI pilots fail to deploy, and the zero-trust data ingestion, guardrail evaluation, and vector retrieval strategies required to survive production audit.',
    publishedAt: '2025-08-10T00:00:00Z',
    readingTime: 8,
    category: { title: 'Enterprise AI & Data' },
    author: { name: 'Ravi Prasad Kavuru', designation: 'CTO' },
  },
  {
    _id: '2',
    title: 'Event-Driven Microservices in High-Volume Banking & Payment Rails',
    slug: 'event-driven-microservices-banking-payment-rails',
    excerpt:
      'A deep dive into distributed transaction isolation, idempotency keys, and sub-100ms message settlement across hybrid cloud infrastructure.',
    publishedAt: '2025-07-28T00:00:00Z',
    readingTime: 6,
    category: { title: 'Cloud Engineering' },
    author: { name: 'Priya Sharma', designation: 'Principal Architect' },
  },
  {
    _id: '3',
    title: 'Technical Debt Remediation: The Strategic Blueprint for Enterprise Modernization',
    slug: 'technical-debt-remediation-enterprise-modernization',
    excerpt:
      'How to replace mission-critical monolithic core systems with resilient cloud-native microservices without dropping revenue-generating transactions.',
    publishedAt: '2025-07-15T00:00:00Z',
    readingTime: 7,
    category: { title: 'Digital Transformation' },
    author: { name: 'Arun Mehta', designation: 'VP of Engineering' },
  },
]

export function InsightsGrid({ heading, description, posts }: InsightsGridProps) {
  const shouldReduce = useReducedMotion()

  const realPosts = posts?.filter(
    (p) => Boolean(p?.title) && !/^test/i.test(p.title.trim())
  )
  const displayPosts = realPosts?.length ? realPosts : defaultPosts
  const displayHeading = heading || 'Technical Insights & Engineering Perspectives'
  const displayDescription =
    description ||
    'Deep-dive architectural essays, benchmarks, and tactical playbooks from our senior engineers and enterprise consultants.'

  return (
    <section
      id="insights"
      className="relative py-24 lg:py-32 bg-[#F7F9FA] overflow-hidden border-b border-gray-200"
      aria-label="Technical insights"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#037C9E] mb-3 font-sans">
              Engineering Whitepapers
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
              href="/insights"
              variant="outline"
              size="md"
              className="border-gray-300 text-gray-700 hover:border-[#004771] hover:text-[#004771]"
            >
              All Engineering Insights
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.slice(0, 3).map((post, index) => {
            const postSlug = typeof post.slug === 'string' ? post.slug : (post.slug as { current?: string })?.current || ''
            return (
            <motion.article
              key={post._id}
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex flex-col justify-between p-7 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-[#05A7D4]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono text-gray-500">
                  <span className="px-2.5 py-1 rounded-md bg-[#004771]/5 text-[#004771] font-semibold">
                    {post.category?.title || 'Architecture'}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime || 6} min read</span>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-[#111827] mb-3 font-display leading-snug group-hover:text-[#004771] transition-colors">
                  <Link href={`/insights/${postSlug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author and Read Footnote */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#111827] leading-none font-sans">{post.author?.name || 'ABL Engineering'}</p>
                    <p className="text-[10px] text-gray-400 font-sans mt-0.5">{post.author?.designation || 'Staff Architect'}</p>
                  </div>
                </div>

                <Link
                  href={`/insights/${postSlug}`}
                  className="font-semibold text-[#05A7D4] group-hover:text-[#004771] inline-flex items-center gap-1 transition-colors"
                >
                  Read <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
