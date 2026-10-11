import React from 'react';
import { Home, Layers, Image as ImageIcon, Cpu, Phone } from 'lucide-react';
import { company } from '../data/siteData';

interface MobileBottomBarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openSurveyModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activePage,
  setActivePage,
  openSurveyModal,
}) => {
  return (
    <nav
      aria-label="Mobile Bottom Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-gold-500/20 py-2 px-3 shadow-[0_-8px_24px_rgba(10,30,41,0.08)] flex items-center justify-around transition-colors"
    >
      <button
        type="button"
        onClick={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
          activePage === 'home'
            ? 'text-gold-600 dark:text-gold-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Home className="w-4 h-4" />
        <span className="text-[10px]">Home</span>
      </button>

      <button
        type="button"
        onClick={() => {
          setActivePage('solutions');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
          activePage === 'solutions'
            ? 'text-gold-600 dark:text-gold-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Layers className="w-4 h-4" />
        <span className="text-[10px]">Shades</span>
      </button>

      <button
        type="button"
        onClick={() => {
          setActivePage('projects');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
          activePage === 'projects'
            ? 'text-gold-600 dark:text-gold-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <ImageIcon className="w-4 h-4" />
        <span className="text-[10px]">100+ Sites</span>
      </button>

      <button
        type="button"
        onClick={() => {
          setActivePage('engineering');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
          activePage === 'engineering'
            ? 'text-gold-600 dark:text-gold-400 font-bold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <Cpu className="w-4 h-4" />
        <span className="text-[10px]">Specs</span>
      </button>

      <button
        type="button"
        onClick={openSurveyModal}
        className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl bg-gold-500 text-slate-950 font-bold shadow-md shadow-gold-500/20 active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[10px]">Survey</span>
      </button>
    </nav>
  );
};
