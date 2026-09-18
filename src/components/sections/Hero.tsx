'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Code, Cloud, Paintbrush, Users, Shield, Clock, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'

interface HeroProps {
  headline?: string
  subheadline?: string
  buttons?: { label: string; href: string; variant?: string }[]
}

// Split text into words for stagger animation
function splitWords(text: string) {
  return text.split(/\s+/).filter(Boolean)
}

export function Hero({ headline, subheadline, buttons }: HeroProps) {
  const shouldReduce = useReducedMotion()

  const defaultHeadline = 'Build Digital Products | That Move Your Business Forward.'
  const activeHeadline = headline || defaultHeadline

  // Container stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  // Parse headline into standard text and gradient-accented text
  const parseHeadline = () => {
    if (activeHeadline.includes('|')) {
      const [part1, part2] = activeHeadline.split('|')
      return {
        plainWords: splitWords(part1.trim()),
        gradientWords: splitWords(part2.trim()),
      }
    }

    const words = splitWords(activeHeadline)
    if (words.length <= 3) {
      return { plainWords: words, gradientWords: [] }
    }

    // Default split: first ~3 words plain, rest with brand gradient
    const splitIndex = Math.min(3, Math.ceil(words.length / 2))
    return {
      plainWords: words.slice(0, splitIndex),
      gradientWords: words.slice(splitIndex),
    }
  }

  const { plainWords, gradientWords } = parseHeadline()

  // Primary & secondary CTAs
  const primaryBtn = buttons?.[0] || { label: 'Explore Solutions', href: '/services' }
  const secondaryBtn = buttons?.[1] || { label: 'Schedule a Consultation', href: '/contact' }

  return (
    <section
      className="relative min-h-[calc(100vh-4.5rem)] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#F7F8FA] pt-4 pb-0 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
      aria-label="Hero section"
    >
      {/* 1. Luminous Central Light Diffuser — Softens background 3D art directly behind text for 100% crisp legibility while keeping laptop & cards framing the sides */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 72% 62% at 50% 42%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.82) 42%, rgba(247, 248, 250, 0.3) 72%, transparent 100%)',
        }}
      />

      {/* 2. Soft Brand Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-r from-[#ED396D]/8 via-[#8B5CF6]/5 to-[#05A7D4]/10 blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center items-center py-6 sm:py-10 lg:py-12">
        <div className="max-w-3xl text-center flex flex-col items-center">
          
          {/* Eyebrow Pill — Enterprise Badge */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#05A7D4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#05A7D4]" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
              Enterprise AI & Product Engineering Partner
            </span>
          </motion.div>

          {/* Core Services Capability Pills — Glassmorphic Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 max-w-2xl"
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
            variants={shouldReduce ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {[
              { icon: <Code className="w-3.5 h-3.5 text-[#ED396D]" />, label: 'AI & Data Engineering' },
              { icon: <Cloud className="w-3.5 h-3.5 text-[#05A7D4]" />, label: 'Cloud & DevOps' },
              { icon: <Paintbrush className="w-3.5 h-3.5 text-[#8B5CF6]" />, label: 'UI/UX Design' },
              { icon: <Users className="w-3.5 h-3.5 text-[#10B981]" />, label: 'Staff Augmentation' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                variants={shouldReduce ? {} : {
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-gray-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-gray-300 transition-all text-xs font-semibold text-gray-700 cursor-default"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* High-Impact Headline with Brand Gradient Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12] text-[#111827] mb-5 font-display max-w-2xl sm:max-w-3xl">
            {shouldReduce ? (
              <>
                {plainWords.join(' ')}{' '}
                {gradientWords.length > 0 && (
                  <span className="bg-gradient-to-r from-[#ED396D] via-[#8B5CF6] to-[#05A7D4] bg-clip-text text-transparent">
                    {gradientWords.join(' ')}
                  </span>
                )}
              </>
            ) : (
              <motion.span
                className="inline"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                aria-label={activeHeadline.replace('|', '')}
              >
                {plainWords.map((word, i) => (
                  <motion.span
                    key={`plain-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
                {gradientWords.length > 0 && (
                  <>
                    <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-[#ED396D] via-[#8B5CF6] to-[#05A7D4] bg-clip-text text-transparent inline">
                      {gradientWords.map((word, i) => (
                        <motion.span
                          key={`grad-${i}`}
                          variants={wordVariants}
                          className="inline-block mr-[0.25em]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </>
                )}
              </motion.span>
            )}
          </h1>

          {/* Subheadline with Crystal Clear Contrast */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed font-sans text-pretty font-normal"
            initial={shouldReduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {subheadline ||
              'Stop getting stuck in the pilot phase. We engineer production-ready AI agents, automate data pipelines, and deploy custom ML models that solve real operational bottlenecks—securely and at scale.'}
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto justify-center"
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* Primary CTA */}
            <motion.a
              href={primaryBtn.href}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#111827] hover:bg-[#003358] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_24px_rgba(0,51,88,0.3)] transition-all overflow-hidden"
              whileHover={shouldReduce ? {} : { scale: 1.02, y: -1 }}
              whileTap={shouldReduce ? {} : { scale: 0.98 }}
            >
              <span>{primaryBtn.label}</span>
              <div className="w-6 h-6 rounded-full bg-[#05A7D4] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href={secondaryBtn.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-black font-semibold text-sm border border-gray-300/80 hover:border-gray-400 shadow-sm backdrop-blur-md transition-all"
              whileHover={shouldReduce ? {} : { scale: 1.02, y: -1 }}
              whileTap={shouldReduce ? {} : { scale: 0.98 }}
            >
              <span>{secondaryBtn.label}</span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-gray-900" />
            </motion.a>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {!shouldReduce && (
        <motion.div
          className="relative z-10 hidden lg:flex flex-col items-center gap-1 my-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>
      )}

      {/* Bottom Trust & Key Enterprise Metrics Bar */}
      <motion.div
        className="relative z-10 w-full bg-white/90 backdrop-blur-md border-t border-gray-200/70 py-4 lg:py-4.5 shadow-sm mt-auto"
        initial={shouldReduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
      >
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left"
            initial={shouldReduce ? false : 'hidden'}
            animate="visible"
            variants={shouldReduce ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } },
            }}
          >
            {[
              {
                icon: <Clock className="w-4 h-4 text-[#ED396D]" />,
                title: 'Top 1% Engineering Talent',
                subtitle: 'Senior specialized teams',
              },
              {
                icon: <ArrowUpRight className="w-4 h-4 text-[#05A7D4]" />,
                title: '40% Faster Time-to-Market',
                subtitle: 'Rapid agile sprints',
              },
              {
                icon: <Shield className="w-4 h-4 text-[#004771]" />,
                title: 'Enterprise-Grade Security',
                subtitle: 'SOC2 & ISO compliant',
              },
              {
                icon: <Users className="w-4 h-4 text-[#05A7D4]" />,
                title: 'Trusted by Global Leaders',
                subtitle: 'MasterCard, VISA & more',
              },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                className="flex items-center gap-3 justify-center md:justify-start"
                variants={shouldReduce ? {} : {
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 leading-tight">
                    {benefit.title}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-tight mt-0.5 hidden sm:block">
                    {benefit.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}

