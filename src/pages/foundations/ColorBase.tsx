import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const ColorBasePage = () => {
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "Color - Base · Scorpion UI";
  }, []);

  return (
    <main className="space-y-6">
      <header aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/foundations">Foundations</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Color - Base</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Color - Base</h1>
        <p className="text-sm text-muted-foreground">Base color palette and color system foundations</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Primary Colors</CardTitle>
            <CardDescription>Core brand colors used throughout the interface</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary border"></div>
                <div>
                  <p className="text-sm font-medium">Primary</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--primary))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Primary Foreground</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--primary-foreground))</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secondary Colors</CardTitle>
            <CardDescription>Supporting colors for secondary actions and elements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary border"></div>
                <div>
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--secondary))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Secondary Foreground</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--secondary-foreground))</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Neutral Colors</CardTitle>
            <CardDescription>Background and text colors for general content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-background border"></div>
                <div>
                  <p className="text-sm font-medium">Background</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--background))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Foreground</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--foreground))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-muted border"></div>
                <div>
                  <p className="text-sm font-medium">Muted</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--muted))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-muted-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Muted Foreground</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--muted-foreground))</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Colors</CardTitle>
            <CardDescription>Colors for interactive states and elements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent border"></div>
                <div>
                  <p className="text-sm font-medium">Accent</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--accent))</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Accent Foreground</p>
                  <p className="text-xs text-muted-foreground">hsl(var(--accent-foreground))</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ColorBasePage;