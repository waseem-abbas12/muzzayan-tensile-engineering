import React from 'react';
import { LocationsSection } from '../components/LocationsSection';
import { locations, company, solutions } from '../data/siteData';
import { cityPath, CITY_KEYS, SERVICE_CITY_DEFS, SERVICE_CITY_KEYS, serviceCityPath, cityFaqs } from '../seo/routes';
import { MapPin, MessageCircle, Calendar, ChevronRight, CloudSun, ShieldCheck, HelpCircle } from 'lucide-react';

interface CityPageProps {
  cityKey: string;
  setActivePage: (target: string) => void;
  openSurveyModal: () => void;
}

export const CityPage: React.FC<CityPageProps> = ({ cityKey, setActivePage, openSurveyModal }) => {
  const city = locations[cityKey] ?? locations.lahore;
  const minPrice = (range: string) => Number(range.replace(/,/g, '').match(/\d+/)?.[0] ?? 0);
  const byPrice = [...city.pricingGuide].sort((a, b) => minPrice(a.priceRange) - minPrice(b.priceRange));
  const cheapest = byPrice[0];
  const premium = byPrice[byPrice.length - 1];
  const popular = byPrice[1] ?? cheapest;

  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setActivePage(target);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
        <a href="/" onClick={(e) => go(e, '/')} className="hover:text-gold-600">Home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/locations" onClick={(e) => go(e, '/locations')} className="hover:text-gold-600">Locations</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-700 dark:text-slate-200 font-semibold">{city.name}</span>
      </nav>

      {/* Header */}
      <header className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> {city.name}, {city.region}
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">
          {city.h1}
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{city.heroSub}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            type="button"
            onClick={openSurveyModal}
            className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" /> Book Free Site Survey in {city.name}
          </button>
          <a
            href={`https://wa.me/${city.whatsapp}?text=Assalam-o-Alaikum MTE! I need a quote for a shade structure in ${city.name}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp {city.phone}
          </a>
        </div>
      </header>

      {/* Direct answer block (answer-engine friendly) */}
      <section className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-3">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
          Car parking shade prices in {city.name} at a glance
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          In {city.name}, an installed car parking shade or tensile canopy from {company.name} typically costs{' '}
          <strong>{cheapest.priceRange}</strong> with {cheapest.material},{' '}
          <strong>{popular.priceRange}</strong> with {popular.material}, and up to <strong>{premium.priceRange}</strong> for{' '}
          {premium.material}. The final price depends on span, number of car bays, steel specification and site
          conditions, and is confirmed after a free on-site survey anywhere in {city.name}.
        </p>
      </section>

      {/* City details, service areas, local projects */}
      <LocationsSection initialCity={cityKey} onCitySelect={(key) => setActivePage(cityPath(key))} />

      {/* Local climate + why choose MTE in this city */}
      {(city.climateChallenge || city.whyChoosePoints) && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {city.climateChallenge && (
            <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CloudSun className="w-5 h-5 text-gold-500" /> Built for {city.name}&apos;s Weather
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-3">{city.climateChallenge}</p>
            </div>
          )}
          {city.whyChoosePoints && (
            <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-500" /> Why {city.name} Clients Choose MTE
              </h2>
              <ul className="mt-3 space-y-3">
                {city.whyChoosePoints.map((p) => (
                  <li key={p.title}>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{p.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Pricing table */}
      <section className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider">
            {city.name} Price Guide
          </span>
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            Tensile Shade Rates per Square Foot in {city.name}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Rates include structural steel fabrication, fabric, primer/paint finish and on-site tensioning.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Fabric</th>
                <th className="py-3 px-4">Rate (PKR / sq ft)</th>
                <th className="py-3 px-4">Lifespan</th>
                <th className="py-3 px-4">Warranty</th>
                <th className="py-3 px-4">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300">
              {city.pricingGuide.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{item.material}</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-gold-600 dark:text-gold-400">{item.priceRange}</td>
                  <td className="py-3.5 px-4">{item.durability}</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">{item.warranty}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{item.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Services in this city */}
      <section className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
          Our Shade & Steel Structure Services in {city.name}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s) => (
            <li key={s.slug}>
              <a
                href={`/solutions#${s.slug}`}
                onClick={(e) => go(e, 'solutions')}
                className="block h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 p-4 hover:border-gold-500/50 transition-colors"
              >
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  {s.name} in {city.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-3">{s.desc}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Dedicated service pages for priority cities */}
      {(SERVICE_CITY_KEYS as readonly string[]).includes(cityKey) && (
        <section className="space-y-3">
          <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white">More {city.name} services</h2>
          <div className="flex flex-wrap gap-2">
            {SERVICE_CITY_DEFS.map((d) => (
              <a
                key={d.key}
                href={serviceCityPath(d.key, cityKey)}
                onClick={(e) => go(e, serviceCityPath(d.key, cityKey))}
                className="px-4 py-2 rounded-xl border border-gold-500/40 bg-gold-500/10 text-xs font-bold text-gold-700 dark:text-gold-400 hover:bg-gold-500/20"
              >
                {d.name} in {city.name} →
              </a>
            ))}
          </div>
        </section>
      )}

      {/* City FAQs (visible text matches FAQPage schema) */}
      {cityFaqs(cityKey).length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
            {city.name} FAQs: Car Parking Shades & Tensile Structures
          </h2>
          <div className="space-y-3">
            {cityFaqs(cityKey).map((f) => (
              <details
                key={f.question}
                open
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 p-5 group"
              >
                <summary className="cursor-pointer list-none flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{f.question}</h3>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5 pl-6">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Other cities */}
      <section className="space-y-3">
        <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white">We also serve</h2>
        <div className="flex flex-wrap gap-2">
          {CITY_KEYS.filter((k) => k !== cityKey).map((k) => (
            <a
              key={k}
              href={cityPath(k)}
              onClick={(e) => go(e, cityPath(k))}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-navy-900/60 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-gold-500/50"
            >
              Car parking shades in {locations[k].name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
