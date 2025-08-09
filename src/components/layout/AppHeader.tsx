import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";

interface AppHeaderProps {
  onToggleSidebar: () => void;
  className?: string;
}

const AppHeader = ({ onToggleSidebar, className }: AppHeaderProps) => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <header className={cn("sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className={cn("container flex h-16 items-center justify-between gap-4", theme === "retro" && "px-4")}>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Toggle navigation" onClick={onToggleSidebar} className="md:hidden">
            <Menu />
          </Button>
          <a href="/" className="font-semibold tracking-tight text-lg">
            Scorpion UI
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={toggleTheme} variant="outline">
            {theme === "retro" ? "Switch to Modern" : "Switch to Retro"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;