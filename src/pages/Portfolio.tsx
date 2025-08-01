import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Analytics tracking removed for cleaner code

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description:
        "Complete kitchen remodel featuring custom cabinets, quartz countertops, and high-end appliances.",
      beforeImage: "photo-1721322800607-8c38375eef04",
      afterImage: "photo-1483058712412-4245e9b90334",
      details: {
        duration: "3 weeks",
        scope: "Full kitchen renovation",
        features: [
          "Custom cabinetry",
          "Quartz countertops",
          "LED lighting",
          "Tile backsplash",
        ],
      },
    },
    {
      id: 2,
      title: "Luxury Bathroom Renovation",
      category: "bathroom",
      description:
        "Spa-like bathroom featuring a walk-in shower, double vanity, and heated floors.",
      beforeImage: "photo-1472396961693-142e6e269027",
      afterImage: "photo-1721322800607-8c38375eef04",
      details: {
        duration: "2 weeks",
        scope: "Master bathroom renovation",
        features: [
          "Walk-in shower",
          "Double vanity",
          "Heated floors",
          "Custom tile work",
        ],
      },
    },
    {
      id: 3,
      title: "Open Concept Living Space",
      category: "whole-home",
      description:
        "Opened up the floor plan to create a seamless flow between kitchen, dining, and living areas.",
      beforeImage: "photo-1487958449943-2429e8be8625",
      afterImage: "photo-1483058712412-4245e9b90334",
      details: {
        duration: "6 weeks",
        scope: "Structural modification",
        features: [
          "Wall removal",
          "Beam installation",
          "Hardwood floors",
          "Updated lighting",
        ],
      },
    },
    {
      id: 4,
      title: "Custom Built-in Entertainment Center",
      category: "custom",
      description:
        "Custom designed and built entertainment center with integrated storage and lighting.",
      beforeImage: "photo-1483058712412-4245e9b90334",
      afterImage: "photo-1721322800607-8c38375eef04",
      details: {
        duration: "1 week",
        scope: "Custom millwork",
        features: [
          "Built-in shelving",
          "Cable management",
          "LED accent lighting",
          "Matching wood stain",
        ],
      },
    },
    {
      id: 5,
      title: "Basement Finishing Project",
      category: "custom",
      description:
        "Transformed an unfinished basement into a family recreation room with bar area.",
      beforeImage: "photo-1472396961693-142e6e269027",
      afterImage: "photo-1487958449943-2429e8be8625",
      details: {
        duration: "4 weeks",
        scope: "Basement finishing",
        features: [
          "Drywall installation",
          "Flooring",
          "Bar construction",
          "Recessed lighting",
        ],
      },
    },
    {
      id: 6,
      title: "Master Suite Addition",
      category: "whole-home",
      description:
        "Added a new master suite with walk-in closet and luxury bathroom.",
      beforeImage: "photo-1721322800607-8c38375eef04",
      afterImage: "photo-1472396961693-142e6e269027",
      details: {
        duration: "8 weeks",
        scope: "Room addition",
        features: [
          "Structural framing",
          "Electrical & plumbing",
          "Custom closet",
          "Luxury finishes",
        ],
      },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchen" },
    { id: "bathroom", label: "Bathroom" },
    { id: "whole-home", label: "Whole Home" },
    { id: "custom", label: "Custom Projects" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio | Furu Holmes LLC</title>
        <meta
          name="description"
          content="See our completed luxury home remodeling projects. Kitchen, bathroom, and whole home renovations by Furu Holmes LLC."
        />
        <meta property="og:title" content="Portfolio - Furu Holmes LLC" />
        <meta
          property="og:description"
          content="See our completed luxury home remodeling projects. Kitchen, bathroom, and whole home renovations by Furu Holmes LLC."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
        <meta property="og:url" content="https://furuholmes.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            "name": "Furu Holmes LLC Portfolio",
            "description": "Luxury home remodeling projects including kitchens, bathrooms, and whole-home renovations.",
            "url": "https://furuholmes.com/portfolio"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen brand-gradient text-primary-foreground">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
                Our Portfolio
              </h1>
              <p className="text-xl text-accent">
                Explore our completed projects and see the quality craftsmanship
                that sets us apart
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
                  aria-label={`Filter by ${category.label}`}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 fade-in"
                >
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img
                          src={`https://images.unsplash.com/${project.beforeImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                          alt={`Before: ${project.title} - ${project.description}`}
                          className="w-full h-48 object-cover sm:h-56 md:h-64"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
                          BEFORE
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={`https://images.unsplash.com/${project.afterImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                          alt={`After: ${project.title} - ${project.description}`}
                          className="w-full h-48 object-cover sm:h-56 md:h-64"
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2 bg-accent text-primary px-2 py-1 rounded text-xs font-semibold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Duration:</span>
                        <span className="text-muted-foreground">
                          {project.details.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Scope:</span>
                        <span className="text-muted-foreground">
                          {project.details.scope}
                        </span>
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

        {/* Before/After Showcase */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">See the Transformation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the dramatic before and after transformations that showcase our quality craftsmanship
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                beforeAlt="Before: Outdated kitchen with old cabinets and countertops"
                afterAlt="After: Modern kitchen with custom cabinets and quartz countertops"
                title="Kitchen Transformation"
              />
              
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                afterImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                beforeAlt="Before: Basic bathroom with standard fixtures"
                afterAlt="After: Luxury bathroom with walk-in shower and modern fixtures"
                title="Bathroom Renovation"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inspired by Our Work?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how we can transform your space with the same
              attention to detail and quality craftsmanship.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
            >
              Start Your Project
            </Button>
          </div>
        </section>

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default Portfolio;
