import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="font-serif text-5xl font-bold text-brand-dark mt-2">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Form */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-cream p-8 rounded-lg text-center">
                <MapPin className="mx-auto text-brand-gold mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600">123 Culinary Avenue<br/>Food District, NY 10012</p>
              </div>
              <div className="bg-brand-cream p-8 rounded-lg text-center">
                <Phone className="mx-auto text-brand-gold mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br/>Mon-Sun 10am - 10pm</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold" />
                </div>
                <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold"></textarea>
                <button type="submit" className="bg-brand-dark text-white px-8 py-3 rounded font-bold uppercase hover:bg-gray-800 transition-colors flex items-center gap-2">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;