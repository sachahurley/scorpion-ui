import React from "react";
import { cn } from "@/lib/utils";

export interface RetroScorpionProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // px
  loadingText?: string; // Customizable loading text for screen readers
}

/*
  RetroScorpion
  - 16x16 pixel grid SVG, crisp 8-bit scorpion design
  - Uses theme tokens: brand (body) and accent colors
  - Enhanced accessibility with customizable loading text
  - Improved scorpion design with detailed body, pincers, and tail
*/
const RetroScorpion = ({ 
  size = 56, 
  className, 
  loadingText = "Loading content, please wait…",
  ...props 
}: RetroScorpionProps) => {
  const px = size / 16; // pixel size
  return (
    <div
      role="status"
      aria-label={loadingText}
      className={cn("inline-block animate-scorpion-bob", className)}
      style={{ width: size, height: size, imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}
      {...props}
    >
      <svg
        viewBox="0 0 16 16"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Scorpion body - main segments */}
        <g fill="hsl(var(--brand))">
          {/* Head segment */}
          <rect x="6" y="6" width="4" height="2" />
          <rect x="7" y="5" width="2" height="1" />
          
          {/* Body segments */}
          <rect x="6" y="8" width="4" height="1" />
          <rect x="7" y="9" width="2" height="1" />
          <rect x="7" y="10" width="2" height="1" />
        </g>

        {/* Pincers/Claws */}
        <g fill="hsl(var(--accent))">
          {/* Left pincer */}
          <rect x="4" y="5" width="2" height="1" />
          <rect x="3" y="4" width="1" height="1" />
          <rect x="3" y="6" width="1" height="1" />
          <rect x="5" y="6" width="1" height="1" />
          
          {/* Right pincer */}
          <rect x="10" y="5" width="2" height="1" />
          <rect x="12" y="4" width="1" height="1" />
          <rect x="12" y="6" width="1" height="1" />
          <rect x="10" y="6" width="1" height="1" />
        </g>

        {/* Legs */}
        <g fill="hsl(var(--brand))">
          {/* Left legs */}
          <rect x="5" y="7" width="1" height="1" />
          <rect x="4" y="8" width="1" height="1" />
          <rect x="5" y="9" width="1" height="1" />
          <rect x="4" y="10" width="1" height="1" />
          
          {/* Right legs */}
          <rect x="10" y="7" width="1" height="1" />
          <rect x="11" y="8" width="1" height="1" />
          <rect x="10" y="9" width="1" height="1" />
          <rect x="11" y="10" width="1" height="1" />
        </g>

        {/* Tail segments */}
        <g fill="hsl(var(--accent))">
          <rect x="8" y="11" width="1" height="1" />
          <rect x="9" y="12" width="1" height="1" />
          <rect x="10" y="11" width="1" height="1" />
          <rect x="11" y="10" width="1" height="1" />
          <rect x="12" y="9" width="1" height="1" />
          
          {/* Stinger */}
          <rect x="13" y="8" width="1" height="1" />
        </g>

        {/* Eyes */}
        <g fill="hsl(var(--accent))">
          <rect x="6" y="5" width="1" height="1" />
          <rect x="9" y="5" width="1" height="1" />
        </g>
      </svg>
    </div>
  );
};

export default RetroScorpion;