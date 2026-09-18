import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: { singular: 'Team Member', plural: 'Team Members' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'designation', 'department', 'featured', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'designation', label: 'Designation', type: 'text' },
    { name: 'department', label: 'Department', type: 'text' },
    { name: 'photo', label: 'Photo', type: 'upload', relationTo: 'media' },
    { name: 'bio', label: 'Bio', type: 'textarea' },
    { name: 'linkedin', label: 'LinkedIn URL', type: 'text' },
    { name: 'twitter', label: 'Twitter URL', type: 'text' },
    { name: 'featured', label: 'Show on About Page', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
