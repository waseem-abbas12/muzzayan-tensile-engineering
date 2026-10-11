import React, { useState } from 'react';
import { projects, Project } from '../data/siteData';
import { ArrowUpRight, MapPin, Layers } from 'lucide-react';

interface ProjectsMarqueeProps {
  onSelectProject: (p: Project) => void;
  openSurveyModal: () => void;
}

export const ProjectsMarquee: React.FC<ProjectsMarqueeProps> = ({ onSelectProject, openSurveyModal }) => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeProjects = [...projects, ...projects, ...projects];

  return (
    <section className="py-16 overflow-hidden bg-slate-100/60 dark:bg-navy-950/70 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
            Real Executions In Motion
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            Our Latest Shade & Steel Projects
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Hover to pause · Click any project to inspect specifications</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex w-max gap-6 animate-marquee-slow ${isPaused ? '[animation-play-state:paused]' : ''}`}>
          {marqueeProjects.map((p, idx) => (
            <article
              key={`${p.id}-${idx}`}
              onClick={() => onSelectProject(p)}
              className="w-80 sm:w-96 rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800 hover:border-gold-500/60 shadow-md dark:shadow-xl transition-all cursor-pointer group shrink-0 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30 uppercase">
                    {p.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-medium border border-slate-700 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-gold-400" />
                    {p.city}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-gold-400 flex items-center justify-center border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between bg-white dark:bg-transparent">
                <div>
                  <div className="text-[10px] text-gold-600 dark:text-gold-400/90 font-mono font-medium truncate mb-1">
                    {p.system}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-mono">
                    <Layers className="w-3 h-3 text-gold-600 dark:text-gold-400" />
                    {p.area}
                  </span>
                  <span>{p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
