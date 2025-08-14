import React from "react";
import { cn } from "@/lib/utils";
import scorpionHeroImg from "/scorpion-hero.png";

export interface ScorpionImageProps extends React.HTMLAttributes<HTMLDivElement> {}

/*
  ScorpionImage
  - Responsive sizing: 128px mobile, 256px desktop
  - Pure black scorpion pixels extracted from reference
  - No background, pixel-perfect rendering
*/
const ScorpionImage = ({ 
  className,
  ...props 
}: ScorpionImageProps) => {
  return (
    <div
      className={cn("inline-block w-32 h-32 md:w-64 md:h-64", className)}
      {...props}
    >
      <img
        src={scorpionHeroImg}
        alt="8-bit scorpion"
        className="w-full h-full object-contain"
        style={{ 
          imageRendering: "pixelated",
          imageRendering: "-moz-crisp-edges" as any,
          imageRendering: "crisp-edges" as any,
          filter: "brightness(0) saturate(100%)",
          backgroundColor: "transparent"
        }}
      />
    </div>
  );
};

export default ScorpionImage;