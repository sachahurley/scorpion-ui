import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComponentsPage from "./pages/Components";
import NavigationPage from "./pages/components/Navigation";
import ButtonsPage from "./pages/components/Buttons";
import FormsPage from "./pages/components/Forms";
import CardsPage from "./pages/components/Cards";
import ModalsPage from "./pages/components/Modals";
import TypePage from "./pages/components/Type";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";
import { ThemeProvider } from "./theme/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <BrowserRouter>
          <AppLayout>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/navigation" element={<NavigationPage />} />
          <Route path="/components/buttons" element={<ButtonsPage />} />
          <Route path="/components/forms" element={<FormsPage />} />
          <Route path="/components/cards" element={<CardsPage />} />
          <Route path="/components/modals" element={<ModalsPage />} />
          <Route path="/components/type" element={<TypePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          </AppLayout>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
