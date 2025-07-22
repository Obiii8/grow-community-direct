import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, UserPlus, Phone } from "lucide-react";

const ConnectBuyersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockBuyers = [
    { id: 1, name: "Green Grocer Co.", username: "greengrocer_mel", phone: "+61 3 9123 4567", location: "Melbourne", status: "online" },
    { id: 2, name: "Farm Fresh Markets", username: "farmfresh_syd", phone: "+61 2 8765 4321", location: "Sydney", status: "away" },
    { id: 3, name: "Organic Delights", username: "organic_bris", phone: "+61 7 5555 0123", location: "Brisbane", status: "online" },
    { id: 4, name: "Local Food Hub", username: "localfood_per", phone: "+61 8 9876 5432", location: "Perth", status: "offline" },
  ];

  const filteredBuyers = mockBuyers.filter(buyer => 
    buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buyer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buyer.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Connect with Buyers
          </h1>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by username or phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredBuyers.map((buyer) => (
              <div key={buyer.id} className="bg-muted p-6 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{buyer.name}</h3>
                      <span className={`w-3 h-3 rounded-full ${
                        buyer.status === 'online' ? 'bg-green-500' : 
                        buyer.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <p className="text-muted-foreground mb-1">@{buyer.username}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {buyer.phone}
                      </span>
                      <span>{buyer.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBuyers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No buyers found matching your search.</p>
            </div>
          )}

          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Chat Threads</h2>
            <div className="space-y-3">
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Green Grocer Co.</h4>
                    <p className="text-sm text-muted-foreground">Interested in your organic tomatoes...</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
              </div>
              
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Farm Fresh Markets</h4>
                    <p className="text-sm text-muted-foreground">Can you supply 20kg lettuce weekly?</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectBuyersPage;