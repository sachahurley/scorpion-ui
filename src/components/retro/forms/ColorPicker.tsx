import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useId, useState } from "react";

export interface ColorPickerProps {
  value?: string; // hex string like #aabbcc
  onChange?: (val: string) => void;
  className?: string;
  label?: string;
}

const isHex = (v: string) => /^#?[0-9a-fA-F]{6}$/.test(v);

export const ColorPicker = ({ value = "#292524", onChange, className, label = "Pick color" }: ColorPickerProps) => {
  const id = useId();
  const [hex, setHex] = useState(value.startsWith('#') ? value : `#${value}`);

  useEffect(() => {
    if (isHex(hex)) onChange?.(hex.startsWith('#') ? hex : `#${hex}`);
  }, [hex, onChange]);

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="text-sm text-muted-foreground">{label}</label>
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className={cn(
            "h-10 w-10 rounded-md border",
            "bg-background"
          )}
          aria-label="Color swatch"
        />
        <Input
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          aria-label="Hex value"
          className="w-36"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
