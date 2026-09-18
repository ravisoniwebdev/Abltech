import type { GlobalConfig } from 'payload'

export const IndustriesPage: GlobalConfig = {
  slug: 'industries-page',
  label: 'Industries Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'Industries' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: 'Technology Built Around Your Industry' },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    {
      name: 'cta', label: 'Bottom CTA Section', type: 'group',
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', defaultValue: "Don't See Your Industry?" },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Talk to Our Team' },
        { name: 'buttonHref', label: 'Button URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
