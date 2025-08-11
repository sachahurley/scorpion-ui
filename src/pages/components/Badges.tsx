import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import { useAppTheme } from "@/theme/ThemeProvider";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const BadgesPage = () => {
  const { theme } = useAppTheme();
  
  useEffect(() => {
    document.title = "Scorpion UI · Components · Badges";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Badge Background", value: "hsl(var(--primary))", description: "Default badge background color" },
    { name: "Badge Foreground", value: "hsl(var(--primary-foreground))", description: "Default badge text color" },
    { name: "Badge Secondary Background", value: "hsl(var(--secondary))", description: "Secondary variant background" },
    { name: "Badge Secondary Foreground", value: "hsl(var(--secondary-foreground))", description: "Secondary variant text color" },
    { name: "Badge Border", value: "hsl(var(--border))", description: "Outline variant border color" },
    { name: "Badge Radius", value: "var(--radius-full)", description: "Rounded corners for pill shape" },
  ];

  return (
    <main className="space-y-6">
      <header aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Badges</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Badges</h1>
        <p className="text-sm text-muted-foreground">Small status indicators and labels</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>Default, Secondary, and Outline styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status indicators</CardTitle>
            <CardDescription>Common use cases for badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="outline">Info</Badge>
              <Badge variant="destructive">Deprecated</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Sizes and usage</CardTitle>
            <CardDescription>Different contexts and sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Feature flags:</span>
                <div className="flex gap-2">
                  <Badge>Enabled</Badge>
                  <Badge variant="outline">Disabled</Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Release status:</span>
                <div className="flex gap-2">
                  <Badge variant="secondary">v2.1.0</Badge>
                  <Badge>Latest</Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Categories:</span>
                <div className="flex gap-2">
                  <Badge variant="outline">UI</Badge>
                  <Badge variant="outline">Components</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive badges</CardTitle>
            <CardDescription>Clickable and hoverable states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Filter tags:</span>
                <div className="flex gap-2">
                  <Badge className="cursor-pointer hover:opacity-80">TypeScript</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:opacity-80">JavaScript</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">CSS</Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Removable:</span>
                <div className="flex gap-2">
                  <Badge className="cursor-pointer hover:opacity-80">React ×</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:opacity-80">Vue ×</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">Angular ×</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Code examples</CardTitle>
            <CardDescription>Copy these patterns into your components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic usage:</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}</code></pre>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">With custom styling:</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Badge className="cursor-pointer hover:opacity-80">
  Clickable
</Badge>`}</code></pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable title="Badge Tokens" tokens={tokens} />
    </main>
  );
};

export default BadgesPage;