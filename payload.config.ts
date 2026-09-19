import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

// Collections
import { Users } from './src/payload/collections/Users'
import { Media } from './src/payload/collections/Media'
import { Services } from './src/payload/collections/Services'
import { Industries } from './src/payload/collections/Industries'
import { CaseStudies } from './src/payload/collections/CaseStudies'
import { Posts } from './src/payload/collections/Posts'
import { Categories } from './src/payload/collections/Categories'
import { Authors } from './src/payload/collections/Authors'
import { Clients } from './src/payload/collections/Clients'
import { Testimonials } from './src/payload/collections/Testimonials'
import { TeamMembers } from './src/payload/collections/TeamMembers'
import { Technologies } from './src/payload/collections/Technologies'
import { Statistics } from './src/payload/collections/Statistics'
import { ProcessSteps } from './src/payload/collections/ProcessSteps'
import { CompanyValues } from './src/payload/collections/CompanyValues'
import { OfficeLocations } from './src/payload/collections/OfficeLocations'
import { ContactSubmissions } from './src/payload/collections/ContactSubmissions'

// Globals
import { SiteSettings } from './src/payload/globals/SiteSettings'
import { Navigation } from './src/payload/globals/Navigation'
import { Footer } from './src/payload/globals/Footer'
import { HomePage } from './src/payload/globals/HomePage'
import { AboutPage } from './src/payload/globals/AboutPage'
import { ContactPage } from './src/payload/globals/ContactPage'
import { ServicesPage } from './src/payload/globals/ServicesPage'
import { IndustriesPage } from './src/payload/globals/IndustriesPage'
import { WorkPage } from './src/payload/globals/WorkPage'
import { InsightsPage } from './src/payload/globals/InsightsPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  sharp,
  // Admin UI at /admin
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— ABL BusinessTech CMS',
    },
  },

  // Editor
  editor: lexicalEditor({}),

  // Database — SQLite for local development
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),

  // Secret
  secret: process.env.PAYLOAD_SECRET || 'abl-businesstech-local-secret-change-in-production',

  // Base URL
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',

  // CORS & CSRF — allow local dev on any port (3000, 3001, etc.)
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    process.env.NEXT_PUBLIC_SITE_URL || '',
  ].filter(Boolean),
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    process.env.NEXT_PUBLIC_SITE_URL || '',
  ].filter(Boolean),

  // Collections
  collections: [
    Users,
    Media,
    Services,
    Industries,
    CaseStudies,
    Posts,
    Categories,
    Authors,
    Clients,
    Testimonials,
    TeamMembers,
    Technologies,
    Statistics,
    ProcessSteps,
    CompanyValues,
    OfficeLocations,
    ContactSubmissions,
  ],

  // Globals (singletons)
  globals: [
    SiteSettings,
    Navigation,
    Footer,
    HomePage,
    AboutPage,
    ContactPage,
    ServicesPage,
    IndustriesPage,
    WorkPage,
    InsightsPage,
  ],

  // TypeScript
  typescript: {
    outputFile: path.resolve(dirname, 'src/types/payload-types.ts'),
  },
})
