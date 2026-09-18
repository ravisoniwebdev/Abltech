import type { CollectionConfig } from 'payload'

const seoFields = [
  { name: 'metaTitle', label: 'Meta Title', type: 'text' as const },
  { name: 'metaDescription', label: 'Meta Description', type: 'textarea' as const },
  { name: 'ogImage', label: 'OG Image', type: 'upload' as const, relationTo: 'media' as const },
  { name: 'keywords', label: 'Keywords', type: 'array' as const, fields: [{ name: 'keyword', type: 'text' as const }] },
]

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case Study', plural: 'Case Studies' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'featured', 'publishedAt'],
  },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Project Title', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'client', label: 'Client Name', type: 'text' },
    { name: 'industry', label: 'Industry', type: 'relationship', relationTo: 'industries' },
    { name: 'service', label: 'Primary Service', type: 'relationship', relationTo: 'services' },
    { name: 'shortDescription', label: 'Short Description', type: 'textarea' },
    { name: 'heroImage', label: 'Hero Image', type: 'upload', relationTo: 'media' },
    {
      name: 'gallery',
      label: 'Image Gallery',
      type: 'array',
      fields: [{ name: 'image', label: 'Image', type: 'upload', relationTo: 'media' as const }],
    },
    { name: 'challenge', label: 'The Challenge', type: 'textarea' },
    { name: 'solution', label: 'Our Solution', type: 'textarea' },
    {
      name: 'approach',
      label: 'Our Approach (Rich Text)',
      type: 'richText',
    },
    {
      name: 'technologyStack',
      label: 'Technology Stack',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'metrics',
      label: 'Results & Metrics',
      type: 'array',
      fields: [
        { name: 'value', label: 'Value (e.g. 42%)', type: 'text' },
        { name: 'metric', label: 'Metric Label', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
      ],
    },
    { name: 'testimonial', label: 'Client Testimonial', type: 'relationship', relationTo: 'testimonials' },
    { name: 'seo', label: 'SEO', type: 'group', fields: seoFields },
    { name: 'featured', label: 'Featured', type: 'checkbox', defaultValue: false },
    { name: 'publishedAt', label: 'Published At', type: 'date' },
  ],
}
