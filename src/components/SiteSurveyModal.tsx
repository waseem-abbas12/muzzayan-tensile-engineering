import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, MapPin, Phone, User, Calendar, ShieldCheck } from 'lucide-react';
import { company } from '../data/siteData';

interface SiteSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteSurveyModal: React.FC<SiteSurveyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    projectType: 'Cantilever Car Parking Shade',
    location: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp with populated message
    const msg = `Assalam-o-Alaikum MTE! I am booking a Free Site Survey:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- City: ${formData.city}%0A- Project: ${formData.projectType}%0A- Address / Area: ${formData.location}%0A- Notes: ${formData.notes || 'N/A'}`;
    const url = `https://wa.me/${company.whatsapp}?text=${msg}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-navy-900 border border-gold-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              100% Free On-Site Measurement
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Book a Free Site Survey & 3D Design
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Our structural engineers will visit your site in Lahore, Islamabad, Rawalpindi, or Karachi, take precision laser measurements, and present a custom 3D model.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Malik Ahmad"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:border-gold-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:border-gold-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">City *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:border-gold-500 outline-none"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-white focus:border-gold-500 outline-none"
                >
                  <option value="Cantilever Car Parking Shade">Cantilever Car Parking Shade (Residential / Commercial)</option>
                  <option value="Tensile Membrane Roof & Canopy">Tensile Membrane Roof & Canopy</option>
                  <option value="Industrial Steel Shed / Warehouse">Industrial Factory Shed / Warehouse Structure</option>
                  <option value="Swimming Pool & Walkway Shade">Swimming Pool & Walkway Shade</option>
                  <option value="Marquee & Banquet Tensile Hall">Marquee & Banquet Tensile Hall</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Area / Society & Location Details *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. DHA Phase 6, Bahria Town, Gulberg 3"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-white placeholder-slate-600 focus:border-gold-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Additional Project Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Number of cars, special dimensions, fabric preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-600 focus:border-gold-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-navy-950" />
                  Confirm Survey on WhatsApp & Book Visit
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligations. Confidential site visits across Pakistan.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-heading font-bold text-white">Survey Request Received!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Our engineering team in {formData.city} has received your brief. A site coordinator will contact you shortly on <strong>{formData.phone}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
