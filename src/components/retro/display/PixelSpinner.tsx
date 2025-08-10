import React from "react";
import { cn } from "@/lib/utils";

export interface PixelSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // px
}

const PixelSpinner = ({ size = 24, className, ...props }: PixelSpinnerProps) => {
  const s = `${size}px`;
  return (
    <div
      aria-label="Loading"
      role="status"
      className={cn("relative inline-block", className)}
      style={{ width: s, height: s }}
      {...props}
    >
      <span className="sr-only">Loading</span>
      <div
        className="absolute inset-0 grid grid-cols-3 grid-rows-3 animate-pixel-spin"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="m-[1px] bg-foreground" />
        ))}
      </div>
    </div>
  );
};

export default PixelSpinner;
