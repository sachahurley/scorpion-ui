import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import CircularProgress from "@/components/retro/display/CircularProgress";
import PixelSpinner from "@/components/retro/display/PixelSpinner";
import { useAppTheme } from "@/theme/ThemeProvider";
import { PixelCheck, PixelInfo } from "@/components/retro/icons/PixelIcons";

const FeedbackPage = () => {
  const { theme } = useAppTheme();
  const [value, setValue] = useState(40);
  useEffect(() => { document.title = "Scorpion UI · Components · Feedback"; }, []);

  const tokenRows: TokenRow[] = [
    { name: "Success Color", value: "hsl(var(--feedback-success))", description: "Positive feedback elements" },
    { name: "Warning Color", value: "hsl(var(--feedback-warning))", description: "Cautionary notices and warnings" },
    { name: "Error Color", value: "hsl(var(--feedback-error))", description: "Errors and destructive actions" },
    { name: "Info Color", value: "hsl(var(--feedback-info))", description: "Informational messages" },
    { name: "Animation Easing", value: "var(--feedback-ease)", description: "Default easing for feedback animations" },
    { name: "Animation Duration", value: "var(--feedback-duration)", description: "Default duration for feedback animations" },
    { name: "Corner Radius", value: "var(--radius)", description: "Rounded corners on feedback surfaces" },
  ];

  return (
    <main className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Feedback</h1>
        <p className="text-sm text-muted-foreground">Alerts, toasts, progress, loading, and status patterns</p>
      </header>

      {/* Alerts */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Success, warning, error, info (dismissible and persistent)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-[3px]" style={{ borderColor: theme === 'retro' ? `hsl(var(--feedback-success))` : undefined }}>
              <AlertTitle className="flex items-center gap-2">{theme === 'retro' ? <PixelCheck className="h-4 w-4" /> : null} Success</AlertTitle>
              <AlertDescription>Action completed successfully.</AlertDescription>
            </Alert>
            <Alert className="border-[3px]" style={{ borderColor: theme === 'retro' ? `hsl(var(--feedback-warning))` : undefined }}>
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Something needs your attention.</AlertDescription>
            </Alert>
            <Alert className="border-[3px]" style={{ borderColor: theme === 'retro' ? `hsl(var(--feedback-error))` : undefined }}>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>There was a problem with your request.</AlertDescription>
            </Alert>
            <Alert className="border-[3px]" style={{ borderColor: theme === 'retro' ? `hsl(var(--feedback-info))` : undefined }}>
              <AlertTitle className="flex items-center gap-2">{theme === 'retro' ? <PixelInfo className="h-4 w-4" /> : null} Info</AlertTitle>
              <AlertDescription>Heads up — this is important.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Toasts */}
        <Card>
          <CardHeader>
            <CardTitle>Toasts</CardTitle>
            <CardDescription>Variants and positions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => toast.success("Saved!")}>Success</Button>
              <Button onClick={() => toast.message("Heads up", { description: "Some info for you" })}>Info</Button>
              <Button onClick={() => toast.warning("Careful!")}>Warning</Button>
              <Button variant="destructive" onClick={() => toast.error("Error occurred")}>Error</Button>
            </div>
            <p className="text-xs text-muted-foreground">To change position, pass <code>position</code> to the Toaster in App.tsx.</p>
          </CardContent>
        </Card>
      </section>

      {/* Progress */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Linear Progress</CardTitle>
            <CardDescription>Determinate and indeterminate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Progress value={value} />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setValue((v) => Math.max(0, v - 10))}>-10%</Button>
              <Button size="sm" onClick={() => setValue((v) => Math.min(100, v + 10))}>+10%</Button>
            </div>
            <div className="h-2 rounded bg-muted overflow-hidden">
              <div className="h-full w-1/3 bg-foreground animate-pulse" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Circular Progress</CardTitle>
            <CardDescription>8‑bit radial indicator</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <CircularProgress value={value} size={72} />
            <CircularProgress value={66} size={72} />
          </CardContent>
        </Card>
      </section>

      {/* Loading states */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Skeletons & Spinners</CardTitle>
            <CardDescription>Pixel spinner and content placeholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <PixelSpinner />
              <PixelSpinner size={32} />
              <Button disabled className="inline-flex items-center gap-2">
                <PixelSpinner size={16} /> Loading
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Overlay</CardTitle>
            <CardDescription>Blocking loading state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-40 border rounded-md">
              <div className="absolute inset-0 bg-background/80 grid place-items-center">
                <PixelSpinner size={28} />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Status */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Status indicators</CardTitle>
            <CardDescription>Badges, dots, and chips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: `hsl(var(--feedback-success))` }} />
              <span className="text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: `hsl(var(--feedback-warning))` }} />
              <span className="text-sm">Away</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: `hsl(var(--feedback-error))` }} />
              <span className="text-sm">Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: `hsl(var(--feedback-info))` }} />
              <span className="text-sm">Idle</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="outline">Info</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Tokens</CardTitle>
            <CardDescription>Copy any token with one click</CardDescription>
          </CardHeader>
          <CardContent>
            <DesignTokensTable title="Feedback Tokens" tokens={tokenRows} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default FeedbackPage;
