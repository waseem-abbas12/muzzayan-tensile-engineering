import React, { useState, useEffect } from 'react';
import { company } from '../data/siteData';
import { Menu, X, Phone, MessageCircle, ChevronDown, Shield, Calculator, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openSurveyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, openSurveyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Shade Solutions', hasDropdown: true },
    { id: 'projects', label: 'Projects (100+)' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'process', label: 'Our Process' },
    { id: 'locations', label: 'Locations' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'about', label: 'About & CEO' },
    { id: 'faq', label: 'Pricing & FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-xl border-b border-gold-500/20 py-3'
          : 'bg-gradient-to-b from-navy-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Geometric Tensile SVG Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-600 p-[1.5px] shadow-lg shadow-gold-500/20">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center relative overflow-hidden group-hover:bg-navy-900 transition-colors">
                <svg
                  className="w-6 h-6 text-gold-400 transform group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 22 22 22" />
                  <path d="m12 2 5 20" />
                  <path d="m12 2-5 20" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white">
                  MUZZAYAN
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gold-500 text-navy-950 tracking-wider">
                  MTE
                </span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gold-400/90 font-semibold">
                Tensile Engineering
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                    activePage === item.id
                      ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I would like to inquire about tensile car parking shades and book a free site survey.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-1.5 text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={openSurveyModal}
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold text-xs shadow-lg shadow-gold-500/20 transition-all transform hover:scale-[1.02] flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-navy-950" />
              Free Site Survey
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={openSurveyModal}
              className="py-1.5 px-3 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold sm:hidden"
            >
              Survey
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-gold-500/20 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                  activePage === item.id
                    ? 'bg-gold-500/15 text-gold-400 border border-gold-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp ({company.phoneFormatted})
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openSurveyModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Free On-Site Survey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
