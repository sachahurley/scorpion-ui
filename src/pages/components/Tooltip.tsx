import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip"; // for non-retro fallback provider
import RetroTooltip, { RetroTooltipContent, RetroTooltipTrigger, RetroTooltipProvider } from "@/components/retro/display/Tooltip";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import { useAppTheme } from "@/theme/ThemeProvider";
import { PixelInfo } from "@/components/retro/icons/PixelIcons";

const TooltipDocsPage = () => { const { theme } = useAppTheme();
  useEffect(() => { document.title = "Scorpion UI · Components · Tooltip"; }, []);

  const tokens: TokenRow[] = [
    { name: "Tooltip Background", value: "hsl(var(--popover))", description: "Surface color for tooltip content" },
    { name: "Tooltip Foreground", value: "hsl(var(--popover-foreground))", description: "Text/icon color inside tooltip" },
    { name: "Tooltip Border", value: "hsl(var(--border))", description: "Outline around tooltip box" },
    { name: "Tooltip Shadow", value: "var(--elevation-3)", description: "Default drop shadow value (level 3)", copy: "var(--elevation-3)" },
    { name: "Tooltip Radius", value: "var(--radius)", description: "Corner radius (8px in retro)" },
  ];

  return (
    <main className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-sm text-muted-foreground">Directional arrows, smart collision, keyboard/focus accessible</p>
      </header>

      <RetroTooltipProvider>
        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Directional variants</CardTitle>
              <CardDescription>Top, Right, Bottom, Left</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <RetroTooltip>
                  <RetroTooltipTrigger asChild>
                    <Button variant="secondary">Top</Button>
                  </RetroTooltipTrigger>
                  <RetroTooltipContent side="top">Tooltip on top</RetroTooltipContent>
                </RetroTooltip>
                <RetroTooltip>
                  <RetroTooltipTrigger asChild>
                    <Button variant="secondary">Right</Button>
                  </RetroTooltipTrigger>
                  <RetroTooltipContent side="right">Tooltip on right</RetroTooltipContent>
                </RetroTooltip>
                <RetroTooltip>
                  <RetroTooltipTrigger asChild>
                    <Button variant="secondary">Bottom</Button>
                  </RetroTooltipTrigger>
                  <RetroTooltipContent side="bottom">Tooltip on bottom</RetroTooltipContent>
                </RetroTooltip>
                <RetroTooltip>
                  <RetroTooltipTrigger asChild>
                    <Button variant="secondary">Left</Button>
                  </RetroTooltipTrigger>
                  <RetroTooltipContent side="left">Tooltip on left</RetroTooltipContent>
                </RetroTooltip>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automatic positioning</CardTitle>
              <CardDescription>Move buttons near edges to see flipping</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 w-full border rounded-md p-3 grid grid-cols-3 grid-rows-3 place-items-center">
                {[
                  "tl","tc","tr",
                  "cl","cc","cr",
                  "bl","bc","br"
                ].map((key) => (
                  <div key={key} className="w-full h-full flex items-center justify-center">
                    <RetroTooltip>
                      <RetroTooltipTrigger asChild>
                        <Button size="sm">{key.toUpperCase()}</Button>
                      </RetroTooltipTrigger>
                      <RetroTooltipContent side="top" align="center" collisionPadding={8}>
                        I flip if there's no space
                      </RetroTooltipContent>
                    </RetroTooltip>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </RetroTooltipProvider>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content types</CardTitle>
            <CardDescription>Text, icons, and multi-line</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <RetroTooltip>
                <RetroTooltipTrigger asChild>
<Button variant="outline">{theme === 'retro' ? <PixelInfo className="mr-2 h-4 w-4" /> : null} With icon</Button>
                </RetroTooltipTrigger>
                <RetroTooltipContent>Extra info with icon trigger.</RetroTooltipContent>
              </RetroTooltip>
              <RetroTooltip>
                <RetroTooltipTrigger asChild>
                  <Button variant="outline">Multi‑line</Button>
                </RetroTooltipTrigger>
                <RetroTooltipContent className="max-w-xs">
                  This tooltip demonstrates multi‑line content with wrapping. Keyboard users can focus the trigger to show this too.
                </RetroTooltipContent>
              </RetroTooltip>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Code snippets</CardTitle>
            <CardDescription>Use these patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<RetroTooltip>
  <RetroTooltipTrigger asChild>
    <Button>Hover or focus me</Button>
  </RetroTooltipTrigger>
  <RetroTooltipContent side="top">Top tooltip</RetroTooltipContent>
</RetroTooltip>`}</code></pre>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable title="Tooltip Tokens" tokens={tokens} />
    </main>
  );
};

export default TooltipDocsPage;
