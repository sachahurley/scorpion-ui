import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";

interface AppHeaderProps {
  onToggleSidebar: () => void;
  className?: string;
}

const AppHeader = ({ onToggleSidebar, className }: AppHeaderProps) => {
  const { theme, toggleTheme, retroDark, setRetroDark } = useAppTheme();

  return (
    <header className={cn("sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className={cn(
        "flex h-16 items-center justify-between gap-4",
        theme === "retro" ? "w-full px-4" : "container"
      )}> {/* 16px sides in retro */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Toggle navigation" onClick={onToggleSidebar} className="md:hidden">
            <Menu />
          </Button>
          <a href="/" className="font-semibold tracking-tight text-lg">
            Scorpion UI
          </a>
        </div>

        <div className="flex items-center gap-2">
          {theme === "retro" && (
            <div className="flex items-center gap-2 pr-1" aria-label="Retro dark mode toggle">
              <Sun className={cn("h-4 w-4", retroDark ? "opacity-40" : "opacity-100")} />
              <Switch checked={retroDark} onCheckedChange={(v) => setRetroDark(v)} aria-label="Toggle dark mode" />
              <Moon className={cn("h-4 w-4", retroDark ? "opacity-100" : "opacity-40")} />
            </div>
          )}
          <Button onClick={toggleTheme} variant="outline">
            {theme === "retro" ? "Switch to Modern" : "Switch to Retro"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;