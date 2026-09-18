import type { GlobalConfig } from 'payload'

const ctaButtonFields = [
  { name: 'label', label: 'Label', type: 'text' as const },
  { name: 'href', label: 'URL', type: 'text' as const },
  {
    name: 'variant',
    label: 'Variant',
    type: 'select' as const,
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
    ],
  },
]

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Homepage',
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'headline', label: 'Headline', type: 'text', defaultValue: 'Build Digital Products That Move Your Business Forward.' },
        { name: 'subheadline', label: 'Supporting Text', type: 'textarea' },
        { name: 'buttons', label: 'CTA Buttons', type: 'array', fields: ctaButtonFields },
      ],
    },
    {
      name: 'clients',
      label: 'Client Logos Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
      ],
    },
    {
      name: 'services',
      label: 'Services Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'featuredWork',
      label: 'Featured Work Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'stats',
      label: 'Statistics Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
      ],
    },
    {
      name: 'industries',
      label: 'Industries Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'technologyStack',
      label: 'Tech Stack Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'process',
      label: 'Process Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'whyUs',
      label: 'Why Us Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'testimonials',
      label: 'Testimonials Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
      ],
    },
    {
      name: 'insights',
      label: 'Insights Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'cta',
      label: 'Final CTA Section',
      type: 'group',
      fields: [
        { name: 'enabled', label: 'Enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', label: 'Heading', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'buttons', label: 'Buttons', type: 'array', fields: ctaButtonFields },
      ],
    },
  ],
}
