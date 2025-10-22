import { Person, WithContext } from 'schema-dts'

export function getPersonStructuredData(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mike Attara',
    url: 'https://www.attara.dev',
    image: 'https://www.attara.dev/icon.png',
    sameAs: [
      'https://github.com/attaradev',
      'https://linkedin.com/in/attaradev',
      'https://twitter.com/attaradev',
      'https://blog.attara.dev',
    ],
    jobTitle: 'Backend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Purple Wave Auction',
    },
    description:
      'Platform engineer crafting resilient backend and DevOps systems for fintech and high-impact products. Specializing in Ruby on Rails, NestJS, AWS, and Kubernetes.',
    email: 'hello@attara.dev',
    knowsAbout: [
      'Backend Architecture',
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
      'Fintech',
      'Payment Systems',
      'Technical Leadership',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Cape Coast',
    },
  }
}

export function generateStructuredDataScript(data: WithContext<Person>): string {
  return JSON.stringify(data)
}
