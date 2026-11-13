import React from 'react';
import { BookMarked, Award, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/academyData';

interface HeroProps {
  onExplorePrograms: () => void;
  onExploreMethodology: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onExploreMethodology }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Subtle theological ornamental glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-column Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Quiet institutional kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              <span className="w-8 h-[1px] bg-amber-400"></span>
              <span>{INSTITUTION_INFO.name}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Centroamérica</span>
            </div>

            {/* Impactful headline with balanced line-wrap */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] text-balance">
              Formación Bíblica y Ministerial al Alcance de Todos
            </h1>

            {/* Subtitle explicitly requested */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Llevando ensenanza bíblica de nivel técnico universitario a las zonas más remotas de Centroamérica.
            </p>

            {/* Key pedagogical highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10% Teoría en video · 90% Práctica mensual</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Folletos estructurados para autoestudio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Disenado para comunidades sin internet continuo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Acreditación con validez nacional e internacional</span>
              </div>
            </div>

            {/* Two Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Ver Programas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreMethodology}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 font-medium text-sm tracking-wide active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Conoce Nuestra Metodología</span>
              </button>
            </div>

            {/* Scripture Anchor Banner */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-start gap-3">
              <BookMarked className="w-5 h-5 text-amber-400/80 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 italic">
                <span>"{INSTITUTION_INFO.biblicalVerse.text}"</span>
                <span className="block not-italic font-semibold text-amber-400/90 mt-0.5">
                  — {INSTITUTION_INFO.biblicalVerse.reference}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900/60 shadow-2xl p-2 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/hero_biblical_study_1794497818581.jpg"
                  alt="Estudio bíblico teológico con vista a las montanas de Centroamérica"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Gradient vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Nivel Técnico Universitario</span>
                  </div>
                  <p className="text-white text-sm font-serif font-medium leading-snug">
                    Educación bíblica rigurosa, pastoral y adaptada al obrero local.
                  </p>
                  <p className="text-slate-300 text-xs mt-1">
                    Encuentros mensuales en Ahuachapán y sedes regionales de Centroamérica.
                  </p>
                </div>
              </div>

              {/* Verified seal tag */}
              <div className="absolute top-5 right-5 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-lg text-[11px] font-medium text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Validez Nacional e Internacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <p className="font-serif text-2xl lg:text-3xl font-bold text-amber-400 tabular-nums">10% / 90%</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Teoría en Video / Práctica</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl lg:text-3xl font-bold text-white tabular-nums">30 Horas</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">De Video Didáctico por Ciclo</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl lg:text-3xl font-bold text-amber-400">12 Meses</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Duración de cada Técnico</p>
          </div>
          <div className="p-3">
            <p className="font-serif text-2xl lg:text-3xl font-bold text-white">4 Países</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Impacto en Centroamérica</p>
          </div>
        </div>

      </div>
    </section>
  );
};
