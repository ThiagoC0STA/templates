import Link from "next/link";
import type { TemplateSelection } from "@/lib/templates";
import { buildTemplatePath } from "@/lib/templates/paths";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Music,
  Cpu,
  Users2,
  Mic2,
  Rocket,
  PlayCircle,
  Workflow,
  Trophy,
} from "lucide-react";

const featureHighlights = [
  {
    title: "Instant storefront",
    description: "Launch a branded beat marketplace in minutes with pre-built pages and pricing.",
    icon: Music,
  },
  {
    title: "Creator automations",
    description: "Trigger welcome flows, follow-up emails, and drops using AI-generated copy.",
    icon: Cpu,
  },
  {
    title: "Collaboration hub",
    description: "Share private beats, comments, and stems with your community in one place.",
    icon: Users2,
  },
];

const workflowSteps = [
  {
    label: "Upload & tag",
    detail: "Drag beats in bulk, auto-tag BPM, key, and energy, and instantly publish.",
  },
  {
    label: "Automate drops",
    detail: "Schedule teaser clips, early access, and bundle drops to release on autopilot.",
  },
  {
    label: "Monetize anywhere",
    detail: "Embed checkouts, sell bundles, or license exclusives directly from your booth.",
  },
];

const metrics = [
  { value: "45%", label: "Faster launches" },
  { value: "3.2x", label: "Conversion lift" },
  { value: "98%", label: "Creator satisfaction" },
];

export function MusicTemplateV2Home({ selection }: { selection: TemplateSelection }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <HeroSection selection={selection} />
      <HighlightSection />
      <WorkflowSection />
      <MetricsSection />
      <CtaSection />
    </main>
  );
}

function HeroSection({ selection }: { selection: TemplateSelection }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div className="space-y-8">
          <Badge className="rounded-full bg-purple-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
            Version 2
          </Badge>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Launch a signature beat experience in one weekend.
            </h1>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base">
              TriuneBeats V2 mixes bold storytelling with conversion-first sections. Drop previews,
              highlight value, and funnel artists into your booth or bundles without custom code.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-orange-500 font-semibold text-white shadow-lg shadow-purple-900/30 hover:shadow-xl"
              asChild
            >
              <Link href={buildTemplatePath(selection, "/")}>Preview live experience</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400/40 bg-purple-500/10 text-purple-100 hover:bg-purple-500/20"
              asChild
            >
              <Link href={buildTemplatePath(selection, "/booth")}>Jump into the booth</Link>
            </Button>
          </div>
          <ul className="grid gap-3 text-sm text-purple-100 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <PlayCircle className="h-4 w-4 text-orange-300" />
              Hero with embedded audio stories
            </li>
            <li className="flex items-center gap-2">
              <Workflow className="h-4 w-4 text-orange-300" />
              End-to-end workflow narrative
            </li>
            <li className="flex items-center gap-2">
              <Mic2 className="h-4 w-4 text-orange-300" />
              Artist testimonies front and center
            </li>
            <li className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-orange-300" />
              CTA stack built for conversion
            </li>
          </ul>
        </div>

        <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/10 via-background/80 to-orange-500/10 p-6 shadow-xl backdrop-blur">
          <div className="space-y-4 text-sm text-purple-100">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Experience sample</p>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-semibold text-white">“Volume 2 feels like a midnight drop party. The booth flow is pristine.”</p>
              <p className="mt-2 text-xs text-purple-200/70">— Nova, Recording Artist</p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-200/70">Featured drop</p>
                  <p className="text-sm font-semibold text-white">After Hours Bundle</p>
                </div>
                <Badge variant="secondary" className="rounded-full border border-purple-300/40 bg-purple-500/20 text-purple-100">
                  Exclusive
                </Badge>
              </div>
              <p className="text-xs text-purple-200/80">
                Includes 5 nocturnal trap beats, stems, and performance license. Built for storytellers and late-night sessions.
              </p>
              <div className="flex items-center justify-between rounded-xl bg-purple-500/10 p-3 text-xs text-purple-100">
                <span>Launch discount</span>
                <span className="font-semibold text-white">$79</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        {featureHighlights.map((feature) => {
          const Icon = feature.icon;
          if (!Icon) return null;
          return (
            <Card
              key={feature.title}
              className="relative overflow-hidden border border-white/10 bg-background/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="h-6 w-6 text-purple-300" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="border-y border-border/40 bg-gradient-to-br from-purple-600/10 via-background to-orange-500/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <Badge className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-100">
            Workflow
          </Badge>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Tell your story with a guided creator journey.
          </h2>
          <p className="text-sm text-purple-100/80 sm:text-base">
            Walk artists through discovery, trust, and conversion with scroll-triggered sections and anchored CTAs.
          </p>
          <div className="space-y-4">
            {workflowSteps.map((step) => (
              <div key={step.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">{step.label}</p>
                <p className="text-xs text-purple-200/80">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden border border-white/10 bg-background/70 shadow-lg">
          <CardContent className="space-y-4 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Spotlight module</p>
            <h3 className="text-lg font-semibold text-foreground">Story-driven sections with embedded audio</h3>
            <p className="text-sm text-muted-foreground">
              Drop testimonials, voice memos, and beat snippets inline to build momentum as visitors scroll.
            </p>
            <div className="rounded-2xl border border-white/10 bg-muted/20 p-4 text-sm text-muted-foreground">
              “I licensed 6 beats after swapping to this layout. The story flow hooks artists before the CTA even appears.” — L0-FI LABS
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="rounded-3xl border border-border/40 bg-background/80 p-10 shadow-lg md:p-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-4">
            <Badge className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
              Outcomes
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Measurable results from Triune creators.
            </h2>
            <p className="text-sm text-muted-foreground">
              Version 2 leans into social proof and performance metrics to help you convert visiting artists into paying collaborators.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4 text-center">
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-purple-200/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Trophy className="h-4 w-4 text-orange-300" />
            Trusted by charting producers
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-orange-300" />
            Optimized for conversions
          </span>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 p-10 text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to remix your beat business?</h2>
        <p className="mt-3 text-sm text-purple-100/80 sm:text-base">
          Grab the V2 template, customize your copy, and start converting artists within the hour.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            Clone template
          </Button>
          <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
            View documentation
          </Button>
        </div>
      </div>
    </section>
  );
}

