import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { User, Mail, Phone, Lock, UserPlus, ArrowRight, ShieldCheck } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    try {
      await register(formData.name, formData.email, formData.password, formData.phone);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FFF4] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-primary/10 border-2 border-white relative z-10"
      >
        <div className="text-center space-y-4 mb-10">
          <Logo size="md" className="mx-auto" />
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter">{t('auth.register_title')}</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{t('auth.register_subtitle')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 text-red-500 text-[10px] font-black p-4 rounded-2xl border border-red-100 text-center uppercase tracking-widest"
            >
              {error}
            </motion.div>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                name="name"
                type="text"
                required
                className="w-full pl-14 pr-6 py-4 rounded-[1.2rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white outline-none transition-all bg-gray-50/50 text-sm font-bold"
                placeholder={t('auth.name')}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                name="email"
                type="email"
                required
                className="w-full pl-14 pr-6 py-4 rounded-[1.2rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white outline-none transition-all bg-gray-50/50 text-sm font-bold"
                placeholder={t('auth.email')}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative group md:col-span-2">
              <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                name="phone"
                type="tel"
                required
                className="w-full pl-14 pr-6 py-4 rounded-[1.2rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white outline-none transition-all bg-gray-50/50 text-sm font-bold"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                name="password"
                type="password"
                required
                className="w-full pl-14 pr-6 py-4 rounded-[1.2rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white outline-none transition-all bg-gray-50/50 text-sm font-bold"
                placeholder={t('auth.password')}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
              <input
                name="confirmPassword"
                type="password"
                required
                className="w-full pl-14 pr-6 py-4 rounded-[1.2rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white outline-none transition-all bg-gray-50/50 text-sm font-bold"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="px-2 pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" required className="mt-1 w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 transition-all" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-relaxed">
                I agree to the <span className="text-primary hover:underline">Terms of Service</span> and <span className="text-primary hover:underline">Privacy Policy</span> regarding agricultural data sharing.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full primary-button !py-5 !rounded-[1.5rem] !text-lg flex items-center justify-center gap-3 group mt-4"
          >
            {t('auth.register_btn')}
            <UserPlus size={24} className="group-hover:rotate-12 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center gap-6">
          <p className="text-gray-400 font-bold text-sm">
            {t('auth.has_account')}{' '}
            <Link to="/login" className="text-primary font-black hover:underline">{t('auth.login_btn')}</Link>
          </p>
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified Government Node</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
