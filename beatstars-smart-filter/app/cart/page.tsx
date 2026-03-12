import type { Metadata } from "next";
import { getTemplateDefinition, getTemplateVersionDefinition, resolveTemplateSelection } from "@/lib/templates";
import type { TemplateSelection } from "@/lib/templates";
import { MusicTemplateV1Cart } from "@/templates/music/v1/pages/cart";
import { MusicTemplateV2Cart } from "@/templates/music/v2/pages/cart";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your licenses, stems, and add-ons before checking out.",
};

type CartPageSearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function CartPage({
  searchParams,
}: {
  searchParams?: CartPageSearchParams;
}) {
  const params = searchParams ? await searchParams : {};
  const templateParam = getFirst(params.template);
  const versionParam = getFirst(params.version);
  const selection = resolveTemplateSelection(templateParam, versionParam);
  const template = getTemplateDefinition(selection);
  const version = getTemplateVersionDefinition(selection);

  return <TemplateCart selection={selection} template={template.label} version={version.label} />;
}

function TemplateCart({
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
      return <MusicTemplateV1Cart selection={selection} />;
    }

    if (selection.versionId === "v2") {
      return <MusicTemplateV2Cart selection={selection} />;
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="rounded-3xl border border-border/40 bg-background/90 p-10 text-center shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Template preview</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">{template}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Cart version <span className="font-semibold text-foreground">{version}</span> is not yet wired to a dedicated
          layout. Check back soon!
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

