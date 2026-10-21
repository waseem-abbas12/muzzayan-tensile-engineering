import React, { useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';
import { company } from '../data/siteData';

interface VideoGallerySectionProps {
  openSurveyModal: () => void;
}

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({ openSurveyModal }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const showcases = [
    {
      id: 'cantilever-parking',
      title: 'Cantilever Vehicle Bay Wind & Deflection Resistance',
      category: 'Residential · DHA Lahore',
      poster: '/images/hero.jpg',
      desc: 'Live footage demonstrating zero vibration under 120 km/h Potohar/Punjab squall winds, high-tension Mehler PVDF membrane stability, and clean integrated gutter rainwater runoff.',
      features: ['Rear Post Zero-Collision', '900 GSM German PVDF', '120 km/h Wind Rated']
    },
    {
      id: 'walkway-tension',
      title: 'Precision Membrane Tensioning & Jack Calibration',
      category: 'Hospitality · Rawalpindi',
      poster: '/images/luxury_walkway.jpg',
      desc: 'On-site engineering team applying calibrated hydraulic tension jacks to Grade 316 stainless steel edge cables, creating perfectly taut anticlastic hypar forms.',
      features: ['Hydraulic Cable Jacks', 'SS 316 Marine Hardware', 'Zero Water Ponding']
    },
    {
      id: 'industrial-shed',
      title: 'Heavy PEB Steel Structure Portal Frame Erection',
      category: 'Industrial · Islamabad I-9',
      poster: '/images/detail.jpg',
      desc: 'Factory and warehouse pre-engineered building (PEB) crane erection, high-strength torque bolt tightening, and dual-layer polyurethane corrosion barrier.',
      features: ['PEB Rigid Frame', '85+ Microns Galvanized', 'EOT Crane Ready']
    }
  ];

  return (
    <section className="py-20 bg-slate-100/60 dark:bg-gradient-to-b dark:from-navy-950 dark:via-slate-900/40 dark:to-navy-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Field Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Watch Our Shade Engineering in Motion
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Witness real membrane tensioning, aerodynamic wind deflection resistance, and clean runoff engineering captured across live site installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModal(item.id)}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 shadow-md dark:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const t = e.currentTarget;
                      if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold-500 text-slate-950 flex items-center justify-center shadow-xl shadow-gold-500/30 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30 uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  {item.features.map((f, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold-500/30 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center border border-slate-200 dark:border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 mb-4 flex items-center justify-center border border-slate-200 dark:border-slate-800">
              <img
                src={showcases.find(s => s.id === activeModal)?.poster}
                alt="Showcase Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gold-500 text-slate-950 flex items-center justify-center shadow-2xl mb-3">
                  <Play className="w-7 h-7 fill-slate-950 ml-1" />
                </div>
                <h4 className="text-lg font-bold text-white">Engineering Video Reel</h4>
                <p className="text-xs text-slate-200 mt-1 max-w-sm">
                  Connect on WhatsApp to view full high-definition video walkthroughs and time-lapses of our recent installations.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {showcases.find(s => s.id === activeModal)?.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {showcases.find(s => s.id === activeModal)?.desc}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! Please share the video documentation and project details for ${showcases.find(s => s.id === activeModal)?.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  Request Site Video Clip on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModal(null);
                    openSurveyModal();
                  }}
                  className="py-3 px-5 rounded-xl bg-gold-500 text-slate-950 font-bold text-xs shadow-xs"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
