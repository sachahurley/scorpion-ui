import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export type RetroTooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;
export type RetroTooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> & { asChild?: boolean };

export interface RetroTooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  withArrow?: boolean;
}

export const RetroTooltipProvider = TooltipPrimitive.Provider;
export const RetroTooltip = TooltipPrimitive.Root;
export const RetroTooltipTrigger = TooltipPrimitive.Trigger;

export const RetroTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  RetroTooltipContentProps
>(({ className, sideOffset = 6, withArrow = true, collisionPadding = 8, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      avoidCollisions
      className={cn(
        "z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "animate-in fade-in-0 zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "[data-theme=retro]&:font-mono",
        className
      )}
      {...props}
    >
      {props.children}
      {withArrow && (
        <TooltipPrimitive.Arrow
          className="fill-current"
          width={10}
          height={5}
          style={{ color: "hsl(var(--popover))" }}
        />
      )}
    </TooltipPrimitive.Content>
  );
});
RetroTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export default RetroTooltip;
