import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Rocket, Sparkles, Shield } from "lucide-react";
import RetroWordmark from "@/components/retro/RetroWordmark";
import { useAppTheme } from "@/theme/ThemeProvider";

const Index = () => {
  const { theme } = useAppTheme();
  return (
    <main>
      <section className="mb-8">
        <div className="rounded-2xl bg-gradient-primary p-8 shadow-elevated">
{theme === "retro" ? (
            <>
              <h1 className="sr-only">Scorpion UI</h1>
              <RetroWordmark className="w-full max-w-[520px] md:max-w-[640px] text-brand-foreground/90" />
            </>
          ) : (
            <h1 className="text-3xl md:text-4xl font-bold text-brand-foreground tracking-tight">
              Scorpion UI
            </h1>
          )}
          <p className="mt-2 max-w-2xl text-brand-foreground/90">
            A clean, modern layout built with Tailwind CSS and shadcn/ui. Explore the components and start building.
          </p>
          {theme === "retro" ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href="/components">Components</a>
              </Button>
            </div>
          ) : (
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href="/components">Get Started</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/components">Components</a>
              </Button>
            </div>
          )}

        </div>
      </section>

      <section aria-labelledby="features" className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Rocket /> Fast</CardTitle>
            <CardDescription>Optimized for speed and clarity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Built with Vite and modern UI primitives for a delightful developer experience.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Sparkles /> Beautiful</CardTitle>
            <CardDescription>Thoughtful defaults and polish.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Gradient accents, smooth motion, and accessible components out of the box.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Shield /> Accessible</CardTitle>
            <CardDescription>Keyboard and screen reader friendly.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Focus rings, high contrast, and semantic HTML baked in.</p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="try" className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Try the essentials</CardTitle>
            <CardDescription>Button, Input, Badge, and Avatar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Your email</label>
                <div className="flex gap-2">
                  <Input placeholder="you@example.com" aria-label="Email address" />
                  <Button>Subscribe</Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">We care about your data. No spam.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge>New</Badge>
                  <Badge variant="secondary">Beta</Badge>
                  <Badge variant="outline">Info</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback aria-label="Sample user">SU</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sample User</p>
                    <p className="text-xs text-muted-foreground">avatar + fallback</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button size="sm">Default</Button>
                  <Button size="sm" variant="secondary">Secondary</Button>
                  <Button size="sm" variant="outline">Outline</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
            <CardDescription>Helpful resources</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
              <li><a className="text-foreground hover:underline" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">shadcn/ui</a></li>
              <li><a className="text-foreground hover:underline" href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">Tailwind Docs</a></li>
              <li><a className="text-foreground hover:underline" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Vite Guide</a></li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Index;
