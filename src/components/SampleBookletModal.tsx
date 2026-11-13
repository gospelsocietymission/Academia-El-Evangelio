import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, FileText, Download, HelpCircle, PenTool } from 'lucide-react';

interface SampleBookletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnrollClick: () => void;
}

export const SampleBookletModal: React.FC<SampleBookletModalProps> = ({
  isOpen,
  onClose,
  onEnrollClick,
}) => {
  const [userFillInput, setUserFillInput] = useState('');
  const [submittedCheck, setSubmittedCheck] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                Muestra Didáctica de Autoestudio
              </span>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                Folleto Didáctico: Lección 1 — Fundamentos Bíblicos
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Cerrar vista previa"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Interactive Sample of the Correspondence Booklet */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto bg-stone-50">
          
          {/* Booklet Header Simulation */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <div className="border-b border-stone-200 pb-3 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
              <span className="font-serif font-bold text-slate-900 uppercase">Academia Bíblica El Evangelio</span>
              <span>Módulo: Hermenéutica y Predicación Expositiva</span>
              <span className="text-amber-700 font-semibold">Lección 01</span>
            </div>

            <h4 className="font-serif text-xl font-bold text-slate-900">
              Tema: La Suficiencia de la Escritura en la Preparación del Mensaje
            </h4>

            <p className="text-sm text-stone-700 leading-relaxed">
              <strong>Pasaje central:</strong> <em>"Toda la Escritura es inspirada por Dios, y útil para ensenar, para redargüir, para corregir, para instruir en justicia" (2 Timoteo 3:16).</em>
            </p>

            <div className="bg-amber-50 border-l-2 border-amber-600 p-4 rounded text-xs text-amber-950 space-y-1">
              <p className="font-semibold text-amber-900">Instrucción para el estudiante:</p>
              <p>
                1. Mira el video 01 de tu memoria USB o enlace digital (30 min).<br />
                2. Lee con atención el pasaje bíblico en tu propia Biblia.<br />
                3. Completa los espacios guiados abajo con tu puno y letra (o responde aquí en la muestra digital).
              </p>
            </div>
          </div>

          {/* Fill-in Exercise Simulation */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
              <PenTool className="w-4 h-4 text-amber-600" />
              <span>Ejercicio Guiado de Aplicación</span>
            </div>

            <p className="text-sm text-stone-800 leading-relaxed">
              <strong>Pregunta 1:</strong> Según 2 Timoteo 3:16, la palabra griega <em>theopneustos</em> significa "soplada por Dios". Escribe en el siguiente espacio cuál es la diferencia entre un sermón basado en opiniones humanas y un sermón fundado en la exégesis de la Palabra de Dios:
            </p>

            {/* Interactive textarea */}
            <div className="space-y-2">
              <textarea
                value={userFillInput}
                onChange={(e) => setUserFillInput(e.target.value)}
                rows={3}
                placeholder="Escribe tu reflexión aquí para probar cómo se interactúa con el material..."
                className="w-full text-sm p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-stone-50 font-sans"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500 italic">
                  * En el curso físico, cada estudiante cuenta con folletos impresos en papel bond para trabajar cómodamente en su hogar o congregación.
                </span>
                <button
                  onClick={() => setSubmittedCheck(true)}
                  className="px-3 py-1.5 bg-slate-900 text-amber-300 text-xs font-semibold rounded-md hover:bg-slate-800 transition-colors"
                >
                  Confirmar Ejercicio
                </button>
              </div>
            </div>

            {submittedCheck && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>¡Excelente ejercicio! Este es el formato con el que nuestros alumnos avanzan módulo a módulo a su propio ritmo.</span>
              </div>
            )}
          </div>

          {/* Monthly Encounter Explanation */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-xl text-slate-800 space-y-2">
            <h5 className="font-serif font-bold text-sm text-slate-950 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              ¿Qué sucede con estos folletos en el encuentro mensual?
            </h5>
            <p className="text-xs text-stone-700 leading-relaxed">
              En el sábado del encuentro mensual, el profesor revisa tus folletos completados, responde todas las dudas acumuladas durante tus semanas de estudio en casa y se pasa de inmediato al <strong>90% de práctica</strong>: predicar el sermón estructurado, realizar dinámicas de consejería o resolver casos reales en equipo.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            Material exclusivo de Academia Bíblica El Evangelio
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 border border-stone-300 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-200 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onEnrollClick();
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold transition-all shadow"
            >
              Quiero Inscribirme
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
