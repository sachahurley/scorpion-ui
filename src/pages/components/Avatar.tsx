import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const AvatarPage = () => {
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "Avatar · Scorpion UI";
  }, []);

  return (
    <main className="space-y-6">
      <header aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Avatar</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Avatar</h1>
        <p className="text-sm text-muted-foreground">User profile images with fallback support</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Basic Avatars</CardTitle>
            <CardDescription>Simple avatar with fallback text</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar Sizes</CardTitle>
            <CardDescription>Different sizes for various use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback>LG</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">XL</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>With Images</CardTitle>
            <CardDescription>Avatars with profile images and fallbacks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/avatar_8bit.png" alt="8-bit avatar" />
                <AvatarFallback>8B</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatar-profile-2.png" alt="Profile avatar" />
                <AvatarFallback>P2</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="Broken" />
                <AvatarFallback>FB</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Lists</CardTitle>
            <CardDescription>Avatars in list format with names</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Sample User</p>
                  <p className="text-xs text-muted-foreground">user@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Alice Brown</p>
                  <p className="text-xs text-muted-foreground">alice@example.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Code Examples</CardTitle>
            <CardDescription>Copy these patterns into your components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Avatar:</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Avatar>
  <AvatarFallback>SU</AvatarFallback>
</Avatar>`}</code></pre>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">With Image:</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Avatar>
  <AvatarImage src="/avatar_8bit.png" alt="8-bit avatar" />
  <AvatarFallback>8B</AvatarFallback>
</Avatar>`}</code></pre>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Custom Size:</h4>
                <pre className="text-xs p-3 rounded-md border bg-card overflow-x-auto"><code>{`<Avatar className="h-12 w-12">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`}</code></pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default AvatarPage;