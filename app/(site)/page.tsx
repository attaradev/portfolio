import { createMetadata } from "@/lib/metadata"
import Hero from "@/components/hero"

export const metadata = createMetadata({
  description:
    "Platform engineer delivering resilient backend architecture, event-driven systems, and DevOps automation for fintech and scaling teams.",
  path: "/",
  type: "website",
})

export default function HomePage() {
  return <Hero />
}
