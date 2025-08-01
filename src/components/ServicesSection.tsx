import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Wrench, Paintbrush, Ruler, Home, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom designs and quality craftsmanship.",
      features: ["Custom Cabinetry", "Quartz Countertops", "High-End Appliances", "LED Lighting"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wrench,
      title: "Bathroom Renovations",
      description: "Create a luxurious spa-like retreat with modern fixtures and elegant finishes.",
      features: ["Walk-in Showers", "Double Vanities", "Heated Floors", "Custom Tile Work"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Paintbrush,
      title: "Whole Home Remodeling",
      description: "Complete home transformations that maximize space, functionality, and style.",
      features: ["Open Concept Design", "Structural Modifications", "Custom Millwork", "Premium Finishes"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Ruler,
      title: "Custom Projects",
      description: "Specialized projects tailored to your unique vision and requirements.",
      features: ["Built-in Furniture", "Entertainment Centers", "Home Offices", "Outdoor Spaces"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Home,
      title: "Additions & Extensions",
      description: "Expand your living space with expertly designed additions and extensions.",
      features: ["Room Additions", "Second Stories", "Garage Conversions", "Sunrooms"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sparkles,
      title: "Design Consultation",
      description: "Professional design guidance to bring your vision to life.",
      features: ["Space Planning", "Material Selection", "Color Consultation", "3D Renderings"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we handle every aspect of your home renovation project with precision and care
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:text-white transition-all duration-300"
                  >
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed estimate for your renovation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8">
              <Link to="/contact" className="flex items-center">
                Get Free Estimate
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 