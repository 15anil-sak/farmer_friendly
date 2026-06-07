import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { Mail, Lock, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4FFF4] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-primary/10 border-2 border-white relative z-10"
      >
        <div className="text-center space-y-4 mb-12">
          <Logo size="lg" className="mx-auto" />
          <div className="space-y-1">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">{t('auth.login_title')}</h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{t('auth.login_subtitle')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-500 text-xs font-black p-4 rounded-2xl border border-red-100 text-center uppercase tracking-widest"
            >
              {error}
            </motion.div>
          )}
          
          <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UserCheck className="text-primary" size={20} />
              <div>
                <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Demo Account</p>
                <p className="text-sm font-black text-primary">admin@example.com</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Password</p>
              <p className="text-sm font-black text-primary">password123</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input
                type="email"
                required
                className="w-full pl-16 pr-8 py-5 rounded-[1.5rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white focus:shadow-xl focus:shadow-primary/5 outline-none transition-all bg-gray-50/50 text-gray-800 font-bold"
                placeholder={t('auth.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input
                type="password"
                required
                className="w-full pl-16 pr-8 py-5 rounded-[1.5rem] border-2 border-gray-50 focus:border-primary/20 focus:bg-white focus:shadow-xl focus:shadow-primary/5 outline-none transition-all bg-gray-50/50 text-gray-800 font-bold"
                placeholder={t('auth.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center px-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary/20 transition-all" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-tighter group-hover:text-primary transition-colors">Remember Me</span>
            </label>
            <button type="button" className="text-xs font-black text-primary uppercase tracking-tighter hover:underline">Forgot Password?</button>
          </div>

          <button
            type="submit"
            className="w-full primary-button !py-5 !rounded-[1.5rem] !text-xl flex items-center justify-center gap-3 group"
          >
            {t('auth.login_btn')}
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center gap-6">
          <p className="text-gray-400 font-bold text-sm">
            {t('auth.no_account')}{' '}
            <Link to="/register" className="text-primary font-black hover:underline">{t('auth.register_btn')}</Link>
          </p>
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Government Encrypted Connection</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
