import React from 'react';
import {
  Users,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  MapPin,
  HeartHandshake,
} from 'lucide-react';
import { FACULTY_DATA, FACULTY_MEMBERS, FIELD_MENTORS } from '../data/academyData';

interface ViewFacultadProps {
  onNavigateToProgramas: () => void;
  onOpenEnrollment: () => void;
}

export const ViewFacultad: React.FC<ViewFacultadProps> = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <Users className="w-4 h-4 text-amber-400" />
            <span>Cuerpo Docente y Mentores de Campo</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            ¿Quiénes son Nuestros Colaboradores Educativos o Facultad Invitada?
          </h1>

          <div className="inline-block px-5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-bold text-sm sm:text-lg">
            "{FACULTY_DATA.lema}"
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nuestra institución funciona gracias a la generosidad y el compromiso de pastores y teólogos experimentados que ponen sus recursos y talentos al servicio del pueblo de Dios en zonas rurales.
          </p>
        </div>

        {/* Narrative Box: Acuerdo y Misión Compartida / Una Facultad Independiente y Solidaria */}
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Acuerdo y Misión Compartida
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Una Facultad Independiente y Solidaria
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {FACULTY_DATA.descripcion}
          </p>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {FACULTY_DATA.caracteristicas.map((caract, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{caract.titulo}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {caract.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FACULTAD INVITADA CON FOTOGRAFÍAS REALES */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Facultad Invitada</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Nuestros Maestros y Teólogos Invitados
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pastores y doctores en teología que autorizan y comparten sus recursos educativos con nuestros estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACULTY_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-400/50 p-5 shadow-lg flex flex-col items-center text-center space-y-3 transition-all duration-300 group"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-amber-400/50 p-0.5 bg-slate-950 group-hover:border-amber-400 transition-colors shadow-inner shrink-0">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block">
                    {member.title}
                  </span>
                  <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </h3>
                </div>

                <div className="w-full pt-2 border-t border-slate-800 text-xs text-slate-300 leading-snug">
                  {member.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MENTORES DE CAMPO (SIN FOTOGRAFÍA) */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-amber-500/30 shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Acompañamiento Presencial</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Mentores de Campo
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed italic">
              Honramos el trabajo del mentor; es el más fuerte porque tiene que tener un trato cara a cara con los alumnos, escucharlos, orar juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {FIELD_MENTORS.map((mentor) => (
              <div
                key={mentor.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-colors flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-white text-sm">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {mentor.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
