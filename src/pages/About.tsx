import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { Helmet } from 'react-helmet';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional workmanship that stands the test of time."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your vision and satisfaction are at the heart of everything we do."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and complete projects on schedule without compromising quality."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Licensed, insured, and committed to transparent communication throughout your project."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | Furu Holmes LLC</title>
        <meta name="description" content="Learn about Furu Holmes LLC, our mission, values, and team. Trusted luxury home remodeling and renovation experts." />
        <meta property="og:title" content="About - Furu Holmes LLC" />
        <meta property="og:description" content="Learn about Furu Holmes LLC, our mission, values, and team. Trusted luxury home remodeling and renovation experts." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://furuholmes.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#2d1a10] via-[#3e2723] to-[#1a120b] text-[#e7dac5]">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#3e2723]/60">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#e7dac5] via-[#c9a66b] to-[#a67c52] bg-clip-text text-transparent">About Furu Holmes LLC</h1>
              <p className="text-xl text-[#c9a66b]">
                Your trusted partner in transforming houses into beautiful, functional dream homes
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Founded with a passion for exceptional craftsmanship and customer satisfaction, 
                    Furu Holmes LLC has been transforming homes and lives for over a decade. What started 
                    as a small family business has grown into a trusted name in home remodeling and renovation.
                  </p>
                  <p>
                    We believe that your home is more than just a building – it's where memories are made, 
                    families grow, and dreams come to life. That's why we approach every project with the 
                    same level of care and attention we would give to our own homes.
                  </p>
                  <p>
                    Our team of skilled craftsmen, designers, and project managers work together to ensure 
                    that every detail meets our high standards and exceeds your expectations.
                  </p>
                </div>
              </div>
              <div className="fade-in">
                <div className="bg-muted/50 rounded-lg p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <span>Over 10 years of experience in home remodeling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <span>Fully licensed and insured for your protection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <span>Commitment to using quality materials and techniques</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <span>Comprehensive warranty on all our work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're driven by core values that guide every project and client relationship
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 fade-in">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our experienced professionals are dedicated to bringing your vision to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center fade-in">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">John Furu</h3>
                  <p className="text-primary font-medium mb-4">Founder & Lead Contractor</p>
                  <p className="text-muted-foreground">
                    With over 15 years in construction and remodeling, John brings expertise 
                    and passion to every project.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center fade-in">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sarah Holmes</h3>
                  <p className="text-primary font-medium mb-4">Design Consultant</p>
                  <p className="text-muted-foreground">
                    Sarah's eye for design and attention to detail ensures every space 
                    is both beautiful and functional.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center fade-in">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mike Rodriguez</h3>
                  <p className="text-primary font-medium mb-4">Project Manager</p>
                  <p className="text-muted-foreground">
                    Mike ensures every project runs smoothly, on time, and within budget 
                    from start to finish.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default About;
