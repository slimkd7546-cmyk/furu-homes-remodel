import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import { Helmet } from 'react-helmet';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  const features = [
    "Licensed & Insured",
    "Free Estimates",
    "Quality Materials",
    "Expert Craftsmanship",
    "On-Time Completion",
    "Warranty Included"
  ];

  return (
    <>
      <Helmet>
        <title>Furu Homes | Luxury Home Remodeling & Renovation</title>
        <meta name="description" content="Transform your house into a dream home with Furu Homes. Expert kitchen remodeling, bathroom renovations, and whole home remodeling services." />
        <meta property="og:title" content="Furu Homes - Professional Home Remodeling" />
        <meta property="og:description" content="Transform your house into a dream home with expert remodeling services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://furuhomes.com/" />
        <link rel="canonical" href="https://furuhomes.com/" />
      </Helmet>
      <StructuredData type="localBusiness" data={{}} />
      
      <div className="min-h-screen bg-[#18120a] text-[#fff9e1]">
        <Header />
        <main id="main-content">
          <HeroSlider />

          {/* Features Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 fade-in">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ServicesSection />

          <TestimonialsSection />

          <BlogSection />

          {/* CTA Section */}
          <section className="py-20 hero-gradient text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Let's bring your dream home to life!
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
                <Link to="/contact" className="flex items-center">
                  Get Your Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default Index;
