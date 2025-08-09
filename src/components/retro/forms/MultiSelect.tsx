import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export type MultiOption = { label: string; value: string };

export interface RetroMultiSelectProps {
  options: MultiOption[];
  value?: string[];
  onChange?: (vals: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const RetroMultiSelect = ({ options, value, onChange, placeholder = "Select options", className }: RetroMultiSelectProps) => {
  const [internal, setInternal] = useState<string[]>(value ?? []);
  const vals = value ?? internal;

  const label = useMemo(() => {
    if (!vals.length) return placeholder;
    const text = options.filter(o => vals.includes(o.value)).map(o => o.label).join(", ");
    return text.length > 24 ? `${vals.length} selected` : text;
  }, [vals, options, placeholder]);

  const toggle = (v: string) => {
    const next = vals.includes(v) ? vals.filter(x => x !== v) : [...vals, v];
    if (onChange) onChange(next);
    else setInternal(next);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("justify-between w-64", className)} aria-haspopup="listbox" aria-expanded="false">
          <span className={cn(!vals.length && "text-muted-foreground")}>{label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="start">
        <ul role="listbox" aria-multiselectable className="max-h-56 overflow-auto space-y-1">
          {options.map((opt) => (
            <li key={opt.value}>
              <label className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground cursor-pointer">
                <Checkbox checked={vals.includes(opt.value)} onCheckedChange={() => toggle(opt.value)} aria-label={opt.label} />
                <span className="text-sm">{opt.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default RetroMultiSelect;
