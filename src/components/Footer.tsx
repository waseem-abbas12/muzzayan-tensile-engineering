import React from 'react';
import { company, offices, solutions } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
  openSurveyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, openSurveyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/20 pt-16 pb-12 overflow-hidden text-slate-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Company Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 p-[1.5px]">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 22 22 22" />
                    <path d="m12 2 5 20" />
                    <path d="m12 2-5 20" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white">
                  MUZZAYAN TENSILE
                </span>
                <span className="text-xs font-bold text-gold-400 ml-1.5 px-1.5 py-0.5 rounded bg-gold-500/20">
                  MTE
                </span>
                <div className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  Engineering & Architectural Structures
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Pakistan's premier design-build contractor for cantilever car parking shades, industrial factory steel sheds, and architectural tensile membrane roofs. 18+ years of structural steel experience spanning Saudi Arabia and Pakistan.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>UAN / Mobile: <strong className="text-white">{company.phoneFormatted}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>Email: <strong className="text-white">{company.email}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>Hours: {company.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
              Shade Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {solutions.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage('solutions');
                      scrollToTop();
                    }}
                    className="hover:text-gold-400 transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage('calculator');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors text-left font-semibold text-gold-400"
                >
                  Instant Tensile Cost Calculator →
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage('engineering');
                    scrollToTop();
                  }}
                  className="hover:text-gold-400 transition-colors text-left font-semibold text-slate-200"
                >
                  German PVDF & PTFE Specifications →
                </button>
              </li>
            </ul>
          </div>

          {/* Locations & Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
              Regional Desks
            </h4>
            <ul className="space-y-2 text-xs">
              {['Lahore', 'Islamabad', 'Rawalpindi', 'Karachi'].map((city) => (
                <li key={city}>
                  <button
                    type="button"
                    onClick={() => {
                      setActivePage('locations');
                      scrollToTop();
                    }}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-gold-400/80" />
                    {city} Desk
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Offices */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
              Head Office & Operations
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <strong className="text-white block">Lahore Head Office:</strong>
                <span>DHA Phase 5 Commercial, Main Boulevard, Lahore</span>
              </div>
              <div>
                <strong className="text-white block">Islamabad & Rawalpindi:</strong>
                <span>Sector I-9 Industrial Area & F-8 Markaz, Islamabad</span>
              </div>
              <div>
                <strong className="text-white block">Karachi Coastal Branch:</strong>
                <span>DHA Phase 6 Commercial, Karachi</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={openSurveyModal}
                className="py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs w-full shadow-lg transition-all"
              >
                Schedule Free Site Measurement
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Muzzayan Tensile Engineering (MTE). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              15-Year Structural Warranty
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-gold-400 border border-slate-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
