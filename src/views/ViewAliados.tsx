import React from 'react';
import { Church, PlusCircle, Globe, MessageCircle } from 'lucide-react';
import { MINISTRY_ALLIES_REGIONS, buildWhatsAppUrl } from '../data/academyData';

interface ViewAliadosProps {
  onOpenAlliedChurchesModal: () => void;
}

export const ViewAliados: React.FC<ViewAliadosProps> = ({
  onOpenAlliedChurchesModal,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <Church className="w-4 h-4 text-amber-400" />
            <span>Comunión y Respaldo Eclesial</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Nuestros Aliados - Amigos del Ministerio
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Iglesias, redes pastorales, sínodos e institutos bíblicos que caminan fraternalmente junto a la Academia Bíblica El Evangelio.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAlliedChurchesModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <Church className="w-4 h-4" />
              <span>Ver Directorio / Unir mi Iglesia</span>
            </button>
          </div>
        </div>

        {/* Grouped Iconitos por Región */}
        <div className="space-y-6">
          {MINISTRY_ALLIES_REGIONS.map((regionGroup, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800/80 shadow-xl space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-white font-serif">
                    {regionGroup.countryBadge}
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                  {regionGroup.allies.length} Iglesias / Ministerios
                </span>
              </div>

              {/* Pequenos Iconitos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {regionGroup.allies.map((ally, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Church className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {ally.name}
                      </h3>
                      {ally.location && (
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {ally.location}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banner para sumar más iglesias */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-300 space-y-1 text-center sm:text-left">
            <span className="font-bold text-white block text-base font-serif">
              ¿Desea tu congregación sumarse a la red de iglesias aliadas?
            </span>
            <span>
              Facilitamos folletos de estudio y formación para pastores y obreros de tu comunidad.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenAlliedChurchesModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Registrar Iglesia</span>
            </button>
            <a
              href={buildWhatsAppUrl("Hola, deseamos consultar sobre cómo nuestra iglesia puede caminar como aliada junto a la Academia Bíblica El Evangelio.")}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Alianzas</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
