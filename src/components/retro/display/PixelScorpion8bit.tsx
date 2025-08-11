import React from "react";
import { cn } from "@/lib/utils";

export interface PixelScorpion8bitProps extends React.HTMLAttributes<HTMLDivElement> {}

/*
  PixelScorpion8bit
  - Hand-crafted 8-bit scorpion based on reference image
  - Responsive: 128px mobile, 256px desktop
  - Pure black pixels, no background
  - Detailed anatomy: large claws, segmented body, curved tail
*/
const PixelScorpion8bit = ({ 
  className,
  ...props 
}: PixelScorpion8bitProps) => {
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
        {/* Large Left Claw */}
        <g fill="black">
          {/* Outer claw shell */}
          <rect x="4" y="20" width="16" height="6" />
          <rect x="2" y="26" width="20" height="8" />
          <rect x="6" y="34" width="16" height="4" />
          <rect x="8" y="38" width="12" height="2" />
          
          {/* Inner claw detail */}
          <rect x="6" y="18" width="12" height="2" />
          <rect x="10" y="22" width="8" height="2" />
          <rect x="12" y="30" width="6" height="2" />
          
          {/* Claw tips */}
          <rect x="0" y="28" width="2" height="4" />
          <rect x="2" y="30" width="2" height="2" />
        </g>

        {/* Large Right Claw */}
        <g fill="black">
          {/* Outer claw shell */}
          <rect x="44" y="20" width="16" height="6" />
          <rect x="42" y="26" width="20" height="8" />
          <rect x="42" y="34" width="16" height="4" />
          <rect x="44" y="38" width="12" height="2" />
          
          {/* Inner claw detail */}
          <rect x="46" y="18" width="12" height="2" />
          <rect x="46" y="22" width="8" height="2" />
          <rect x="46" y="30" width="6" height="2" />
          
          {/* Claw tips */}
          <rect x="62" y="28" width="2" height="4" />
          <rect x="60" y="30" width="2" height="2" />
        </g>

        {/* Main Body Segments */}
        <g fill="black">
          {/* Head segment */}
          <rect x="24" y="24" width="16" height="8" />
          <rect x="22" y="28" width="20" height="4" />
          
          {/* Thorax */}
          <rect x="26" y="32" width="12" height="6" />
          <rect x="28" y="38" width="8" height="4" />
          
          {/* Abdomen start */}
          <rect x="30" y="42" width="4" height="4" />
        </g>

        {/* Walking Legs */}
        <g fill="black">
          {/* Left side legs */}
          <rect x="18" y="30" width="6" height="1" />
          <rect x="16" y="32" width="8" height="1" />
          <rect x="18" y="34" width="6" height="1" />
          <rect x="20" y="36" width="4" height="1" />
          
          {/* Right side legs */}
          <rect x="40" y="30" width="6" height="1" />
          <rect x="40" y="32" width="8" height="1" />
          <rect x="40" y="34" width="6" height="1" />
          <rect x="40" y="36" width="4" height="1" />
        </g>

        {/* Segmented Tail - Curved Upward */}
        <g fill="black">
          {/* Base of tail */}
          <rect x="30" y="46" width="4" height="3" />
          
          {/* Tail segments getting smaller and curving right */}
          <rect x="32" y="49" width="3" height="3" />
          <rect x="35" y="50" width="3" height="2" />
          <rect x="38" y="49" width="2" height="3" />
          <rect x="40" y="47" width="2" height="4" />
          <rect x="42" y="44" width="2" height="5" />
          <rect x="44" y="41" width="2" height="6" />
          <rect x="46" y="38" width="2" height="6" />
          
          {/* Curve back toward center */}
          <rect x="48" y="35" width="1" height="5" />
          <rect x="49" y="32" width="1" height="5" />
          <rect x="50" y="29" width="1" height="5" />
          <rect x="51" y="26" width="1" height="5" />
          
          {/* Final stinger */}
          <rect x="52" y="23" width="1" height="3" />
          <rect x="53" y="21" width="1" height="2" />
        </g>

        {/* Body Segmentation Lines */}
        <g fill="black">
          <rect x="26" y="31" width="12" height="1" />
          <rect x="28" y="37" width="8" height="1" />
          <rect x="30" y="41" width="4" height="1" />
        </g>

        {/* Tail Segmentation */}
        <g fill="black">
          <rect x="31" y="48" width="2" height="1" />
          <rect x="34" y="51" width="2" height="1" />
          <rect x="37" y="50" width="2" height="1" />
          <rect x="40" y="48" width="2" height="1" />
          <rect x="42" y="46" width="2" height="1" />
          <rect x="44" y="43" width="2" height="1" />
        </g>

        {/* Eyes and Face Details */}
        <g fill="black">
          {/* Eyes */}
          <rect x="26" y="26" width="1" height="1" />
          <rect x="37" y="26" width="1" height="1" />
          
          {/* Mandibles */}
          <rect x="30" y="23" width="2" height="1" />
          <rect x="32" y="23" width="2" height="1" />
        </g>

        {/* Claw Joint Details */}
        <g fill="black">
          {/* Left claw joint */}
          <rect x="20" y="24" width="4" height="2" />
          <rect x="22" y="26" width="2" height="6" />
          
          {/* Right claw joint */}
          <rect x="40" y="24" width="4" height="2" />
          <rect x="40" y="26" width="2" height="6" />
        </g>
      </svg>
    </div>
  );
};

export default PixelScorpion8bit;