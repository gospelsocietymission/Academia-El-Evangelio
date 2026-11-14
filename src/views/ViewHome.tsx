import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Building2, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  BookMarked, 
  Calendar, 
  Mail, 
  Heart, 
  Users, 
  History,
  User,
  Clock,
  Church,
  BookOpen,
  Share2,
  Check
} from 'lucide-react';
import { 
  INSTITUTION_INFO, 
  PHYSICAL_BRANCHES, 
  ACADEMIC_PROGRAMS, 
  CONFERENCES_DATA, 
  buildWhatsAppUrl 
} from '../data/academyData';
import { EnrollmentSubmission, ConferenceEvent } from '../types';
import { TierraBibliaCourseModal } from '../components/TierraBibliaCourseModal';
import { ConferenceCourseDetailModal, SpecialConferenceModalId } from '../components/ConferenceCourseDetailModal';

interface ViewHomeProps {
  onNavigateToProgramas: () => void;
  onNavigateToQuienesSomos: () => void;
  onNavigateToFacultad: () => void;
  onNavigateToAliados: () => void;
  onNavigateToProyectos: () => void;
  onOpenDonation: () => void;
  onOpenEnrollment: () => void;
  onOpenPastConferences: () => void;
  onRegisterConference: (conf: ConferenceEvent) => void;
  onFormSubmit: (data: EnrollmentSubmission) => void;
}

export const ViewHome: React.FC<ViewHomeProps> = ({
  onNavigateToProgramas,
  onNavigateToQuienesSomos,
  onNavigateToFacultad,
  onNavigateToAliados,
  onNavigateToProyectos,
  onOpenDonation,
  onOpenPastConferences,
  onRegisterConference,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'Nicaragua',
    city: '',
    programId: ACADEMIC_PROGRAMS[0].id,
    churchName: '',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [confFilter, setConfFilter] = useState<'all' | 'Enero 2027' | 'Febrero 2027'>('all');
  const [isTierraBibliaOpen, setIsTierraBibliaOpen] = useState(() => window.location.hash === '#tierra-de-la-biblia');
  const [specialModalId, setSpecialModalId] = useState<SpecialConferenceModalId>(null);
  const [sharedCopied, setSharedCopied] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#tierra-de-la-biblia') {
        setIsTierraBibliaOpen(true);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleShareTierraBiblia = async () => {
    const shareUrl = 'https://academiabiblica.net/#tierra-de-la-biblia';
    const shareText = `📖 Curso: La Tierra de la Biblia — Dr. Joe Fitzpatrick (Academia Bíblica El Evangelio)\nDividido en Curso I y Curso II (6 lecciones c/u). Presencial en Ahuachapán o Virtual por ZOOM.\nVer contenido completo aquí: ${shareUrl}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'La Tierra de la Biblia — Academia Bíblica El Evangelio',
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = shareText;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setSharedCopied(true);
    setTimeout(() => setSharedCopied(false), 2500);
  };

  const filteredConferences = CONFERENCES_DATA.filter((conf) => {
    if (confFilter === 'all') return true;
    return conf.date.toLowerCase().includes(confFilter.toLowerCase().split(' ')[0]);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const programObj = ACADEMIC_PROGRAMS.find((p) => p.id === formData.programId);
    const programName = programObj ? programObj.title : formData.programId;

    const waMessage = 
`*Consulta de Inscripción - Academia Bíblica El Evangelio*
👤 *Nombre:* ${formData.fullName}
📱 *Teléfono:* ${formData.phone}
${formData.email ? `📧 *Correo:* ${formData.email}\n` : ''}📍 *Ubicación:* ${formData.city ? `${formData.city}, ` : ''}${formData.country}
📖 *Programa de Interés:* ${programName}
⛪ *Iglesia / Ministerio:* ${formData.churchName || 'No especificado'}
${formData.notes ? `💬 *Consulta:* ${formData.notes}\n` : ''}
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(waMessage), '_blank', 'noopener,noreferrer');
    onFormSubmit(formData);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4500);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen w-full max-w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-800 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <span className="w-6 h-[1px] bg-amber-400"></span>
                <span>{INSTITUTION_INFO.name}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">Centroamérica</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Formación Bíblica y Ministerial al Alcance de Todos
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Llevando enseñanza bíblica sólida y contextualizada a las zonas más remotas de Centroamérica.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>10% Teoría en video · 90% Práctica mensual</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estudio por correspondencia con folletos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>6 Sedes Físicas Oficiales en Centroamérica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Acreditación con validez nacional e internacional</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={onNavigateToProgramas}
                  className="px-4 sm:px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Ver Programas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToQuienesSomos}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Quiénes Somos</span>
                </button>
                <button
                  onClick={onNavigateToFacultad}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Facultad Invitada</span>
                </button>
                <button
                  onClick={onNavigateToAliados}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Church className="w-3.5 h-3.5 text-amber-400" />
                  <span>Aliados</span>
                </button>
                <button
                  onClick={onNavigateToProyectos}
                  className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer"
                >
                  <span>Proyectos</span>
                </button>
                <button
                  onClick={onOpenDonation}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Donar</span>
                </button>
              </div>

              {/* Scripture Anchor */}
              <div className="pt-3 border-t border-slate-800 flex items-start gap-3">
                <BookMarked className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 italic">
                  <span>"{INSTITUTION_INFO.biblicalVerse.text}"</span>
                  <span className="block not-italic font-semibold text-amber-400 mt-0.5">
                    — {INSTITUTION_INFO.biblicalVerse.reference}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Imagen compacta de Centroamérica y sedes */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl p-3 space-y-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                    alt="Centroamérica y sus paisajes montañosos"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 px-2.5 py-1 rounded text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Presencia en Centroamérica</span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-xs text-slate-200">
                    <span className="font-serif font-bold text-white block text-sm">
                      5 Países · 6 Sedes Físicas Oficiales
                    </span>
                    <span className="text-[11px] text-amber-300">
                      El Salvador · Nicaragua · Guatemala · Honduras · Costa Rica
                    </span>
                  </div>
                </div>

                {/* Badges de Sedes Físicas */}
                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">Ahuachapán</span>
                    <span className="text-slate-400 text-[9px]">El Salvador</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">Chinandega</span>
                    <span className="text-slate-400 text-[9px]">Nicaragua</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">Tipitapa</span>
                    <span className="text-slate-400 text-[9px]">Nicaragua</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">Tacaná</span>
                    <span className="text-slate-400 text-[9px]">Guatemala</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">San Lorenzo</span>
                    <span className="text-slate-400 text-[9px]">Honduras</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block truncate">Cartago</span>
                    <span className="text-slate-400 text-[9px]">Costa Rica</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NUESTRAS SEDES FÍSICAS (CON FOTO RURAL DE FONDO EN CADA CUADRO) */}
      <section className="py-14 lg:py-20 border-b border-slate-800 bg-slate-900/50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Sedes Presenciales</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Nuestras Sedes Oficiales Físicas
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Centros de estudio y encuentro mensual enclavados en comunidades y zonas rurales de Centroamérica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHYSICAL_BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="relative rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/60 shadow-xl transition-all duration-300 group min-h-[300px] flex flex-col justify-between w-full"
              >
                <img
                  src={branch.ruralImage}
                  alt={`Zona rural de ${branch.fullLocation}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />

                <div className="relative z-10 p-5 sm:p-6 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider">
                      {branch.country}
                    </span>
                    <span className="text-[10px] text-slate-200 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      Sede Oficial
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors pt-1">
                    {branch.city}
                  </h3>
                  
                  <p className="text-xs font-semibold text-amber-300/90">
                    {branch.type}
                  </p>
                </div>

                <div className="relative z-10 p-5 sm:p-6 pt-0 space-y-3">
                  <p className="text-xs text-slate-200 leading-relaxed drop-shadow">
                    {branch.description}
                  </p>

                  <div className="pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-300 font-medium">
                      {branch.fullLocation}
                    </span>
                    <a
                      href={buildWhatsAppUrl(`Hola, deseo consultar sobre los horarios y actividades en la sede física de ${branch.fullLocation}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase shadow transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Consultar Sede</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              <span className="font-bold text-white block">¿Deseas habilitar una sede de estudio en tu congregación?</span>
              Coordinamos con pastores locales para abrir nuevas sedes de estudio en áreas rurales.
            </div>
            <a
              href={buildWhatsAppUrl("Hola, soy pastor y me interesa solicitar la apertura de una sede de la Academia Bíblica El Evangelio en mi congregación.")}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Solicitar Sede por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. PRÓXIMAS CONFERENCIAS (ENERO Y FEBRERO 2027) + BOTÓN CONFERENCIAS PASADAS (2004 - PRESENTE) */}
      <section className="py-14 lg:py-20 border-b border-slate-800 bg-slate-900/40 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Agenda Ministerial 2027</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Próximas Conferencias
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Calendario oficial ordenado cronológicamente por mes en Nicaragua, El Salvador, Honduras, Costa Rica y Guatemala.
              </p>
            </div>

            <button
              onClick={onOpenPastConferences}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-xs uppercase tracking-wider shadow transition-colors cursor-pointer self-start md:self-auto"
            >
              <History className="w-4 h-4 text-amber-400" />
              <span>Conferencias Pasadas (2004 - Presente)</span>
            </button>
          </div>

          {/* Month Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setConfFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                confFilter === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Todas ({CONFERENCES_DATA.length})
            </button>
            <button
              onClick={() => setConfFilter('Enero 2027')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                confFilter === 'Enero 2027'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Enero 2027
            </button>
            <button
              onClick={() => setConfFilter('Febrero 2027')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                confFilter === 'Febrero 2027'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Febrero 2027
            </button>
          </div>

          {/* Conferences Grouped by Month (zero empty spaces across breakpoints) */}
          <div className="space-y-8">
            {(() => {
              const monthSections: { label: string; items: ConferenceEvent[] }[] = [];
              if (confFilter === 'all') {
                const eneroItems = filteredConferences.filter((c) => c.date.toLowerCase().includes('enero'));
                const febreroItems = filteredConferences.filter((c) => !c.date.toLowerCase().includes('enero'));
                if (eneroItems.length) monthSections.push({ label: 'Enero 2027', items: eneroItems });
                if (febreroItems.length) monthSections.push({ label: 'Febrero 2027', items: febreroItems });
              } else {
                monthSections.push({ label: confFilter, items: filteredConferences });
              }

              return monthSections.map((section) => {
                const total = section.items.length;
                const gridClasses =
                  total === 4
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-5'
                    : total === 5
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5'
                      : total === 2
                        ? 'grid grid-cols-1 md:grid-cols-2 gap-5'
                        : total === 1
                          ? 'grid grid-cols-1 gap-5'
                          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';

                const getCardSpan = (idx: number) => {
                  if (total === 5) {
                    if (idx < 3) return 'lg:col-span-2';
                    if (idx === 3) return 'lg:col-span-3';
                    return 'md:col-span-2 lg:col-span-3';
                  }
                  if (total === 9 && idx === 8) {
                    return 'md:col-span-2 lg:col-span-1';
                  }
                  return '';
                };

                return (
                  <div key={section.label} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                          {section.label}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                        {section.items.length} {section.items.length === 1 ? 'Evento' : 'Eventos'}
                      </span>
                    </div>

                    <div className={gridClasses}>
                      {section.items.map((conf, idx) => (
                        <div
                          key={conf.id}
                          className={`p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 shadow-xl flex flex-col justify-between space-y-4 transition-all ${getCardSpan(idx)}`}
                        >
                          <div className="space-y-2.5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-[11px]">
                                {conf.date}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                                {conf.country}
                              </span>
                            </div>

                            <h4 className="font-serif font-bold text-white text-base sm:text-lg leading-snug">
                              {conf.title}
                            </h4>

                            <p className="text-xs text-slate-300 leading-relaxed">
                              {conf.description}
                            </p>

                            <div className="pt-2 space-y-1 text-[11px] text-slate-400">
                              <div className="flex items-start gap-2">
                                <User className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span className="text-slate-200 font-medium">{conf.speakers}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span>{conf.location}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span>{conf.time}</span>
                              </div>
                            </div>
                          </div>

                          {conf.id === 'conf-ahuachapan-enero-2027' ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setIsTierraBibliaOpen(true)}
                                className="flex-1 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
                              >
                                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                                <span>Ver Contenido del Curso</span>
                              </button>
                              <button
                                onClick={handleShareTierraBiblia}
                                className="py-2.5 px-3 bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                                title="Compartir contenido del curso"
                              >
                                {sharedCopied ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-300">Copiado</span>
                                  </>
                                ) : (
                                  <>
                                    <Share2 className="w-3.5 h-3.5" />
                                    <span>Compartir</span>
                                  </>
                                )}
                              </button>
                            </div>
                          ) : conf.id === 'conf-cartago-israel-feb-2027' || conf.id === 'conf-cartago-escrituras-feb-2027' ? (
                            <button
                              onClick={() => setSpecialModalId(conf.id as SpecialConferenceModalId)}
                              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
                            >
                              <BookOpen className="w-3.5 h-3.5 shrink-0" />
                              <span>Ver Contenido del Curso</span>
                            </button>
                          ) : conf.id === 'conf-managua-feb-2027' ? (
                            <button
                              onClick={() => setSpecialModalId('conf-managua-feb-2027')}
                              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
                            >
                              <BookOpen className="w-3.5 h-3.5 shrink-0" />
                              <span>Ver Contenido de la Conferencia</span>
                            </button>
                          ) : (
                            conf.id !== 'conf-nicaragua-reynaldo-enero-2027' &&
                            conf.id !== 'conf-nicaragua-isaias-enero-2027' &&
                            conf.id !== 'conf-tipitapa-feb-2027' &&
                            conf.id !== 'conf-tacana-guatemala-feb-2027' && (
                              <button
                                onClick={() => onRegisterConference(conf)}
                                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                                <span>Inscribirme por WhatsApp</span>
                              </button>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              });
            })()}
          </div>

        </div>
      </section>

      {/* 5. FORMULARIO DE CONTACTO DIRECTO A WHATSAPP Y FOOTER */}
      <footer className="pt-14 pb-12 bg-slate-950 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
            {/* Left direct info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
                Atención Pastoral Directa
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Comunícate con Nosotros
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Respondemos tus consultas de forma inmediata a través de nuestro WhatsApp pastoral oficial.
              </p>

              <a 
                href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-3 transition-colors block"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5 fill-emerald-400 text-emerald-950" />
                </div>
                <div>
                  <span className="text-emerald-300 text-[11px] font-semibold uppercase block">
                    WhatsApp Pastoral Directo:
                  </span>
                  <span className="text-white font-bold text-base">
                    {INSTITUTION_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-slate-400 text-[11px] block">Correo:</span>
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-white hover:text-amber-400 break-all">
                    {INSTITUTION_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">Portal Web:</span>
                  <a href={INSTITUTION_INFO.officialUrl} target="_blank" rel="noreferrer" className="text-amber-400 font-semibold hover:underline">
                    {INSTITUTION_INFO.domain}
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenDonation}
                className="w-full p-3.5 rounded-xl bg-gradient-to-r from-rose-950/60 to-amber-950/60 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Apoyar al Ministerio con una Donación</span>
              </button>
            </div>

            {/* Right form directly to WhatsApp */}
            <div className="lg:col-span-7 bg-slate-900 p-5 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-white mb-1">
                Formulario de Consulta e Inscripción
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Envía tus datos y se abrirá automáticamente en WhatsApp listo para enviar al <strong>{INSTITUTION_INFO.phone}</strong>.
              </p>

              {isSuccess ? (
                <div className="py-8 text-center space-y-2 bg-slate-950 p-6 rounded-xl border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">¡Abriendo WhatsApp!</p>
                  <p className="text-xs text-slate-300">Gracias por tu consulta a la Academia Bíblica El Evangelio.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Tu nombre completo"
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+505 / +503 7000-0000"
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">País</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      >
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Programa</label>
                      <select
                        value={formData.programId}
                        onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      >
                        {ACADEMIC_PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Consulta o Mensaje</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Escribe tu consulta..."
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar a WhatsApp (+505 8934-1763)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Academia Bíblica El Evangelio. Derechos reservados de la institución.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <button onClick={onNavigateToProgramas} className="hover:text-slate-300 cursor-pointer">Programas</button>
              <button onClick={onNavigateToQuienesSomos} className="hover:text-slate-300 cursor-pointer">Quiénes Somos</button>
              <button onClick={onNavigateToFacultad} className="hover:text-slate-300 cursor-pointer">Facultad Invitada</button>
              <button onClick={onNavigateToAliados} className="hover:text-slate-300 cursor-pointer">Aliados</button>
              <button onClick={onNavigateToProyectos} className="hover:text-slate-300 cursor-pointer">Proyectos</button>
              <button onClick={onOpenDonation} className="text-rose-400 hover:text-rose-300 cursor-pointer">Donar</button>
            </div>
          </div>

        </div>
      </footer>

      <TierraBibliaCourseModal
        isOpen={isTierraBibliaOpen}
        onClose={() => setIsTierraBibliaOpen(false)}
      />

      <ConferenceCourseDetailModal
        modalId={specialModalId}
        onClose={() => setSpecialModalId(null)}
      />

    </div>
  );
};
