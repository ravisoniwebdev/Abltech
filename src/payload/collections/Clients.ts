import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  labels: { singular: 'Client', plural: 'Clients' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'industry', 'featured', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Client Name', type: 'text', required: true },
    { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media' },
    { name: 'website', label: 'Website URL', type: 'text' },
    { name: 'industry', label: 'Industry', type: 'text' },
    { name: 'featured', label: 'Show on Homepage', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
