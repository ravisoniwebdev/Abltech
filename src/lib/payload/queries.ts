/**
 * Payload CMS Query Layer
 * Replaces: src/sanity/lib/queries.ts
 *
 * Uses Payload Local API (server-side only) for all data access.
 * All functions maintain the same signature as the old Sanity queries
 * so frontend components need minimal changes.
 */

import { getPayload } from 'payload'
import config from '../../../payload.config'

// Helper to initialise Payload (cached by Next.js module system)
async function getPayloadClient() {
  return getPayload({ config })
}

// =============================================
// SITE SETTINGS
// =============================================
export async function getSiteSettings() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'site-settings' })
  } catch {
    return null
  }
}

// =============================================
// NAVIGATION
// =============================================
export async function getNavigation() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'navigation' })
  } catch {
    return null
  }
}

// =============================================
// FOOTER
// =============================================
export async function getFooter() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'footer' })
  } catch {
    return null
  }
}

// =============================================
// PAGE SETTINGS
// =============================================
export async function getHomePage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'home-page' })
  } catch {
    return null
  }
}

export async function getAboutPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'about-page' })
  } catch {
    return null
  }
}

export async function getContactPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'contact-page' })
  } catch {
    return null
  }
}

export async function getServicesPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'services-page' })
  } catch {
    return null
  }
}

export async function getIndustriesPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'industries-page' })
  } catch {
    return null
  }
}

export async function getWorkPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'work-page' })
  } catch {
    return null
  }
}

export async function getInsightsPage() {
  try {
    const payload = await getPayloadClient()
    return payload.findGlobal({ slug: 'insights-page' })
  } catch {
    return null
  }
}

// =============================================
// SERVICES
// =============================================
export async function getServices() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      sort: 'order',
      limit: 100,
    })
    return result.docs.map(normalizeService)
  } catch {
    return []
  }
}

export async function getFeaturedServices() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 20,
    })
    return result.docs.map(normalizeService)
  } catch {
    return []
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    })
    if (!result.docs[0]) return null
    return normalizeServiceFull(result.docs[0])
  } catch {
    return null
  }
}

// =============================================
// INDUSTRIES
// =============================================
export async function getIndustries() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'industries',
      sort: 'order',
      limit: 100,
    })
    return result.docs.map(normalizeIndustry)
  } catch {
    return []
  }
}

export async function getFeaturedIndustries() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'industries',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 20,
    })
    return result.docs.map(normalizeIndustry)
  } catch {
    return []
  }
}

export async function getIndustryBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'industries',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    })
    if (!result.docs[0]) return null
    return normalizeIndustryFull(result.docs[0])
  } catch {
    return null
  }
}

// =============================================
// CASE STUDIES
// =============================================
export async function getCaseStudies() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      sort: '-publishedAt',
      limit: 100,
      depth: 1,
    })
    return result.docs.map(normalizeCaseStudy)
  } catch {
    return []
  }
}

export async function getFeaturedCaseStudies() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      where: { featured: { equals: true } },
      sort: '-publishedAt',
      limit: 6,
      depth: 1,
    })
    return result.docs.map(normalizeCaseStudy)
  } catch {
    return []
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    })
    if (!result.docs[0]) return null
    return normalizeCaseStudyFull(result.docs[0])
  } catch {
    return null
  }
}

// =============================================
// BLOG / INSIGHTS
// =============================================
export async function getPosts(limit = 10) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit,
      depth: 1,
    })
    return result.docs.map(normalizePost)
  } catch {
    return []
  }
}

export async function getFeaturedPosts() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { featured: { equals: true } },
      sort: '-publishedAt',
      limit: 3,
      depth: 1,
    })
    return result.docs.map(normalizePost)
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
    })
    if (!result.docs[0]) return null
    return normalizePostFull(result.docs[0])
  } catch {
    return null
  }
}

export async function getPostsByCategory(categorySlug: string) {
  try {
    const payload = await getPayloadClient()
    // First find the category
    const cats = await payload.find({
      collection: 'categories',
      where: { slug: { equals: categorySlug } },
      limit: 1,
    })
    if (!cats.docs[0]) return []
    const categoryId = cats.docs[0].id
    const result = await payload.find({
      collection: 'posts',
      where: { category: { equals: categoryId } },
      sort: '-publishedAt',
      depth: 1,
    })
    return result.docs.map(normalizePost)
  } catch {
    return []
  }
}

export async function getCategories() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'categories',
      sort: 'title',
      limit: 100,
    })
    return result.docs.map((cat: any) => ({
      _id: String(cat.id),
      title: cat.title,
      slug: { current: cat.slug },
      description: cat.description,
      color: cat.color,
    }))
  } catch {
    return []
  }
}

// =============================================
// CLIENTS
// =============================================
export async function getClients() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'clients',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs.map(normalizeClient)
  } catch {
    return []
  }
}

export async function getFeaturedClients() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'clients',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 50,
      depth: 1,
    })
    return result.docs.map(normalizeClient)
  } catch {
    return []
  }
}

// =============================================
// TESTIMONIALS
// =============================================
export async function getTestimonials() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs.map(normalizeTestimonial)
  } catch {
    return []
  }
}

export async function getFeaturedTestimonials() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 20,
      depth: 1,
    })
    return result.docs.map(normalizeTestimonial)
  } catch {
    return []
  }
}

// =============================================
// TEAM MEMBERS
// =============================================
export async function getTeamMembers() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'team-members',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs.map(normalizeTeamMember)
  } catch {
    return []
  }
}

export async function getFeaturedTeamMembers() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'team-members',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 20,
      depth: 1,
    })
    return result.docs.map(normalizeTeamMember)
  } catch {
    return []
  }
}

// =============================================
// TECHNOLOGIES
// =============================================
export async function getTechnologies() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'technologies',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs.map(normalizeTechnology)
  } catch {
    return []
  }
}

// =============================================
// STATISTICS
// =============================================
export async function getStatistics() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'statistics',
      sort: 'order',
      limit: 50,
    })
    return result.docs.map((s: any) => ({
      _id: String(s.id),
      value: s.value,
      label: s.label,
      description: s.description,
      icon: s.icon,
      order: s.order,
    }))
  } catch {
    return []
  }
}

// =============================================
// PROCESS STEPS
// =============================================
export async function getProcessSteps() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'process-steps',
      sort: 'step',
      limit: 50,
    })
    return result.docs.map((p: any) => ({
      _id: String(p.id),
      step: p.step,
      title: p.title,
      description: p.description,
      icon: p.icon,
      duration: p.duration,
      deliverables: (p.deliverables || []).map((d: any) => d.deliverable),
    }))
  } catch {
    return []
  }
}

// =============================================
// COMPANY VALUES
// =============================================
export async function getCompanyValues() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'company-values',
      sort: 'order',
      limit: 50,
    })
    return result.docs.map((v: any) => ({
      _id: String(v.id),
      title: v.title,
      description: v.description,
      icon: v.icon,
      order: v.order,
    }))
  } catch {
    return []
  }
}

// =============================================
// OFFICE LOCATIONS
// =============================================
export async function getOfficeLocations() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'office-locations',
      sort: 'order',
      limit: 20,
    })
    return result.docs.map((o: any) => ({
      _id: String(o.id),
      city: o.city,
      country: o.country,
      address: o.address,
      phone: o.phone,
      email: o.email,
      mapUrl: o.mapUrl,
      isHeadquarters: o.isHeadquarters,
      order: o.order,
    }))
  } catch {
    return []
  }
}

// =============================================
// SLUGS FOR STATIC GENERATION
// =============================================
export async function getAllServiceSlugs() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: 'services', limit: 500, select: { slug: true } as any })
    return result.docs.map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function getAllIndustrySlugs() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: 'industries', limit: 500, select: { slug: true } as any })
    return result.docs.map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function getAllCaseStudySlugs() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: 'case-studies', limit: 500, select: { slug: true } as any })
    return result.docs.map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function getAllPostSlugs() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: 'posts', limit: 500, select: { slug: true } as any })
    return result.docs.map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function getAllCategorySlugs() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({ collection: 'categories', limit: 500, select: { slug: true } as any })
    return result.docs.map((s: any) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

// =============================================
// CONTACT SUBMISSION (write)
// =============================================
export async function createContactSubmission(data: Record<string, unknown>) {
  const payload = await getPayloadClient()
  return payload.create({ collection: 'contact-submissions', data })
}

// =============================================
// NORMALIZERS — adapt Payload shape → existing frontend types
// These preserve the { slug: { current: string } } shape that
// the frontend components already use.
// =============================================

function normalizeMedia(media: any) {
  if (!media) return undefined
  if (typeof media === 'string' || typeof media === 'number') return undefined
  return {
    asset: {
      url: media.url || '',
      metadata: {
        dimensions: media.width && media.height
          ? { width: media.width, height: media.height, aspectRatio: media.width / media.height }
          : undefined,
      },
    },
    alt: media.alt || '',
    caption: media.caption || '',
  }
}

function normalizeService(s: any) {
  return {
    _id: String(s.id),
    title: s.title,
    slug: { current: s.slug },
    shortDescription: s.shortDescription,
    icon: s.icon,
    featured: s.featured || false,
    order: s.order,
  }
}

function normalizeServiceFull(s: any) {
  return {
    ...normalizeService(s),
    heroTitle: s.heroTitle,
    heroDescription: s.heroDescription,
    heroImage: normalizeMedia(s.heroImage),
    features: s.features || [],
    benefits: (s.benefits || []).map((b: any) => b.benefit || b),
    technologies: (s.technologies || []).map(normalizeTechnology),
    process: s.process || [],
    faqs: s.faqs || [],
    caseStudies: (s.caseStudies || []).map(normalizeCaseStudy),
    seo: normalizeSeo(s.seo),
  }
}

function normalizeIndustry(i: any) {
  return {
    _id: String(i.id),
    name: i.name,
    slug: { current: i.slug },
    description: i.description,
    icon: i.icon,
    heroImage: normalizeMedia(i.heroImage),
    featured: i.featured || false,
    order: i.order,
  }
}

function normalizeIndustryFull(i: any) {
  return {
    ...normalizeIndustry(i),
    challenges: i.challenges || [],
    solutions: i.solutions || [],
    services: (i.services || []).map(normalizeService),
    technologies: (i.technologies || []).map(normalizeTechnology),
    caseStudies: (i.caseStudies || []).map(normalizeCaseStudy),
    faqs: i.faqs || [],
    seo: normalizeSeo(i.seo),
  }
}

function normalizeCaseStudy(cs: any) {
  const industry = cs.industry && typeof cs.industry === 'object'
    ? { name: cs.industry.name, slug: { current: cs.industry.slug } }
    : undefined
  const service = cs.service && typeof cs.service === 'object'
    ? { title: cs.service.title, slug: { current: cs.service.slug } }
    : undefined
  return {
    _id: String(cs.id),
    title: cs.title,
    slug: { current: cs.slug },
    client: cs.client,
    shortDescription: cs.shortDescription,
    heroImage: normalizeMedia(cs.heroImage),
    featured: cs.featured || false,
    publishedAt: cs.publishedAt,
    industry,
    service,
    metrics: cs.metrics || [],
  }
}

function normalizeCaseStudyFull(cs: any) {
  return {
    ...normalizeCaseStudy(cs),
    gallery: (cs.gallery || []).map((g: any) => normalizeMedia(g.image || g)).filter(Boolean),
    challenge: cs.challenge,
    solution: cs.solution,
    approach: cs.approach,
    technologyStack: (cs.technologyStack || []).map(normalizeTechnology),
    testimonial: cs.testimonial ? normalizeTestimonial(cs.testimonial) : undefined,
    seo: normalizeSeo(cs.seo),
  }
}

function normalizePost(p: any) {
  const author = p.author && typeof p.author === 'object'
    ? { name: p.author.name, designation: p.author.designation, photo: normalizeMedia(p.author.photo) }
    : undefined
  const category = p.category && typeof p.category === 'object'
    ? { _id: String(p.category.id), title: p.category.title, slug: { current: p.category.slug } }
    : undefined
  return {
    _id: String(p.id),
    title: p.title,
    slug: { current: p.slug },
    excerpt: p.excerpt,
    featuredImage: normalizeMedia(p.featuredImage),
    author,
    category,
    tags: (p.tags || []).map((t: any) => t.tag || t),
    publishedAt: p.publishedAt,
    readingTime: p.readingTime,
    featured: p.featured || false,
  }
}

function normalizePostFull(p: any) {
  return {
    ...normalizePost(p),
    content: p.content,
    seo: normalizeSeo(p.seo),
  }
}

function normalizeClient(c: any) {
  return {
    _id: String(c.id),
    name: c.name,
    logo: normalizeMedia(c.logo),
    website: c.website,
    industry: c.industry,
    featured: c.featured || false,
    order: c.order,
  }
}

function normalizeTestimonial(t: any) {
  return {
    _id: String(t.id),
    clientName: t.clientName,
    designation: t.designation,
    company: t.company,
    photo: normalizeMedia(t.photo),
    testimonial: t.testimonial,
    rating: t.rating,
    featured: t.featured || false,
    order: t.order,
  }
}

function normalizeTeamMember(m: any) {
  return {
    _id: String(m.id),
    name: m.name,
    designation: m.designation,
    department: m.department,
    photo: normalizeMedia(m.photo),
    bio: m.bio,
    linkedin: m.linkedin,
    twitter: m.twitter,
    featured: m.featured || false,
    order: m.order,
  }
}

function normalizeTechnology(t: any) {
  if (!t || typeof t !== 'object') return undefined
  return {
    _id: String(t.id),
    name: t.name,
    category: t.category,
    logo: normalizeMedia(t.logo),
    description: t.description,
    website: t.website,
    featured: t.featured || false,
    order: t.order,
  }
}

function normalizeSeo(seo: any) {
  if (!seo) return undefined
  return {
    metaTitle: seo.metaTitle,
    metaDescription: seo.metaDescription,
    ogImage: normalizeMedia(seo.ogImage),
    keywords: (seo.keywords || []).map((k: any) => k.keyword || k),
    robots: seo.robots,
  }
}
