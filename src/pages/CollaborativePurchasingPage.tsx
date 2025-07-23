import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Truck, DollarSign, MessageCircle } from "lucide-react";

const mockGroups = [
  { name: "Organic Fertilizer VIC", type: "Fertilizer", location: "Victoria", members: 12 },
  { name: "Seedlings Bulk NSW", type: "Seedlings", location: "New South Wales", members: 8 },
  { name: "Irrigation Equipment QLD", type: "Equipment", location: "Queensland", members: 15 }
];

const mockBulkOrders = [
  { product: "Organic Fertilizer", quantity: "5 tons", participants: 7, status: "Negotiating", price: "$1,200/ton" },
  { product: "Drip Irrigation Kits", quantity: "20 kits", participants: 10, status: "Ready to Order", price: "$180/kit" }
];

const mockLogistics = [
  { note: "Shared delivery to Geelong depot reduces cost by 30% for all participants." },
  { note: "Bulk order for seedlings will be split between 3 farms in NSW." }
];

const mockNegotiations = [
  { group: "Organic Fertilizer VIC", offer: "$1,200/ton", counter: "$1,100/ton", status: "In Progress" },
  { group: "Seedlings Bulk NSW", offer: "$2.50/seedling", counter: "$2.20/seedling", status: "Accepted" }
];

const CollaborativePurchasingPage = () => {
  const [search, setSearch] = useState("");
  const filteredGroups = mockGroups.filter(
    g =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.type.toLowerCase().includes(search.toLowerCase()) ||
      g.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg text-center">Collaborative Purchasing</h1>
        <h2 className="text-xl md:text-2xl text-green-800 mb-6 font-semibold text-center">A decentralized, community-driven procurement model for cost-efficiency and accessibility.</h2>
        <p className="text-lg text-green-900 mb-10 max-w-2xl mx-auto font-medium text-center">
          Join curated group chats, coordinate bulk orders, plan shared logistics, and negotiate pricing together. Build trust and save through collective action.
        </p>
        {/* Group Discussions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Group Discussions</h3>
          <Input
            type="text"
            placeholder="Search by product, location, or need..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-green-200 bg-white text-green-900 text-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition mb-6"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {filteredGroups.map((g, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-6 w-6 text-green-700" />
                    <CardTitle className="text-lg text-green-900 font-bold">{g.name}</CardTitle>
                  </div>
                  <CardDescription className="text-green-800 mb-1">{g.type} • {g.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-green-900 font-medium mb-2">Members: {g.members}</div>
                  <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Join Group</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Bulk Purchasing Coordination */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Bulk Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/95 rounded-2xl shadow-xl">
              <thead>
                <tr className="text-green-900 font-bold text-left">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Participants</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {mockBulkOrders.map((o, idx) => (
                  <tr key={idx} className="border-t border-green-100">
                    <td className="px-4 py-2">{o.product}</td>
                    <td className="px-4 py-2">{o.quantity}</td>
                    <td className="px-4 py-2">{o.participants}</td>
                    <td className="px-4 py-2">{o.status}</td>
                    <td className="px-4 py-2">{o.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Shared Logistics Planning */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Shared Logistics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mockLogistics.map((l, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                <CardHeader>
                  <Truck className="h-6 w-6 text-green-700 mb-2" />
                  <CardTitle className="text-lg text-green-900 font-bold">Logistics Note</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-800 text-base font-medium">{l.note}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Transparent Pricing & Negotiation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Transparent Pricing & Negotiation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mockNegotiations.map((n, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
                <CardHeader>
                  <DollarSign className="h-6 w-6 text-green-700 mb-2" />
                  <CardTitle className="text-lg text-green-900 font-bold">{n.group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-green-800 text-base font-medium mb-2">Supplier Offer: <span className="font-bold">{n.offer}</span></div>
                  <div className="text-blue-800 text-base font-medium mb-2">Group Counter: <span className="font-bold">{n.counter}</span></div>
                  <div className="text-green-900 font-semibold">Status: {n.status}</div>
                  <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold mt-2">Negotiate</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativePurchasingPage; 