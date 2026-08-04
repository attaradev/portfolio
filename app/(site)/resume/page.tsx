import { createMetadata } from '@/lib/metadata'
import Resume from '@/components/resume'

export const metadata = createMetadata({
  title: 'Resume — Mike Attara | Cloud & Platform Engineer',
  description:
    'Cloud & Platform Engineer. Secure infrastructure on AWS and Kubernetes, event-driven systems, DevOps automation. 4× certified, AWS Community Builder (Security).',
  path: '/resume',
  type: 'profile',
})

export default function ResumePage() {
  return <Resume />
}
