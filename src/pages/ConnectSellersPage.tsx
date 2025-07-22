import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Tag, Star } from "lucide-react";

const ConnectSellersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const mockSellers = [
    { 
      id: 1, 
      name: "Heritage Seeds Co.", 
      category: "Seeds & Seedlings", 
      location: "Victoria", 
      productType: "Heirloom varieties",
      rating: 4.8,
      description: "Premium heirloom seeds and organic seedlings for sustainable farming."
    },
    { 
      id: 2, 
      name: "Farm Equipment Specialists", 
      category: "Equipment", 
      location: "New South Wales", 
      productType: "Tractors & Tools",
      rating: 4.6,
      description: "New and refurbished farm equipment, maintenance services."
    },
    { 
      id: 3, 
      name: "Organic Fertilizer Solutions", 
      category: "Fertilizers", 
      location: "Queensland", 
      productType: "Organic compost",
      rating: 4.9,
      description: "100% organic fertilizers and soil amendments for healthy crops."
    },
    { 
      id: 4, 
      name: "Sustainable Packaging Co.", 
      category: "Packaging", 
      location: "Western Australia", 
      productType: "Eco-friendly packages",
      rating: 4.7,
      description: "Biodegradable and compostable packaging solutions for farm products."
    },
    { 
      id: 5, 
      name: "Irrigation Systems Plus", 
      category: "Irrigation", 
      location: "South Australia", 
      productType: "Drip systems",
      rating: 4.5,
      description: "Water-efficient irrigation systems and smart farming technology."
    },
  ];

  const filteredSellers = mockSellers.filter(seller => {
    const matchesSearch = seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.productType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || seller.category === categoryFilter;
    const matchesLocation = locationFilter === "all" || seller.location === locationFilter;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Connect with Sellers
          </h1>
          
          <div className="mb-8 grid md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search sellers or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Seeds & Seedlings">Seeds & Seedlings</SelectItem>
                <SelectItem value="Equipment">Equipment</SelectItem>
                <SelectItem value="Fertilizers">Fertilizers</SelectItem>
                <SelectItem value="Packaging">Packaging</SelectItem>
                <SelectItem value="Irrigation">Irrigation</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Victoria">Victoria</SelectItem>
                <SelectItem value="New South Wales">New South Wales</SelectItem>
                <SelectItem value="Queensland">Queensland</SelectItem>
                <SelectItem value="Western Australia">Western Australia</SelectItem>
                <SelectItem value="South Australia">South Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSellers.map((seller) => (
              <div key={seller.id} className="bg-muted p-6 rounded-lg border border-border">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{seller.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary">{seller.category}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{seller.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">{seller.rating}/5.0</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{seller.productType}</p>
                <p className="text-sm text-muted-foreground mb-4">{seller.description}</p>
                
                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Products
                  </Button>
                  <Button variant="outline" className="w-full">
                    Contact Seller
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredSellers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sellers found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectSellersPage;