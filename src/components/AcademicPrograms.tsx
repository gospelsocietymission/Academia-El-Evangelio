import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ChevronRight, Award, Layers } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/academyData';
import { AcademicProgram, EnrollmentSubmission } from '../types';
import { ProgramModal } from './ProgramModal';

interface AcademicProgramsProps {
  onEnrollmentSubmitted: (data: EnrollmentSubmission) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onEnrollmentSubmitted }) => {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProgram = (program: AcademicProgram) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="programas" className="py-20 lg:py-28 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Oferta Académica</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Nuestros Programas Académicos de Nivel Técnico
          </h2>
          
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Formación integral con rigor exegético y pastoral, acreditada con validez nacional e internacional, disenada en ciclos trimestrales de estudio por correspondencia y laboratorios mensuales.
          </p>
        </div>

        {/* 3 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMIC_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Program Card Visual Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Accreditation Tag */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded text-[11px] font-semibold text-amber-300 tracking-wide">
                    {program.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-300/80 mt-1 line-clamp-1">
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Metadata specs */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>{program.modulesCount} Módulos Teórico-Prácticos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span className="truncate">{program.modality}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with "Más Información" button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenProgram(program)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-200 hover:text-slate-950 border border-slate-700 hover:border-amber-400 font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg cursor-pointer"
                >
                  <span>Más Información / Ver Pensum</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global callout banner for programs */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-950/60 border border-amber-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-white">
              ¿No estás seguro de cuál programa se adapta mejor a tu ministerio?
            </h4>
            <p className="text-xs text-slate-400">
              Nuestro coordinador académico puede brindarte orientación personalizada sin costo alguno.
            </p>
          </div>
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Orientación Ministerial
          </a>
        </div>

      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmitInquiry={onEnrollmentSubmitted}
      />
    </section>
  );
};
