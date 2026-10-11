import React, { useState } from 'react';
import { engineeringFabrics } from '../data/siteData';
import { Shield, Sparkles, Flame, Weight, Wind } from 'lucide-react';

export const FabricInspector: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const fabric = engineeringFabrics[selectedIdx];

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-gold-500/20 transition-colors">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
            Certified Membrane Engineering
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            Architectural Fabric & Material Specifications
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Compare German PVDF, French Serge Ferrari, Australian HDPE, and PTFE glass fibre membranes.
          </p>
        </div>
        <div className="text-xs text-gold-700 dark:text-gold-400 bg-gold-500/10 px-3.5 py-1.5 rounded-lg border border-gold-500/20 flex items-center gap-1.5 self-start md:self-auto font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Direct European Import Standard
        </div>
      </div>

      {/* Fabric Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {engineeringFabrics.map((f, idx) => (
          <button
            key={f.name}
            type="button"
            onClick={() => setSelectedIdx(idx)}
            className={`py-2 px-3.5 rounded-xl text-xs font-semibold transition-all border ${
              selectedIdx === idx
                ? 'bg-gold-500 text-slate-950 font-bold border-gold-400 shadow-sm'
                : 'bg-white dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* Active Fabric Deep Dive Box */}
      <div className="bg-slate-50 dark:bg-navy-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold-500" />
              {fabric.name}
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">Origin: <strong className="text-slate-800 dark:text-slate-200">{fabric.origin}</strong></span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 self-start sm:self-auto">
            Lifespan: {fabric.lifespan}
          </span>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mb-1">
              <Wind className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Tensile Breaking Strength
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{fabric.tensile}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mb-1">
              <Shield className="w-3.5 h-3.5 text-gold-500" />
              Tear Resistance
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{fabric.tear}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mb-1">
              <Weight className="w-3.5 h-3.5 text-amber-500" />
              Weight Density
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{fabric.weight}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mb-1">
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              Fire Retardancy
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">{fabric.fire}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
              Primary Recommended Applications
            </span>
            <p className="text-slate-800 dark:text-slate-200">{fabric.uses}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
              Chemical & Environmental Surface Properties
            </span>
            <p className="text-slate-800 dark:text-slate-200">{fabric.features}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
