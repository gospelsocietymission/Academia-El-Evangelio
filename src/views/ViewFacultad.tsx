import React from 'react';
import { Users, BookOpen, Award, CheckCircle2, MessageCircle, FileText, Heart, Compass, ShieldCheck } from 'lucide-react';
import { FACULTY_DATA, INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface ViewFacultadProps {
  onNavigateToProgramas: () => void;
  onOpenEnrollment: () => void;
}

export const ViewFacultad: React.FC<ViewFacultadProps> = ({
  onNavigateToProgramas,
  onOpenEnrollment,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
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

          <div className="inline-block px-5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-bold text-base sm:text-lg">
            "{FACULTY_DATA.lema}"
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nuestra institución funciona gracias a la generosidad y el compromiso de pastores y teólogos experimentados que ponen sus recursos y talentos al servicio del pueblo de Dios en zonas rurales.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Acuerdo y Misión Compartida
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Una Facultad Independiente y Solidaria
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {FACULTY_DATA.descripcion}
          </p>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
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

        {/* Áreas de Especialización Docente */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Especialidades Teológicas
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Áreas donde Ministran Nuestros Colaboradores
            </h2>
            <p className="text-xs text-slate-400">
              Cada materia cuenta con material didáctico estructurado y supervisión de ministros idóneos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACULTY_DATA.areas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors shadow-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-amber-400 text-lg tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    Área Académica
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {area.area}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {area.enfoque}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Invitación a Colaboradores y Pastores */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6 fill-amber-400" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            ¿Eres Pastor o Maestro Bíblico y Deseas Sumarte como Colaborador?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Si cuentas con materiales pedagógicos, videos de enseñanza expositiva o deseas impartir conferencias en nuestros encuentros presenciales mensuales, nos encantaría coordinar contigo.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildWhatsAppUrl("Hola, soy pastor/maestro de Biblia y deseo consultar cómo puedo colaborar como facultad invitada o compartir recursos con la Academia Bíblica El Evangelio.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contactar a Coordinación Académica por WhatsApp</span>
            </a>
            <button
              onClick={onNavigateToProgramas}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
            >
              Ver Programas Académicos
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
