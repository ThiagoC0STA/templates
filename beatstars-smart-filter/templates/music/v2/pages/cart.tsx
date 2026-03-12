import { Card, CardContent } from "@/components/ui/card";
import type { TemplateSelection } from "@/lib/templates";

export function MusicTemplateV2Cart({ selection }: { selection: TemplateSelection }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-24 text-center">
      <Card className="border border-purple-400/20 bg-background/80 p-10 shadow-lg">
        <CardContent className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">Cart • Version 2</p>
          <h1 className="text-3xl font-semibold text-foreground">Cart experience coming soon</h1>
          <p className="text-sm text-muted-foreground">
            We are assembling an upgraded checkout flow with bundles, upsells, and a refreshed payment summary for{" "}
            <span className="font-semibold text-foreground">
              {selection.templateId.toUpperCase()} V{selection.versionId.slice(-1)}
            </span>
            . Stay tuned!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}


