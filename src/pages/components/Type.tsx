import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import { cn } from "@/lib/utils";

const TypePage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Type";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Heading 1 Size", value: "var(--font-size-7)" },
    { name: "Heading 2 Size", value: "var(--font-size-5)" },
    { name: "Heading 3 Size", value: "var(--font-size-4)" },
    { name: "Body Size", value: "var(--font-size-0)" },
    { name: "Small Text Size", value: "var(--font-size-1b)" },
    { name: "Large Text Size", value: "var(--font-size-2)" },
    { name: "Tight Line Height", value: "var(--line-height-tight)" },
    { name: "Normal Line Height", value: "var(--line-height-normal)" },
    { name: "Relaxed Line Height", value: "var(--line-height-relaxed)" },
    { name: "Heading Weight (retro)", value: "400" },
    { name: "Font Family", value: "'Fira Code', ui-monospace, monospace" },
  ];

  const codeProps = `:root {
  --font-size-2b: 0.75rem;
  --font-size-1b: 0.875rem;
  --font-size-0: 1rem;
  --font-size-1: 1.125rem;
  --font-size-2: 1.265rem;
  --font-size-3: 1.424rem;
  --font-size-4: 1.602rem;
  --font-size-5: 1.802rem;
  --font-size-6: 2.027rem;
  --font-size-7: 2.281rem;

  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.8;
}

/* Typography classes (letter-spacing normalized) */
.type-theme { font-family: 'Fira Code', ui-monospace, monospace; letter-spacing: normal; }
.type-h1 { font-size: var(--font-size-7); line-height: var(--line-height-tight); font-weight: 400; }
.type-h2 { font-size: var(--font-size-5); line-height: var(--line-height-tight); font-weight: 400; }
.type-h3 { font-size: var(--font-size-4); line-height: var(--line-height-normal); font-weight: 400; }
.type-body { font-size: var(--font-size-0); line-height: var(--line-height-normal); font-weight: 400; }
.type-small { font-size: var(--font-size-1b); line-height: var(--line-height-normal); font-weight: 400; }
.type-large { font-size: var(--font-size-2); line-height: var(--line-height-relaxed); font-weight: 400; }`;

  const specimen = [
    { label: "--font-size-2b", cls: "text-[length:var(--font-size-2b)]" },
    { label: "--font-size-1b", cls: "text-[length:var(--font-size-1b)]" },
    { label: "--font-size-0", cls: "text-[length:var(--font-size-0)]" },
    { label: "--font-size-1", cls: "text-[length:var(--font-size-1)]" },
    { label: "--font-size-2", cls: "text-[length:var(--font-size-2)]" },
    { label: "--font-size-3", cls: "text-[length:var(--font-size-3)]" },
    { label: "--font-size-4", cls: "text-[length:var(--font-size-4)]" },
    { label: "--font-size-5", cls: "text-[length:var(--font-size-5)]" },
    { label: "--font-size-6", cls: "text-[length:var(--font-size-6)]" },
    { label: "--font-size-7", cls: "text-[length:var(--font-size-7)]" },
  ];

  return (
    <main className="space-y-6 type-theme">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Type</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Typography System</h1>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Hierarchy</CardTitle>
            <CardDescription>Live heading and text examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="type-h1">Heading One – Bold statement</div>
            <div className="type-h2">Heading Two – Section title</div>
            <div className="type-h3">Heading Three – Subsection</div>
            <p className="type-body">Body text – This paragraph demonstrates default body copy using Fira Code. It maintains readable line lengths and comfortable line height.</p>
            <p className="type-small">Small text – Secondary information or captions.</p>
            <p className="type-large">Large text – Emphasis without a heading.</p>
            <div className="flex gap-6 items-end">
              <span className="type-body font-normal">Weight 400</span>
              <span className="type-body font-semibold">Weight 600</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Size Specimens</CardTitle>
            <CardDescription>From --font-size-2b to --font-size-7</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {specimen.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <div className="w-48 text-sm text-muted-foreground">{s.label}</div>
                <div className={cn(s.cls, "flex-1 min-w-0")}>The quick brown fox jumps over the lazy dog.</div>
              </div>
            ))}
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Tight</div>
                <div style={{ lineHeight: "var(--line-height-tight)" }}>Line height sample</div>
              </div>
              <div>
                <div className="text-muted-foreground">Normal</div>
                <div style={{ lineHeight: "var(--line-height-normal)" }}>Line height sample</div>
              </div>
              <div>
                <div className="text-muted-foreground">Relaxed</div>
                <div style={{ lineHeight: "var(--line-height-relaxed)" }}>Line height sample</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable title="Design Tokens (Typography)" tokens={tokens} />

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>CSS Custom Properties</CardTitle>
            <CardDescription>Copy/paste the tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="rounded-md bg-muted p-4 overflow-x-auto text-xs"><code>{codeProps}</code></pre>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default TypePage;
