import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import DishCard from '../components/DishCard';
import { Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const vegMatch = !showVegOnly || item.isVeg;
    return categoryMatch && vegMatch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-brand-dark mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of dishes, crafted with passion using the finest ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-dark text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowVegOnly(!showVegOnly)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold uppercase transition-all border ${
              showVegOnly
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-green-500'
            }`}
          >
            <Filter size={16} />
            Vegetarian Only
          </button>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((dish) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No items found matching your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;