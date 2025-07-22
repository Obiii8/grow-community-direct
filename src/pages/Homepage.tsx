import { useState } from 'react';
import { MapPin, Users, TrendingUp, Heart, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-image.jpg';
import mapInterface from '@/assets/map-interface.jpg';
import communityGathering from '@/assets/community-gathering.jpg';

const Homepage = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const growerLocations = [
    { id: 1, name: "Darren", product: "Microgreens", location: "VIC", x: 65, y: 75 },
    { id: 2, name: "Marco", product: "Cooking Mushrooms", location: "NSW", x: 70, y: 65 },
    { id: 3, name: "Liv", product: "Homemade Mango Chutney", location: "QLD", x: 75, y: 45 },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Decentralizing Food.{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Reconnecting People.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A one-stop-shop app for every link in the food chain — from farmers to food processors, retailers to households.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-soft">
              Join the Network
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Explore Local Markets
            </Button>
          </div>
        </div>
      </section>

      {/* Live Grower & Market Map */}
      <section className="py-20 bg-muted/30">
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
            <div 
              className="relative h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${mapInterface})` }}
            >
              {growerLocations.map((grower) => (
                <div
                  key={grower.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${grower.x}%`, top: `${grower.y}%` }}
                  onMouseEnter={() => setSelectedLocation(grower.name)}
                  onMouseLeave={() => setSelectedLocation(null)}
                >
                  <div className="relative">
                    <MapPin className="h-8 w-8 text-primary drop-shadow-lg animate-pulse" />
                    {selectedLocation === grower.name && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                        <div className="bg-background border border-border rounded-lg p-3 shadow-hover min-w-max">
                          <p className="font-semibold text-foreground">{grower.name}</p>
                          <p className="text-sm text-muted-foreground">{grower.product}</p>
                          <p className="text-xs text-muted-foreground">{grower.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Get involved with your next local market
            </p>
            <Button variant="outline">
              View Community Events
            </Button>
          </div>
        </div>
      </section>

      {/* Bold Community Section */}
      <section className="py-20 bg-gradient-community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🧡 COMMUNITY – WE'RE ALL ABOUT COMMUNITY!
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join us for the next on-farm visit, come along to a Freedom Farm dinner party, 
                or help coordinate our next popup market. We believe food brings people together — 
                and that's how we build local power.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-earth hover:bg-white/90">
                  Join Community Events
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth">
                  Start a Local Hub
                </Button>
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📰 Freedom Farms Dispatch
            </h2>
            <p className="text-lg text-muted-foreground">
              Latest insights from our growing community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ⚙️ Platform Overview
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

      {/* Platform Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              💡 Platform Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A one-stop-shop app for everyone in the food system — from farmers to processors, 
              agents to consumers — powering a global movement of locally owned, cooperative food hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Heart, title: "Adds value to local ingredients" },
              { icon: Users, title: "Connects directly with consumers" },
              { icon: Globe, title: "Reflects community values" },
              { icon: Zap, title: "Is resilient, inclusive, and profitable" }
            ].map((pillar, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-card">
                <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{pillar.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;