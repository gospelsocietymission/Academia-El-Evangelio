import React, { useState } from 'react';
import { X, BookOpen, MessageCircle, CheckCircle2, MapPin, Users, Calendar } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface HistoriaBibliaRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoriaBibliaRequestModal: React.FC<HistoriaBibliaRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [churchName, setChurchName] = useState('');
  const [country, setCountry] = useState('Nicaragua');
  const [city, setCity] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [estimatedAttendees, setEstimatedAttendees] = useState('');
  const [modality, setModality] = useState<'Presencial en nuestra iglesia' | 'Virtual por ZOOM'>(
    'Presencial en nuestra iglesia'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !churchName.trim() || !city.trim()) return;

    const message = `*Solicitud Gratuita de Conferencia — Academia Bíblica El Evangelio*
📖 *Conferencia:* La historia de la Biblia en Español
👤 *Solicitante:* ${fullName.trim()}
📱 *Teléfono / WhatsApp:* ${phone.trim()}
⛪ *Iglesia / Comunidad:* ${churchName.trim()}
🌍 *País:* ${country}
📍 *Ciudad / Comunidad:* ${city.trim()}
🗓️ *Fecha tentativa:* ${preferredDate.trim() || 'Por coordinar'}
👥 *Asistentes estimados:* ${estimatedAttendees.trim() || 'Por definir'}
🎟️ *Modalidad:* ${modality}${notes.trim() ? `\n📝 *Notas:* ${notes.trim()}` : ''}
_Enviado desde academiabiblica.net_`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setChurchName('');
    setCity('');
    setPreferredDate('');
    setEstimatedAttendees('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-500/40 text-slate-100 my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="historia-biblia-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-950 px-5 sm:px-6 py-4 flex items-start justify-between gap-4 border-b border-amber-500/30">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Solicitud Gratuita para Congregaciones y Comunidades</span>
            </span>
            <h3
              id="historia-biblia-modal-title"
              className="font-serif font-bold text-lg sm:text-xl text-white leading-snug"
            >
              Conferencia: La historia de la Biblia en Español
            </h3>
            <p className="text-xs text-slate-400">
              Completa este formulario para coordinar esta conferencia gratuita en tu iglesia o comunidad rural.
            </p>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="py-8 px-4 text-center space-y-4 bg-slate-950 rounded-xl border border-emerald-500/40">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <div className="space-y-1.5 max-w-md mx-auto">
                <h4 className="font-serif text-xl font-bold text-white">
                  ¡Solicitud Lista en WhatsApp!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Se abrió WhatsApp con los detalles de tu solicitud para llevar gratuitamente la conferencia{' '}
                  <strong className="text-amber-300">La historia de la Biblia en Español</strong> a{' '}
                  <strong className="text-white">{churchName}</strong> ({city}, {country}). Nuestro equipo te responderá al{' '}
                  <strong className="text-emerald-300">{INSTITUTION_INFO.phone}</strong>.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-200 font-semibold mb-1">
                    Nombre del Pastor o Coordinador *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Pastor Juan Pérez"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+505 / +503 / +504 0000-0000"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-200 font-semibold mb-1">
                    Nombre de la Iglesia, Ministerio o Comunidad *
                  </label>
                  <input
                    type="text"
                    required
                    value={churchName}
                    onChange={(e) => setChurchName(e.target.value)}
                    placeholder="Ej. Iglesia Bíblica El Camino"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-1">
                    País *
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="México">México</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-slate-200 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ciudad, Aldea o Cantón *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ej. Masaya / Aldea Corinto"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-slate-200 font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fecha tentativa o mes deseado</span>
                  </label>
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="Ej. Marzo 2027"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-slate-200 font-semibold mb-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Asistentes estimados</span>
                  </label>
                  <input
                    type="text"
                    value={estimatedAttendees}
                    onChange={(e) => setEstimatedAttendees(e.target.value)}
                    placeholder="Ej. 35 personas / pastores"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-semibold mb-1.5">
                  Modalidad Preferida
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModality('Presencial en nuestra iglesia')}
                    className={`p-2.5 rounded-lg font-semibold border transition-all cursor-pointer text-center ${
                      modality === 'Presencial en nuestra iglesia'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                        : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    Presencial en nuestra iglesia
                  </button>
                  <button
                    type="button"
                    onClick={() => setModality('Virtual por ZOOM')}
                    className={`p-2.5 rounded-lg font-semibold border transition-all cursor-pointer text-center ${
                      modality === 'Virtual por ZOOM'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                        : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    Virtual por ZOOM
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  Comentarios o detalles adicionales
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Cuéntanos sobre tu congregación o disponibilidad de fechas..."
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-[11px] text-emerald-400 font-medium">
                  Sin costo · Atención directa vía WhatsApp ({INSTITUTION_INFO.phone})
                </span>
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2.5 text-slate-300 hover:bg-slate-800 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar Solicitud Gratuita</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
