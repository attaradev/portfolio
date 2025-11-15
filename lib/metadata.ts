import type { Metadata } from 'next'

const resolveSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!envUrl) {
    return 'https://www.attara.dev'
  }

  return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`
}

const siteUrl = resolveSiteUrl()
const siteName = 'Mike Attara'
const defaultTitle = 'Mike Attara - Software Engineer'
const defaultDescription = 'Building resilient systems and scalable platforms.'
const defaultImage = '/icon.png'

const normalizedPath = (path: string) => {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

const resolveUrl = (path: string) => new URL(normalizedPath(path), siteUrl).toString()

export const siteMetadata = {
  title: defaultTitle,
  description: defaultDescription,
  url: siteUrl,
  siteName,
  ogImage: defaultImage,
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [
    'Backend Engineer',
    'Platform Engineer',
    'Software Engineer',
    'DevOps Engineer',
    'Ruby on Rails',
    'NestJS',
    'Node.js',
    'TypeScript',
    'AWS',
    'Kubernetes',
    'Docker',
    'PostgreSQL',
    'Microservices',
    'Event-Driven Architecture',
    'Fintech',
    'Payment Systems',
    'Technical Leadership',
    'System Architecture',
    'Mike Attara',
    'Ghana Software Engineer',
    'Backend Developer',
  ],
  authors: [{ name: 'Mike Attara', url: 'https://www.attara.dev' }],
  creator: 'Mike Attara',
  publisher: 'Mike Attara',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/attara-mark.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: `${defaultTitle} social share preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
    creator: '@attaradev',
  },
}

type CreateMetadataOptions = {
  title?: string
  description?: string
  path?: string
  type?:
    | 'article'
    | 'book'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'profile'
    | 'website'
    | 'video.tv_show'
    | 'video.other'
    | 'video.movie'
    | 'video.episode'
  image?: string
}

export function createMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  image,
}: CreateMetadataOptions): Metadata {
  const canonicalPath = normalizedPath(path)
  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle
  const finalDescription = description ?? defaultDescription
  const ogImage = image ?? defaultImage

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      type,
      title: finalTitle,
      description: finalDescription,
      url: resolveUrl(canonicalPath),
      images: [
        {
          url: ogImage,
          alt: `${finalTitle} social share preview`,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
  }
}
