import { cn } from "@/lib/utils";

export interface CircularProgressProps {
  value: number; // 0-100
  size?: number; // px
  strokeWidth?: number; // px
  className?: string;
  label?: string;
}

export const CircularProgress = ({ value, size = 96, strokeWidth = 8, className, label }: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <figure className={cn("inline-flex flex-col items-center", className)} aria-label={label ?? `Progress ${value}%`}>
      <svg width={size} height={size} className="block">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-muted fill-none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="stroke-primary fill-none"
          style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset, transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      <figcaption className="mt-2 text-sm text-muted-foreground">{label ?? `${value}%`}</figcaption>
    </figure>
  );
};

export default CircularProgress;
