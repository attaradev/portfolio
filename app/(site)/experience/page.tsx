import { createMetadata } from "@/lib/metadata"
import Experience from "@/components/experience"

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Dive into Mike Attara's record of shipping resilient backend platforms, event-driven systems, and DevOps automation across fintech, telecom, and global teams.",
  path: "/experience",
})

export default function ExperiencePage() {
  return <Experience />
}
