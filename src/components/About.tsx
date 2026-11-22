import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Coffee, 
  Globe, 
  Film, 
  Camera, 
  Cpu, 
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "Full Stack Development": <Layers className="w-5 h-5 text-blue-400" />,
    "Java Programming": <Coffee className="w-5 h-5 text-amber-400" />,
    "Web Development": <Globe className="w-5 h-5 text-cyan-400" />,
    "Creative Video Editing": <Film className="w-5 h-5 text-purple-400" />,
    "Photography & Cinematography": <Camera className="w-5 h-5 text-rose-400" />,
    "Problem Solving": <Cpu className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Harsh</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Crafting at the crossroads of logic and visual expression.
        </h2>
      </div>

      {/* Main Philosophy Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 rounded-2xl bg-[#111114]/70 border border-white/[0.08] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <p className="text-xl sm:text-2xl text-zinc-100 font-normal leading-relaxed">
              "{personalInfo.bio.about.paragraph1}"
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              {personalInfo.bio.about.paragraph2}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Full-Stack Mindset</span>
            </div>
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-purple-400" />
              <span>Cinematic Visuals</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Modular Architecture</span>
            </div>
          </div>
        </div>

        {/* Editorial Quote / Quick Stat Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex-1 rounded-2xl bg-[#111114]/50 border border-white/[0.06] p-8 flex flex-col justify-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Philosophy</span>
            <blockquote className="text-lg text-zinc-200 font-medium leading-snug">
              "Code provides structure, reliability, and scale. Visuals impart soul, emotion, and story. Mastering both is my lifelong pursuit."
            </blockquote>
            <span className="text-xs text-zinc-400 mt-4">— Harsh</span>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-950/20 to-purple-950/20 border border-white/[0.08] p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400 font-mono">Location & Working Hours</p>
              <p className="text-sm font-medium text-white mt-0.5">India (IST) • Open to Global Collaborations</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Core Focus Pillars */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
          Core Pillars & Disciplines
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalInfo.bio.about.focusAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-xl bg-[#0f0f12]/60 border border-white/[0.06] hover:border-white/15 hover:bg-[#15151a]/80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {iconMap[area.title] || <Sparkles className="w-5 h-5 text-blue-400" />}
              </div>
              <h4 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {area.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
