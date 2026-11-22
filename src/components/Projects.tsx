import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  ArrowUpRight,
  Code,
  Eye,
  Check
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Featured Projects.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
            Architected with a focus on code structure, practical utility, and clean user interfaces. Ready to be explored and expanded.
          </p>
        </div>

        <a
          href="https://github.com/harsh-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors group"
        >
          <span>View all repositories on GitHub</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-[#111114]/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Thumbnail Preview Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-90" />
              
              {/* Category Pill Over Image */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Quick Inspect Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors"
                  title="Inspect project details"
                  aria-label="Inspect project details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                </div>

                <p className="text-xs font-mono text-blue-400/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-medium text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#121215] border border-white/15 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
                >
                  ESC [Close]
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {selectedProject.metrics && (
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6">
                  <span className="text-xs font-mono text-blue-300 block mb-1">Architecture Highlight</span>
                  <p className="text-xs text-zinc-200">{selectedProject.metrics}</p>
                </div>
              )}

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Launch Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/15 transition-colors border border-white/10"
                >
                  Inspect Source Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
