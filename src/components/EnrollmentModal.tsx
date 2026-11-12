import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, MessageCircle, BookOpen } from 'lucide-react';
import { ACADEMIC_PROGRAMS, INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';
import { EnrollmentSubmission } from '../types';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EnrollmentSubmission) => void;
  initialProgramId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialProgramId,
}) => {
  const [formData, setFormData] = useState<EnrollmentSubmission>({
    fullName: '',
    phone: '',
    email: '',
    country: 'Nicaragua',
    city: '',
    programId: initialProgramId || ACADEMIC_PROGRAMS[0].id,
    churchName: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const selectedProg = ACADEMIC_PROGRAMS.find((p) => p.id === formData.programId);
    const progTitle = selectedProg ? selectedProg.title : formData.programId;

    // Compose formatted WhatsApp message
    const waText = 
`*Solicitud de Admisión - Academia Bíblica El Evangelio*
👤 *Nombre:* ${formData.fullName}
📱 *Teléfono:* ${formData.phone}
${formData.email ? `📧 *Correo:* ${formData.email}\n` : ''}📍 *País / Ciudad:* ${formData.city ? `${formData.city}, ` : ''}${formData.country}
📖 *Programa de Interés:* ${progTitle}
⛪ *Iglesia / Ministerio:* ${formData.churchName || 'No especificado'}
${formData.notes ? `💬 *Comentario:* ${formData.notes}\n` : ''}
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');

    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white px-6 py-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                Academia Bíblica El Evangelio
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Formulario de Admisión por WhatsApp
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 bg-stone-50 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-3 bg-white p-6 rounded-xl border border-emerald-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                ¡Abriendo WhatsApp Pastoral!
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                Tus datos de inscripción han sido formateados para ser enviados directamente al WhatsApp oficial <strong>{INSTITUTION_INFO.phone}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-950 text-xs flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Envío directo a WhatsApp (+505 8934-1763):</span> Estudias a tu ritmo por correspondencia con folletos y videos, asistiendo 1 sábado al mes en cualquiera de nuestras sedes oficiales en Centroamérica.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Pastor David Antonio Ramos"
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+505 / +503 7000-0000"
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    País de Residencia
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
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
                  <label className="block text-slate-800 font-semibold mb-1">
                    Municipio / Departamento
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. Chinandega, Tipitapa, Ahuachapán..."
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-semibold mb-1">
                    Programa Académico de Interés *
                  </label>
                  <select
                    value={formData.programId}
                    onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    {ACADEMIC_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title} ({prog.badge})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Iglesia Local / Cargo Ministerial
                </label>
                <input
                  type="text"
                  value={formData.churchName}
                  onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                  placeholder="Ej. Iglesia Presbiteriana / Obrero Laico"
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Comentario o Consulta para la Coordinación
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Indícanos si tienes dudas de sedes o cuotas accesibles..."
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white text-slate-900 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 border border-stone-300 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar a WhatsApp Pastoral</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
