import React, { useState } from 'react';
import { 
  BookOpen, 
  Compass, 
  Award, 
  Globe, 
  Building2, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  BookMarked, 
  Calendar, 
  Shield, 
  ExternalLink, 
  Mail, 
  Heart, 
  Users, 
  Map as MapIcon, 
  Quote,
  Church,
  PlusCircle,
  MessageSquareQuote,
  Star
} from 'lucide-react';
import { 
  INSTITUTION_INFO, 
  PHYSICAL_BRANCHES, 
  ACADEMIC_PROGRAMS, 
  DOCTRINAL_POINTS, 
  CONFERENCES_DATA, 
  MINISTRY_ALLIES_REGIONS,
  STUDENT_TESTIMONIALS,
  buildWhatsAppUrl 
} from '../data/academyData';
import { EnrollmentSubmission, ConferenceEvent } from '../types';

interface ViewHomeProps {
  onNavigateToProgramas: () => void;
  onNavigateToQuienesSomos: () => void;
  onNavigateToFacultad: () => void;
  onNavigateToProyectos: () => void;
  onOpenDonation: () => void;
  onOpenEnrollment: () => void;
  onOpenAlliedChurchesModal: () => void;
  onRegisterConference: (conf: ConferenceEvent) => void;
  onFormSubmit: (data: EnrollmentSubmission) => void;
}

export const ViewHome: React.FC<ViewHomeProps> = ({
  onNavigateToProgramas,
  onNavigateToQuienesSomos,
  onNavigateToFacultad,
  onNavigateToProyectos,
  onOpenDonation,
  onOpenEnrollment,
  onOpenAlliedChurchesModal,
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
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <span className="w-8 h-[1px] bg-amber-400"></span>
                <span>{INSTITUTION_INFO.name}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">Centroamérica</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                Formación Bíblica y Ministerial al Alcance de Todos
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Llevando enseñanza bíblica de nivel técnico universitario a las zonas más remotas de Centroamérica.
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
              <div className="pt-3 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={onNavigateToProgramas}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
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

            {/* Right: Imagen de Centroamérica en tamaño pequeño con mapa y sedes */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl p-3 space-y-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                    alt="Centroamérica y sus paisajes montañosos"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Overlay Badge */}
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
                    <span className="font-bold text-white block">Ahuachapán</span>
                    <span className="text-slate-400 text-[9px]">El Salvador</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block">Chinandega</span>
                    <span className="text-slate-400 text-[9px]">Nicaragua</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block">Tipitapa</span>
                    <span className="text-slate-400 text-[9px]">Nicaragua</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block">Tacaná</span>
                    <span className="text-slate-400 text-[9px]">Guatemala</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block">San Lorenzo</span>
                    <span className="text-slate-400 text-[9px]">Honduras</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-bold text-white block">Cartago</span>
                    <span className="text-slate-400 text-[9px]">Costa Rica</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ZONA DE TESTIMONIALES (NUEVA SECCIÓN SOLICITADA) */}
      <section className="py-14 lg:py-20 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <MessageSquareQuote className="w-4 h-4 text-amber-400" />
              <span>Testimonios y Frutos Ministeriales</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Lo que Dicen Nuestros Pastores y Estudiantes
            </h2>
            <p className="text-sm text-slate-300">
              Hombres y mujeres de zonas rurales que hoy predican y aconsejan con solidez bíblica gracias al método por correspondencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDENT_TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 shadow-xl flex flex-col justify-between space-y-4 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="font-serif text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1">
                  <span className="font-serif font-bold text-white text-sm block">
                    {test.author}
                  </span>
                  <p className="text-[11px] text-amber-400/90 font-medium">
                    {test.role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{test.location}, {test.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a
              href={buildWhatsAppUrl("Hola, soy estudiante/egresado de la Academia Bíblica El Evangelio y deseo compartir mi testimonio ministerial.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Enviar mi Testimonio por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. MENSAJE DE NUESTRO FUNDADOR PASTOR ISAÍAS MARTÍNEZ */}
      <section className="py-16 lg:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-900/90 rounded-3xl border border-amber-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Photo */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                  <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-950">
                    <img
                      src={INSTITUTION_INFO.founder.photo}
                      alt={INSTITUTION_INFO.founder.name}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {INSTITUTION_INFO.founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    {INSTITUTION_INFO.founder.role}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Misiones y viajes itinerantes continuos desde el año {INSTITUTION_INFO.founder.startYear}
                  </p>
                </div>
              </div>

              {/* Founder Narrative & Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                  <Quote className="w-4 h-4 text-amber-400" />
                  <span>Mensaje de Nuestro Fundador</span>
                </div>

                {/* Big Core Quote Requested by User */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border-l-4 border-amber-400 border-y border-r border-slate-800 shadow-inner">
                  <p className="font-serif text-lg sm:text-xl lg:text-2xl text-amber-200 italic leading-relaxed">
                    "{INSTITUTION_INFO.founder.quote}"
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 font-sans font-semibold">
                    <span>— {INSTITUTION_INFO.founder.name}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-400 font-normal">Fundador & Misionero Itinerante</span>
                  </div>
                </div>

                {/* Biography & Mission context */}
                <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                  <p>
                    {INSTITUTION_INFO.founder.bio}
                  </p>
                  <p className="text-xs text-slate-400">
                    Por más de dos décadas, hemos visto pastores de zonas montañosas y comunidades rurales servir fielmente sin haber tenido jamás la oportunidad de asistir a un seminario formal. La Academia Bíblica El Evangelio nació para responder a ese clamor: llevar la mejor teología con sencillez, profundidad y calidez al corazón de cada comunidad.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl("Hola Pastor Isaías Martínez, me alegra conocer de su visión y ministerio a través de academiabiblica.net. Deseo ponerme en contacto con usted.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Escribir al Pastor Isaías</span>
                  </a>
                  <a
                    href={INSTITUTION_INFO.founder.mapViewerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <MapIcon className="w-4 h-4 text-amber-400" />
                    <span>Ver Mapa de Viajes Misioneros</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. MAPA DE VIAJES MISIONEROS DESDE 2004 */}
      <section className="py-16 lg:py-20 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <MapIcon className="w-4 h-4 text-amber-400" />
                <span>Ruta Misionera Histórica</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Lugares que Nuestro Fundador ha Visitado desde el 2004
              </h2>
              <p className="text-sm text-slate-300">
                Un testimonio cartográfico de más de 20 años de labor itinerante por Centroamérica, México, el Caribe, Sudamérica y el mundo, sembrando la Palabra y estableciendo alianzas pastorales.
              </p>
            </div>

            <a
              href={INSTITUTION_INFO.founder.mapViewerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 self-start md:self-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Mapa en Google Maps</span>
            </a>
          </div>

          {/* Embedded Google My Maps Frame */}
          <div className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900 relative">
            <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 px-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-200 font-medium">Mapa Interactivo Oficial — Google My Maps</span>
              </div>
              <span className="hidden sm:inline text-amber-400">
                Misiones, Conferencias y Sedes Visitadas desde 2004
              </span>
            </div>

            <div className="relative w-full h-[460px] sm:h-[540px]">
              <iframe
                src={INSTITUTION_INFO.founder.mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Mapa de Lugares que Nuestro Fundador Pastor Isaías Martínez ha visitado desde 2004"
              />
            </div>

            <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span>
                💡 Haz zoom y haz clic en los marcadores del mapa para explorar detalles de cada punto de misión.
              </span>
              <a
                href={INSTITUTION_INFO.founder.mapViewerUrl}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Ver pantalla completa</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. NUESTROS ALIADOS - AMIGOS DEL MINISTERIO (CON PEQUEÑOS ICONITOS AGRUPADOS POR REGIÓN) */}
      <section className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <Church className="w-4 h-4 text-amber-400" />
                <span>Comunión y Respaldo Eclesial</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Nuestros Aliados - Amigos del Ministerio
              </h2>
              <p className="text-sm text-slate-300">
                Iglesias, redes pastorales, sínodos e institutos bíblicos que caminan fraternalmente junto a la Academia Bíblica El Evangelio.
              </p>
            </div>

            {/* BOTÓN PARA PONER UN LISTADO DE IGLESIAS Y PODER ACTUALIZAR */}
            <button
              onClick={onOpenAlliedChurchesModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <Church className="w-4 h-4" />
              <span>Ver Directorio / Unir mi Iglesia</span>
            </button>
          </div>

          {/* Iconitos agrupados por región */}
          <div className="space-y-6">
            {MINISTRY_ALLIES_REGIONS.map((regionGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 shadow-md space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white font-serif">
                      {regionGroup.countryBadge}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                    {regionGroup.allies.length} Iglesias / Ministerios
                  </span>
                </div>

                {/* Pequeños Iconitos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {regionGroup.allies.map((ally, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-colors flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                        <Church className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-serif font-bold text-xs text-white group-hover:text-amber-300 transition-colors truncate">
                          {ally.name}
                        </h4>
                        {ally.location && (
                          <span className="text-[10px] text-slate-400 block truncate">
                            {ally.location}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Banner para sumar más iglesias */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block text-sm">¿Desea tu congregación sumarse a la red de iglesias aliadas?</span>
              Facilitamos folletos de estudio y formación para pastores y obreros de tu comunidad.
            </div>
            <button
              onClick={onOpenAlliedChurchesModal}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Registrar Iglesia en el Directorio</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. NUESTRAS SEDES FÍSICAS (CON FOTO RURAL DE FONDO EN CADA CUADRO) */}
      <section className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Sedes Presenciales</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Nuestras Sedes Oficiales Físicas
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Centros de estudio y encuentro mensual enclavados en comunidades y zonas rurales de Centroamérica.
            </p>
          </div>

          {/* 6 Cards with Rural Photo Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHYSICAL_BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="relative rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/60 shadow-xl transition-all duration-300 group min-h-[320px] flex flex-col justify-between"
              >
                {/* Background Rural Photo */}
                <img
                  src={branch.ruralImage}
                  alt={`Zona rural de ${branch.fullLocation}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for Crisp Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />

                {/* Card Top Content */}
                <div className="relative z-10 p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 font-bold text-xs uppercase tracking-wider">
                      {branch.country}
                    </span>
                    <span className="text-[10px] text-slate-200 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      Sede Oficial
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors pt-2">
                    {branch.city}
                  </h3>
                  
                  <p className="text-xs font-semibold text-amber-300/90">
                    {branch.type}
                  </p>
                </div>

                {/* Card Bottom Content */}
                <div className="relative z-10 p-6 pt-0 space-y-3">
                  <p className="text-xs text-slate-200 leading-relaxed drop-shadow">
                    {branch.description}
                  </p>

                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
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

          <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">¿Deseas habilitar una sede de estudio en tu congregación?</span>
              Coordinamos con pastores locales para abrir nuevas sedes de estudio en áreas rurales.
            </div>
            <a
              href={buildWhatsAppUrl("Hola, soy pastor y me interesa solicitar la apertura de una sede de la Academia Bíblica El Evangelio en mi congregación.")}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Solicitar Sede por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 7. CONFESIÓN DE FE Y CONFERENCIAS */}
      <section className="py-16 lg:py-20 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Base Doctrinal y Comunión
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Confesión de Fe y Próximas Conferencias
            </h2>
            <p className="text-xs text-slate-400">
              Sostenemos la inerrancia bíblica y la herencia reformada del siglo XVI, promoviendo la comunión pastoral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resumen Doctrinal */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
                <Shield className="w-4 h-4" />
                <span>Nuestra Base Doctrinal</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                {DOCTRINAL_POINTS.slice(0, 3).map((p) => (
                  <div key={p.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="font-serif font-bold text-white block">{p.number}. {p.title}</span>
                    <span className="text-[11px] text-amber-300 font-mono">{p.scriptureRef}</span>
                    <p className="mt-1 line-clamp-2">{p.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Próximas Conferencias */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
                <Calendar className="w-4 h-4" />
                <span>Próximas Conferencias</span>
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                {CONFERENCES_DATA.slice(0, 2).map((conf) => (
                  <div key={conf.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-white">{conf.title}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">{conf.modality}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{conf.theme} · 🗓️ {conf.date}</p>
                    <button
                      onClick={() => onRegisterConference(conf)}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-bold uppercase transition-colors cursor-pointer"
                    >
                      Inscribirme por WhatsApp
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FORMULARIO DE CONTACTO DIRECTO A WHATSAPP Y FOOTER */}
      <footer className="pt-16 pb-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
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
                <div>
                  <span className="text-slate-400 text-[11px] block">Correo:</span>
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-white hover:text-amber-400">
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

              {/* Botón donación en footer */}
              <button
                onClick={onOpenDonation}
                className="w-full p-3.5 rounded-xl bg-gradient-to-r from-rose-950/60 to-amber-950/60 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>Apoyar al Ministerio con una Donación</span>
              </button>
            </div>

            {/* Right form directly to WhatsApp */}
            <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Academia Bíblica El Evangelio. Derechos reservados de la institución.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <button onClick={onNavigateToProgramas} className="hover:text-slate-300 cursor-pointer">Programas</button>
              <button onClick={onNavigateToQuienesSomos} className="hover:text-slate-300 cursor-pointer">Quiénes Somos</button>
              <button onClick={onNavigateToFacultad} className="hover:text-slate-300 cursor-pointer">Facultad Invitada</button>
              <button onClick={onNavigateToProyectos} className="hover:text-slate-300 cursor-pointer">Proyectos</button>
              <button onClick={onOpenAlliedChurchesModal} className="text-amber-400 hover:text-amber-300 cursor-pointer">Directorio Iglesias</button>
              <button onClick={onOpenDonation} className="text-rose-400 hover:text-rose-300 cursor-pointer">Donar</button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
