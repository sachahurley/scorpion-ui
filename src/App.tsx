import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RetroTooltipProvider } from "@/components/retro/display/Tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ui/error-boundary";
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
import BadgesPage from "./pages/components/Badges";
import ElevationDocsPage from "./pages/components/Elevation";
import SpacingDocsPage from "./pages/components/Spacing";
import FeedbackPage from "./pages/components/Feedback";
import LoadingPage from "./pages/components/Loading";
import { Icons as IconsPage } from "./pages/components/Icons";
import ColorBasePage from "./pages/foundations/ColorBase";
import ColorSemanticsPage from "./pages/foundations/ColorSemantics";
import BorderRadiusPage from "./pages/foundations/BorderRadius";
import AvatarPage from "./pages/components/Avatar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RetroTooltipProvider>
          <Toaster />
          <Sonner />
          <ThemeProvider>
          <BrowserRouter basename="/scorpion-ui">
            <AppLayout>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/components/avatar" element={<AvatarPage />} />
            <Route path="/components/navigation" element={<NavigationPage />} />
            <Route path="/components/buttons" element={<ButtonsPage />} />
            <Route path="/components/badges" element={<BadgesPage />} />
            <Route path="/components/forms" element={<FormsPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/modals" element={<ModalsPage />} />
            <Route path="/components/type" element={<TypePage />} />
            <Route path="/components/pickers" element={<PickersPage />} />
            <Route path="/components/progress" element={<ProgressExtraPage />} />
            {/* New docs pages */}
            <Route path="/components/tooltip" element={<TooltipDocsPage />} />
            <Route path="/components/feedback" element={<FeedbackPage />} />
            <Route path="/components/loading" element={<LoadingPage />} />
            {/* Foundation pages */}
            <Route path="/foundations/border-radius" element={<BorderRadiusPage />} />
            <Route path="/foundations/color-base" element={<ColorBasePage />} />
            <Route path="/foundations/color-semantics" element={<ColorSemanticsPage />} />
            <Route path="/foundations/elevation" element={<ElevationDocsPage />} />
            <Route path="/foundations/icons" element={<IconsPage />} />
            <Route path="/foundations/spacing" element={<SpacingDocsPage />} />
            <Route path="/foundations/type" element={<TypePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
            </AppLayout>
          </BrowserRouter>
        </ThemeProvider>
        </RetroTooltipProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
