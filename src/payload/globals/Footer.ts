import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: { read: () => true },
  fields: [
    {
      name: 'columns',
      label: 'Footer Columns',
      type: 'array',
      fields: [
        { name: 'heading', label: 'Column Heading', type: 'text' },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          fields: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'href', label: 'URL', type: 'text' },
            { name: 'openInNewTab', label: 'New Tab', type: 'checkbox', defaultValue: false },
          ],
        },
      ],
    },
    { name: 'tagline', label: 'Footer Tagline', type: 'text' },
    { name: 'copyright', label: 'Copyright Text', type: 'text' },
    {
      name: 'bottomLinks',
      label: 'Bottom Links (Legal)',
      type: 'array',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'href', label: 'URL', type: 'text' },
      ],
    },
  ],
}
