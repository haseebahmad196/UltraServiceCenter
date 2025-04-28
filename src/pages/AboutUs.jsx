import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-ultra-black text-white py-20 px-4 sm:px-6 md:px-8 particle-bg">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 reveal ${headingInView ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text">
            ABOUT <span>US</span>
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

        {/* Content: Two-Column Layout */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 reveal ${contentInView ? 'visible' : ''}`}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div className="glass-container p-8 rounded-xl gradient-overlay">
              <p className="text-lg elegant-text">
                Since 1975, Ultra Service Center has been serving the Mississauga and surrounding area residents with a stellar reputation for pricing and customer service. Our certified technicians provide top-notch automotive care, including MD State Inspection services, making us the premier one-stop shop for all your vehicle needs in Mississauga, Ontario.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block bg-transparent text-ultra-yellow font-bold py-3 px-6 rounded-md border-2 border-ultra-yellow hover:bg-ultra-yellow hover:text-ultra-black hover:shadow-[0_0_20px_rgba(255,193,7,0.8)] transition-all duration-300 ripple-button"
            >
              Learn More
            </Link>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative h-96 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1616446146808-7facc69d90e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
              alt="Ultra Service Center - Automotive Care"
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
    </section>
  );
}