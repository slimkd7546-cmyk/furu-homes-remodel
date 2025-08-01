
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, Award, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
                                {/* Company Info */}
                      <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center space-x-3">
                          <Logo size="md" showText={false} />
                          <div>
                            <h3 className="text-xl font-bold text-white">Furu Homes</h3>
                            <p className="text-sm text-gray-300">Quality Home Remodeling</p>
                          </div>
                        </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming houses into dream homes with quality craftsmanship and creative solutions. 
              Your trusted partner for all home renovation needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-yellow-400">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Kitchen Remodeling
              </li>
              <li className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Bathroom Renovations
              </li>
              <li className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Whole Home Remodeling
              </li>
              <li className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Custom Projects
              </li>
              <li className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Additions & Extensions
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">(555) 123-4567</p>
                  <p className="text-xs text-gray-400">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">info@furuholmes.com</p>
                  <p className="text-xs text-gray-400">Quick response</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">123 Main St</p>
                  <p className="text-xs text-gray-400">City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                  <p className="text-xs text-gray-400">Sat: 9AM-4PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-yellow-400" />
              <div>
                <h5 className="font-semibold text-yellow-400">Licensed Contractor</h5>
                <p className="text-sm text-gray-400">State Licensed #12345</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-yellow-400" />
              <div>
                <h5 className="font-semibold text-yellow-400">Fully Insured</h5>
                <p className="text-sm text-gray-400">Comprehensive Coverage</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-yellow-400" />
              <div>
                <h5 className="font-semibold text-yellow-400">A+ Rating</h5>
                <p className="text-sm text-gray-400">BBB Accredited</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Furu Holmes LLC. All rights reserved. | 
            <span className="text-yellow-400 ml-1">Licensed & Insured</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Serving the greater Seattle area with quality home remodeling services
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
