import type { GlobalConfig } from 'payload'

export const WorkPage: GlobalConfig = {
  slug: 'work-page',
  label: 'Work Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'Our Work' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: 'Real Problems. Measurable Outcomes.' },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    {
      name: 'cta', label: 'Bottom CTA Section', type: 'group',
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Ready to Start Your Project?' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Start a Conversation' },
        { name: 'buttonHref', label: 'Button URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
