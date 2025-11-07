import { RecordingBooth } from "@/components/recording-booth"

export default function BeatBoothPage({ params }: { params: { beatId: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <RecordingBooth beatId={params.beatId} />
    </main>
  )
}
