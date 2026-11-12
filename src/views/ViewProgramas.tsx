import React, { useState } from 'react';
import { Award, Clock, Layers, BookOpen, CheckCircle2, MessageCircle, FileText, ChevronRight, Eye, HeartHandshake, UserCheck } from 'lucide-react';
import { ACADEMIC_PROGRAMS, PROGRAMAS_PAGE_DATA, buildWhatsAppUrl, INSTITUTION_INFO } from '../data/academyData';
import { AcademicProgram, EnrollmentSubmission } from '../types';
import { ProgramModal } from '../components/ProgramModal';
import { SampleBookletModal } from '../components/SampleBookletModal';

interface ViewProgramasProps {
  onOpenEnrollment: () => void;
  onEnrollmentSubmitted: (data: EnrollmentSubmission) => void;
}

export const ViewProgramas: React.FC<ViewProgramasProps> = ({
  onOpenEnrollment,
  onEnrollmentSubmitted,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const handleOpenProgram = (prog: AcademicProgram) => {
    setSelectedProgram(prog);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Oferta Académica Oficial</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Programas en Teología
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Los programas en teología que ofrece la Academia Bíblica El Evangelio tienen un nivel <strong>Técnico Universitario</strong>. Los estudiantes son entrenados a un <strong>10% teoría y 90% práctica</strong>, distintivo que nos hace fuertes y diferentes a los seminarios e institutos convencionales.
          </p>
        </div>

        {/* 1. Nuestro Método de Estudio por Correspondencia */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Metodología
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                {PROGRAMAS_PAGE_DATA.metodoEstudio.title}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              {PROGRAMAS_PAGE_DATA.metodoEstudio.descripcion}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {PROGRAMAS_PAGE_DATA.metodoEstudio.puntosClave.map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-amber-300 bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setIsSampleModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Ver Muestra de Folleto Didáctico</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Los 3 Programas Oficiales */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Planes de Estudio
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Nuestros 3 Programas Técnicos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ACADEMIC_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded text-[11px] font-semibold text-amber-300">
                      {prog.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-amber-300/80 font-medium mt-1">
                        {prog.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                      {prog.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Duración: {prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        <span>{prog.modulesCount} Módulos Teórico-Prácticos</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={buildWhatsAppUrl(`Hola, deseo solicitar el pensum e inscribirme en el programa de ${prog.title} de la Academia Bíblica El Evangelio.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inscribirme por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleOpenProgram(prog)}
                    className="w-full py-2 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Ver Pensum y Módulos</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Costos y Aportes Accesibles */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                Accesibilidad Total
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                {PROGRAMAS_PAGE_DATA.costos.title}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p className="text-base font-medium text-white">
              {PROGRAMAS_PAGE_DATA.costos.resumen}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-serif font-bold text-amber-400 text-sm">
                  {PROGRAMAS_PAGE_DATA.costos.rurales.titulo}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PROGRAMAS_PAGE_DATA.costos.rurales.detalle}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-serif font-bold text-white text-sm">
                  {PROGRAMAS_PAGE_DATA.costos.urbanos.titulo}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PROGRAMAS_PAGE_DATA.costos.urbanos.detalle}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic pt-2">
              * {PROGRAMAS_PAGE_DATA.costos.notaDonaciones}
            </p>
          </div>
        </div>

        {/* 4. Proceso de Admisión */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">
                Requisitos y Pasos
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                {PROGRAMAS_PAGE_DATA.admision.title}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              {PROGRAMAS_PAGE_DATA.admision.descripcion}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {PROGRAMAS_PAGE_DATA.admision.pasos.map((paso, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-serif font-bold text-amber-400 text-lg block">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {paso}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <a
                href={buildWhatsAppUrl("Hola, deseo iniciar mi proceso de admisión para los programas técnicos de la Academia Bíblica El Evangelio.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Iniciar Proceso de Admisión por WhatsApp (+505 8934-1763)</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitInquiry={onEnrollmentSubmitted}
      />

      {/* Sample Booklet Modal */}
      <SampleBookletModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onEnrollClick={onOpenEnrollment}
      />
    </div>
  );
};
