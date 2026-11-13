import React, { useState, useEffect } from 'react';
import { X, FileText, Download, ExternalLink, MapPin, Calendar, User, CheckCircle2 } from 'lucide-react';
import { MISSIONARY_REPORTS } from '../data/academyData';
import { MissionaryReport } from '../types';
import { generateReportPdfUrl } from '../utils/pdfGenerator';

interface MissionaryReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MissionaryReportsModal: React.FC<MissionaryReportsModalProps> = ({ isOpen, onClose }) => {
  const [selectedReport, setSelectedReport] = useState<MissionaryReport | null>(null);
  const [pdfUrls, setPdfUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) return;
    const generated: Record<string, string> = {};
    for (const report of MISSIONARY_REPORTS) {
      generated[report.id] = generateReportPdfUrl(report);
    }
    setPdfUrls(generated);

    return () => {
      Object.values(generated).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-amber-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                Documentos de Campo (PDF)
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-white truncate">
                Reportes Misioneros
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {selectedReport ? (
            /* PDF Preview / Detail View */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <button
                  onClick={() => setSelectedReport(null)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  &larr; Volver al listado
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  {pdfUrls[selectedReport.id] && (
                    <>
                      <a
                        href={pdfUrls[selectedReport.id]}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Abrir PDF en Pestana</span>
                      </a>
                      <a
                        href={pdfUrls[selectedReport.id]}
                        download={`${selectedReport.id}.pdf`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar PDF</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              {pdfUrls[selectedReport.id] && (
                <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 h-[420px] sm:h-[480px]">
                  <iframe
                    src={pdfUrls[selectedReport.id]}
                    title={selectedReport.title}
                    className="w-full h-full border-0"
                  />
                </div>
              )}

              {/* Accessible Mobile Text Fallback below PDF */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs text-slate-300">
                <h3 className="font-serif font-bold text-white text-base">{selectedReport.title}</h3>
                <p className="leading-relaxed">{selectedReport.summary}</p>
                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <span className="font-bold text-amber-400 block">Puntos destacados:</span>
                  {selectedReport.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Report List */
            <>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed">
                Listado de reportes misioneros de ejemplo. Haz clic en <strong>Abrir PDF</strong> en cualquiera de los reportes para visualizarlo o descargarlo en formato PDF.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MISSIONARY_REPORTS.map((report) => {
                  const pdfUrl = pdfUrls[report.id];
                  return (
                    <div
                      key={report.id}
                      className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-[10px] uppercase tracking-wider">
                            PDF · Ejemplo
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-amber-400" />
                            <span>{report.date}</span>
                          </span>
                        </div>

                        <h3 className="font-serif font-bold text-white text-base leading-snug">
                          {report.title}
                        </h3>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {report.summary}
                        </p>

                        <div className="pt-1 space-y-1 text-[11px] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{report.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{report.author}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => setSelectedReport(report)}
                          className="flex-1 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Ver PDF</span>
                        </button>

                        {pdfUrl && (
                          <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                            title="Abrir PDF en nueva pestana"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Abrir</span>
                          </a>
                        )}

                        {pdfUrl && (
                          <a
                            href={pdfUrl}
                            download={`${report.id}.pdf`}
                            className="py-2 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center"
                            title="Descargar PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <span>Reportes Misioneros · Academia Biblica El Evangelio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
