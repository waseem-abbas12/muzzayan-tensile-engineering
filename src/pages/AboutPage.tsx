import React from 'react';
import { ceo, ceoTimeline, aboutPrinciples, company } from '../data/siteData';
import { Award, ShieldCheck, Quote, Calendar, ArrowRight, Building2, User } from 'lucide-react';

interface AboutPageProps {
  openSurveyModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
          Engineering Heritage & Leadership
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          About Muzzayan Tensile Engineering (MTE)
        </h1>
        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          Founded on Gulf-grade structural steel and architectural membrane standards, MTE delivers turnkey cantilever car parking canopies, commercial tensile roofs, and heavy industrial sheds across Pakistan.
        </p>
      </div>

      {/* CEO / Leadership Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <img
                src="/images/detail.jpg"
                alt={ceo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-0.5 rounded bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-wider">
                  Leadership
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">{ceo.name}</h3>
                <div className="text-xs text-gold-400">{ceo.title}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                Message From The Founder
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                Precision Engineering, No Compromise
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {ceo.intro}
            </p>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-slate-800 relative">
              <Quote className="w-8 h-8 text-gold-500/20 mb-2" />
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "{ceo.message}"
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">International Experience</span>
                <strong className="text-white text-sm">6+ Years Saudi Arabia</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Key Infrastructure</span>
                <strong className="text-white text-sm">Haif, SAJCO, FWO, Descon</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Warranty Commitment</span>
                <strong className="text-gold-400 text-sm">15-Year Structural</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
            Chronology of Excellence
          </span>
          <h3 className="text-2xl font-heading font-bold text-white mt-1">
            Engineering Milestones
          </h3>
        </div>

        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 divide-y divide-slate-800/80">
          {ceoTimeline.map((item, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 items-start">
              <span className="font-mono font-bold text-lg text-gold-400 shrink-0 w-24">
                {item.year}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Core Principles */}
      <div className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
            Our Guiding Pillars
          </span>
          <h3 className="text-2xl font-heading font-bold text-white mt-1">
            Core Engineering Principles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutPrinciples.map((p) => (
            <div key={p.num} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-2">
              <span className="font-mono text-2xl font-black gold-gradient-text block">
                {p.num}
              </span>
              <h4 className="text-base font-bold text-white">{p.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
