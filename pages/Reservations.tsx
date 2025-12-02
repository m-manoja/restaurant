import React, { useState } from 'react';
import { ReservationData } from '../types';
import { Calendar, Clock, Users, CheckCircle, Info, Phone } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    requests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 bg-brand-cream min-h-screen flex items-center justify-center">
        <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">Reservation Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you, {formData.name}. We have received your booking for {formData.guests} people on {formData.date} at {formData.time}.
            A confirmation email has been sent to {formData.email}.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-brand-gold text-white px-8 py-3 rounded font-bold uppercase hover:bg-yellow-600 transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Centered Page Header */}
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Book a Table</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mt-2 mb-4">Book Your Coastal Table</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Secure your seat for the freshest Tamil seafood in Chennai. From date nights to family feasts, we’ll have the catch ready.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Main Form Section - Left */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-lg shadow-md">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-brand-dark">Reservation Details</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <select 
                      name="guests" 
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <select 
                      name="time" 
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Special Requests</label>
                <textarea 
                  name="requests" 
                  rows={4}
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                  placeholder="Allergies, high chair needs, special occasion, etc."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-gold text-white py-4 rounded font-bold uppercase tracking-widest hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Info Sidebar - Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Hours Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold">
                    <Clock size={20} />
                 </div>
                 <h3 className="font-serif text-xl font-bold">Opening Hours</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Mon - Thu</span>
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Fri - Sat</span>
                  <span className="font-semibold">11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 9:30 PM</span>
                </li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold">
                    <Phone size={20} />
                 </div>
                 <h3 className="font-serif text-xl font-bold">Contact</h3>
              </div>
                <p className="text-gray-600 text-sm mb-4">
                  For family-style feasts, corporate lunches, or rituals, call us directly.
                </p>
                <a href="tel:+919884012345" className="text-brand-dark font-bold text-lg hover:text-brand-gold transition-colors">
                +91 98840 12345
                </a>
              </div>

            {/* Policy Card */}
            <div className="bg-brand-dark text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-gold">
                    <Info size={20} />
                 </div>
                 <h3 className="font-serif text-xl font-bold">Booking Policy</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                <li>Reservations are held for 15 minutes.</li>
                <li>For groups larger than 12, please call us.</li>
                <li>We honor seafood allergies—let us know in advance.</li>
                <li>24-hour notice for cancellations, please.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
