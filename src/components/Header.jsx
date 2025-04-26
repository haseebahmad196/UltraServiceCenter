import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logoDesktop from '../assets/logo.webp';
import logoMobile from '../assets/logo.webp';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <header className="bg-ultra-black text-white py-3 px-4 sm:px-6 md:px-8 flex items-center justify-between shadow-lg border-b-2 border-ultra-blue/30">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center">
        <Link to="/">
          <img src={logoDesktop} alt="Ultra Service Center Logo" className="h-12 sm:h-14 md:h-16 w-[200px]" width="200" height="64" />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-4 sm:space-x-6 md:space-x-8">
        <Link
          to="/services/oil-change"
          className="relative text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg font-bold nav-link"
        >
          OIL CHANGE
        </Link>
        <div className="relative group">
          <button className="flex items-center relative text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg font-bold nav-link">
            AUTO REPAIR
            <span className="ml-1 dropdown-arrow">▼</span>
          </button>
          <div className="absolute right-0 top-full mt-0 hidden group-hover:block bg-ultra-black text-white rounded-md shadow-lg z-20 min-w-[200px]">
            <Link
              to="/services/auto-maintenance"
              onClick={() => handleServiceClick('auto-maintenance')}
              className={`block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white hover:scale-105 transition-all duration-300 uppercase ${
                selectedService === 'auto-maintenance' ? 'bg-ultra-yellow text-ultra-black' : ''
              }`}
            >
              AUTO MAINTENANCE
            </Link>
            <Link
              to="/services/exhaust-mufflers"
              onClick={() => handleServiceClick('exhaust-mufflers')}
              className={`block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white hover:scale-105 transition-all duration-300 uppercase ${
                selectedService === 'exhaust-mufflers' ? 'bg-ultra-yellow text-ultra-black' : ''
              }`}
            >
              EXHAUST AND MUFFLERS
            </Link>
            <Link
              to="/services/transmission"
              onClick={() => handleServiceClick('transmission')}
              className={`block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white hover:scale-105 transition-all duration-300 uppercase ${
                selectedService === 'transmission' ? 'bg-ultra-yellow text-ultra-black' : ''
              }`}
            >
              TRANSMISSION SERVICES
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center text-white bg-ultra-blue border-2 border-ultra-blue px-4 py-2 rounded-md hover:bg-blue-700 hover:text-ultra-yellow transition-all duration-300 text-sm sm:text-base md:text-lg font-bold">
            CONTACT US
            <span className="ml-2 text-white group-hover:text-ultra-yellow transition-all duration-300">▼</span>
          </button>
          <div className="absolute right-0 top-full mt-0 hidden group-hover:block bg-ultra-black text-white rounded-md shadow-lg z-20 min-w-[150px]">
            <Link
              to="/about"
              onClick={() => handleServiceClick('about')}
              className={`block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white hover:scale-105 transition-all duration-300 uppercase ${
                selectedService === 'about' ? 'bg-ultra-yellow text-ultra-black' : ''
              }`}
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link to="/" className="text-ultra-yellow hover:text-ultra-blue hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-yellow" aria-label="Home">
          <FaHome size={24} />
        </Link>
        <a href="mailto:info@ultraservicecenter.com" className="text-ultra-yellow hover:text-ultra-blue hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-yellow" aria-label="Email Us">
          <FaEnvelope size={24} />
        </a>
        <Link to="/">
          <img src={logoMobile} alt="Ultra Service Center Logo" className="h-10 w-[150px]" width="150" height="40" />
        </Link>
        <a href="tel:+1234567890" className="text-ultra-yellow hover:text-ultra-blue hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-yellow" aria-label="Call Us">
          <FaPhone size={24} />
        </a>
        <button onClick={toggleNav} className="text-ultra-yellow hover:text-ultra-blue hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-yellow" aria-label={isNavOpen ? "Close Navigation Menu" : "Open Navigation Menu"}>
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-ultra-black bg-opacity-95 z-30 flex flex-col items-center justify-center md:hidden">
          <button onClick={toggleNav} className="absolute top-4 right-4 text-ultra-yellow hover:text-ultra-blue hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ultra-yellow" aria-label="Close Navigation Menu">
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <Link
              to="/services/oil-change"
              onClick={() => {
                toggleNav();
                handleServiceClick('oil-change');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'oil-change' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              OIL CHANGE
            </Link>
            <Link
              to="/services/auto-repair"
              onClick={() => {
                toggleNav();
                handleServiceClick('auto-repair');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'auto-repair' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              AUTO REPAIR
            </Link>
            <Link
              to="/services/auto-maintenance"
              onClick={() => {
                toggleNav();
                handleServiceClick('auto-maintenance');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'auto-maintenance' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              AUTO MAINTENANCE
            </Link>
            <Link
              to="/services/exhaust-mufflers"
              onClick={() => {
                toggleNav();
                handleServiceClick('exhaust-mufflers');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'exhaust-mufflers' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              EXHAUST AND MUFFLERS
            </Link>
            <Link
              to="/services/transmission"
              onClick={() => {
                toggleNav();
                handleServiceClick('transmission');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'transmission' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              TRANSMISSION SERVICES
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                toggleNav();
                handleServiceClick('contact');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'contact' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              CONTACT US
            </Link>
            <Link
              to="/about"
              onClick={() => {
                toggleNav();
                handleServiceClick('about');
              }}
              className={`text-white hover:text-ultra-yellow hover:scale-105 transition-all duration-300 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-ultra-yellow ${
                selectedService === 'about' ? 'bg-ultra-yellow text-ultra-black px-4 py-2 rounded-md' : ''
              }`}
            >
              ABOUT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;