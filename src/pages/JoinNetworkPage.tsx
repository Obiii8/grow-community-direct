import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const JoinNetworkPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    business: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or API
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-white p-8 rounded-lg shadow-card max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Thank you for registering!</h2>
          <p className="text-muted-foreground">We have received your details and will be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-card max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Register Now</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input className="w-full border rounded-md px-3 py-2" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input className="w-full border rounded-md px-3 py-2" id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
          <input className="w-full border rounded-md px-3 py-2" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
          <input className="w-full border rounded-md px-3 py-2" id="address" name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="business">Business (if applicable)</label>
          <input className="w-full border rounded-md px-3 py-2" id="business" name="business" value={form.business} onChange={handleChange} />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="comment">General Comment</label>
          <textarea className="w-full border rounded-md px-3 py-2" id="comment" name="comment" value={form.comment} onChange={handleChange} rows={3} />
        </div>
        <Button type="submit" className="w-full bg-primary text-white py-2 rounded-md font-semibold">Register Now</Button>
      </form>
    </div>
  );
};

export default JoinNetworkPage; 