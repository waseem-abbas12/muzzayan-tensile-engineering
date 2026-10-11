import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { company } from '../data/siteData';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Quick Prompt */}
      {isOpen && (
        <div className="mb-3 w-72 bg-navy-900 border border-gold-500/30 rounded-2xl p-4 shadow-2xl animate-fadeIn text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <strong className="text-white text-xs">MTE Engineering Desk</strong>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-slate-300 mt-2 leading-relaxed text-[11px]">
            Assalam-o-Alaikum! Looking for cantilever car parking shades or industrial sheds in Lahore, Islamabad or Karachi?
          </p>
          <a
            href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I am inquiring about tensile shades.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-navy-900/90 text-white text-xs font-semibold border border-gold-500/30 shadow-lg backdrop-blur-md">
            Chat with Engineer
          </span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all focus:outline-none"
          title="WhatsApp Support"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};
