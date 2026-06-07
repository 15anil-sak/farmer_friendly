import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, Bell, User, Globe, Cloud, Bot, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'kn', label: 'ಕನ್ನಡ' }
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsMenuOpen(false);
  };

  return (
    <nav className="glass-nav px-4 py-3 md:px-8">
      <div className="flex justify-between items-center w-full">
        {/* Left: Logo & Search */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size="sm" />
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-primary leading-none group-hover:text-primary-dark transition-colors">{t('app_name')}</span>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest leading-none mt-0.5">{t('premium_tag')}</span>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center bg-primary/5 border border-primary/10 rounded-2xl px-4 py-2 w-64 focus-within:w-80 transition-all focus-within:bg-white focus-within:shadow-lg focus-within:border-primary/20 group">
            <Search size={18} className="text-primary/40 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder={t('nav.search') + "..."} 
              className="bg-transparent border-none outline-none pl-3 text-sm font-medium w-full"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Weather Shortcut (Desktop) */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors border border-blue-100/50">
            <Cloud size={16} />
            <span>28°C, {t('dashboard.weather')}</span>
          </button>

          {/* Language Switcher */}
          <div className="relative group hidden sm:block">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors border border-gray-100">
              <Globe size={16} />
              <span>{currentLanguage.label}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {languages.map((l) => (
                <button 
                  key={l.code}
                  onClick={() => i18n.changeLanguage(l.code)}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button className="p-2.5 text-gray-500 hover:bg-primary/5 hover:text-primary rounded-xl transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <Link to="/profile" className="hidden sm:flex items-center gap-2 p-1 pr-3 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all border border-primary/10">
            <div className="w-8 h-8 bg-primary text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-primary/20">
              A
            </div>
            <span className="text-xs font-black text-primary">Anil</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2.5 bg-primary/5 text-primary rounded-xl hover:bg-primary/10 transition-all"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl p-6 sm:hidden flex flex-col gap-4 z-40"
          >
            <div className="flex items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
              <Search size={20} className="text-gray-400" />
              <input type="text" placeholder={t('nav.search') + "..."} className="bg-transparent border-none outline-none pl-3 text-sm font-medium w-full" />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-2xl font-bold text-xs border border-blue-100">
                <Cloud size={18} />
                <span>28°C {t('dashboard.weather')}</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-4 bg-emerald-50 text-emerald-600 rounded-2xl font-bold text-xs border border-emerald-100">
                <Bot size={18} />
                <span>{t('dashboard.ai_assistant')}</span>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">{t('Select Language')}</span>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <button 
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${i18n.language === l.code ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-600 border border-gray-100'}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
