'use client'

import React from 'react'
import Image from 'next/image'
import { ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import type { Client } from '@/types'

interface ClientLogosProps {
  heading?: string
  clients?: Client[]
}

// Crisp monochrome enterprise SVG marks
function MasterCardLogo() {
  return (
    <svg className="h-6 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 131.39 102" aria-label="MasterCard">
      <path d="M48.24 10.42a50.93 50.93 0 0 0 0 81.16 51 51 0 1 1 0-81.16z" />
      <path d="M83.15 10.42a51 51 0 1 1 0 81.16 50.93 50.93 0 0 0 0-81.16z" />
      <path d="M65.7 20.3a50.77 50.77 0 0 0-17.46 30.7 50.77 50.77 0 0 0 17.46 30.7 50.77 50.77 0 0 0 17.46-30.7A50.77 50.77 0 0 0 65.7 20.3z" />
    </svg>
  )
}

function VisaLogo() {
  return (
    <svg className="h-5 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 100 32" aria-label="VISA">
      <path d="M38.8 2.2L25.3 30.1h-7.3L9.6 7.6C8.8 4.6 8 3.6 5.8 2.3 2.8.7.6.2 0 .1L.2 2.2c5.6 1.2 10.7 3.3 14.3 7 3.6 3.6 4.7 6.4 5.9 11.2l8.8 21.6h7.7l13.3-31.9h-7.3zm31 19.3c.1-4.7-3.9-7.2-7.5-8.9-3.7-1.8-4.9-3-4.9-4.6 0-1.6 1.8-3.2 5.7-3.2 3.3 0 5.8.7 7.7 1.5l1-4.8c-1.4-.6-3.8-1.2-6.9-1.2-7.3 0-12.4 3.9-12.5 9.4-.1 4.1 3.7 6.4 6.5 7.8 2.9 1.4 3.9 2.3 3.9 3.5 0 1.9-2.3 2.7-4.4 2.7-3.7 0-6.6-.9-8.5-1.9l-1 5c1.7.8 4.8 1.5 8 1.5 7.7 0 12.6-3.8 12.6-9.7zm19.5-19.3h-5.9c-1.8 0-3.2.5-4 2.4l-11.4 27.2h7.7l1.5-4.2h9.4l.9 4.2h6.8l-5-29.6zm-8.2 20.3l3.8-10.4 2.2 10.4h-6zm-41.2-20.3l-6 29.6h-7.3l6-29.6h7.3z" />
    </svg>
  )
}

function SalesforceLogo() {
  return (
    <svg className="h-7 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 100 70" aria-label="Salesforce">
      <path d="M41.7 13.5c4.7-5 11.3-8.1 18.6-8.1 11.3 0 21 7.4 24.3 17.8 4.2 1.3 7.8 4.1 10.2 7.8 3.5 5.5 4.3 12.3 2.1 18.5-2.2 6.2-7.2 10.9-13.6 12.6-2.1.6-4.3.8-6.5.8H21.5c-4.9 0-9.6-1.7-13.3-4.8C3.5 54.3.9 49.3.2 43.9c-.7-5.4.6-10.8 3.7-15.2 3.1-4.4 7.7-7.4 13-8.4 2.1-7.7 8.3-13.8 16-16.7 2.8-1 5.8-1.5 8.8-1.5v11.4z" />
    </svg>
  )
}

function MicrosoftLogo() {
  return (
    <svg className="h-5 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" aria-label="Microsoft">
      <path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1zM13 13h10v10H13z" />
    </svg>
  )
}

function AwsLogo() {
  return (
    <svg className="h-6 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 100 60" aria-label="AWS">
      <path d="M28.4 24.8c0-3.8-1.2-6.5-3.6-8.1-2.4-1.6-5.8-2.4-10.2-2.4-4.8 0-8.8 1-12 3l2.8 5.6c2.8-1.6 5.8-2.4 9-2.4 4.8 0 7.2 2.2 7.2 6.6v2.2c-11.4.6-17.2 4.4-17.2 11.4 0 3.6 1.4 6.4 4.2 8.4 2.8 2 6.4 3 10.8 3 4.2 0 7.6-1.4 10.2-4.2l1 3.6h5.8l-1.2-16.1v-15zm-6.8 15.6c-1.4 2.2-3.8 3.4-7.2 3.4-2.4 0-4.2-.6-5.4-1.8-1.2-1.2-1.8-2.8-1.8-4.8 0-4.2 3.6-6.6 10.8-7.2v4.8c.2 2.4 1.4 4.2 3.6 5.6zm78-1.6c-1.2-2-3-3.6-5.4-4.8-2.4-1.2-5.4-1.8-9-1.8-5.6 0-10.2 1.4-13.8 4.2l3 5.4c2.8-2 6-3 9.6-3 4.6 0 7 1.8 7 5.4v1.8c-10.4.6-15.6 4-15.6 10.2 0 3.2 1.2 5.8 3.6 7.6 2.4 1.8 5.8 2.8 10 2.8 4 0 7.2-1.2 9.6-3.6l.8 3h5.4l-1-14v-13.2zm-6.4 13.8c-1.2 2-3.4 3-6.6 3-2 0-3.6-.6-4.6-1.6-1-1-1.6-2.4-1.6-4.2 0-3.8 3.2-6 9.6-6.4v4.4c.2 2 1.2 3.6 3.2 4.8zM42.2 46.2l-9.8-31.4h7.6l6.2 22.4 6-22.4h7.6l6 22.4 6.2-22.4h7.6L59.6 46.2h-8.2l-5.6-20.2-5.6 20.2h-8z" />
    </svg>
  )
}

function OracleLogo() {
  return (
    <svg className="h-4 w-auto fill-current opacity-75 hover:opacity-100 transition-opacity" viewBox="0 0 100 20" aria-label="Oracle">
      <path d="M12.5 0C5.6 0 0 4.5 0 10s5.6 10 12.5 10h12.5C31.9 20 37.5 15.5 37.5 10S31.9 0 25 0H12.5zm0 15.6c-4.1 0-7.5-2.5-7.5-5.6s3.4-5.6 7.5-5.6h12.5c4.1 0 7.5 2.5 7.5 5.6s-3.4 5.6-7.5 5.6H12.5zm35 4.4h5.2V0h-5.2v20zm15.6 0h5.2V12h9.2l5.4 8h6.2l-6.2-8.8c3.6-1.2 5.8-4.2 5.8-7.8 0-4.8-4-5.4-8.8-5.4h-16.8v20zm5.2-12.4V4.4h11.2c2.8 0 4.6.4 4.6 2.8 0 2.2-1.8 2.6-4.6 2.6h-11.2z" />
    </svg>
  )
}

const enterpriseLogos = [
  { name: 'MasterCard', component: MasterCardLogo, industry: 'Global Payments' },
  { name: 'VISA', component: VisaLogo, industry: 'Financial Services' },
  { name: 'Amazon AWS', component: AwsLogo, industry: 'Cloud & Infrastructure' },
  { name: 'Microsoft', component: MicrosoftLogo, industry: 'Enterprise Ecosystem' },
  { name: 'Salesforce', component: SalesforceLogo, industry: 'CRM & Cloud' },
  { name: 'Oracle', component: OracleLogo, industry: 'Enterprise Data Systems' },
]

export function ClientLogos({ heading, clients }: ClientLogosProps) {
  const displayHeading = heading || 'Trusted by Engineering & Operations Leaders'
  const tripledLogos = [...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos]

  return (
    <section
      className="relative overflow-hidden bg-[#F7F9FA] border-y border-gray-200/90 py-12"
      aria-label="Client logos and trust metrics"
    >
      <Container>
        {/* Section Header Eyebrow */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#037C9E] mb-2 font-sans">
            Enterprise Track Record
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight font-display">
            {displayHeading}
          </h2>
        </div>

        {/* Infinite-Scroll Monochrome Logo Marquee */}
        <div className="relative overflow-hidden py-2" role="region" aria-label="Enterprise partners">
          {/* Edge fade gradients */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#F7F9FA] to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#F7F9FA] to-transparent"
            aria-hidden="true"
          />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center gap-10 sm:gap-14 py-3 text-[#1F2937]">
              {tripledLogos.map((client, i) => {
                const LogoComponent = client.component
                return (
                  <div
                    key={`${client.name}-${i}`}
                    className="flex items-center gap-3 shrink-0 px-6 py-3.5 rounded-xl border border-gray-200/80 bg-white shadow-xs hover:border-[#05A7D4]/40 hover:shadow-sm transition-all duration-200"
                    title={client.name}
                  >
                    <div className="text-[#1F2937] hover:text-[#004771] transition-colors">
                      <LogoComponent />
                    </div>
                    <div className="hidden sm:block border-l border-gray-200 pl-3">
                      <p className="text-xs font-bold text-[#111827] whitespace-nowrap leading-none mb-0.5 font-sans">
                        {client.name}
                      </p>
                      <p className="text-[10px] text-[#6B7280] whitespace-nowrap font-medium font-sans">
                        {client.industry}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* 4 Trust Stats Required by Master Prompt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200/80">
          {[
            { icon: CheckCircle2, label: '100+ Projects Delivered', detail: 'On-time milestone velocity' },
            { icon: ShieldCheck, label: 'ISO-Grade Security', detail: 'Zero-trust architecture' },
            { icon: Zap, label: 'Agile & Transparent', detail: 'Direct senior engineering' },
            { icon: Clock, label: 'On-Time Delivery', detail: 'SLA-backed commitments' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-gray-200/60 text-left"
              >
                <div className="w-8 h-8 rounded-md bg-[#05A7D4]/10 flex items-center justify-center shrink-0 text-[#05A7D4]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827] leading-snug font-sans">{item.label}</p>
                  <p className="text-[11px] text-[#6B7280] font-sans">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}
