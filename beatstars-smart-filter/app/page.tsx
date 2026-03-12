import {
  getTemplateDefinition,
  getTemplateVersionDefinition,
  resolveTemplateSelection,
  type TemplateSelection,
} from "@/lib/templates";
import { TemplateGallery } from "@/components/template-gallery";
import { MusicTemplateV1Home } from "@/templates/music/v1";
import { MusicTemplateV2Home } from "@/templates/music/v2";

type HomePageSearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function HomePage({
  searchParams,
}: {
  searchParams?: HomePageSearchParams;
}) {
  const params = searchParams ? await searchParams : {};
  const view = getFirst(params.view);
  const templateParam = getFirst(params.template);
  const versionParam = getFirst(params.version);

  if (!templateParam || !versionParam || view === "gallery") {
    return <TemplateGallery />;
  }

  const selection = resolveTemplateSelection(templateParam, versionParam);
  const template = getTemplateDefinition(selection);
  const version = getTemplateVersionDefinition(selection);

  return <TemplateHome selection={selection} template={template.label} version={version.label} />;
}

function TemplateHome({
  selection,
  template,
  version,
}: {
  selection: TemplateSelection;
  template: string;
  version: string;
}) {
  if (selection.templateId === "music") {
    if (selection.versionId === "v1") {
      return <MusicTemplateV1Home selection={selection} />;
    }

    if (selection.versionId === "v2") {
      return <MusicTemplateV2Home selection={selection} />;
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl border border-border/40 bg-background/90 p-10 text-center shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Template preview</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">{template}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Version <span className="font-semibold text-foreground">{version}</span> is not yet wired to
          a dedicated preview. Check back soon!
        </p>
      </div>
    </main>
  );
}

function getFirst(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value ?? undefined;
}
