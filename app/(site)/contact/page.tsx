import { createMetadata } from "@/lib/metadata"
import Contact from "@/components/contact"

export const metadata = createMetadata({
  title: 'Contact Mike Attara — Backend Engineer & Consultant',
  description:
    'Get in touch about consulting engagements, architecture challenges, or speaking requests. Response within 48 hours.',
  path: '/contact',
})

export default function ContactPage() {
  return <Contact />
}
