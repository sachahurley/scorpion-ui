import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  onToggleSidebar: () => void;
  className?: string;
}

const AppHeader = ({ onToggleSidebar, className }: AppHeaderProps) => {
  return (
    <header className={cn("sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Toggle navigation" onClick={onToggleSidebar} className="md:hidden">
            <Menu />
          </Button>
          <a href="/" className="font-semibold tracking-tight text-lg">
            React UI Starter
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2 min-w-[280px] max-w-sm flex-1">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input aria-label="Search" placeholder="Search..." className="pl-10" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <a href="/components">Components</a>
          </Button>
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
          <Button variant="hero" className="hidden sm:inline-flex">New Project</Button>
          <Avatar>
            <AvatarFallback aria-label="User">YS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;