import React, { useState } from 'react';
import { Maximize2, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const SHOWCASES: ShowcaseItem[] = [
  {
    id: 'cantilever',
    number: '01',
    title: 'Cantilever Parking & Porch Sheds',
    tagline: 'Obstruction-free zero front-column parking shades for residential villas, corporate plazas & EV bays.',
    badge: '3.2M – 7.5M CLEAR SPAN',
    image: '/images/hero.jpg',
    desc: 'Flagship cantilever vehicle protection engineered with rear-tapered ASTM A53 Schedule 40 steel columns and German Mehler 900 GSM PVDF membrane. Eliminates front pillar collisions entirely while deflecting 98% of solar thermal heat.',
    specs: [
      { label: 'Wind Load Rating', value: '144 km/h (BS 6399)' },
      { label: 'Front Clearance', value: '100% Column-Free' },
      { label: 'Warranty', value: '15 Years Turnkey' }
    ]
  },
  {
    id: 'industrial',
    number: '02',
    title: 'Industrial, Factory & Warehouse Sheds',
    tagline: 'Heavy-duty steel structure sheds, pre-engineered buildings (PEB), workshops & dairy farm sheds.',
    badge: 'CLEAR SPAN UP TO 45 METERS',
    image: '/images/project_industrial_warehouse.jpg',
    desc: 'Heavy structural steel truss framing fabricated in-house with certified submerged arc welding, crane beam brackets, hot-dip galvanizing, and multi-layer corrosion protection engineered for harsh industrial environments.',
    specs: [
      { label: 'EOT Crane Ready', value: '5 to 25 Ton Ready' },
      { label: 'Corrosion Shield', value: '85+ Microns Galvanized' },
      { label: 'Structure Life', value: '35+ Years' }
    ]
  },
  {
    id: 'sports',
    number: '03',
    title: 'Swimming Pool, Padel & Sports Sheds',
    tagline: 'Heatproof & UV-blocking tensile fabric canopies for private pools, padel courts, and sports arenas.',
    badge: 'ANTI-FUNGAL & UV-SHIELDED',
    image: '/images/luxury_pool.jpg',
    desc: 'Sculptural tensile hyperbolic paraboloid and arched barrel vault canopies keeping pool water 6°C cooler in summer heatwaves, while resisting chlorine humidity and preventing algal discoloration.',
    specs: [
      { label: 'UV Block Rate', value: 'Up to 99.2%' },
      { label: 'Temperature Drop', value: '5°C to 8°C Cooler' },
      { label: 'Membrane Type', value: 'PVDF / Serge Ferrari' }
    ]
  },
  {
    id: 'marquees',
    number: '04',
    title: 'Marquees, Shadi Halls & Gazebos',
    tagline: 'Clear-span architectural tensile membrane roofs, banquet lawns, covered walkways & entrance arches.',
    badge: 'FIRE RETARDANT DIN 4102 B1',
    image: '/images/luxury_walkway.jpg',
    desc: 'Grand anticlastic tension structures offering column-free event space for luxury wedding marquees, institutional ceremonial atriums, and hospitality walkway corridors.',
    specs: [
      { label: 'Fire Rating', value: 'Class B1 / M2 Certified' },
      { label: 'Natural Daylight', value: '12% Diffused Lux' },
      { label: 'Hardware Grade', value: 'AISI 316 Marine SS' }
    ]
  }
];

export const InteractiveSolutionsShowcase: React.FC<{
  openSurveyModal?: () => void;
  onExploreSolutions?: () => void;
}> = ({ openSurveyModal, onExploreSolutions }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SHOWCASES[activeIdx];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
            Engineered Discipline Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
            Turnkey Tensile & Structural Steel Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Click any discipline below to view real architectural photography, structural spans, and material specifications.
          </p>
        </div>

        {onExploreSolutions && (
          <button
            type="button"
            onClick={onExploreSolutions}
            className="text-xs font-bold text-gold-600 dark:text-gold-400 hover:text-gold-500 flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View All Engineering Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Dual Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Dynamic Large Image Card */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/11] rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-gold-500/30 shadow-2xl group">
            <img
              key={active.image}
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 animate-fadeIn"
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
              }}
            />
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-gold-400 text-[11px] font-mono font-bold border border-gold-500/30">
                {active.badge}
              </span>
            </div>

            {/* Bottom Caption & Action */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-wider block">
                  {active.number} // {active.id.toUpperCase()}
                </span>
                <h4 className="text-base sm:text-lg font-heading font-bold text-white drop-shadow-md">
                  {active.title}
                </h4>
              </div>

              {openSurveyModal && (
                <button
                  type="button"
                  onClick={openSurveyModal}
                  className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-gold-500/20 transition-all shrink-0"
                >
                  <span>Book Free Survey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick HUD Specs below image */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {active.specs.map((s, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-xs"
              >
                <span className="text-[10px] text-slate-500 uppercase block font-mono">{s.label}</span>
                <strong className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block">{s.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Category Tabs */}
        <div className="lg:col-span-5 space-y-3.5">
          {SHOWCASES.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                activeIdx === idx
                  ? 'bg-white dark:bg-navy-900 border-gold-500 shadow-xl shadow-gold-500/10 ring-1 ring-gold-500'
                  : 'bg-white/60 dark:bg-navy-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`font-mono text-sm font-extrabold ${
                  activeIdx === idx ? 'text-gold-500' : 'text-slate-400'
                }`}>
                  {item.number}
                </span>

                <div className="flex-1">
                  <h3 className={`font-heading text-base font-bold transition-colors ${
                    activeIdx === idx
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>

                  {activeIdx === idx && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        In-House CNC Fabrication
                      </span>
                      <span className="text-gold-600 dark:text-gold-400 font-mono font-bold">
                        15-Yr Warranty
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
