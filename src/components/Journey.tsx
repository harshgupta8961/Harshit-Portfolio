import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Sparkles, CheckCircle2, Compass, ArrowRight } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
          <Milestone className="w-3.5 h-3.5" />
          <span>Evolution & Path</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
          Experience & Journey.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
          An authentic chronology of deliberate practice, self-driven learning, and creative exploration without inflated titles.
        </p>
      </div>

      {/* Minimalist Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/[0.08] ml-2 sm:ml-4 space-y-12">
        {journeyMilestones.map((milestone, idx) => (
          <div key={milestone.title} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-zinc-600 group-hover:border-emerald-400 transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-emerald-400 transition-colors" />
            </div>

            {/* Timeline Content Card */}
            <div className="rounded-2xl bg-[#101014]/60 border border-white/[0.06] p-6 sm:p-8 hover:border-white/15 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {milestone.year}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {milestone.period}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
                  {milestone.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {milestone.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">
                {milestone.description}
              </p>

              {/* Milestones Bullet Points */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.05]">
                {milestone.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Step / Horizon Card */}
      <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-transparent border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400">Next Horizon</span>
          <h4 className="text-base font-bold text-white mt-1">
            Looking forward to impactful software engineering roles & creative collaborations.
          </h4>
          <p className="text-xs text-zinc-400 mt-1">
            Ready to bring grit, fast learning ability, and disciplined craft to forward-thinking engineering teams.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors shrink-0"
        >
          <span>Connect with me</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
