import { useInView } from 'react-intersection-observer';

export default function OilChange() {
  // Hooks for scroll reveal animation
  const { ref: subheadingRef, inView: subheadingInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: twoColumnRef, inView: twoColumnInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: whyOilRef, inView: whyOilInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-ultra-black text-white">
      {/* Cover Photo Section */}
      <div
        className="relative h-64 md:h-96 bg-cover bg-center neon-container"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1622515181659-4d1519d24c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60')`,
        }}
      >
        <div className="absolute inset-0 bg-ultra-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center neon-text">
            <span className="text-ultra-yellow">OIL CHANGE</span> SERVICES
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-8">
        {/* Subheading */}
        <div
          ref={subheadingRef}
          className={`text-center mb-16 reveal ${subheadingInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight neon-text">
            PREMIUM BRANDS, <span className="text-ultra-yellow">PREMIUM SERVICE</span>
          </h2>
          <div
            className="h-1 mx-auto mt-4"
            style={{
              width: '128px',
              background: 'linear-gradient(to right, transparent, #FFC107, transparent)',
            }}
          ></div>
        </div>

        {/* Two-Column Layout */}
        <div
          ref={twoColumnRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 reveal ${twoColumnInView ? 'visible' : ''}`}
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="neon-container p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
                Oil Changes at Ultra Service Center
              </h3>
              <p className="text-lg leading-relaxed drop-shadow-sm">
                At Ultra Service Center, we understand that regular oil changes are essential to keep your vehicle running smoothly and efficiently. Whether you’re driving a compact car, an SUV, or a high-performance vehicle, we have the right oil to meet your car’s specific needs. We pride ourselves on offering top-quality oil changes at affordable prices, using industry-leading brands that meet or exceed manufacturer requirements.
              </p>
            </div>

            {/* Regular Oil Changes */}
            <div className="neon-container p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 neon-text">
                Regular Oil Changes Starting at <span className="text-ultra-yellow">$49.99</span>
              </h4>
              <p className="text-base leading-relaxed drop-shadow-sm">
                Starting at just <span className="text-ultra-yellow">$49.99</span>, our standard oil change service satisfies all manufacturer requirements for rated vehicles. We carry trusted brands like Pennzoil, Amsoil, Mobil 1, and others to ensure your vehicle gets the best treatment. These oils help maintain your engine’s performance and extend its life by ensuring proper lubrication, cooling, and cleaning of vital engine components.
              </p>
            </div>

            {/* Full Synthetic Oil Changes */}
            <div className="neon-container p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3 neon-text">
                Full Synthetic Oil Changes Starting at <span className="text-ultra-yellow">$79.99</span>
              </h4>
              <p className="text-base leading-relaxed drop-shadow-sm">
                For those looking for enhanced protection, our full synthetic oil change service starts at <span className="text-ultra-yellow">$69.99</span>. We use premium brands such as Motul, Pennzoil, Mobil 1, and Amsoil. Full synthetic oils provide superior performance and protection, especially in extreme temperatures. Did you know that Pennzoil’s synthetic oils are made from natural gas? They are recommended by high-performance brands like Ferrari and engineered for vehicles like the Dodge Hellcat and Demon. This ensures your engine performs at its peak, offering you a smoother and more efficient ride.
              </p>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative h-96 lg:h-auto">
            <div
              className="h-full w-full bg-cover bg-center rounded-xl neon-container"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1637697736935-5c5f7f770f4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-ultra-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold drop-shadow-md">
                [Space for Future Image]
              </p>
            </div>
          </div>
        </div>

        {/* Why You Can’t Use Just Any Oil */}
        <div
          ref={whyOilRef}
          className={`mt-16 reveal ${whyOilInView ? 'visible' : ''}`}
        >
          <div className="neon-container p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-ultra-yellow mb-4 neon-text">
              Why You Can’t Use Just Any Oil
            </h3>
            <p className="text-base leading-relaxed drop-shadow-sm">
              Many drivers believe that as long as the oil weight (like 5W-40) matches their vehicle’s requirements, any oil will do. However, this is not the case. The oil weight is just one factor; the oil’s composition and additives are equally important. For instance, different brands of 5W-40 may contain varying levels of detergents, anti-wear agents, and friction modifiers, which are manufacturer-specific.
            </p>
            <p className="text-base leading-relaxed drop-shadow-sm mt-4">
              Using the wrong oil can cause poor engine performance, increase wear and tear, and even void your vehicle’s warranty. That’s why at Ultra Service Center, we make sure to use the right oil for your vehicle based on its manufacturer’s specifications. Our team of certified technicians will ensure your vehicle receives the exact type of oil it needs to run efficiently and last longer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}