
import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingQuoteButton = () => {
  const handleQuoteClick = () => {
    // Scroll to contact section or open contact form
    window.location.href = '/contact';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button 
        onClick={handleQuoteClick}
        size="lg"
        className="bg-accent hover:bg-accent/90 text-primary shadow-lg hover:shadow-xl transition-all duration-300 float-animation rounded-full p-4"
      >
        <Calculator className="h-6 w-6 mr-2" />
        Free Estimate
      </Button>
    </div>
  );
};

export default FloatingQuoteButton;
