import type { CollectionConfig } from 'payload'

export const CompanyValues: CollectionConfig = {
  slug: 'company-values',
  labels: { singular: 'Company Value', plural: 'Company Values' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Value Title', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'icon', label: 'Icon (emoji)', type: 'text' },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
