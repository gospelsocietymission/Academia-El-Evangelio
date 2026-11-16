import React, { useState } from 'react';
import {
  Shield,
  Award,
  BookOpen,
  Compass,
  CheckCircle2,
  FileText,
  Globe,
  Scale,
  Building2,
  ScrollText,
  BadgeCheck,
  Briefcase,
  History,
  GraduationCap,
  HeartPulse,
  MapPin,
  Camera,
  X
} from 'lucide-react';
import { INSTITUTION_INFO, QUIENES_SOMOS_DATA, DOCTRINAL_POINTS, PASTOR_ISAIAS_PROFILE } from '../data/academyData';

interface ViewQuienesSomosProps {
  onNavigateToProgramas: () => void;
  onNavigateToProyectos: () => void;
  onOpenEnrollment: () => void;
}

type TabKey = 'historia' | 'credenciales' | 'avales' | 'legal';

export const ViewQuienesSomos: React.FC<ViewQuienesSomosProps> = () => {
  const [activeSection, setActiveSection] = useState<TabKey>('historia');
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; alt: string } | null>(null);

  const handleOpenNuestraHistoria = () => {
    setActiveSection('historia');
    const el = document.getElementById('seccion-institucional-detalle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
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
          
          <div className="inline-block px-5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-bold text-sm sm:text-lg">
            "{INSTITUTION_INFO.motto}"
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Conoce nuestros principios, historia, visión doctrinal, acreditación internacional y avales que respaldan la labor de la <strong>Academia Bíblica El Evangelio</strong> en Centroamérica.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={handleOpenNuestraHistoria}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <History className="w-4 h-4" />
              <span>Nuestra historia y perfil</span>
            </button>
          </div>
        </div>

        {/* 1. Nuestros Principios: Nuestra Filosofía: Principios Eclesiológicos (Movida al principio) */}
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-10 border border-amber-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Nuestros Principios
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
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

        {/* 2. Misión Ministerial */}
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Nuestra Misión Ministerial
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
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

        {/* 2. BOTONES DEDICADOS: NUESTRA HISTORIA, PERSONAS INVOLUCRADAS, AVALES Y LEGALIDAD */}
        <div id="seccion-institucional-detalle" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Historia, Gobernanza, Respaldo y Legalidad
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Institucionalidad y Transparencia
            </h2>
            <p className="text-xs text-slate-400">
              Selecciona cada área para conocer nuestra historia y a las personas e instituciones que nos avalan y dan fe de nuestra labor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => setActiveSection('historia')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-left ${
                activeSection === 'historia'
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeSection === 'historia' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-amber-400 border border-slate-800'
              }`}>
                <History className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-amber-400">
                  Desde 1998 · Perfil
                </span>
                <span className="font-serif font-bold text-sm block">
                  Nuestra historia y perfil
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('credenciales')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-left ${
                activeSection === 'credenciales'
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeSection === 'credenciales' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-amber-400 border border-slate-800'
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-amber-400">
                  Respaldo Documentado
                </span>
                <span className="font-serif font-bold text-sm block">
                  Credenciales: Quienes Hablan por Nosotros
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('avales')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-left ${
                activeSection === 'avales'
                  ? 'bg-blue-500/15 border-blue-400 text-white shadow-lg ring-1 ring-blue-400/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeSection === 'avales' ? 'bg-blue-500 text-slate-950 font-bold' : 'bg-slate-950 text-blue-400 border border-slate-800'
              }`}>
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-blue-400">
                  Cuerpo Docente y Mentoría
                </span>
                <span className="font-serif font-bold text-sm block">
                  Reconocimiento: Nuestros Avales Académicos
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('legal')}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-left ${
                activeSection === 'legal'
                  ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg ring-1 ring-emerald-400/40'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeSection === 'legal' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-950 text-emerald-400 border border-slate-800'
              }`}>
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-emerald-400">
                  Marco Legal Gubernamental
                </span>
                <span className="font-serif font-bold text-sm block">
                  Administración y Operatividad Legal
                </span>
              </div>
            </button>
          </div>

          {/* Dedicated Content Box for Active Button */}
          <div className="bg-slate-900 rounded-3xl p-5 sm:p-10 border border-slate-800 shadow-2xl">
            {activeSection === 'historia' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Unified Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                      Testimonio de Servicio · 29 de Octubre de 1998 · Perfil Ministerial y Académico
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Nuestra historia: El Inicio del Ministerio y Perfil del Pastor Misionero Isaías Martínez
                    </h3>
                  </div>
                </div>

                {/* Part 1: Oct 29, 1998 Testimony & Antes y Después */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>
                      El <strong className="text-white">Pastor Isaías</strong> inició su ministerio un <strong className="text-amber-300">sábado 29 de octubre de 1998</strong>.
                    </p>
                    <p>
                      Había llovido un poco y las calles lodosas estaban bien lisas. Recuerda que caminó por primera vez con unos cuantos tratados evangelísticos y unas Biblias en su mochila a la espalda, dispuesto a entregarlas a quienes quisieran escuchar el mensaje.
                    </p>
                    <p>
                      Ese día pudo predicarle a <strong className="text-white">5 personas</strong>.
                    </p>
                    <p>
                      Han pasado los años, ha viajado a muchos países y, por la gracia de Dios, ha tenido el privilegio de entregar <strong className="text-amber-300">más de 50,000 Biblias</strong> a lo largo de este tiempo, evangelizando a tantas personas en contextos muy diversos.
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl">
                      <img
                        src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/antesydespues.png"
                        alt="Antes y después del ministerio del Pastor Isaías desde 1998"
                        className="w-full h-auto block object-contain"
                        loading="lazy"
                      />
                      <div className="px-4 py-3 border-t border-slate-800 text-center">
                        <span className="text-xs font-serif text-amber-300 font-semibold block">
                          Fidelidad de Dios desde 1998 hasta hoy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 2: Pastor Isaías Portrait & Personal Testimony Quote */}
                <div className="p-5 sm:p-8 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-inner">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-4 flex flex-col items-center text-center">
                      <div className="w-40 sm:w-44 aspect-[4/4.5] rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl bg-slate-900">
                        <img
                          src={PASTOR_ISAIAS_PROFILE.portraitPhoto}
                          alt="Pastor Isaías Martínez - Fundador & Misionero Itinerante"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3 space-y-0.5">
                        <h4 className="font-serif text-lg font-bold text-white">
                          Pastor Isaías Martínez
                        </h4>
                        <p className="text-xs font-semibold text-amber-400">
                          Fundador & Misionero Itinerante
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-8 p-5 sm:p-6 rounded-2xl bg-slate-900/90 border-l-4 border-amber-400 space-y-2.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                        Al mirar atrás, el Pastor Isaías nos dice:
                      </span>
                      <blockquote className="font-serif italic text-slate-100 text-sm sm:text-base leading-relaxed">
                        "Aún hoy, al mirar hacia atrás, no puedo decir que comprendo a la perfección todos los caminos ni los planes de Dios... pero de algo sí estoy seguro: sigo solo obedeciendo Su llamado, aun en medio de las circunstancias difíciles. Solo obedeceré."
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Part 3: Central America & Southern Mexico Mountains + Rural Ministry Focus */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2">
                  <div className="lg:col-span-4 flex flex-col items-center">
                    <div className="w-full max-w-[290px] rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-950 shadow-2xl">
                      <img
                        src={PASTOR_ISAIAS_PROFILE.mountainPhoto}
                        alt={PASTOR_ISAIAS_PROFILE.mountainCaption}
                        className="w-full aspect-[3/4] object-cover block"
                        loading="lazy"
                      />
                      <div className="p-4 bg-slate-950 border-t border-slate-800 text-center space-y-1.5">
                        <p className="font-serif font-bold text-white text-sm">
                          {PASTOR_ISAIAS_PROFILE.mountainCaption}
                        </p>
                        <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-400 pt-0.5">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{PASTOR_ISAIAS_PROFILE.region}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Trayectoria Misionera desde 1998</span>
                      </h4>
                      <p>{PASTOR_ISAIAS_PROFILE.missionJourney}</p>
                      <p>{PASTOR_ISAIAS_PROFILE.medicalAndProfessional}</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Enfoque Ministerial en la Academia Rural</span>
                      </h4>
                      <p>{PASTOR_ISAIAS_PROFILE.currentFocus}</p>
                    </div>
                  </div>
                </div>

                {/* Part 4: Theological Degrees & Teaching/Multidisciplinary Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/20 space-y-4">
                    <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
                      <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                      <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                        Formación Teológica y Docencia
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {PASTOR_ISAIAS_PROFILE.theologicalTraining}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        Grados Académicos
                      </span>
                      <ul className="space-y-1.5">
                        {PASTOR_ISAIAS_PROFILE.degrees.map((deg, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{deg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-blue-500/20 space-y-4">
                    <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3">
                      <HeartPulse className="w-5 h-5 text-blue-400 shrink-0" />
                      <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                        Cátedra y Vocación Multidisciplinaria
                      </h4>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block">
                        Experiencia Docente y Colaboraciones
                      </span>
                      <ul className="space-y-1.5">
                        {PASTOR_ISAIAS_PROFILE.teachingRoles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                        Salud Pública, Brigadas e Investigación
                      </span>
                      <ul className="space-y-1.5">
                        {PASTOR_ISAIAS_PROFILE.professionalSkills.map((skill, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Part 5: Missionary Call Declaration */}
                <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border-l-4 border-amber-400 shadow-inner space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block">
                    Declaración de Llamado Misionero
                  </span>
                  <blockquote className="font-serif italic text-slate-100 text-sm sm:text-base leading-relaxed">
                    "{PASTOR_ISAIAS_PROFILE.quote}"
                  </blockquote>
                  <p className="text-xs font-semibold text-amber-300 pt-1">
                    — {PASTOR_ISAIAS_PROFILE.name}
                  </p>
                </div>

                {/* Part 6: Field Ministry Photo Gallery (1.jpg - 5.jpg) */}
                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                        Galería del Campo Misionero
                      </h4>
                      <p className="text-xs text-slate-400">
                        Imágenes de la labor pastoral, entrega de Escrituras y enseñanza bíblica en comunidades rurales.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PASTOR_ISAIAS_PROFILE.galleryPhotos.map((photo) => (
                      <button
                        key={photo.url}
                        type="button"
                        onClick={() => setLightboxPhoto(photo)}
                        className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 bg-slate-950 shadow-xl transition-all cursor-pointer text-left"
                      >
                        <div className="aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 block"
                            loading="lazy"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'credenciales' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <ScrollText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                      Sección Especial
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Credenciales: Quienes Hablan por Nosotros
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {QUIENES_SOMOS_DATA.credenciales.texto}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <BadgeCheck className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-white text-xs block">Instituciones Educativas</span>
                    <p className="text-[11px] text-slate-400">Declaraciones y convenios de apoyo de seminarios teológicos y ministerios educativos.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <BadgeCheck className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-white text-xs block">Pastores de Campo</span>
                    <p className="text-[11px] text-slate-400">Testimonio directo de ministros que han experimentado la transformación de sus púlpitos.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <BadgeCheck className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-white text-xs block">Sin Fines de Lucro</span>
                    <p className="text-[11px] text-slate-400">Compromiso como recurso genuino para el fortalecimiento exclusivo de la iglesia local.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'avales' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block">
                      Sección Especial
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Reconocimiento: Nuestros Avales Académicos
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {QUIENES_SOMOS_DATA.avales.texto}
                </p>

                <div className="p-5 rounded-xl bg-slate-950 border border-blue-500/20 space-y-3">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                    Alcance de los Avales Eclesiales:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Sínodos y presbiterios presbiterianos reformados.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Confraternidades pastorales interdenominacionales.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Red de 11 institutos bíblicos fronterizos (Guatemala/México).</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Profesores y teólogos participantes con vocación ad-honorem.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'legal' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                      Sección Especial
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Administración y Operatividad Legal
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {QUIENES_SOMOS_DATA.legal.texto}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white text-xs block">Cumplimiento en Cada País</span>
                    <p className="text-[11px] text-slate-400">
                      Operamos bajo personería jurídica eclesiástica y fundacional en El Salvador, Nicaragua, Guatemala, Honduras y Costa Rica.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white text-xs block">Libre Ejercicio de la Enseñanza</span>
                    <p className="text-[11px] text-slate-400">
                      Habilitación plena para capacitar, distribuir materiales didácticos impresos y certificar a obreros del sector religioso.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. NUESTRA BASE DOCTRINAL (Movida dentro de Quiénes Somos) */}
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-10 border border-amber-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Confesión y Principios Bíblicos
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Nuestra Base Doctrinal
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Sostenemos la inerrancia bíblica y la herencia reformada del siglo XVI, promoviendo la comunión pastoral y el amor al Evangelio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCTRINAL_POINTS.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-amber-500/30 transition-colors space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-white text-sm sm:text-base">
                    {p.number}. {p.title}
                  </h3>
                  <span className="text-[11px] text-amber-300 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {p.scriptureRef}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {p.summary}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                  {p.fullExplanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Acreditación de la Academia Bíblica El Evangelio y Apostilla de La Haya */}
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-10 border border-amber-500/30 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Reconocimiento Oficial
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
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
                <Globe className="w-4 h-4 shrink-0" />
                <span>Legalización Internacional: Apostilla de La Haya</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {QUIENES_SOMOS_DATA.acreditacion.apostilla}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Gallery Photos */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-amber-500/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Cerrar imagen"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center border border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxPhoto.url}
              alt={lightboxPhoto.alt}
              className="w-full max-h-[82vh] object-contain bg-slate-950 block"
            />
          </div>
        </div>
      )}
    </div>
  );
};
