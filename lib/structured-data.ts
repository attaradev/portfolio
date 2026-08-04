import { Person, WebSite, WithContext, ProfilePage } from 'schema-dts'

const siteUrl = 'https://www.attara.dev'

export function getPersonStructuredData(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: 'Mike Attara',
    givenName: 'Mike',
    familyName: 'Attara',
    url: siteUrl,
    image: `${siteUrl}/icon.png`,
    sameAs: [
      'https://github.com/attaradev',
      'https://linkedin.com/in/attaradev',
      'https://twitter.com/attaradev',
      'https://blog.attara.dev',
    ],
    jobTitle: 'Senior Backend & Platform Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Purple Wave Auction',
    },
    description:
      'Backend and platform engineer specializing in fintech transaction systems, event-driven architectures, and DevOps automation. 99.9% uptime track record. Available for remote roles and consulting.',
    email: 'hello@attara.dev',
    knowsAbout: [
      'Backend Architecture',
      'Platform Engineering',
      'DevOps',
      'Event-Driven Systems',
      'Microservices',
      'Ruby on Rails',
      'NestJS',
      'Node.js',
      'TypeScript',
      'AWS',
      'Kubernetes',
      'Docker',
      'PostgreSQL',
      'NATS JetStream',
      'Fintech',
      'Payment Systems',
      'Transaction Processing',
      'Technical Leadership',
      'Observability',
      'Site Reliability Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Education, Winneba',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Solutions Architect – Associate',
        credentialCategory: 'certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Developer – Associate',
        credentialCategory: 'certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Cloud Practitioner',
        credentialCategory: 'certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'GitHub Copilot Certified',
        credentialCategory: 'certification',
      },
    ],
  }
}

export function getWebSiteStructuredData(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Mike Attara',
    url: siteUrl,
    description:
      'Backend and platform engineer specializing in fintech transaction systems, event-driven architectures, and DevOps automation.',
    author: {
      '@id': `${siteUrl}/#person`,
    },
    publisher: {
      '@id': `${siteUrl}/#person`,
    },
    inLanguage: 'en-US',
  }
}

export function getProfilePageStructuredData(pagePath: string): WithContext<ProfilePage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}${pagePath}`,
    url: `${siteUrl}${pagePath}`,
    mainEntity: {
      '@id': `${siteUrl}/#person`,
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  }
}

export function generateStructuredDataScript(
  data: WithContext<Person> | WithContext<WebSite> | WithContext<ProfilePage> | Array<WithContext<Person> | WithContext<WebSite> | WithContext<ProfilePage>>
): string {
  return JSON.stringify(data)
}

// Combined structured data for the homepage
export function getHomepageStructuredData(): Array<WithContext<Person> | WithContext<WebSite>> {
  return [getPersonStructuredData(), getWebSiteStructuredData()]
}
