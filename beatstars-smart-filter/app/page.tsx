import { SmartFilterHero } from "@/components/smart-filter-hero"
import { BeatMarketplace } from "@/components/beat-marketplace"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <SmartFilterHero />
      <BeatMarketplace />
    </main>
  )
}
