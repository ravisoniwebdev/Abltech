import type { CollectionConfig } from 'payload'

const seoFields = [
  { name: 'metaTitle', label: 'Meta Title', type: 'text' as const },
  { name: 'metaDescription', label: 'Meta Description', type: 'textarea' as const },
  { name: 'ogImage', label: 'OG Image', type: 'upload' as const, relationTo: 'media' as const },
  { name: 'keywords', label: 'Keywords', type: 'array' as const, fields: [{ name: 'keyword', type: 'text' as const }] },
  { name: 'robots', label: 'Robots', type: 'select' as const, options: [{ label: 'index, follow', value: 'index,follow' }, { label: 'noindex, follow', value: 'noindex,follow' }, { label: 'index, nofollow', value: 'index,nofollow' }, { label: 'noindex, nofollow', value: 'noindex,nofollow' }], defaultValue: 'index,follow' },
]

export const Industries: CollectionConfig = {
  slug: 'industries',
  labels: { singular: 'Industry', plural: 'Industries' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'featured', 'order'],
  },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Industry Name', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'icon', label: 'Icon (emoji)', type: 'text' },
    { name: 'heroImage', label: 'Hero Image', type: 'upload', relationTo: 'media' },
    {
      name: 'challenges',
      label: 'Industry Challenges',
      type: 'array',
      fields: [
        { name: 'title', label: 'Challenge Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'solutions',
      label: 'Our Solutions',
      type: 'array',
      fields: [
        { name: 'title', label: 'Solution Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    { name: 'services', label: 'Related Services', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'technologies', label: 'Technologies', type: 'relationship', relationTo: 'technologies', hasMany: true },
    { name: 'caseStudies', label: 'Case Studies', type: 'relationship', relationTo: 'case-studies', hasMany: true },
    {
      name: 'faqs',
      label: 'FAQs',
      type: 'array',
      fields: [
        { name: 'question', label: 'Question', type: 'text' },
        { name: 'answer', label: 'Answer', type: 'textarea' },
      ],
    },
    { name: 'seo', label: 'SEO', type: 'group', fields: seoFields },
    { name: 'featured', label: 'Featured', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
