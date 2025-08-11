import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const BorderRadiusPage = () => {
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "Border Radius · Scorpion UI";
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
            <BreadcrumbItem><BreadcrumbPage>Border Radius</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Border Radius</h1>
        <p className="text-sm text-muted-foreground">Consistent border radius values for rounded corners</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Standard Radius Values</CardTitle>
            <CardDescription>Common border radius sizes used throughout the interface</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: '0px' }}></div>
                <div>
                  <p className="text-sm font-medium">None (0px)</p>
                  <p className="text-xs text-muted-foreground">rounded-none</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: '2px' }}></div>
                <div>
                  <p className="text-sm font-medium">Small (2px)</p>
                  <p className="text-xs text-muted-foreground">rounded-sm</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: '4px' }}></div>
                <div>
                  <p className="text-sm font-medium">Default (4px)</p>
                  <p className="text-xs text-muted-foreground">rounded</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: '6px' }}></div>
                <div>
                  <p className="text-sm font-medium">Medium (6px)</p>
                  <p className="text-xs text-muted-foreground">rounded-md</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: '8px' }}></div>
                <div>
                  <p className="text-sm font-medium">Large (8px)</p>
                  <p className="text-xs text-muted-foreground">rounded-lg</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Special Radius Values</CardTitle>
            <CardDescription>Extended radius values for specific use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 border-2 border-secondary/40" style={{ borderRadius: '12px' }}></div>
                <div>
                  <p className="text-sm font-medium">Extra Large (12px)</p>
                  <p className="text-xs text-muted-foreground">rounded-xl</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 border-2 border-secondary/40" style={{ borderRadius: '16px' }}></div>
                <div>
                  <p className="text-sm font-medium">2XL (16px)</p>
                  <p className="text-xs text-muted-foreground">rounded-2xl</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 border-2 border-secondary/40" style={{ borderRadius: '24px' }}></div>
                <div>
                  <p className="text-sm font-medium">3XL (24px)</p>
                  <p className="text-xs text-muted-foreground">rounded-3xl</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 border-2 border-secondary/40" style={{ borderRadius: '50%' }}></div>
                <div>
                  <p className="text-sm font-medium">Full (50%)</p>
                  <p className="text-xs text-muted-foreground">rounded-full</p>
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
            <CardDescription>When to use different border radius values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Small Elements</h4>
                <p className="text-sm text-muted-foreground">Use smaller radius (2-4px) for badges, small buttons, and form inputs.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Cards & Panels</h4>
                <p className="text-sm text-muted-foreground">Medium radius (6-8px) works well for cards, modals, and content panels.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Large Components</h4>
                <p className="text-sm text-muted-foreground">Larger radius (12-16px) for hero sections, large cards, and prominent elements.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Circular Elements</h4>
                <p className="text-sm text-muted-foreground">Use rounded-full for avatars, circular buttons, and pill-shaped elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default BorderRadiusPage;