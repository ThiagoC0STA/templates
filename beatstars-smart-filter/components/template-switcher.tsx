'use client';

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTemplate } from "@/components/template-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, Sparkles } from "lucide-react";

export function TemplateSwitcher() {
  const { template, version, setTemplate, isNavigating } = useTemplate();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Template</p>
          <p className="text-sm font-semibold text-foreground">{template.label}</p>
        </div>
        <Badge variant="outline" className="rounded-full border-purple-400/40 bg-purple-500/15 text-xs text-purple-100">
          {version.label}
        </Badge>
      </div>

      <Button
        size="sm"
        className="flex items-center gap-2 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-500 to-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <LayoutGrid className="h-4 w-4" />
        {isOpen ? "Close template switcher" : "Switch template"}
      </Button>

      {isOpen ? (
        <Card className="w-[320px] border border-border/50 bg-background/95 p-4 shadow-2xl backdrop-blur">
          <header className="mb-4 space-y-1 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {template.label}
            </p>
            <p className="text-xs text-muted-foreground">
              Change versions on the fly. Use the gallery to switch templates.
            </p>
          </header>
          <div className="space-y-2">
            {template.versions.map((candidateVersion) => {
              const isActive = candidateVersion.id === version.id;

              return (
                <Button
                  key={`${template.id}-${candidateVersion.id}`}
                  variant="outline"
                  className={cn(
                    "w-full justify-between border-border/30 text-xs",
                    isActive
                      ? "border-purple-400/60 bg-purple-500/20 text-purple-100"
                      : "bg-background text-muted-foreground hover:bg-muted/20",
                  )}
                  disabled={isActive || isNavigating}
                  onClick={() =>
                    setTemplate({ templateId: template.id, versionId: candidateVersion.id })
                  }
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-purple-300" />
                    {candidateVersion.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {isActive ? "active" : "preview"}
                  </span>
                </Button>
              );
            })}
          </div>
          <footer className="mt-4 text-right">
            <Button variant="link" className="px-0 text-xs" asChild>
              <Link href="/?view=gallery">Back to gallery</Link>
            </Button>
          </footer>
        </Card>
      ) : null}
    </div>
  );
}

