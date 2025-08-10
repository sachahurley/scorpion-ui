import { useEffect, useState } from "react";
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
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ComponentPreviewCard from "@/components/retro/ComponentPreviewCard";
import PixelScorpion from "@/components/retro/display/PixelScorpion";

const ComponentsPage = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    document.title = "UI Components Demo · shadcn + Tailwind";
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

      <h1 className="text-2xl font-bold tracking-tight">UI Components Demo</h1>

      <section aria-labelledby="nav" className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle id="nav">Navigation</CardTitle>
            <CardDescription>Tabs, Breadcrumb, Pagination</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account content</TabsContent>
              <TabsContent value="password">Password content</TabsContent>
            </Tabs>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            <div className="pt-2">
              <Button asChild size="sm"><a href="/components/navigation">View Details</a></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive</CardTitle>
            <CardDescription>Buttons, Popover, Dropdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="hero">Hero</Button>
            </div>
            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline"><Calendar /> Pick date</Button>
                </PopoverTrigger>
                <PopoverContent className="z-[60]" align="start">
                  <p className="text-sm text-muted-foreground">Place your datepicker here.</p>
                </PopoverContent>
              </Popover>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-[60]">
                  <DropdownMenuItem>Item One</DropdownMenuItem>
                  <DropdownMenuItem>Item Two</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
          <div className="px-6 pb-6">
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm"><a href="/components/buttons">Explore Buttons</a></Button>
              <Button asChild size="sm" variant="outline"><a href="/components/tooltip">Tooltips</a></Button>
            </div>
          </div>
        </Card>
      </section>

      <section aria-labelledby="forms" className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle id="forms">Forms</CardTitle>
            <CardDescription>Input, Select, Checkbox, Radio, Textarea</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Select</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferences</label>
              <div className="flex items-center gap-3">
                <Checkbox id="cb1" /> <label htmlFor="cb1" className="text-sm">Email alerts</label>
                <Checkbox id="cb2" /> <label htmlFor="cb2" className="text-sm">Weekly digest</label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Plan</label>
              <RadioGroup defaultValue="starter" className="flex gap-4">
                <div className="flex items-center gap-2"><RadioGroupItem id="r1" value="starter" /> <label htmlFor="r1">Starter</label></div>
                <div className="flex items-center gap-2"><RadioGroupItem id="r2" value="pro" /> <label htmlFor="r2">Pro</label></div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell us more..." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Alert, Toast, Progress, Skeleton</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>This is a simple alert for contextual information.</AlertDescription>
            </Alert>
            <div className="flex items-center gap-2">
              <Button onClick={() => toast({ title: "Saved", description: "Your changes were saved." })}>Show Toast</Button>
              <Button variant="outline" onClick={() => toast({ title: "Error", description: "Something went wrong.", variant: "destructive" })}>Show Error</Button>
            </div>
            <Progress value={progress} />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="data" className="grid gap-6 md:grid-cols-2 component-grid">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle id="data">Data</CardTitle>
            <CardDescription>Table example</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Recent invoices</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Acme Inc.</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right">$2,400.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Globex</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">$850.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="layout" className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle id="layout">Layout</CardTitle>
            <CardDescription>Card, Separator, Dialog, Sheet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Separator />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome</DialogTitle>
                  <DialogDescription>Thanks for trying the demo.</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>
      
      <section aria-labelledby="catalog" className="grid gap-6 md:grid-cols-3 component-grid">
        <h2 id="catalog" className="sr-only">Component Catalog</h2>
        <TooltipProvider>
          <ComponentPreviewCard title="Navigation" description="Tabs, Breadcrumbs, Pagination" href="/components/navigation">
            <div className="space-y-3">
              <Tabs defaultValue="one" className="w-full">
                <TabsList>
                  <TabsTrigger value="one">One</TabsTrigger>
                  <TabsTrigger value="two">Two</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Buttons" description="Variants and sizes" href="/components/buttons">
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Forms" description="Inputs and controls" href="/components/forms">
            <div className="space-y-2">
              <Input placeholder="Email" />
              <div className="flex items-center gap-2"><Checkbox id="o1" /> <label htmlFor="o1" className="text-sm">Opt‑in</label></div>
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Cards" description="Layouts and content" href="/components/cards">
            <div className="rounded-md border p-3 text-xs text-muted-foreground">A compact content block inside a card.</div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Modals" description="Dialogs & Sheets" href="/components/modals">
            <Dialog>
              <DialogTrigger asChild><Button size="sm" variant="outline">Open</Button></DialogTrigger>
              <DialogContent className="sm:max-w-xs"><DialogHeader><DialogTitle>Hi</DialogTitle><DialogDescription>Mini dialog.</DialogDescription></DialogHeader></DialogContent>
            </Dialog>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Typography" description="Scale and styles" href="/components/type">
            <div>
              <div className="text-base">Heading</div>
              <p className="text-sm text-muted-foreground">Body text sample.</p>
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Tooltips" description="Hover/focus helpers" href="/components/tooltip">
            <Tooltip>
              <TooltipTrigger asChild><Button size="sm" variant="outline">Hover me</Button></TooltipTrigger>
              <TooltipContent>Tip content</TooltipContent>
            </Tooltip>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Elevation" description="Shadow levels" href="/components/elevation">
            <div className="flex items-end gap-3">
              <div className="h-6 w-10 rounded bg-card shadow-e1" />
              <div className="h-8 w-10 rounded bg-card shadow-e3" />
              <div className="h-10 w-10 rounded bg-card shadow-e5" />
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Spacing" description="Rhythm utilities" href="/components/spacing">
            <div className="space-y-[var(--space-8)]">
              <div className="h-1 bg-muted rounded" />
              <div className="h-1 bg-muted rounded" />
              <div className="h-1 bg-muted rounded" />
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Feedback" description="Alerts & toasts" href="/components/feedback">
            <Alert className="border-[3px]"><AlertTitle>Info</AlertTitle><AlertDescription>Quick notice.</AlertDescription></Alert>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Progress" description="Linear & circular" href="/components/progress">
            <Progress value={60} />
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Loading" description="Loading states and progress indicators" href="/components/loading" ctaText="Explore Loading">
            <div className="flex items-center gap-3">
              <PixelScorpion size={40} />
            </div>
          </ComponentPreviewCard>

          <ComponentPreviewCard title="Pickers" description="Selects & more" href="/components/pickers">
            <Select>
              <SelectTrigger className="w-full"><SelectValue placeholder="Choose" /></SelectTrigger>
              <SelectContent><SelectItem value="a">A</SelectItem><SelectItem value="b">B</SelectItem></SelectContent>
            </Select>
          </ComponentPreviewCard>
        </TooltipProvider>
      </section>
    </main>
  );
};

export default ComponentsPage;
