import type { TemplateSelection } from "@/lib/templates";
import {
  SmartFilterHero,
  BeatMarketplace,
  StatsSection,
  FeaturesSection,
  TestimonialsSection,
  PricingSection,
} from "./sections";

export function MusicTemplateV1Home({ selection: _selection }: { selection: TemplateSelection }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <SmartFilterHero />
      <StatsSection />
      <BeatMarketplace />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}

