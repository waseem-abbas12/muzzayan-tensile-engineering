import React from 'react';
import { Award, Building, Users, MapPin } from 'lucide-react';

export const StatsCounterSection: React.FC = () => {
  const stats = [
    { value: "120+", label: "Projects Delivered", sub: "Commercial, residential & defence across Pakistan", icon: Building },
    { value: "18+", label: "Years Experience", sub: "Saudi Arabia & Pakistan structural engineering", icon: Award },
    { value: "5+", label: "Metropolitans Served", sub: "Lahore, Islamabad, Rawalpindi, Karachi, Multan", icon: MapPin },
    { value: "100%", label: "In-House Team", sub: "Design, CNC fabrication, galvanizing & installation", icon: Users },
  ];

  return (
    <section className="py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel reticle-corner rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 transition-all text-center flex flex-col items-center justify-center group shadow-xs dark:shadow-xl"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-3xl sm:text-5xl font-heading font-black gold-gradient-text tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1.5 uppercase tracking-wider">
                  {s.label}
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] leading-relaxed">
                  {s.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
