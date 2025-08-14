import React from "react";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";
import { ASSETS } from "@/lib/assets";

export interface ScorpionImageV2Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "hero" | "header";
}

/*
  ScorpionImageV2
  - Uses different scorpion images based on theme and mode
  - Retro light mode: white scorpion (sits on dark hero background)
  - Retro dark mode: neutral-900 scorpion (sits on light hero background)
  - Modern theme: inverted black scorpion for contrast
  - Responsive sizing: 128px mobile, 256px desktop
*/
const ScorpionImageV2 = ({ 
  className,
  variant = "hero",
  ...props 
}: ScorpionImageV2Props) => {
  const { theme, retroDark } = useAppTheme();
  
  // Determine scorpion image and styling based on theme and variant
  const getScorpionProps = () => {
    if (variant === "header") {
      // Header variant: normal contrast (dark scorpion on light bg, light scorpion on dark bg)
      if (theme === "modern") {
        return {
          src: ASSETS.scorpionBlack,
          filter: "none" // Black scorpion for light background
        };
      }
      
      // Retro theme header
      if (retroDark) {
        return {
          src: ASSETS.scorpionWhite,
          filter: "brightness(0) saturate(100%) invert(100%)" // White scorpion for dark background
        };
      } else {
        return {
          src: ASSETS.scorpionBlack,
          filter: "none" // Black scorpion for light background
        };
      }
    }
    
    // Hero variant: original logic (inverted contrast for hero backgrounds)
    if (theme === "modern") {
      return {
        src: ASSETS.scorpionBlack,
        filter: "invert(1)" // White scorpion for modern theme
      };
    }
    
    // Retro theme - use different versions for light/dark modes
    if (retroDark) {
      return {
        src: ASSETS.scorpionNeutral,
        filter: "brightness(0) saturate(100%) invert(14%) sepia(7%) saturate(897%) hue-rotate(179deg) brightness(92%) contrast(91%)" // neutral-900
      };
    } else {
      return {
        src: ASSETS.scorpionWhite, 
        filter: "brightness(0) saturate(100%) invert(100%)" // white
      };
    }
  };
  
  const { src, filter } = getScorpionProps();
  
  return (
    <div
      className={cn(
        "inline-block", 
        variant === "header" ? "" : "w-32 h-32 md:w-64 md:h-64", 
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt="8-bit scorpion"
        className="w-full h-full object-contain"
        style={{ 
          imageRendering: "pixelated",
          imageRendering: "-moz-crisp-edges" as any,
          imageRendering: "crisp-edges" as any,
          filter
        }}
      />
    </div>
  );
};

export default ScorpionImageV2;