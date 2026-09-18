import type { CollectionConfig } from 'payload'

export const ProcessSteps: CollectionConfig = {
  slug: 'process-steps',
  labels: { singular: 'Process Step', plural: 'Process Steps' },
  admin: { useAsTitle: 'title', defaultColumns: ['step', 'title', 'duration'] },
  access: { read: () => true },
  fields: [
    { name: 'step', label: 'Step Number', type: 'number', required: true },
    { name: 'title', label: 'Step Title', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'icon', label: 'Icon (emoji)', type: 'text' },
    { name: 'duration', label: 'Duration (e.g. 1-2 weeks)', type: 'text' },
    {
      name: 'deliverables',
      label: 'Deliverables',
      type: 'array',
      fields: [{ name: 'deliverable', label: 'Deliverable', type: 'text' }],
    },
  ],
}
