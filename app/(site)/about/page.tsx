import { createMetadata } from "@/lib/metadata"
import About from "@/components/about"

export const metadata = createMetadata({
  title: "About Mike Attara — Backend Engineer, DevOps, Technical Leadership",
  description:
    "Fintech systems, event-driven architecture, engineering mentorship. AWS certified. Open source maintainer.",
  path: "/about",
  type: "profile",
})

export default function AboutPage() {
  return <About />
}
