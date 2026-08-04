import { createMetadata } from '@/lib/metadata'
import Resume from '@/components/resume'

export const metadata = createMetadata({
  title: 'Resume — Mike Attara | Senior Backend & Platform Engineer',
  description:
    'Senior backend engineer. Fintech transaction systems, event-driven architectures, DevOps automation. AWS certified.',
  path: '/resume',
  type: 'profile',
})

export default function ResumePage() {
  return <Resume />
}
