import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";

const CardsPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Cards";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Card Background", value: "hsl(var(--card))" },
    { name: "Card Text", value: "hsl(var(--card-foreground))" },
    { name: "Border Color", value: "hsl(var(--border))" },
    { name: "Border Radius", value: "var(--radius)" },
    { name: "Shadow", value: "var(--shadow-elevated)" },
    { name: "Card Padding", value: "1rem - 1.5rem (section dependent)" },
  ];

  return (
    <main className="space-y-6">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Cards</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Cards</h1>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Supporting description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Use cards to group related content and actions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
            <CardDescription>With consistent spacing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Cards follow the design tokens for both themes.</p>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

export default CardsPage;
