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
    { name: "Primary Background", value: "hsl(var(--primary))", description: "Default action button background" },
    { name: "Primary Text", value: "hsl(var(--primary-foreground))", description: "Text color on primary buttons" },
    { name: "Border Radius", value: "var(--radius)", description: "Corner radius for all buttons" },
    { name: "Button Height (default)", value: "var(--btn-h)", description: "Base height for buttons" },
    { name: "Button Height (small)", value: "var(--btn-sm-h)", description: "Small size height (retro: 20% smaller)" },
    { name: "Button Height (large)", value: "var(--btn-lg-h)", description: "Large size height (retro: 20% larger)" },
    { name: "Padding (default)", value: "var(--btn-px) var(--btn-py)", description: "Horizontal and vertical padding" },
    { name: "Padding (small)", value: "var(--btn-sm-px)", description: "Horizontal padding for small buttons" },
    { name: "Padding (large)", value: "var(--btn-lg-px)", description: "Horizontal padding for large buttons" },
    { name: "Focus Ring", value: "hsl(var(--ring))", description: "Outline color for keyboard focus" },
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

        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Small, Default, Large (retro uses 20% delta)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Small</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">Secondary</Button>
                <Button size="sm" variant="outline">Outline</Button>
                <Button size="sm" variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Default</p>
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Large</p>
              <div className="flex flex-wrap gap-2">
                <Button size="lg">Primary</Button>
                <Button size="lg" variant="secondary">Secondary</Button>
                <Button size="lg" variant="outline">Outline</Button>
                <Button size="lg" variant="ghost">Ghost</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

export default ButtonsPage;
