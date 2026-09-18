import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  access: { read: () => true },
  fields: [
    {
      name: 'items',
      label: 'Navigation Items',
      type: 'array',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'href', label: 'URL', type: 'text' },
        { name: 'openInNewTab', label: 'Open in new tab', type: 'checkbox', defaultValue: false },
        { name: 'megaMenu', label: 'Has Mega Menu?', type: 'checkbox', defaultValue: false },
        {
          name: 'children',
          label: 'Dropdown Items',
          type: 'array',
          fields: [
            { name: 'label', label: 'Label', type: 'text' },
            { name: 'href', label: 'URL', type: 'text' },
            { name: 'description', label: 'Short Description', type: 'text' },
            { name: 'icon', label: 'Icon (emoji)', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'cta',
      label: 'CTA Button',
      type: 'group',
      fields: [
        { name: 'label', label: 'Button Label', type: 'text', defaultValue: "Let's Talk" },
        { name: 'href', label: 'URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
