import { createMetadata } from "@/lib/metadata"
import Experience from "@/components/experience"

export const metadata = createMetadata({
  title: "Experience — Mike Attara | Fintech, Payments, Platform Engineering",
  description:
    "Transaction systems, AI assistants, event-driven platforms. Vodafone, Wewire Africa, Purple Wave Auction.",
  path: "/experience",
  type: "profile",
})

export default function ExperiencePage() {
  return <Experience />
}
