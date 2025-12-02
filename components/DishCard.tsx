import React from 'react';
import { Dish } from '../types';
import { Star, Flame, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {dish.isChefSpecial && (
            <span className="bg-brand-gold text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Star size={12} fill="currentColor" /> Special
            </span>
          )}
          {dish.isPopular && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
              Popular
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold text-brand-dark">{dish.name}</h3>
          <span className="text-brand-gold font-bold text-lg">${dish.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{dish.description}</p>
        
        <div className="flex gap-3 pt-4 border-t border-gray-100 mt-auto">
          {dish.isVeg && (
            <span className="text-green-600 text-xs flex items-center gap-1" title="Vegetarian">
              <Leaf size={14} /> Veg
            </span>
          )}
          {dish.isSpicy && (
            <span className="text-red-500 text-xs flex items-center gap-1" title="Spicy">
              <Flame size={14} /> Spicy
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;