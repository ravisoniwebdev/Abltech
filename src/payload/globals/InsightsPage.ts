import type { GlobalConfig } from 'payload'

export const InsightsPage: GlobalConfig = {
  slug: 'insights-page',
  label: 'Insights Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'Insights & Thought Leadership' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: 'Perspectives on Technology, Strategy, and Digital Transformation' },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    {
      name: 'cta', label: 'Bottom CTA Section', type: 'group',
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Stay Ahead of the Curve' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Subscribe to Newsletter' },
        { name: 'buttonHref', label: 'Button URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
