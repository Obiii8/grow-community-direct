import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Hammer, Users, ClipboardList } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Peer-to-peer Chat",
    description: "Knowledge sharing and support between farmers, suppliers, and producers."
  },
  {
    icon: Hammer,
    title: "Equipment & Input Marketplace",
    description: "Buy and sell farm equipment, tools, and agricultural inputs."
  },
  {
    icon: Users,
    title: "Collaborative Purchasing",
    description: "Pool resources and save through group buying power."
  },
  {
    icon: ClipboardList,
    title: "Community Bulletin Board",
    description: "Updates, opportunities, and events for your local food network."
  }
];

const ConnectSellersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg">Connect with Sellers</h1>
        <h2 className="text-xl md:text-2xl text-green-800 mb-6 font-semibold">An open marketplace for sustainable exchange and collaboration.</h2>
        <p className="text-lg text-green-900 mb-10 max-w-2xl mx-auto font-medium">
          Engage directly with farmers, suppliers, and local producers through an interactive space designed to build stronger, more sustainable food networks.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300">
                {/* Removed emoji */}
                <Icon className="h-10 w-10 text-green-700 mb-2" />
                <CardTitle className="text-xl text-green-900 font-bold mb-2">{f.title}</CardTitle>
                <CardDescription className="text-green-800 text-base font-medium mb-4">{f.description}</CardDescription>
                {f.title === "Peer-to-peer Chat" && (
                  <a href="/chat-room">
                    <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Join Chat Room</Button>
                  </a>
                )}
                {f.title === "Equipment & Input Marketplace" && (
                  <a href="/equipment-marketplace">
                    <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Go to Marketplace</Button>
                  </a>
                )}
                {f.title === "Collaborative Purchasing" && (
                  <a href="/collaborative-purchasing">
                    <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Join Collaborative Purchasing</Button>
                  </a>
                )}
                {f.title === "Community Bulletin Board" && (
                  <a href="/community-bulletin">
                    <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Go to Bulletin Board</Button>
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectSellersPage;