import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import { ConferenceEvent } from '../types';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface ConferenceRegisterModalProps {
  conference: ConferenceEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ConferenceRegisterModal: React.FC<ConferenceRegisterModalProps> = ({
  conference,
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [attendeeChurch, setAttendeeChurch] = useState('');
  const [attendanceMode, setAttendanceMode] = useState<'Presencial' | 'Virtual'>('Presencial');
  const [isDone, setIsDone] = useState(false);

  if (!isOpen || !conference) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeePhone) return;

    // Compose formatted WhatsApp message
    const waText = 
`*Registro a Conferencia Pastoral - Academia Bíblica El Evangelio*
📌 *Evento:* ${conference.title}
🗓️ *Fecha:* ${conference.date}
👤 *Nombre:* ${attendeeName}
📱 *Teléfono:* ${attendeePhone}
⛪ *Iglesia / Ministerio:* ${attendeeChurch || 'No especificado'}
🎟️ *Modalidad:* ${attendanceMode}
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');

    setIsDone(true);
    onSuccessToast(`¡Inscripción enviada a WhatsApp para ${attendeeName} en "${conference.title}"!`);

    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-amber-500/30">
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-amber-400 uppercase block">
              Registro a Conferencia por WhatsApp
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-white">
              {conference.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-stone-50 space-y-4">
          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5 text-xs text-stone-600">
            <p className="font-semibold text-slate-900 text-sm">{conference.theme}</p>
            <div className="flex items-center gap-2 text-stone-500">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{conference.date}</span>
              <span>·</span>
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{conference.time}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{conference.location}</span>
            </div>
          </div>

          {isDone ? (
            <div className="py-8 text-center space-y-2 bg-white p-6 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-slate-900">¡Abriendo WhatsApp!</h4>
              <p className="text-xs text-stone-600">
                Tu registro ha sido enviado al WhatsApp oficial <strong>{INSTITUTION_INFO.phone}</strong> para confirmar tu cupo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  placeholder="Tu nombre y cargo (ej. Pastor Carlos Méndez)"
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Número de Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={attendeePhone}
                  onChange={(e) => setAttendeePhone(e.target.value)}
                  placeholder="+505 / +503 7000-0000"
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Iglesia Local o Ministerio
                </label>
                <input
                  type="text"
                  value={attendeeChurch}
                  onChange={(e) => setAttendeeChurch(e.target.value)}
                  placeholder="Nombre de la congregación"
                  className="w-full p-2.5 rounded-lg border border-stone-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-1">
                  Modalidad de Asistencia
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendanceMode('Presencial')}
                    className={`p-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      attendanceMode === 'Presencial'
                        ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    Asistencia Presencial
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendanceMode('Virtual')}
                    className={`p-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      attendanceMode === 'Virtual'
                        ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    Transmisión en Vivo
                  </button>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-stone-600 hover:bg-stone-200 rounded-lg text-xs"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs shadow flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Registrar por WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
