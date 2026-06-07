import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavigation from './BottomNavigation';
import { motion } from 'framer-motion';
import { Bot, MessageSquare } from 'lucide-react';
import AIModal from './AIModal';

const Layout = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4FFF4]">
      <Navbar />
      
      <main className="flex-1 w-full px-4 py-8 md:py-12">
        <Outlet />
      </main>

      {/* Floating AI Assistant Button */}
      <motion.button
        onClick={() => setIsAIModalOpen(true)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-primary text-white p-4 rounded-[2rem] shadow-2xl shadow-primary/40 z-40 border-4 border-white/50 backdrop-blur-sm group cursor-pointer"
      >
        <div className="relative">
          <Bot size={28} className="group-hover:opacity-0 transition-opacity" />
          <MessageSquare size={28} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="absolute -top-12 right-0 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
          <span className="text-xs font-black text-primary">Need Farming Help?</span>
        </div>
      </motion.button>

      <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />

      <BottomNavigation />
      
      {/* Footer (Desktop Only) */}
      <footer className="hidden md:block bg-white/40 backdrop-blur-md border-t border-white/30 py-12 mt-20">
        <div className="px-8 grid grid-cols-4 gap-8 w-full">
          <div className="col-span-2 space-y-4">
            <h3 className="font-black text-2xl text-primary tracking-tighter">FORMER FRIEND</h3>
            <p className="text-gray-500 max-w-sm font-medium">Empowering rural farmers with next-generation AI technology and government support services.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-xs uppercase tracking-widest text-gray-400">Platform</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-600">
              <li className="hover:text-primary transition-colors cursor-pointer">Schemes</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Market Prices</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Weather</li>
              <li className="hover:text-primary transition-colors cursor-pointer">AI Assistant</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-xs uppercase tracking-widest text-gray-400">Support</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-600">
              <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
