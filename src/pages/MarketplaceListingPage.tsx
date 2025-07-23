import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initialListings = [
  {
    image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png",
    title: "Organic Tomatoes",
    description: "Fresh, sun-ripened organic tomatoes from our farm.",
    quantity: 100,
    quality: 9,
    bulk: true,
    orderLimit: 20,
    initialPrice: 20,
    buyNowPrice: 30,
    unit: "kg"
  }
];

const MarketplaceListingPage = () => {
  const [listings, setListings] = useState(initialListings);
  const [form, setForm] = useState({
    image: "",
    imageFile: undefined as File | undefined,
    title: "",
    description: "",
    quantity: 0,
    quality: 5,
    bulk: false,
    orderLimit: 1,
    initialPrice: 0,
    buyNowPrice: 0,
    unit: "kg"
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm(f => ({ ...f, imageFile: file }));
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = form.image;
    if (form.imageFile) {
      imageUrl = imagePreview;
    }
    setListings([
      ...listings,
      {
        ...form,
        image: imageUrl,
        quantity: Number(form.quantity),
        quality: Number(form.quality),
        orderLimit: Number(form.orderLimit),
        initialPrice: Number(form.initialPrice),
        buyNowPrice: Number(form.buyNowPrice),
      },
    ]);
    setForm({ image: "", imageFile: undefined, title: "", description: "", quantity: 0, quality: 5, bulk: false, orderLimit: 1, initialPrice: 0, buyNowPrice: 0, unit: "kg" });
    setImagePreview("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-8 drop-shadow-lg text-center">Marketplace Listing</h1>
        <form onSubmit={handleSubmit} className="bg-white/90 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Add New Listing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-green-900 font-medium mb-1">Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-lg mb-4 border border-green-200" />
              )}
              <label className="block text-green-900 font-medium mb-1">Image URL (optional)</label>
              <input type="text" name="image" value={form.image} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" placeholder="Paste image URL or use default" />
              <label className="block text-green-900 font-medium mb-1">Title</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" required />
              <label className="block text-green-900 font-medium mb-1">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" required />
              <label className="block text-green-900 font-medium mb-1">Quantity</label>
              <input type="number" name="quantity" value={form.quantity} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" min={0} required />
              <label className="block text-green-900 font-medium mb-1">Unit</label>
              <select name="unit" value={form.unit} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4">
                <option value="kg">kg</option>
                <option value="box">box</option>
                <option value="bunch">bunch</option>
                <option value="item">item</option>
              </select>
            </div>
            <div>
              <label className="block text-green-900 font-medium mb-1">Quality (out of 10)</label>
              <input type="number" name="quality" value={form.quality} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" min={1} max={10} required />
              <label className="block text-green-900 font-medium mb-1">Bulk Order Available?</label>
              <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="bulk" value="true" checked={form.bulk === true} onChange={() => setForm({ ...form, bulk: true })} /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="bulk" value="false" checked={form.bulk === false} onChange={() => setForm({ ...form, bulk: false })} /> No
                </label>
              </div>
              <label className="block text-green-900 font-medium mb-1">Order Limit</label>
              <input type="number" name="orderLimit" value={form.orderLimit} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" min={1} required />
              <label className="block text-green-900 font-medium mb-1">Initial Listing Price</label>
              <input type="number" name="initialPrice" value={form.initialPrice} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" min={0} required />
              <label className="block text-green-900 font-medium mb-1">Buy Now Price</label>
              <input type="number" name="buyNowPrice" value={form.buyNowPrice} onChange={handleChange} className="w-full border border-green-200 rounded-lg px-3 py-2 mb-4" min={0} required />
            </div>
          </div>
          <Button type="submit" className="mt-4 bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition w-full font-bold">Add Listing</Button>
        </form>
        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((item, idx) => (
            <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={item.image || "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"} alt={item.title} className="object-cover w-full h-full" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 font-bold mb-1">{item.title}</CardTitle>
                <CardDescription className="text-green-800 mb-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-2">
                  <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold">Quantity: {item.quantity} {item.unit}</span>
                  <span className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">Quality: {"★".repeat(item.quality)}{"☆".repeat(10 - item.quality)}</span>
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">Bulk: {item.bulk ? "Yes" : "No"}</span>
                  <span className="bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">Order Limit: {item.orderLimit}</span>
                </div>
                <div className="flex gap-6 items-center mt-2">
                  <span className="text-green-800 font-bold">Initial: ${item.initialPrice}/{item.unit}</span>
                  <span className="text-green-900 font-extrabold text-lg">Buy Now: ${item.buyNowPrice}/{item.unit}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceListingPage; 