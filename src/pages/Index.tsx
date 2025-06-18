
import React from 'react';
import { ArrowRight, Hammer, Wrench, Paintbrush, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

const Index = () => {
  const services = [
    {
      icon: Hammer,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom designs and quality craftsmanship."
    },
    {
      icon: Wrench,
      title: "Bathroom Renovations", 
      description: "Create a luxurious spa-like retreat with modern fixtures and elegant finishes."
    },
    {
      icon: Paintbrush,
      title: "Whole Home Remodeling",
      description: "Complete home transformations that maximize space, functionality, and style."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Furu Holmes LLC transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible!",
      project: "Kitchen Remodel"
    },
    {
      name: "Mike Chen", 
      rating: 5,
      text: "Professional, reliable, and the quality exceeded our expectations. Our bathroom renovation was completed on time and on budget.",
      project: "Bathroom Renovation"
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "From design to completion, the team was amazing. They listened to our vision and brought it to life beautifully.",
      project: "Whole Home Remodel"
    }
  ];

  const features = [
    "Licensed & Insured",
    "Free Estimates",
    "Quality Materials",
    "Expert Craftsmanship",
    "On-Time Completion",
    "Warranty Included"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transforming Houses Into
              <span className="block text-accent"> Dream Homes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Expert home remodeling and renovation services with quality craftsmanship you can trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
                <Link to="/contact" className="flex items-center">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your home renovation project with precision and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from homeowners who have experienced the Furu Holmes difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="fade-in">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Index;
