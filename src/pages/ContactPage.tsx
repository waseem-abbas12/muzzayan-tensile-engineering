import React, { useState } from 'react';
import { company, offices } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  openSurveyModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openSurveyModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Lahore',
    projectType: 'Cantilever Car Parking Shade',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Assalam-o-Alaikum MTE! Contact Form Brief:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Email: ${formData.email || 'N/A'}%0A- City: ${formData.city}%0A- Type: ${formData.projectType}%0A- Message: ${formData.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
          Reach Our Engineering Teams
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mt-2">
          Contact Muzzayan Tensile Engineering
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Book an on-site measurement, request a 3D structural render, or speak directly with our structural engineering desk. We respond promptly within 2 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-gold-500/20">
          {!submitted ? (
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Send a Message or Project Brief
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to receive a formal quotation and engineering specs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mahmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-gold-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0302 4001063"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-gold-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-gold-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">City / Region *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-3 text-slate-900 dark:text-white focus:border-gold-500 outline-none"
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
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Project Discipline</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3.5 py-3 text-slate-900 dark:text-white focus:border-gold-500 outline-none"
                  >
                    <option value="Cantilever Car Parking Shade">Cantilever Car Parking Shade</option>
                    <option value="Tensile Membrane Architectural Roof">Tensile Membrane Architectural Roof</option>
                    <option value="Industrial Factory / Warehouse Shed">Industrial Factory / Warehouse Shed</option>
                    <option value="Swimming Pool & Walkway Shade">Swimming Pool & Walkway Shade</option>
                    <option value="Marquee & Event Tensile Canopy">Marquee & Event Tensile Canopy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Project Description & Dimensions</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about the space, number of vehicles, ground conditions or society name..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-gold-500 outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4 text-navy-950" />
                    Submit Brief & Chat On WhatsApp
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Thank you for reaching out. Our engineering representative will follow up with you on WhatsApp shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="py-2.5 px-6 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700"
              >
                Send Another Inquiry
              </button>
            </div>
          )}
        </div>

        {/* Office Details & Hotline */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Direct Contacts */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Direct Engineering Hotline</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-600 dark:text-gold-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Phone / UAN</span>
                  <a href={`tel:${company.phone}`} className="text-slate-900 dark:text-white font-bold hover:text-gold-500">
                    {company.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Official WhatsApp</span>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    +92 302 4001063 (Direct Chat)
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-600 dark:text-gold-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">General Inquiries</span>
                  <span className="text-slate-900 dark:text-white font-bold">{company.email}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-600 dark:text-gold-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">Business Hours</span>
                  <span className="text-slate-900 dark:text-white font-bold">{company.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Offices List */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              Regional Offices
            </h3>

            <div className="space-y-3.5 text-xs">
              {offices.map((off, idx) => (
                <div key={idx} className="pb-3 border-b border-slate-200 dark:border-slate-800/80 last:border-0 last:pb-0">
                  <div className="font-bold text-slate-900 dark:text-white text-xs">{off.city}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">{off.address}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={openSurveyModal}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-700 text-gold-600 dark:text-gold-400 font-bold text-xs border border-gold-500/30 transition-all text-center"
              >
                Schedule Free Site Measurement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
