import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import ContactForm from '@/components/ContactForm';
import { Helmet } from 'react-helmet';

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact | Furu Holmes LLC</title>
        <meta name="description" content="Contact Furu Holmes LLC for a free consultation and estimate on your luxury home renovation project." />
        <meta property="og:title" content="Contact - Furu Holmes LLC" />
        <meta property="og:description" content="Contact Furu Holmes LLC for a free consultation and estimate on your luxury home renovation project." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://furuholmes.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#2d1a10] via-[#3e2723] to-[#1a120b] text-[#e7dac5]">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
              <p className="text-xl text-gray-300">
                Ready to start your home renovation project? Get in touch for your free consultation and estimate.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default Contact;
