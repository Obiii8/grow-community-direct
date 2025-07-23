import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, BarChart, TrendingUp, DollarSign, ShoppingCart, List, AlertCircle, CheckCircle, Filter, Download, Info } from "lucide-react";

const categories = ["All", "Fresh Produce", "Livestock", "Value-Added Goods"];
const mockMarketPrices = [
  { product: "Tomatoes", price: 3.2, avg: 3.0, trend: [2.8, 3.0, 3.1, 3.2, 3.3, 3.2, 3.2], location: "Victoria", quality: "A" },
  { product: "Lettuce", price: 2.1, avg: 2.3, trend: [2.5, 2.4, 2.3, 2.2, 2.1, 2.1, 2.1], location: "NSW", quality: "B" },
  { product: "Eggs", price: 6.5, avg: 6.2, trend: [6.0, 6.1, 6.3, 6.4, 6.5, 6.5, 6.5], location: "Victoria", quality: "A" }
];
const mockListings = 12;
const mockOrderVolume = 34;
const mockEarnings = 1280.5;
const mockSales = [10, 12, 8, 15, 20, 18, 22];
const mockConversion = 0.18;
const mockDemographics = { "Retailers": 60, "Consumers": 30, "Agents": 10 };
const mockLogistics = { deliveryTime: 2.1, returnRate: 0.03 };
const mockBenchmarks = { sales: 16, conversion: 0.15 };
const mockForecast = { suggestion: "Increase tomato output next month based on projected shortage.", confidence: 0.82, risk: "Low" };
const mockAlerts = [
  { type: "undervalued", message: "Your lettuce listing is below market average.", severity: "warning" },
  { type: "timing", message: "Best time to update tomato prices: Monday 8am.", severity: "info" },
  { type: "inventory", message: "Eggs inventory moving slowly.", severity: "alert" }
];

const MarketDashboardPage = () => {
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState({ product: "All", location: "All", quality: "All" });
  const [showExport, setShowExport] = useState(false);
  const [simPrice, setSimPrice] = useState(0);
  const [simResult, setSimResult] = useState<string | null>(null);

  // Simulate price change effect
  const handleSimulate = () => {
    if (simPrice > 0) {
      setSimResult(`Estimated sales drop: ${(simPrice * 0.8).toFixed(1)} units/week. Revenue: $${(simPrice * 18).toFixed(2)}`);
    } else {
      setSimResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg text-center">Market Dashboard</h1>
        <h2 className="text-lg md:text-2xl text-green-800 mb-8 font-semibold text-center">Real-time insights and analytics for smarter market participation</h2>
        {/* Category Switcher */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(c => (
            <Button key={c} variant={category === c ? "default" : "outline"} className="rounded-full px-6" onClick={() => setCategory(c)}>{c}</Button>
          ))}
        </div>
        {/* Dashboard Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <Card className="bg-white/95 shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <DollarSign className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Market Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">${mockMarketPrices[0].price.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Live • {new Date().toLocaleTimeString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <List className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Active Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{mockListings}</div>
              <div className="text-xs text-muted-foreground">Current</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <ShoppingCart className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Weekly Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{mockOrderVolume}</div>
              <div className="text-xs text-muted-foreground">This week</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <TrendingUp className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">${mockEarnings.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </CardContent>
          </Card>
        </div>
        {/* Real-Time Market Pricing */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-green-900">Market Pricing</h3>
            <Filter className="h-5 w-5 text-green-700" />
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.product} onChange={e => setPriceFilter(f => ({ ...f, product: e.target.value }))}>
              <option>All</option>
              {mockMarketPrices.map(p => <option key={p.product}>{p.product}</option>)}
            </select>
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.location} onChange={e => setPriceFilter(f => ({ ...f, location: e.target.value }))}>
              <option>All</option>
              {[...new Set(mockMarketPrices.map(p => p.location))].map(l => <option key={l}>{l}</option>)}
            </select>
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.quality} onChange={e => setPriceFilter(f => ({ ...f, quality: e.target.value }))}>
              <option>All</option>
              {[...new Set(mockMarketPrices.map(p => p.quality))].map(q => <option key={q}>{q}</option>)}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/95 rounded-xl shadow">
              <thead>
                <tr className="text-green-900 font-bold text-left">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Your Price</th>
                  <th className="px-4 py-2">Market Avg</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Quality</th>
                  <th className="px-4 py-2">Trend (7d)</th>
                </tr>
              </thead>
              <tbody>
                {mockMarketPrices.filter(p =>
                  (priceFilter.product === "All" || p.product === priceFilter.product) &&
                  (priceFilter.location === "All" || p.location === priceFilter.location) &&
                  (priceFilter.quality === "All" || p.quality === priceFilter.quality)
                ).map((p, idx) => (
                  <tr key={idx} className="border-t border-green-100">
                    <td className="px-4 py-2 font-semibold">{p.product}</td>
                    <td className="px-4 py-2">${p.price.toFixed(2)}</td>
                    <td className="px-4 py-2">${p.avg.toFixed(2)}</td>
                    <td className="px-4 py-2">{p.location}</td>
                    <td className="px-4 py-2">{p.quality}</td>
                    <td className="px-4 py-2">
                      {/* Placeholder for line chart */}
                      <span className="inline-block w-24 h-6 bg-gradient-to-r from-green-200 to-green-400 rounded-full" title={p.trend.join(", ")}></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-muted-foreground mt-2 flex items-center gap-2">
            <Info className="h-4 w-4" />
            Data updated {new Date().toLocaleTimeString()} • Source: Local Market Aggregator
          </div>
        </section>
        {/* Demand Forecasting */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Demand Forecasting</h3>
          <Card className="bg-white/95 shadow-xl mb-4">
            <CardContent className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div>
                <div className="text-green-900 font-semibold mb-2">{mockForecast.suggestion}</div>
                <div className="text-green-800 text-sm">Confidence: <span className="font-bold">{(mockForecast.confidence * 100).toFixed(0)}%</span> • Risk: <span className="font-bold">{mockForecast.risk}</span></div>
              </div>
              <div className="flex flex-col items-center">
                {/* Placeholder for forecast chart */}
                <BarChart className="h-16 w-16 text-green-700 mb-2" />
                <span className="text-xs text-muted-foreground">AI-powered forecast</span>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Performance Analytics */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-green-900">Performance Analytics</h3>
            <Button size="sm" variant="outline" onClick={() => setShowExport(true)} className="flex items-center gap-2"><Download className="h-4 w-4" /> Export Data</Button>
            {showExport && <span className="text-green-700 font-semibold">Exported as CSV (mock)</span>}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Product Sales (7d)</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for line chart */}
                <LineChart className="h-24 w-full text-green-700 mb-2" />
                <div className="text-green-900 font-bold text-2xl">{mockSales.reduce((a, b) => a + b, 0)} units</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-900 font-bold text-2xl">{(mockConversion * 100).toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">Benchmark: {(mockBenchmarks.conversion * 100).toFixed(1)}%</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Customer Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-900 font-medium">
                  {Object.entries(mockDemographics).map(([k, v]) => (
                    <li key={k}>{k}: {v}%</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Logistics Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-900 font-bold">Avg Delivery: {mockLogistics.deliveryTime} days</div>
                <div className="text-green-800">Return Rate: {(mockLogistics.returnRate * 100).toFixed(1)}%</div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Revenue Optimization Tools */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Revenue Optimization</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Pricing Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-900 font-medium mb-2">
                  <li>Raise tomato price by 5% to match market.</li>
                  <li>Consider discounting eggs to boost sales.</li>
                </ul>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-yellow-700 text-sm">Undervalued listing detected.</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Simulate Price Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center mb-2">
                  <Input type="number" min={0} value={simPrice} onChange={e => setSimPrice(Number(e.target.value))} className="w-32" placeholder="New price ($)" />
                  <Button size="sm" onClick={handleSimulate}>Simulate</Button>
                </div>
                {simResult && <div className="text-green-900 font-medium">{simResult}</div>}
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Alerts & Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mockAlerts.map((a, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${a.severity === "alert" ? "text-red-700" : a.severity === "warning" ? "text-yellow-700" : "text-blue-700"}`}>
                      {a.severity === "alert" && <AlertCircle className="h-5 w-5" />}
                      {a.severity === "warning" && <AlertCircle className="h-5 w-5" />}
                      {a.severity === "info" && <CheckCircle className="h-5 w-5" />}
                      <span>{a.message}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketDashboardPage; 