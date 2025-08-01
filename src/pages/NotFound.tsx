import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <Construction className="h-16 w-16 text-white" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.h1 
              className="text-8xl md:text-9xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track to finding your perfect home renovation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8">
                <Link to="/" className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8">
                <Link to="/contact" className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/services" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Services</h3>
                  <p className="text-sm text-gray-600">Explore our home renovation services</p>
                </div>
              </Link>
              <Link to="/portfolio" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <h3 className="font-semibold text-gray-900 mb-2">Portfolio</h3>
                  <p className="text-sm text-gray-600">View our completed projects</p>
                </div>
              </Link>
              <Link to="/contact" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <h3 className="font-semibold text-gray-900 mb-2">Get Quote</h3>
                  <p className="text-sm text-gray-600">Request your free estimate</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
