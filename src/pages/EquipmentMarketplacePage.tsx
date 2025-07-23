import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EquipmentMarketplacePage = () => {
  const [listings, setListings] = useState([
    {
      title: "Used Tractor",
      description: "John Deere, well maintained, 2015 model.",
      isPublic: true
    },
    {
      title: "Organic Fertilizer (Bulk)",
      description: "High-quality compost, available in 1-ton lots.",
      isPublic: true
    }
  ]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    isPublic: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setForm({
      ...form,
      [name]: fieldValue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setListings([...listings, { ...form }]);
    setForm({ title: "", description: "", isPublic: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-lg text-center">Equipment & Input Marketplace</h1>
        <h2 className="text-xl md:text-2xl text-green-800 mb-8 font-semibold text-center">List, discover, and exchange farm equipment, tools, and inputs.</h2>
        <form onSubmit={handleSubmit} className="bg-white/90 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Add New Listing</h3>
          <div className="mb-4">
            <label className="block text-green-900 font-medium mb-1">Title</label>
            <Input type="text" name="title" value={form.title} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-green-900 font-medium mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2" required />
          </div>
          <div className="mb-6 flex items-center gap-4">
            <input type="checkbox" name="isPublic" checked={form.isPublic} onChange={handleChange} id="isPublic" className="h-4 w-4" />
            <label htmlFor="isPublic" className="text-green-900 font-medium">Make this listing public</label>
          </div>
          <Button type="submit" className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition w-full font-bold">Add Listing</Button>
        </form>
        <div className="grid md:grid-cols-2 gap-8">
          {listings.filter(l => l.isPublic).map((item, idx) => (
            <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 font-bold mb-1">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800 mb-2">{item.description}</CardDescription>
                <span className="inline-block bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">{item.isPublic ? "Public" : "Private"}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentMarketplacePage; 