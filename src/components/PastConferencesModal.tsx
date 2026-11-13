import React from 'react';
import { X, History, Calendar, MapPin, User, MessageCircle } from 'lucide-react';
import { PAST_CONFERENCES_DATA, buildWhatsAppUrl } from '../data/academyData';

interface PastConferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PastConferencesModal: React.FC<PastConferencesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <History className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                Memoria Ministerial (2004 - Presente)
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-white">
                Conferencias Pasadas
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Desde el año 2004 hasta la fecha, hemos celebrado múltiples conferencias, congresos rurales y seminarios de capacitación pastoral a lo largo de Centroamérica.
          </p>

          <div className="space-y-3">
            {PAST_CONFERENCES_DATA.map((conf) => (
              <div
                key={conf.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs">
                    Año {conf.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{conf.location}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-white text-sm sm:text-base">
                  {conf.title}
                </h3>

                <p className="text-xs text-amber-200/90 italic">
                  Tema: {conf.theme}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>Expositores: {conf.speaker}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 px-6">
          <a
            href={buildWhatsAppUrl("Hola, deseo solicitar grabaciones o materiales de conferencias pasadas de la Academia Bíblica El Evangelio.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Solicitar Recursos por WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
