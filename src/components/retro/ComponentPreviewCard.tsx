import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ComponentPreviewCardProps {
  title: string;
  description: string;
  href: string;
  children: ReactNode; // preview content
  ctaText?: string;
}

// Retro-only friendly: relies on design tokens; no direct colors
export default function ComponentPreviewCard({ title, description, href, children, ctaText = "View Details" }: ComponentPreviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {children}
        </div>
        <Button asChild size="sm"><a href={href}>{ctaText}</a></Button>
      </CardContent>
    </Card>
  );
}
