import React from 'react';
import { OFFERS } from '../constants';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Offers: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-sm">
            <Sparkles size={16} /> Current Offers
          </span>
          <h1 className="font-serif text-5xl font-bold text-brand-dark mt-3">Catch the Best Deals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Seasonal tastings, weekday specials, and family feasts—crafted around the freshest catch we bring in daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {offer.tag && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-brand-dark/80 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                    <Tag size={14} /> {offer.tag}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-dark">{offer.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{offer.description}</p>
                  </div>
                  <span className="text-brand-gold font-bold whitespace-nowrap">{offer.price}</span>
                </div>

                {offer.details && (
                  <ul className="space-y-2 text-sm text-gray-600">
                    {offer.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-2">
                  <NavLink
                    to="/reservations"
                    className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-gold transition-colors"
                  >
                    {offer.cta} <ArrowRight size={16} />
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
