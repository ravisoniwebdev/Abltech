import type { CollectionConfig } from 'payload'

const seoFields = [
  { name: 'metaTitle', label: 'Meta Title', type: 'text' as const },
  { name: 'metaDescription', label: 'Meta Description', type: 'textarea' as const },
  {
    name: 'ogImage',
    label: 'OG Image',
    type: 'upload' as const,
    relationTo: 'media' as const,
  },
  {
    name: 'keywords',
    label: 'Keywords',
    type: 'array' as const,
    fields: [{ name: 'keyword', type: 'text' as const }],
  },
  {
    name: 'robots',
    label: 'Robots',
    type: 'select' as const,
    options: [
      { label: 'index, follow', value: 'index,follow' },
      { label: 'noindex, follow', value: 'noindex,follow' },
      { label: 'index, nofollow', value: 'index,nofollow' },
      { label: 'noindex, nofollow', value: 'noindex,nofollow' },
    ],
    defaultValue: 'index,follow',
  },
]

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'featured', 'order'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. ai-data-engineering)',
      },
    },
    {
      name: 'shortDescription',
      label: 'Short Description',
      type: 'textarea',
    },
    {
      name: 'icon',
      label: 'Icon (emoji)',
      type: 'text',
    },
    {
      name: 'heroTitle',
      label: 'Hero Title',
      type: 'text',
    },
    {
      name: 'heroDescription',
      label: 'Hero Description',
      type: 'textarea',
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      fields: [
        { name: 'title', label: 'Feature Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'icon', label: 'Icon', type: 'text' },
      ],
    },
    {
      name: 'benefits',
      label: 'Benefits',
      type: 'array',
      fields: [{ name: 'benefit', label: 'Benefit', type: 'text' }],
    },
    {
      name: 'technologies',
      label: 'Technologies Used',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'process',
      label: 'Process Steps',
      type: 'array',
      fields: [
        { name: 'step', label: 'Step Number', type: 'number' },
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'faqs',
      label: 'FAQs',
      type: 'array',
      fields: [
        { name: 'question', label: 'Question', type: 'text' },
        { name: 'answer', label: 'Answer', type: 'textarea' },
      ],
    },
    {
      name: 'caseStudies',
      label: 'Related Case Studies',
      type: 'relationship',
      relationTo: 'case-studies',
      hasMany: true,
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: seoFields,
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      label: 'Display Order',
      type: 'number',
    },
  ],
}
