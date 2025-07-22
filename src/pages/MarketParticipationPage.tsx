import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";

const MarketParticipationPage = () => {
  const upcomingMarkets = [
    {
      id: 1,
      name: "Fitzroy Market",
      address: "Rose Street, Fitzroy, VIC 3065",
      date: "Every Saturday",
      time: "8:00 AM - 2:00 PM",
      description: "A vibrant weekend market featuring local produce, artisanal foods, and handmade crafts.",
      stallsAvailable: 12,
      applicationDeadline: "Wednesday before market day"
    },
    {
      id: 2,
      name: "Camberwell Market",
      address: "Station Street, Camberwell, VIC 3124",
      date: "Every Sunday",
      time: "9:00 AM - 4:00 PM",
      description: "One of Melbourne's largest community markets with a strong focus on fresh local produce.",
      stallsAvailable: 8,
      applicationDeadline: "Thursday before market day"
    },
    {
      id: 3,
      name: "Footscray Market",
      address: "Hopkins Street, Footscray, VIC 3011",
      date: "Tuesday, Friday, Saturday",
      time: "6:00 AM - 3:00 PM",
      description: "A multicultural market offering diverse fresh produce and specialty foods.",
      stallsAvailable: 15,
      applicationDeadline: "One week before intended market day"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Market Participation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Join local and regional markets to connect directly with your community and expand your customer base.
          </p>

          <div className="space-y-8">
            {upcomingMarkets.map((market) => (
              <div key={market.id} className="bg-muted p-8 rounded-lg border border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">{market.name}</h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{market.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{market.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{market.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{market.stallsAvailable} stalls available</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{market.description}</p>
                    
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Application Deadline:</span> {market.applicationDeadline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Express Interest
                    </Button>
                    <Button variant="outline" size="lg">
                      More Details
                    </Button>
                    <Button variant="outline" size="lg">
                      Contact Organizer
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">How to Participate</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">For New Vendors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete vendor application form</li>
                  <li>• Provide proof of insurance and permits</li>
                  <li>• Submit product samples for approval</li>
                  <li>• Attend orientation session</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Market Day Preparation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Arrive 1 hour before market opening</li>
                  <li>• Bring your own tables and display materials</li>
                  <li>• Ensure all products are properly labeled</li>
                  <li>• Have change and payment methods ready</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground text-center">
                Need help getting started? Contact our market coordination team at 
                <a href="mailto:markets@freedomfarms.com" className="text-primary hover:underline ml-1">
                  markets@freedomfarms.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketParticipationPage;