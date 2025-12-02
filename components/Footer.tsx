import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-gold mb-6">Savoria</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the finest authentic cuisine in a warm, welcoming atmosphere. Tradition meets innovation on every plate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink to="/menu" className="text-gray-400 hover:text-brand-gold transition-colors">Our Menu</NavLink></li>
              <li><NavLink to="/reservations" className="text-gray-400 hover:text-brand-gold transition-colors">Reservations</NavLink></li>
              <li><NavLink to="/gallery" className="text-gray-400 hover:text-brand-gold transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-brand-gold transition-colors">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-brand-gold transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>123 Culinary Avenue,<br />Food District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span>reservations@savoria.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Thu</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Fri - Sat</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span>10:00 AM - 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;