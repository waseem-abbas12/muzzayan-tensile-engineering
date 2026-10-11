import React from 'react';
import { company, solutions, processSteps, testimonials, ceo } from '../data/siteData';
import { TensileCanvas } from '../components/TensileCanvas';
import { CostCalculator } from '../components/CostCalculator';
import { CantileverComparison } from '../components/CantileverComparison';
import { FabricInspector } from '../components/FabricInspector';
import { ProjectGallery } from '../components/ProjectGallery';
import { LocationsSection } from '../components/LocationsSection';
import { FaqSection } from '../components/FaqSection';
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Wind, 
  Wrench, 
  Building,
  Quote,
  Layers,
  ChevronRight
} from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
  openSurveyModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage, openSurveyModal }) => {
  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-radial-glow">
        {/* Interactive 3D Tensile Canvas Animation in background */}
        <TensileCanvas className="opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-xs font-bold text-gold-400 tracking-wider uppercase">
                18+ Years Gulf & Pakistan Engineering Precision
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              Pakistan's Premier <span className="gold-gradient-text">Tensile Architecture</span> & Cantilever Shades
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engineered cantilever car parking shades, large-span architectural membrane roofs, and industrial factory steel sheds across Lahore, Islamabad, Rawalpindi & Karachi. In-house fabrication, German Mehler PVDF fabric, and 15-year warranty.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={openSurveyModal}
                className="py-4 px-7 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/25 transition-all transform hover:scale-[1.02] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-navy-950" />
                Book Free On-Site Survey
              </button>

              <button
                type="button"
                onClick={() => setActivePage('calculator')}
                className="py-4 px-6 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-white font-semibold text-sm border border-slate-700 hover:border-gold-500/50 backdrop-blur-md transition-all flex items-center gap-2"
              >
                Calculate Cost Online
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I need information on cantilever car parking shades.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">100+</div>
                <div className="text-xs text-slate-400 font-medium">Completed Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold gold-gradient-text">18+ Yrs</div>
                <div className="text-xs text-slate-400 font-medium">Engineering Heritage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white">15 Years</div>
                <div className="text-xs text-slate-400 font-medium">Structural Warranty</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400">4.9 / 5.0</div>
                <div className="text-xs text-slate-400 font-medium">128+ Client Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Turnkey Architectural Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-1">
              Custom Engineered Shade Structures
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('solutions')}
            className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1 self-start md:self-auto"
          >
            Explore All 5 Shade Disciplines <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-85" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-navy-950/80 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30">
                  {sol.id}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-gold-400 transition-colors">
                    {sol.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-gold-400/90 mt-1">
                    {sol.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {sol.desc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {sol.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActivePage('solutions')}
                    className="text-xs font-bold text-white hover:text-gold-400 flex items-center gap-1"
                  >
                    View Specifications <ArrowRight className="w-3 h-3 text-gold-400" />
                  </button>
                  <button
                    type="button"
                    onClick={openSurveyModal}
                    className="text-xs font-semibold text-gold-400 bg-gold-500/10 hover:bg-gold-500/20 px-3 py-1.5 rounded-lg border border-gold-500/20"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CANTILEVER COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CantileverComparison />
      </section>

      {/* INTERACTIVE COST CALCULATOR */}
      <section id="cost-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator />
      </section>

      {/* PORTFOLIO PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-1">
              Completed Engineering Projects Across Pakistan
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Explore 100+ executed projects for corporate parks, residential villas, hospitals, and defence installations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('projects')}
            className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1 self-start md:self-auto"
          >
            View Complete Gallery <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <ProjectGallery />
      </section>

      {/* 4-STEP WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 md:p-10 border border-gold-500/20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Rigorous Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-1">
              Our 4-Step Engineering Process
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From site survey to precision tension jack calibrated handover — zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-navy-900/60 rounded-xl p-5 border border-slate-800 hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black gold-gradient-text">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <div className="text-[11px] font-medium text-gold-400 mt-0.5">{step.short}</div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300 block mb-0.5">Key Output:</strong>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FABRICS & TECHNICAL INSPECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FabricInspector />
      </section>

      {/* LOCATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationsSection />
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
            Client Verification
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Endorsed by Pakistan's Property Developers & Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-500/30 mb-3" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <div className="text-[11px] text-slate-400">{t.designation}</div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-slate-800 text-gold-400 font-medium border border-slate-700">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>

      {/* BOTTOM CTA BANNER */}
      <section id="contact-survey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-gold-500/30 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold border border-gold-500/30 uppercase tracking-widest">
              Ready To Transform Your Space?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              Request a Free Laser Site Survey & 3D Engineering Render
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Serving DHA Lahore, Bahria Town, Islamabad Sectors, Saddar Rawalpindi, and Karachi. We provide non-binding site visits and full structural calculations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={openSurveyModal}
                className="py-3.5 px-7 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/20 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-navy-950" />
                Schedule My Free Site Survey
              </button>

              <a
                href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I want to discuss a tensile structure project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Direct WhatsApp Hotline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
