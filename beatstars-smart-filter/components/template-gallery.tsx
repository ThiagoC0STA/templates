import Link from "next/link";
import { TEMPLATE_REGISTRY, type TemplateDefinition } from "@/lib/templates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, MonitorSmartphone } from "lucide-react";

export function TemplateGallery() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-28">
        <header className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-purple-300" />
            Template playground
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Choose a template and version to explore
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            Each template bundles a home page, conversion funnel, and supporting
            flows. Switch versions to see alternative layouts, tone, and
            creative directions.
          </p>
        </header>

        <div className="relative mt-14 grid gap-6 md:grid-cols-2">
          {TEMPLATE_REGISTRY.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateCard({ template }: { template: TemplateDefinition }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-background/80 to-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(124,58,237,0.8)] backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_25px_70px_-40px_rgba(249,115,22,0.6)]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent opacity-80 transition group-hover:opacity-100" />
        <div className="flex aspect-video items-center justify-center bg-background/60 text-purple-200">
          {template.previewImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={template.previewImage}
              alt={template.label}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <MonitorSmartphone className="h-8 w-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">
                Live preview
              </p>
              <p className="text-xs text-purple-200/60">
                Select a version to load this template
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            className="rounded-full border border-purple-300/40 bg-purple-500/20 text-purple-100"
          >
            {template.category}
          </Badge>
          <span className="text-xs uppercase tracking-[0.3em] text-purple-200/80">
            {template.tagline}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{template.label}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {template.description}
          </p>
        </div>

        {template.features?.length ? (
          <ul className="space-y-2 text-xs text-muted-foreground">
            {template.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-orange-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <footer className="mt-6 space-y-4">
        <div className="space-y-2 rounded-2xl border border-white/10 bg-background/60 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">
            Available versions
          </p>
          <div className="flex flex-wrap gap-2">
            {template.versions.map((version) => (
              <Badge
                key={version.id}
                variant="outline"
                className="rounded-full border border-purple-300/40 bg-purple-500/15 text-xs text-purple-100"
              >
                {version.label}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          className="w-full justify-between border-purple-500/40 bg-gradient-to-r from-purple-500 to-orange-500 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:shadow-xl"
          asChild
        >
          <Link
            href={`/?template=${template.id}&version=${template.versions[0]?.id ?? "v1"}`}
            prefetch={false}
          >
            <span className="text-left">Preview template</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </footer>
    </article>
  );
}
