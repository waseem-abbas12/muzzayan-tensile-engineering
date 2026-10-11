import React, { useState } from 'react';
import { locations, company } from '../data/siteData';
import { MapPin, Phone, MessageCircle, ShieldCheck, Check, Building2 } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const [activeCityKey, setActiveCityKey] = useState<string>('lahore');
  const city = locations[activeCityKey] || locations.lahore;

  const cityTabs = [
    { key: 'lahore', name: 'Lahore', region: 'Punjab (Head Office)' },
    { key: 'islamabad', name: 'Islamabad', region: 'Capital Territory' },
    { key: 'rawalpindi', name: 'Rawalpindi', region: 'Potohar Region' },
    { key: 'karachi', name: 'Karachi', region: 'Sindh (Coastal)' },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-gold-500/20 transition-colors">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
            Nationwide Footprint & Local Offices
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            Engineered Across Pakistan's Key Metropolitans
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Free on-site measurements and custom 3D surveys across Lahore, Islamabad, Rawalpindi & Karachi.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4" />
          Dedicated On-Site Engineering Teams
        </div>
      </div>

      {/* City Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {cityTabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActiveCityKey(t.key)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeCityKey === t.key
                ? 'bg-gold-500 text-slate-950 font-bold border-gold-400 shadow-md shadow-gold-500/20'
                : 'bg-white dark:bg-navy-900/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className="text-sm font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {t.name}
            </div>
            <div className={`text-[10px] mt-0.5 ${activeCityKey === t.key ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
              {t.region}
            </div>
          </button>
        ))}
      </div>

      {/* City Details Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 dark:bg-navy-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
        {/* Left Information */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-[11px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-widest block mb-1">
              {city.tagline}
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white">
              {city.h1}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
              {city.heroSub}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-200 dark:border-slate-800 text-xs">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase block">Projects Done</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{city.stats.projects}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase block">Field Experience</span>
              <strong className="text-sm font-bold text-slate-900 dark:text-white">{city.stats.experience}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase block">Warranty</span>
              <strong className="text-sm font-bold text-gold-600 dark:text-gold-400">{city.stats.warranty}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <span className="text-[10px] text-slate-500 uppercase block">Client Rating</span>
              <strong className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{city.stats.rating}</strong>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider block mb-2.5">
              Key Local Service Areas & Housing Societies:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {city.serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span className="truncate">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right CTA & Office Details */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xs">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase block mb-1">
              Local Office & Rapid Dispatch
            </span>
            <h5 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gold-500" />
              MTE {city.name} Branch
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              {city.address}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
              <div>Survey Availability: <strong className="text-emerald-600 dark:text-emerald-400">Monday – Saturday (Free)</strong></div>
              <div>Direct Dispatch Hotline: <strong className="text-slate-900 dark:text-white">{company.phoneFormatted}</strong></div>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={`https://wa.me/${city.whatsapp}?text=Assalam-o-Alaikum MTE! I am inquiring about tensile car parking shades in ${city.name}. Please book a free on-site survey.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Schedule Free Site Survey in {city.name}
            </a>
            <a
              href={`tel:${city.phone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              Call {city.name} Desk ({city.phone})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
