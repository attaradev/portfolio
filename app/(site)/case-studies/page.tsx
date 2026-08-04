import { createMetadata } from '@/lib/metadata'
import CaseStudies from '@/components/case-studies'

export const metadata = createMetadata({
  title: 'Case Studies — Mike Attara | Payment Systems, Event-Driven Architecture',
  description:
    'Payment reconciliation rebuilt. Monolith decomposed. Observability from zero. Real problems, real numbers.',
  path: '/case-studies',
  type: 'website',
})

export default function CaseStudiesPage() {
  return <CaseStudies />
}
