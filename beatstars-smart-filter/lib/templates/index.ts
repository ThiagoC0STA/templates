export type TemplateId = "music";
export type TemplateVersionId = "v1" | "v2";

export type TemplateVersionDefinition = {
  id: TemplateVersionId;
  label: string;
  description: string;
  previewImage?: string;
  notes?: string;
};

export type TemplateDefinition = {
  id: TemplateId;
  label: string;
  category: string;
  tagline: string;
  description: string;
  previewImage: string;
  versions: TemplateVersionDefinition[];
  homePath?: string;
  features?: string[];
  actions?: {
    label: string;
    href: string;
  }[];
};

export type TemplateSelection = {
  templateId: TemplateId;
  versionId: TemplateVersionId;
};

const MUSIC_TEMPLATE: TemplateDefinition = {
  id: "music",
  label: "TriuneBeats Music Marketplace",
  category: "Music",
  tagline: "AI-powered beat marketplace for modern producers and artists.",
  description:
    "Discover, license, and record over curated instrumentals with AI-assisted filtering, collaborative tools, and instant delivery.",
  previewImage: "/placeholder.svg",
  homePath: "/",
  features: [
    "AI-powered beat matching",
    "Virtual recording booth",
    "Collaborative community feed",
    "Commerce-ready pricing tiers",
  ],
  actions: [
    { label: "Preview template", href: "/?template=music&version=v1" },
    { label: "Launch booth", href: "/booth" },
  ],
  versions: [
    {
      id: "v1",
      label: "Version 1",
      description:
        "Original TriuneBeats experience with smart filter, virtual booth, and commerce flow.",
      previewImage: "/placeholder.svg",
    },
    {
      id: "v2",
      label: "Version 2",
      description:
        "Remixed layout with high-contrast hero, feature highlights, and an action-heavy CTA stack.",
      previewImage: "/placeholder.svg",
    },
  ],
};

export const TEMPLATE_REGISTRY: TemplateDefinition[] = [MUSIC_TEMPLATE];

export const DEFAULT_TEMPLATE_SELECTION: TemplateSelection = {
  templateId: TEMPLATE_REGISTRY[0].id,
  versionId: TEMPLATE_REGISTRY[0].versions[0].id,
};

export function resolveTemplateSelection(
  templateId?: string | null,
  versionId?: string | null
): TemplateSelection {
  const template =
    TEMPLATE_REGISTRY.find((definition) => definition.id === templateId) ??
    TEMPLATE_REGISTRY[0];

  const version =
    template.versions.find((definition) => definition.id === versionId) ??
    template.versions[0];

  return { templateId: template.id, versionId: version.id };
}

export function getTemplateDefinition(
  selection: TemplateSelection
): TemplateDefinition {
  const template =
    TEMPLATE_REGISTRY.find(
      (definition) => definition.id === selection.templateId
    ) ?? TEMPLATE_REGISTRY[0];

  return template;
}

export function getTemplateVersionDefinition(
  selection: TemplateSelection
): TemplateVersionDefinition {
  const template = getTemplateDefinition(selection);

  const version =
    template.versions.find(
      (definition) => definition.id === selection.versionId
    ) ?? template.versions[0];

  return version;
}
