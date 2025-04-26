import { Link } from 'react-router-dom';
import brakeImage from '../assets/brake.png'; // Import the brake.png image

const services = [
  {
    name: 'Brake Service',
    description: 'Ensure your safety with our expert brake system inspections, repairs, and replacements.',
    hoverDescription: 'Stay safe on the road with our brake repair services.',
    image: brakeImage, // Use the imported brake.png for Brake Service
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
  return (
    <section className="bg-gradient-to-b from-ultra-black to-gray-900 text-white py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            SERVICES WE <span className="text-ultra-yellow">OFFER</span>
          </h2>
          <div
            className="h-1 mx-auto mt-4"
            style={{
              width: '128px',
              background: 'linear-gradient(to right, transparent, #FFC107, transparent)',
            }}
          ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card relative h-80 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Front Side */}
              <div className="service-card-front rounded-xl shadow-lg border border-transparent bg-gradient-to-r from-ultra-yellow/20 to-ultra-blue/20 p-1">
                <div className="h-full w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ultra-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-2xl font-extrabold text-white text-center mb-2 drop-shadow-md">
                    {service.name.toUpperCase()}
                  </h3>
                  <p className="text-white text-center text-sm drop-shadow-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* Back Side */}
              <div className="service-card-back rounded-xl shadow-lg bg-gradient-to-br from-ultra-yellow to-orange-400 flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-extrabold text-white mb-4 text-center drop-shadow-md">
                  {service.name.toUpperCase()}
                </h3>
                <p className="text-white text-center mb-6 text-sm drop-shadow-sm">
                  {service.hoverDescription}
                </p>
                <Link
                  to={service.link}
                  className="bg-gradient-to-r from-ultra-yellow to-orange-400 text-ultra-black font-bold py-2 px-4 rounded-md hover:bg-ultra-blue hover:text-white hover:scale-110 transition-all duration-300 border-2 border-ultra-black"
                >
                  {service.name === 'Oil Change' ? 'View More' : 'Book Now'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}