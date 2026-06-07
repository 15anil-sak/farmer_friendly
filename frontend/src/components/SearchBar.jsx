import React, { useState } from 'react';
import { Search, Mic, Camera, Loader2 } from 'lucide-react';
import api from '../utils/api';
import AIModal from './AIModal';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [modalType, setModalType] = useState(null); // 'voice' | 'image'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const handleVoiceSearch = async () => {
    setIsAiLoading(true);
    try {
      const { data } = await api.post('/api/ai/voice-process', { audioData: 'mock_audio' });
      setQuery(data.transcription);
      setAiResult({ Transcription: data.transcription, Intent: data.intent });
      setModalType('voice');
      if (onSearch) onSearch(data.transcription);
    } catch (err) {
      console.error('Voice search failed');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleImageSearch = async () => {
    setIsAiLoading(true);
    try {
      const { data } = await api.post('/api/ai/identify-image', { imageUrl: 'mock_image' });
      setAiResult(data);
      setModalType('image');
    } catch (err) {
      console.error('Image search failed');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit} 
        className="relative flex items-center bg-white p-2 rounded-[2rem] shadow-xl shadow-gray-200/40 border-2 border-gray-50 focus-within:border-primary/20 focus-within:ring-4 focus-within:ring-primary/5 transition-all group"
      >
        <div className="pl-4 text-gray-400 group-focus-within:text-primary transition-colors">
          {isAiLoading ? <Loader2 className="animate-spin" size={20} /> : <Search size={22} />}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about farming..."
          className="w-full py-4 px-4 outline-none text-gray-800 bg-transparent font-bold tracking-tight placeholder:text-gray-400 placeholder:font-medium"
        />
        <div className="flex gap-2">
          <button 
            type="button" 
            onClick={handleVoiceSearch}
            className="p-4 bg-gray-50 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-[1.5rem] transition-all"
            title="Voice Search"
          >
            <Mic size={20} />
          </button>
          <button 
            type="button" 
            onClick={handleImageSearch}
            className="p-4 bg-primary text-white hover:bg-primary-dark rounded-[1.5rem] transition-all shadow-lg shadow-primary/20"
            title="Image Search"
          >
            <Camera size={20} />
          </button>
        </div>
      </form>

      <AIModal 
        isOpen={!!modalType} 
        onClose={() => setModalType(null)}
        title={modalType === 'voice' ? 'Voice Transcription' : 'Image Identification'}
        content={aiResult}
        icon={modalType === 'voice' ? Mic : Camera}
      />
    </div>
  );
};

export default SearchBar;
