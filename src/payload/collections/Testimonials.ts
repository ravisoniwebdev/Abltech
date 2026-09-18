import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  admin: { useAsTitle: 'clientName', defaultColumns: ['clientName', 'company', 'rating', 'featured', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'clientName', label: 'Client Name', type: 'text', required: true },
    { name: 'designation', label: 'Designation', type: 'text' },
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'photo', label: 'Photo', type: 'upload', relationTo: 'media' },
    { name: 'testimonial', label: 'Testimonial', type: 'textarea', required: true },
    {
      name: 'rating',
      label: 'Rating (1-5)',
      type: 'number',
      min: 1,
      max: 5,
    },
    { name: 'featured', label: 'Featured', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
