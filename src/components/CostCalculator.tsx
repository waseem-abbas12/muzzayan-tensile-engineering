import React, { useState } from 'react';
import { Calculator, ShieldCheck, ArrowRight, MessageCircle, MapPin, Layers } from 'lucide-react';
import { company } from '../data/siteData';

export const CostCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'parking' | 'industrial' | 'membrane' | 'pool'>('parking');
  const [carBays, setCarBays] = useState<number>(2);
  const [areaSqFt, setAreaSqFt] = useState<number>(400);
  const [material, setMaterial] = useState<'hdpe' | 'mehler' | 'ferrari' | 'ptfe'>('mehler');
  const [city, setCity] = useState<string>('Lahore');

  // Rates per sq.ft
  const rates: Record<string, { min: number; max: number; name: string; warranty: string }> = {
    hdpe: { min: 350, max: 550, name: 'Australian HDPE Shade Cloth', warranty: '5 Years' },
    mehler: { min: 750, max: 1150, name: 'German Mehler 900 GSM PVDF', warranty: '10–15 Years' },
    ferrari: { min: 1200, max: 1850, name: 'French Serge Ferrari PVDF', warranty: '15 Years' },
    ptfe: { min: 2200, max: 3500, name: 'PTFE Glass Fibre Membrane', warranty: '20+ Years' },
  };

  // Car bay standard area is ~180-200 sq.ft per car
  const effectiveArea = projectType === 'parking' ? carBays * 190 : areaSqFt;
  const currentRate = rates[material];
  const minCost = Math.round(effectiveArea * currentRate.min);
  const maxCost = Math.round(effectiveArea * currentRate.max);

  const formatPKR = (num: number) => {
    return 'PKR ' + num.toLocaleString('en-PK');
  };

  const getWhatsAppMessage = () => {
    const text = `Assalam-o-Alaikum MTE! I used your website calculator for an estimate:%0A- Project: ${projectType.toUpperCase()}%0A- Scope: ${projectType === 'parking' ? `${carBays} Car Bays (~${effectiveArea} sq.ft)` : `${effectiveArea} sq.ft`}%0A- Fabric: ${currentRate.name}%0A- City: ${city}%0A- Estimated Range: ${formatPKR(minCost)} - ${formatPKR(maxCost)}%0A%0APlease provide a detailed quotation and schedule a free site survey.`;
    return `https://wa.me/${company.whatsapp}?text=${text}`;
  };

  return (
    <div className="relative glass-panel rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden border border-gold-500/20">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Instant Interactive Estimator
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Estimate Your Tensile Shade Project
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Transparent pricing based on certified Pakistan engineering specifications & current steel rates.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Includes 3D Design + Structural FEA + Galvanized Frame</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Project Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              1. Select Project Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'parking', label: 'Car Parking' },
                { id: 'membrane', label: 'Tensile Roof' },
                { id: 'industrial', label: 'Steel Shed' },
                { id: 'pool', label: 'Pool Shade' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setProjectType(t.id as any)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all text-center border ${
                    projectType === t.id
                      ? 'bg-gold-500 text-navy-950 font-bold border-gold-400 shadow-md shadow-gold-500/20'
                      : 'bg-navy-900/60 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Capacity */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {projectType === 'parking' ? '2. Number of Vehicle Bays' : '2. Covered Area (Square Feet)'}
              </label>
              <span className="text-gold-400 font-bold text-sm">
                {projectType === 'parking' ? `${carBays} Cars (~${effectiveArea} sq.ft)` : `${areaSqFt} sq.ft`}
              </span>
            </div>
            {projectType === 'parking' ? (
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={carBays}
                  onChange={(e) => setCarBays(Number(e.target.value))}
                  className="w-full accent-gold-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 Car (190 sq.ft)</span>
                  <span>2 Cars (Standard DHA/Bahria)</span>
                  <span>6 Cars</span>
                  <span>12+ Cars (Commercial)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full accent-gold-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>200 sq.ft</span>
                  <span>1,500 sq.ft</span>
                  <span>3,000 sq.ft</span>
                  <span>5,000+ sq.ft</span>
                </div>
              </div>
            )}
          </div>

          {/* Material Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              3. Fabric & Membrane Grade
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  id: 'mehler',
                  name: 'German Mehler PVDF',
                  spec: '900 GSM · 100% Waterproof · 15-Yr Warranty',
                  badge: 'Most Popular',
                },
                {
                  id: 'hdpe',
                  name: 'Australian HDPE Shade Cloth',
                  spec: '340 GSM · 95% UV Mesh · 5-Yr Warranty',
                  badge: 'Budget Friendly',
                },
                {
                  id: 'ferrari',
                  name: 'French Serge Ferrari PVDF',
                  spec: 'Premium Tensile Architecture · 20-Yr Warranty',
                  badge: 'High-End Luxury',
                },
                {
                  id: 'ptfe',
                  name: 'PTFE Glass Fibre Architectural',
                  spec: 'Class A1 Fireproof · 30+ Yr Lifespan',
                  badge: 'Landmark / Airport',
                },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => setMaterial(m.id as any)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    material === m.id
                      ? 'bg-gold-500/10 border-gold-500/70 text-white'
                      : 'bg-navy-900/40 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white">{m.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 font-medium">
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{m.spec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location / City */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              4. Installation City
            </label>
            <div className="flex flex-wrap gap-2">
              {['Lahore', 'Islamabad', 'Rawalpindi', 'Karachi', 'Faisalabad', 'Multan'].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
                    city === c
                      ? 'bg-slate-800 border-gold-500 text-gold-400'
                      : 'bg-navy-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estimated Price Display */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-navy-900/90 rounded-2xl p-6 border border-slate-800 relative">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Estimated Investment
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold gold-gradient-text tracking-tight my-2">
              {formatPKR(minCost)} <span className="text-lg font-normal text-slate-400">to</span> {formatPKR(maxCost)}
            </div>
            <div className="text-xs text-slate-400">
              *Approx. rate: <span className="text-slate-200 font-medium">PKR {currentRate.min} – {currentRate.max}</span> per sq.ft
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Total Covered Area:</span>
                <span className="font-semibold text-white">{effectiveArea} sq.ft</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Selected Fabric:</span>
                <span className="font-semibold text-white">{currentRate.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Engineered Warranty:</span>
                <span className="font-semibold text-emerald-400">{currentRate.warranty}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">On-Site Survey:</span>
                <span className="font-semibold text-emerald-400">100% Free ({city})</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <a
              href={getWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              Lock This Quote on WhatsApp
            </a>

            <a
              href="#contact-survey"
              className="w-full py-3 px-5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all"
            >
              Request Free On-Site Measurement
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            </a>

            <p className="text-[11px] text-slate-500 text-center">
              No obligation. Exact rates depend on span, ground foundation soil condition, and steel profile sizing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
