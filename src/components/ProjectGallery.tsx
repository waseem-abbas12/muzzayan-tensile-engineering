import React, { useState } from 'react';
import { projects, Project, company } from '../data/siteData';
import { MapPin, Calendar, Maximize2, X, MessageCircle, Layers } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeCity, setActiveCity] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Government', 'Sports', 'Hospitality', 'Healthcare'];
  const cities = ['All', 'Lahore', 'Islamabad', 'Rawalpindi'];

  const filteredProjects = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.type.toLowerCase().includes(activeCategory.toLowerCase());
    const matchCity = activeCity === 'All' || p.city.toLowerCase() === activeCity.toLowerCase();
    return matchCat && matchCity;
  });

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-4 rounded-xl border border-slate-200 dark:border-gold-500/15">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gold-500 text-slate-950 shadow-sm font-bold'
                  : 'bg-white dark:bg-navy-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* City Filter */}
        <div className="flex items-center gap-1.5 self-start md:self-auto">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">City:</span>
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setActiveCity(city)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeCity === city
                  ? 'bg-slate-800 dark:bg-slate-700 text-white dark:text-gold-400 font-bold border border-slate-700 dark:border-gold-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="group glass-panel rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-gold-500/50 shadow-sm dark:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const t = e.currentTarget;
                  if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50" />
              
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-gold-400 text-[10px] font-bold border border-gold-500/30 uppercase tracking-wider">
                  {p.type}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-medium border border-slate-700 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-gold-400" />
                  {p.city}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-transparent">
              <div>
                <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors line-clamp-1">
                  {p.title}
                </h4>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {p.description}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300 font-mono">
                  <Layers className="w-3 h-3 text-gold-600 dark:text-gold-400" />
                  {p.area}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {p.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-slate-500 text-sm">
          No projects found matching the selected filters.
        </div>
      )}

      {/* Modal Dialog for Project Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-gold-500/30 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center border border-slate-200 dark:border-slate-700 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-slate-950 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  if (!t.src.includes('hero.jpg')) t.src = '/images/hero.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50" />
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-bold border border-gold-500/30 uppercase">
                  {selectedProject.type}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-500" />
                  {selectedProject.city}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  {selectedProject.year}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Structural System:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{selectedProject.system}</strong>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Covered Footprint:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{selectedProject.area}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Assalam-o-Alaikum MTE! I am interested in building a structure similar to your portfolio project: "${selectedProject.title}" in ${selectedProject.city}. Please provide details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire About Similar Structure on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-xs"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
