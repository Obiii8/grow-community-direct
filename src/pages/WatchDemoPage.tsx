import React from "react";
import { Button } from "@/components/ui/button";

const WatchDemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-white/90 rounded-2xl shadow-xl p-10 max-w-xl w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-lg text-center">Watch Demo</h1>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
          <span className="text-2xl text-gray-500 font-semibold">Video Coming Soon</span>
        </div>
        <p className="text-green-900 text-lg text-center mb-4">We're preparing a detailed walkthrough of the Freedom Farms platform. Check back soon for a full demo video!</p>
        <Button asChild className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition font-bold mt-2">
          <a href="/farmers">Back to Farmers Page</a>
        </Button>
      </div>
    </div>
  );
};

export default WatchDemoPage; 