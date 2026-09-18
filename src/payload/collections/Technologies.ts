import type { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  labels: { singular: 'Technology', plural: 'Technologies' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'category', 'featured', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Technology Name', type: 'text', required: true },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Backend', value: 'Backend' },
        { label: 'Mobile', value: 'Mobile' },
        { label: 'Cloud', value: 'Cloud' },
        { label: 'AI/ML', value: 'AI/ML' },
        { label: 'Database', value: 'Database' },
        { label: 'DevOps', value: 'DevOps' },
        { label: 'CMS', value: 'CMS' },
        { label: 'E-commerce', value: 'E-commerce' },
      ],
    },
    { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media' },
    { name: 'description', label: 'Short Description', type: 'text' },
    { name: 'website', label: 'Official Website', type: 'text' },
    { name: 'featured', label: 'Featured', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
