import { ShoppingCart, Truck, BarChart3, MapPin, Calendar, Zap, TrendingUp, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import retailLogistics from '@/assets/retail-logistics.jpg';

const RetailersPage = () => {
  const marketplaceListings = [
    { 
      product: "Organic Tomatoes", 
      initialPrice: "$3.20/kg", 
      currentBid: "$2.90/kg", 
      buyNowPrice: "$3.50/kg",
      timeLeft: "2 hours"
    },
    { 
      product: "Fresh Basil", 
      initialPrice: "$12.00/kg", 
      currentBid: "$11.20/kg", 
      buyNowPrice: "$13.50/kg",
      timeLeft: "4 hours"
    },
    { 
      product: "Baby Spinach", 
      initialPrice: "$8.50/kg", 
      currentBid: "$8.00/kg", 
      buyNowPrice: "$9.20/kg",
      timeLeft: "1 day"
    }
  ];

  const deliveryModes = [
    { mode: "Agent Pickup", description: "Professional courier service", icon: Truck },
    { mode: "Local Pickup", description: "Direct from farm collection", icon: MapPin },
    { mode: "Courier Delivery", description: "Third-party logistics", icon: Package }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${retailLogistics})` }}
        >
          <div className="absolute inset-0 bg-trust/85"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
                For Retailers & Agents
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Buy Better. Plan Smarter.{' '}
                <span className="text-community">Deliver Efficiently.</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                Your direct line to top growers, bulk coordination tools, and smart logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-trust hover:bg-white/90">
                  Access Marketplace
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-trust">
                  View Live Demo
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Live Market Preview */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Live Market Feed</CardTitle>
                  <CardDescription>Real-time pricing updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {marketplaceListings.slice(0, 2).map((listing, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{listing.product}</p>
                        <p className="text-xs text-muted-foreground">Current: {listing.currentBid}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {listing.timeLeft}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Live Marketplace */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📈 Open Live Marketplace
            </h2>
            <p className="text-lg text-muted-foreground">
              Dynamic pricing, real-time bidding, and instant purchasing options
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Marketplace Listings */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {marketplaceListings.map((listing, index) => (
                  <Card key={index} className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{listing.product}</h3>
                          <Badge variant="secondary" className="mt-1">
                            Ends in {listing.timeLeft}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Buy Now</p>
                          <p className="text-lg font-bold text-primary">{listing.buyNowPrice}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Initial Price</p>
                          <p className="font-medium">{listing.initialPrice}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Current Bid</p>
                          <p className="font-medium text-trust">{listing.currentBid}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Buy Now</p>
                          <p className="font-medium text-primary">{listing.buyNowPrice}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Place Bid
                        </Button>
                        <Button size="sm" className="flex-1">
                          Buy Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bulk Order Builder */}
            <div>
              <Card className="bg-white shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Bulk Order Builder</CardTitle>
                  <CardDescription>Plan your weekly orders efficiently</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Organic Tomatoes</span>
                      <span className="text-sm font-medium">25kg</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Fresh Basil</span>
                      <span className="text-sm font-medium">5kg</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Baby Spinach</span>
                      <span className="text-sm font-medium">15kg</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Total Estimate</span>
                      <span className="font-bold text-primary">$247.50</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Add to Weekly Planner
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Planner */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📅 Weekly Planner
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule custom orders and optimize your inventory management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Order Scheduling</CardTitle>
                <CardDescription>Plan orders weeks in advance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Recurring order templates</li>
                  <li>• Seasonal demand forecasting</li>
                  <li>• Automatic reorder points</li>
                  <li>• Flexible delivery windows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-trust/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-trust" />
                </div>
                <CardTitle>Demand Analytics</CardTitle>
                <CardDescription>Data-driven purchasing decisions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Historical consumption patterns</li>
                  <li>• Predictive inventory needs</li>
                  <li>• Waste reduction insights</li>
                  <li>• Profit margin optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-community/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-community" />
                </div>
                <CardTitle>Smart Notifications</CardTitle>
                <CardDescription>Never miss important updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Price drop alerts</li>
                  <li>• New supplier notifications</li>
                  <li>• Delivery confirmations</li>
                  <li>• Quality assurance updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Coordination Tools */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🚚 Delivery Coordination Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Streamlined logistics with API-connected dashboard and route optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Choose Your Delivery Mode
              </h3>
              
              <div className="space-y-4">
                {deliveryModes.map((mode, index) => (
                  <Card key={index} className="bg-white shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <mode.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{mode.mode}</h4>
                          <p className="text-sm text-muted-foreground">{mode.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white shadow-card">
                <CardHeader>
                  <CardTitle>API-Connected Dashboard</CardTitle>
                  <CardDescription>Real-time logistics integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Deliveries</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg. Delivery Time</span>
                      <span className="font-semibold">2.4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">On-Time Rate</span>
                      <span className="font-semibold text-primary">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardHeader>
                  <CardTitle>Visual Route Planner</CardTitle>
                  <CardDescription>Optimize delivery efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Multi-stop route optimization</p>
                    <p>• Real-time traffic integration</p>
                    <p>• Fuel cost calculations</p>
                    <p>• Carbon footprint tracking</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-foreground mb-6">
            Ready to Revolutionize Your Supply Chain?
          </h2>
          <p className="text-xl text-trust-foreground/90 mb-8">
            Join leading retailers and agents who are already optimizing their operations 
            with Freedom Farms' intelligent marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-trust hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-trust">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailersPage;