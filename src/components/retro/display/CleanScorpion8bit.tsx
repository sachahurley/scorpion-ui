import React from "react";
import { cn } from "@/lib/utils";

export interface CleanScorpion8bitProps extends React.HTMLAttributes<HTMLDivElement> {}

/*
  CleanScorpion8bit
  - Clean 8-bit scorpion based on scorpion-2 reference
  - Responsive: 128px mobile, 256px desktop
  - Pure black pixels, simplified design
  - Large claws, streamlined body, curved tail
*/
const CleanScorpion8bit = ({ 
  className,
  ...props 
}: CleanScorpion8bitProps) => {
  return (
    <div
      className={cn("inline-block w-32 h-32 md:w-64 md:h-64", className)}
      style={{ imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}
      {...props}
    >
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Left Large Claw */}
        <g fill="black">
          {/* Outer claw shape */}
          <rect x="4" y="24" width="8" height="4" />
          <rect x="2" y="28" width="12" height="8" />
          <rect x="4" y="36" width="8" height="4" />
          <rect x="6" y="40" width="4" height="2" />
          
          {/* Inner claw detail */}
          <rect x="8" y="22" width="4" height="2" />
          <rect x="6" y="30" width="4" height="4" />
          
          {/* Claw tip */}
          <rect x="0" y="30" width="2" height="4" />
        </g>

        {/* Right Large Claw */}
        <g fill="black">
          {/* Outer claw shape */}
          <rect x="52" y="24" width="8" height="4" />
          <rect x="50" y="28" width="12" height="8" />
          <rect x="52" y="36" width="8" height="4" />
          <rect x="54" y="40" width="4" height="2" />
          
          {/* Inner claw detail */}
          <rect x="52" y="22" width="4" height="2" />
          <rect x="54" y="30" width="4" height="4" />
          
          {/* Claw tip */}
          <rect x="62" y="30" width="2" height="4" />
        </g>

        {/* Main Body */}
        <g fill="black">
          {/* Head segment */}
          <rect x="26" y="28" width="12" height="8" />
          <rect x="24" y="30" width="16" height="4" />
          
          {/* Body segments */}
          <rect x="28" y="36" width="8" height="6" />
          <rect x="30" y="42" width="4" height="4" />
        </g>

        {/* Walking Legs - simplified */}
        <g fill="black">
          {/* Left legs */}
          <rect x="20" y="32" width="4" height="1" />
          <rect x="18" y="34" width="6" height="1" />
          <rect x="20" y="36" width="4" height="1" />
          <rect x="22" y="38" width="2" height="1" />
          
          {/* Right legs */}
          <rect x="40" y="32" width="4" height="1" />
          <rect x="40" y="34" width="6" height="1" />
          <rect x="40" y="36" width="4" height="1" />
          <rect x="40" y="38" width="2" height="1" />
        </g>

        {/* Curved Tail */}
        <g fill="black">
          {/* Tail base */}
          <rect x="30" y="46" width="4" height="3" />
          
          {/* Tail segments curving upward and right */}
          <rect x="32" y="49" width="3" height="2" />
          <rect x="35" y="50" width="2" height="2" />
          <rect x="37" y="49" width="2" height="3" />
          <rect x="39" y="47" width="2" height="4" />
          <rect x="41" y="44" width="2" height="5" />
          <rect x="43" y="40" width="2" height="6" />
          
          {/* Curve back toward center */}
          <rect x="45" y="36" width="2" height="6" />
          <rect x="47" y="32" width="1" height="6" />
          <rect x="48" y="28" width="1" height="6" />
          <rect x="49" y="24" width="1" height="6" />
          <rect x="50" y="20" width="1" height="6" />
          
          {/* Final curve and stinger */}
          <rect x="48" y="16" width="2" height="4" />
          <rect x="46" y="12" width="2" height="4" />
          <rect x="44" y="8" width="2" height="4" />
          
          {/* Stinger tip */}
          <rect x="42" y="6" width="2" height="2" />
          <rect x="40" y="4" width="2" height="2" />
        </g>

        {/* Body segmentation details */}
        <g fill="black">
          <rect x="28" y="35" width="8" height="1" />
          <rect x="30" y="41" width="4" height="1" />
        </g>

        {/* Eyes */}
        <g fill="black">
          <rect x="28" y="30" width="1" height="1" />
          <rect x="35" y="30" width="1" height="1" />
        </g>

        {/* Claw connection to body */}
        <g fill="black">
          {/* Left claw joint */}
          <rect x="14" y="30" width="10" height="2" />
          <rect x="16" y="28" width="8" height="2" />
          
          {/* Right claw joint */}
          <rect x="40" y="30" width="10" height="2" />
          <rect x="40" y="28" width="8" height="2" />
        </g>

        {/* Tail segmentation lines */}
        <g fill="black">
          <rect x="31" y="48" width="2" height="1" />
          <rect x="34" y="51" width="2" height="1" />
          <rect x="37" y="50" width="2" height="1" />
          <rect x="39" y="48" width="2" height="1" />
          <rect x="41" y="46" width="2" height="1" />
          <rect x="43" y="42" width="2" height="1" />
          <rect x="45" y="38" width="2" height="1" />
        </g>
      </svg>
    </div>
  );
};

export default CleanScorpion8bit;