import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'About ABL BusinessTech LLP' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: 'We Build Technology That Moves Business' },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    { name: 'missionEyebrow', label: 'Mission Section Eyebrow', type: 'text', defaultValue: 'Our Mission' },
    { name: 'missionTitle', label: 'Mission Section Title', type: 'text', defaultValue: 'Making World-Class Technology Accessible to Ambitious Businesses' },
    { name: 'missionParagraphs', label: 'Mission Story Paragraphs', type: 'array', fields: [{ name: 'paragraph', label: 'Paragraph', type: 'textarea' }] },
    { name: 'teamEyebrow', label: 'Team Section Eyebrow', type: 'text', defaultValue: 'Our Team' },
    { name: 'teamTitle', label: 'Team Section Title', type: 'text', defaultValue: 'The People Behind the Product' },
    { name: 'officesEyebrow', label: 'Offices Section Eyebrow', type: 'text', defaultValue: 'Where We Are' },
    { name: 'officesTitle', label: 'Offices Section Title', type: 'text', defaultValue: 'Our Offices' },
    {
      name: 'cta',
      label: 'CTA Section',
      type: 'group',
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', defaultValue: 'Join the ABL BusinessTech Team' },
        { name: 'description', label: 'Description', type: 'textarea' },
        {
          name: 'buttons', label: 'Buttons', type: 'array',
          fields: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'href', label: 'URL', type: 'text' },
            { name: 'variant', label: 'Variant', type: 'text' },
          ],
        },
      ],
    },
  ],
}
