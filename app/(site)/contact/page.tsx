import { createMetadata } from "@/lib/metadata"
import Contact from "@/components/contact"

export const metadata = createMetadata({
  title: 'Contact Mike Attara — Cloud & Platform Engineer',
  description:
    'Get in touch about platform and security work, open source collaboration, or speaking requests. Response within 48 hours.',
  path: '/contact',
})

export default function ContactPage() {
  return <Contact />
}
