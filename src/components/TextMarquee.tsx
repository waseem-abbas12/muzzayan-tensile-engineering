import React from 'react';

export const TextMarquee: React.FC = () => {
  const items = [
    { text: "CANTILEVER CAR PARKING SHADES", highlight: true },
    { text: "GERMAN MEHLER 900 GSM PVDF", highlight: false },
    { text: "PRE-ENGINEERED PEB STEEL SHEDS", highlight: true },
    { text: "15-YEAR ENGINEERED WARRANTY", highlight: false },
    { text: "ARCHITECTURAL TENSILE MEMBRANE", highlight: true },
    { text: "FREE LASER ON-SITE SURVEY", highlight: false },
    { text: "DHA & BAHRIA TOWN APPROVED", highlight: true },
    { text: "FRENCH SERGE FERRARI PVDF", highlight: false },
    { text: "140+ KM/H WIND LOAD RESISTANCE", highlight: true },
    { text: "ZERO FRONT-COLUMN CLEARANCE", highlight: false },
  ];

  const fullList = [...items, ...items, ...items];

  return (
    <div className="py-3 bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 text-navy-950 overflow-hidden shadow-lg select-none font-heading font-extrabold text-xs tracking-wider">
      <div className="flex w-max gap-8 animate-marquee-fast">
        {fullList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0">
            <svg className="w-3.5 h-3.5 fill-navy-950 shrink-0" viewBox="0 0 60 60">
              <polygon points="30 0, 38 22, 60 30, 38 38, 30 60, 22 38, 0 30, 22 22" />
            </svg>
            <span className={item.highlight ? "text-navy-950 drop-shadow-sm" : "text-navy-900/80"}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
