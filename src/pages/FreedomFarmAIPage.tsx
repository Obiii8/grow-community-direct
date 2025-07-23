import React, { useState } from "react";

const aiTools = [
  {
    key: "yield-predictor",
    name: "Yield Predictor",
    description:
      "AI-powered forecasting for better harvest planning. Leverage advanced data models to anticipate yields, optimize crop allocation, and make smarter decisions—designed for sustainable, resilient farming.",
    placeholder: "Yield prediction dashboard launching soon.",
  },
  {
    key: "cost-tracker",
    name: "Cost Tracker",
    description:
      "Real-time expense monitoring and profitability analysis. Track your inputs and outputs, identify cost drivers, and maximize returns with actionable insights—tailored for every scale of operation.",
    placeholder: "Cost tracker dashboard launching soon.",
  },
  {
    key: "pathogen-diagnostic",
    name: "Pathogen Diagnostic",
    description:
      "Early detection of plant diseases and pests. Harness AI-powered image and data analysis to catch threats before they spread, protect your yields, and build a healthier, more resilient crop system.",
    placeholder: "Pathogen diagnostic tool launching soon.",
  },
  {
    key: "crop-calendar",
    name: "Crop Calendar",
    description:
      "Optimized planting and harvesting schedules. Access intelligent recommendations for timing, varieties, and practices, customized to your climate and market needs for sustainable, profitable harvests.",
    placeholder: "Crop calendar assistant launching soon.",
  },
];

export default function FreedomFarmAIPage() {
  const [selected, setSelected] = useState(aiTools[0].key);
  const currentTool = aiTools.find((tool) => tool.key === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-2 drop-shadow-lg text-center">Freedom Farm AI</h1>
        <p className="text-lg text-green-800 mb-8 text-center max-w-xl mx-auto">
          Next-generation digital tools to empower farmers and streamline your growing journey.
        </p>
        {/* Tabs for each AI Tool */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {aiTools.map((tool) => (
            <button
              key={tool.key}
              className={`py-2 px-4 rounded-xl font-medium border transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ${
                selected === tool.key
                  ? "bg-green-700 text-white border-green-700 shadow"
                  : "bg-white text-green-700 border-green-300 hover:border-green-600"
              }`}
              onClick={() => setSelected(tool.key)}
              aria-selected={selected === tool.key}
              aria-controls={`ai-tool-${tool.key}`}
            >
              {tool.name}
            </button>
          ))}
        </div>
        {/* Display Selected Tool */}
        <div className="border rounded-2xl shadow-xl p-8 bg-white/90" id={`ai-tool-${currentTool.key}`}> 
          <div className="mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-semibold text-sm">
              Beta – Coming Soon
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">{currentTool.name}</h2>
          <p className="text-green-800 text-lg mb-8">{currentTool.description}</p>
          <div className="text-center text-green-400 text-xl py-10 font-medium">
            {currentTool.placeholder}
          </div>
        </div>
      </div>
    </div>
  );
} 