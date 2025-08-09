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
import PickersPage from "./pages/components/Pickers";
import ProgressExtraPage from "./pages/components/ProgressExtra";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";
import { ThemeProvider } from "./theme/ThemeProvider";
import TooltipDocsPage from "./pages/components/Tooltip";
import ElevationDocsPage from "./pages/components/Elevation";
import SpacingDocsPage from "./pages/components/Spacing";

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
          <Route path="/components/pickers" element={<PickersPage />} />
          <Route path="/components/progress" element={<ProgressExtraPage />} />
          {/* New docs pages */}
          <Route path="/components/tooltip" element={<TooltipDocsPage />} />
          <Route path="/components/elevation" element={<ElevationDocsPage />} />
          <Route path="/components/spacing" element={<SpacingDocsPage />} />
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
