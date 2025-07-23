import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { TrendingUp, DollarSign, ShoppingCart, List, AlertCircle, CheckCircle, Filter, Download, Info, ShieldCheck, Link2 } from "lucide-react";

const categories = ["All", "Fresh Produce", "Livestock", "Value-Added Goods"];
const badgeColors = { gold: "bg-yellow-400 text-yellow-900", silver: "bg-gray-300 text-gray-900", bronze: "bg-orange-400 text-orange-900" };

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useApi = (endpoint: string, initial: any) => {
  const [data, setData] = useState(initial);
  useEffect(() => {
    fetcher(endpoint).then(setData).catch(() => setData(initial));
  }, [endpoint]);
  return data;
};

type MarketPrice = { product: string; price: number; avg: number; trend: number[]; location: string; quality: string };
type SalesAnalytics = { date: string; sales: number; conversion?: number; benchmark?: number; range?: string };
type Demographic = { type: string; percent: number };
type Logistics = { deliveryTime: number; returnRate: number };
type Forecast = { suggestion: string; confidence: number; risk: string };
type Alert = { severity: string; message: string; recommendation?: string };
type TrustScore = { score: number; badge: string };
type Blockchain = { tx: string; url: string; verified: boolean };

const MarketParticipationDashboardPage = () => {
  // API data
  const marketPrices = useApi("/api/market-prices", []) as MarketPrice[];
  const listings = useApi("/api/listings", []) as any[];
  const orders = useApi("/api/orders", []) as any[];
  const earnings = useApi("/api/earnings", { month: 0 }) as { month: number };
  const salesAnalytics = useApi("/api/sales-analytics", []) as SalesAnalytics[];
  const demographics = useApi("/api/demographics", []) as Demographic[];
  const logistics = useApi("/api/logistics", { deliveryTime: 0, returnRate: 0 }) as Logistics;
  const forecast = useApi("/api/forecast", { suggestion: "", confidence: 0, risk: "" }) as Forecast;
  const alerts = useApi("/api/alerts", []) as Alert[];
  const trustScore = useApi("/api/trust-score", { score: 0, badge: "bronze" }) as TrustScore;
  const blockchain = useApi("/api/blockchain", { tx: "", url: "", verified: false }) as Blockchain;

  // UI state
  const [category, setCategory] = useState("All");
  const [priceFilter, setPriceFilter] = useState({ product: "All", location: "All", quality: "All" });
  const [showExport, setShowExport] = useState(false);
  const [simPrice, setSimPrice] = useState(0);
  const [simResult, setSimResult] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState("7d");

  // Notification system
  useEffect(() => {
    if (alerts && alerts.length > 0) {
      alerts.forEach((a: Alert) => {
        toast[a.severity === "alert" ? "error" : a.severity === "warning" ? "warn" : "info"](a.message);
      });
    }
  }, [alerts]);

  // Simulate price change effect
  const handleSimulate = () => {
    if (simPrice > 0) {
      setSimResult(`Estimated sales drop: ${(simPrice * 0.8).toFixed(1)} units/week. Revenue: $${(simPrice * 18).toFixed(2)}`);
      toast.info(`Simulation complete: See estimated impact for price $${simPrice}`);
    } else {
      setSimResult(null);
    }
  };

  // Data export (CSV)
  const handleExport = () => {
    setShowExport(true);
    toast.success("Data exported as CSV (mock)");
    setTimeout(() => setShowExport(false), 2000);
  };

  // Trust badge color
  const badgeColor = badgeColors[trustScore.badge as keyof typeof badgeColors] || badgeColors.bronze;

  // Chart data
  const priceChartData = marketPrices.filter((p: MarketPrice) =>
    (priceFilter.product === "All" || p.product === priceFilter.product) &&
    (priceFilter.location === "All" || p.location === priceFilter.location) &&
    (priceFilter.quality === "All" || p.quality === priceFilter.quality)
  );
  const salesChartData = salesAnalytics.filter((s: SalesAnalytics) =>
    dateRange === "7d" ? true : dateRange === "30d" ? s.range === "30d" : s.range === "90d"
  );
  const demographicsData = demographics.map((d: Demographic) => ({ name: d.type, value: d.percent }));
  const logisticsData = [
    { name: "Delivery Time", value: logistics.deliveryTime },
    { name: "Return Rate", value: logistics.returnRate * 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-8 dark:bg-neutral-900">
      <ToastContainer position="top-right" />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg text-center dark:text-green-200">Market Participation Dashboard</h1>
        <h2 className="text-lg md:text-2xl text-green-800 mb-8 font-semibold text-center dark:text-green-300">Empowering users to engage, track, and optimize in real time</h2>
        {/* Trust Score & Blockchain */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Card className={`shadow-xl flex flex-row items-center gap-4 px-6 py-3 ${badgeColor}`}>
            <ShieldCheck className="h-7 w-7" />
            <div>
              <div className="font-bold">Trust Score: <span>{trustScore.score}</span>/100</div>
              <div className="text-xs">Marketplace badge: {trustScore.badge.charAt(0).toUpperCase() + trustScore.badge.slice(1)}</div>
            </div>
          </Card>
          <Card className="bg-white/95 shadow-xl flex flex-row items-center gap-4 px-6 py-3 dark:bg-neutral-800">
            <Link2 className="h-7 w-7 text-green-700" />
            <div>
              <div className="font-bold text-green-900 dark:text-green-200">Blockchain Verified</div>
              {blockchain.verified ? (
                <a href={blockchain.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline">View Transaction</a>
              ) : (
                <span className="text-xs text-red-700">Not verified</span>
              )}
            </div>
          </Card>
        </div>
        {/* Category Switcher */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(c => (
            <Button key={c} variant={category === c ? "default" : "outline"} className="rounded-full px-6" onClick={() => setCategory(c)}>{c}</Button>
          ))}
        </div>
        {/* Dashboard Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <DollarSign className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Market Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 dark:text-green-200">${marketPrices[0]?.price?.toFixed(2) || "-"}</div>
              <div className="text-xs text-muted-foreground">Live • {new Date().toLocaleTimeString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <List className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Active Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 dark:text-green-200">{listings.length}</div>
              <div className="text-xs text-muted-foreground">Current</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <ShoppingCart className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Weekly Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 dark:text-green-200">{orders.length}</div>
              <div className="text-xs text-muted-foreground">This week</div>
            </CardContent>
          </Card>
          <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
            <CardHeader className="flex flex-row items-center gap-3">
              <TrendingUp className="h-7 w-7 text-green-700" />
              <CardTitle className="text-lg">Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 dark:text-green-200">${earnings.month?.toLocaleString() || "-"}</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </CardContent>
          </Card>
        </div>
        {/* Real-Time Market Pricing */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-green-900 dark:text-green-200">Market Pricing</h3>
            <Filter className="h-5 w-5 text-green-700" />
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.product} onChange={e => setPriceFilter(f => ({ ...f, product: e.target.value }))}>
              <option>All</option>
              {marketPrices.map((p: MarketPrice) => <option key={p.product}>{p.product}</option>)}
            </select>
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.location} onChange={e => setPriceFilter(f => ({ ...f, location: e.target.value }))}>
              <option>All</option>
              {[...new Set(marketPrices.map((p: MarketPrice) => p.location))].map(l => <option key={l}>{l}</option>)}
            </select>
            <select className="px-2 py-1 rounded border border-green-200" value={priceFilter.quality} onChange={e => setPriceFilter(f => ({ ...f, quality: e.target.value }))}>
              <option>All</option>
              {[...new Set(marketPrices.map((p: MarketPrice) => p.quality))].map(q => <option key={q}>{q}</option>)}
            </select>
            <select className="px-2 py-1 rounded border border-green-200" value={dateRange} onChange={e => setDateRange(e.target.value)}>
              <option value="7d">7d</option>
              <option value="30d">30d</option>
              <option value="90d">90d</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/95 rounded-xl shadow dark:bg-neutral-800">
              <thead>
                <tr className="text-green-900 font-bold text-left dark:text-green-200">
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Your Price</th>
                  <th className="px-4 py-2">Market Avg</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Quality</th>
                  <th className="px-4 py-2">Trend</th>
                </tr>
              </thead>
              <tbody>
                {priceChartData.map((p: MarketPrice, idx: number) => (
                  <tr key={idx} className="border-t border-green-100">
                    <td className="px-4 py-2 font-semibold">{p.product}</td>
                    <td className="px-4 py-2">${p.price?.toFixed(2) || "-"}</td>
                    <td className="px-4 py-2">${p.avg?.toFixed(2) || "-"}</td>
                    <td className="px-4 py-2">{p.location}</td>
                    <td className="px-4 py-2">{p.quality}</td>
                    <td className="px-4 py-2">
                      <ResponsiveContainer width={100} height={30}>
                        <LineChart data={p.trend?.map((y: number, i: number) => ({ x: i, y })) || []}>
                          <Line type="monotone" dataKey="y" stroke="#4e944f" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
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
          <h3 className="text-2xl font-bold text-green-900 mb-4 dark:text-green-200">Demand Forecasting</h3>
          <Card className="bg-white/95 shadow-xl mb-4 dark:bg-neutral-800">
            <CardContent className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div>
                <div className="text-green-900 font-semibold mb-2 dark:text-green-200">{forecast.suggestion}</div>
                <div className="text-green-800 text-sm dark:text-green-300">Confidence: <span className="font-bold">{(forecast.confidence * 100).toFixed(0)}%</span> • Risk: <span className="font-bold">{forecast.risk}</span></div>
              </div>
              <div className="flex flex-col items-center">
                <ResponsiveContainer width={120} height={80}>
                  <BarChart data={[{ name: "Forecast", value: forecast.confidence * 100 }]}> <Bar dataKey="value" fill="#4e944f" /> <XAxis dataKey="name" hide /><YAxis hide /><Tooltip /> </BarChart>
                </ResponsiveContainer>
                <span className="text-xs text-muted-foreground">AI-powered forecast</span>
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Performance Analytics */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-green-900 dark:text-green-200">Performance Analytics</h3>
            <Button size="sm" variant="outline" onClick={handleExport} className="flex items-center gap-2"><Download className="h-4 w-4" /> Export Data</Button>
            {showExport && <span className="text-green-700 font-semibold">Exported as CSV (mock)</span>}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Product Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={salesChartData} margin={{ left: 10, right: 10 }}>
                    <Line type="monotone" dataKey="sales" stroke="#4e944f" strokeWidth={2} dot={false} />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
                <div className="text-green-900 font-bold text-2xl dark:text-green-200">{salesChartData.reduce((a: number, b: SalesAnalytics) => a + (b.sales || 0), 0)} units</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-green-900 font-bold text-2xl dark:text-green-200">{salesAnalytics[0]?.conversion ? (salesAnalytics[0].conversion * 100).toFixed(1) : "-"}%</div>
                <div className="text-xs text-muted-foreground">Benchmark: {salesAnalytics[0]?.benchmark ? (salesAnalytics[0].benchmark * 100).toFixed(1) : "-"}%</div>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Customer Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie data={demographicsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={40} label>
                      {demographicsData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={["#4e944f", "#b7b29e", "#ff914d"][idx % 3]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Logistics Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={logisticsData} margin={{ left: 10, right: 10 }}>
                    <Bar dataKey="value" fill="#4e944f" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-green-900 font-bold dark:text-green-200">Avg Delivery: {logistics.deliveryTime} days</div>
                <div className="text-green-800 dark:text-green-300">Return Rate: {(logistics.returnRate * 100).toFixed(1)}%</div>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Revenue Optimization Tools */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4 dark:text-green-200">Revenue Optimization</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Pricing Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-900 font-medium mb-2 dark:text-green-200">
                  <li>{alerts[0]?.recommendation || "No recommendations available."}</li>
                </ul>
                {alerts[0]?.severity && (
                  <div className={`flex items-center gap-2 ${alerts[0].severity === "alert" ? "text-red-700" : alerts[0].severity === "warning" ? "text-yellow-700" : "text-blue-700"}`}>
                    {alerts[0].severity === "alert" && <AlertCircle className="h-5 w-5" />}
                    {alerts[0].severity === "warning" && <AlertCircle className="h-5 w-5" />}
                    {alerts[0].severity === "info" && <CheckCircle className="h-5 w-5" />}
                    <span>{alerts[0].message}</span>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Simulate Price Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 items-center mb-2">
                  <Input type="number" min={0} value={simPrice} onChange={e => setSimPrice(Number(e.target.value))} className="w-32" placeholder="New price ($)" />
                  <Button size="sm" onClick={handleSimulate}>Simulate</Button>
                </div>
                {simResult && <div className="text-green-900 font-medium dark:text-green-200">{simResult}</div>}
              </CardContent>
            </Card>
            <Card className="bg-white/95 shadow-xl md:col-span-2 dark:bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-lg">Alerts & Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {alerts.map((a: Alert, idx: number) => (
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

export default MarketParticipationDashboardPage; 