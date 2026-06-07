import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Bookmark, CheckCircle2, Clock } from 'lucide-react';

const SchemeCard = ({ scheme }) => {
  return (
    <motion.div
      whileHover={{ y: -5, shadow: '0 25px 50px -12px rgba(46, 125, 50, 0.15)' }}
      className="bg-white p-6 rounded-[2.5rem] border-2 border-gray-50 shadow-sm flex flex-col sm:flex-row gap-6 items-start transition-all relative group overflow-hidden"
    >
      {/* Decorative Background Icon */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <FileText size={120} className="text-primary" />
      </div>

      <div className="w-16 h-16 bg-primary/5 rounded-[1.5rem] flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
        <FileText size={28} />
      </div>
      
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="font-black text-gray-900 text-xl tracking-tight leading-tight group-hover:text-primary transition-colors">{scheme.title}</h4>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-lg">
                {scheme.category}
              </span>
            </div>
          </div>
          <button className="p-2 text-gray-300 hover:text-primary transition-colors">
            <Bookmark size={20} />
          </button>
        </div>

        <p className="text-sm font-medium text-gray-500 line-clamp-2 leading-relaxed">{scheme.description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2">
            {scheme.active ? (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                <CheckCircle2 size={12} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Active</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-400 rounded-full border border-gray-100">
                <Clock size={12} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Closed</span>
              </div>
            )}
          </div>
          
          <button className="primary-button !py-2 !px-5 !text-xs !rounded-xl flex items-center gap-2 group/btn">
            Apply Now
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
