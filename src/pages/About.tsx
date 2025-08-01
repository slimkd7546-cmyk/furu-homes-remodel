import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional workmanship that stands the test of time.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your vision and satisfaction are at the heart of everything we do.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and complete projects on schedule without compromising quality.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Licensed, insured, and committed to transparent communication throughout your project.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "John Furu",
      role: "Founder & Lead Contractor",
      description: "With over 15 years in construction and remodeling, John brings expertise and passion to every project.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "15+ Years"
    },
    {
      name: "Sarah Holmes",
      role: "Design Consultant",
      description: "Sarah's eye for design and attention to detail ensures every space is both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "10+ Years"
    },
    {
      name: "Mike Rodriguez",
      role: "Project Manager",
      description: "Mike ensures every project runs smoothly, on time, and within budget from start to finish.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      experience: "12+ Years"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <>
      <Helmet>
        <title>About | Furu Holmes LLC</title>
        <meta
          name="description"
          content="Learn about Furu Holmes LLC, our mission, values, and team. Trusted luxury home remodeling and renovation experts."
        />
        <meta property="og:title" content="About - Furu Holmes LLC" />
        <meta
          property="og:description"
          content="Learn about Furu Holmes LLC, our mission, values, and team. Trusted luxury home remodeling and renovation experts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
        <meta property="og:url" content="https://furuholmes.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-white text-gray-900">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Furu Holmes LLC</h1>
              <p className="text-xl text-gray-300">
                Your trusted partner in transforming houses into beautiful, functional dream homes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Founded with a passion for exceptional craftsmanship and
                    customer satisfaction, Furu Holmes LLC has been transforming
                    homes and lives for over a decade. What started as a small
                    family business has grown into a trusted name in home
                    remodeling and renovation.
                  </p>
                  <p>
                    We believe that your home is more than just a building –
                    it's where memories are made, families grow, and dreams come
                    to life. That's why we approach every project with the same
                    level of care and attention we would give to our own homes.
                  </p>
                  <p>
                    Our team of skilled craftsmen, designers, and project
                    managers work together to ensure that every detail meets our
                    high standards and exceeds your expectations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl">
                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Over 15 years of experience in home remodeling</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Fully licensed and insured for your protection</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Commitment to using quality materials and techniques</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Comprehensive warranty on all our work</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're driven by core values that guide every project and client relationship
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are dedicated to bringing your vision to life
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                      <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-gray-500 mb-4">{member.experience} Experience</p>
                      <p className="text-gray-600">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Let's discuss how we can transform your space with the same attention to detail and quality craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8">
                  <Link to="/contact" className="flex items-center">
                    Get Free Estimate
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default About;
