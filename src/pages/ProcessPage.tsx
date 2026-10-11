import React from 'react';
import { processSteps, company } from '../data/siteData';
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Compass, Ruler, Hammer } from 'lucide-react';

interface ProcessPageProps {
  openSurveyModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
          Precision From Survey To Handover
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Our 4-Step Engineering Process
        </h1>
        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          Every shade and tensile membrane structure is custom designed, computer patterned, and professionally tensioned. We manage the complete lifecycle so you never deal with fragmented contractors.
        </p>
      </div>

      {/* Stepped Breakdown */}
      <div className="space-y-10">
        {processSteps.map((step, idx) => (
          <div
            key={step.num}
            className="glass-panel rounded-2xl p-6 sm:p-10 border border-slate-800 hover:border-gold-500/30 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3 flex lg:flex-col justify-between items-start">
                <div>
                  <span className="text-4xl sm:text-5xl font-mono font-black gold-gradient-text block">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 block">
                    Phase {step.num}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-gold-400 text-xs font-semibold border border-slate-700 mt-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration: {step.duration}</span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-2xl font-heading font-bold text-white">
                  {step.title}
                </h2>
                <div className="text-xs font-bold text-gold-400">{step.short}</div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="lg:col-span-3 bg-navy-900/80 rounded-xl p-5 border border-slate-800 text-xs space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Phase Deliverable:
                </span>
                <p className="text-white font-semibold leading-snug">
                  {step.deliverable}
                </p>
                <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Quality Assured by Lead Engineer
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking CTA */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/30 text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-3xl font-heading font-bold text-white">
          Begin with Step 01: Free On-Site Measurement
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          We visit your premises in Lahore, Islamabad, Rawalpindi, or Karachi with laser distance meters, evaluate underground utilities, and prepare a custom 3D concept.
        </p>
        <button
          type="button"
          onClick={openSurveyModal}
          className="py-3.5 px-8 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/20 transition-all inline-flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-navy-950" />
          Schedule On-Site Survey Now
        </button>
      </div>
    </div>
  );
};
