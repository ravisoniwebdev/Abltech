import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Contact Submission', plural: 'Contact Submissions' },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'company', 'formType', 'status', 'submittedAt'],
  },
  access: {
    // Only authenticated users (admins) can read submissions
    read: ({ req }) => Boolean(req.user),
    // Submissions are created via API (no auth required for create)
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'service', label: 'Service Interested In', type: 'text' },
    { name: 'budget', label: 'Budget Range', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea' },
    { name: 'projectDetails', label: 'Project Details', type: 'textarea' },
    { name: 'preferredContact', label: 'Preferred Contact Method', type: 'text' },
    {
      name: 'formType',
      label: 'Form Type',
      type: 'select',
      options: [
        { label: 'Contact', value: 'contact' },
        { label: 'Consultation', value: 'consultation' },
      ],
    },
    { name: 'submittedAt', label: 'Submitted At', type: 'date' },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
      ],
    },
  ],
}
