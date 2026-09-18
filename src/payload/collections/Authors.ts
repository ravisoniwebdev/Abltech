import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  labels: { singular: 'Author', plural: 'Authors' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'designation'] },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', unique: true },
    { name: 'photo', label: 'Photo', type: 'upload', relationTo: 'media' },
    { name: 'bio', label: 'Bio', type: 'textarea' },
    { name: 'designation', label: 'Designation', type: 'text' },
    { name: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    { name: 'twitter', label: 'Twitter URL', type: 'text' },
  ],
}
