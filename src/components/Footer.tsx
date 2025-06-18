
import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Furu Holmes LLC</h3>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Transforming houses into dream homes with quality craftsmanship and creative solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition-colors cursor-pointer">Kitchen Remodeling</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Bathroom Renovations</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Whole Home Remodeling</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Custom Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@furuholmes.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Furu Holmes LLC. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
