
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Camera, MessageSquare, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/portfolio', label: 'Portfolio', icon: Camera },
    { href: '/testimonials', label: 'Testimonials', icon: MessageSquare },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Furu Holmes</h1>
              <p className="text-xs text-muted-foreground">LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90">
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-t shadow-lg">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90">
                Free Estimate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
