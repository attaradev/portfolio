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
const defaultTitle = 'Mike Attara — Cloud & Platform Engineer'
const defaultDescription =
  'Cloud & Platform Engineer building secure, resilient infrastructure on AWS and Kubernetes. AWS Community Builder (Security). Open source: Ditto, JetStream Bridge, NatsPubsub.'
const defaultImage = '/og-image.png'

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
  title: {
    default: defaultTitle,
    template: '%s | Mike Attara',
  },
  description: defaultDescription,
  keywords: [
    // Primary keywords
    'cloud platform engineer remote',
    'platform engineer',
    'cloud security engineer',
    'DevSecOps engineer remote',
    'senior backend engineer remote',
    'infrastructure engineer AWS',
    // Technical skills
    'AWS',
    'Kubernetes',
    'Terraform',
    'Infrastructure as Code',
    'IAM',
    'CI/CD',
    'Go',
    'Ruby on Rails',
    'TypeScript',
    'PostgreSQL',
    'NATS JetStream',
    'Docker',
    // Domain expertise
    'cloud security',
    'supply chain security',
    'platform engineering',
    'distributed systems',
    'event-driven architecture',
    'observability',
    'SRE',
    'fintech systems',
    // Brand
    'Mike Attara',
    'AWS Community Builder',
    'attara.dev',
  ],
  authors: [{ name: 'Mike Attara', url: 'https://www.attara.dev' }],
  creator: 'Mike Attara',
  publisher: 'Mike Attara',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/attara-mark.png', type: 'image/png' },
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
        alt: 'Mike Attara — Cloud & Platform Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
    creator: '@attaradev',
    site: '@attaradev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
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
  noIndex?: boolean
}

export function createMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonicalPath = normalizedPath(path)
  const finalTitle = title || defaultTitle
  const finalDescription = description ?? defaultDescription
  const ogImage = image ?? defaultImage

  return {
    // Absolute: every caller passes a complete title, so skip the root layout's '%s | Mike Attara' template
    title: { absolute: finalTitle },
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
          width: 1200,
          height: 630,
          alt: `${finalTitle}`,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
