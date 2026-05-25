import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import { categories } from '../Data';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-16 mb-12">
        <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">Browse By</span>
        <h1 className="text-6xl font-black text-orange-900 mt-2 tracking-tighter">CATEGORIES</h1>
      </div>

      {/* Modern Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/shop?category=${cat.name}`)}
            className={`group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer ${cat.size}`}
          >
            {/* Background Image */}
            <img 
              src={cat.image} 
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Colorful Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-60`} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-1">{cat.count}</p>
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">{cat.name}</h2>
                </div>
                
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <HiOutlineArrowRight size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-orange-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-red-400">Can't decide?</h2>
          <p className="text-orange-400 mb-8 relative z-10 max-w-lg mx-auto">Explore our full catalog and find the pieces that match your unique style signature.</p>
          <button 
            onClick={() => navigate('/shop')}
            className="relative z-10 bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-red-500 hover:text-white transition-all shadow-xl"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;