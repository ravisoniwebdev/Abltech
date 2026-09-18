import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  access: { read: () => true },
  fields: [
    { name: 'eyebrow', label: 'Hero Eyebrow Text', type: 'text', defaultValue: 'Contact Us' },
    { name: 'headline', label: 'Hero Headline', type: 'text', defaultValue: "Let's Build Something Great Together" },
    { name: 'subheadline', label: 'Hero Subheadline', type: 'textarea' },
    { name: 'formHeading', label: 'Form Heading', type: 'text', defaultValue: 'Send Us a Message' },
    { name: 'infoHeading', label: 'Info Section Heading', type: 'text', defaultValue: 'Contact Information' },
    { name: 'expectHeading', label: 'What to Expect Heading', type: 'text', defaultValue: 'What to Expect' },
    {
      name: 'expectations', label: 'Expectation Items', type: 'array',
      fields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
      ],
    },
    {
      name: 'consultationCard', label: 'Consultation Banner Card', type: 'group',
      fields: [
        { name: 'title', label: 'Title', type: 'text', defaultValue: 'Need something faster?' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: 'buttonLabel', label: 'Button Label', type: 'text', defaultValue: 'Book a Free Consultation →' },
        { name: 'buttonHref', label: 'Button URL', type: 'text', defaultValue: '/contact/book-consultation' },
      ],
    },
  ],
}
