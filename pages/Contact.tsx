import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            <h1 className="font-serif text-5xl font-bold text-brand-dark mt-2">Reach Raajeshwariy</h1>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Form */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-cream p-8 rounded-lg text-center">
                <MapPin className="mx-auto text-brand-gold mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600">Kankesanthurai Road<br/>Jaffna, Sri Lanka</p>
              </div>
              <div className="bg-brand-cream p-8 rounded-lg text-center">
                <Phone className="mx-auto text-brand-gold mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">+94 77 123 4567<br/>Mon-Sun 12pm - 10pm</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3002301825527!2d80.014367!3d9.661498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe548138b222af%3A0x2a5a45fc5517fcd0!2sJaffna!5e0!3m2!1sen!2slk!4v1700000000000" 
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
