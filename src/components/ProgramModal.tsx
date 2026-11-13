import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2, MessageCircle, Award, Layers } from 'lucide-react';
import { AcademicProgram, EnrollmentSubmission } from '../types';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface ProgramModalProps {
  program: AcademicProgram | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry: (data: EnrollmentSubmission) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  isOpen,
  onClose,
  onSubmitInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'pensum' | 'perfil' | 'solicitar'>('pensum');
  
  // Quick inquiry form state inside modal
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'Nicaragua',
    city: '',
    churchName: '',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen || !program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Compose formatted WhatsApp message
    const waText = 
`*Solicitud de Pensum e Inscripción - ${program.title}*
👤 *Nombre:* ${formData.fullName}
📱 *Teléfono:* ${formData.phone}
${formData.email ? `📧 *Correo:* ${formData.email}\n` : ''}📍 *País / Ciudad:* ${formData.city ? `${formData.city}, ` : ''}${formData.country}
📖 *Programa Seleccionado:* ${program.title} (${program.badge})
⛪ *Iglesia / Ministerio:* ${formData.churchName || 'No especificado'}
${formData.notes ? `💬 *Consulta:* ${formData.notes}\n` : ''}
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');

    onSubmitInquiry({
      ...formData,
      programId: program.id,
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-900 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Header with Program Banner */}
        <div className="bg-slate-950 text-white relative border-b border-amber-500/30 shrink-0">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 pr-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>{program.badge}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300 font-sans lowercase">{program.duration}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {program.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {program.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 px-6 border-t border-slate-800/80 bg-slate-900/90 overflow-x-auto">
            <button
              onClick={() => setActiveTab('pensum')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                activeTab === 'pensum'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Plan de Estudios (Pensum)
            </button>
            <button
              onClick={() => setActiveTab('perfil')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                activeTab === 'perfil'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Perfil y Requisitos
            </button>
            <button
              onClick={() => setActiveTab('solicitar')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                activeTab === 'solicitar'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Solicitar por WhatsApp
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-stone-50">
          
          {/* TAB 1: PENSUM / CURRICULUM */}
          {activeTab === 'pensum' && (
            <div className="space-y-6">
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <p className="font-semibold text-slate-900 mb-0.5">Estructura Académica de 6 Módulos:</p>
                  <p>{program.highlightObjective}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.curriculum.map((module, idx) => (
                  <div
                    key={module.code}
                    className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-mono font-bold text-amber-700">{module.code}</span>
                        <span className="text-stone-500 font-medium">Módulo 0{idx + 1}</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-slate-900 mb-1.5">
                        {module.name}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>Carga horaria técnica:</span>
                      <span className="font-semibold text-slate-800">{module.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span>¿Deseas recibir el pensum completo en PDF a tu WhatsApp oficial?</span>
                <button
                  onClick={() => setActiveTab('solicitar')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Solicitar por WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE & REQUIREMENTS */}
          {activeTab === 'perfil' && (
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  Perfil del Aspirante
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Este programa está disenado pensando tanto en la realidad del pastor de congregación rural como del líder laico:
                </p>
                <ul className="space-y-2.5">
                  {program.profile.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements Card */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
                <h4 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  Requisitos de Admisión
                </h4>
                <ul className="space-y-2.5">
                  {program.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setActiveTab('solicitar')}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2 mx-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continuar a Solicitud por WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SOLICITAR / ENROLLMENT FORM */}
          {activeTab === 'solicitar' && (
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    ¡Abriendo WhatsApp Pastoral!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                    Tu solicitud para <strong>{program.title}</strong> ha sido enviada al WhatsApp <strong>{INSTITUTION_INFO.phone}</strong> para responderte al instante.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-200 pb-3">
                    <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                      <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                      <span>Envío Directo a WhatsApp ({INSTITUTION_INFO.phone})</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-slate-900">
                      Solicitud Inmediata: {program.title}
                    </h4>
                    <p className="text-xs text-stone-500">
                      Completa tus datos y serás redirigido a WhatsApp con tu mensaje redactado para atención inmediata.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Pastor Juan Carlos Pérez"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Número de Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+505 / +503 7000-0000"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Correo Electrónico (Opcional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu-correo@ejemplo.com"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        País de Residencia
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      >
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Otro">Otro país de Latinoamérica</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Municipio / Cantón / Ciudad
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Ej. Chinandega, Ahuachapán..."
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Iglesia Local / Ministerio
                      </label>
                      <input
                        type="text"
                        value={formData.churchName}
                        onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                        placeholder="Nombre de tu iglesia o congregación"
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Mensaje o Consulta Específica (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Indícanos si tienes dudas sobre la modalidad por correspondencia o sedes..."
                      className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 bg-stone-50"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer transition-all active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enviar a WhatsApp (+505 8934-1763)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-stone-100 px-6 py-3.5 flex items-center justify-between border-t border-stone-200 text-xs text-stone-500">
          <span>{INSTITUTION_INFO.domain} · WhatsApp: {INSTITUTION_INFO.phone}</span>
          <button
            onClick={onClose}
            className="text-stone-700 hover:text-slate-950 font-medium underline"
          >
            Cerrar ventana
          </button>
        </div>

      </div>
    </div>
  );
};
