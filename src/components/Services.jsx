import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { PopupModal } from 'react-calendly';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import brakeImage from '../assets/brake.png';

const services = [
  {
    name: 'Brake Service',
    description: 'Ensure your safety with our expert brake system inspections, repairs, and replacements.',
    hoverDescription: 'Stay safe on the road with our brake repair services.',
    image: brakeImage,
    link: '/services/auto-repair',
  },
  {
    name: 'Tune Up',
    description: 'Optimize your vehicle’s performance and fuel efficiency with our comprehensive tune-up services.',
    hoverDescription: 'Boost your vehicle’s performance with a tune-up today.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-maintenance',
  },
  {
    name: 'Oil Change',
    description: 'Keep your engine running smoothly with our high-quality oil change services.',
    hoverDescription: 'Learn more about our oil change services and schedule your appointment.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/oil-change',
  },
  {
    name: 'A/C Service',
    description: 'Stay cool with our expert A/C system repairs, maintenance, and recharging services.',
    hoverDescription: 'Keep your A/C running smoothly with our professional care.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-repair',
  },
  {
    name: 'Tire Service',
    description: 'Ensure your tires are safe and reliable with our thorough tire maintenance services.',
    hoverDescription: 'Keep your tires in top condition with our expert care.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-maintenance',
  },
  {
    name: 'Tire Rotation',
    description: 'Extend tire life and improve handling with our professional tire rotation services.',
    hoverDescription: 'Maintain even tire wear with our rotation services.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-maintenance',
  },
  {
    name: 'Wheel Balance',
    description: 'Improve ride quality and tire longevity with our precise wheel balancing services.',
    hoverDescription: 'Ensure a smooth ride with our wheel balancing expertise.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-maintenance',
  },
  {
    name: 'Computer Diagnostic',
    description: 'Identify issues quickly with our advanced computer diagnostic services.',
    hoverDescription: 'Get accurate diagnostics to keep your vehicle running smoothly.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-repair',
  },
  {
    name: 'Suspension Repair',
    description: 'Enhance your ride quality with our expert suspension repair and alignment services.',
    hoverDescription: 'Improve your ride comfort with our suspension expertise.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-repair',
  },
  {
    name: 'Schedule Maintenance',
    description: 'Keep your vehicle in top shape with our scheduled maintenance services.',
    hoverDescription: 'Stay on track with our routine maintenance plans.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/services/auto-maintenance',
  },
];

export default function Services() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [calendlyError, setCalendlyError] = useState(false);

  const openCalendly = (serviceName) => {
    setSelectedService(serviceName);
    setIsCalendlyOpen(true);
  };

  const handleCalendlyError = () => {
    setCalendlyError(true);
    setIsCalendlyOpen(false);
  };

  const structuredData = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ultra Service Center",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "description": service.description,
    "url": `https://www.ultraservicecenter.com${service.link}`
  }));

  return (
    <section className="bg-ultra-black text-white py-20 px-4 sm:px-6 md:px-8 particle-bg">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 reveal ${headingInView ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text">
            SERVICES WE <span>OFFER</span>
          </h2>
          <div
            className="h-1 mx-auto mt-4"
            style={{
              width: '128px',
              background: 'linear-gradient(to right, transparent, #FFC107, #00DDEB, transparent)',
              boxShadow: '0 0 15px rgba(255, 193, 7, 0.5), 0 0 20px rgba(0, 221, 235, 0.3)',
            }}
          ></div>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal ${cardsInView ? 'visible' : ''}`}
        >
          {services.map((service) => (
            <article key={service.name} className="glass-container rounded-xl gradient-overlay">
              <img
                src={service.image}
                alt={`${service.name} at Ultra Service Center`}
                className="h-48 w-full object-cover neon-image-frame rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ultra-yellow mb-3 gradient-text">
                  {service.name.toUpperCase()}
                </h3>
                <p className="text-white text-sm elegant-text mb-4">
                  {service.description}
                </p>
                <p className="text-white text-sm elegant-text mb-4 italic">
                  {service.hoverDescription}
                </p>
                {service.name === 'Oil Change' ? (
                  <Link
                    to={service.link}
                    className="inline-block bg-transparent text-ultra-yellow font-bold py-2 px-4 rounded-md border-2 border-ultra-yellow hover:bg-ultra-yellow hover:text-ultra-black hover:shadow-[0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300 ripple-button"
                  >
                    View More
                  </Link>
                ) : (
                  <button
                    onClick={() => openCalendly(service.name)}
                    className="inline-block bg-transparent text-ultra-yellow font-bold py-2 px-4 rounded-md border-2 border-ultra-yellow hover:bg-ultra-yellow hover:text-ultra-black hover:shadow-[0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300 ripple-button"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {isCalendlyOpen && (
        <PopupModal
          url="https://calendly.com/hello-ultraautofix/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById('root')}
          prefill={{
            name: 'Ultra Service Center Customer',
            customAnswers: {
              a1: selectedService,
            },
          }}
          utm={{
            utmCampaign: 'UltraServiceCenter',
            utmSource: 'Website',
          }}
          onError={handleCalendlyError}
        />
      )}

      {calendlyError && (
        <div className="fixed inset-0 flex items-center justify-center bg-ultra-black bg-opacity-80 z-50">
          <div className="glass-container p-6 rounded-xl gradient-overlay max-w-md text-center">
            <h3 className="text-2xl font-bold text-ultra-yellow mb-4 gradient-text">
              Booking Unavailable
            </h3>
            <p className="text-white mb-6 elegant-text">
              Sorry, we couldn’t load the booking system. Please try again later or contact us directly.
            </p>
            <button
              onClick={() => setCalendlyError(false)}
              className="inline-block bg-transparent text-ultra-yellow font-bold py-2 px-4 rounded-md border-2 border-ultra-yellow hover:bg-ultra-yellow hover:text-ultra-black hover:shadow-[0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300 ripple-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}