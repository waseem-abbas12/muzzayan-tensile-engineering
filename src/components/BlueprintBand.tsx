import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface BlueprintBandProps {
  onExploreEngineering: () => void;
}

export const BlueprintBand: React.FC<BlueprintBandProps> = ({ onExploreEngineering }) => {
  return (
    <section className="relative py-20 bg-slate-100/80 dark:bg-navy-950 border-y border-slate-200 dark:border-gold-500/20 overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100/80 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            Material · Movement · Light
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Good structure is quiet confidence.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Tensile architecture is not mere decoration. It is the perfect equilibrium of tension cables, double-curved anticlastic surfaces, and rigid structural steel working together to deflect monsoon squalls and shield extreme solar radiation.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
              <span className="text-slate-800 dark:text-slate-200 font-semibold">01 — Fabric Prestress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <span className="text-slate-800 dark:text-slate-200 font-semibold">02 — Steel Member Logic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-800 dark:text-slate-200 font-semibold">03 — Aerodynamic Rain Drainage</span>
            </div>

            <button
              type="button"
              onClick={onExploreEngineering}
              className="py-2.5 px-5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-gold-600 dark:text-gold-400 font-bold text-xs border border-slate-200 dark:border-gold-500/30 shadow-xs transition-all flex items-center gap-2 ml-auto"
            >
              See How We Engineer
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
