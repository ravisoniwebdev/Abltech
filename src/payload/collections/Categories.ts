import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Category', plural: 'Categories' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'slug'] },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Category Name', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'color', label: 'Color (hex)', type: 'text' },
  ],
}
