'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { LinkedInIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import type { FooterColumn, FooterLink } from '@/types'

interface FooterProps {
  footer?: {
    columns: FooterColumn[]
    tagline?: string
    copyright?: string
    bottomLinks?: FooterLink[]
  }
}

const defaultColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/work' },
      { label: 'Careers', href: '/about#careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'AI & Data Engineering', href: '/services/ai-data-engineering' },
      { label: 'Software Engineering', href: '/services/software-engineering' },
      { label: 'Digital Experiences', href: '/services/digital-experiences-web-mobile' },
      { label: 'Enterprise Applications', href: '/services/enterprise-applications' },
      { label: 'Cloud & DevOps', href: '/services/cloud-and-devops' },
      { label: 'Data & Analytics', href: '/services/data-analytics-solutions' },
      { label: 'QA & Testing', href: '/services/quality-assurance-testing' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Healthcare & Life Sciences', href: '/industries' },
      { label: 'Fintech & Banking', href: '/industries' },
      { label: 'E-Commerce & Retail', href: '/industries' },
      { label: 'Logistics & Supply Chain', href: '/industries' },
      { label: 'EdTech & Learning', href: '/industries' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Technology Stack', href: '/technologies' },
    ],
  },
]

const defaultBottomLinks = [
  { label: 'Privacy Policy', href: 'https://staffordshirewebdesign.com/privacypolicy.pdf', openInNewTab: true },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'X (Twitter)', href: 'https://twitter.com', icon: TwitterIcon },
]

export function Footer({ footer }: FooterProps) {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  const columns = footer?.columns?.length ? footer.columns : defaultColumns
  const bottomLinks = footer?.bottomLinks?.length ? footer.bottomLinks : defaultBottomLinks
  const tagline = footer?.tagline || 'Engineering production-ready AI, software, and cloud solutions for enterprises that cannot afford to fail.'
  const copyright = footer?.copyright || `© ${new Date().getFullYear()} ABL BusinessTech LLP. All rights reserved.`

  return (
    <footer className="bg-[#111827] text-white border-t border-gray-800" role="contentinfo">
      {/* Main footer */}
      <div className="border-b border-gray-800">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-5" aria-label="ABL BusinessTech LLP - Home">
                <Image
                  src="/logo-abltech.png"
                  alt="ABL BusinessTech LLP"
                  width={160}
                  height={100}
                  style={{ width: 'auto', height: '100px' }}
                  className="object-contain"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6 font-sans">
                {tagline}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 mb-6" aria-label="Social media links">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#05A7D4] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>

              {/* Direct Audit CTA Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-gray-800">
                <p className="text-sm font-semibold text-white mb-1 font-display">Ready for a Technical Audit?</p>
                <p className="text-xs text-gray-400 mb-3 font-sans">Get a confidential architecture gap analysis from our principal engineers.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#05A7D4] hover:text-white hover:gap-2 transition-all duration-200"
                >
                  Request Technical Audit <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {columns.map((column) => (
                <div key={column.heading}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-sans">
                    {column.heading}
                  </h3>
                  <ul className="space-y-2.5" role="list">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-[#05A7D4] transition-colors duration-150 relative group font-sans"
                          target={(link as FooterLink & { openInNewTab?: boolean }).openInNewTab ? '_blank' : undefined}
                        >
                          {link.label}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#05A7D4] transition-all duration-300 group-hover:w-full" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <Container className="py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-gray-400 font-mono">ISO/IEC 27001 Security Practice</span>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" role="list">
                {bottomLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={(link as FooterLink & { openInNewTab?: boolean }).openInNewTab || link.href.startsWith('http') ? '_blank' : undefined}
                      rel={(link as FooterLink & { openInNewTab?: boolean }).openInNewTab || link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}
