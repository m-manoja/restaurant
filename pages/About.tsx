import React from 'react';
import { TEAM } from '../constants';
import { Clock, MapPin, Leaf, Award, Heart, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* Page Header with Background Image */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
            style={{ backgroundImage: 'url("https://picsum.photos/1920/800?random=about_header")' }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 text-center text-white px-4">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm block mb-4 animate-fade-in-up">Since 1989</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Our Coastal Story</h1>
             <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20">
          
          {/* Image Composition - Reduced Size */}
          <div className="w-full md:w-5/12 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" 
                    alt="Seafood dining room" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-gold -z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-gold -z-0"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Tamil Coast, On a Plate</h2>
            <h3 className="font-serif text-xl text-brand-gold italic mb-6">"The sea decides the menu; we just honor the catch."</h3>
            
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Raajeshwariy SeaFood Restaurant began as a beachside mess in Nagapattinam, serving the morning catch to dock workers and families. Today in the city, we still cook the same heirloom recipes, slow-toasting spices and finishing every dish with the aroma of coconut and curry leaves.
              </p>
              <p>
                Our kitchen waits for the boats to come in before finalizing the menu. From crab pepper roast to tamarind-rich karuvadu curry, we celebrate the depth of Tamil coastal cuisine with uncompromising freshness.
              </p>
              <p>
                The philosophy is simple: respect the sea, honor the spice, and welcome every guest like family.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=120&q=80" alt="Founder" className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold p-0.5" />
                </div>
                <div>
                    <p className="font-serif font-bold text-lg text-brand-dark">Raajeshwari Murugan</p>
                    <p className="text-xs text-brand-gold uppercase tracking-wide font-bold">Founder &amp; Chef</p>
                </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 bg-brand-cream/50 rounded-2xl p-10">
            <div className="text-center px-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold shadow-sm">
                    <Leaf size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-brand-dark">Sustainable Sourcing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We work directly with local farmers to ensure every ingredient is fresh, organic, and ethically sourced.</p>
            </div>
            <div className="text-center px-4 md:border-l md:border-r border-gray-200">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold shadow-sm">
                    <Heart size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-brand-dark">Made with Love</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Every plate is crafted with passion. We don't take shortcuts; we take the time to make it right.</p>
            </div>
            <div className="text-center px-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold shadow-sm">
                    <Award size={28} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-brand-dark">Culinary Excellence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Award-winning service and a menu curated by Michelin-trained chefs ensure a memorable experience.</p>
            </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">The Talent</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-brand-dark">Meet Our Chefs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-80">
                {/* Image */}
                <div className="h-full">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-xl font-bold mb-0.5">{member.name}</h3>
                    <p className="text-brand-gold font-bold text-xs uppercase mb-3">{member.role}</p>
                    <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                        {member.bio}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="bg-brand-dark text-white rounded-xl p-8 md:p-10 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full text-brand-gold shrink-0">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-1">Opening Hours</h3>
                        <p className="text-gray-400 text-sm">Mon-Thu: 12pm - 10pm</p>
                        <p className="text-gray-400 text-sm">Fri-Sat: 12pm - 11pm</p>
                        <p className="text-gray-400 text-sm">Sun: 12pm - 9:30pm</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full text-brand-gold shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-1">Location</h3>
                        <p className="text-gray-400 text-sm">ECR Service Lane</p>
                        <p className="text-gray-400 text-sm">Neelankarai, Chennai</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full text-brand-gold shrink-0">
                        <ChefHat size={20} />
                    </div>
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-1">Private Dining</h3>
                        <p className="text-gray-400 text-sm">Available for events.</p>
                        <p className="text-brand-gold text-sm font-bold mt-1 cursor-pointer hover:underline">Inquire Now</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
