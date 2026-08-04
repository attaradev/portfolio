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
    ],
    jobTitle: 'Cloud & Platform Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Purple Wave Auction',
    },
    description:
      'Cloud & Platform Engineer building secure, resilient infrastructure on AWS and Kubernetes. AWS Community Builder (Security). Creator of Ditto, JetStream Bridge, and NatsPubsub.',
    email: 'hello@attara.dev',
    knowsAbout: [
      'Platform Engineering',
      'Cloud Security',
      'DevSecOps',
      'Infrastructure as Code',
      'Terraform',
      'AWS',
      'Kubernetes',
      'IAM',
      'Supply Chain Security',
      'Event-Driven Systems',
      'Microservices',
      'Go',
      'Ruby on Rails',
      'TypeScript',
      'PostgreSQL',
      'NATS JetStream',
      'Observability',
      'Site Reliability Engineering',
      'Fintech',
      'Technical Leadership',
    ],
    // TODO(mike): data/resume.ts says University of Cape Coast — confirm which is correct and align both files
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
      'Cloud & Platform Engineer building secure, resilient infrastructure on AWS and Kubernetes. AWS Community Builder (Security).',
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
