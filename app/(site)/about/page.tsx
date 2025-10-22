import { createMetadata } from "@/lib/metadata"
import About from "@/components/about"

export const metadata = createMetadata({
  title: "About",
  description:
    "Explore Mike Attara's journey as a backend architect, DevOps leader, and community mentor building resilient platforms across industries.",
  path: "/about",
  type: "profile",
})

export default function AboutPage() {
  return <About />
}
