import React, { useState } from 'react';
import { Check, X, ShieldAlert, Award, Car } from 'lucide-react';

export const CantileverComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cantilever' | 'traditional'>('cantilever');

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-gold-500/20">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
          Engineering Distinction
        </span>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
          Why MTE Cantilever Shading vs Traditional 4-Post Sheds
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Compare the everyday practicality and structural safety for luxury homes and executive parking.
        </p>
      </div>

      {/* Switcher Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-navy-900/90 p-1.5 rounded-xl border border-slate-800 flex gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('cantilever')}
            className={`py-2 px-5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'cantilever'
                ? 'bg-gold-500 text-navy-950 shadow-md shadow-gold-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            MTE Cantilever System (Zero Front Column)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('traditional')}
            className={`py-2 px-5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'traditional'
                ? 'bg-slate-700 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Traditional 4-Column Shed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Cantilever Card */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            activeTab === 'cantilever'
              ? 'bg-navy-900/80 border-gold-500/60 ring-1 ring-gold-500/40 shadow-xl shadow-gold-500/5'
              : 'bg-navy-900/30 border-slate-800 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-gold-400 uppercase">MTE Architecture</span>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-gold-400" />
                Cantilever Tensile Canopy
              </h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              Recommended
            </span>
          </div>

          <ul className="mt-5 space-y-3.5 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-white">Zero Front Columns:</strong> 100% open front entrance. No posts to clip car doors or scratch alloy rims.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-white">Effortless Turning Clearance:</strong> Drivers reverse or pull in at wide angles into residential porches and tight DHA driveway gates.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-white">German Mehler PVDF Fabric:</strong> 100% waterproof, flame retardant, and 15+ years of UV resistance in 48°C Punjab summer heat.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-white">DHA & Bahria Town Approved:</strong> Conforms to strict society bye-laws for setback clearance and structural safety.
              </div>
            </li>
          </ul>
        </div>

        {/* Traditional Card */}
        <div
          className={`p-6 rounded-2xl border transition-all ${
            activeTab === 'traditional'
              ? 'bg-navy-900/80 border-slate-600 ring-1 ring-slate-600 shadow-xl'
              : 'bg-navy-900/30 border-slate-800 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">Legacy System</span>
              <h4 className="text-lg font-bold text-slate-300">Traditional 4-Post Metal Shed</h4>
            </div>
            <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 text-xs font-bold border border-rose-500/30">
              Outdated
            </span>
          </div>

          <ul className="mt-5 space-y-3.5 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-300">Obstructive Front Posts:</strong> Car doors bump into vertical metal pipes; frequent fender and bumper damage.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-300">Poor Aesthetics:</strong> Industrial corrugated sheet looks unappealing in front of luxury residential elevations.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-300">Heat Trap:</strong> Corrugated steel sheets absorb and radiate intense heat directly down onto vehicle bonnets and batteries.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-slate-300">Frequent Rusting:</strong> Low-grade primer chips off, resulting in rusty drip marks on vehicle paint during rain.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
