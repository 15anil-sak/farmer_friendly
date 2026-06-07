import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Info, Star, ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group bg-white rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-primary/10 border-2 border-gray-50 overflow-hidden flex flex-col transition-all"
    >
      <div className="relative h-64 bg-gray-50 overflow-hidden">
        <img 
          src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glass Overlays */}
        <div className="absolute top-5 left-5">
          <span className="bg-white/70 backdrop-blur-md text-primary text-[10px] px-4 py-2 rounded-2xl font-black uppercase tracking-widest shadow-lg border border-white/50">
            {product.category}
          </span>
        </div>
        
        <div className="absolute top-5 right-5">
          <div className="bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-white/50 flex items-center gap-1.5">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-[10px] font-black text-gray-800">4.8</span>
          </div>
        </div>

        {/* Hover Quick Action */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-primary p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Info size={24} />
          </button>
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col space-y-4">
        <div className="space-y-1">
          <h4 className="font-black text-gray-900 text-2xl tracking-tighter group-hover:text-primary transition-colors line-clamp-1">{product.name}</h4>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">In Stock • Fast Delivery</p>
        </div>
        
        <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">
          {product.description || 'Premium quality agriculture product designed for high-yield harvests and sustainable farming.'}
        </p>
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] font-black uppercase tracking-tighter">Market Price</span>
            <span className="text-primary font-black text-3xl tracking-tighter">₹{product.price}</span>
          </div>
          
          <button className="primary-button !p-4 !rounded-[1.5rem] flex items-center justify-center group/btn">
            <ShoppingCart size={22} className="group-hover/btn:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
