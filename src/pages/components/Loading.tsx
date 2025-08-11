import { useEffect, useMemo, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import PixelSpinner from "@/components/retro/display/PixelSpinner";
import PixelScorpion from "@/components/retro/display/PixelScorpion";
import { CircularProgress } from "@/components/retro/display/CircularProgress";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";

export default function LoadingPage() {
  const [overlay, setOverlay] = useState(false);
  const [componentLoading, setComponentLoading] = useState(false);
  const [duration, setDuration] = useState(1200);
  const [progress, setProgress] = useState(35);

  useEffect(() => { document.title = "Scorpion UI · Components · Loading"; }, []);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 5)), 500);
    return () => clearInterval(t);
  }, []);

  const tokens: TokenRow[] = useMemo(() => ([
    { name: "Animation Easing", value: "var(--feedback-ease)" },
    { name: "Default Duration", value: "var(--feedback-duration) (0.25s)" },
    { name: "Slow Duration", value: "2s (anim-speed-slow)" },
    { name: "Fast Duration", value: "0.6s (anim-speed-fast)" },
    { name: "Spinner Sizes", value: "16px, 24px, 40px, 56px" },
    { name: "Colors", value: "hsl(var(--brand)), hsl(var(--brand-glow)), hsl(var(--fire-yellow))" },
    { name: "Overlay Backdrop", value: "hsl(var(--foreground) / 0.15)" },
    { name: "Message Type", value: "type-small (Fira Code)" },
  ]), []);

  const startOverlay = () => {
    setOverlay(true);
    setTimeout(() => setOverlay(false), duration);
  };

  const startComponentLoad = () => {
    setComponentLoading(true);
    setTimeout(() => setComponentLoading(false), duration);
  };

  return (
    <main className="space-y-6">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Loading</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Loading Components</h1>

      {/* Controls */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Controls</CardTitle>
            <CardDescription>Adjust demo duration and trigger states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="dur" className="text-sm whitespace-nowrap">Duration (ms)</label>
              <input id="dur" type="number" min={200} step={100} value={duration} onChange={(e) => setDuration(parseInt(e.target.value || "0", 10))} className="h-9 w-32 min-w-0 rounded-md border bg-background px-2 text-sm" />
              <Button size="sm" onClick={startOverlay} className="w-full sm:w-auto">Full-page overlay</Button>
              <Button size="sm" variant="outline" onClick={startComponentLoad} className="w-full sm:w-auto">Component loading</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8‑bit Scorpion</CardTitle>
            <CardDescription>Signature retro loading mascot</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-6">
            <PixelScorpion size={56} />
            <PixelScorpion size={40} className="anim-speed-fast" />
            <PixelScorpion size={72} className="anim-speed-slow" />
          </CardContent>
        </Card>
      </section>

      {/* Spinners & Skeletons */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Retro Spinners</CardTitle>
            <CardDescription>Pixel grid animation styles</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <PixelSpinner size={16} />
            <PixelSpinner size={24} />
            <PixelSpinner size={40} className="anim-speed-fast" />
            <PixelSpinner size={56} className="anim-speed-slow" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skeletons</CardTitle>
            <CardDescription>8‑bit aesthetic placeholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-3 gap-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /></div>
            <div className="space-y-2"><Skeleton className="h-4 w-2/3" /><Skeleton className="h-4 w-1/2" /></div>
          </CardContent>
        </Card>
      </section>

      {/* Progress */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Progress Bars</CardTitle>
            <CardDescription>Linear and circular styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progress} />
            <CircularProgress value={progress} label={`${progress}%`} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Loading</CardTitle>
            <CardDescription>Inline spinners and disabled state</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button disabled aria-busy className="inline-flex items-center gap-2"><PixelSpinner size={16} />Saving…</Button>
            <Button variant="secondary" disabled className="inline-flex items-center gap-2"><PixelSpinner size={16} />Processing</Button>
            <Button variant="outline" disabled className="inline-flex items-center gap-2"><PixelSpinner size={16} />Loading</Button>
          </CardContent>
        </Card>
      </section>

      {/* Overlays */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Loading Overlay</CardTitle>
            <CardDescription>Block interaction while loading</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative rounded-md border p-6">
              <p className="text-sm text-muted-foreground">This area simulates content that loads.</p>
              {componentLoading && (
                <div role="status" aria-live="polite" className="absolute inset-0 grid place-items-center bg-foreground/10 backdrop-blur-[1px]">
                  <div className="flex flex-col items-center gap-3">
                    <PixelSpinner size={24} />
                    <div className="type-small text-muted-foreground">Fetching data…</div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Page Transition</CardTitle>
            <CardDescription>Simulated full‑page loader</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Button onClick={startOverlay}>Simulate navigation</Button>
              <span className="type-small text-muted-foreground">Uses {duration}ms timeout.</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />
      <DesignTokensTable tokens={tokens} />

      {/* Full-page overlay demo */}
      {overlay && (
        <div role="status" aria-live="assertive" className="fixed inset-0 z-[100] grid place-items-center bg-foreground/20 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <PixelScorpion size={72} />
            <div className="type-small text-muted-foreground">Loading page…</div>
          </div>
        </div>
      )}
    </main>
  );
}
