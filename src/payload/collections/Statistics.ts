import type { CollectionConfig } from 'payload'

export const Statistics: CollectionConfig = {
  slug: 'statistics',
  labels: { singular: 'Statistic', plural: 'Statistics' },
  admin: { useAsTitle: 'label', defaultColumns: ['value', 'label', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'value', label: 'Value (e.g. 100+)', type: 'text', required: true },
    { name: 'label', label: 'Label', type: 'text', required: true },
    { name: 'description', label: 'Short Description', type: 'text' },
    { name: 'icon', label: 'Icon (emoji)', type: 'text' },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
