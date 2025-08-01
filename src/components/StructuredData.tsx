import React from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'review';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type === 'organization' ? 'Organization' : 
               type === 'localBusiness' ? 'LocalBusiness' :
               type === 'service' ? 'Service' : 'Review'
    };

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          name: "Furu Homes",
          url: "https://furuhomes.com",
          logo: "https://furuhomes.com/logo.png",
          description: "Professional home remodeling and renovation services",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main Street",
            addressLocality: "City",
            addressRegion: "State",
            postalCode: "12345",
            addressCountry: "US"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            availableLanguage: "English"
          },
          sameAs: [
            "https://www.facebook.com/furuholmes",
            "https://www.instagram.com/furuholmes",
            "https://www.linkedin.com/company/furu-holmes-llc"
          ]
        };

      case 'localBusiness':
        return {
          ...baseData,
          name: "Furu Homes",
          description: "Professional home remodeling and renovation services in the greater Seattle area",
          url: "https://furuhomes.com",
          telephone: "+1-555-123-4567",
          email: "info@furuhomes.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main Street",
            addressLocality: "City",
            addressRegion: "State",
            postalCode: "12345",
            addressCountry: "US"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "47.6062",
            longitude: "-122.3321"
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "16:00"
            }
          ],
          priceRange: "$$",
          areaServed: {
            "@type": "City",
            name: "Seattle"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Home Remodeling Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Kitchen Remodeling",
                  description: "Complete kitchen renovation and remodeling services"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Bathroom Renovation",
                  description: "Luxury bathroom renovation and remodeling services"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Whole Home Remodeling",
                  description: "Complete home transformation and renovation services"
                }
              }
            ]
          }
        };

      case 'service':
        return {
          ...baseData,
          name: data.name || "Home Remodeling Services",
          description: data.description || "Professional home remodeling and renovation services",
          provider: {
            "@type": "LocalBusiness",
            name: "Furu Homes"
          },
          areaServed: {
            "@type": "City",
            name: "Seattle"
          },
          serviceType: data.serviceType || "Home Remodeling"
        };

      case 'review':
        return {
          ...baseData,
          itemReviewed: {
            "@type": "LocalBusiness",
            name: "Furu Homes"
          },
          author: {
            "@type": "Person",
            name: data.authorName || "Customer"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: data.rating || 5,
            bestRating: 5
          },
          reviewBody: data.reviewText || "Excellent service and quality workmanship",
          datePublished: data.datePublished || new Date().toISOString().split('T')[0]
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData; 