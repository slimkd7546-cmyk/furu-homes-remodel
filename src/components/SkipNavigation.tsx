import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkipNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && !isVisible) {
      setIsVisible(true);
    }
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="sr-only"
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="fixed top-4 left-4 z-[60] bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-2">
                <a
                  href="#main-content"
                  className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500 rounded"
                >
                  Skip to main content
                </a>
                <a
                  href="#navigation"
                  className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500 rounded"
                >
                  Skip to navigation
                </a>
                <a
                  href="#footer"
                  className="text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500 rounded"
                >
                  Skip to footer
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SkipNavigation; 