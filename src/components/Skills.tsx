import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Compass, 
  Cpu, 
  Database, 
  FileCode2, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Skills & Technologies.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
          Real tools and foundational concepts I use to engineer applications. No arbitrary percentages — just deliberate practice, clean architecture, and continuous learning.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => {
          const isExploring = category.title === "Currently Exploring";
          return (
            <div
              key={category.title}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isExploring
                  ? 'bg-gradient-to-b from-[#14141c] to-[#0d0d12] border border-purple-500/20 shadow-lg shadow-purple-950/20'
                  : 'bg-[#101014]/70 border border-white/[0.07] hover:border-white/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                  {isExploring ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      <Flame className="w-3 h-3 text-purple-400" />
                      Active Research
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/5">
                      Production Stack
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 font-light">
                  {category.subtitle}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-zinc-200 group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                          {skill.focus}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {isExploring && (
                <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between text-xs text-purple-300">
                  <span className="font-mono text-[11px]">Growing everyday</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Engineering Principles Banner */}
      <div className="mt-8 rounded-2xl bg-[#0d0d10] border border-white/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Quality Standard & Code Hygiene
          </h4>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl">
            Semantic HTML for screen readers, modular object orientation in Java, responsive component abstraction in CSS/Tailwind, and verified Git commits.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            DRY
          </span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            SOLID
          </span>
          <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            A11y
          </span>
        </div>
      </div>
    </section>
  );
};
