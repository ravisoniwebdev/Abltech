import {
  CollectionCards as defaultCollectionCards,
  DefaultNav as defaultNav,
  Logo as defaultLogo,
  DocumentHeader as defaultDocumentHeader,
  FolderField as defaultFolderField,
  FolderTableCell as defaultFolderTableCell,
} from '@payloadcms/next/rsc'

/** @type import('payload').ImportMap */
export const importMap = {
  '@payloadcms/next/rsc#CollectionCards': defaultCollectionCards,
  '@payloadcms/ui/rsc#CollectionCards': defaultCollectionCards,
  '@payloadcms/next/rsc#DefaultNav': defaultNav,
  '@payloadcms/next/rsc#Logo': defaultLogo,
  '@payloadcms/next/rsc#DocumentHeader': defaultDocumentHeader,
  '@payloadcms/next/rsc#FolderField': defaultFolderField,
  '@payloadcms/next/rsc#FolderTableCell': defaultFolderTableCell,
}
