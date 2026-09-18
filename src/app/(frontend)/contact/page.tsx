import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react'
import { LinkedInIcon, InstagramIcon } from '@/components/ui/Icons'
import { Container } from '@/components/ui/Container'
import { getContactPage, getSiteSettings } from '@/lib/payload/queries'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABL BusinessTech LLP. Tell us about your project and we\'ll respond within 1 business day.',
}

const defaultContactInfo = [
  { icon: Mail, label: 'Email Us', value: 'info@ablbusinesstech.com', href: 'mailto:info@ablbusinesstech.com' },
  { icon: Phone, label: 'Call Us', value: '+91 7416 743 434', href: 'tel:+917416743434' },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra, India', href: undefined },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined },
]

const defaultWhyContact = [
  { title: 'Free Initial Consultation', description: 'A no-obligation 45-minute call to understand your project and recommend the best approach.' },
  { title: 'Response in 24 Hours', description: 'Our team responds to every inquiry within one business day — no automated bounces.' },
  { title: 'Senior-Level Engagement', description: "You'll talk to architects and consultants from the first call — not just sales." },
  { title: 'NDA Available', description: 'We sign NDAs before any detailed technical discussions, always.' },
]

export default async function ContactPage() {
  let pageData = null, siteSettings = null
  try {
    ;[pageData, siteSettings] = await Promise.all([
      getContactPage(), getSiteSettings()
    ])
  } catch { }

  const eyebrow = pageData?.eyebrow || 'Contact Us'
  const headline = pageData?.headline || "Let's Build Something Great Together"
  const subheadline = pageData?.subheadline || 'Tell us about your project. Our team will review your message and respond within one business day.'
  const formHeading = pageData?.formHeading || 'Send Us a Message'
  const infoHeading = pageData?.infoHeading || 'Contact Information'
  const expectHeading = pageData?.expectHeading || 'What to Expect'
  const expectations = pageData?.expectations?.length ? pageData.expectations : defaultWhyContact

  const emailVal = siteSettings?.contactEmail || 'info@ablbusinesstech.com'
  const phoneVal = siteSettings?.phone || '+91 9876 543 210'
  const addressVal = siteSettings?.address || 'Mumbai, Maharashtra, India'

  const dynamicInfo = [
    { icon: Mail, label: 'Email Us', value: emailVal, href: `mailto:${emailVal}`, color: '#E3164F' },
    { icon: Phone, label: 'Call Us', value: phoneVal, href: `tel:${phoneVal.replace(/\s+/g, '')}`, color: '#05A7D4' },
    { icon: MapPin, label: 'Visit Us', value: addressVal, href: undefined, color: '#5C3EE7' },
    { icon: Clock, label: 'Working Hours', value: 'Mon – Fri, 9 AM – 7 PM IST', href: undefined, color: '#9F2A9B' },
  ]

  const consultTitle = pageData?.consultationCard?.title || 'Need something faster?'
  const consultDesc = pageData?.consultationCard?.description || 'For urgent inquiries, call us directly or book a consultation.'
  const consultLabel = pageData?.consultationCard?.buttonLabel || 'Book a Free Consultation →'
  const consultHref = pageData?.consultationCard?.buttonHref || '/contact'

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

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-extrabold text-[#0B1220] mb-6 tracking-tight">{formHeading}</h2>
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm">
                <h2 className="text-base font-bold text-[#0B1220] mb-5 tracking-tight">{infoHeading}</h2>
                <ul className="space-y-4">
                  {dynamicInfo.map(({ icon: Icon, label, value, href, color }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${color}12` }}
                      >
                        <Icon className="w-4 h-4" style={{ color }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-semibold text-[#0B1220] hover:text-[#ED396D] transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm font-semibold text-[#0B1220]">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social media connections */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Connect:</span>
                  <a
                    href={siteSettings?.socialLinks?.linkedin || 'https://linkedin.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#ED396D] hover:bg-[#ED396D]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-slate-600 hover:text-[#ED396D]" />
                  </a>
                  <a
                    href={siteSettings?.socialLinks?.instagram || 'https://instagram.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#ED396D] hover:bg-[#ED396D]/5 flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-slate-600 hover:text-[#ED396D]" />
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm">
                <h2 className="text-base font-bold text-[#0B1220] mb-5 tracking-tight">{expectHeading}</h2>
                <ul className="space-y-4">
                  {expectations.map((item: { title: string; description: string }) => (
                    <li key={item.title} className="flex gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B1220] mb-0.5 leading-snug">{item.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <p className="text-sm font-bold text-[#0B1220] mb-1">{consultTitle}</p>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed font-normal">{consultDesc}</p>
                <a
                  href={consultHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#05A7D4] hover:text-[#037C9E] transition-colors group/link"
                >
                  {consultLabel} <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
