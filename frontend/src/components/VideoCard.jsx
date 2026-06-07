import React from 'react';
import { Play, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoCard = ({ video }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col cursor-pointer"
    >
      <div className="relative h-40 bg-gray-200">
        <img 
          src={video.thumbnail || 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=400'} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white/90 p-3 rounded-full text-primary shadow-xl">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-bold">
          {video.duration || '5:30'}
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-bold text-gray-800 text-sm line-clamp-2 mb-2">{video.title || 'How to use Organic Pesticides correctly'}</h4>
        <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
          <div className="flex items-center gap-1">
            <Eye size={12} />
            <span>{video.views || '1.2k'} views</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{video.date || '2 days ago'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
