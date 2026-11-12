import React, { useState } from 'react';
import { BookOpen, Compass, Award, Globe, Building2, MapPin, MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, BookMarked, Calendar, Shield, ExternalLink, Mail } from 'lucide-react';
import { INSTITUTION_INFO, PHYSICAL_BRANCHES, ACADEMIC_PROGRAMS, DOCTRINAL_POINTS, CONFERENCES_DATA, buildWhatsAppUrl } from '../data/academyData';
import { EnrollmentSubmission, ConferenceEvent } from '../types';

interface ViewHomeProps {
  onNavigateToProgramas: () => void;
  onNavigateToQuienesSomos: () => void;
  onNavigateToProyectos: () => void;
  onOpenEnrollment: () => void;
  onRegisterConference: (conf: ConferenceEvent) => void;
  onFormSubmit: (data: EnrollmentSubmission) => void;
}

export const ViewHome: React.FC<ViewHomeProps> = ({
  onNavigateToProgramas,
  onNavigateToQuienesSomos,
  onNavigateToProyectos,
  onOpenEnrollment,
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
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-300">
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
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNavigateToProgramas}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Ver Programas Académicos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateToQuienesSomos}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Quiénes Somos</span>
                </button>
                <button
                  onClick={onNavigateToProyectos}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-all cursor-pointer flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Proyectos Misioneros</span>
                </button>
              </div>

              {/* Scripture Anchor */}
              <div className="pt-3 border-t border-slate-800 flex items-start gap-3">
                <BookMarked className="w-5 h-5 text-amber-400/80 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 italic">
                  <span>"{INSTITUTION_INFO.biblicalVerse.text}"</span>
                  <span className="block not-italic font-semibold text-amber-400 mt-0.5">
                    — {INSTITUTION_INFO.biblicalVerse.reference}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl p-2 group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80"
                    alt="Estudio bíblico con Biblia abierta"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                      Nivel Técnico Universitario
                    </span>
                    <p className="text-white text-sm font-serif font-medium leading-snug">
                      Educación bíblica rigurosa, pastoral y al alcance del obrero rural.
                    </p>
                  </div>
                </div>
                <div className="absolute top-5 right-5 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-lg text-[11px] font-medium text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Validez Nacional e Internacional</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NUESTRAS SEDES FÍSICAS (CON FOTO RURAL DE FONDO EN CADA CUADRO) */}
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

      {/* 3. RESUMEN DE LAS OTRAS 3 PÁGINAS (PÁGINA PRINCIPAL PORTAL) */}
      <section className="py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
              Explora Nuestro Portal
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Toda la Información a tu Alcance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Programas */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Página de Programas</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Consejería Bíblica, Predicación Expositiva y Actualización Ministerial. Sistema por correspondencia con 10% teoría y 90% práctica.
                </p>
              </div>
              <button
                onClick={onNavigateToProgramas}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Ver Programas Oficiales</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Quiénes Somos */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Quiénes Somos</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Nuestra historia, alianza pastoral, acreditación con Apostilla de La Haya, avales académicos y principios eclesiológicos.
                </p>
              </div>
              <button
                onClick={onNavigateToQuienesSomos}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Conocer Quiénes Somos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Proyectos */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Proyectos Misioneros</h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Eco-Well Health El Crucero, Biblioteca de Tacaná, Centro Misionero en Honduras y Clínica Dr. Cisneros. ¡Súmate a la obra!
                </p>
              </div>
              <button
                onClick={onNavigateToProyectos}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <span>Ver Proyectos Misioneros</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONFESIÓN DE FE Y CONFERENCIAS */}
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

      {/* 5. FORMULARIO DE CONTACTO DIRECTO A WHATSAPP Y FOOTER */}
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
              <button onClick={onNavigateToProgramas} className="hover:text-slate-300">Programas</button>
              <button onClick={onNavigateToQuienesSomos} className="hover:text-slate-300">Quiénes Somos</button>
              <button onClick={onNavigateToProyectos} className="hover:text-slate-300">Proyectos</button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
