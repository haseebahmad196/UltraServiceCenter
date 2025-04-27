import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
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
    <section className="bg-ultra-black text-white py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 reveal ${headingInView ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight neon-text">
            ABOUT <span className="text-ultra-yellow">US</span>
          </h2>
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
          <div className="space-y-6">
            <div className="neon-container p-6 rounded-xl">
              <p className="text-lg leading-relaxed drop-shadow-sm">
                Since 1975, Ultra Service Center has been serving the Mississauga and surrounding area residents with a stellar reputation for pricing and customer service. Our certified technicians provide top-notch automotive care, including MD State Inspection services, making us the premier one-stop shop for all your vehicle needs in Mississauga, Ontario.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block bg-transparent text-ultra-yellow font-bold py-2 px-4 rounded-md border-2 border-ultra-yellow hover:bg-ultra-yellow hover:text-ultra-black hover:shadow-[0_0_15px_rgba(255,193,7,0.8)] transition-all duration-300"
            >
              Learn More
            </Link>
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
    </section>
  );
}