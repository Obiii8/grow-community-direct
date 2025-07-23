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
import JoinNetworkPage from "./pages/JoinNetworkPage";
import ExploreMarketsPage from "./pages/ExploreMarketsPage";
import JoinCommunityEventPage from "./pages/JoinCommunityEventPage";
import StartLocalHubPage from "./pages/StartLocalHubPage";
import MarketplaceListingPage from "./pages/MarketplaceListingPage";
import WatchDemoPage from "./pages/WatchDemoPage";
import ChatRoomPage from "./pages/ChatRoomPage";
import EquipmentMarketplacePage from "./pages/EquipmentMarketplacePage";
import CollaborativePurchasingPage from "./pages/CollaborativePurchasingPage";
import CommunityBulletinPage from "./pages/CommunityBulletinPage";
import MarketDashboardPage from "./pages/MarketDashboardPage";
import MarketParticipationDashboardPage from "./pages/MarketParticipationDashboardPage";
import FreedomFarmAIPage from "./pages/FreedomFarmAIPage";

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
            <Route path="/explore-markets" element={<ExploreMarketsPage />} />
            <Route path="/join-network" element={<JoinNetworkPage />} />
            <Route path="/join-community-event" element={<JoinCommunityEventPage />} />
            <Route path="/community-bulletin" element={<CommunityBulletinPage />} />
            <Route path="/market-dashboard" element={<MarketDashboardPage />} />
            <Route path="/market-participation-dashboard" element={<MarketParticipationDashboardPage />} />
            <Route path="/freedom-farm-ai" element={<FreedomFarmAIPage />} />
            <Route path="/collaborative-purchasing" element={<CollaborativePurchasingPage />} />
            <Route path="/equipment-marketplace" element={<EquipmentMarketplacePage />} />
            <Route path="/chat-room" element={<ChatRoomPage />} />
            <Route path="/watch-demo" element={<WatchDemoPage />} />
            <Route path="/marketplace-listing" element={<MarketplaceListingPage />} />
            <Route path="/start-local-hub" element={<StartLocalHubPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
