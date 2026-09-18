import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: { read: () => true },
  fields: [
    { name: 'siteName', label: 'Site Name', type: 'text', defaultValue: 'ABL BusinessTech LLP', required: true },
    { name: 'logo', label: 'Logo', type: 'upload', relationTo: 'media' },
    { name: 'tagline', label: 'Tagline', type: 'text' },
    { name: 'contactEmail', label: 'Contact Email', type: 'email' },
    { name: 'phone', label: 'Phone Number', type: 'text' },
    { name: 'address', label: 'Office Address', type: 'textarea' },
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'group',
      fields: [
        { name: 'linkedin', label: 'LinkedIn URL', type: 'text' },
        { name: 'instagram', label: 'Instagram URL', type: 'text' },
        { name: 'facebook', label: 'Facebook URL', type: 'text' },
        { name: 'twitter', label: 'X (Twitter) URL', type: 'text' },
      ],
    },
    {
      name: 'defaultSeo',
      label: 'Default SEO',
      type: 'group',
      fields: [
        { name: 'metaTitle', label: 'Meta Title', type: 'text' },
        { name: 'metaDescription', label: 'Meta Description', type: 'textarea' },
        { name: 'ogImage', label: 'OG Image', type: 'upload', relationTo: 'media' as const },
        { name: 'keywords', label: 'Keywords', type: 'array', fields: [{ name: 'keyword', type: 'text' as const }] },
      ],
    },
    { name: 'googleAnalyticsId', label: 'Google Analytics ID', type: 'text' },
  ],
}
