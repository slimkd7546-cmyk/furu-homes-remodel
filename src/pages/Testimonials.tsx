
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Westfield, NJ",
      project: "Kitchen Remodeling",
      rating: 5,
      text: "Furu Holmes LLC transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and they completed the project on time and within budget. We couldn't be happier with the results!",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Springfield, MA",
      project: "Bathroom Renovation",
      rating: 5,
      text: "Professional, reliable, and the quality exceeded our expectations. Our bathroom renovation was completed flawlessly. The team was courteous and cleaned up after themselves every day. Highly recommend!",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Hartford, CT",
      project: "Whole Home Remodel",
      rating: 5,
      text: "From design to completion, the team was amazing. They listened to our vision and brought it to life beautifully. The project management was excellent, and communication was clear throughout the entire process.",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Robert Martinez",
      location: "Providence, RI",
      project: "Basement Finishing",
      rating: 5,
      text: "Our basement was completely transformed into a beautiful family room. The craftsmanship is outstanding, and they helped us maximize every square foot. The team was professional and respectful of our home.",
      date: "December 2023"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Albany, NY",
      project: "Kitchen & Dining Room",
      rating: 5,
      text: "The open concept design they created for our kitchen and dining room has completely changed how we live in our home. The workflow is perfect, and the finishes are beautiful. Worth every penny!",
      date: "November 2023"
    },
    {
      id: 6,
      name: "David Wilson",
      location: "Burlington, VT",
      project: "Master Suite Addition",
      rating: 5,
      text: "Adding a master suite seemed like a daunting project, but Furu Holmes made it seamless. From permits to final walkthrough, they handled everything professionally. The new space is our favorite part of the house.",
      date: "October 2023"
    },
    {
      id: 7,
      name: "Jennifer Brown",
      location: "New Haven, CT",
      project: "Bathroom Renovation",
      rating: 5,
      text: "Our small bathroom became a spa-like retreat thanks to their creative design solutions. They maximized the space beautifully and the tile work is absolutely stunning. Couldn't ask for better service.",
      date: "September 2023"
    },
    {
      id: 8,
      name: "Mark Anderson",
      location: "Portland, ME",
      project: "Kitchen Remodeling",
      rating: 5,
      text: "The team at Furu Holmes turned our cramped galley kitchen into an open, functional space that's perfect for entertaining. Their design expertise and quality workmanship are second to none.",
      date: "August 2023"
    },
    {
      id: 9,
      name: "Rachel Green",
      location: "Worcester, MA",
      project: "Custom Built-ins",
      rating: 5,
      text: "The custom built-in entertainment center and bookshelves they created for our living room are absolutely perfect. The attention to detail and craftsmanship is evident in every aspect of their work.",
      date: "July 2023"
    }
  ];

  const stats = [
    { number: "150+", label: "Completed Projects" },
    { number: "4.9", label: "Average Rating" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from homeowners who have experienced the Furu Holmes difference
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow duration-300 fade-in">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium mt-1">{testimonial.project}</div>
                    <div className="text-xs text-muted-foreground mt-2">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="fade-in">
              <CardContent className="p-12 text-center">
                <Quote className="h-16 w-16 text-primary/20 mx-auto mb-6" />
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl text-muted-foreground mb-8 italic leading-relaxed">
                  "Working with Furu Holmes LLC was the best decision we made for our home renovation. 
                  Their professionalism, attention to detail, and commitment to quality is unmatched. 
                  They didn't just remodel our kitchen - they transformed our entire home experience."
                </blockquote>
                <div className="text-xl font-semibold">Jennifer & Mark Stevens</div>
                <div className="text-muted-foreground">Complete Home Renovation, 2024</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the same quality craftsmanship and exceptional service that our clients rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              Get Your Free Estimate
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Testimonials;
