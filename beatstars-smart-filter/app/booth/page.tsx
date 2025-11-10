import type { Metadata } from "next"
import { RecordingBooth } from "@/components/recording-booth"

export const metadata: Metadata = {
  title: "Recording Booth",
  description:
    "Record vocals over TriuneBeats instrumentals, manage takes, and share session-ready stems without leaving your browser.",
}

export default function BoothPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <RecordingBooth />
    </main>
  )
}
