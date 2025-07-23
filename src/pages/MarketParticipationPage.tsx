import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MarketParticipationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg text-center">Market Participation</h1>
        <p className="text-lg text-green-800 mb-8 text-center max-w-xl mx-auto">
          Join the movement to build resilient, local food systems. Learn how you can participate in regional markets, connect with buyers, and grow your farm business through Freedom Farm's collaborative platform.
        </p>
        <div className="flex flex-col gap-6 items-center">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 w-full text-center mb-6">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Why Participate?</h2>
            <p className="text-green-800 mb-4">
              Market participation opens doors to new buyers, better prices, and a supportive community. Whether you're a small grower or a large producer, Freedom Farm helps you access the tools and networks you need to succeed.
            </p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow p-6 w-full text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-2">How to Get Involved</h3>
            <ul className="text-green-800 mb-4 list-disc list-inside text-left mx-auto max-w-md">
              <li>Sign up as a grower or producer on Freedom Farm</li>
              <li>List your products and set your availability</li>
              <li>Connect with buyers, retailers, and local markets</li>
              <li>Participate in collaborative events and group sales</li>
              <li>Access analytics and AI tools to optimize your market strategy</li>
            </ul>
            <Link to="/join-network">
              <Button size="md" variant="outline" className="border-green-700 text-green-700 hover:bg-green-100 hover:text-green-900 font-bold">Join the Network</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}