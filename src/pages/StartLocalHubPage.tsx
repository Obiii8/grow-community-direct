import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, Users, Store, Calendar } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({ iconUrl, shadowUrl: iconShadow });

type FarmMarket = {
  id: number;
  name: string;
  type: string;
  position: [number, number];
  profile: {
    bio: string;
    stock: Array<{ product: string; price: string }>;
    image: string;
  };
};

const farmMarkets: FarmMarket[] = [
  {
    id: 1,
    name: "Darren",
    type: "Farmer",
    position: [-37.7587, 145.0064] as [number, number],
    profile: {
      bio: "Microgreens specialist in Thornbury, VIC.",
      stock: [{ product: "Microgreens", price: "$20/kg" }],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  },
  {
    id: 2,
    name: "Footscray Market",
    type: "Market",
    position: [-37.7997, 144.8996] as [number, number],
    profile: {
      bio: "Footscray Market - fresh produce, subscription boxes available.",
      stock: [
        { product: "Subscription Boxes", price: "$$" },
        { product: "Fresh Produce", price: "Varies" }
      ],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  },
  {
    id: 3,
    name: "Lizzy's Milk",
    type: "Farmer",
    position: [-37.8001, 144.9787] as [number, number],
    profile: {
      bio: "Lizzy's Milk - local dairy in Fitzroy.",
      stock: [{ product: "Milk", price: "$20" }],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  },
  {
    id: 4,
    name: "Papayas Cairns",
    type: "Farmer",
    position: [-16.9203, 145.7710] as [number, number],
    profile: {
      bio: "Fresh papayas from Cairns.",
      stock: [{ product: "Papayas", price: "$30/kg" }],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  },
  {
    id: 5,
    name: "Marco",
    type: "Market",
    position: [-34.9285, 138.6007] as [number, number],
    profile: {
      bio: "Local market offering fresh produce and artisan goods.",
      stock: [
        { product: "Fresh Vegetables", price: "$10/kg" },
        { product: "Handmade Soap", price: "$15/bar" }
      ],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  },
  {
    id: 6,
    name: "Liv",
    type: "Farmer",
    position: [-25.2744, 133.7751] as [number, number],
    profile: {
      bio: "Homemade Mango Chutney producer from QLD.",
      stock: [{ product: "Mango Chutney", price: "$10/jar" }],
      image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png"
    }
  }
];

const retailers = [
  { name: "Green Grocer", type: "Retailer", location: "Melbourne", image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png" },
  { name: "Urban Food Processor", type: "Processor", location: "Sydney", image: "/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png" }
];

const StartLocalHubPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
          Launch or Collaborate a Popup Market
        </h1>
        <p className="text-xl md:text-2xl text-green-800 mb-10 max-w-2xl mx-auto font-medium">
          Tap into your local network to create a pop up market, connect with local producers, and meet your new community.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Pick a Location - just a static card for now */}
          <Card className="bg-gradient-to-br from-green-200 via-green-100 to-yellow-100 shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/80 shadow-md">
                <MapPin className="h-8 w-8 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-green-900">Pick a Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-800 text-base font-medium">
                Choose the perfect spot in your community for a vibrant popup market.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Connect with Growers - Interactive Map */}
          <Card className="bg-gradient-to-br from-yellow-100 via-green-50 to-green-200 shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/80 shadow-md">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-green-900">Connect with Growers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                <MapContainer center={[-25.2744, 133.7751]} zoom={4} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }} className="rounded-xl">
                  <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {farmMarkets.filter(f => f.type === "Farmer").map(farm => (
                    <Marker key={farm.id} position={farm.position}>
                      <Popup>
                        <div className="text-center">
                          <img src={farm.profile.image} alt={farm.name} className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-green-400" />
                          <h3 className="font-bold">{farm.name}</h3>
                          <p className="text-sm mb-1">{farm.profile.bio}</p>
                          <ul className="text-xs text-left">
                            {farm.profile.stock.map((item, idx) => (
                              <li key={idx}>{item.product}: {item.price}</li>
                            ))}
                          </ul>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              <CardDescription className="text-green-800 text-base font-medium">
                Invite local farmers and producers to showcase their fresh, organic goods.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Find a Marketplace - Retailers/Processors */}
          <Card className="bg-gradient-to-br from-green-100 via-yellow-50 to-green-200 shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/80 shadow-md">
                <Store className="h-8 w-8 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-green-900">Find a Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 items-center mb-4">
                {retailers.map((ret, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/80 rounded-lg p-3 shadow">
                    <img src={ret.image} alt={ret.name} className="w-12 h-12 rounded-full border-2 border-yellow-400" />
                    <div className="text-left">
                      <div className="font-semibold text-green-900">{ret.name}</div>
                      <div className="text-xs text-green-700">{ret.type} – {ret.location}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CardDescription className="text-green-800 text-base font-medium">
                Partner with existing markets or create a new hub for your event.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Organise an Event - Contact Melange(tm) */}
          <Card className="bg-gradient-to-br from-yellow-200 via-green-100 to-yellow-50 shadow-xl border-0 rounded-2xl">
            <CardHeader>
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white/80 shadow-md">
                <Calendar className="h-8 w-8 text-green-700" />
              </div>
              <CardTitle className="text-2xl text-green-900">Organise an Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white/80 rounded-lg p-4 shadow mb-4">
                <div className="font-semibold text-green-900 mb-1">Get in contact with <span className="text-yellow-700 font-bold">Melange™</span></div>
                <div className="text-green-800 text-sm mb-2">We'll help you organise a memorable community gathering.</div>
                <a href="mailto:events@melange.com" className="text-green-700 underline font-medium">events@melange.com</a>
              </div>
              <CardDescription className="text-green-800 text-base font-medium">
                Coordinate with retailers and volunteers to launch a memorable community gathering.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <Button size="lg" className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition">
            Get Started
          </Button>
        </div>
      </div>
      <style>{`
        body { background: linear-gradient(135deg, #f0fdf4 0%, #fefce8 100%); }
      `}</style>
    </div>
  );
};

export default StartLocalHubPage; 