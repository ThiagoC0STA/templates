import { SmartFilterHero } from "@/components/smart-filter-hero"
import { BeatMarketplace } from "@/components/beat-marketplace"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <SmartFilterHero />
      <StatsSection />
      <BeatMarketplace />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  )
}
