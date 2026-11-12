import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, BookOpen, ExternalLink, MessageCircle, Building2 } from 'lucide-react';
import { INSTITUTION_INFO, ACADEMIC_PROGRAMS, PHYSICAL_BRANCHES, buildWhatsAppUrl } from '../data/academyData';
import { EnrollmentSubmission } from '../types';

interface ContactAndFooterProps {
  onFormSubmit: (data: EnrollmentSubmission) => void;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'El Salvador',
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

    // Direct redirect to WhatsApp
    const waUrl = buildWhatsAppUrl(waMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    onFormSubmit(formData);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        country: 'El Salvador',
        city: '',
        programId: ACADEMIC_PROGRAMS[0].id,
        churchName: '',
        notes: '',
      });
    }, 4500);
  };

  return (
    <footer id="contacto" className="bg-slate-950 text-slate-300 pt-16 sm:pt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form & Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Left Column: Direct Info & Pastoral Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Atención Directa por WhatsApp
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Estamos Listos para Atenderte
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Todo nuestro proceso de atención e inscripciones se canaliza de forma ágil y directa a través de nuestro <strong>WhatsApp pastoral oficial</strong>. Escríbenos y con gusto resolveremos tus consultas.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 text-xs">
              {/* WhatsApp direct card */}
              <a 
                href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 flex items-center gap-3 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-emerald-400 text-emerald-950" />
                </div>
                <div>
                  <span className="text-emerald-300 text-[11px] font-semibold uppercase tracking-wider block">
                    WhatsApp Pastoral Directo:
                  </span>
                  <span className="text-white font-bold text-sm">
                    {INSTITUTION_INFO.phone}
                  </span>
                  <span className="text-emerald-400 text-[11px] block mt-0.5">
                    (Clic para chatear inmediatamente)
                  </span>
                </div>
              </a>

              {/* Email card */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Contacto por Correo Institucional:</span>
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="text-white font-medium hover:text-amber-400 transition-colors">
                    {INSTITUTION_INFO.email}
                  </a>
                </div>
              </div>

              {/* Domain card */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Portal Web Oficial:</span>
                  <a 
                    href={INSTITUTION_INFO.officialUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>{INSTITUTION_INFO.domain}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Sedes Summary */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Sedes Oficiales Físicas:</span>
                  <span className="text-white font-medium text-[11px] leading-relaxed">
                    Ahuachapán (El Salvador) · Chinandega y Tipitapa (Nicaragua) · Cartago (Costa Rica) · Tacaná (Guatemala) · San Lorenzo (Honduras)
                  </span>
                </div>
              </div>
            </div>

            {/* Motto Callout */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs italic font-serif">
              "{INSTITUTION_INFO.motto}" — Educación bíblica al alcance de cada obrero y pastor en Centroamérica.
            </div>
          </div>

          {/* Right Column: Contact & Quick Enrollment Form that opens WhatsApp */}
          <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>Envío Directo a WhatsApp Pastoral</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-white">
                Formulario de Consulta e Inscripción
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Al hacer clic en enviar, serás redirigido directamente a WhatsApp con todos tus datos listos para ser recibidos por nuestro equipo.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-3 bg-slate-950/60 rounded-xl border border-emerald-500/30 p-6">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  ¡Abriendo WhatsApp Pastoral!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Si tu aplicación de WhatsApp no se abrió automáticamente, puedes hacer clic en el botón de abajo para enviar el mensaje directamente al <strong>{INSTITUTION_INFO.phone}</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir WhatsApp Ahora</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Tu nombre completo"
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+505 / +503 7000-0000"
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Correo Electrónico (Opcional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ejemplo@correo.com"
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      País de Residencia
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Otro">Otro País</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Municipio / Ciudad / Sede
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ej. Chinandega, Ahuachapán, Tipitapa..."
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Programa de Interés
                    </label>
                    <select
                      value={formData.programId}
                      onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                      className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      {ACADEMIC_PROGRAMS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.badge})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Iglesia Local / Cargo Ministerial (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.churchName}
                    onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                    placeholder="Ej. Iglesia Bautista / Líder de Jóvenes"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Pregunta o Consulta Adicional
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Escribe tu consulta aquí..."
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar Directamente a WhatsApp (+505 8934-1763)</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Tu mensaje se abrirá en WhatsApp con la información prellenada para respuesta inmediata.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
                <a href={buildWhatsAppUrl(INSTITUTION_INFO.whatsappText)} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-bold">
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
            <a href="#inicio" className="hover:text-slate-300 transition-colors">Inicio</a>
            <a href="#quienes-somos" className="hover:text-slate-300 transition-colors">Quiénes Somos</a>
            <a href="#metodologia" className="hover:text-slate-300 transition-colors">Metodología</a>
            <a href="#programas" className="hover:text-slate-300 transition-colors">Programas</a>
            <a href="#sedes" className="hover:text-slate-300 transition-colors">Sedes</a>
            <a href="#proyectos" className="hover:text-slate-300 transition-colors">Proyectos</a>
            <a href="#doctrina-eventos" className="hover:text-slate-300 transition-colors">Confesión de Fe</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
