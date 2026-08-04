import { createMetadata } from "@/lib/metadata"
import Projects from "@/components/projects"

export const metadata = createMetadata({
  title: "Projects — Open Source & Platform Tooling",
  description:
    "Open source by Mike Attara: ephemeral databases with PII scrubbing (Ditto), exactly-once NATS JetStream messaging, supply-chain security auditing, and Terraform infrastructure on AWS.",
  path: "/projects",
})

export default function ProjectsPage() {
  return <Projects />
}
