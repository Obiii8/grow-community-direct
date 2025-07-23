import React, { useState } from 'react';
import { Users, TrendingUp, Heart, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-image.jpg';
import communityGathering from '@/assets/community-gathering.jpg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue in some bundlers
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadow,
});

const Homepage = () => {
  const farmMarkets: Array<{
    id: number;
    name: string;
    type: string;
    position: [number, number];
    profile: {
      bio: string;
      stock: Array<{ product: string; price: string }>;
    };
  }> = [
    {
      id: 1,
      name: "Darren",
      type: "Farmer",
      position: [-37.7587, 145.0064], // Thornbury, Melbourne
      profile: {
        bio: "Microgreens specialist in Thornbury, VIC.",
        stock: [
          { product: "Microgreens", price: "$20/kg" }
        ]
      }
    },
    {
      id: 2,
      name: "Footscray Market",
      type: "Market",
      position: [-37.7997, 144.8996], // Footscray, Melbourne
      profile: {
        bio: "Footscray Market - fresh produce, subscription boxes available.",
        stock: [
          { product: "Subscription Boxes", price: "$$" },
          { product: "Fresh Produce", price: "Varies" }
        ]
      }
    },
    {
      id: 3,
      name: "Lizzy's Milk",
      type: "Farmer",
      position: [-37.8001, 144.9787], // Fitzroy, Melbourne
      profile: {
        bio: "Lizzy's Milk - local dairy in Fitzroy.",
        stock: [
          { product: "Milk", price: "$20" }
        ]
      }
    },
    {
      id: 4,
      name: "Papayas Cairns",
      type: "Farmer",
      position: [-16.9203, 145.7710], // Cairns, QLD
      profile: {
        bio: "Fresh papayas from Cairns.",
        stock: [
          { product: "Papayas", price: "$30/kg" }
        ]
      }
    },
    {
      id: 5,
      name: "Marco",
      type: "Market",
      position: [-34.9285, 138.6007], // Adelaide
      profile: {
        bio: "Local market offering fresh produce and artisan goods.",
        stock: [
          { product: "Fresh Vegetables", price: "$10/kg" },
          { product: "Handmade Soap", price: "$15/bar" }
        ]
      }
    },
    {
      id: 6,
      name: "Liv",
      type: "Farmer",
      position: [-25.2744, 133.7751], // Alice Springs
      profile: {
        bio: "Homemade Mango Chutney producer from QLD.",
        stock: [
          { product: "Mango Chutney", price: "$10/jar" }
        ]
      }
    }
  ];

  const blogPosts = [
    {
      title: "Guerrilla Gardening: Its Great Benefits for Bringing Life to Local Communities",
      category: "Community",
      excerpt: "Exploring how grassroots gardening movements are transforming urban spaces and building stronger neighborhoods.",
      readTime: "5 min read"
    },
    {
      title: "AI in Agriculture: Predicting Yields with Machine Learning",
      category: "Technology",
      excerpt: "How Freedom Farm AI is helping growers optimize their harvests through predictive analytics.",
      readTime: "7 min read"
    },
    {
      title: "The Rise of Local Food Hubs: Building Resilient Communities",
      category: "Market Insights",
      excerpt: "Examining the economic and social benefits of decentralized food distribution networks.",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20 pointer-events-none" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-16 text-center">
          {/* Animated Crop-to-Consumer SVG */}
          <div className="mb-8 w-full flex justify-center">
            <svg width="380" height="140" viewBox="0 0 380 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
              <defs>
                <linearGradient id="soil1" x1="0" y1="120" x2="0" y2="140" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a67c52" />
                  <stop offset="1" stopColor="#6b4f2c" />
                </linearGradient>
                <radialGradient id="plant1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#7bb661" />
                  <stop offset="100%" stopColor="#4e944f" />
                </radialGradient>
                <linearGradient id="arrow" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#b7b29e" />
                  <stop offset="1" stopColor="#4e944f" />
                </linearGradient>
              </defs>
              {/* Soil with texture */}
              <ellipse cx="70" cy="125" rx="60" ry="15" fill="url(#soil1)" opacity="0.95" />
              <ellipse cx="190" cy="125" rx="60" ry="15" fill="url(#soil1)" opacity="0.85" />
              <ellipse cx="310" cy="125" rx="60" ry="15" fill="url(#soil1)" opacity="0.95" />
              {/* Seed and sprout animation */}
              <g>
                <circle id="seed" cx="70" cy="120" r="6" fill="#a67c52">
                  <animate attributeName="cy" from="120" to="90" dur="1.2s" begin="0s" fill="freeze" />
                  <animate attributeName="r" from="6" to="0" dur="0.2s" begin="1.2s" fill="freeze" />
                </circle>
                {/* Sprout stem */}
                <rect id="sprout" x="68" y="120" width="4" height="0" fill="url(#plant1)">
                  <animate attributeName="height" from="0" to="35" dur="0.8s" begin="1.2s" fill="freeze" />
                  <animate attributeName="y" from="120" to="85" dur="0.8s" begin="1.2s" fill="freeze" />
                </rect>
                {/* Realistic leaves */}
                <ellipse id="leaf1" cx="74" cy="100" rx="0" ry="0" fill="url(#plant1)">
                  <animate attributeName="rx" from="0" to="10" dur="0.5s" begin="2s" fill="freeze" />
                  <animate attributeName="ry" from="0" to="5" dur="0.5s" begin="2s" fill="freeze" />
                </ellipse>
                <ellipse id="leaf2" cx="66" cy="102" rx="0" ry="0" fill="url(#plant1)">
                  <animate attributeName="rx" from="0" to="8" dur="0.5s" begin="2.2s" fill="freeze" />
                  <animate attributeName="ry" from="0" to="4" dur="0.5s" begin="2.2s" fill="freeze" />
                </ellipse>
                {/* Dew drop for freshness */}
                <ellipse id="dew" cx="77" cy="97" rx="0" ry="0" fill="#b7e4c7" opacity="0.7">
                  <animate attributeName="rx" from="0" to="2.5" dur="0.4s" begin="2.5s" fill="freeze" />
                  <animate attributeName="ry" from="0" to="1.5" dur="0.4s" begin="2.5s" fill="freeze" />
                </ellipse>
              </g>
              {/* Arrow to market */}
              <g>
                <path id="arrow1" d="M85 90 Q140 60 195 90" stroke="url(#arrow)" strokeWidth="3" fill="none" strokeDasharray="6 6">
                  <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.7s" begin="2.7s" fill="freeze" />
                </path>
                <polygon points="195,90 188,85 188,95" fill="#4e944f">
                  <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.2s" fill="freeze" />
                </polygon>
              </g>
              {/* Market stand with produce */}
              <g>
                <rect x="180" y="70" width="50" height="35" fill="#e6e1c5" stroke="#b7b29e" strokeWidth="2" rx="8" />
                <rect x="180" y="65" width="50" height="12" fill="#b7b29e" rx="3" />
                <ellipse cx="205" cy="95" rx="13" ry="6" fill="#7bb661" />
                {/* Crop on stand (appears after arrow) */}
                <ellipse id="market-crop" cx="205" cy="95" rx="0" ry="0" fill="url(#plant1)">
                  <animate attributeName="rx" from="0" to="10" dur="0.3s" begin="3.3s" fill="freeze" />
                  <animate attributeName="ry" from="0" to="5" dur="0.3s" begin="3.3s" fill="freeze" />
                </ellipse>
              </g>
              {/* Arrow to consumer */}
              <g>
                <path id="arrow2" d="M230 90 Q285 60 340 90" stroke="url(#arrow)" strokeWidth="3" fill="none" strokeDasharray="6 6">
                  <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.7s" begin="3.7s" fill="freeze" />
                </path>
                <polygon points="340,90 333,85 333,95" fill="#4e944f">
                  <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="4.2s" fill="freeze" />
                </polygon>
              </g>
              {/* Consumer (modern, fresh look) */}
              <g>
                <ellipse cx="340" cy="110" rx="18" ry="18" fill="#eafbe7" stroke="#b7b29e" strokeWidth="2" />
                <ellipse cx="334" cy="108" rx="3" ry="5" fill="#4e944f" />
                <ellipse cx="346" cy="108" rx="3" ry="5" fill="#4e944f" />
                <path d="M334 116 Q340 122 346 116" stroke="#7bb661" strokeWidth="2" fill="none" />
                {/* Crop in hand (appears after arrow) */}
                <ellipse id="consumer-crop" cx="348" cy="120" rx="0" ry="0" fill="url(#plant1)">
                  <animate attributeName="rx" from="0" to="8" dur="0.3s" begin="4.3s" fill="freeze" />
                  <animate attributeName="ry" from="0" to="4" dur="0.3s" begin="4.3s" fill="freeze" />
                </ellipse>
              </g>
            </svg>
          </div>
          <img src="/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png" alt="Freedom Farms Logo" className="mx-auto mb-6 w-24 h-24 rounded-full shadow-lg border-4 border-primary/30" />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-earth drop-shadow-lg mb-4" style={{ letterSpacing: '0.04em' }}>
            Freedom Farms
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto font-medium">
            A one-stop platform for every link in the food chain — from farmers to food processors, retailers to households.
          </p>
          {/* Removed Farmer, Retailer, Consumer, Log In, and Sign Up buttons for a clean immersive intro */}
        </div>
      </section>

      {/* Live Grower & Market Map */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Live Grower & Market Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover Freedom Farm users and local markets in your area
            </p>
          </div>
          <div className="relative bg-white rounded-2xl shadow-card overflow-hidden">
            <MapContainer
              center={[-25.2744, 133.7751]} // Center of Australia
              zoom={4}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "100%" }}
              className="rounded-2xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {farmMarkets.map((farm) => (
                <Marker key={farm.id} position={farm.position}>
                  <Popup>
                    <div>
                      <h3 className="font-bold">{farm.name} ({farm.type})</h3>
                      <p>{farm.profile.bio}</p>
                      <ul>
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
        </div>
      </section>

      {/* Bold Community Section */}
      <section className="py-20 bg-gradient-community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ff914d' }}>
                COMMUNITY – WE'RE ALL ABOUT COMMUNITY!
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join us for the next on-farm visit, come along to a Freedom Farm dinner party, 
                or help coordinate our next popup market. We believe food brings people together — 
                and that's how we build local power.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/join-community-event">
                  <Button size="lg" variant="secondary" className="bg-white text-earth hover:bg-white/90">
                    Join Community Events
                  </Button>
                </Link>
                <Link to="/start-local-hub">
                  <Button size="lg" variant="outline" className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-white font-semibold">
                    Start a Local Hub
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={communityGathering} 
                alt="Community gathering at farmers market"
                className="rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Feed - Freedom Farms Dispatch */}
      <section className="py-20 bg-[#f8fafc] border-t border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-neutral-900 mb-4 tracking-tight">
              Freedom Farms Dispatch
            </h2>
            <p className="text-lg text-neutral-700 italic">
              Latest insights and stories from our growing community, curated with a journalistic touch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#e2e8f0] bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-neutral-500 font-mono">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight font-serif text-neutral-900">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-neutral-800">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed in the modern food economy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white shadow-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access tools to market your farm to local buyers. From your website to emails 
                  and social media content – save time and attract customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white shadow-card">
              <CardHeader>
                <div className="mx-auto bg-trust/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-trust" />
                </div>
                <CardTitle className="text-2xl">Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Give buyers access to your farm's products online and in-person. Streamline sales 
                  with POS built for farmers, sell-by-weight capabilities, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white shadow-card">
              <CardHeader>
                <div className="mx-auto bg-nature/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-nature" />
                </div>
                <CardTitle className="text-2xl">Managing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simplify your farm operations with tools for managing orders, finances, logistics, 
                  and community engagement – all in one dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Freedom Farms Vision - Immersive Dropdown */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
            Freedom Farms Vision
          </h2>
          <p className="text-xl md:text-2xl text-green-800 mb-10 max-w-2xl mx-auto font-medium">
            A one-stop platform for everyone in the food system — empowering a global movement of locally owned, cooperative food hubs.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                icon: Heart,
                title: "Adds value to local ingredients",
                description: "We celebrate and elevate the unique flavors and stories of local produce, ensuring every ingredient is valued from farm to table."
              },
              {
                icon: Users,
                title: "Connects directly with consumers",
                description: "We bridge the gap between growers and eaters, fostering direct, meaningful relationships and transparent food journeys."
              },
              {
                icon: Globe,
                title: "Reflects community values",
                description: "Our platform is shaped by the values and needs of each community, supporting diversity, sustainability, and local pride."
              },
              {
                icon: Zap,
                title: "Is resilient, inclusive, and profitable",
                description: "We build systems that are robust, welcoming to all, and economically sustainable for every participant."
              }
            ].map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white/90 rounded-xl shadow-card p-5 flex flex-col items-center text-center transition-all duration-300">
                  <div className="mb-3">
                    <PillarIcon className="h-8 w-8 text-green-700 drop-shadow" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-1">{pillar.title}</h3>
                  <p className="text-green-800 text-base font-medium">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms and Conditions & Food Policy Section */}
      <footer className="bg-muted/50 py-10 border-t border-border mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between items-start">
          {/* Terms and Conditions */}
          <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold text-primary mb-4">Terms and Conditions</h2>
            <ul className="text-muted-foreground text-sm space-y-2 mb-4 text-left inline-block">
              <li><strong>Acceptance:</strong> By using Freedom Farms, you agree to our terms and policies.</li>
              <li><strong>Platform Use:</strong> Connects farmers, retailers, agents, and consumers in a decentralized food system.</li>
              <li><strong>User Responsibilities:</strong> Provide accurate info, follow food safety, comply with local laws, and communicate respectfully.</li>
              <li><strong>Privacy:</strong> We protect your data and do not share it without consent.</li>
              <li><strong>Transactions:</strong> Users are responsible for their own agreements and payments.</li>
              <li><strong>Liability:</strong> Platform provided "as is"; we are not liable for user transactions or content.</li>
              <li><strong>Updates:</strong> Terms may change; continued use means acceptance of updates.</li>
            </ul>
            <a href="/terms" className="text-primary hover:underline text-sm">Read the full Terms and Conditions</a>
          </div>
          {/* Food Policy & Certification */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-semibold text-green-900 mb-4">Food Policy & Certification</h2>
            <ul className="text-green-900/80 text-sm space-y-2 mb-4 text-left inline-block">
              <li><strong>Certification & Verification:</strong> We support transparent certification and verification processes for all producers and markets on our platform.</li>
              <li><strong>Produce Safety:</strong> Our community is committed to the highest standards of food safety, traceability, and hygiene.</li>
              <li><strong>Quality Assurance:</strong> We encourage ongoing education and quality checks to ensure the best outcomes for consumers and producers alike.</li>
            </ul>
            <a href="/certification" className="text-green-800 hover:underline text-sm font-medium">Learn more about certification & produce safety</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;