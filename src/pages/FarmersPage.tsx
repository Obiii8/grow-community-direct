import { BarChart3, Brain, Calendar, MessageCircle, Bell, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import farmerTech from '@/assets/farmer-tech.jpg';

const FarmersPage = () => {
  const aiFeatures = [
    { title: "Yield Predictor", description: "AI-powered forecasting for better harvest planning" },
    { title: "Cost Tracker", description: "Real-time expense monitoring and profitability analysis" },
    { title: "Pathogen Diagnostic", description: "Early detection of plant diseases and pests" },
    { title: "Crop Calendar", description: "Optimized planting and harvesting schedules" }
  ];

  const notifications = [
    { type: "buyer", message: "3 new wholesale requests for tomatoes", time: "2 hours ago" },
    { type: "weather", message: "Rain forecast for next 48 hours", time: "4 hours ago" },
    { type: "market", message: "Local farmers market this Saturday", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmerTech})` }}
        >
          <div className="absolute inset-0 bg-earth/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-nature-light text-nature">
                For Farmers & Growers
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Grow Smart. Sell Local.{' '}
                <span className="text-community">Connect Global.</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                List produce, access real buyers, and manage your farm operations with Freedom Farm AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Selling Today
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-earth">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              {/* Dashboard Preview */}
              <Card className="bg-white/95 backdrop-blur-sm shadow-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Farm Dashboard</CardTitle>
                  <CardDescription>Today's Overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">42</p>
                      <p className="text-sm text-muted-foreground">Active Listings</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-trust">$2,340</p>
                      <p className="text-sm text-muted-foreground">Week's Revenue</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-community">89%</p>
                      <p className="text-sm text-muted-foreground">Yield Efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Buyers & Sellers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Connect & Collaborate
            </h2>
            <p className="text-lg text-muted-foreground">
              Build relationships that grow your business and strengthen your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Connect with Buyers</CardTitle>
                <CardDescription>Wholesale, agents, and households</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Direct wholesale partnerships</li>
                  <li>• Local restaurant connections</li>
                  <li>• Community-supported agriculture</li>
                  <li>• Farmers market coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-trust/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-trust" />
                </div>
                <CardTitle>Connect with Sellers</CardTitle>
                <CardDescription>Chat, bulletin board, marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Peer-to-peer knowledge sharing</li>
                  <li>• Equipment and input marketplace</li>
                  <li>• Collaborative purchasing power</li>
                  <li>• Community bulletin board</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-nature/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-nature" />
                </div>
                <CardTitle>Market Participation</CardTitle>
                <CardDescription>Dashboard and analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time market pricing</li>
                  <li>• Demand forecasting</li>
                  <li>• Performance analytics</li>
                  <li>• Revenue optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Freedom Farm AI (Beta) */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
              Beta Access Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🧠 Freedom Farm AI
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize your farm operations, 
              predict outcomes, and make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-hover">
                <CardHeader>
                  <div className="bg-trust/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <Brain className="h-5 w-5 text-trust" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-trust hover:bg-white/90">
              Request Beta Access
            </Button>
          </div>
        </div>
      </section>

      {/* Notification Center */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                🔔 Notification Center
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay informed with buyer requests, weather alerts, market events, and more. 
                Never miss an opportunity to grow your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Smart Pricing Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified when market prices change</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-trust/10 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Seasonal Reminders</p>
                    <p className="text-sm text-muted-foreground">Automated planting and harvesting schedules</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-community/20 p-2 rounded-lg">
                    <Bell className="h-5 w-5 text-community" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Community Updates</p>
                    <p className="text-sm text-muted-foreground">Local events and collaboration opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Notifications</h3>
              {notifications.map((notification, index) => (
                <Card key={index} className="bg-white shadow-card">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-foreground">{notification.message}</p>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of farmers already using Freedom Farms to grow their business 
            and connect with their community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmersPage;