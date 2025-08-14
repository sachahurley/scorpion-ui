import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Rocket, Sparkles, Shield } from "lucide-react";
import RetroWordmark from "@/components/retro/RetroWordmark";
import ScorpionImageV2 from "@/components/retro/display/ScorpionImageV2";
import { useAppTheme } from "@/theme/ThemeProvider";
import { useScrollReset } from "@/hooks/use-scroll-reset";
import { PixelWindLines, PixelRobotHead, PixelPersonWide } from "@/components/retro/icons/PixelIcons";
import VisitorCounter from "@/components/ui/visitor-counter";
import { ASSETS } from "@/lib/assets";

const Index = () => {
  const { theme } = useAppTheme();
  
  // Reset scroll position when navigating to this page
  useScrollReset();
  
  return (
    <main>
      <section className="mb-8">
        <div className="rounded-2xl bg-gradient-primary p-5 sm:p-8 shadow-elevated">
          {theme === "retro" ? (
            <>
              <h1 className="sr-only">Scorpion UI</h1>
              <div className="flex flex-col items-start gap-4 sm:gap-6">
                <ScorpionImageV2 />
                <RetroWordmark className="w-full max-w-[360px] sm:max-w-[520px] md:max-w-[640px] text-brand-foreground/90" />
              </div>
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

      <section aria-labelledby="features" className="grid gap-6 md:grid-cols-3 component-grid">
        <Card>
          <CardHeader>
            <div className="mb-2">
              <span className="inline-block" aria-hidden>
                {theme === "retro" ? (
                  <PixelWindLines className="text-foreground" />
                ) : (
                  <Rocket />
                )}
              </span>
            </div>
            <CardTitle>Fast</CardTitle>
            <CardDescription>Optimized for speed and clarity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Built with Vite and modern UI primitives for a delightful developer experience.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2">
              <span className="inline-block" aria-hidden>
                {theme === "retro" ? (
                  <PixelRobotHead className="text-foreground" />
                ) : (
                  <Sparkles />
                )}
              </span>
            </div>
            <CardTitle>Retro</CardTitle>
            <CardDescription>Nostalgic 8-bit aesthetics, pixel-perfect UI, and vintage game vibes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Gradient accents, smooth motion, and accessible components out of the box.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2">
              <span className="inline-block" aria-hidden>
                {theme === "retro" ? (
                  <PixelPersonWide className="text-foreground" />
                ) : (
                  <Shield />
                )}
              </span>
            </div>
            <CardTitle>Accessible</CardTitle>
            <CardDescription>Keyboard and screen reader friendly.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Focus rings, high contrast, and semantic HTML baked in.</p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="resources" className="mt-8 grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col items-start space-y-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={ASSETS.avatar8bit} alt="Sacha Hurley" />
                <AvatarFallback className="text-lg">SH</AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <a href="https://sacha.cool" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">sacha.cool</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  I created Scorpion UI to learn React, TypeScript, and modern design systems while using as many AI tools as possible to re-invent my design workflow.
                </p>
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

      {/* Visitor counter at bottom of page */}
      <footer className="mt-8 mb-4">
        <div className="flex justify-start">
          <VisitorCounter />
        </div>
      </footer>
    </main>
  );
};

export default Index;
