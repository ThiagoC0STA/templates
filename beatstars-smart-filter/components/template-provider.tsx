'use client';

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DEFAULT_TEMPLATE_SELECTION,
  TEMPLATE_REGISTRY,
  getTemplateDefinition,
  getTemplateVersionDefinition,
  resolveTemplateSelection,
  type TemplateDefinition,
  type TemplateSelection,
  type TemplateVersionDefinition,
} from "@/lib/templates";
import { buildTemplatePath } from "@/lib/templates/paths";

type TemplateContextValue = {
  selection: TemplateSelection;
  template: TemplateDefinition;
  version: TemplateVersionDefinition;
  setSelection: Dispatch<SetStateAction<TemplateSelection>>;
  setTemplate: (selection: TemplateSelection) => void;
  availableTemplates: TemplateDefinition[];
  isNavigating: boolean;
  buildPath: (path: string, extraParams?: Record<string, string>) => string;
};

const TemplateContext = createContext<TemplateContextValue | undefined>(undefined);

export function TemplateProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [selection, setSelection] = useState<TemplateSelection>(DEFAULT_TEMPLATE_SELECTION);
  const [isNavigating, startTransition] = useTransition();

  useEffect(() => {
    const nextSelection = resolveTemplateSelection(
      searchParams.get("template"),
      searchParams.get("version"),
    );

    setSelection((current) => {
      if (
        current.templateId === nextSelection.templateId &&
        current.versionId === nextSelection.versionId
      ) {
        return current;
      }

      return nextSelection;
    });
  }, [searchParams]);

  const template = useMemo(() => getTemplateDefinition(selection), [selection]);
  const version = useMemo(() => getTemplateVersionDefinition(selection), [selection]);

  const setTemplate = (nextSelection: TemplateSelection) => {
    setSelection(nextSelection);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      params.set("template", nextSelection.templateId);
      params.set("version", nextSelection.versionId);

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const buildPath = (path: string, extraParams?: Record<string, string>) =>
    buildTemplatePath(selection, path, extraParams);

  const value = useMemo(
    () => ({
      selection,
      template,
      version,
      setTemplate,
      setSelection,
      availableTemplates: TEMPLATE_REGISTRY,
      isNavigating,
      buildPath,
    }),
    [selection, template, version, isNavigating],
  );

  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
}

export function useTemplate() {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }

  return context;
}

