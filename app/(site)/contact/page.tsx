import { createMetadata } from "@/lib/metadata"
import Contact from "@/components/contact"

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a project conversation with Mike Attara for architecture sprints, DevOps enablement, and technical leadership partnerships.",
  path: "/contact",
})

export default function ContactPage() {
  return <Contact />
}
