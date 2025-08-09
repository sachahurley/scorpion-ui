import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";

const ButtonsPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Buttons";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Primary Background", value: "hsl(var(--primary))" },
    { name: "Primary Text", value: "hsl(var(--primary-foreground))" },
    { name: "Border Radius", value: "var(--radius)" },
    { name: "Button Padding", value: "0.5rem 0.75rem (size dependent)" },
    { name: "Focus Ring", value: "hsl(var(--ring))" },
    { name: "Hover Background (secondary)", value: "hsl(var(--secondary))" },
    { name: "Disabled Opacity", value: "50%" },
    { name: "Text Weight (retro)", value: "400" },
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
            <BreadcrumbItem><BreadcrumbPage>Buttons</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Button Variants</h1>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>All available button styles</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

export default ButtonsPage;
