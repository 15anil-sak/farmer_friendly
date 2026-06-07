import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import api from '../utils/api';
import { 
  Sprout, Droplets, Hammer, FileText, Info, 
  ArrowRight, Zap, Cloud, TrendingUp, Newspaper, 
  ChevronRight, Mic, Camera, Search, Bot, Loader2
} from 'lucide-react';
import SearchBar from '../components/SearchBar';
import SchemeCard from '../components/SchemeCard';
import AIModal from '../components/AIModal';

const Dashboard = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tips = [
    "Early morning or late evening is the best time for pesticide application to avoid rapid evaporation and honey bee activity.",
    "Rotating crops annually helps maintain soil nutrients and prevents the buildup of pests and diseases.",
    "Use mulching to conserve soil moisture and suppress weed growth in your vegetable garden.",
    "Test your soil every 2-3 years to determine the exact nutrient requirements for your specific crops."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { id: 1, name: t('categories.pesticides'), key: 'Pesticides', desc: 'Plant Protection', icon: <Droplets className="text-blue-500" />, color: 'bg-blue-50', border: 'border-blue-100', path: '/search' },
    { id: 2, name: t('categories.fertilizers'), key: 'Fertilizers', desc: 'Soil Nutrition', icon: <Sprout className="text-emerald-500" />, color: 'bg-emerald-50', border: 'border-emerald-100', path: '/search' },
    { id: 3, name: t('categories.tools'), key: 'Tools', desc: 'Agri Equipment', icon: <Hammer className="text-orange-500" />, color: 'bg-orange-50', border: 'border-orange-100', path: '/search' },
    { id: 4, name: t('categories.schemes'), key: 'Schemes', desc: 'Govt. Support', icon: <FileText className="text-purple-500" />, color: 'bg-purple-50', border: 'border-purple-100', path: '/schemes' },
  ];

  const handleCategoryClick = (cat) => {
    if (cat.key === 'Schemes') {
      navigate('/schemes');
    } else {
      navigate('/search', { state: { category: cat.key } });
    }
  };

  // Fetch Weather from Open-Meteo (Free, No API Key)
  const { data: weather, isLoading: weatherLoading } = useQuery({
    queryKey: ['weather'],
    queryFn: async () => {
      const { data } = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto');
      return data.current;
    }
  });

  // Fetch Live Market Prices from our Backend API Simulator
  const { data: marketPrices, isLoading: marketLoading } = useQuery({
    queryKey: ['marketPrices'],
    queryFn: async () => {
      const { data } = await api.get('/api/market/prices');
      return data;
    },
    refetchInterval: 60000 // Refresh every minute
  });

  return (
    <div className="space-y-8 md:space-y-12 pb-24 md:pb-20 w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white shadow-2xl shadow-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/30">
              <Zap size={16} fill="white" />
              <span className="text-xs font-black uppercase tracking-widest">Dashboard Overview</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight md:leading-none">
              {t('dashboard.hero_title')}
            </h1>
            <p className="text-white/80 font-medium text-base md:text-lg max-w-md">
              {t('dashboard.hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button 
                onClick={() => setIsAIModalOpen(true)}
                className="flex-1 md:flex-none px-6 md:px-8 py-3 md:py-4 bg-white text-primary rounded-xl md:rounded-2xl font-black shadow-xl hover:bg-primary-soft transition-all transform active:scale-95 flex items-center justify-center gap-2 group"
              >
                {t('dashboard.ai_assistant')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.open('https://enam.gov.in/web/dashboard/trade-data', '_blank')}
                className="flex-1 md:flex-none px-6 md:px-8 py-3 md:py-4 bg-primary-dark/40 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl font-black hover:bg-white/10 transition-all transform active:scale-95 text-center"
              >
                {t('dashboard.market_insights')}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Weather Widget */}
            <div className="col-span-2 glass-card rounded-[2.5rem] p-6 flex justify-between items-center text-gray-800">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 rounded-3xl text-blue-600">
                  {weatherLoading ? <Loader2 className="animate-spin" size={32} /> : <Cloud size={32} />}
                </div>
                <div>
                  <h3 className="text-2xl font-black">
                    {weatherLoading ? '--' : `${Math.round(weather?.temperature_2m)}°C`}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('dashboard.weather')}</p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('dashboard.humidity')}</p>
                <p className="text-xl font-black text-primary">
                  {weatherLoading ? '--' : `${weather?.relative_humidity_2m}%`}
                </p>
              </div>
            </div>

            {/* Market Prices Widget */}
            <div className="glass-card rounded-[2.5rem] p-6 text-gray-800 space-y-4">
              <div className="flex justify-between items-center">
                <TrendingUp size={20} className="text-primary" />
                <span className="text-[10px] font-black text-gray-400 uppercase">{t('dashboard.live_prices')}</span>
              </div>
              <div className="space-y-3">
                {marketLoading ? (
                  <div className="flex justify-center py-4"><Loader2 className="animate-spin text-primary" size={24} /></div>
                ) : (
                  marketPrices?.map((p) => (
                    <div key={p.crop} className="flex justify-between items-center">
                      <span className="text-sm font-bold">{p.crop}</span>
                      <span className={`text-[10px] font-black ${p.up ? 'text-emerald-500' : 'text-red-500'}`}>{p.change}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* News Widget */}
            <div className="glass-card rounded-[2.5rem] p-6 text-gray-800 space-y-4">
              <div className="flex justify-between items-center">
                <Newspaper size={20} className="text-primary" />
                <span className="text-[10px] font-black text-gray-400 uppercase">{t('dashboard.news')}</span>
              </div>
              <p className="text-xs font-bold leading-relaxed line-clamp-3 italic">
                "New subsidy announced for organic farming in rural regions..."
              </p>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest">Read More</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <div className="space-y-1">
            <h3 className="text-3xl font-black text-gray-900 tracking-tighter">{t('dashboard.explore_categories')}</h3>
            <p className="text-sm font-medium text-gray-400">Everything you need for your farm</p>
          </div>
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:text-primary transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCategoryClick(cat)}
              className={`group relative overflow-hidden bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-gray-50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${cat.color} rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h4 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">{cat.name}</h4>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{cat.desc}</p>
              <div className="mt-6 md:mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-primary uppercase">Browse items</span>
                <ChevronRight size={16} className="text-primary" />
              </div>
              <div className={`absolute -right-4 -bottom-4 w-20 h-20 md:w-24 md:h-24 ${cat.color} rounded-full opacity-0 group-hover:opacity-20 transition-all`}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expert Tip Section */}
      <section className="bg-primary/5 border-2 border-primary/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
          <Info size={120} className="text-primary" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="p-4 md:p-6 bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl shadow-primary/10 floating">
            <Bot size={32} className="md:size-[48px] text-primary" />
          </div>
          <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-primary text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full">
              {t('dashboard.expert_advice')}
            </div>
            <div className="h-20 md:h-24">
              <AnimatePresence mode='wait'>
                <motion.p 
                  key={currentTip}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-lg md:text-2xl font-black text-gray-900 leading-tight tracking-tight italic"
                >
                  "{tips[currentTip]}"
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex justify-center md:justify-start gap-2">
              {tips.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentTip ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-end px-2">
          <div className="space-y-1">
            <h3 className="text-3xl font-black text-gray-900 tracking-tighter">{t('dashboard.support_schemes')}</h3>
            <p className="text-sm font-medium text-gray-400">Government initiatives for your welfare</p>
          </div>
          <button className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 group">
            View All Schemes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { id: 1, title: 'PM-Kisan Samman Nidhi', description: 'Income support of ₹6,000 per year for all landholding farmers.', active: true, category: 'Income Support' },
            { id: 2, title: 'Pradhan Mantri Fasal Bima', description: 'Crop insurance for yield losses due to non-preventable risks.', active: true, category: 'Insurance' }
          ].map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </section>

      <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
