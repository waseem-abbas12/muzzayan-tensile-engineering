import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { getGuide } from '../seo/guides';

interface Props {
  path: string;
  setActivePage: (target: string) => void;
}

export const PageGuide: React.FC<Props> = ({ path, setActivePage }) => {
  const g = getGuide(path);
  if (!g || !g.sections.length) return null;
  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setActivePage(href);
  };
  return (
    <div className="space-y-6">
      {g.sections.map((s) => (
        <section key={s.h2} className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">{s.h2}</h2>
          {s.paras?.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
          ))}
          {s.bullets && (
            <ul className="space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {s.links && (
            <div className="flex flex-wrap gap-2 pt-1">
              {s.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50"
                >
                  {l.label} <ArrowRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
