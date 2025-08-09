import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const NavigationPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Navigation";
  }, []);

  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Navigation</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Navigation Components</h1>

      <section className="grid gap-6 md:grid-cols-2">
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
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default NavigationPage;
