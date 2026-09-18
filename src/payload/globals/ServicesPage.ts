import type { GlobalConfig } from 'payload'

export const ServicesPage: GlobalConfig = {
  slug: 'services-page',
  label: 'Services Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'What We Do' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: 'Technology Services That Drive Real Results' },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    {
      name: 'cta', label: 'Bottom CTA Section', type: 'group',
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Not Sure Which Service You Need?' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Book a Free Consultation' },
        { name: 'buttonHref', label: 'Button URL', type: 'text', defaultValue: '/contact/book-consultation' },
      ],
    },
  ],
}
