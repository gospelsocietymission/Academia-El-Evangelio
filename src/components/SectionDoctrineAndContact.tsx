import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, BookOpen, ExternalLink, MessageCircle, Shield, Calendar, HelpCircle, ChevronDown, ChevronUp, Clock, Users } from 'lucide-react';
import { INSTITUTION_INFO, ACADEMIC_PROGRAMS, DOCTRINAL_POINTS, CONFERENCES_DATA, FAQ_ITEMS, buildWhatsAppUrl } from '../data/academyData';
import { EnrollmentSubmission, ConferenceEvent } from '../types';

interface SectionDoctrineAndContactProps {
  onFormSubmit: (data: EnrollmentSubmission) => void;
  onRegisterConference: (conference: ConferenceEvent) => void;
}

export const SectionDoctrineAndContact: React.FC<SectionDoctrineAndContactProps> = ({
  onFormSubmit,
  onRegisterConference,
}) => {
  const [activeTab, setActiveTab] = useState<'contacto' | 'doctrina' | 'conferencias' | 'faq'>('contacto');
  const [expandedDoctrineId, setExpandedDoctrineId] = useState<string | null>('escrituras');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact form state
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

    // Compose formatted WhatsApp message
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
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        country: 'Nicaragua',
        city: '',
        programId: ACADEMIC_PROGRAMS[0].id,
        churchName: '',
        notes: '',
      });
    }, 4500);
  };

  return (
    <footer id="contacto-doctrina" className="bg-slate-950 text-slate-300 pt-16 sm:pt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Comunión, Doctrina y Admisiones</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Contacto Pastoral, Confesión de Fe y Eventos
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Organiza tus consultas, conoce nuestra base doctrinal bíblica o regístrate a los próximos encuentros regionales.
          </p>

          {/* Interactive 4-Button Tab Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 flex-wrap justify-center gap-1 shadow-md">
            <button
              onClick={() => setActiveTab('contacto')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'contacto'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contacto y WhatsApp</span>
            </button>

            <button
              onClick={() => setActiveTab('doctrina')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'doctrina'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Confesión de Fe</span>
            </button>

            <button
              onClick={() => setActiveTab('conferencias')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'conferencias'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Próximas Conferencias</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Preguntas Frecuentes</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FORMULARIO DE CONTACTO Y WHATSAPP */}
        {activeTab === 'contacto' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 animate-in fade-in duration-300">
            {/* Direct Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a 
                href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-4 transition-colors group block"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-emerald-400 text-emerald-950" />
                </div>
                <div>
                  <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider block">
                    WhatsApp Pastoral Directo:
                  </span>
                  <span className="text-white font-bold text-base sm:text-lg">
                    {INSTITUTION_INFO.phone}
                  </span>
                  <span className="text-emerald-400 text-xs block mt-0.5">
                    (Respuesta directa y personalizada)
                  </span>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Correo Electrónico Institucional:</span>
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-white font-medium hover:text-amber-400">
                    {INSTITUTION_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Portal Web Oficial:</span>
                  <a href={INSTITUTION_INFO.officialUrl} target="_blank" rel="noreferrer" className="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                    <span>{INSTITUTION_INFO.domain}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs italic font-serif">
                "{INSTITUTION_INFO.motto}" — Educación bíblica y ministerial al alcance de todos.
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <div className="mb-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Envío Directo a WhatsApp ({INSTITUTION_INFO.phone})
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  Formulario de Inscripción y Consulta
                </h4>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-3 bg-slate-950/60 rounded-xl border border-emerald-500/30 p-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-white">
                    ¡Redirigiendo a WhatsApp Pastoral!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Tu mensaje se abrirá en WhatsApp listo para enviar al <strong>{INSTITUTION_INFO.phone}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Pastor David Ramos"
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
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500"
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
                      <label className="block text-slate-300 font-semibold mb-1">Programa de Interés</label>
                      <select
                        value={formData.programId}
                        onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500"
                      >
                        {ACADEMIC_PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Iglesia / Consulta</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Escribe tus dudas sobre sedes, folletos o becas..."
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar a WhatsApp (+505 8934-1763)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CONFESIÓN DE FE */}
        {activeTab === 'doctrina' && (
          <div className="space-y-4 max-w-4xl mx-auto pb-16 animate-in fade-in duration-300">
            <div className="bg-slate-900 border border-amber-500/20 p-4 rounded-xl text-xs text-slate-300 text-center">
              Sostenemos los pilares históricos: <em>Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, Soli Deo Gloria</em>.
            </div>

            <div className="space-y-3">
              {DOCTRINAL_POINTS.map((point) => {
                const isExpanded = expandedDoctrineId === point.id;
                return (
                  <div key={point.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedDoctrineId(isExpanded ? null : point.id)}
                      className="w-full p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-serif font-bold text-amber-400 text-lg tabular-nums pt-0.5">{point.number}</span>
                        <div>
                          <h4 className="font-serif font-bold text-base text-white">{point.title}</h4>
                          <span className="text-xs text-amber-300/80 font-mono">{point.scriptureRef}</span>
                          <p className="text-xs text-slate-300 mt-1">{point.summary}</p>
                        </div>
                      </div>
                      <div className="p-1 rounded bg-slate-800 text-slate-400 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800 bg-slate-950/40">
                        {point.fullExplanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: CONFERENCIAS */}
        {activeTab === 'conferencias' && (
          <div className="space-y-6 max-w-5xl mx-auto pb-16 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONFERENCES_DATA.map((conf) => (
                <div key={conf.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                      {conf.modality}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mt-1">{conf.title}</h4>
                    <p className="text-xs text-amber-300/80 font-semibold">{conf.theme}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{conf.description}</p>
                    <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                      <div>🗓️ {conf.date}</div>
                      <div>📍 {conf.location}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <button
                      onClick={() => onRegisterConference(conf)}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Inscribirme por WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PREGUNTAS FRECUENTES (FAQ) */}
        {activeTab === 'faq' && (
          <div className="space-y-3 max-w-4xl mx-auto pb-16 animate-in fade-in duration-300">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif font-semibold text-sm text-white">{faq.question}</span>
                    <div className="p-1 rounded bg-slate-800 text-slate-400">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Bottom Strip */}
        <div className="py-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-slate-300 font-semibold">
                © {new Date().getFullYear()} Academia Bíblica El Evangelio. Derechos reservados de la institución.
              </p>
              <p className="text-[11px] text-slate-500">
                Contacto por correo:{' '}
                <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-amber-400 hover:underline">
                  {INSTITUTION_INFO.email}
                </a>{' '}
                · WhatsApp:{' '}
                <a href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)} target="_blank" rel="noreferrer" className="text-emerald-400 font-bold hover:underline">
                  {INSTITUTION_INFO.phone}
                </a>{' '}
                · Dominio oficial:{' '}
                <a href={INSTITUTION_INFO.officialUrl} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
                  {INSTITUTION_INFO.domain}
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#inicio" className="hover:text-slate-300">01. Inicio e Institución</a>
            <a href="#academia" className="hover:text-slate-300">02. Academia y Metodología</a>
            <a href="#sedes-proyectos" className="hover:text-slate-300">03. Sedes y Proyectos</a>
            <a href="#contacto-doctrina" className="hover:text-slate-300">04. Contacto y Doctrina</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
