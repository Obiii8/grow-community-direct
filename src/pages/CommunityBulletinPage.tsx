import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Briefcase, Users, MapPin, PlusCircle } from "lucide-react";

const mockPosts = [
  { type: "Job", title: "Farmhand Needed", region: "Victoria", userType: "farmer", description: "Looking for a reliable farmhand for the spring season.", poster: "Green Valley Farms" },
  { type: "Workshop", title: "Organic Certification Workshop", region: "NSW", userType: "agent", description: "Learn about organic certification requirements.", poster: "AgriCert" },
  { type: "Market", title: "Weekend Farmers Market", region: "Victoria", userType: "buyer", description: "Join us for fresh produce and local goods.", poster: "Melbourne Markets" }
];

const mockEvents = [
  { title: "Soil Health Seminar", date: "2024-08-10", region: "Victoria", description: "A deep dive into regenerative soil practices.", rsvp: false },
  { title: "Harvest Festival", date: "2024-09-15", region: "NSW", description: "Celebrate the season with local food and music.", rsvp: false }
];

const regions = ["All", "Victoria", "NSW", "Queensland", "WA", "SA"];
const categories = ["All", "Job", "Workshop", "Market"];
const userTypes = ["All", "farmer", "buyer", "agent"];

const CommunityBulletinPage = () => {
  const [region, setRegion] = useState("All");
  const [category, setCategory] = useState("All");
  const [userType, setUserType] = useState("All");
  const [showPostForm, setShowPostForm] = useState(false);
  const [posts, setPosts] = useState(mockPosts);
  const [events, setEvents] = useState(mockEvents);
  const [newPost, setNewPost] = useState({ type: "Job", title: "", region: "All", userType: "farmer", description: "", poster: "" });
  const [newEvent, setNewEvent] = useState({ title: "", date: "", region: "All", description: "", rsvp: false });

  const filteredPosts = posts.filter(
    p => (region === "All" || p.region === region) && (category === "All" || p.type === category) && (userType === "All" || p.userType === userType)
  );
  const filteredEvents = events.filter(e => region === "All" || e.region === region);

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    setPosts([{ ...newPost }, ...posts]);
    setShowPostForm(false);
    setNewPost({ type: "Job", title: "", region: "All", userType: "farmer", description: "", poster: "" });
  };
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents([{ ...newEvent }, ...events]);
    setNewEvent({ title: "", date: "", region: "All", description: "", rsvp: false });
  };
  const handleRSVP = (idx: number) => {
    setEvents(events.map((e, i) => i === idx ? { ...e, rsvp: true } : e));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg text-center">Community Bulletin Board</h1>
        <h2 className="text-xl md:text-2xl text-green-800 mb-6 font-semibold text-center">A transparent, user-driven noticeboard for the local food network.</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <select value={region} onChange={e => setRegion(e.target.value)} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
            {regions.map(r => <option key={r}>{r}</option>)}
          </select>
          <select value={category} onChange={e => setCategory(e.target.value)} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={userType} onChange={e => setUserType(e.target.value)} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
            {userTypes.map(u => <option key={u}>{u}</option>)}
          </select>
          <Button onClick={() => setShowPostForm(!showPostForm)} className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold flex items-center gap-2">
            <PlusCircle className="h-5 w-5" /> Post Opportunity
          </Button>
        </div>
        {showPostForm && (
          <form onSubmit={handleAddPost} className="bg-white/90 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Share an Opportunity or Alert</h3>
            <div className="mb-4 flex gap-4">
              <select name="type" value={newPost.type} onChange={handlePostChange} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
                <option value="Job">Job</option>
                <option value="Workshop">Workshop</option>
                <option value="Market">Market</option>
              </select>
              <select name="region" value={newPost.region} onChange={handlePostChange} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
                {regions.map(r => <option key={r}>{r}</option>)}
              </select>
              <select name="userType" value={newPost.userType} onChange={handlePostChange} className="px-4 py-2 rounded-lg border-2 border-green-200 bg-white text-green-900 font-semibold">
                {userTypes.map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <Input type="text" name="title" value={newPost.title} onChange={handlePostChange} placeholder="Title" className="w-full border border-green-200 rounded-lg px-3 py-2" required />
            </div>
            <div className="mb-4">
              <Input type="text" name="poster" value={newPost.poster} onChange={handlePostChange} placeholder="Your Name or Business" className="w-full border border-green-200 rounded-lg px-3 py-2" required />
            </div>
            <div className="mb-4">
              <textarea name="description" value={newPost.description} onChange={handlePostChange} className="w-full border border-green-200 rounded-lg px-3 py-2" placeholder="Description" required />
            </div>
            <Button type="submit" className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition w-full font-bold">Post</Button>
          </form>
        )}
        {/* Dynamic Feed */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Opportunities & Alerts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((p, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {p.type === "Job" && <Briefcase className="h-6 w-6 text-green-700" />}
                    {p.type === "Workshop" && <Users className="h-6 w-6 text-green-700" />}
                    {p.type === "Market" && <MapPin className="h-6 w-6 text-green-700" />}
                    <CardTitle className="text-lg text-green-900 font-bold">{p.title}</CardTitle>
                  </div>
                  <CardDescription className="text-green-800 mb-1">{p.region} • {p.userType} • {p.poster}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-green-900 font-medium mb-2">{p.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Event Listings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvents.map((e, idx) => (
              <Card key={idx} className="bg-white/95 rounded-2xl shadow-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-6 w-6 text-green-700" />
                    <CardTitle className="text-lg text-green-900 font-bold">{e.title}</CardTitle>
                  </div>
                  <CardDescription className="text-green-800 mb-1">{e.region} • {e.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-green-900 font-medium mb-2">{e.description}</div>
                  <Button onClick={() => handleRSVP(idx)} disabled={e.rsvp} className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">
                    {e.rsvp ? "RSVP'd" : "RSVP & Add to Calendar"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBulletinPage; 