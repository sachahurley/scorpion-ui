import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const levels = [1,2,3,4,5,6] as const;

const ElevationDocsPage = () => {
  useEffect(() => { document.title = "Scorpion UI · Components · Elevation"; }, []);

  const tokens: TokenRow[] = levels.map((l) => ({
    name: `Elevation ${l}`,
    value: `var(--elevation-${l})`,
    description: `Drop shadow level ${l} (higher = more depth)`
  }));

  return (
    <main className="space-y-6">
      <header aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Elevation</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Elevation</h1>
        <p className="text-sm text-muted-foreground">Six levels of depth using layered shadows</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3 component-grid">
        {levels.map((l) => (
          <Card key={l} className={`shadow-e${l}`}>
            <CardHeader>
              <CardTitle>Level {l}</CardTitle>
              <CardDescription>Use for {l <= 2 ? "subtle emphasis" : l <= 4 ? "cards & popovers" : "modals & overlays"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">Class: <code>{`shadow-e${l}`}</code></div>
            </CardContent>
          </Card>
        ))}
      </section>

      <DesignTokensTable title="Elevation Tokens" tokens={tokens} />
    </main>
  );
};

export default ElevationDocsPage;
