import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DesignTokensTable } from "@/components/docs/DesignTokensTable";
import FileUpload from "@/components/retro/forms/FileUpload";
import RetroMultiSelect from "@/components/retro/forms/MultiSelect";
import TimePicker from "@/components/retro/forms/TimePicker";
import ColorPicker from "@/components/retro/forms/ColorPicker";
import { useState } from "react";

const PickersPage = () => {
  const [time, setTime] = useState("12:00");
  const [colors, setColor] = useState("#292524");
  const [tags, setTags] = useState<string[]>([]);

  return (
    <main className="space-y-6 retro-offset-header">
      <header>
        <h1 className="text-2xl font-semibold">Pickers & Uploads</h1>
        <p className="text-sm text-muted-foreground">Retro-themed, accessible form utilities (light/dark aware).</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 component-grid">
        <Card>
          <CardHeader>
            <CardTitle>File Upload</CardTitle>
            <CardDescription>Simple file input with retro styling</CardDescription>
          </CardHeader>
          <CardContent>
            <FileUpload onFilesChange={() => {}} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multi-Select</CardTitle>
            <CardDescription>Choose multiple options with checkboxes</CardDescription>
          </CardHeader>
          <CardContent>
            <RetroMultiSelect
              options={[
                { label: "Design", value: "design" },
                { label: "Frontend", value: "frontend" },
                { label: "Backend", value: "backend" },
                { label: "DevOps", value: "devops" },
              ]}
              value={tags}
              onChange={setTags}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Picker</CardTitle>
            <CardDescription>24-hour HH:mm selection</CardDescription>
          </CardHeader>
          <CardContent>
            <TimePicker value={time} onChange={setTime} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Picker</CardTitle>
            <CardDescription>Hex input with swatch</CardDescription>
          </CardHeader>
          <CardContent>
            <ColorPicker value={colors} onChange={setColor} />
          </CardContent>
        </Card>
      </section>

      <DesignTokensTable
        title="Picker Tokens (retro)"
        tokens={[
          { name: "Background", value: "hsl(var(--background))" },
          { name: "Foreground", value: "hsl(var(--foreground))" },
          { name: "Primary", value: "hsl(var(--primary))" },
          { name: "Accent", value: "hsl(var(--accent))" },
          { name: "Border", value: "hsl(var(--border))" },
        ]}
      />
    </main>
  );
};

export default PickersPage;
