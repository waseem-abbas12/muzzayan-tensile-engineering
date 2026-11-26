import React from 'react';
import { locations, company, solutions, projects } from '../data/siteData';
import {
  cityPath,
  serviceCityPath,
  serviceCityFaqs,
  SERVICE_CITY_DEFS,
  SERVICE_CITY_KEYS,
} from '../seo/routes';
import { MapPin, MessageCircle, Calendar, ChevronRight, Check, HelpCircle } from 'lucide-react';

interface ServiceCityPageProps {
  serviceKey: string;
  cityKey: string;
  setActivePage: (target: string) => void;
  openSurveyModal: () => void;
}

const specLabel = (k: string) =>
  k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

export const ServiceCityPage: React.FC<ServiceCityPageProps> = ({ serviceKey, cityKey, setActivePage, openSurveyModal }) => {
  const def = SERVICE_CITY_DEFS.find((d) => d.key === serviceKey) ?? SERVICE_CITY_DEFS[0];
  const sol = solutions.find((s) => s.slug === def.solutionSlug) ?? solutions[0];
  const city = locations[cityKey] ?? locations.lahore;
  const isIndustrial = def.key === 'industrial-sheds';
  const faqs = serviceCityFaqs(def.key, cityKey);

  const areas = isIndustrial
    ? [...city.serviceAreas.filter((a) => /industrial|estate|i-9|i-10|sundar/i.test(a)), ...city.serviceAreas.filter((a) => !/industrial|estate|i-9|i-10|sundar/i.test(a))]
    : city.serviceAreas;

  const cityProjects = [
    ...projects.filter((p) => p.city === city.name).map((p) => ({ title: p.title, image: p.image, location: city.name, area: p.area, description: p.description })),
    ...(city.localProjects ?? []).map((p) => ({ title: p.title, image: p.image, location: p.location, area: p.area, description: p.description })),
  ].slice(0, 6);

  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setActivePage(target);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
        <a href="/" onClick={(e) => go(e, '/')} className="hover:text-gold-600">Home</a>
        <ChevronRight className="w-3 h-3" />
        <a href={cityPath(cityKey)} onClick={(e) => go(e, cityPath(cityKey))} className="hover:text-gold-600">{city.name}</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-700 dark:text-slate-200 font-semibold">{def.name}</span>
      </nav>

      {/* Hero */}
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> {city.name}, {city.region}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">
            {def.name} in {city.name}
          </h1>
          <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-3">{sol.tagline}</p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {company.name} designs, fabricates and installs {sol.name.toLowerCase()} across {city.name}. {sol.desc}
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <button
              type="button"
              onClick={openSurveyModal}
              className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" /> Free Site Survey in {city.name}
            </button>
            <a
              href={`https://wa.me/${city.whatsapp}?text=Assalam-o-Alaikum MTE! I need a quote for ${def.name.toLowerCase()} in ${city.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp {city.phone}
            </a>
          </div>
        </div>
        <img
          src={def.ogImage}
          alt={`${def.name} by MTE in ${city.name}`}
          className="w-full aspect-[4/3] object-cover rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
          loading="lazy"
        />
      </header>

      {/* Features + specs */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">What you get</h2>
          <ul className="mt-4 space-y-2.5">
            {sol.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            <strong className="text-slate-700 dark:text-slate-200">Ideal for:</strong> {sol.idealFor}
          </p>
        </div>
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">Technical specifications</h2>
          <table className="w-full text-left text-sm mt-4">
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {Object.entries(sol.specs).map(([k, v]) => (
                <tr key={k}>
                  <th className="py-2.5 pr-4 font-semibold text-slate-500 dark:text-slate-400 align-top w-2/5">{specLabel(k)}</th>
                  <td className="py-2.5 text-slate-800 dark:text-slate-200">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {city.climateChallenge && !isIndustrial && (
            <>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-6">Engineered for {city.name}&apos;s climate</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{city.climateChallenge}</p>
            </>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
          {def.name} cost in {city.name}
        </h2>
        {isIndustrial ? (
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Industrial and warehouse shed prices depend on the covered area, clear span, eave height, crane loads and the
            roofing/cladding system (PPGI sheet or PU sandwich panels). After a free site survey in {city.name}, our engineers
            send a detailed quotation with steel tonnage and specifications. Call or WhatsApp {company.phoneFormatted}.
          </p>
        ) : (
          <>
            <p className="text-sm text-slate-700 dark:text-slate-300">Indicative installed rates per square foot in {city.name}:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Fabric</th>
                    <th className="py-3 px-4">Rate (PKR / sq ft)</th>
                    <th className="py-3 px-4">Lifespan</th>
                    <th className="py-3 px-4">Warranty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300">
                  {city.pricingGuide.map((p) => (
                    <tr key={p.material}>
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{p.material}</td>
                      <td className="py-3 px-4 font-mono font-semibold text-gold-600 dark:text-gold-400">{p.priceRange}</td>
                      <td className="py-3 px-4">{p.durability}</td>
                      <td className="py-3 px-4">{p.warranty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* Areas served */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
          Areas we serve in {city.name}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {areas.map((a) => (
            <li key={a} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" /> {a}
            </li>
          ))}
        </ul>
      </section>

      {/* Local projects */}
      {cityProjects.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
            Recent MTE projects in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityProjects.map((p) => (
              <article key={p.title} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900">
                <img src={p.image} alt={`${p.title} — ${p.location}`} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-[11px] text-gold-600 dark:text-gold-400 font-semibold mt-0.5">
                    {p.location} · {p.area}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-3">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
          {def.name} in {city.name}: FAQs
        </h2>
        {faqs.map((f) => (
          <div key={f.question} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 p-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /> {f.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 pl-6">{f.answer}</p>
          </div>
        ))}
      </section>

      {/* Related links */}
      <section className="space-y-3">
        <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white">Related</h2>
        <div className="flex flex-wrap gap-2">
          <a
            href={cityPath(cityKey)}
            onClick={(e) => go(e, cityPath(cityKey))}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50"
          >
            Car parking shades in {city.name}
          </a>
          {SERVICE_CITY_DEFS.filter((d) => d.key !== def.key).map((d) => (
            <a
              key={d.key}
              href={serviceCityPath(d.key, cityKey)}
              onClick={(e) => go(e, serviceCityPath(d.key, cityKey))}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50"
            >
              {d.name} in {city.name}
            </a>
          ))}
          {SERVICE_CITY_KEYS.filter((k) => k !== cityKey).map((k) => (
            <a
              key={k}
              href={serviceCityPath(def.key, k)}
              onClick={(e) => go(e, serviceCityPath(def.key, k))}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50"
            >
              {def.name} in {locations[k].name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
