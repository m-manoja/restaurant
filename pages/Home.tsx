import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Leaf, Users, Star } from 'lucide-react';
import { MENU_ITEMS, REVIEWS } from '../constants';
import DishCard from '../components/DishCard';

const Home: React.FC = () => {
  const featuredDishes = MENU_ITEMS.filter(d => d.isChefSpecial || d.isPopular).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=100")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-lg md:text-xl uppercase tracking-[0.2em] font-bold mb-4"
          >
            Taste the Tradition
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            Experience Authentic <br /> Flavors
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <NavLink 
              to="/reservations" 
              className="bg-brand-gold text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-yellow-600 transition-colors"
            >
              Book a Table
            </NavLink>
            <NavLink 
              to="/menu" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-brand-dark transition-colors"
            >
              View Menu
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-brand-gold" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600">We source our produce from local organic farms to ensure the highest quality and freshness in every bite.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-brand-gold" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Master Chefs</h3>
              <p className="text-gray-600">Our culinary team brings years of experience from top Michelin-starred restaurants around the world.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-brand-gold" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Family Heritage</h3>
              <p className="text-gray-600">Established in 1995, Savoria remains a family-owned establishment dedicated to authentic hospitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Signatures</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-brand-dark">Chef's Selection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/menu" className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wide border-b-2 border-brand-gold pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
              View Full Menu <ChevronRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src="https://picsum.photos/600/600?random=101" 
                alt="Special Dish" 
                className="rounded-lg shadow-2xl border-4 border-brand-gold/30"
              />
            </div>
            <div className="flex-1 text-white">
              <span className="text-brand-gold font-bold uppercase tracking-widest">Limited Time Offer</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">Summer Tasting Menu</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Experience a 5-course journey through the flavors of the season. Featuring fresh seafood, garden vegetables, and refreshing desserts paired with our sommelier's choice of wines.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif text-brand-gold">$85</span>
                <span className="text-gray-400">per person / w wine pairing +$45</span>
              </div>
              <NavLink to="/reservations" className="bg-white text-brand-dark px-8 py-3 rounded font-bold uppercase hover:bg-brand-gold hover:text-white transition-colors">
                Reserve Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="font-serif text-4xl font-bold mt-2 text-brand-dark">What Our Guests Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="flex justify-center gap-1 mb-4 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                <div className="flex items-center justify-center gap-3">
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="font-bold text-sm text-brand-dark">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;