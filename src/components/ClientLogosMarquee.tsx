import React from 'react';

export const ClientLogosMarquee: React.FC = () => {
  const clients = [
    {
      id: 'dha',
      name: 'DHA Defence Housing Authority',
      city: 'Lahore · Karachi · Islamabad',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dhaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
          </defs>
          <path d="M30 4 L52 14 L52 36 C52 48 42 55 30 58 C18 55 8 48 8 36 L8 14 Z" fill="url(#dhaGrad)" stroke="#D4AF37" strokeWidth="2.5" />
          <path d="M30 9 L48 18 L48 35 C48 45 40 50 30 53 C20 50 12 45 12 35 L12 18 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
          <line x1="20" y1="40" x2="40" y2="24" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="40" y1="40" x2="20" y2="24" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="30" cy="21" r="5" fill="#D4AF37" />
          <rect x="17" y="42" width="26" height="9" rx="3" fill="#D4AF37" />
          <text x="30" y="48.5" dominantBaseline="middle" textAnchor="middle" fill="#0B132B" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">DHA</text>
        </svg>
      )
    },
    {
      id: 'bahria',
      name: 'Bahria Town Communities',
      city: 'Lahore · Rawalpindi · Karachi',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="27" fill="#002B49" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="30" cy="30" r="23.5" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <polygon points="23,19 25,14 30,17 35,14 37,19" fill="#F59E0B" />
          <path d="M25 24 L35 24 L35 34 C35 38 30 41 30 41 C30 41 25 38 25 34 Z" fill="#D4AF37" />
          <text x="30" y="32" dominantBaseline="middle" textAnchor="middle" fill="#002B49" fontSize="7" fontWeight="900" fontFamily="serif">BT</text>
          <text x="30" y="49" dominantBaseline="middle" textAnchor="middle" fill="#F8FAFC" fontSize="5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.6">BAHRIA TOWN</text>
        </svg>
      )
    },
    {
      id: 'bahria_orchard',
      name: 'Bahria Orchard Lahore',
      city: 'Raiwind Road Lahore',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#0F4C2E" />
          <rect x="2" y="2" width="56" height="56" rx="12" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.7" />
          <circle cx="30" cy="22" r="12" fill="#15803D" opacity="0.7" />
          <circle cx="30" cy="18" r="9" fill="#22C55E" />
          <circle cx="26" cy="17" r="2" fill="#FBBF24" />
          <circle cx="34" cy="17" r="2" fill="#FBBF24" />
          <path d="M28 27 L28 38 L32 38 L32 27 Z" fill="#D4AF37" />
          <text x="30" y="49" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">ORCHARD</text>
        </svg>
      )
    },
    {
      id: 'park_view',
      name: 'Park View City',
      city: 'Islamabad & Lahore',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#064E3B" />
          <rect x="2" y="2" width="56" height="56" rx="12" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
          <polygon points="30,8 48,22 30,36 12,22" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
          <text x="30" y="44" dominantBaseline="middle" textAnchor="middle" fill="#D4AF37" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">PARK VIEW</text>
          <text x="30" y="52" dominantBaseline="middle" textAnchor="middle" fill="#F8FAFC" fontSize="5" fontWeight="600" fontFamily="sans-serif">CITY</text>
        </svg>
      )
    },
    {
      id: 'paf',
      name: 'PAF Defence Installations',
      city: 'Lahore & Rawalpindi Bases',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="27" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
          <polygon points="30,10 44,40 30,34 16,40" fill="#38BDF8" />
          <circle cx="30" cy="30" r="4" fill="#F59E0B" />
          <text x="30" y="50" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">PAF BASE</text>
        </svg>
      )
    },
    {
      id: 'valencia',
      name: 'Valencia Town Housing Society',
      city: 'Pine Avenue Lahore',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#4A1D96" />
          <rect x="2" y="2" width="56" height="56" rx="12" fill="none" stroke="#FDE047" strokeWidth="1.2" strokeOpacity="0.8" />
          <path d="M14 40 L14 18 L46 18 L46 40" fill="none" stroke="#FDE047" strokeWidth="2.2" />
          <polygon points="12,18 30,11 48,18" fill="#FDE047" />
          <text x="30" y="49.5" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">VALENCIA</text>
        </svg>
      )
    },
    {
      id: 'radio_pakistan',
      name: 'Radio Pakistan Broadcasting House',
      city: 'Islamabad Headquarters',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#042F2E" />
          <circle cx="30" cy="24" r="14" fill="none" stroke="#14B8A6" strokeWidth="2" />
          <circle cx="30" cy="24" r="7" fill="#14B8A6" />
          <line x1="30" y1="24" x2="30" y2="44" stroke="#D4AF37" strokeWidth="2.5" />
          <text x="30" y="51" dominantBaseline="middle" textAnchor="middle" fill="#F0FDFA" fontSize="5" fontWeight="800" fontFamily="sans-serif">RADIO PAKISTAN</text>
        </svg>
      )
    },
    {
      id: 'central_park',
      name: 'Central Park Housing Scheme',
      city: 'Ferozepur Road Lahore',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="27" fill="#14532D" stroke="#86EFAC" strokeWidth="2" />
          <path d="M30 14 L30 8 M20 17 L15 13 M40 17 L45 13" stroke="#FDE047" strokeWidth="1.8" />
          <path d="M30 16 C22 16 17 21 17 27 C17 31 20 34 24 35 L26 42 L34 42 L36 35 C40 34 43 31 43 27 C43 21 38 16 30 16 Z" fill="#22C55E" />
          <rect x="12" y="44" width="36" height="8" rx="3" fill="#FBBF24" />
          <text x="30" y="49.5" dominantBaseline="middle" textAnchor="middle" fill="#14532D" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">CENTRAL PARK</text>
        </svg>
      )
    },
    {
      id: 'hamid_latif',
      name: 'Hamid Latif Hospital',
      city: 'Garden Town Lahore',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#1E293B" />
          <rect x="25" y="12" width="10" height="26" rx="2" fill="#EF4444" />
          <rect x="17" y="20" width="26" height="10" rx="2" fill="#EF4444" />
          <text x="30" y="48.5" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="800" fontFamily="sans-serif">HAMID LATIF</text>
        </svg>
      )
    },
    {
      id: 'soan_garden',
      name: 'Soan Gardens & Potohar',
      city: 'Islamabad Highway',
      icon: (
        <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="14" fill="#0C4A6E" />
          <polygon points="8,34 24,18 38,34" fill="#0284C7" opacity="0.8" />
          <polygon points="26,34 40,20 54,34" fill="#0369A1" />
          <circle cx="30" cy="18" r="4" fill="#FBBF24" />
          <text x="30" y="50" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="5.8" fontWeight="800" fontFamily="sans-serif">SOAN GARDEN</text>
        </svg>
      )
    }
  ];

  // Duplicate for smooth infinite CSS marquee loop
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 border-y border-gold-500/15 bg-gradient-to-r from-navy-950 via-slate-900/60 to-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400/90 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-gold-500/40" />
          Trusted By Pakistan's Premier Housing Societies, Defence & Corporate Landmarks
          <span className="w-8 h-[1px] bg-gold-500/40" />
        </span>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeList.map((c, idx) => (
            <div
              key={`${c.id}-${idx}`}
              className="flex items-center gap-3.5 py-3 px-5 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-gold-500/50 shadow-md backdrop-blur-md transition-all group shrink-0"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                {c.icon}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white group-hover:text-gold-400 transition-colors">
                  {c.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {c.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
