import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

export default function About() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ultra Service Center",
    "description": "Ultra Service Center, a family-owned automotive care business in Mississauga since 1975, offering services by certified technicians including MD State Inspection.",
    "url": "https://www.ultraservicecenter.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "foundingDate": "1975",
    "founder": [
      {
        "@type": "Person",
        "name": "Jawad Shafiq"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://www.ultraservicecenter.com/contact"
    }
  };

  return (
    <div className="bg-ultra-black text-white min-h-screen py-20 px-4 sm:px-6 md:px-8 particle-bg">
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>About Us - Ultra Service Center | Mississauga Automotive Care</title>
        <meta
          name="description"
          content="Learn about Ultra Service Center, a family-owned automotive care business in Mississauga since 1975. Discover our values, services, certified technicians, and MD State Inspection offerings."
        />
        <meta
          name="keywords"
          content="Ultra Service Center, Mississauga, automotive care, certified technicians, MD State Inspection, collision repair, auto body repair, family-owned, 50 years experience, vehicle maintenance"
        />
        <meta property="og:title" content="About Us - Ultra Service Center" />
        <meta property="og:description" content="Discover the history, values, and services of Ultra Service Center, a trusted automotive care provider in Mississauga since 1975." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ultraservicecenter.com/about" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1616446146808-7facc69d90e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Ultra Service Center" />
        <meta name="twitter:description" content="Discover the history, values, and services of Ultra Service Center, a trusted automotive care provider in Mississauga since 1975." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1616446146808-7facc69d90e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 reveal ${headingInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text">
            ABOUT <span>US</span>
          </h1>
          <div
            className="h-1 mx-auto mt-4"
            style={{
              width: '128px',
              background: 'linear-gradient(to right, transparent, #FFC107, #00DDEB, transparent)',
              boxShadow: '0 0 15px rgba(255, 193, 7, 0.5), 0 0 20px rgba(0, 221, 235, 0.3)',
            }}
          ></div>
        </div>

        {/* Content: Two-Column Layout */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 reveal ${contentInView ? 'visible' : ''}`}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {/* Welcome Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
                Welcome to Ultra Service Center
              </h2>
              <p className="text-lg elegant-text">
                Welcome to Ultra Service Center, your trusted automotive care partner since 1975! Based in Mississauga, our family-owned business has built a reputation for excellence, backed by over 50 years of combined experience in the industry.
              </p>
            </article>

            {/* Who We Are Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
                Who We Are
              </h2>
              <p className="text-lg elegant-text">
                At Ultra Service Center, we pride ourselves on our commitment to quality service and customer satisfaction. Our team is led by the Shafiq family—Jawad Shafiq, our Owner and President; Talha Shafiq, our VP of Operations; and Fahad Shafiq, our Director of Operations. Together, we bring a wealth of knowledge and passion to every vehicle we service, supported by our certified technicians.
              </p>
            </article>

            {/* Our Values Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
                Our Values
              </h2>
              <p className="text-lg elegant-text">
                We believe in the core values of discipline, respect, and honesty. These principles guide our work and our relationships with our customers, ensuring a positive experience every time you visit us.
              </p>
            </article>

            {/* What We Offer Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
                What We Offer
              </h2>
              <p className="text-lg elegant-text">
                We are fully licensed and insured, providing a range of services to meet all your automotive needs. From routine maintenance to complex repairs, our certified technicians are here to help. We also offer MD State Inspection services to ensure your vehicle meets all regulatory standards. We take pride in our average Google rating of 4.8, a testament to our dedication to exceptional service.
              </p>
              <p className="text-lg elegant-text mt-4">
                Recently, we have expanded our offerings to include collision and auto body repair services. This new addition allows us to provide comprehensive care for your vehicle, no matter the issue.
              </p>
            </article>

            {/* Why Choose Ultra Service Center Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
                Why Choose Ultra Service Center?
              </h2>
              <ul className="list-disc list-inside text-lg elegant-text">
                <li>
                  <span className="font-bold">Experience:</span> Over 50 years in the automotive industry.
                </li>
                <li>
                  <span className="font-bold">Certified Technicians:</span> Our team includes certified professionals for top-quality service.
                </li>
                <li>
                  <span className="font-bold">MD State Inspection:</span> We offer official MD State Inspection services for your convenience.
                </li>
                <li>
                  <span className="font-bold">Trusted Service:</span> Insurance and warranty-approved services provide peace of mind.
                </li>
                <li>
                  <span className="font-bold">Family Values:</span> As a family-owned business, we treat our customers like family.
                </li>
              </ul>
            </article>

            {/* Thank You Section */}
            <article className="glass-container p-8 rounded-xl gradient-overlay">
              <p className="text-lg elegant-text italic">
                Thank you for considering Ultra Service Center for your automotive needs. We look forward to serving you and keeping your vehicle running smoothly for years!
              </p>
            </article>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1616446146808-7facc69d90e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
              alt="Ultra Service Center - Automotive Care Facility"
              className="h-full w-full object-cover neon-image-frame"
            />
            <div className="absolute inset-0 bg-ultra-black bg-opacity-40 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold drop-shadow-md elegant-text">
                [Space for Future Image]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}