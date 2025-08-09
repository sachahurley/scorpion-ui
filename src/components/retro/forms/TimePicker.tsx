import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface TimePickerProps {
  value?: string; // HH:mm
  onChange?: (val: string) => void;
  className?: string;
  minuteStep?: number;
}

export const TimePicker = ({ value = "12:00", onChange, className, minuteStep = 5 }: TimePickerProps) => {
  const [h, m] = value.split(":").map((n) => parseInt(n, 10));
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: Math.floor(60 / minuteStep) }, (_, i) => i * minuteStep);

  const setHour = (hour: number) => onChange?.(`${hour.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
  const setMinute = (min: number) => onChange?.(`${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`);

  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Time picker">
      <Select value={h.toString()} onValueChange={(val) => setHour(parseInt(val, 10))}>
        <SelectTrigger className="w-[100px]"><SelectValue placeholder="HH" /></SelectTrigger>
        <SelectContent>
          {hours.map((hh) => (
            <SelectItem key={hh} value={hh.toString()}>{hh.toString().padStart(2, "0")}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-muted-foreground">:</span>
      <Select value={m.toString()} onValueChange={(val) => setMinute(parseInt(val, 10))}>
        <SelectTrigger className="w-[100px]"><SelectValue placeholder="MM" /></SelectTrigger>
        <SelectContent>
          {minutes.map((mm) => (
            <SelectItem key={mm} value={mm.toString()}>{mm.toString().padStart(2, "0")}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimePicker;
