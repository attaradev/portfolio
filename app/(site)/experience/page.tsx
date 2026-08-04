import { createMetadata } from "@/lib/metadata"
import Experience from "@/components/experience"

export const metadata = createMetadata({
  title: "Experience — Mike Attara | Platform Engineering, Cloud, Fintech",
  description:
    "Platform engineering, transaction systems, and event-driven platforms. Purple Wave Auction, Wewire Africa, Vodafone.",
  path: "/experience",
  type: "profile",
})

export default function ExperiencePage() {
  return <Experience />
}
