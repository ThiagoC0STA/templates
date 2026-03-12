import type { TemplateSelection } from "./index";

export function buildTemplatePath(
  selection: TemplateSelection,
  path: string,
  extraParams?: Record<string, string | undefined>,
): string {
  const url = new URL(path, "https://example.com");
  const params = url.searchParams;

  params.set("template", selection.templateId);
  params.set("version", selection.versionId);

  if (extraParams) {
    for (const [key, value] of Object.entries(extraParams)) {
      if (typeof value === "string") {
        params.set(key, value);
      }
    }
  }

  const search = params.toString();
  const hash = url.hash ?? "";

  return `${url.pathname}${search ? `?${search}` : ""}${hash}`;
}

