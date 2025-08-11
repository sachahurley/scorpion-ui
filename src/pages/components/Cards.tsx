import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardImage } from "@/components/ui/card";
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
      <p className="text-sm text-muted-foreground">Flexible content containers with optional image headers</p>

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

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardImage>
            <img 
              src="/landscape-1.png" 
              alt="Landscape view 1" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader>
            <CardTitle>Landscape Card</CardTitle>
            <CardDescription>Cards with landscape images</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use CardImage above CardHeader to create cards with visual headers. 
              The image automatically rounds the top corners to match the card design.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardImage>
            <img 
              src="/landscape-2.png" 
              alt="Landscape view 2" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader>
            <CardTitle>Scenic Views</CardTitle>
            <CardDescription>Full aspect ratio preserved</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CardImage component provides a consistent image container that 
              integrates seamlessly with the existing card structure without cropping.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-3 component-grid">
        <Card>
          <CardImage>
            <img 
              src="/landscape-4.png" 
              alt="Landscape view 4" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle>Nature Scene</CardTitle>
            <CardDescription>Landscape photography</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardImage>
            <img 
              src="/landscape-5.png" 
              alt="Landscape view 5" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle>Mountain Vista</CardTitle>
            <CardDescription>Scenic landscape</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardImage>
            <img 
              src="/landscape-1.png" 
              alt="Landscape view 1" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle>Horizon View</CardTitle>
            <CardDescription>Wide landscape</CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="grid gap-6 component-grid">
        <Card>
          <CardImage>
            <img 
              src="/landscape-6.png" 
              alt="Landscape view 6" 
              className="w-full h-auto object-contain" 
            />
          </CardImage>
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>How to use CardImage component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Full Aspect Ratio (No Cropping):</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Card>
  <CardImage>
    <img src="/landscape-1.png" alt="Description" className="w-full h-auto object-contain" />
  </CardImage>
  <CardHeader>
    <CardTitle>Your Title</CardTitle>
    <CardDescription>Your description</CardDescription>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>`}</code></pre>
              </div>
              <div>
                <h4 className="font-medium mb-2">Key Properties:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><code className="bg-muted px-1 rounded">h-auto</code> - Maintains original aspect ratio</li>
                  <li><code className="bg-muted px-1 rounded">object-contain</code> - Shows full image without cropping</li>
                  <li><code className="bg-muted px-1 rounded">w-full</code> - Scales to container width</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

export default CardsPage;
