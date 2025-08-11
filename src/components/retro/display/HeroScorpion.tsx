import React from "react";
import { cn } from "@/lib/utils";

export interface HeroScorpionProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

/*
  HeroScorpion
  - Black 8-bit scorpion for hero section
  - 64x64 pixel size, scaled from favicon design
  - Pure black (#000000) for high contrast
*/
const HeroScorpion = ({ 
  size = 64, 
  className,
  ...props 
}: HeroScorpionProps) => {
  return (
    <div
      className={cn("inline-block", className)}
      style={{ width: size, height: size, imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Scorpion body - main segments */}
        <g fill="black">
          {/* Head segment (scaled 4x for 64x64) */}
          <rect x="24" y="24" width="16" height="8" />
          <rect x="28" y="20" width="8" height="4" />
          
          {/* Body segments */}
          <rect x="24" y="32" width="16" height="4" />
          <rect x="28" y="36" width="8" height="4" />
          <rect x="28" y="40" width="8" height="4" />
        </g>

        {/* Pincers/Claws */}
        <g fill="black">
          {/* Left pincer */}
          <rect x="16" y="20" width="8" height="4" />
          <rect x="12" y="16" width="4" height="4" />
          <rect x="12" y="24" width="4" height="4" />
          <rect x="20" y="24" width="4" height="4" />
          
          {/* Right pincer */}
          <rect x="40" y="20" width="8" height="4" />
          <rect x="48" y="16" width="4" height="4" />
          <rect x="48" y="24" width="4" height="4" />
          <rect x="40" y="24" width="4" height="4" />
        </g>

        {/* Legs */}
        <g fill="black">
          {/* Left legs */}
          <rect x="20" y="28" width="4" height="4" />
          <rect x="16" y="32" width="4" height="4" />
          <rect x="20" y="36" width="4" height="4" />
          <rect x="16" y="40" width="4" height="4" />
          
          {/* Right legs */}
          <rect x="40" y="28" width="4" height="4" />
          <rect x="44" y="32" width="4" height="4" />
          <rect x="40" y="36" width="4" height="4" />
          <rect x="44" y="40" width="4" height="4" />
        </g>

        {/* Tail segments */}
        <g fill="black">
          <rect x="32" y="44" width="4" height="4" />
          <rect x="36" y="48" width="4" height="4" />
          <rect x="40" y="44" width="4" height="4" />
          <rect x="44" y="40" width="4" height="4" />
          <rect x="48" y="36" width="4" height="4" />
          
          {/* Stinger */}
          <rect x="52" y="32" width="4" height="4" />
        </g>

        {/* Eyes */}
        <g fill="black">
          <rect x="24" y="20" width="4" height="4" />
          <rect x="36" y="20" width="4" height="4" />
        </g>
      </svg>
    </div>
  );
};

export default HeroScorpion;