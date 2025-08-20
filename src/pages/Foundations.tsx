import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const FoundationsPage = () => {
  const navigate = useNavigate();
  
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "Design Foundations · Scorpion UI";
  }, []);

  return (
    <main className="space-y-8">
      <header aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Foundations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <header>
        <h1 className="text-2xl font-bold tracking-tight">Design Foundations</h1>
        <p className="text-sm text-muted-foreground">Core design tokens and principles that define the visual language</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 component-grid">
        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/border-radius")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Border Radius</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Corner rounding system</span>
            </div>
            <div className="w-full flex gap-2">
              <div className="w-6 h-6 bg-primary rounded-none border"></div>
              <div className="w-6 h-6 bg-primary rounded-sm border"></div>
              <div className="w-6 h-6 bg-primary rounded-md border"></div>
              <div className="w-6 h-6 bg-primary rounded-lg border"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/color-base")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Color - Base</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Foundation color palette</span>
            </div>
            <div className="w-full flex gap-1">
              <div className="w-4 h-6 bg-slate-900 rounded-sm"></div>
              <div className="w-4 h-6 bg-slate-700 rounded-sm"></div>
              <div className="w-4 h-6 bg-slate-500 rounded-sm"></div>
              <div className="w-4 h-6 bg-slate-300 rounded-sm"></div>
              <div className="w-4 h-6 bg-slate-100 rounded-sm"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/color-semantics")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Color - Semantics</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Meaningful color roles</span>
            </div>
            <div className="w-full flex gap-1">
              <div className="w-4 h-6 bg-blue-500 rounded-sm"></div>
              <div className="w-4 h-6 bg-green-500 rounded-sm"></div>
              <div className="w-4 h-6 bg-yellow-500 rounded-sm"></div>
              <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/elevation")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Elevation</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Shadow & depth system</span>
            </div>
            <div className="w-full flex gap-2">
              <div className="w-4 h-4 bg-background border rounded shadow-sm"></div>
              <div className="w-4 h-4 bg-background border rounded shadow-md"></div>
              <div className="w-4 h-4 bg-background border rounded shadow-lg"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/icons")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Icons</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Icon library & usage</span>
            </div>
            <div className="w-full flex gap-2">
              <div className="w-5 h-5 bg-primary rounded-sm"></div>
              <div className="w-5 h-5 bg-primary rounded-full"></div>
              <div className="w-5 h-5 bg-primary rounded border-2 border-background"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/spacing")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Spacing</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Layout & spacing scale</span>
            </div>
            <div className="w-full flex items-end gap-1">
              <div className="w-2 h-2 bg-primary rounded-sm"></div>
              <div className="w-2 h-3 bg-primary rounded-sm"></div>
              <div className="w-2 h-4 bg-primary rounded-sm"></div>
              <div className="w-2 h-5 bg-primary rounded-sm"></div>
              <div className="w-2 h-6 bg-primary rounded-sm"></div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/foundations/type")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Typography</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Text styles & hierarchy</span>
            </div>
            <div className="w-full">
              <div className="text-sm font-bold leading-none">Aa</div>
              <div className="text-xs text-muted-foreground">Typography scale</div>
            </div>
          </div>
        </Button>
      </section>
    </main>
  );
};

export default FoundationsPage;