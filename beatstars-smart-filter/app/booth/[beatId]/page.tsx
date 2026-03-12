import { RecordingBooth } from "@/components/recording-booth"

type BeatBoothPageProps = {
  params: Promise<{ beatId: string }>
}

export default async function BeatBoothPage({ params }: BeatBoothPageProps) {
  const { beatId } = await params;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <RecordingBooth beatId={beatId} />
    </main>
  )
}
