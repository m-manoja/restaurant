import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine if navbar should look "scrolled" (solid background)
  // Always solid on non-home pages, or when scrolled on home page
  const showSolidNav = scrolled || !isHome;

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    showSolidNav ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  // Text color logic
  const logoTextClass = showSolidNav ? 'text-brand-dark' : 'text-white md:text-white text-brand-dark drop-shadow-md';
  const linkBaseClass = "text-sm uppercase tracking-wider font-semibold hover:text-brand-gold transition-colors";
  const linkTextClass = (isActive: boolean) => {
    if (isActive) return 'text-brand-gold';
    return showSolidNav ? 'text-brand-dark' : 'text-white drop-shadow-md';
  };
  const mobileIconClass = showSolidNav ? 'text-brand-dark' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className={`font-serif text-2xl font-bold flex items-center gap-2 ${logoTextClass}`}>
          <div className="bg-brand-gold p-1.5 rounded-full">
            <Utensils size={20} className="text-white" />
          </div>
          <span className={showSolidNav ? 'text-brand-dark' : 'text-white md:text-white text-brand-dark drop-shadow-md'}>
            Raajeshwariy
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `${linkBaseClass} ${linkTextClass(isActive)}`}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/reservations"
            className="bg-brand-gold text-white px-5 py-2 rounded text-sm uppercase font-bold hover:bg-yellow-600 transition-colors"
          >
            Book Table
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-brand-dark" /> : <Menu size={28} className={mobileIconClass} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-2xl font-serif ${isActive ? 'text-brand-gold' : 'text-brand-dark'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/reservations"
            className="bg-brand-gold text-white px-8 py-3 rounded text-lg uppercase font-bold mt-4"
          >
            Book Table
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
