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
import { Calendar, ChevronDown, MoreHorizontal } from "lucide-react";

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
      <header aria-label="Breadcrumb" className="flex items-center justify-between gap-4">
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
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" aria-haspopup="menu">Actions <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[60]">
              <DropdownMenuItem onClick={() => toast({ title: "Action", description: "You clicked New" })}>New</DropdownMenuItem>
              <DropdownMenuItem>Import</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Quick settings</SheetTitle>
                <SheetDescription>Change your preferences.</SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="c1" />
                  <label htmlFor="c1" className="text-sm">Enable tips</label>
                </div>
                <Separator />
                <Button variant="default">Save</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">UI Components Demo</h1>

      <section aria-labelledby="nav" className="grid gap-6 md:grid-cols-2">
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
                  <Button variant="outline">Menu <MoreHorizontal /></Button>
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

      <section aria-labelledby="forms" className="grid gap-6 md:grid-cols-2">
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

      <section aria-labelledby="data" className="grid gap-6 md:grid-cols-2">
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

      <section aria-labelledby="layout" className="grid gap-6 md:grid-cols-2">
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
    </main>
  );
};

export default ComponentsPage;
