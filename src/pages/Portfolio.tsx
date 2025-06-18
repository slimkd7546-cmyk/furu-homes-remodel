
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description: "Complete kitchen remodel featuring custom cabinets, quartz countertops, and high-end appliances.",
      beforeImage: "photo-1721322800607-8c38375eef04",
      afterImage: "photo-1483058712412-4245e9b90334",
      details: {
        duration: "3 weeks",
        scope: "Full kitchen renovation",
        features: ["Custom cabinetry", "Quartz countertops", "LED lighting", "Tile backsplash"]
      }
    },
    {
      id: 2,
      title: "Luxury Bathroom Renovation",
      category: "bathroom", 
      description: "Spa-like bathroom featuring a walk-in shower, double vanity, and heated floors.",
      beforeImage: "photo-1472396961693-142e6e269027",
      afterImage: "photo-1721322800607-8c38375eef04",
      details: {
        duration: "2 weeks",
        scope: "Master bathroom renovation",
        features: ["Walk-in shower", "Double vanity", "Heated floors", "Custom tile work"]
      }
    },
    {
      id: 3,
      title: "Open Concept Living Space",
      category: "whole-home",
      description: "Opened up the floor plan to create a seamless flow between kitchen, dining, and living areas.",
      beforeImage: "photo-1487958449943-2429e8be8625",
      afterImage: "photo-1483058712412-4245e9b90334",
      details: {
        duration: "6 weeks",
        scope: "Structural modification",
        features: ["Wall removal", "Beam installation", "Hardwood floors", "Updated lighting"]
      }
    },
    {
      id: 4,
      title: "Custom Built-in Entertainment Center",
      category: "custom",
      description: "Custom designed and built entertainment center with integrated storage and lighting.",
      beforeImage: "photo-1483058712412-4245e9b90334",
      afterImage: "photo-1721322800607-8c38375eef04",
      details: {
        duration: "1 week",
        scope: "Custom millwork",
        features: ["Built-in shelving", "Cable management", "LED accent lighting", "Matching wood stain"]
      }
    },
    {
      id: 5,
      title: "Basement Finishing Project",
      category: "custom",
      description: "Transformed an unfinished basement into a family recreation room with bar area.",
      beforeImage: "photo-1472396961693-142e6e269027",
      afterImage: "photo-1487958449943-2429e8be8625",
      details: {
        duration: "4 weeks",
        scope: "Basement finishing",
        features: ["Drywall installation", "Flooring", "Bar construction", "Recessed lighting"]
      }
    },
    {
      id: 6,
      title: "Master Suite Addition",
      category: "whole-home",
      description: "Added a new master suite with walk-in closet and luxury bathroom.",
      beforeImage: "photo-1721322800607-8c38375eef04",
      afterImage: "photo-1472396961693-142e6e269027",
      details: {
        duration: "8 weeks",
        scope: "Room addition",
        features: ["Structural framing", "Electrical & plumbing", "Custom closet", "Luxury finishes"]
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'whole-home', label: 'Whole Home' },
    { id: 'custom', label: 'Custom Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our completed projects and see the quality craftsmanship that sets us apart
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 fade-in">
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/${project.beforeImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                        alt={`${project.title} - Before`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/${project.afterImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                        alt={`${project.title} - After`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-accent text-primary px-2 py-1 rounded text-xs font-semibold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{project.details.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Scope:</span>
                      <span className="text-muted-foreground">{project.details.scope}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.details.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with the same attention to detail and quality craftsmanship.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Portfolio;
