import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-slate-950 border border-amber-500/40 text-white rounded-xl shadow-2xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 text-xs">
        <span className="font-bold text-amber-400 block mb-0.5 font-serif">
          Academia Bíblica El Evangelio
        </span>
        <p className="text-slate-200 leading-relaxed">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-md"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
