import { useEffect, useState } from "react"; // keep existing code
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";
import AppSidebar from "@/components/layout/AppSidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ClipboardCopy, Check } from "lucide-react";

const NavigationPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Navigation";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Tabs List Background", value: "hsl(var(--muted))", description: "Container surface for tab triggers" },
    { name: "Active Tab Background", value: "hsl(var(--background))", description: "Selected tab surface color" },
    { name: "Link/Text Color", value: "hsl(var(--foreground))", description: "Default navigation text color" },
    { name: "Hover Text Color", value: "hsl(var(--accent-foreground))", description: "Text color on hover/focus" },
    { name: "Divider/Border", value: "hsl(var(--border))", description: "Borders between nav elements" },
    { name: "Focus Ring", value: "hsl(var(--ring))", description: "Outline color for keyboard focus" },
    { name: "Border Radius", value: "var(--radius)", description: "Corner radius applied to nav surfaces" },
  ];

  const defaultItemCode = `<NavLink to="/components" className={({ isActive }) => cn(
  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-smooth",
  isActive ? "bg-sidebar-accent text-foreground" : "hover:bg-accent hover:text-accent-foreground"
)}>
  <Home />
  <span>Overview</span>
</NavLink>`;

  const nestedItemCode = `<button
  type="button"
  className="w-full flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
  aria-expanded={true}
>
  <span className="flex items-center gap-3">
    <LayoutGrid />
    Components
  </span>
  <ChevronDown className="h-4 w-4 rotate-180" />
</button>`;

  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Navigation Components</h1>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Switch between content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="one">
              <TabsList>
                <TabsTrigger value="one">One</TabsTrigger>
                <TabsTrigger value="two">Two</TabsTrigger>
              </TabsList>
              <TabsContent value="one">First tab content.</TabsContent>
              <TabsContent value="two">Second tab content.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>Navigate between pages</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </section>

      {/* Sidebar Preview & States */}
      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Sidebar (live preview)</CardTitle>
            <CardDescription>The same sidebar used in this site, embedded here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="hidden md:block">
              <div className="border rounded-md overflow-hidden">
                <AppSidebar open={true} onClose={() => {}} />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground md:hidden">
              Resize to desktop width to preview the sidebar.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sidebar item states</CardTitle>
            <CardDescription>Default, hover, active, and disabled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Default</span>
                <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                  Item
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Active</span>
                <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm bg-sidebar-accent text-foreground">
                  Item
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-20">Disabled</span>
                <a aria-disabled className="flex items-center gap-3 rounded-md px-3 py-2 text-sm opacity-50 pointer-events-none">
                  Item
                </a>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <CodeBlock label="Default & Active state" code={defaultItemCode} />
              <CodeBlock label="Nested group trigger" code={nestedItemCode} />
            </div>
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <TooltipProvider>
      <div className="rounded-md border bg-card text-card-foreground overflow-hidden">
        <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
          <span className="font-medium">{label}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onCopy}
                aria-label={copied ? "Copied" : "Copy code"}
                className="inline-flex h-7 w-7 items-center justify-center rounded border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <ClipboardCopy className="h-3.5 w-3.5" />}
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">{copied ? "Copied" : "Copy"}</TooltipContent>
          </Tooltip>
        </div>
        <pre className="p-3 text-xs overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </TooltipProvider>
  );
}

export default NavigationPage;
