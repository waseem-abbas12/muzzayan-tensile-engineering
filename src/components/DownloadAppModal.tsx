import React from 'react';
import { X, Smartphone, CheckCircle, Download, Share, PlusSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  openSurveyModal?: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({
  isOpen,
  onClose,
  openSurveyModal,
}) => {
  const { canInstall, isInstalled, isIos, isAndroid, promptInstall } = usePWAInstall();

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (canInstall) {
      const outcome = await promptInstall();
      if (outcome === 'accepted') {
        onClose();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold-500/30 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Band */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-[#102331] text-white p-6 relative border-b border-gold-500/20">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 via-amber-500 to-gold-600 p-[2px] shadow-lg shrink-0">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gold-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 22 22 22" />
                  <path d="m12 2 5 20" />
                  <path d="m12 2-5 20" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 text-[10px] font-bold uppercase tracking-wider mb-1 border border-gold-500/30">
                <Smartphone className="w-3 h-3" />
                Official Mobile App
              </div>
              <h3 className="text-xl font-heading font-extrabold text-white">
                MTE Tensile Engineering
              </h3>
              <p className="text-xs text-slate-300">
                Install directly on your phone · Works Offline
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-slate-700 dark:text-slate-200">
          {/* Status if installed */}
          {isInstalled && (
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <strong>ایپ پہلے سے انسٹال ہے (App is Installed)</strong>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                  You are already running the official MTE mobile application.
                </p>
              </div>
            </div>
          )}

          {/* Key Advantages */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  1-Tap Instant Access
                </strong>
                <span className="text-slate-500 dark:text-slate-400 text-xs">
                  Adds MTE directly to your home screen like any Android/iPhone app with zero storage waste.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  Offline Portfolio & Specs
                </strong>
                <span className="text-slate-500 dark:text-slate-400 text-xs">
                  Browse 100+ cantilever parking sheds and structural specs anytime, even without an active internet connection.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  Instant Site Survey Booking
                </strong>
                <span className="text-slate-500 dark:text-slate-400 text-xs">
                  Direct connection with Chief Structural Engineer via integrated WhatsApp hotline.
                </span>
              </div>
            </div>
          </div>

          {/* Action / Instructions depending on platform */}
          {canInstall ? (
            <button
              type="button"
              onClick={handleInstallClick}
              className="w-full py-4 px-6 rounded-2xl gold-btn text-sm font-bold flex items-center justify-center gap-2 transform active:scale-98 shadow-xl"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>Download & Install App Now (ایپ انسٹال کریں)</span>
            </button>
          ) : isIos ? (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Share className="w-4 h-4 text-blue-500" />
                How to Install on iPhone / iPad (Safari):
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                <li>
                  Tap the <strong className="text-slate-900 dark:text-white">Share button</strong> (square icon with up arrow ⎋) at the bottom of Safari.
                </li>
                <li>
                  Scroll down and tap <strong className="text-slate-900 dark:text-white">"Add to Home Screen" ⊞</strong>.
                </li>
                <li>
                  Tap <strong className="text-slate-900 dark:text-white">Add</strong> on the top-right. MTE Tensile icon will appear on your phone!
                </li>
              </ol>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <PlusSquare className="w-4 h-4 text-emerald-500" />
                Android & Chrome Quick 1-Tap Install:
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                Tap your browser menu <strong className="text-slate-900 dark:text-white">(⋮ 3 dots)</strong> at the top right of your screen and select <strong className="text-slate-900 dark:text-white">"Install app"</strong> or <strong className="text-slate-900 dark:text-white">"Add to Home screen"</strong>.
              </p>
            </div>
          )}

          {/* Quick survey fallback */}
          {openSurveyModal && (
            <button
              type="button"
              onClick={() => {
                onClose();
                openSurveyModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Need an Instant Quote? Book Free Site Survey</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
