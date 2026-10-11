import React, { useState } from 'react';
import { company, solutions, processSteps, testimonials, Project } from '../data/siteData';
import { TensileCanvas } from '../components/TensileCanvas';
import { TextMarquee } from '../components/TextMarquee';
import { ClientLogosMarquee } from '../components/ClientLogosMarquee';
import { StatsCounterSection } from '../components/StatsCounterSection';
import { ApproachSection } from '../components/ApproachSection';
import { BlueprintBand } from '../components/BlueprintBand';
import { ProjectsMarquee } from '../components/ProjectsMarquee';
import { VideoGallerySection } from '../components/VideoGallerySection';
import { CantileverComparison } from '../components/CantileverComparison';
import { FabricInspector } from '../components/FabricInspector';
import { ProjectGallery } from '../components/ProjectGallery';
import { LocationsSection } from '../components/LocationsSection';
import { FaqSection } from '../components/FaqSection';
import { 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  ChevronRight,
  ShieldCheck,
  Maximize2,
  X,
  MapPin,
  Layers
} from 'lucide-react';

interface HomeProps {
  setActivePage: (page: string) => void;
  openSurveyModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage, openSurveyModal }) => {
  const [selectedMarqueeProject, setSelectedMarqueeProject] = useState<Project | null>(null);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. CINEMATIC ULTRA-LUXURY ARCHITECTURAL HERO SECTION */}
      <section className="relative min-h-[96vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Full-Bleed Cinematic Photography Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero_luxury.jpg"
            alt="Muzzayan Tensile Engineering Cantilever Architecture"
            className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse opacity-25 dark:opacity-20 filter contrast-125"
          />
          {/* Deep Obsidian Architectural Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/70 dark:from-[#03060E] dark:via-[#050A18]/95 dark:to-[#081026]/85" />
          <div className="absolute inset-0 bg-architectural-grid opacity-25 dark:opacity-20" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-radial-glow pointer-events-none opacity-50 dark:opacity-40" />
        </div>

        {/* Dynamic Hyperbolic Math Cable Simulation */}
        <TensileCanvas className="opacity-30 dark:opacity-35 pointer-events-none z-[1]" />

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Architectural Proposition */}
            <div className="lg:col-span-7 space-y-7">
              {/* Radar Status Bar */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] font-bold text-gold-600 dark:text-gold-400 tracking-wider uppercase">
                  ACTIVE ON-SITE SURVEYS // LAHORE • ISLAMABAD • KARACHI
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
                  Pakistan's Premier <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">Tensile Architecture</span> & <br className="hidden sm:inline" />
                  Cantilever Shade Systems
                </h1>
                
                {/* Architectural Specs Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px] sm:text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-slate-200/80 dark:bg-navy-900/90 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800">
                    WIND LOAD: 144 KM/H (BS 6399)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-200/80 dark:bg-navy-900/90 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800">
                    MEMBRANE: GERMAN MEHLER 900 GSM
                  </span>
                  <span className="px-2.5 py-1 rounded bg-gold-500/15 text-gold-700 dark:text-gold-400 font-bold border border-gold-500/30">
                    15-YEAR STRUCTURAL WARRANTY
                  </span>
                </div>
              </div>

              {/* Body Copy */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Engineered zero-front-column cantilever car parking shades, commercial architectural membrane atriums, and heavy industrial PEB steel structures. Founded on 18+ years of Gulf and Pakistani structural engineering heritage.
              </p>

              {/* High-Impact Actions Group */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={openSurveyModal}
                  className="gold-btn py-4 px-7 rounded-xl text-sm flex items-center gap-2 transform hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-navy-950" />
                  Book Free On-Site Survey & 3D Render
                </button>

                <button
                  type="button"
                  onClick={() => setActivePage('projects')}
                  className="py-4 px-6 rounded-xl bg-white/90 hover:bg-slate-100 text-slate-900 border border-slate-300 dark:bg-navy-900/80 dark:hover:bg-navy-800 dark:text-white dark:border-slate-700 hover:border-gold-500/50 backdrop-blur-md transition-all flex items-center gap-2 font-semibold text-sm shadow-xs"
                >
                  Explore 100+ Sites
                  <ArrowRight className="w-4 h-4 text-gold-500 dark:text-gold-400" />
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I need structural advice on cantilever parking shades.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chief Engineer WhatsApp
                </a>
              </div>

              {/* Quick Architectural Proof Metrics Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-300/80 dark:border-slate-800/80">
                <div className="reticle-corner p-2.5 rounded-xl bg-white/70 dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white">120+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Executed Sites</div>
                </div>
                <div className="reticle-corner p-2.5 rounded-xl bg-white/70 dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-heading font-black gold-gradient-text">18+ Yrs</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Gulf & PK Heritage</div>
                </div>
                <div className="reticle-corner p-2.5 rounded-xl bg-white/70 dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900 dark:text-white">15 Years</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Full Warranty</div>
                </div>
                <div className="reticle-corner p-2.5 rounded-xl bg-white/70 dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-heading font-black text-emerald-600 dark:text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">In-House Built</div>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Architectural CAD Specification Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="glass-panel reticle-corner rounded-3xl p-5 border border-gold-500/30 shadow-2xl space-y-4 relative overflow-hidden group">
                {/* Top CAD Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      SPEC // MTE-ARCH-01
                    </span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                    DHA & CDA APPROVED
                  </span>
                </div>

                {/* Visual Imagery */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                  <img
                    src="/images/project_cantilever_parking.jpg"
                    alt="Cantilever Car Parking Engineering Demonstration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-75" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/85 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30 uppercase tracking-wider">
                    Cantilever Vehicle Bay
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="font-heading font-bold text-sm block">DHA Phase 6 Commercial Installation</span>
                    <span className="text-[11px] text-slate-300">Zero front column obstruction • Full SUV door clearance</span>
                  </div>
                </div>

                {/* Technical HUD Grid Specs */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">Span Capacity</span>
                    <strong className="text-slate-900 dark:text-white text-xs">24 Ft Post-Free</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">Membrane Grade</span>
                    <strong className="text-gold-600 dark:text-gold-400 text-xs">Mehler PVDF 900g</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">Structural Steel</span>
                    <strong className="text-slate-900 dark:text-white text-xs">ASTM A53 Seamless CHS</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase">Corrosion Defense</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 text-xs">Hot-Dip Galvanized + PU</strong>
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={openSurveyModal}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-navy-900 dark:hover:bg-navy-800 text-gold-600 dark:text-gold-400 font-bold text-xs border border-gold-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request CAD Elevation & Foundation Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RUNNING TEXT CAPABILITIES TICKER MARQUEE */}
      <TextMarquee />

      {/* 3. ANIMATED STATS SECTION */}
      <StatsCounterSection />

      {/* 4. CLIENT LOGOS & HOUSING SOCIETIES MARQUEE */}
      <ClientLogosMarquee />

      {/* 5. APPROACH SECTION */}
      <ApproachSection onLearnProcess={() => setActivePage('process')} />

      {/* 6. SOLUTIONS SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
              Turnkey Architectural Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white mt-1">
              Custom Engineered Shade Structures
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('solutions')}
            className="text-xs font-bold text-gold-600 dark:text-gold-400 hover:text-gold-500 flex items-center gap-1 self-start md:self-auto"
          >
            Explore All 5 Shade Disciplines <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-85" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-navy-950/80 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30">
                  {sol.id}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {sol.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-gold-600 dark:text-gold-400/90 mt-1">
                    {sol.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {sol.desc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {sol.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 dark:text-gold-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActivePage('solutions')}
                    className="text-xs font-bold text-slate-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 flex items-center gap-1"
                  >
                    View Specifications <ArrowRight className="w-3 h-3 text-gold-500 dark:text-gold-400" />
                  </button>
                  <button
                    type="button"
                    onClick={openSurveyModal}
                    className="text-xs font-semibold text-gold-600 dark:text-gold-400 bg-gold-500/10 hover:bg-gold-500/20 px-3 py-1.5 rounded-lg border border-gold-500/20"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CANTILEVER VS TRADITIONAL 4-POST SHED COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CantileverComparison />
      </section>

      {/* 8. BLUEPRINT BAND ARCHITECTURAL STATEMENT */}
      <BlueprintBand onExploreEngineering={() => setActivePage('engineering')} />

      {/* 9. PROJECTS MARQUEE INFINITE REEL */}
      <ProjectsMarquee
        onSelectProject={(p) => setSelectedMarqueeProject(p)}
        openSurveyModal={openSurveyModal}
      />

      {/* 10. COMPLETE FILTERABLE PORTFOLIO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
              Comprehensive Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white mt-1">
              Executed Projects Across Pakistan
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Filter by society, sector, or structural steel system.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActivePage('projects')}
            className="text-xs font-bold text-gold-600 dark:text-gold-400 hover:text-gold-500 flex items-center gap-1 self-start md:self-auto"
          >
            All 100+ Projects <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <ProjectGallery />
      </section>

      {/* 11. VIDEO SHOWCASE IN MOTION */}
      <VideoGallerySection openSurveyModal={openSurveyModal} />

      {/* 12. 4-STEP WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-gold-500/20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
              Rigorous Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 dark:text-white mt-1">
              Our 4-Step Engineering Process
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              From site survey to precision tension jack calibrated handover — zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 dark:bg-navy-900/60 rounded-xl p-5 border border-slate-200 dark:border-slate-800 hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black gold-gradient-text">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <div className="text-[11px] font-medium text-gold-600 dark:text-gold-400 mt-0.5">{step.short}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">Key Output:</strong>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FABRIC & MATERIAL SPECIFICATIONS INSPECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FabricInspector />
      </section>

      {/* 14. NATIONWIDE LOCATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationsSection />
      </section>

      {/* 15. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
            Client Verification
          </span>
          <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            Endorsed by Pakistan's Property Developers & Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gold-500/30 mb-3" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{t.designation}</div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-gold-600 dark:text-gold-400 font-medium border border-slate-200 dark:border-slate-700">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 16. FAQS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>

      {/* 17. BOTTOM CTA BANNER */}
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

      {/* Project Modal Preview from Marquee */}
      {selectedMarqueeProject && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-gold-500/30 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button
              type="button"
              onClick={() => setSelectedMarqueeProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100/90 dark:bg-navy-950/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-slate-900 shrink-0">
              <img
                src={selectedMarqueeProject.image}
                alt={selectedMarqueeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90" />
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs font-bold border border-gold-500/30 uppercase">
                  {selectedMarqueeProject.type}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-3 h-3 text-gold-500 dark:text-gold-400" />
                  {selectedMarqueeProject.city}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-700">
                  {selectedMarqueeProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                {selectedMarqueeProject.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedMarqueeProject.description}
              </p>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Structural System:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{selectedMarqueeProject.system}</strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Covered Footprint:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{selectedMarqueeProject.area}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I am interested in building a structure similar to your project: "${selectedMarqueeProject.title}" in ${selectedMarqueeProject.city}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMarqueeProject(null);
                    openSurveyModal();
                  }}
                  className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-colors"
                >
                  Book Free Site Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
