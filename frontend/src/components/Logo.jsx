import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  const selectedSize = sizes[size] || sizes.md;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-block ${selectedSize} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-[30%] rotate-6 shadow-lg opacity-20"></div>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[30%] -rotate-3 border border-white/50"></div>
      <img 
        src="/assets/logo.jpeg" 
        alt="Former Friend Logo" 
        className={`absolute inset-0 w-full h-full object-cover rounded-[30%] border-2 border-white shadow-xl`}
      />
    </motion.div>
  );
};

export default Logo;
