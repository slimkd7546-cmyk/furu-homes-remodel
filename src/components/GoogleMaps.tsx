import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoogleMaps = () => {
  const handleGetDirections = () => {
    // Open Google Maps with directions to the business
    const address = encodeURIComponent('123 Main Street, City, State 12345');
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:5551234567', '_self');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Map Placeholder - Replace with actual Google Maps iframe */}
      <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-700">Visit Our Showroom</h3>
            <p className="text-gray-600 mb-4">123 Main Street, City, State 12345</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleGetDirections}
                variant="outline" 
                className="bg-white hover:bg-gray-50"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
              <Button 
                onClick={handleCall}
                variant="outline" 
                className="bg-white hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Overlay with business info */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Monday - Friday: 8AM - 6PM</p>
            <p>Saturday: 9AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Note for actual implementation */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> To integrate actual Google Maps, replace this placeholder with a Google Maps iframe. 
          You'll need to get a Google Maps API key and use the following code:
        </p>
        <code className="block mt-2 text-xs bg-blue-100 p-2 rounded">
          {`<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
  width="100%" 
  height="320" 
  style={{border:0}} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>`}
        </code>
      </div>
    </motion.div>
  );
};

export default GoogleMaps; 