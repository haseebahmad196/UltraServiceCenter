import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

export default function About() {
  // Hooks for scroll reveal animation
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-ultra-black text-white min-h-screen py-20 px-4 sm:px-6 md:px-8">
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>About Us - Ultra Service Center | Mississauga Automotive Care</title>
        <meta
          name="description"
          content="Learn about Ultra Service Center, a family-owned automotive care business in Mississauga since 1975. Discover our values, services, certified technicians, and MD State Inspection offerings."
        />
        <meta
          name="keywords"
          content="Ultra Service Center, Mississauga, automotive care, certified technicians, MD State Inspection, collision repair, auto body repair, family-owned, 50 years experience"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 reveal ${headingInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight neon-text">
            ABOUT <span className="text-ultra-yellow">US</span>
          </h1>
          <div
            className="h-1 mx-auto mt-4"
            style={{
              width: '128px',
              background: 'linear-gradient(to right, transparent, #FFC107, transparent)',
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
            <div className="neon-container p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                Welcome to Ultra Service Center
              </h2>
              <p className="text-lg leading-relaxed drop-shadow-sm">
                Welcome to Ultra Service Center, your trusted automotive care partner since 1975! Based in Mississauga, our family-owned business has built a reputation for excellence, backed by over 50 years of combined experience in the industry.
              </p>
            </div>

            {/* Who We Are Section */}
            <div className="neon-container p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed drop-shadow-sm">
                At Ultra Service Center, we pride ourselves on our commitment to quality service and customer satisfaction. Our team is led by the Shafiq family—Jawad Shafiq, our Owner and President; Talha Shafiq, our VP of Operations; and Fahad Shafiq, our Director of Operations. Together, we bring a wealth of knowledge and passion to every vehicle we service, supported by our certified technicians.
              </p>
            </div>

            {/* Our Values Section */}
            <div className="neon-container p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                Our Values
              </h2>
              <p className="text-lg leading-relaxed drop-shadow-sm">
                We believe in the core values of discipline, respect, and honesty. These principles guide our work and our relationships with our customers, ensuring a positive experience every time you visit us.
              </p>
            </div>

            {/* What We Offer Section */}
            <div className="neon-container p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                What We Offer
              </h2>
              <p className="text-lg leading-relaxed drop-shadow-sm">
                We are fully licensed and insured, providing a range of services to meet all your automotive needs. From routine maintenance to complex repairs, our certified technicians are here to help. We also offer MD State Inspection services to ensure your vehicle meets all regulatory standards. We take pride in our average Google rating of 4.8, a testament to our dedication to exceptional service.
              </p>
              <p className="text-lg leading-relaxed drop-shadow-sm mt-4">
                Recently, we have expanded our offerings to include collision and auto body repair services. This new addition allows us to provide comprehensive care for your vehicle, no matter the issue.
              </p>
            </div>

            {/* Why Choose Ultra Service Center Section */}
            <div className="neon-container p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                Why Choose Ultra Service Center?
              </h2>
              <ul className="list-disc list-inside text-lg leading-relaxed drop-shadow-sm">
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
            </div>

            {/* Thank You Section */}
            <div className="neon-container p-6 rounded-xl">
              <p className="text-lg leading-relaxed drop-shadow-sm italic">
                Thank you for considering Ultra Service Center for your automotive needs. We look forward to serving you and keeping your vehicle running smoothly for years!
              </p>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative h-96 lg:h-auto">
            <div
              className="h-full w-full bg-cover bg-center rounded-xl neon-container"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1616446146808-7facc69d90e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-ultra-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold drop-shadow-md">
                [Space for Future Image]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}