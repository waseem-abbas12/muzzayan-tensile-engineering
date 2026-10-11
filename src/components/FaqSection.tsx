import React, { useState } from 'react';
import { faqCategories } from '../data/siteData';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory = faqCategories[activeCategoryIdx];

  const filteredFaqs = searchQuery.trim()
    ? faqCategories.flatMap((c) =>
        c.faqs.filter(
          (f) =>
            f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            f.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : currentCategory.faqs;

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-gold-500/20 transition-colors">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
          Knowledge Base & Technical Clarifications
        </span>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white mt-1">
          Frequently Asked Questions & Pricing Guide
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Everything you need to know about rates per sq.ft, PVDF vs HDPE lifespan, and society approvals in Pakistan.
        </p>

        {/* Search Input */}
        <div className="relative mt-6 max-w-md mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. price per sq ft, warranty, Mehler)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-navy-900/90 border border-slate-200 dark:border-slate-800 focus:border-gold-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Category Tabs */}
      {!searchQuery.trim() && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {faqCategories.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => {
                setActiveCategoryIdx(idx);
                setOpenFaqIdx(0);
              }}
              className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all border ${
                activeCategoryIdx === idx
                  ? 'bg-gold-500 text-slate-950 font-bold border-gold-400 shadow-sm'
                  : 'bg-white dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Accordion Items */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openFaqIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-navy-900/90 border-gold-500/50 shadow-sm dark:shadow-md'
                  : 'bg-white dark:bg-navy-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  {faq.question}
                </span>
                <span className="text-slate-400 shrink-0">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-gold-500" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 text-slate-500 text-xs">
            No matching questions found for "{searchQuery}". Please contact us on WhatsApp directly!
          </div>
        )}
      </div>
    </div>
  );
};
