import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Info,
  Briefcase,
  Camera,
  MessageSquare,
  BookOpen,
  Phone,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-background/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 py-3"
        role="navigation"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            aria-label="Furu Homes"
            tabIndex={0}
          >
            <img
              src="/furu-logo-new.png"
              alt="Furu Homes Logo"
              className="h-12 w-auto"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                role="menuitem"
                tabIndex={0}
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              tabIndex={0}
              aria-label="Request free estimate"
            >
              <Link to="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border shadow-lg"
            role="menu"
          >
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-3 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted/50 ${
                    location.pathname === item.href
                      ? "text-primary bg-muted/30 font-semibold"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-label={`Navigate to ${item.label} page`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
                aria-label="Request free estimate"
              >
                <Link to="/contact">Free Estimate</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
