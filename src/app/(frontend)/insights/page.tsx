'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const defaultPosts = [
  { _id: '1', title: 'How AI is Reshaping Enterprise Software Development in 2025', slug: { current: 'ai-reshaping-enterprise-software-2025' }, excerpt: 'AI is no longer a futuristic concept — it\'s actively changing how enterprise software is built, deployed, and maintained. Here\'s what senior engineers need to know.', publishedAt: '2025-07-15T00:00:00Z', readingTime: 8, featured: true, category: { _id: 'c1', title: 'AI & Technology', slug: { current: 'ai-technology' } }, author: { name: 'Ravi Prasad Kavuru', designation: 'CTO' } },
  { _id: '2', title: 'Microservices vs Monolith: A Practical Guide for 2025', slug: { current: 'microservices-vs-monolith' }, excerpt: 'The monolith vs microservices debate is nuanced. The right answer depends on your team size, traffic patterns, and growth trajectory.', publishedAt: '2025-07-01T00:00:00Z', readingTime: 6, featured: true, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
  { _id: '3', title: 'Digital Transformation Failures: 5 Preventable Mistakes', slug: { current: 'digital-transformation-failures' }, excerpt: 'Most digital transformation initiatives fail — not because of bad technology, but because of preventable strategic and organizational mistakes.', publishedAt: '2025-06-20T00:00:00Z', readingTime: 7, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Arun Mehta', designation: 'Transformation Lead' } },
  { _id: '4', title: 'Building HIPAA-Compliant Healthcare Platforms on AWS', slug: { current: 'hipaa-compliant-aws' }, excerpt: 'A step-by-step guide to architecting cloud infrastructure that meets healthcare data compliance requirements without sacrificing performance.', publishedAt: '2025-06-05T00:00:00Z', readingTime: 10, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Ravi Prasad Kavuru', designation: 'CTO' } },
  { _id: '5', title: 'React Native vs Flutter: Which to Choose in 2025?', slug: { current: 'react-native-vs-flutter-2025' }, excerpt: 'Both frameworks have matured significantly. Here\'s an honest comparison based on our experience building 50+ production apps with both.', publishedAt: '2025-05-20T00:00:00Z', readingTime: 9, featured: false, category: { _id: 'c2', title: 'Engineering', slug: { current: 'engineering' } }, author: { name: 'Kiran Patel', designation: 'Mobile Lead' } },
  { _id: '6', title: 'The Real Cost of Technical Debt in 2025', slug: { current: 'cost-of-technical-debt' }, excerpt: 'Technical debt isn\'t just a development problem — it\'s a business risk. Here\'s how to quantify it and build the case for addressing it.', publishedAt: '2025-05-05T00:00:00Z', readingTime: 6, featured: false, category: { _id: 'c3', title: 'Strategy', slug: { current: 'strategy' } }, author: { name: 'Priya Sharma', designation: 'Principal Engineer' } },
]

const cardAccents = [
  { from: '#E3164F', to: '#FF6B9D' },
  { from: '#9F2A9B', to: '#C059BC' },
  { from: '#5C3EE7', to: '#8B74F2' },
  { from: '#1877F2', to: '#4B96F5' },
  { from: '#05A7D4', to: '#38BDF8' },
]

export default function InsightsPage() {
  const displayPosts = defaultPosts
  const featuredPost = displayPosts[0]
  const remainingPosts = displayPosts.slice(1)

  const eyebrow = 'Enterprise Insights'
  const headline = 'Engineering Intelligence & Technology Strategy'
  const subheadline = 'Practical architectural analyses, engineering deep-dives, and digital transformation playbooks from our senior practice leads.'

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#0B1220] border-b border-slate-800">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#ED396D]" />
              <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#ED396D]">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              {headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Editorial Content */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container className="relative z-10">

          {/* Featured Lead Story */}
          {featuredPost && (
            <div className="mb-14">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#05A7D4] block mb-4">
                Featured Editorial Deep-Dive
              </span>
              <Link
                href={`/insights/${featuredPost.slug.current}`}
                className="group block bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                    <div>
                      {featuredPost.category && (
                        <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#ED396D]/10 text-[#ED396D] mb-4">
                          {featuredPost.category.title}
                        </span>
                      )}
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] group-hover:text-[#05A7D4] transition-colors leading-snug tracking-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-base text-slate-600 leading-relaxed mt-4 font-normal">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{featuredPost.author?.name}</p>
                          <p className="text-[10px] text-slate-400">{featuredPost.author?.designation || 'Technology Leader'}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-[#05A7D4]" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0B1220] p-8 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100 text-white space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#05A7D4]">Executive Briefing</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      &ldquo;Modern AI integration requires treating vector pipelines, telemetry, and security governance as primary architectural pillars from day one.&rdquo;
                    </p>
                    <div className="pt-3 border-t border-white/10 flex items-center text-xs font-bold text-[#05A7D4] group-hover:text-white transition-colors">
                      Read Full Analysis &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Section Header */}
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">All Perspectives</span>
            <h2 className="text-2xl font-extrabold text-[#0B1220] tracking-tight mt-1">
              Engineering & Architecture Library
            </h2>
          </div>

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post: any) => (
              <article key={post._id} className="group flex flex-col h-full">
                <Link
                  href={`/insights/${post.slug.current}`}
                  className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#05A7D4]/40 transition-all duration-200 p-6 sm:p-7 justify-between"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="space-y-3">
                    {post.category && (
                      <span className="inline-block px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase bg-slate-100 text-slate-700">
                        {post.category.title}
                      </span>
                    )}

                    <h3 className="text-base font-bold text-[#0B1220] leading-snug group-hover:text-[#05A7D4] transition-colors tracking-tight">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                        <User className="w-3 h-3" />
                      </div>
                      <span className="font-semibold text-slate-700">{post.author?.name}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-slate-400">
                      <Clock className="w-3 h-3 text-[#05A7D4]" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </Container>
      </section>
    </main>
  )
}
