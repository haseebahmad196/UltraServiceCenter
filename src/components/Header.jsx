import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-ultra-black text-white py-3 px-4 sm:px-6 md:px-8 flex items-center justify-between shadow-lg border-b-2 border-ultra-blue/30">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center">
        <Link to="/">
          <img src={logo} alt="Ultra Service Center Logo" className="h-12 sm:h-14 md:h-16 w-[200px]" width="200" height="64" />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-6">
        <Link
          to="/services/oil-change"
          className="relative text-white hover:text-ultra-yellow transition-all duration-300 text-sm sm:text-base md:text-lg font-bold nav-link"
        >
          OIL CHANGE
        </Link>
        <div className="relative group">
          <button className="flex items-center relative text-white hover:text-ultra-yellow transition-all duration-300 text-sm sm:text-base md:text-lg font-bold nav-link">
            AUTO REPAIR
            <span className="ml-1 dropdown-arrow">▼</span>
          </button>
          <div className="absolute right-0 hidden group-hover:block bg-ultra-black text-white rounded-md shadow-lg mt-2 z-20 min-w-[200px]">
            <Link
              to="/services/auto-maintenance"
              className="block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white transition-colors duration-300 uppercase"
            >
              AUTO MAINTENANCE
            </Link>
            <Link
              to="/services/exhaust-mufflers"
              className="block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white transition-colors duration-300 uppercase"
            >
              EXHAUST AND MUFFLERS
            </Link>
            <Link
              to="/services/transmission"
              className="block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white transition-colors duration-300 uppercase"
            >
              TRANSMISSION SERVICES
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center relative text-white hover:text-ultra-yellow transition-all duration-300 text-sm sm:text-base md:text-lg font-bold nav-link">
            CONTACT US
            <span className="ml-1 dropdown-arrow">▼</span>
          </button>
          <div className="absolute right-0 hidden group-hover:block bg-ultra-black text-white rounded-md shadow-lg mt-2 z-20 min-w-[150px]">
            <Link
              to="/about"
              className="block px-4 py-2 text-sm sm:text-base hover:bg-ultra-blue hover:text-white transition-colors duration-300 uppercase"
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link to="/" className="text-ultra-yellow">
          <FaHome size={24} />
        </Link>
        <a href="mailto:info@ultraservicecenter.com" className="text-ultra-yellow">
          <FaEnvelope size={24} />
        </a>
        <Link to="/">
          <img src={logo} alt="Ultra Service Center Logo" className="h-10 w-[150px]" width="150" height="40" />
        </Link>
        <a href="tel:+1234567890" className="text-ultra-yellow">
          <FaPhone size={24} />
        </a>
        <button onClick={toggleNav} className="text-ultra-yellow">
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-ultra-black bg-opacity-95 z-30 flex flex-col items-center justify-center md:hidden">
          <button onClick={toggleNav} className="absolute top-4 right-4 text-ultra-yellow">
            <FaTimes size={24} />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            <Link
              to="/services/oil-change"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              OIL CHANGE
            </Link>
            <Link
              to="/services/auto-repair"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              AUTO REPAIR
            </Link>
            <Link
              to="/services/auto-maintenance"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              AUTO MAINTENANCE
            </Link>
            <Link
              to="/services/exhaust-mufflers"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              EXHAUST AND MUFFLERS
            </Link>
            <Link
              to="/services/transmission"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              TRANSMISSION SERVICES
            </Link>
            <Link
              to="/contact"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
            >
              CONTACT US
            </Link>
            <Link
              to="/about"
              onClick={toggleNav}
              className="text-white hover:text-ultra-yellow transition-all duration-300 text-lg font-bold"
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