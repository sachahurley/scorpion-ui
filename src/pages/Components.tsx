import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar, ArrowRight } from "lucide-react";
import PixelScorpion from "@/components/retro/display/PixelScorpion";
import { useScrollReset } from "@/hooks/use-scroll-reset";

const ComponentsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [progress, setProgress] = useState(20);
  
  // Reset scroll position when navigating to this page
  useScrollReset();

  useEffect(() => {
    document.title = "UI Components Demo · Scorpion UI";
  }, []);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 10)), 900);
    return () => clearInterval(t);
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
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <header>
        <h1 className="text-2xl font-bold tracking-tight">UI Components</h1>
        <p className="text-sm text-muted-foreground">Interactive demos and documentation for each component category</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 component-grid">
        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/avatar")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Avatar</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">User profile images</span>
            </div>
            <div className="w-full">
              <Avatar>
                <AvatarFallback>SU</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/badges")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Badges</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Status indicators</span>
            </div>
            <div className="w-full flex gap-2">
              <Badge variant="secondary">New</Badge>
              <Badge variant="outline">Beta</Badge>
            </div>
          </div>
        </Button>
        
        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/buttons")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Buttons</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Interactive elements</span>
            </div>
            <div className="w-full">
              <Button size="sm">Click me</Button>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/cards")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Cards</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Layouts & content blocks</span>
            </div>
            <div className="w-full">
              <div className="border rounded-md p-2 bg-card">
                <div className="h-2 bg-muted rounded mb-1"></div>
                <div className="h-1 bg-muted rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/feedback")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Feedback</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Alerts & progress</span>
            </div>
            <div className="w-full">
              <Progress value={60} className="h-1" />
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/forms")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Forms</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Input fields & controls</span>
            </div>
            <div className="w-full">
              <Input placeholder="Enter text..." className="text-xs" />
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/loading")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Loading</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Loading states</span>
            </div>
            <div className="w-full">
              <Skeleton className="h-4 w-4 rounded-full" />
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/modals")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Modals</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Dialogs & sheets</span>
            </div>
            <div className="w-full">
              <div className="border rounded-sm p-1 bg-background shadow-sm">
                <div className="h-1 bg-muted rounded mb-1"></div>
                <div className="h-1 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/navigation")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Navigation</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Tabs, breadcrumbs, pagination</span>
            </div>
            <div className="w-full">
              <Tabs defaultValue="home" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="home" className="text-xs">Home</TabsTrigger>
                  <TabsTrigger value="about" className="text-xs">About</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/progress")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Progress</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Linear & circular</span>
            </div>
            <div className="w-full">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-4 justify-start items-start text-left" onClick={() => navigate("/components/tooltip")}>
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col gap-1 w-full items-start text-left">
              <span className="font-medium w-full text-left break-words">Tooltips</span>
              <span className="text-xs text-muted-foreground w-full text-left break-words">Hover & focus helpers</span>
            </div>
            <div className="w-full">
              <div className="text-xs text-muted-foreground border-b border-dotted">Hover me</div>
            </div>
          </div>
        </Button>

      </section>
    </main>
  );
};

export default ComponentsPage;