import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Store, ShoppingCart, ArrowRight, Star } from "lucide-react";

const wholesalers = [
  {
    name: "Skippy's Wholesalers",
    location: "South Melbourne",
    lookingFor: ["Tomatoes", "Lettuce", "Carrots"],
    order: "Bulk orders for weekly supply."
  },
  {
    name: "Harris Farm Markets",
    location: "CBD Melbourne",
    lookingFor: ["Organic Apples", "Potatoes", "Pumpkins"],
    order: "Seasonal produce, organic preferred."
  }
];

const restaurants = [
  {
    name: "Alba's Restaurant",
    wants: ["Heirloom Tomatoes", "Fresh Basil", "Eggplant"]
  },
  {
    name: "Jimmy's Cafe",
    wants: ["Free-range Eggs", "Spinach", "Sourdough Bread"]
  },
  {
    name: "The Greenhouse",
    wants: ["Microgreens", "Radishes", "Herbs"]
  }
];

const consumers = [
  { name: "Sophie", wants: "2kg Organic Tomatoes" },
  { name: "Liam", wants: "1 box Strawberries" },
  { name: "Ava", wants: "5kg Potatoes" }
];

const auction = {
  item: "Premium Organic Carrots (10kg)",
  initialPrice: 30,
  currentPrice: 42,
  buyNowPrice: 55
};

const ConnectBuyersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-8 drop-shadow-lg text-center">Connect with Buyers</h1>
        {/* Wholesalers & Retailers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Professional Wholesalers & Retailers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {wholesalers.map((w, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Store className="h-7 w-7 text-green-700" />
                    <CardTitle className="text-xl text-green-900 font-bold">{w.name}</CardTitle>
                  </div>
                  <CardDescription className="text-green-800 mb-1">{w.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <span className="font-semibold text-green-900">Looking for:</span>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {w.lookingFor.map((item, i) => (
                        <li key={i} className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-green-800 text-sm mb-2">{w.order}</div>
                  <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">View Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Local Markets Footer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Local Markets</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center">
              <Users className="h-8 w-8 text-green-700 mb-2" />
              <CardTitle className="text-lg text-green-900 font-bold mb-1">Choose an Agent</CardTitle>
              <CardDescription className="text-green-800 mb-2">Let a professional agent help sell your products and manage logistics.</CardDescription>
              <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Find Agent</Button>
            </Card>
            <Card className="flex-1 bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center">
              <Store className="h-8 w-8 text-green-700 mb-2" />
              <CardTitle className="text-lg text-green-900 font-bold mb-1">Sell Yourself</CardTitle>
              <CardDescription className="text-green-800 mb-2">Set up your own stall and connect directly with local customers.</CardDescription>
              <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Start Selling</Button>
            </Card>
          </div>
        </div>
        {/* Animated Horizontal List of Restaurants/Boutique Retailers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Restaurants & Boutique Retailers</h2>
          <div className="overflow-x-auto whitespace-nowrap py-2">
            <div className="flex gap-8 animate-scroll-x">
              {restaurants.map((r, idx) => (
                <Card key={idx} className="inline-block min-w-[260px] bg-white/95 rounded-2xl shadow-xl overflow-hidden mr-2">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="h-6 w-6 text-green-700" />
                      <CardTitle className="text-lg text-green-900 font-bold">{r.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <span className="font-semibold text-green-900">Wants:</span>
                    <ul className="flex flex-wrap gap-2 mt-1">
                      {r.wants.map((item, i) => (
                        <li key={i} className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scroll-x {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-x {
              animation: scroll-x 30s linear infinite;
            }
          `}</style>
        </div>
        {/* Individual Consumer Requests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Individual Consumer Requests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {consumers.map((c, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-6 w-6 text-green-700" />
                    <CardTitle className="text-lg text-green-900 font-bold">{c.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="font-semibold text-green-900">Wants:</span> <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">{c.wants}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Open Marketplace Auction Footer */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Open Marketplace Auction</h2>
          <Card className="bg-white/95 rounded-2xl shadow-xl overflow-hidden max-w-xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-6 w-6 text-yellow-600" />
                <CardTitle className="text-lg text-green-900 font-bold">{auction.item}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center mt-2">
                <span className="text-green-800 font-bold">Initial: ${auction.initialPrice}</span>
                <span className="text-blue-800 font-bold">Current: ${auction.currentPrice}</span>
                <span className="text-green-900 font-extrabold text-lg">Buy Now: ${auction.buyNowPrice}</span>
                <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold ml-auto">Place Bid</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectBuyersPage;