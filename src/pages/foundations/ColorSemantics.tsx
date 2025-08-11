import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const ColorSemanticsPage = () => {
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "Color - Semantics · Scorpion UI";
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
            <BreadcrumbItem><BreadcrumbPage>Color - Semantics</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Color - Semantics</h1>
        <p className="text-sm text-muted-foreground">Semantic color meanings and usage patterns</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Status Colors</CardTitle>
            <CardDescription>Colors that convey specific meanings and states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-destructive border"></div>
                <div>
                  <p className="text-sm font-medium">Destructive</p>
                  <p className="text-xs text-muted-foreground">Error states, dangerous actions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-destructive-foreground border"></div>
                <div>
                  <p className="text-sm font-medium">Destructive Foreground</p>
                  <p className="text-xs text-muted-foreground">Text on destructive backgrounds</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Colors</CardTitle>
            <CardDescription>Colors for alerts, status indicators, and user feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: 'hsl(var(--feedback-success))' }}></div>
                <div>
                  <p className="text-sm font-medium">Feedback Success</p>
                  <p className="text-xs text-muted-foreground">Positive feedback and success states</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: 'hsl(var(--feedback-warning))' }}></div>
                <div>
                  <p className="text-sm font-medium">Feedback Warning</p>
                  <p className="text-xs text-muted-foreground">Cautionary notices and warnings</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: 'hsl(var(--feedback-error))' }}></div>
                <div>
                  <p className="text-sm font-medium">Feedback Error</p>
                  <p className="text-xs text-muted-foreground">Error states and critical issues</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border" style={{ backgroundColor: 'hsl(var(--feedback-info))' }}></div>
                <div>
                  <p className="text-sm font-medium">Feedback Info</p>
                  <p className="text-xs text-muted-foreground">Informational messages and neutral states</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Border & Ring Colors</CardTitle>
            <CardDescription>Outline and focus indicator colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-2" style={{ borderColor: 'hsl(var(--border))' }}></div>
                <div>
                  <p className="text-sm font-medium">Border</p>
                  <p className="text-xs text-muted-foreground">Default border color</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-2" style={{ borderColor: 'hsl(var(--input))' }}></div>
                <div>
                  <p className="text-sm font-medium">Input</p>
                  <p className="text-xs text-muted-foreground">Input field borders</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-2" style={{ borderColor: 'hsl(var(--ring))' }}></div>
                <div>
                  <p className="text-sm font-medium">Ring</p>
                  <p className="text-xs text-muted-foreground">Focus ring color</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>How to apply semantic colors effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Error States</h4>
                <p className="text-sm text-muted-foreground">Use destructive colors for form validation errors, delete actions, and critical warnings.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Interactive Elements</h4>
                <p className="text-sm text-muted-foreground">Primary colors for main actions, secondary for supporting actions, accent for hover states.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Content Hierarchy</h4>
                <p className="text-sm text-muted-foreground">Use muted colors for secondary text and subtle backgrounds to create visual hierarchy.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ColorSemanticsPage;