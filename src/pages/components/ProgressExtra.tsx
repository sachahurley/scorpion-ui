import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DesignTokensTable } from "@/components/docs/DesignTokensTable";
import CircularProgress from "@/components/retro/display/CircularProgress";
import { useState } from "react";

const ProgressExtraPage = () => {
  const [val, setVal] = useState(64);

  return (
    <main className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Progress (Circular)</h1>
        <p className="text-sm text-muted-foreground">Retro-themed circular indicators with accessible contrast.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>Size 96, stroke 8</CardDescription>
          </CardHeader>
          <CardContent>
            <CircularProgress value={val} label={`${val}%`} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compact</CardTitle>
            <CardDescription>Size 64</CardDescription>
          </CardHeader>
          <CardContent>
            <CircularProgress value={42} size={64} label="42%" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thick</CardTitle>
            <CardDescription>Stroke 12</CardDescription>
          </CardHeader>
          <CardContent>
            <CircularProgress value={88} strokeWidth={12} label="88%" />
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable
        title="Progress Tokens (retro)"
        tokens={[
          { name: "Primary", value: "hsl(var(--primary))" },
          { name: "Muted", value: "hsl(var(--muted))" },
          { name: "Foreground", value: "hsl(var(--foreground))" },
          { name: "Ring", value: "hsl(var(--ring))" },
        ]}
      />
    </main>
  );
};

export default ProgressExtraPage;
