import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Sparkles, Send, Loader2 } from 'lucide-react';
import api from '../utils/api';

const AIModal = ({ isOpen, onClose, title, content, icon: Icon }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const displayTitle = title || "Farming Assistant";
  const displayIcon = Icon || Sparkles;
  const displayContent = content || response;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const { data } = await api.post('/api/ai/chat', { message: question });
      setResponse(data.reply);
    } catch (error) {
      setResponse("I'm sorry, I couldn't process that request right now. Please check your connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setQuestion('');
    setResponse(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="bg-primary p-6 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  {React.createElement(displayIcon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold">{displayTitle}</h3>
              </div>
              <button onClick={handleClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 bg-gray-50/50">
              {displayContent ? (
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 mb-4">
                  <div className="flex items-center gap-2 mb-3 text-primary font-bold text-sm uppercase tracking-widest">
                    <Cpu size={16} />
                    {content ? 'Analysis Result' : 'AI Response'}
                  </div>
                  <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">
                    {typeof displayContent === 'object' ? (
                      <div className="space-y-2">
                        {Object.entries(displayContent).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-bold capitalize">{key}:</span> {value}
                          </div>
                        ))}
                      </div>
                    ) : displayContent}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 opacity-50">
                  <Cpu size={48} className="mx-auto mb-4 text-primary" />
                  <p className="font-bold">Ask me about crops, weather, or farming tips!</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g. When should I plant wheat?"
                  className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                  disabled={loading}
                />
                <button 
                  type="submit" 
                  disabled={loading || !question.trim()}
                  className="absolute right-2 p-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIModal;
