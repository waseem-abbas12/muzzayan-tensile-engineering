import React, { useState } from 'react';
import { Calculator as CalcIcon, Send, Shield, Sparkles, Ruler, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/siteData';

interface FabricOption {
  id: string;
  name: string;
  origin: string;
  gsm: string;
  ratePerSqFt: number;
  warranty: string;
  lifespan: string;
  desc: string;
  recommended?: boolean;
}

interface StructureOption {
  id: string;
  name: string;
  multiplier: number;
  defaultLengthFt: number;
  defaultWidthFt: number;
  desc: string;
}

const FABRICS: FabricOption[] = [
  {
    id: 'german_pvdf_900',
    name: 'German Mehler Valmex PVDF (900 GSM)',
    origin: 'Germany',
    gsm: '900 GSM',
    ratePerSqFt: 680,
    warranty: '15 Years',
    lifespan: '20–25 Years',
    desc: 'Premium German tensile fabric with self-cleaning PVDF lacquer and UV deflection.',
    recommended: true
  },
  {
    id: 'french_ferrari_1050',
    name: 'French Serge Ferrari PVDF (1050 GSM)',
    origin: 'France',
    gsm: '1050 GSM',
    ratePerSqFt: 890,
    warranty: '20 Years',
    lifespan: '25–30 Years',
    desc: 'Heavy-duty Précontraint architectural membrane for extreme wind and coastal storm stability.'
  },
  {
    id: 'ptfe_glass',
    name: 'Architectural PTFE / Woven Glass Fibre',
    origin: 'Japan / Germany',
    gsm: '1250 GSM',
    ratePerSqFt: 1650,
    warranty: '25 Years',
    lifespan: '35+ Years',
    desc: 'Permanent Class A1 non-combustible landmark membrane with diffused natural daylight.'
  },
  {
    id: 'commercial_hdpe',
    name: 'Heavy-Duty UV Knitted HDPE Shade Cloth',
    origin: 'Korea / UAE',
    gsm: '340 GSM',
    ratePerSqFt: 340,
    warranty: '8 Years',
    lifespan: '10–12 Years',
    desc: '95% shade density, micro-perforated breathable mesh for rapid air circulation.'
  },
  {
    id: 'korean_pvdf_750',
    name: 'Korean Commercial PVDF Membrane (750 GSM)',
    origin: 'South Korea',
    gsm: '750 GSM',
    ratePerSqFt: 490,
    warranty: '10 Years',
    lifespan: '12–15 Years',
    desc: 'Economical 100% waterproof lacquer membrane for residential car porches and plazas.'
  }
];

const STRUCTURES: StructureOption[] = [
  {
    id: 'cantilever_car',
    name: 'Cantilever Car Parking Shade (Single / Double Bay)',
    multiplier: 1.0,
    defaultLengthFt: 20,
    defaultWidthFt: 18,
    desc: 'Zero front column obstruction. Unhindered turning radiuses for SUVs, sedans and luxury fleets.'
  },
  {
    id: 'conical_umbrella',
    name: 'Conical Gazebo / High-Peak Umbrella Canopy',
    multiplier: 1.15,
    defaultLengthFt: 16,
    defaultWidthFt: 16,
    desc: 'Central mast cone structure, ideal for courtyard dining, rooftop terraces, cafes and pool pavilions.'
  },
  {
    id: 'hypar_sail',
    name: 'Hyperbolic Paraboloid (Hypar) Tension Sail',
    multiplier: 1.20,
    defaultLengthFt: 22,
    defaultWidthFt: 16,
    desc: 'Sculptural 3D twisted surface with opposing curvatures. Spectacular modern architectural visual.'
  },
  {
    id: 'covered_walkway',
    name: 'Curved Arch Covered Walkway Canopy',
    multiplier: 1.10,
    defaultLengthFt: 40,
    defaultWidthFt: 8,
    desc: 'Linear continuous covered canopy with integrated rainwater drainage channels for hospital/hotel corridors.'
  },
  {
    id: 'rooftop_pergola',
    name: 'Rooftop / Terrace Tensile Pergola',
    multiplier: 1.12,
    defaultLengthFt: 20,
    defaultWidthFt: 15,
    desc: 'High wind-load rated roof frame with chemical anchor tie-ins to concrete slab.'
  },
  {
    id: 'industrial_shed',
    name: 'Industrial PEB Steel Structure Shed / Warehouse',
    multiplier: 0.95,
    defaultLengthFt: 60,
    defaultWidthFt: 30,
    desc: 'Large clear-span structural steel truss coverage with lightweight tensioned fabric roof.'
  }
];

export const CostCalculator: React.FC<{ openSurveyModal?: () => void }> = ({ openSurveyModal }) => {
  const [selectedStructureId, setSelectedStructureId] = useState<string>('cantilever_car');
  const [selectedFabricId, setSelectedFabricId] = useState<string>('german_pvdf_900');
  const [lengthFt, setLengthFt] = useState<number>(20);
  const [widthFt, setWidthFt] = useState<number>(18);
  const [selectedCity, setSelectedCity] = useState<string>('Lahore');

  const selectedStructure = STRUCTURES.find(s => s.id === selectedStructureId) || STRUCTURES[0];
  const selectedFabric = FABRICS.find(f => f.id === selectedFabricId) || FABRICS[0];

  const areaSqFt = Math.max(50, lengthFt * widthFt);
  const effectiveRate = Math.round(selectedFabric.ratePerSqFt * selectedStructure.multiplier);
  const totalEstimatedPkr = Math.round(areaSqFt * effectiveRate);

  const handleStructureChange = (id: string) => {
    setSelectedStructureId(id);
    const s = STRUCTURES.find(x => x.id === id);
    if (s) {
      setLengthFt(s.defaultLengthFt);
      setWidthFt(s.defaultWidthFt);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Assalam-o-Alaikum MTE!
I calculated an estimate on your website calculator:
• Structure: ${selectedStructure.name}
• Fabric: ${selectedFabric.name} (${selectedFabric.gsm})
• Dimensions: ${lengthFt} ft x ${widthFt} ft (${areaSqFt.toLocaleString()} sq.ft)
• City: ${selectedCity}
• Estimated Cost: PKR ${totalEstimatedPkr.toLocaleString()}

Please confirm this estimate and schedule a free laser survey.`;
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="calculator" className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-gold-500/25 shadow-2xl transition-all">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <CalcIcon className="w-3.5 h-3.5" />
            Turnkey Turnout Rate Estimator
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Instant Tensile Shade & Steel Shed Cost Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            Real-time turnkey pricing including structural steel fabrication, high-grade imported membrane, primer/paint finish, and on-site tensioning erection across Pakistan.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 self-start md:self-auto">
          <Shield className="w-3.5 h-3.5" />
          10–15 Year Warranty Included
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Structure */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
              1. Select Structure Architecture:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STRUCTURES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStructureChange(s.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedStructureId === s.id
                      ? 'bg-gold-500/15 border-gold-500 text-slate-950 dark:text-white font-semibold ring-1 ring-gold-500'
                      : 'bg-white dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>{s.name}</span>
                    {selectedStructureId === s.id && <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {s.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Dimensions */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
              2. Enter Dimensions (Feet):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Length (Feet)</span>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="number"
                    min="10"
                    max="300"
                    value={lengthFt}
                    onChange={(e) => setLengthFt(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full text-base font-bold font-mono bg-transparent text-slate-900 dark:text-white outline-none"
                  />
                  <span className="text-xs text-slate-400 font-mono">ft</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Width (Feet)</span>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="number"
                    min="8"
                    max="150"
                    value={widthFt}
                    onChange={(e) => setWidthFt(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full text-base font-bold font-mono bg-transparent text-slate-900 dark:text-white outline-none"
                  />
                  <span className="text-xs text-slate-400 font-mono">ft</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 flex flex-col justify-center">
                <span className="text-[10px] text-gold-700 dark:text-gold-400 uppercase font-mono font-bold block">Total Area</span>
                <span className="text-base font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                  {areaSqFt.toLocaleString()} <span className="text-xs font-normal text-slate-500">sq.ft</span>
                </span>
              </div>
            </div>
          </div>

          {/* Step 3: Fabric Membrane */}
          <div>
            <label className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
              3. Select Tensile Fabric Specification:
            </label>
            <div className="space-y-2">
              {FABRICS.map((f) => (
                <div
                  key={f.id}
                  onClick={() => setSelectedFabricId(f.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    selectedFabricId === f.id
                      ? 'bg-gold-500/15 border-gold-500 text-slate-950 dark:text-white ring-1 ring-gold-500'
                      : 'bg-white dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      selectedFabricId === f.id ? 'border-gold-500 bg-gold-500' : 'border-slate-400'
                    }`}>
                      {selectedFabricId === f.id && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold flex items-center gap-2">
                        <span>{f.name}</span>
                        {f.recommended && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold-500 text-slate-950 font-bold uppercase">
                            Best Seller
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {f.origin} · {f.warranty} Warranty · {f.lifespan} Lifespan
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold font-mono text-gold-600 dark:text-gold-400">
                      PKR {f.ratePerSqFt}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-mono">/ sq.ft</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output HUD */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-navy-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 block mb-1">
              Estimated Investment Breakdown
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              Turnkey Project Quotation
            </h3>
            
            {/* City Selector */}
            <div className="mt-4">
              <label className="text-[11px] text-slate-500 font-medium block mb-1.5">Project Location / City:</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none"
              >
                <option value="Lahore">Lahore (DHA, Bahria Town, Gulberg, Lake City)</option>
                <option value="Islamabad">Islamabad (F/G/E Sectors, Blue Area, Bahria, DHA)</option>
                <option value="Rawalpindi">Rawalpindi (Saddar, Cantt, Bahria Phase 1–8)</option>
                <option value="Karachi">Karachi (DHA, Clifton, SITE, Korangi)</option>
                <option value="Faisalabad / Multan">Faisalabad / Multan / Sialkot</option>
              </select>
            </div>

            {/* Calculations List */}
            <div className="mt-6 space-y-3 text-xs border-y border-slate-100 dark:border-slate-800 py-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Architecture:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-right truncate max-w-[200px]">{selectedStructure.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Surface Area:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{areaSqFt.toLocaleString()} sq.ft ({lengthFt}′ × {widthFt}′)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fabric Membrane:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedFabric.gsm} ({selectedFabric.origin})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Effective Rate / sq.ft:</span>
                <span className="font-mono font-bold text-gold-600 dark:text-gold-400">PKR {effectiveRate} / sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Steel & Erection Specs:</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">ASTM A53 Heavy Grade + Galvanized</span>
              </div>
            </div>

            {/* Total Estimated Price Display */}
            <div className="mt-6 p-4 rounded-xl bg-gold-500/10 border border-gold-500/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Total Turnkey Estimate (PKR):
              </span>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gold-600 dark:text-gold-400 mt-1 font-mono">
                PKR {totalEstimatedPkr.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                *Includes steel framing, fabric, tension cables, foundation plates, primer & paint, transport & installation.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send This Estimate to WhatsApp Quote</span>
            </a>

            {openSurveyModal && (
              <button
                type="button"
                onClick={openSurveyModal}
                className="w-full py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Ruler className="w-4 h-4" />
                <span>Book Free Laser Measurement On-Site</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
