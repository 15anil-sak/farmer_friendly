import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  User, Phone, Mail, Globe, LogOut, ChevronRight, 
  Settings, Shield, Bell, MapPin, Award, CreditCard, 
  BarChart3, Camera, Edit3
} from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  const menuItems = [
    { icon: <Settings size={20} />, label: 'Account Settings', desc: 'Manage your profile and preferences', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: <Shield size={20} />, label: 'Security & Privacy', desc: 'Password and account protection', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: <CreditCard size={20} />, label: 'Payments', desc: 'Manage your subscriptions and billing', color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: <Bell size={20} />, label: 'Notification Settings', desc: 'Control your alerts and updates', color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 w-full">
      {/* Profile Header */}
      <header className="relative bg-white rounded-[3.5rem] p-10 shadow-2xl shadow-primary/5 border-2 border-gray-50 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-[3rem] flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative">
              <User size={80} className="text-primary opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center bg-primary text-white text-5xl font-black">
                {user?.name?.charAt(0) || 'A'}
              </div>
            </div>
            <button className="absolute bottom-1 right-1 bg-white text-primary p-3 rounded-2xl shadow-xl border-2 border-gray-50 hover:scale-110 transition-transform">
              <Camera size={18} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">{user?.name}</h2>
                <div className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                  <Award size={12} />
                  <span>Gold Member</span>
                </div>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                {user?.isAdmin ? 'Strategic Administrator' : 'Verified Farmer Partner'}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                <MapPin size={16} className="text-primary" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                <BarChart3 size={16} className="text-primary" />
                <span>12 Active Projects</span>
              </div>
            </div>

            <button className="secondary-button !px-6 !py-3 !text-xs flex items-center gap-2 mx-auto md:mx-0">
              <Edit3 size={16} />
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[3rem] border-2 border-gray-50 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-primary/5 rounded-2xl text-primary">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('auth.email')}</p>
            <p className="text-lg font-black text-gray-800">{user?.email}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border-2 border-gray-50 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-primary/5 rounded-2xl text-primary">
            <Phone size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number</p>
            <p className="text-lg font-black text-gray-800">{user?.phone || '+91 98765 43210'}</p>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <section className="bg-white rounded-[3.5rem] shadow-sm border-2 border-gray-50 overflow-hidden">
        <div className="p-8 border-b border-gray-50">
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Platform Preferences</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className="w-full p-8 flex items-center justify-between hover:bg-primary-soft transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-[1.5rem] ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="font-black text-gray-800 tracking-tight group-hover:text-primary transition-colors">{item.label}</p>
                  <p className="text-xs font-medium text-gray-400">{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </section>

      {/* Danger Zone */}
      <div className="pt-6">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-4 bg-red-50 text-red-500 p-8 rounded-[3rem] font-black text-lg hover:bg-red-100 transition-all border-2 border-red-100 shadow-xl shadow-red-500/5 group"
        >
          <LogOut size={24} className="group-hover:-translate-x-1 transition-transform" />
          {t('profile.logout')}
        </button>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.3em]">
          Former Friend Node: AP-HYD-772
        </p>
        <p className="text-[10px] text-primary/40 font-black uppercase tracking-widest">
          Build v2.4.0 • Enterprise Edition
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
