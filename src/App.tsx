import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { ViewHome } from './views/ViewHome';
import { ViewProgramas } from './views/ViewProgramas';
import { ViewQuienesSomos } from './views/ViewQuienesSomos';
import { ViewProyectos } from './views/ViewProyectos';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ConferenceRegisterModal } from './components/ConferenceRegisterModal';
import { Toast } from './components/Toast';
import { ConferenceEvent, EnrollmentSubmission } from './types';
import { MessageCircle } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from './data/academyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('inicio');
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedConference, setSelectedConference] = useState<ConferenceEvent | null>(null);
  const [isConferenceModalOpen, setIsConferenceModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'programas' || hash === 'quienes-somos' || hash === 'proyectos') {
      setCurrentPage(hash as NavPage);
    }
  }, []);

  const handleSelectPage = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleEnrollmentSubmitted = (data: EnrollmentSubmission) => {
    setToastMessage(`¡Gracias ${data.fullName}! Tu solicitud para la Academia Bíblica El Evangelio ha sido enviada directamente a nuestro WhatsApp oficial.`);
  };

  const handleRegisterConference = (conference: ConferenceEvent) => {
    setSelectedConference(conference);
    setIsConferenceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Barra de Navegación Superior (4 Páginas) */}
      <Navbar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenEnrollment={() => setIsEnrollmentOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <ViewHome
            onNavigateToProgramas={() => handleSelectPage('programas')}
            onNavigateToQuienesSomos={() => handleSelectPage('quienes-somos')}
            onNavigateToProyectos={() => handleSelectPage('proyectos')}
            onOpenEnrollment={() => setIsEnrollmentOpen(true)}
            onRegisterConference={handleRegisterConference}
            onFormSubmit={handleEnrollmentSubmitted}
          />
        )}

        {currentPage === 'programas' && (
          <ViewProgramas
            onOpenEnrollment={() => setIsEnrollmentOpen(true)}
            onEnrollmentSubmitted={handleEnrollmentSubmitted}
          />
        )}

        {currentPage === 'quienes-somos' && (
          <ViewQuienesSomos
            onNavigateToProgramas={() => handleSelectPage('programas')}
            onNavigateToProyectos={() => handleSelectPage('proyectos')}
            onOpenEnrollment={() => setIsEnrollmentOpen(true)}
          />
        )}

        {currentPage === 'proyectos' && (
          <ViewProyectos />
        )}
      </main>

      {/* Global Modals */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        onSubmit={handleEnrollmentSubmitted}
      />

      <ConferenceRegisterModal
        conference={selectedConference}
        isOpen={isConferenceModalOpen}
        onClose={() => setIsConferenceModalOpen(false)}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Floating Pastoral WhatsApp Button */}
      <aside aria-label="Contacto Rápido" className="fixed bottom-5 left-5 z-40 hidden sm:block">
        <a
          href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-2xl border border-emerald-400/40 transition-all hover:scale-105 active:scale-95 group"
          title={`WhatsApp Pastoral Directo: ${INSTITUTION_INFO.phone}`}
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:animate-bounce" />
          <span>WhatsApp: {INSTITUTION_INFO.phone}</span>
        </a>
      </aside>

    </div>
  );
}
