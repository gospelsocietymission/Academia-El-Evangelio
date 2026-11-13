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

        {/* MENTORES DE CAMPO (CON IMAGEN DE FONDO zapatosdesgastado.jpg) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl">
          {/* Background Image */}
          <img
            src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/zapatosdesgastado.jpg"
            alt="Zapatos desgastados en servicio misionero rural"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Rich dark overlay for high readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/95" />

          <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Margin Photo Card: caminos.jpeg */}
              <div className="md:col-span-4 lg:col-span-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl aspect-[4/3] md:aspect-[4/4] bg-slate-900">
                  <img
                    src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/caminos.jpeg"
                    alt="Caminos rurales hacia las comunidades misioneras"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-[11px] font-semibold text-amber-200 tracking-wide drop-shadow">
                    Servicio en las comunidades de Centroamérica
                  </span>
                </div>
              </div>

              {/* Right Text Header */}
              <div className="md:col-span-8 lg:col-span-8 text-center md:text-left space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Acompañamiento Presencial</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow">
                  Mentores de Campo
                </h2>
                <p className="text-xs sm:text-base text-amber-100 leading-relaxed italic drop-shadow">
                  Reconocemos el compromiso extraordinario de quienes están en la primera línea de formación. Su labor es la más desafiante y noble, pues requiere presencia real, una escucha compasiva frente a frente y la entrega espiritual de orar juntos por cada vida.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {FIELD_MENTORS.map((mentor) => (
                <div
                  key={mentor.id}
                  className="p-4 sm:p-5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 hover:border-amber-400/50 transition-colors flex items-start gap-3 shadow-lg"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <h3 className="font-serif font-bold text-white text-sm sm:text-base">
                      {mentor.name}
                    </h3>
                    {mentor.role && (
                      <p className="text-[11px] font-semibold text-amber-300 leading-snug">
                        {mentor.role}
                      </p>
                    )}
                    {mentor.details && (
                      <p className="text-[11px] text-slate-200 leading-snug">
                        {mentor.details}
                      </p>
                    )}
                    <p className="text-xs text-slate-300 leading-snug">
                      {mentor.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
