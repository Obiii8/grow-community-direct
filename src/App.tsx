import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Homepage from "./pages/Homepage";
import FarmersPage from "./pages/FarmersPage";
import RetailersPage from "./pages/RetailersPage";
import ConsumersPage from "./pages/ConsumersPage";
import CommunityEventsPage from "./pages/CommunityEventsPage";
import CertificationPage from "./pages/CertificationPage";
import TermsPage from "./pages/TermsPage";
import ConnectBuyersPage from "./pages/ConnectBuyersPage";
import ConnectSellersPage from "./pages/ConnectSellersPage";
import MarketParticipationPage from "./pages/MarketParticipationPage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/farmers" element={<FarmersPage />} />
            <Route path="/retailers" element={<RetailersPage />} />
            <Route path="/consumers" element={<ConsumersPage />} />
            <Route path="/community-events" element={<CommunityEventsPage />} />
            <Route path="/certification" element={<CertificationPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/connect-buyers" element={<ConnectBuyersPage />} />
            <Route path="/connect-sellers" element={<ConnectSellersPage />} />
            <Route path="/market-participation" element={<MarketParticipationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
