import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Methodology } from './components/Methodology';
import { AcademicPrograms } from './components/AcademicPrograms';
import { PhysicalBranches } from './components/PhysicalBranches';
import { MissionaryProjects } from './components/MissionaryProjects';
import { DoctrineAndConferences } from './components/DoctrineAndConferences';
import { FaqSection } from './components/FaqSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ConferenceRegisterModal } from './components/ConferenceRegisterModal';
import { Toast } from './components/Toast';
import { ConferenceEvent, EnrollmentSubmission } from './types';
import { MessageCircle } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from './data/academyData';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedConference, setSelectedConference] = useState<ConferenceEvent | null>(null);
  const [isConferenceModalOpen, setIsConferenceModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenEnrollment = () => {
    setIsEnrollmentOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreMethodology = () => {
    const el = document.getElementById('metodologia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollmentSubmitted = (data: EnrollmentSubmission) => {
    setToastMessage(`¡Gracias ${data.fullName}! Tu solicitud para la Academia Bíblica El Evangelio ha sido canalizada directamente a nuestro WhatsApp oficial.`);
  };

  const handleRegisterConference = (conference: ConferenceEvent) => {
    setSelectedConference(conference);
    setIsConferenceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Barra de Navegación Superior (Navbar) con Sedes y Proyectos */}
      <Navbar onOpenEnrollment={handleOpenEnrollment} />

      <main className="flex-1">
        {/* 2. Sección Principal (Hero) */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onExploreMethodology={handleExploreMethodology}
        />

        {/* 3. Quiénes Somos (Misión, Visión, Valores) */}
        <AboutUs />

        {/* 4. Nuestra Metodología de Enseñanza (10% Teoría, 90% Práctica, Folletos) */}
        <Methodology onOpenEnrollment={handleOpenEnrollment} />

        {/* 5. Nuestros Programas Académicos (3 Tarjetas modernas + Modal de Pensum) */}
        <AcademicPrograms onEnrollmentSubmitted={handleEnrollmentSubmitted} />

        {/* NUEVO: Nuestras Sedes Oficiales Físicas */}
        <PhysicalBranches />

        {/* NUEVO: Proyectos y Oportunidades Misioneras */}
        <MissionaryProjects />

        {/* 6. Sección de Confesión de Fe y Conferencias */}
        <DoctrineAndConferences onRegisterConference={handleRegisterConference} />

        {/* Preguntas Frecuentes (FAQ) */}
        <FaqSection />
      </main>

      {/* 7. Pie de Página (Footer) y Contacto con envío directo a WhatsApp */}
      <ContactAndFooter onFormSubmit={handleEnrollmentSubmitted} />

      {/* Modal General de Admisión / Inscripción */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={handleCloseEnrollment}
        onSubmit={handleEnrollmentSubmitted}
      />

      {/* Modal de Registro a Conferencias */}
      <ConferenceRegisterModal
        conference={selectedConference}
        isOpen={isConferenceModalOpen}
        onClose={() => setIsConferenceModalOpen(false)}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Floating Pastoral WhatsApp Button (+505 8934-1763) */}
      <aside aria-label="Contacto Rápido" className="fixed bottom-5 left-5 z-40 hidden sm:block">
        <a
          href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-2xl border border-emerald-400/40 transition-all hover:scale-105 active:scale-95 group"
          title={`WhatsApp Pastoral Directo: ${INSTITUTION_INFO.phone}`}
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600 group-hover:animate-bounce" />
          <span>WhatsApp Directo: {INSTITUTION_INFO.phone}</span>
        </a>
      </aside>

    </div>
  );
}
