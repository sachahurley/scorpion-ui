import { useState, type ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <div className="min-h-screen grid md:grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
      <AppHeader onToggleSidebar={toggle} className="col-span-full" />

      {/* Sidebar */}
      <AppSidebar open={isMobile ? open : true} onClose={close} />

      {/* Main content */}
      <main className="bg-background">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
