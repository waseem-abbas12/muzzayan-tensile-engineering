import React from 'react';
import { company, locations, solutions } from '../data/siteData';
import { findTopic, type TopicBlock } from '../seo/topics';
import { Calendar, MessageCircle, ChevronRight, Check, HelpCircle } from 'lucide-react';

interface TopicPageProps {
  topicKey: string;
  setActivePage: (target: string) => void;
  openSurveyModal: () => void;
}

const specLabel = (k: string) => k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
const panel = 'glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800';
const h2c = 'text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white';
const chip =
  'px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50';

export const TopicPage: React.FC<TopicPageProps> = ({ topicKey, setActivePage, openSurveyModal }) => {
  const t = findTopic(topicKey);
  if (!t) return null;
  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setActivePage(target);
  };

  const renderBlock = (b: TopicBlock, i: number) => {
    switch (b.kind) {
      case 'text':
        return (
          <section key={i} className={panel}>
            <h2 className={h2c}>{b.h2}</h2>
            {b.paras.map((p) => (
              <p key={p} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-3">{p}</p>
            ))}
          </section>
        );
      case 'bullets':
        return (
          <section key={i} className={panel}>
            <h2 className={h2c}>{b.h2}</h2>
            {b.intro && <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{b.intro}</p>}
            <ul className="mt-4 space-y-2.5">
              {b.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {it}
                </li>
              ))}
            </ul>
          </section>
        );
      case 'solution': {
        const s = solutions.find((x) => x.slug === b.slug);
        if (!s) return null;
        return (
          <section key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={panel}>
              <h2 className={h2c}>{b.h2}</h2>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2">{s.tagline}</p>
              <ul className="mt-4 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                <strong className="text-slate-700 dark:text-slate-200">Ideal for:</strong> {s.idealFor}
              </p>
            </div>
            <div className={panel}>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">Technical specifications</h3>
              <table className="w-full text-left text-sm mt-3">
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {Object.entries(s.specs).map(([k, v]) => (
                    <tr key={k}>
                      <th className="py-2.5 pr-4 font-semibold text-slate-500 dark:text-slate-400 align-top w-2/5">{specLabel(k)}</th>
                      <td className="py-2.5 text-slate-800 dark:text-slate-200">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      }
      case 'cityPrices':
        return (
          <section key={i} className={`${panel} space-y-4`}>
            <h2 className={h2c}>{b.h2}</h2>
            {b.intro && <p className="text-sm text-slate-600 dark:text-slate-400">{b.intro}</p>}
            {b.cities.map((ck) => {
              const c = locations[ck];
              return (
                <div key={ck} dir="ltr" className="overflow-x-auto">
                  {b.cities.length > 1 && (
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      <a href={`/car-parking-shades-${ck}`} onClick={(e) => go(e, `/car-parking-shades-${ck}`)} className="hover:text-gold-600">
                        {c.name}
                      </a>
                    </h3>
                  )}
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                        <th className="py-2.5 px-3">Fabric</th>
                        <th className="py-2.5 px-3">Rate (PKR / sq ft)</th>
                        <th className="py-2.5 px-3">Lifespan</th>
                        <th className="py-2.5 px-3">Warranty</th>
                        <th className="py-2.5 px-3">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300">
                      {c.pricingGuide.map((p) => (
                        <tr key={p.material}>
                          <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">{p.material}</td>
                          <td className="py-2.5 px-3 font-mono font-semibold text-gold-600 dark:text-gold-400">{p.priceRange}</td>
                          <td className="py-2.5 px-3">{p.durability}</td>
                          <td className="py-2.5 px-3">{p.warranty}</td>
                          <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400">{p.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </section>
        );
      case 'compare':
        return (
          <section key={i} dir="ltr" className={`${panel} overflow-x-auto`}>
            <h2 className={h2c}>{b.h2}</h2>
            <table className="w-full text-left text-sm mt-4 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  {b.headers.map((h) => (
                    <th key={h} className="py-2.5 px-3 text-slate-900 dark:text-white font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {b.rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, j) => (
                      <td key={j} className={`py-2.5 px-3 ${j === 0 ? 'font-semibold text-slate-500 dark:text-slate-400' : ''}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      case 'projects':
        if (!b.items.length) return null;
        return (
          <section key={i} className="space-y-4">
            <h2 className={h2c}>{b.h2}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {b.items.slice(0, 6).map((p) => (
                <article key={p.title} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900">
                  <img src={p.image} alt={`${p.title} — ${p.place}`} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="text-[11px] text-gold-600 dark:text-gold-400 font-semibold mt-0.5">
                      {p.place} · {p.area}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-3">{p.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      case 'section':
        return (
          <section key={i} className="max-w-3xl">
            <h2 className={h2c}>{b.h2}</h2>
            {b.paras?.map((p) => (
              <p key={p} className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mt-3">{p}</p>
            ))}
            {b.items && (
              <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-gold-500">
                {b.items.map((it) => (
                  <li key={it} className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">{it}</li>
                ))}
              </ul>
            )}
            {b.after?.map((p) => (
              <p key={p} className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mt-3">{p}</p>
            ))}
          </section>
        );
      case 'links':
        return (
          <section key={i} className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white">{b.h2}</h2>
            <div className="flex flex-wrap gap-2">
              {b.links.map(([href, label]) => (
                <a key={href} href={href} onClick={(e) => go(e, href)} className={chip}>
                  {label}
                </a>
              ))}
            </div>
          </section>
        );
    }
  };

  return (
    <div dir={t.rtl ? 'rtl' : undefined} lang={t.rtl ? 'ur' : undefined} className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
        <a href="/" onClick={(e) => go(e, '/')} className="hover:text-gold-600">Home</a>
        {t.breadcrumbParent && (
          <>
            <ChevronRight className="w-3 h-3" />
            <a href={t.breadcrumbParent[0]} onClick={(e) => go(e, t.breadcrumbParent![0])} className="hover:text-gold-600">
              {t.breadcrumbParent[1]}
            </a>
          </>
        )}
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-700 dark:text-slate-200 font-semibold">{t.label}</span>
      </nav>

      <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">{t.eyebrow}</span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">{t.h1}</h1>
          {t.article && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
              By the MTE engineering team · Updated{' '}
              <time dateTime={t.article.updated}>{new Date(t.article.updated + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>{' '}
              · {t.article.readMins} min read
            </p>
          )}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">{t.lead}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="button"
              onClick={openSurveyModal}
              className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" /> Book Free Site Survey
            </button>
            <a
              href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I need a quote: ${t.h1}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp {company.phone}
            </a>
          </div>
        </div>
        <img
          src={t.ogImage}
          alt={`${t.h1} — ${company.name}`}
          className="w-full aspect-[4/3] object-cover rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
          loading="lazy"
        />
      </header>

      {t.blocks.map(renderBlock)}

      {t.faqs.length > 0 && (
        <section className="space-y-4">
          <h2 className={h2c}>Frequently asked questions</h2>
          {t.faqs.map((f) => (
            <div key={f.question} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 p-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {f.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 pl-6">{f.answer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
