import { BarChart3, Brain, Calendar, MessageCircle, Bell, Users, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
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
                <Link to="/marketplace-listing">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start Selling Today
                  </Button>
                </Link>
                <Link to="/watch-demo">
                  <Button variant="outline" size="lg" className="bg-green-100 border-green-200 text-neutral-800 hover:bg-green-200 hover:text-neutral-900 font-bold tracking-wide">
                    Watch Demo
                  </Button>
                </Link>
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

      {/* Connect with Buyers & Sellers & Market Participation */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
              Connect & Collaborate
            </h2>
            <p className="text-lg text-muted-foreground">
              Build relationships that grow your business and strengthen your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Connect with Buyers Card */}
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
                <div className="mt-4">
                  <Link to="/connect-buyers">
                    <Button size="sm" className="bg-green-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition font-bold">Connect Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Market Participation Dashboard & Analytics Card */}
            <Card className="bg-white shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="bg-[#ff914d]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#ff914d]" />
                </div>
                <CardTitle>Market Participation, Dashboard and Analytics</CardTitle>
                <CardDescription>Real-time pricing, demand, performance, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market pricing & demand forecasting</li>
                  <li>• Performance analytics & revenue tools</li>
                  <li>• Blockchain traceability & trust score</li>
                  <li>• Notifications & optimization</li>
                </ul>
                <div className="mt-4">
                  <Link to="/market-participation-dashboard">
                    <Button size="sm" className="bg-[#ff914d] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#ff914d]/90 transition font-bold">Dashboard</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Connect with Sellers Card */}
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
                <div className="mt-4">
                  <Link to="/connect-sellers">
                    <Button size="sm" className="bg-trust text-white px-6 py-2 rounded-full shadow-lg hover:bg-trust/80 transition font-bold">Connect Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Freedom Farm AI Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
            Freedom Farm AI (Beta)
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            AI-powered tools for smarter farming: Yield Predictor, Cost Tracker, Pathogen Diagnostic, Crop Calendar (coming soon)
          </p>
          <Link to="/freedom-farm-ai">
            <Button size="lg" className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-primary/90 transition font-bold">Explore Freedom Farm AI</Button>
          </Link>
        </div>
      </section>

      {/* Notification Center */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-6 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
                Notification Center
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-6 drop-shadow-lg" style={{ letterSpacing: '0.03em' }}>
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-800 mb-8">
            Join thousands of farmers already using Freedom Farms to grow their business 
            and connect with their community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" className="bg-white text-green-700 border-green-700 border-2 hover:bg-green-50 hover:text-green-900 font-bold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmersPage;