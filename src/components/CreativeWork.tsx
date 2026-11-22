import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film, 
  Camera, 
  Play, 
  Sparkles, 
  Clock, 
  User, 
  Maximize2, 
  X,
  Layers,
  Heart
} from 'lucide-react';
import { creativeWorksData } from '../data/portfolioData';
import { CreativeItem } from '../types';

export const CreativeWork: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeMedia, setActiveMedia] = useState<CreativeItem | null>(null);

  const categories = [
    'All',
    'Video Editing',
    'Wedding Films',
    'Cinematic Videos',
    'Photography',
    'Visual Storytelling'
  ];

  const filteredItems = filter === 'All'
    ? creativeWorksData
    : creativeWorksData.filter(item => item.category === filter);

  return (
    <section id="creative" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Visual Narrative Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Creative Direction & Visuals.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
            Beyond the command line lies visual rhythm. Exploring cinematic editing, wedding documentaries, framing, and mood.
          </p>
        </div>

        {/* Dynamic Counter */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>{filteredItems.length} curated pieces</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              filter === cat
                ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm'
                : 'bg-white/[0.03] text-zinc-400 border border-white/[0.05] hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Masonry-style Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="group relative rounded-2xl bg-[#111114]/60 border border-white/[0.07] overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Media Thumbnail */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-zinc-950"
                onClick={() => setActiveMedia(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Play / Inspect overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    {item.category.includes('Film') || item.category.includes('Video') ? (
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {item.duration && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono text-zinc-300 border border-white/5">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>{item.duration}</span>
                  </div>
                )}
              </div>

              {/* Item Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => setActiveMedia(item)}
                    className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors cursor-pointer mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-mono text-purple-300/80">{item.role}</span>
                  <span className="text-zinc-400">{item.client}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {activeMedia && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl bg-[#121215] border border-white/15 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeMedia.image}
                  alt={activeMedia.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent opacity-80" />
                
                {/* Simulated video playback pill */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-7 h-7 ml-1 fill-white" />
                  </div>
                  <span className="text-xs text-white/80 font-mono mt-3 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                    Preview Mode • {activeMedia.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {activeMedia.category}
                  </span>
                  {activeMedia.duration && (
                    <span className="text-xs font-mono text-zinc-400">
                      Duration: {activeMedia.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {activeMedia.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                  {activeMedia.description}
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
                  <div>
                    <span className="text-zinc-500 block font-mono text-[10px] uppercase">Creative Role</span>
                    <span className="text-zinc-200 font-medium">{activeMedia.role}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block font-mono text-[10px] uppercase">Context / Production</span>
                    <span className="text-zinc-200 font-medium">{activeMedia.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
