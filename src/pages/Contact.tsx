
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@furuholmes.com",
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Main Street, City, State 12345",
      description: "Visit our showroom"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Monday - Friday: 8AM - 6PM",
      description: "Saturday: 9AM - 4PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your home renovation project? Get in touch for your free consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 fade-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-primary font-semibold mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Get Your Free Estimate</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed estimate for your project.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                        <SelectItem value="whole-home">Whole Home Remodeling</SelectItem>
                        <SelectItem value="custom">Custom Projects</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, including timeline, budget range, and any specific requirements..."
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="fade-in">
              <div className="bg-muted rounded-lg overflow-hidden mb-8">
                <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Visit Our Showroom</h3>
                    <p className="text-muted-foreground">123 Main Street, City, State 12345</p>
                    <Button variant="outline" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Furu Holmes LLC?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <strong>Free Consultations:</strong> We provide detailed estimates at no cost
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <strong>Licensed & Insured:</strong> Fully licensed contractors with comprehensive insurance
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <strong>Quality Guarantee:</strong> We stand behind our work with comprehensive warranties
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <strong>Transparent Pricing:</strong> No hidden fees or surprise charges
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-muted-foreground mb-6">
            For urgent matters or emergency repairs, call us directly at:
          </p>
          <a 
            href="tel:5551234567" 
            className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            (555) 123-4567
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Available 24/7 for emergency services
          </p>
        </div>
      </section>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Contact;
