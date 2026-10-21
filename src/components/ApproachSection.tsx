import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onLearnProcess: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onLearnProcess }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Large Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-md border border-gold-500/20">
                02
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Our Engineering Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              We make shade feel like it was <span className="gold-gradient-text">always meant to be there.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              From the initial laser survey to the final calibrated tension jack turnbuckle, our work bridges architectural beauty and everyday thermal comfort. We read the site, understand prevailing sun paths, and manufacture details that endure Pakistan's 50°C summer heatwaves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1 font-sans font-bold">Tailored Site Geometry</strong>
                <span className="text-slate-600 dark:text-slate-400 font-sans text-[11px] leading-relaxed">Custom 3D parametric forms designed specifically around your villa boundaries, trees, and entry gates.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1 font-sans font-bold">Zero Front-Column Clearance</strong>
                <span className="text-slate-600 dark:text-slate-400 font-sans text-[11px] leading-relaxed">Rear-cantilevered structural members giving drivers 100% unobstructed turning radiuses.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onLearnProcess}
                className="gold-btn py-3.5 px-6 rounded-xl text-xs inline-flex items-center gap-2"
              >
                Explore Our 4-Step Engineering Process
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Visual Architectural Feature */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 border border-slate-200 dark:border-gold-500/35 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="/images/luxury_pool.jpg"
                  alt="MTE Tensile Engineering Approach"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget;
                    if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-navy-950/90 backdrop-blur-md border border-slate-200 dark:border-gold-500/30 text-xs shadow-xl">
                  <div className="text-[10px] text-gold-600 dark:text-gold-400 font-mono uppercase tracking-wider mb-1 font-bold">
                    [ ARCHITECTURAL DISTINCTION // 02 ]
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm">
                    Clean Lines · Concealed Fasteners · Zero Flapping
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-[11px] mt-1 leading-relaxed">
                    Every membrane is pre-stressed to exact non-linear formulas, preventing flutter and water ponding during violent monsoons.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
