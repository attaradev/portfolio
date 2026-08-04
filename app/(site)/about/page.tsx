import { createMetadata } from "@/lib/metadata"
import About from "@/components/about"

export const metadata = createMetadata({
  title: "About Mike Attara — Cloud & Platform Engineering, Security, Leadership",
  description:
    "Cloud platforms, security engineering, event-driven architecture, and mentorship. 4× certified, AWS Community Builder (Security). Open source maintainer.",
  path: "/about",
  type: "profile",
})

export default function AboutPage() {
  return <About />
}
