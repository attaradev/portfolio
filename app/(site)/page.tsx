import { createMetadata } from "@/lib/metadata"
import Hero from "@/components/hero"

export const metadata = createMetadata({
  title: "Mike Attara — Cloud & Platform Engineer",
  description:
    "Cloud & Platform Engineer building secure, resilient infrastructure on AWS and Kubernetes. AWS Community Builder (Security). Creator of Ditto, JetStream Bridge, and NatsPubsub.",
  path: "/",
  type: "website",
})

export default function HomePage() {
  return <Hero />
}
