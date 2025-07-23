import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const JoinCommunityEventPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-card max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-primary text-center">Next Community Event Coming Soon</h2>
        <p className="text-muted-foreground mb-6 text-center">RSVP below to be notified and reserve your spot!</p>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">Thank you for your RSVP!</h3>
            <p className="text-muted-foreground">We'll be in touch with event details soon.</p>
          </div>
        ) : (
          <>
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
              <label className="block text-sm font-medium mb-1" htmlFor="occupation">Occupation</label>
              <input className="w-full border rounded-md px-3 py-2" id="occupation" name="occupation" value={form.occupation} onChange={handleChange} />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1" htmlFor="comment">Comment</label>
              <textarea className="w-full border rounded-md px-3 py-2" id="comment" name="comment" value={form.comment} onChange={handleChange} rows={3} />
            </div>
            <Button type="submit" className="w-full bg-primary text-white py-2 rounded-md font-semibold">RSVP</Button>
          </>
        )}
      </form>
    </div>
  );
};

export default JoinCommunityEventPage; 