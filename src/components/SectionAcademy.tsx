import React, { useState } from 'react';
import { BookOpen, Clock, Layers, Award, CheckCircle2, ChevronRight, Video, Users, FileEdit, Eye, MessageCircle } from 'lucide-react';
import { ACADEMIC_PROGRAMS, METHODOLOGY_STEPS, buildWhatsAppUrl, INSTITUTION_INFO } from '../data/academyData';
import { AcademicProgram, EnrollmentSubmission } from '../types';
import { ProgramModal } from './ProgramModal';
import { SampleBookletModal } from './SampleBookletModal';

interface SectionAcademyProps {
  onOpenEnrollment: () => void;
  onEnrollmentSubmitted: (data: EnrollmentSubmission) => void;
}

export const SectionAcademy: React.FC<SectionAcademyProps> = ({
  onOpenEnrollment,
  onEnrollmentSubmitted,
}) => {
  const [sectionMode, setSectionMode] = useState<'programas' | 'metodologia'>('programas');
  const [selectedProgramId, setSelectedProgramId] = useState<string>(ACADEMIC_PROGRAMS[0].id);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [modalProgram, setModalProgram] = useState<AcademicProgram | null>(null);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const currentProgram = ACADEMIC_PROGRAMS.find((p) => p.id === selectedProgramId) || ACADEMIC_PROGRAMS[0];

  const handleOpenDetailedModal = (prog: AcademicProgram) => {
    setModalProgram(prog);
    setIsProgramModalOpen(true);
  };

  return (
    <section id="academia" className="py-16 lg:py-24 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Formación de Nivel Técnico Universitario</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Academia y Metodología de Ensenanza
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Un modelo pedagógico que combina el autoaprendizaje por correspondencia en tu hogar con encuentros mensuales de práctica intensiva en nuestras sedes.
          </p>

          {/* Interactive Button Switcher between Programs and Methodology */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-md">
            <button
              onClick={() => setSectionMode('programas')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                sectionMode === 'programas'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Nuestros 3 Programas Técnicos</span>
            </button>
            <button
              onClick={() => setSectionMode('metodologia')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                sectionMode === 'metodologia'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileEdit className="w-4 h-4" />
              <span>Metodología y Folletos de Estudio</span>
            </button>
          </div>
        </div>

        {/* MODE 1: PROGRAMAS ACADÉMICOS */}
        {sectionMode === 'programas' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Quick 3-Program Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ACADEMIC_PROGRAMS.map((prog) => {
                const isActive = prog.id === selectedProgramId;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setSelectedProgramId(prog.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${isActive ? 'text-amber-400' : 'text-slate-500'}`}>
                        {prog.badge} · 12 Meses
                      </span>
                      <h3 className="font-serif font-bold text-base text-white">
                        {prog.title}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-amber-300/80 mt-2 flex items-center gap-1">
                      {isActive ? '✓ Seleccionado' : 'Hacer clic para ver detalles →'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Program Detailed Feature Showcase */}
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Photo & Quick Specs */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-700 shadow-md">
                    <img
                      src={currentProgram.image}
                      alt={currentProgram.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                        {currentProgram.badge}
                      </span>
                      <h4 className="font-serif font-bold text-lg text-white">
                        {currentProgram.title}
                      </h4>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Duración:</span>
                      <span className="font-bold text-white">{currentProgram.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Modalidad:</span>
                      <span className="font-medium text-amber-400">{currentProgram.modality}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Plan de Estudios:</span>
                      <span className="font-medium text-white">{currentProgram.modulesCount} Módulos Trimestrales</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Enrollment Button for this program */}
                  <a
                    href={buildWhatsAppUrl(`Hola, deseo solicitar el pensum y formalizar mi inscripción para el programa de ${currentProgram.title} en la Academia Bíblica El Evangelio.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inscribirme en {currentProgram.title}</span>
                  </a>

                  <button
                    onClick={() => handleOpenDetailedModal(currentProgram)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Ver Ficha Completa y Requisitos
                  </button>
                </div>

                {/* Modules Curriculum Grid */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                      Plan de Estudios Oficial
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      Módulos de Formación
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      {currentProgram.highlightObjective}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProgram.curriculum.map((mod, index) => (
                      <div
                        key={mod.code}
                        className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-mono font-bold text-amber-400">{mod.code}</span>
                            <span className="text-slate-500">Módulo {index + 1}</span>
                          </div>
                          <h5 className="font-serif font-bold text-xs text-white mb-1">
                            {mod.name}
                          </h5>
                          <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                            {mod.description}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 mt-2">
                          {mod.hours} de carga técnica
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Profile snippet */}
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 space-y-1.5">
                    <span className="font-bold text-amber-400 block uppercase tracking-wider text-[11px]">
                      ¿A quién está dirigido?
                    </span>
                    <ul className="space-y-1">
                      {currentProgram.profile.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* MODE 2: METODOLOGÍA Y FOLLETOS */}
        {sectionMode === 'metodologia' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-blue-500/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-blue-400">10%</span>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Video className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white">Teoría Didáctica</h4>
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">30 Horas de Video</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Videos pregrabados claros y adaptados al contexto cultural de Centroamérica, entregados en USB o descarga ligera sin necesidad de conexión constante.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-amber-400">90%</span>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white">Práctica Pastoral</h4>
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Encuentros Mensuales</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Encuentros mensuales en nuestras sedes para resolver dudas cara a cara, debates teológicos y laboratorios intensivos de predicación y consejería.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-emerald-400">Guías</span>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <FileEdit className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white">Material Didáctico</h4>
                <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Folletos para Rellenar</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Folletos impresos con espacios guiados para rellenar, tomar notas personales y aplicar directamente a los desafíos de la congregación local.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-purple-500/30 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-purple-400">Título</span>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-white">Acreditación Oficial</h4>
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Técnico Universitario</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nivel técnico universitario con validez y reconocimiento nacional e internacional, avalando la idoneidad teológica y ministerial del egresado.
                </p>
              </div>
            </div>

            {/* Visual Booklet Spotlight (Unsplash photo of study notes & open bible) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
                    alt="Folletos didácticos y notas de estudio bíblico"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-white/90 font-medium">
                    Cuadernos de trabajo estructurados para autogestión del aprendizaje.
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                    Metodología Probada en Zonas Rurales
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Aprende a tu Propio Ritmo en Casa
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Cada lección contiene preguntas de reflexión, citas exegéticas y espacios guiados para que el estudiante elabore sus propios bosquejos y reflexiones teológicas con su Biblia abierta.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setIsSampleModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver Muestra de Folleto Didáctico</span>
                    </button>
                    <button
                      onClick={onOpenEnrollment}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
                    >
                      <span>Inscribirme al Próximo Ciclo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Steps Monthly Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {METHODOLOGY_STEPS.map((s) => (
                <div key={s.step} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-serif font-bold text-amber-400 text-lg block mb-1">
                    Paso {s.step}
                  </span>
                  <h5 className="font-serif font-bold text-xs text-white mb-1">{s.title}</h5>
                  <p className="text-[11px] text-slate-300 leading-snug">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modals */}
      <ProgramModal
        program={modalProgram}
        isOpen={isProgramModalOpen}
        onClose={() => setIsProgramModalOpen(false)}
        onSubmitInquiry={onEnrollmentSubmitted}
      />

      <SampleBookletModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onEnrollClick={onOpenEnrollment}
      />
    </section>
  );
};
