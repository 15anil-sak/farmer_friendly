import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, BookOpen, User, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BottomNavigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/50 flex justify-around items-center px-4 py-3 pb-6 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] sm:hidden">
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-400'}`}
      >
        <Home size={22} className="stroke-[2.5px]" />
        <span className="text-[10px] font-black uppercase tracking-tighter">{t('nav.home')}</span>
      </NavLink>

      <NavLink 
        to="/search" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-400'}`}
      >
        <Search size={22} className="stroke-[2.5px]" />
        <span className="text-[10px] font-black uppercase tracking-tighter">{t('nav.search')}</span>
      </NavLink>

      <div className="relative -top-6">
        <button className="bg-primary text-white p-4 rounded-[2rem] shadow-xl shadow-primary/40 border-4 border-white transition-transform active:scale-90">
          <Plus size={24} className="stroke-[3px]" />
        </button>
      </div>

      <NavLink 
        to="/schemes" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-400'}`}
      >
        <BookOpen size={22} className="stroke-[2.5px]" />
        <span className="text-[10px] font-black uppercase tracking-tighter">{t('nav.schemes')}</span>
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-primary' : 'text-gray-400'}`}
      >
        <User size={22} className="stroke-[2.5px]" />
        <span className="text-[10px] font-black uppercase tracking-tighter">{t('nav.profile')}</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavigation;
