import React from 'react';
import { ChefHat, Droplet, Home, Palette, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { Helmet } from 'react-helmet';

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with our comprehensive remodeling services.",
      features: [
        "Custom cabinet design and installation",
        "Countertop selection and installation",
        "Modern appliance integration",
        "Lighting and electrical updates",
        "Flooring and backsplash installation",
        "Space optimization and layout design"
      ],
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      icon: Droplet,
      title: "Bathroom Renovations",
      description: "Create a luxurious spa-like retreat with our expert bathroom renovation services.",
      features: [
        "Walk-in showers and luxury tubs",
        "Vanity and storage solutions",
        "Tile and flooring installation",
        "Plumbing and fixture updates",
        "Lighting and ventilation improvements",
        "Accessibility modifications"
      ],
      image: "photo-1472396961693-142e6e269027"
    },
    {
      icon: Home,
      title: "Whole Home Remodeling",
      description: "Complete home transformations that maximize space, functionality, and style throughout your entire home.",
      features: [
        "Open floor plan conversions",
        "Room additions and extensions",
        "Structural modifications",
        "Systems upgrades (electrical, plumbing, HVAC)",
        "Interior and exterior improvements",
        "Energy efficiency enhancements"
      ],
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      icon: Palette,
      title: "Custom Renovation Projects",
      description: "Unique, personalized renovation solutions tailored to your specific vision and lifestyle needs.",
      features: [
        "Custom built-ins and storage",
        "Basement finishing",
        "Attic conversions",
        "Outdoor living spaces",
        "Specialty room creation",
        "Historic home restoration"
      ],
      image: "photo-1487958449943-2429e8be8625"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We meet with you to discuss your vision, needs, and budget for your project."
    },
    {
      step: "2", 
      title: "Design & Planning",
      description: "Our team creates detailed plans and 3D renderings to visualize your new space."
    },
    {
      step: "3",
      title: "Material Selection",
      description: "We help you choose the perfect materials, fixtures, and finishes for your project."
    },
    {
      step: "4",
      title: "Construction",
      description: "Our skilled craftsmen bring your vision to life with quality workmanship."
    },
    {
      step: "5",
      title: "Final Walkthrough",
      description: "We ensure every detail meets your expectations before project completion."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Furu Holmes LLC</title>
        <meta name="description" content="Explore our luxury home remodeling services: kitchen, bathroom, whole home, and custom renovations by Furu Holmes LLC." />
        <meta property="og:title" content="Services - Furu Holmes LLC" />
        <meta property="og:description" content="Explore our luxury home remodeling services: kitchen, bathroom, whole home, and custom renovations by Furu Holmes LLC." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://furuholmes.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#2d1a10] via-[#3e2723] to-[#1a120b] text-[#e7dac5]">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#3e2723]/60">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#e7dac5] via-[#c9a66b] to-[#a67c52] bg-clip-text text-transparent">Our Services</h1>
              <p className="text-xl text-[#c9a66b]">
                Comprehensive home remodeling and renovation services to transform every space in your home
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    <Link to="/contact" className="flex items-center">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`fade-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={`https://images.unsplash.com/${service.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a proven process to ensure your project is completed smoothly, on time, and within budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center fade-in">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              <Link to="/contact" className="flex items-center">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default Services;
