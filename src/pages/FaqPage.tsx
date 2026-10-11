import React from 'react';
import { FaqSection } from '../components/FaqSection';
import { CostCalculator } from '../components/CostCalculator';
import { HelpCircle, MessageCircle, Phone, Calendar } from 'lucide-react';
import { company } from '../data/siteData';

interface FaqPageProps {
  openSurveyModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
          Clarity On Pricing, Materials & Logistics
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-2">
          Pricing Guide & Technical FAQs
        </h1>
        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          Get transparent answers regarding per-square-foot rates, society approvals in DHA and Bahria Town, European PVDF warranty terms, and project installation timelines.
        </p>
      </div>

      {/* Main FAQ Accordion */}
      <FaqSection />

      {/* Embedded Cost Calculator */}
      <div className="space-y-4">
        <div className="max-w-xl">
          <span className="text-xs uppercase font-bold tracking-wider text-gold-400">
            Interactive Budgeting
          </span>
          <h2 className="text-2xl font-heading font-bold text-white mt-1">
            Calculate Your Estimated Project Cost
          </h2>
        </div>
        <CostCalculator />
      </div>

      {/* Support Box */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Have a Specific Project Dimension or Tender?</h4>
          <p className="text-xs text-slate-300 mt-1">
            Send architectural blueprints, photos, or RFP tender requirements directly to our engineering desk.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <a
            href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I have a question regarding tensile shades.`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Hotline
          </a>
        </div>
      </div>
    </div>
  );
};
