import React from 'react';
import { Shield, Award, Users, BookOpen, Compass, CheckCircle2, MessageCircle, FileText, Globe, ArrowRight } from 'lucide-react';
import { INSTITUTION_INFO, QUIENES_SOMOS_DATA, buildWhatsAppUrl } from '../data/academyData';

interface ViewQuienesSomosProps {
  onNavigateToProgramas: () => void;
  onNavigateToProyectos: () => void;
  onOpenEnrollment: () => void;
}

export const ViewQuienesSomos: React.FC<ViewQuienesSomosProps> = ({
  onNavigateToProgramas,
  onNavigateToProyectos,
  onOpenEnrollment,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Documento Institucional</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Quiénes Somos
          </h1>
          
          <div className="inline-block px-5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-bold text-base sm:text-lg">
            "{INSTITUTION_INFO.motto}"
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conoce la historia, visión doctrinal, acreditación internacional y avales que respaldan la labor de la <strong>Academia Bíblica El Evangelio</strong> en Centroamérica.
          </p>
        </div>

        {/* 1. Historia y Llamado Pastoral */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Una Alianza Nacida del Amor por el Evangelio
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Conscientes de la urgente necesidad de impartir educación bíblica a hombres y mujeres apasionados por el Evangelio, pero que carecen de oportunidades de estudio debido a diversas limitaciones geográficas y económicas, un grupo destacado de líderes y pastores se ha unido en colaboración.
            </p>
            <p>
              Este esfuerzo busca alcanzar a estudiantes, pastores y líderes en zonas rurales de diversos países de Latinoamérica, lugares donde la enseñanza bíblica es más que un lujo: <strong>es una necesidad urgente y vital</strong>. Nuestra misión es ir hasta lo último de la tierra, llevando una formación espiritual sólida que transforme vidas y comunidades.
            </p>
            <p>
              En los rincones más remotos, los pastores y líderes anhelan una enseñanza bíblica sólida y accesible, para que los creyentes no solo vivan su fe, sino que también sean un faro de esperanza en sus comunidades. Este proyecto no es solo un programa educativo, es un movimiento de amor y compromiso por el Reino de Dios, cargado de oración y dedicación pastoral.
            </p>
          </div>
        </div>

        {/* 2. Acreditación de la Academia Bíblica El Evangelio y Apostilla de La Haya */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-amber-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Reconocimiento Oficial
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                {QUIENES_SOMOS_DATA.acreditacion.titulo}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              {QUIENES_SOMOS_DATA.acreditacion.texto}
            </p>

            {/* Apostilla de La Haya Highlight Box */}
            <div className="p-5 rounded-xl bg-slate-950 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Legalización Internacional: Apostilla de La Haya</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {QUIENES_SOMOS_DATA.acreditacion.apostilla}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Credenciales y Avales Académicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Credenciales */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              {QUIENES_SOMOS_DATA.credenciales.titulo}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {QUIENES_SOMOS_DATA.credenciales.texto}
            </p>
          </div>

          {/* Avales */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              {QUIENES_SOMOS_DATA.avales.titulo}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {QUIENES_SOMOS_DATA.avales.texto}
            </p>
          </div>
        </div>

        {/* 4. Nuestra Filosofía: Principios Eclesiológicos */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Nuestros Principios
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                {QUIENES_SOMOS_DATA.filosofia.titulo}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              {QUIENES_SOMOS_DATA.filosofia.texto}
            </p>

            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <p className="font-semibold text-amber-300 mb-1">Amor y Respeto a Todas las Denominaciones:</p>
              <p>{QUIENES_SOMOS_DATA.filosofia.doctrina}</p>
            </div>
          </div>
        </div>

        {/* 5. Administración Legal y Facultad Invitada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
            <h3 className="font-serif text-lg font-bold text-white">
              {QUIENES_SOMOS_DATA.legal.titulo}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {QUIENES_SOMOS_DATA.legal.texto}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-3">
            <h3 className="font-serif text-lg font-bold text-white">
              {QUIENES_SOMOS_DATA.facultad.titulo}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {QUIENES_SOMOS_DATA.facultad.texto}
            </p>
          </div>
        </div>

        {/* Action strip to explore programs or WhatsApp */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            ¿Deseas Formar Parte de Nuestra Familia Estudiantil?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Descubre nuestros 3 programas técnicos o comunícate directamente con la coordinación pastoral en WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onNavigateToProgramas}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow cursor-pointer transition-all"
            >
              Ver Página de Programas
            </button>
            <a
              href={buildWhatsAppUrl("Hola, leí la sección Quiénes Somos de la Academia Bíblica El Evangelio y deseo recibir más información sobre el ingreso.")}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar por WhatsApp (+505 8934-1763)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
