import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { ViewHome } from './views/ViewHome';
import { ViewProgramas } from './views/ViewProgramas';
import { ViewQuienesSomos } from './views/ViewQuienesSomos';
import { ViewFacultad } from './views/ViewFacultad';
import { ViewProyectos } from './views/ViewProyectos';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ConferenceRegisterModal } from './components/ConferenceRegisterModal';
import { DonationModal } from './components/DonationModal';
import { Toast } from './components/Toast';
import { ConferenceEvent, EnrollmentSubmission } from './types';
import { MessageCircle, Heart } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from './data/academyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('inicio');
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedConference, setSelectedConference] = useState<ConferenceEvent | null>(null);
  const [isConferenceModalOpen, setIsConferenceModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'programas' || hash === 'quienes-somos' || hash === 'facultad' || hash === 'proyectos') {
      setCurrentPage(hash as NavPage);
    }
  }, []);

  const handleSelectPage = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
      {/* Barra de Navegación Superior (5 Páginas + Donar) */}
      <Navbar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenEnrollment={() => setIsEnrollmentOpen(true)}
        onOpenDonation={() => setIsDonationModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <ViewHome
            onNavigateToProgramas={() => handleSelectPage('programas')}
            onNavigateToQuienesSomos={() => handleSelectPage('quienes-somos')}
            onNavigateToFacultad={() => handleSelectPage('facultad')}
            onNavigateToProyectos={() => handleSelectPage('proyectos')}
            onOpenDonation={() => setIsDonationModalOpen(true)}
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

        {currentPage === 'facultad' && (
          <ViewFacultad
            onNavigateToProgramas={() => handleSelectPage('programas')}
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

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
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

      {/* Floating Pastoral WhatsApp Button & Donar shortcut */}
      <aside aria-label="Contacto Rápido" className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2">
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

        <button
          onClick={() => setIsDonationModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-bold shadow-2xl border border-rose-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Donar al ministerio"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span className="hidden md:inline">Donar</span>
        </button>
      </aside>

    </div>
  );
}
