import { Scan, MapPin, MessageCircle, Calendar, Recycle, Users, Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import consumerKitchen from '@/assets/consumer-kitchen.jpg';

const ConsumersPage = () => {
  const trendingGrowers = [
    { 
      name: "Sarah's Organic Farm", 
      location: "12km away", 
      rating: 4.9, 
      specialty: "Heirloom Tomatoes",
      freshness: "Harvested today",
      avatar: "SO"
    },
    { 
      name: "Green Valley Co-op", 
      location: "8km away", 
      rating: 4.8, 
      specialty: "Seasonal Vegetables",
      freshness: "Farm fresh",
      avatar: "GV"
    },
    { 
      name: "Sunny Acres", 
      location: "15km away", 
      rating: 4.7, 
      specialty: "Organic Herbs",
      freshness: "Just picked",
      avatar: "SA"
    }
  ];

  const tools = [
    { title: "Order History", description: "Track your past purchases and reorder favorites", icon: ShoppingCart },
    { title: "Meal Planner", description: "Plan meals with seasonal local ingredients", icon: Calendar },
    { title: "Waste Tracker", description: "Reduce food waste with smart tracking", icon: Recycle },
    { title: "Co-op Delivery", description: "Group orders for shared drop-off locations", icon: Users },
    { title: "Chat with Growers", description: "Connect directly with your local farmers", icon: MessageCircle },
    { title: "Donate to Foodbanks", description: "Support community food assistance programs", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${consumerKitchen})` }}
        >
          <div className="absolute inset-0 bg-nature/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
                For Consumers & Marketplaces
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Know Your Food. Meet Your Grower.{' '}
                <span className="text-community">Shop Local, Eat Smart.</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                Empowering everyday people to eat better, waste less, and support their community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-nature hover:bg-white/90">
                  Find Local Growers
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-nature">
                  Download App
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* App Preview */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Nearby Fresh Produce</CardTitle>
                  <CardDescription>Available for pickup today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">🥕</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Organic Carrots</p>
                      <p className="text-xs text-muted-foreground">2.3km • $4.50/kg</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">🥬</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Fresh Lettuce</p>
                      <p className="text-xs text-muted-foreground">1.8km • $3.20/head</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Growers Nearby */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌟 Trending Growers Nearby
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover local farmers based on freshness, location, and community ratings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trendingGrowers.map((grower, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/api/placeholder/48/48`} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {grower.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{grower.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{grower.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Specialty</span>
                      <span className="text-sm text-muted-foreground">{grower.specialty}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Freshness</span>
                      <Badge variant="secondary" className="bg-nature-light text-nature">
                        {grower.freshness}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-community text-community" />
                        <span className="text-sm font-medium">{grower.rating}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full mt-4">
                      Visit Farm Store
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nibble™ Barcode Scanner */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              📱 Nibble™ Barcode Scanner
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Scan any product to instantly see its origin, travel miles, pesticide use, 
              and nutritional information. Make informed choices with every purchase.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white/95 backdrop-blur-sm shadow-hover">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Scan className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Food Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Origin Farm</span>
                      <span className="font-medium">Green Valley Co-op</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Travel Distance</span>
                      <span className="font-medium">8.2 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pesticide Use</span>
                      <Badge variant="secondary" className="bg-nature-light text-nature">
                        Organic
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Carbon Footprint</span>
                      <span className="font-medium text-nature">Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="bg-white text-trust hover:bg-white/90">
                  Try Scanner Demo
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">
                What You'll Discover
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Farm-to-Table Journey</p>
                    <p className="text-white/80 text-sm">See exactly where your food comes from and how far it traveled</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Health & Safety</p>
                    <p className="text-white/80 text-sm">Learn about pesticide use, organic certification, and nutritional content</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg mt-1">
                    <Recycle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Environmental Impact</p>
                    <p className="text-white/80 text-sm">Understand the carbon footprint and sustainability practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Tools & Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🛠️ Smart Consumer Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for mindful, sustainable food consumption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Produce Feature */}
      <section className="py-20 bg-community-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🤝 Trade Produce with Other Consumers
            </h2>
            <p className="text-lg text-muted-foreground">
              Exchange surplus produce with neighbors and reduce food waste together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                How Trading Works
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">List Your Surplus</p>
                    <p className="text-sm text-muted-foreground">Photo and describe what you'd like to trade</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-trust/10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-trust text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Browse & Connect</p>
                    <p className="text-sm text-muted-foreground">Find nearby neighbors with items you want</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-community/20 w-8 h-8 rounded-full flex items-center justify-center font-bold text-community text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Arrange Exchange</p>
                    <p className="text-sm text-muted-foreground">Meet up or coordinate drop-off locations</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-6">
                Start Trading
              </Button>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">John wants to trade</p>
                      <p className="text-xs text-muted-foreground">3 lemons for tomatoes</p>
                    </div>
                    <Badge variant="secondary">0.8km</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-trust/10 text-trust">MM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Maria has surplus</p>
                      <p className="text-xs text-muted-foreground">Fresh herbs for vegetables</p>
                    </div>
                    <Badge variant="secondary">1.2km</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join the Food Revolution Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Connect with local growers, eat healthier food, and build a more sustainable community. 
            Download the Freedom Farms app and start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Download App
            </Button>
            <Button size="lg" className="bg-white text-green-700 border-green-700 border-2 hover:bg-green-50 hover:text-green-900 font-bold">
              Find Local Markets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumersPage;