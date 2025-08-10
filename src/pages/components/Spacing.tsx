import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const sizes = [0,4,8,12,16,20,24,32,40,48,56,64,80,96,112,128,144,160,192,224,256] as const;

const SpacingDocsPage = () => {
  useEffect(() => { document.title = "Scorpion UI · Components · Spacing"; }, []);

  const tokens: TokenRow[] = sizes.map((s) => ({
    name: `Space ${s}`,
    value: `var(--space-${s})`,
    description: `${s}px spacing token`
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
            <BreadcrumbItem><BreadcrumbPage>Spacing</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Spacing</h1>
        <p className="text-sm text-muted-foreground">4px scale tokens; use via CSS vars with Tailwind arbitrary values</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Inline examples</CardTitle>
            <CardDescription>Using Tailwind arbitrary values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-[var(--space-16)]">p-[var(--space-16)]</div>
              <div className="border rounded-md px-[var(--space-24)] py-[var(--space-12)]">px-[var(--space-24)] py-[var(--space-12)]</div>
              <div className="border rounded-md grid gap-[var(--space-20)] grid-cols-3">
                <div className="h-8 bg-muted rounded" />
                <div className="h-8 bg-muted rounded" />
                <div className="h-8 bg-muted rounded" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spacer utility</CardTitle>
            <CardDescription>Use a div with height set to a spacing token</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-4">
              <div className="h-6 bg-muted rounded" />
              <div className="h-[var(--space-24)]" />
              <div className="h-6 bg-muted rounded" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Example: className="h-[var(--space-24)]"</p>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable title="Spacing Tokens" tokens={tokens} />
    </main>
  );
};

export default SpacingDocsPage;
