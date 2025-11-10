import type { Metadata } from "next"
import { RecordingBooth } from "@/components/recording-booth"

type BeatBoothPageProps = {
  params: { beatId: string }
}

export function generateMetadata({ params }: BeatBoothPageProps): Metadata {
  return {
    title: `Recording Booth • Beat ${params.beatId}`,
    description: "Capture vocals, manage takes, and export studio-ready stems for this beat.",
  }
}

export default function BeatBoothPage({ params }: BeatBoothPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <RecordingBooth beatId={params.beatId} />
    </main>
  )
}
