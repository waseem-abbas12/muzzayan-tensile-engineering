import React from 'react';
import { LocationsSection } from '../components/LocationsSection';
import { locations, company } from '../data/siteData';
import { ShieldCheck, MapPin, Phone, MessageCircle, Calendar } from 'lucide-react';

interface LocationsPageProps {
  openSurveyModal: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
          Local Footprint & Direct Survey
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Service Locations Across Pakistan
        </h1>
        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          MTE maintains active engineering teams and fabrication facilities serving Lahore, Islamabad, Rawalpindi, and Karachi, along with project capabilities in Faisalabad, Multan, Sialkot, and Peshawar.
        </p>
      </div>

      {/* Main Interactive Locations Switcher */}
      <LocationsSection />

      {/* Detailed Pricing Matrix By Material */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
            Transparent Pricing Matrix
          </span>
          <h3 className="text-2xl font-heading font-bold text-white mt-1">
            Current Rate Estimates Per Square Foot (Pakistan Market)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Rates include structural steel fabrication, high-grade fabric, primer/paint finish, and on-site tensioning erection.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Material Specification</th>
                <th className="py-3 px-4">Estimated Rate (PKR / sq.ft)</th>
                <th className="py-3 px-4">Lifespan</th>
                <th className="py-3 px-4">Warranty</th>
                <th className="py-3 px-4">Ideal Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {locations.lahore.pricingGuide.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{item.material}</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-gold-400">{item.priceRange}</td>
                  <td className="py-3.5 px-4">{item.durability}</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">{item.warranty}</td>
                  <td className="py-3.5 px-4 text-slate-400">{item.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
