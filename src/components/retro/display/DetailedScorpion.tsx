import React from "react";
import { cn } from "@/lib/utils";

export interface DetailedScorpionProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

/*
  DetailedScorpion
  - Detailed 8-bit scorpion based on reference image
  - Features realistic anatomy with shading
  - Large claws, segmented tail, detailed body
  - Pure black for high contrast
*/
const DetailedScorpion = ({ 
  size = 128, 
  className,
  ...props 
}: DetailedScorpionProps) => {
  return (
    <div
      className={cn("inline-block", className)}
      style={{ width: size, height: size, imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 128 128"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      >
        {/* Main body segments */}
        <g fill="black">
          {/* Head/front body segment */}
          <rect x="48" y="48" width="32" height="16" />
          <rect x="44" y="52" width="40" height="8" />
          
          {/* Middle body segments */}
          <rect x="50" y="64" width="28" height="8" />
          <rect x="52" y="72" width="24" height="6" />
          <rect x="54" y="78" width="20" height="4" />
        </g>

        {/* Large detailed claws/pincers */}
        <g fill="black">
          {/* Left claw - outer parts */}
          <rect x="16" y="32" width="24" height="8" />
          <rect x="12" y="40" width="32" height="12" />
          <rect x="8" y="52" width="36" height="8" />
          <rect x="16" y="60" width="28" height="4" />
          
          {/* Left claw - inner detail */}
          <rect x="20" y="28" width="16" height="4" />
          <rect x="24" y="36" width="12" height="4" />
          <rect x="28" y="44" width="8" height="4" />
          
          {/* Right claw - outer parts */}
          <rect x="88" y="32" width="24" height="8" />
          <rect x="84" y="40" width="32" height="12" />
          <rect x="84" y="52" width="36" height="8" />
          <rect x="84" y="60" width="28" height="4" />
          
          {/* Right claw - inner detail */}
          <rect x="92" y="28" width="16" height="4" />
          <rect x="96" y="36" width="12" height="4" />
          <rect x="92" y="44" width="8" height="4" />
        </g>

        {/* Walking legs */}
        <g fill="black">
          {/* Left legs */}
          <rect x="36" y="56" width="12" height="2" />
          <rect x="32" y="60" width="16" height="2" />
          <rect x="34" y="64" width="14" height="2" />
          <rect x="36" y="68" width="12" height="2" />
          
          {/* Right legs */}
          <rect x="80" y="56" width="12" height="2" />
          <rect x="80" y="60" width="16" height="2" />
          <rect x="78" y="64" width="14" height="2" />
          <rect x="80" y="68" width="12" height="2" />
        </g>

        {/* Segmented tail - curved upward */}
        <g fill="black">
          {/* Tail base */}
          <rect x="58" y="82" width="12" height="6" />
          
          {/* Tail segments - getting smaller and curving */}
          <rect x="60" y="88" width="10" height="5" />
          <rect x="62" y="93" width="8" height="4" />
          <rect x="64" y="97" width="6" height="4" />
          <rect x="66" y="101" width="5" height="3" />
          <rect x="68" y="104" width="4" height="3" />
          <rect x="70" y="107" width="3" height="3" />
          
          {/* Curve the tail upward */}
          <rect x="72" y="104" width="3" height="6" />
          <rect x="75" y="100" width="3" height="8" />
          <rect x="78" y="96" width="2" height="8" />
          <rect x="80" y="92" width="2" height="8" />
          <rect x="82" y="88" width="2" height="8" />
          
          {/* Stinger */}
          <rect x="84" y="84" width="3" height="4" />
          <rect x="87" y="82" width="2" height="2" />
        </g>

        {/* Tail segmentation lines for detail */}
        <g fill="black">
          <rect x="60" y="85" width="8" height="1" />
          <rect x="62" y="90" width="6" height="1" />
          <rect x="64" y="95" width="4" height="1" />
          <rect x="66" y="99" width="3" height="1" />
          <rect x="68" y="102" width="2" height="1" />
        </g>

        {/* Eyes/face details */}
        <g fill="black">
          <rect x="52" y="50" width="2" height="2" />
          <rect x="74" y="50" width="2" height="2" />
          
          {/* Mandibles */}
          <rect x="58" y="46" width="4" height="2" />
          <rect x="66" y="46" width="4" height="2" />
        </g>

        {/* Claw tips for realism */}
        <g fill="black">
          {/* Left claw tips */}
          <rect x="4" y="48" width="4" height="2" />
          <rect x="8" y="46" width="4" height="2" />
          
          {/* Right claw tips */}
          <rect x="120" y="48" width="4" height="2" />
          <rect x="116" y="46" width="4" height="2" />
        </g>
      </svg>
    </div>
  );
};

export default DetailedScorpion;