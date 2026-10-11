import React from 'react';
import { ArrowRight, Compass, Shield, Wind } from 'lucide-react';

interface BlueprintBandProps {
  onExploreEngineering: () => void;
}

export const BlueprintBand: React.FC<BlueprintBandProps> = ({ onExploreEngineering }) => {
  return (
    <section className="relative py-20 bg-navy-950 border-y border-gold-500/20 overflow-hidden">
      {/* Blueprint Grid Lines Background */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            Material · Movement · Light
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Good structure is quiet confidence.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Tensile architecture is not mere decoration. It is the perfect equilibrium of tension cables, double-curved anticlastic surfaces, and rigid structural steel working together to deflect monsoon squalls and shield extreme solar radiation.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span className="text-slate-200">01 — Fabric Prestress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-slate-200">02 — Steel Member Logic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-200">03 — Aerodynamic Rain Drainage</span>
            </div>

            <button
              type="button"
              onClick={onExploreEngineering}
              className="py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-gold-400 font-bold text-xs border border-gold-500/30 transition-all flex items-center gap-2 ml-auto"
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
