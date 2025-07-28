import React from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingQuoteButton = () => {
  const handleQuoteClick = () => {
    // Track analytics event
    if (typeof gtag !== "undefined") {
      gtag("event", "click", {
        event_category: "CTA",
        event_label: "Floating Quote Button",
        value: 1,
      });
    }
    // Scroll to contact section or open contact form
    window.location.href = "/contact";
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={handleQuoteClick}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 float-animation rounded-full p-4"
        aria-label="Get free estimate for your home renovation project"
      >
        <Calculator className="h-6 w-6 mr-2" aria-hidden="true" />
        Free Estimate
      </Button>
    </div>
  );
};

export default FloatingQuoteButton;
