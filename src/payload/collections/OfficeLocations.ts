import type { CollectionConfig } from 'payload'

export const OfficeLocations: CollectionConfig = {
  slug: 'office-locations',
  labels: { singular: 'Office Location', plural: 'Office Locations' },
  admin: { useAsTitle: 'city', defaultColumns: ['city', 'country', 'isHeadquarters', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'city', label: 'City', type: 'text', required: true },
    { name: 'country', label: 'Country', type: 'text' },
    { name: 'address', label: 'Full Address', type: 'textarea' },
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'mapUrl', label: 'Google Maps Embed URL', type: 'text' },
    { name: 'isHeadquarters', label: 'Is Headquarters', type: 'checkbox', defaultValue: false },
    { name: 'order', label: 'Display Order', type: 'number' },
  ],
}
