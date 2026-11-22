import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowUpRight, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailAddress = "harsh.dev.creative@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#a855f7', '#ffffff']
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct Connection</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          Have an idea? Let's build something together.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 max-w-xl">
          Whether you want to discuss full-stack engineering, a software opportunity, a creative video project, or just say hello — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info & Socials Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-2xl bg-[#111114]/80 border border-white/[0.08] mb-8">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Primary Contact
              </span>
              <p className="text-base sm:text-lg font-mono text-white mb-4 break-all">
                {emailAddress}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-200 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="p-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 transition-colors"
                  title="Open mail client"
                  aria-label="Send email directly"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels List */}
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-4">
                Online Presence & Portals
              </span>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                        {getSocialIcon(social.icon)}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors block">
                          {social.name}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          {social.username}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Timezone / Availability Note */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-400 flex items-center justify-between">
            <span className="font-mono">Timezone: UTC+05:30 (IST)</span>
            <span className="text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Typically replies within 24h
            </span>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#111114]/80 border border-white/[0.08] backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-light">
              Leave your details below and I'll get back to you shortly.
            </p>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-3"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold block">Thank you! Message received.</span>
                    <span className="text-emerald-400/80">I will review your message and reply as soon as possible.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name or Studio"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
