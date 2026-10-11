import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SiteSurveyModal } from './components/SiteSurveyModal';
import { Home } from './pages/Home';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EngineeringPage } from './pages/EngineeringPage';
import { ProcessPage } from './pages/ProcessPage';
import { LocationsPage } from './pages/LocationsPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, MessageCircle } from 'lucide-react';
import { company } from './data/siteData';

function AppContent() {
  const [activePage, setActivePage] = useState<string>('home');
  const [surveyModalOpen, setSurveyModalOpen] = useState<boolean>(false);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['solutions', 'projects', 'engineering', 'process', 'locations', 'about', 'faq', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else if (hash === '' || hash === 'home') {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page: string) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Page Content
  const renderContent = () => {
    switch (activePage) {
      case 'solutions':
        return <SolutionsPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'projects':
        return <ProjectsPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'engineering':
        return <EngineeringPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'process':
        return <ProcessPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'locations':
        return <LocationsPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'about':
        return <AboutPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'faq':
        return <FaqPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'contact':
        return <ContactPage openSurveyModal={() => setSurveyModalOpen(true)} />;
      case 'home':
      default:
        return <Home setActivePage={handlePageChange} openSurveyModal={() => setSurveyModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 flex flex-col bg-architectural-grid transition-colors duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-100 dark:bg-navy-900/90 border-b border-slate-200 dark:border-gold-500/20 py-2 px-4 text-center text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 z-50 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-700 dark:text-gold-400 font-bold text-[10px] uppercase">
              Free Site Survey
            </span>
            <span className="truncate">
              Serving DHA Lahore, Bahria Town, Islamabad Sectors, Saddar Rawalpindi & Karachi.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 font-medium">
            <a href={`tel:${company.phone}`} className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-gold-600 dark:text-gold-400" />
              {company.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        openSurveyModal={() => setSurveyModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={handlePageChange}
        openSurveyModal={() => setSurveyModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />

      {/* Modal for Free Site Survey Booking */}
      <SiteSurveyModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
