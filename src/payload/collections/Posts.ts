import type { CollectionConfig } from 'payload'

const seoFields = [
  { name: 'metaTitle', label: 'Meta Title', type: 'text' as const },
  { name: 'metaDescription', label: 'Meta Description', type: 'textarea' as const },
  { name: 'ogImage', label: 'OG Image', type: 'upload' as const, relationTo: 'media' as const },
  { name: 'keywords', label: 'Keywords', type: 'array' as const, fields: [{ name: 'keyword', type: 'text' as const }] },
]

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Posts' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'publishedAt', 'featured'],
  },
  access: { read: () => true },
  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', label: 'Excerpt', type: 'textarea' },
    { name: 'featuredImage', label: 'Featured Image', type: 'upload', relationTo: 'media' },
    { name: 'author', label: 'Author', type: 'relationship', relationTo: 'authors' },
    { name: 'category', label: 'Category', type: 'relationship', relationTo: 'categories' },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      fields: [{ name: 'tag', label: 'Tag', type: 'text' }],
    },
    { name: 'publishedAt', label: 'Published At', type: 'date' },
    { name: 'readingTime', label: 'Reading Time (mins)', type: 'number' },
    { name: 'featured', label: 'Featured', type: 'checkbox', defaultValue: false },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    { name: 'seo', label: 'SEO', type: 'group', fields: seoFields },
  ],
}
