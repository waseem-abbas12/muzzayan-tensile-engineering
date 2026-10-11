import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Users, Building, MapPin } from 'lucide-react';

export const StatsCounterSection: React.FC = () => {
  const stats = [
    { value: "120+", label: "Projects Delivered", sub: "Commercial, residential & defence across Pakistan", icon: Building },
    { value: "18+", label: "Years Experience", sub: "Saudi Arabia & Pakistan structural engineering", icon: Award },
    { value: "5+", label: "Metropolitans Served", sub: "Lahore, Islamabad, Rawalpindi, Karachi, Multan", icon: MapPin },
    { value: "100%", label: "In-House Team", sub: "Design, CNC fabrication, galvanizing & installation", icon: Users },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-gold-500/40 transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold gold-gradient-text tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {s.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 max-w-[180px]">
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
