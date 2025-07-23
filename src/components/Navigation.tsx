import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4a0ee4b3-bd60-45f6-83ac-1824ea1715b4.png" 
              alt="Freedom Farms Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl text-foreground">Freedom Farms</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={isActive("/") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"}>
              Home
            </Link>
            <Link to="/marketplace" className={isActive("/marketplace") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"}>
              Marketplace
            </Link>
            <Link to="/farmers" className={isActive("/farmers") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"}>
              Farmers
            </Link>
            <Link to="/retailers" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/retailers') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              For Retailers
            </Link>
            <Link 
              to="/consumers" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/consumers') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              For Consumers
            </Link>
            <Link to="/join-network">
              <Button variant="outline" size="sm">
                Join the Network
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link 
                to="/farmers" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                For Farmers
              </Link>
              <Link 
                to="/retailers" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                For Retailers
              </Link>
              <Link 
                to="/consumers" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                For Consumers
              </Link>
              <div className="pt-2">
                <Link to="/join-network">
                  <Button variant="outline" size="sm" className="w-full">
                    Join the Network
                  </Button>
                </Link>
              </div>
              <div className={isOpen ? "block" : "hidden"}>
                <div className="flex flex-col space-y-4 mt-4">
                  <Link to="/" className={isActive("/") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  <Link to="/marketplace" className={isActive("/marketplace") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"} onClick={() => setIsOpen(false)}>
                    Marketplace
                  </Link>
                  <Link to="/farmers" className={isActive("/farmers") ? "text-primary font-bold" : "text-foreground hover:text-primary transition"} onClick={() => setIsOpen(false)}>
                    Farmers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;