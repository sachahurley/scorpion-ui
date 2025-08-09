import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CardsPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Cards";
  }, []);

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

      <section className="grid gap-6 md:grid-cols-2">
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
    </main>
  );
};

export default CardsPage;
