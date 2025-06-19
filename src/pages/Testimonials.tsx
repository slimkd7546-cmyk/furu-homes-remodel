import React from 'react';
import { Star, Quote, Sparkles, Heart, Award, TrendingUp } from 'lucide-react';
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
    { number: "150+", label: "Completed Projects", icon: TrendingUp },
    { number: "4.9", label: "Average Rating", icon: Star },
    { number: "98%", label: "Customer Satisfaction", icon: Heart },
    { number: "10+", label: "Years Experience", icon: Award }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Header />
      
      {/* Hero Section with Glassmorphism */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-16 w-16 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 bg-clip-text text-transparent">
                Client Stories
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Real transformations, real emotions, real results - discover what makes our clients fall in love with their homes all over again
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{
                  transform: `translateY(${index % 2 === 0 ? '10px' : '-10px'})`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="h-8 w-8 text-yellow-400 mb-4 mx-auto" />
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Testimonials Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative ${index % 3 === 1 ? 'lg:translate-y-8' : ''} ${index % 3 === 2 ? 'lg:translate-y-4' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                {/* Main card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Floating quote icon */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>

                  {/* Stars with gradient */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-6 w-6 text-yellow-400 fill-current animate-pulse" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <blockquote className="text-white/90 mb-8 text-lg leading-relaxed italic relative">
                    <span className="text-6xl text-purple-400/30 absolute -top-4 -left-2">"</span>
                    {testimonial.text}
                    <span className="text-6xl text-purple-400/30 absolute -bottom-8 -right-2">"</span>
                  </blockquote>
                  
                  {/* Client info with modern styling */}
                  <div className="relative">
                    <div className="flex items-center space-x-4">
                      {/* Avatar placeholder with gradient */}
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-bold text-xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                          {testimonial.name}
                        </div>
                        <div className="text-white/60 text-sm">{testimonial.location}</div>
                        <div className="text-yellow-400 font-medium text-sm mt-1 flex items-center">
                          <Sparkles className="h-3 w-3 mr-1" />
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-xs text-white/50 text-right">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-modern Featured Testimonial */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              {/* Mega glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              
              <div className="relative bg-black/20 backdrop-blur-2xl rounded-[3rem] p-16 border border-white/20 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
                </div>
                
                <div className="relative text-center">
                  {/* Floating elements */}
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
                  
                  <Quote className="h-24 w-24 mx-auto mb-8 text-white/20" />
                  
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-8 w-8 text-yellow-400 fill-current mx-1" 
                        style={{ 
                          animationDelay: `${i * 200}ms`,
                          filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))'
                        }}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-3xl md:text-4xl font-light mb-12 leading-relaxed bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                    "Working with Furu Holmes LLC was the best decision we made for our home renovation. 
                    Their professionalism, attention to detail, and commitment to quality is unmatched. 
                    They didn't just remodel our kitchen - they transformed our entire home experience."
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-white text-2xl font-bold">JS</span>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Jennifer & Mark Stevens
                      </div>
                      <div className="text-white/70 mt-1">Complete Home Renovation, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the same quality craftsmanship and exceptional service that our clients rave about. 
            Your dream home transformation starts with a single conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="relative group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Get Your Free Estimate</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              className="relative group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">View Our Portfolio</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
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
