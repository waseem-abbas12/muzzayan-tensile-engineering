import React, { useState } from 'react';
import { solutions, company } from '../data/siteData';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Layers, Ruler } from 'lucide-react';

interface SolutionsPageProps {
  openSurveyModal: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ openSurveyModal }) => {
  const [selectedSolution, setSelectedSolution] = useState<string>(solutions[0].slug);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
          Turnkey Tensile & Steel Systems
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">
          Engineering Solutions & Shade Architecture
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          From zero-front-column cantilever vehicle protection in residential societies to multi-thousand square meter industrial warehouse PEB sheds and iconic tensile membrane atriums across Pakistan.
        </p>
      </div>

      {/* Solutions Navigation Pills */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
        {solutions.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setSelectedSolution(s.slug)}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
              selectedSolution === s.slug
                ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-md shadow-gold-500/20'
                : 'bg-white dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-gold-500/50'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Detailed Solutions Cards */}
      <div className="space-y-16">
        {solutions.map((sol, index) => {
          const isSelected = selectedSolution === sol.slug;
          return (
            <div
              key={sol.slug}
              id={sol.slug}
              className={`glass-panel rounded-3xl p-6 sm:p-10 border transition-all ${
                isSelected
                  ? 'border-gold-500/50 ring-1 ring-gold-500/30'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left/Right alternating images */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                    <img
                      src={sol.image}
                      alt={sol.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-40" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-gold-400 text-xs font-bold border border-gold-500/30">
                      Solution {sol.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs uppercase font-bold text-gold-600 dark:text-gold-400 tracking-wider">
                      {sol.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
                      {sol.name}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sol.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Key Engineering Advantages:
                    </span>
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 dark:text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal Applications & Specs */}
                  <div className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">Typical Applications:</strong>
                      <span className="text-slate-600 dark:text-slate-400">{sol.idealFor}</span>
                    </div>
                    {sol.specs && (
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-500 block">Span Capacity:</span>
                          <span className="text-slate-800 dark:text-slate-200 font-semibold">{sol.specs.span}</span>
                        </div>
                        {sol.specs.fabricWeight && (
                          <div>
                            <span className="text-slate-500 block">Membrane Density:</span>
                            <span className="text-slate-800 dark:text-slate-200 font-semibold">{sol.specs.fabricWeight}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={openSurveyModal}
                      className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-lg shadow-gold-500/20 transition-all flex items-center gap-2"
                    >
                      Book Free Survey for {sol.name}
                    </button>
                    <a
                      href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I want to inquire about ${sol.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
