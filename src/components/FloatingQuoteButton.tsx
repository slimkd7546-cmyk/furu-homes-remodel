
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FloatingQuoteButton = () => {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button 
        size="lg"
        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-6 py-4 group"
      >
        <Link to="/contact" className="flex items-center">
          <Calculator className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-semibold">Free Estimate</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default FloatingQuoteButton;
