import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, Film, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'creator'>('developer');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Background Interactive Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full border border-white/[0.04] flex items-center justify-center animate-[spin_60s_linear_infinite]">
          <div className="absolute w-2 h-2 rounded-full bg-blue-500/40 -top-1" />
          <div className="w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-white/[0.04] flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
            <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-500/40 -bottom-1" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-zinc-300">
            {personalInfo.status}
          </span>
          <span className="text-[10px] text-zinc-500">•</span>
          <span className="text-xs text-zinc-400 font-mono">2025</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          <span className="inline-block bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">
            {personalInfo.bio.hero.headline}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-200 max-w-3xl mb-6 leading-relaxed"
        >
          {personalInfo.bio.hero.subheading}
        </motion.p>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-zinc-400 max-w-xl mb-10 leading-relaxed font-normal"
        >
          {personalInfo.bio.hero.intro}
        </motion.p>

        {/* Dual Role Toggle / Preview Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="p-1 rounded-full bg-[#121215] border border-white/10 mb-10 flex items-center gap-1 shadow-inner"
        >
          <button
            onClick={() => setActiveTab('developer')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'developer'
                ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Full Stack Developer</span>
          </button>
          <button
            onClick={() => setActiveTab('creator')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === 'creator'
                ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Video Editor & Visuals</span>
          </button>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-95 group"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#16161a] hover:bg-[#202026] text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 group"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Interactive Subtle Micro-Console Snippet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 w-full max-w-md hidden sm:block"
        >
          <div className="rounded-xl bg-[#0f0f12]/80 border border-white/[0.07] p-3 text-left font-mono text-xs text-zinc-400 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] text-zinc-600 flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                harsh@creative-terminal ~
              </span>
            </div>
            {activeTab === 'developer' ? (
              <div className="space-y-1 text-[11px]">
                <p className="text-zinc-500"><span className="text-blue-400">$</span> current_focus.status</p>
                <p className="text-zinc-300 font-sans">
                  Building responsive full-stack web architectures & practicing DSA in Java.
                </p>
              </div>
            ) : (
              <div className="space-y-1 text-[11px]">
                <p className="text-zinc-500"><span className="text-purple-400">$</span> timeline.render_mode</p>
                <p className="text-zinc-300 font-sans">
                  Crafting cinematic wedding films & rhythmic video narratives with precision grading.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-zinc-700 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-zinc-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
