import React from 'react';
import { ProjectGallery } from '../components/ProjectGallery';
import { company } from '../data/siteData';
import { Award, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';

interface ProjectsPageProps {
  openSurveyModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ openSurveyModal }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            100+ Landmark Sites Across Pakistan
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Completed Projects Portfolio
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Browse our completed architectural tensile membrane canopies, cantilever car parking bays, and heavy structural steel installations across Lahore, Islamabad, Rawalpindi, and Karachi.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={openSurveyModal}
            className="py-3 px-5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-lg shadow-gold-500/20 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-navy-950" />
            Book Free Survey
          </button>
        </div>
      </div>

      {/* Main Gallery with filters */}
      <ProjectGallery />
    </div>
  );
};
