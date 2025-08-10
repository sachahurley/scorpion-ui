import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import DesignTokensTable, { TokenRow } from "@/components/docs/DesignTokensTable";

const FormsPage = () => {
  useEffect(() => {
    document.title = "Scorpion UI · Components · Forms";
  }, []);

  const tokens: TokenRow[] = [
    { name: "Input Background", value: "hsl(var(--background))" },
    { name: "Input Border", value: "hsl(var(--input))" },
    { name: "Placeholder Color", value: "hsl(var(--muted-foreground))" },
    { name: "Focus Ring", value: "hsl(var(--ring))" },
    { name: "Control Radius", value: "var(--radius)" },
    { name: "Field Padding", value: "0.5rem 0.75rem" },
    { name: "Label Weight (retro)", value: "400" },
  ];

  return (
    <main className="space-y-6">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Forms</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <h1 className="text-2xl font-bold tracking-tight">Form Elements</h1>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Text, select, checkbox, radio, textarea</CardDescription>
          </CardHeader>
          <CardContent className="w-full space-y-4">
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
      </section>

      <DesignTokensTable tokens={tokens} />
    </main>
  );
};

export default FormsPage;
