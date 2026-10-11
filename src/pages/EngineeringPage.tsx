import React from 'react';
import { FabricInspector } from '../components/FabricInspector';
import { company } from '../data/siteData';
import { ShieldCheck, Wind, Flame, Wrench, CheckCircle2, Award, FileText } from 'lucide-react';

interface EngineeringPageProps {
  openSurveyModal: () => void;
}

export const EngineeringPage: React.FC<EngineeringPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
          Uncompromising Material Science
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">
          Structural Engineering & Membrane Standards
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          At Muzzayan Tensile Engineering (MTE), every structure is treated as an engineered life-safety asset. We calculate tension prestress, steel deflection, and aerodynamic wind uplift in strict compliance with international building codes.
        </p>
      </div>

      {/* Materials Inspector */}
      <FabricInspector />

      {/* Structural Steel & Fabrication Standards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Heavy-Gauge Steel Framing</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            We exclusively use seamless ASTM A53 Grade B and MS circular hollow sections (CHS). Wall thicknesses range from 4.0mm to 8.2mm, preventing catastrophic bending or structural sag over decades.
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
            <li>• Ultrasonic weld defect testing</li>
            <li>• Gusset & base-plate finite element stress checks</li>
            <li>• High-tensile Grade 8.8 structural bolts</li>
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <Wind className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Aerodynamic Wind Design (140+ km/h)</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Pakistani weather alternates between scorching heat and violent dust storms. Our 3D non-linear FEA models simulate turbulent wind gusts up to 40 m/s (144 km/h) to guarantee zero post-failure.
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
            <li>• Compliant with Pakistan Building Code (PBC)</li>
            <li>• BS 6399 wind load calculations</li>
            <li>• Prestress balance preventing fabric ponding</li>
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dual Anti-Corrosion Defense</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            To combat humidity in Lahore, monsoon downpours in Potohar, and aggressive saline coastal air in Karachi, all structural steel undergoes hot-dip galvanization followed by a 2-pack PU polyurethane finish.
          </p>
          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200 dark:border-slate-800">
            <li>• 85+ microns zinc hot-dip coating (BS EN ISO 1461)</li>
            <li>• Epoxy zinc phosphate primer</li>
            <li>• UV-stable polyurethane automotive-grade gloss</li>
          </ul>
        </div>
      </div>

      {/* Society Approvals Banner */}
      <div className="glass-panel rounded-2xl p-8 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-widest">
            Regulatory Compliance
          </span>
          <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mt-1">
            DHA, Bahria Town & CDA Approved Specifications
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
            We provide stamped structural calculation sheets, foundation anchorage details, and 3D elevations required by Defence Housing Authority (Lahore, Karachi, Islamabad), Bahria Town, and Capital Development Authority (CDA).
          </p>
        </div>
        <button
          type="button"
          onClick={openSurveyModal}
          className="shrink-0 py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-lg transition-all"
        >
          Request Engineering Vetting
        </button>
      </div>
    </div>
  );
};
