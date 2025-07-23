import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const markets = [
  {
    name: 'Footscray Market',
    location: 'Footscray, Melbourne',
    description: 'A vibrant multicultural market with fresh produce, subscription boxes, and artisan goods.',
    organics: [
      { product: 'Organic Tomatoes', price: '$4.50/kg' },
      { product: 'Kale', price: '$3.00/bunch' },
      { product: 'Carrots', price: '$2.20/kg' },
      { product: 'Seasonal Fruit Box', price: '$25/box' },
    ],
  },
  {
    name: 'Fitzroy Market',
    location: 'Fitzroy, Melbourne',
    description: 'Trendy inner-city market with local dairy, fresh greens, and specialty foods.',
    organics: [
      { product: "Lizzy's Milk", price: '$20/2L' },
      { product: 'Spinach', price: '$3.50/bunch' },
      { product: 'Heirloom Tomatoes', price: '$6.00/kg' },
      { product: 'Organic Eggs', price: '$8/dozen' },
    ],
  },
  {
    name: 'Camberwell Market',
    location: 'Camberwell, Melbourne',
    description: 'One of Melbourne’s largest community markets with a strong focus on fresh local produce.',
    organics: [
      { product: 'Baby Spinach', price: '$5.00/bag' },
      { product: 'Organic Basil', price: '$4.00/bunch' },
      { product: 'Sweet Potatoes', price: '$3.80/kg' },
      { product: 'Seasonal Veggie Box', price: '$30/box' },
    ],
  },
];

const growers = [
  {
    name: 'Darren’s Microgreens',
    specialty: 'Microgreens',
    location: 'Thornbury',
    products: [
      { product: 'Microgreens', price: '$20/kg' },
      { product: 'Smoothies', price: '$8/bottle' },
    ],
  },
  {
    name: 'Liv’s Chutneys',
    specialty: 'Homemade Chutney',
    location: 'QLD',
    products: [
      { product: 'Mango Chutney', price: '$10/jar' },
      { product: 'Papaya Chutney', price: '$12/jar' },
    ],
  },
  {
    name: 'Marco’s Mushrooms',
    specialty: 'Gourmet Mushrooms',
    location: 'Adelaide',
    products: [
      { product: 'Cooking Mushrooms', price: '$120/kg' },
      { product: 'Mushroom Grow Kits', price: '$35/kit' },
    ],
  },
  {
    name: 'Seamoss Collective',
    specialty: 'Seamoss & Roots',
    location: 'Fitzroy',
    products: [
      { product: 'Seamoss Gel', price: '$25/jar' },
      { product: 'Roots Blend', price: '$18/pack' },
    ],
  },
  {
    name: 'Papayas Cairns',
    specialty: 'Tropical Fruit',
    location: 'Cairns',
    products: [
      { product: 'Papayas', price: '$30/kg' },
      { product: 'Seed Packs', price: '$5/pack' },
    ],
  },
];

const ExploreMarketsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/40 to-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary drop-shadow-lg futuristic-glow">
          Explore Local Markets & Unique Growers
        </h1>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-foreground text-center">Featured Markets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {markets.map((market, idx) => (
              <Card key={idx} className="bg-white/80 shadow-xl border-2 border-primary/20 hover:scale-105 transition-transform duration-300 futuristic-card">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{market.name}</Badge>
                    <span className="text-xs text-muted-foreground">{market.location}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2 text-primary">{market.name}</CardTitle>
                  <CardDescription className="mb-2 text-muted-foreground">{market.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {market.organics.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span>{item.product}</span>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground text-center">Local Growers & Sellers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {growers.map((grower, idx) => (
              <Card key={idx} className="bg-background/90 shadow-lg border border-accent/30 hover:scale-105 transition-transform duration-300 futuristic-card">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="accent">{grower.specialty}</Badge>
                    <span className="text-xs text-muted-foreground">{grower.location}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight mb-1 text-accent-foreground">{grower.name}</CardTitle>
                  <CardDescription className="mb-2 text-muted-foreground">Unique produce direct from the grower.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {grower.products.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span>{item.product}</span>
                        <span className="font-semibold text-accent-foreground">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .futuristic-glow {
          text-shadow: 0 0 16px #00ffb3, 0 0 32px #00bfff;
        }
        .futuristic-card {
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(0,255,179,0.08), 0 1.5px 8px 0 rgba(0,191,255,0.08);
        }
      `}</style>
    </div>
  );
};

export default ExploreMarketsPage; 