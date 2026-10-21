import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import { company } from '../data/siteData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  options?: string[];
  timestamp: string;
}

export const AiAssistant: React.FC<{ openSurveyModal?: () => void }> = ({ openSurveyModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Assalam-o-Alaikum! I am your MTE Tensile Architectural AI Consultant. How can I assist with your shading or steel structure project today?',
      options: [
        'Car Parking Shade Rates',
        'German Mehler vs Ferrari PVDF',
        'Book Free Laser Site Survey',
        'Industrial Factory Sheds'
      ],
      timestamp: 'Just now'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate intelligent engineering response
    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = '';
      let opts: string[] | undefined = undefined;

      if (lower.includes('rate') || lower.includes('cost') || lower.includes('price') || lower.includes('sq ft') || lower.includes('parking')) {
        reply = 'Our turnkey car parking shade rates in Pakistan range from:\n\n• HDPE Commercial Shade Net: PKR 350 – 520 / sq.ft (7–10 yrs lifespan)\n• German Mehler Valmex PVDF (900 GSM): PKR 680 – 950 / sq.ft (15-yr warranty, 100% waterproof)\n• French Serge Ferrari PVDF (1050 GSM): PKR 890 – 1,250 / sq.ft (20-yr warranty)\n\nAll rates include heavy-duty ASTM A53 steel pipes, hot-dip galvanizing, and on-site erection. Would you like a free laser measurement on your site?';
        opts = ['Book Free Laser Site Survey', 'WhatsApp Chief Engineer', 'Calculate Dimensions'];
      } else if (lower.includes('mehler') || lower.includes('ferrari') || lower.includes('fabric') || lower.includes('pvdf')) {
        reply = 'We exclusively import authentic European architectural membranes:\n\n1. German Mehler Valmex (900 GSM): Featuring a dual-sided PVDF lacquer that prevents dirt adhesion and repels 98% of solar UV radiation.\n2. French Serge Ferrari (1050 GSM): Built with patented Précontraint tension technology, offering zero dimensional stretch under 140+ km/h squall winds.\n\nBoth fabrics carry official 10 to 15-year factory warranties against UV degradation, discoloration, and water leakage.';
        opts = ['Car Parking Shade Rates', 'Book Free Laser Site Survey'];
      } else if (lower.includes('survey') || lower.includes('book') || lower.includes('visit') || lower.includes('free')) {
        reply = `We provide 100% FREE on-site laser surveys and custom 3D design elevations across Lahore (DHA, Bahria, Gulberg), Islamabad (All Sectors), Rawalpindi, and Karachi. Our senior structural engineer visits your location with fabric samples and laser meters.`;
        if (openSurveyModal) {
          openSurveyModal();
        }
        opts = ['WhatsApp Chief Engineer', 'Car Parking Shade Rates'];
      } else if (lower.includes('industrial') || lower.includes('warehouse') || lower.includes('factory') || lower.includes('shed')) {
        reply = 'We design and erect heavy-duty Pre-Engineered Steel Buildings (PEB), factory trusses, warehouse sheds, and logistics canopies. Engineered with hot-rolled structural steel, certified high-strength bolt assemblies, and anti-corrosive polyurethane industrial coatings.';
        opts = ['Book Free Laser Site Survey', 'WhatsApp Chief Engineer'];
      } else {
        reply = `Thank you for your inquiry regarding "${query}". At Muzzayan Tensile Engineering (MTE), we have executed over 100+ landmark projects across Pakistan with an unblemished 18-year engineering record. Would you like to speak directly with our Chief Engineer or book a complimentary site survey?`;
        opts = ['Book Free Laser Site Survey', 'WhatsApp Chief Engineer', 'Car Parking Shade Rates'];
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        options: opts,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Pill Trigger */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 dark:bg-navy-900/95 text-white hover:text-gold-400 border border-gold-500/40 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="font-heading font-bold text-xs tracking-wider">Tensile AI</span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 w-[92vw] sm:w-[390px] h-[520px] max-h-[80vh] bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-gold-500/30 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3.5 bg-slate-900 dark:bg-navy-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-bold flex items-center gap-1.5">
                  MTE Tensile Assistant
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[10px] text-slate-400">Engineering & Pricing Consultant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-gold-500 text-slate-950 font-medium rounded-tr-xs'
                      : 'bg-slate-100 dark:bg-navy-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-xs'
                  }`}
                >
                  {m.text}
                </div>

                {/* Quick Chips if available */}
                {m.options && m.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          if (opt === 'WhatsApp Chief Engineer') {
                            window.open(`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I am inquiring through Tensile AI on your website.`, '_blank');
                          } else if (opt === 'Book Free Laser Site Survey' && openSurveyModal) {
                            openSurveyModal();
                            setIsOpen(false);
                          } else {
                            handleSend(opt);
                          }
                        }}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-gold-500/20 dark:bg-navy-900 dark:hover:bg-gold-500/20 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                      >
                        {opt} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick WhatsApp Bar */}
          <div className="px-4 py-2 bg-slate-50 dark:bg-navy-900/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 flex items-center gap-1">
              <Phone className="w-3 h-3 text-gold-500" />
              Direct Helpline:
            </span>
            <a
              href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE!`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
            >
              0302 4001063 (WhatsApp)
            </a>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, fabrics, wind specs..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 outline-none"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 flex items-center justify-center shrink-0 transition-all font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
