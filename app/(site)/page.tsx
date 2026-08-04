import { createMetadata } from "@/lib/metadata"
import Hero from "@/components/hero"

export const metadata = createMetadata({
  title: "Mike Attara — Senior Backend & Platform Engineer | Remote",
  description:
    "Backend and platform engineer specializing in fintech transaction systems, event-driven architectures, and DevOps automation. 99.9% uptime track record. Available for remote roles and consulting.",
  path: "/",
  type: "website",
})

export default function HomePage() {
  return <Hero />
}
