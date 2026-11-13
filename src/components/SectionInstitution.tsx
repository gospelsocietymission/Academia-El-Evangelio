import React, { useState } from 'react';
import { BookOpen, Compass, Users, Award, Globe, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, BookMarked } from 'lucide-react';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface SectionInstitutionProps {
  onExploreAcademy: () => void;
  onExploreBranches: () => void;
  onOpenEnrollment: () => void;
}

export const SectionInstitution: React.FC<SectionInstitutionProps> = ({
  onExploreAcademy,
  onExploreBranches,
  onOpenEnrollment,
}) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'nosotros' | 'mision-vision' | 'pilares'>('inicio');

  return (
    <section id="inicio" className="bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Navigation Buttons (Tab controller) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 flex-wrap justify-center gap-1 shadow-md">
            <button
              onClick={() => setActiveTab('inicio')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'inicio'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              01. Formación Bíblica
            </button>
            <button
              onClick={() => setActiveTab('nosotros')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'nosotros'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              02. Quiénes Somos
            </button>
            <button
              onClick={() => setActiveTab('mision-vision')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'mision-vision'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              03. Misión y Visión
            </button>
            <button
              onClick={() => setActiveTab('pilares')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'pilares'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              04. Pilares Institucionales
            </button>
          </div>
        </div>

        {/* TAB 1: HERO / FORMACIÓN BÍBLICA */}
        {activeTab === 'inicio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <span className="w-8 h-[1px] bg-amber-400"></span>
                <span>{INSTITUTION_INFO.name}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400 font-normal">Centroamérica</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                Formación Bíblica y Ministerial al Alcance de Todos
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Llevando ensenanza bíblica de nivel técnico universitario a las zonas más remotas de Centroamérica.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>10% Teoría en video · 90% Práctica mensual</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Folletos físicos estructurados para autoestudio</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sedes en Nicaragua, El Salvador, Guatemala, Honduras y Costa Rica</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Acreditación técnica nacional e internacional</span>
                </div>
              </div>

              {/* 3 Main Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onExploreAcademy}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <span>Ver Programas Académicos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onExploreBranches}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Nuestras 6 Sedes Físicas</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <span>Inscríbete por WhatsApp</span>
                </button>
              </div>

              {/* Scripture anchor */}
              <div className="pt-4 border-t border-slate-800/80 flex items-start gap-3">
                <BookMarked className="w-5 h-5 text-amber-400/80 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 italic">
                  <span>"{INSTITUTION_INFO.biblicalVerse.text}"</span>
                  <span className="block not-italic font-semibold text-amber-400 mt-0.5">
                    — {INSTITUTION_INFO.biblicalVerse.reference}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo (Unsplash reliable open Bible) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl p-2 group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80"
                    alt="Estudio bíblico con Biblia abierta y luz cálida"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                      Nivel Técnico Universitario
                    </span>
                    <p className="text-white text-sm font-serif font-medium leading-snug">
                      Educación bíblica rigurosa, pastoral y al alcance del obrero rural.
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 right-5 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-lg text-[11px] font-medium text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Validez Nacional e Internacional</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: QUIÉNES SOMOS */}
        {activeTab === 'nosotros' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Alianza Pastoral y Ministerial
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Unidos para Educar al Pueblo de Dios
              </h2>
              <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-semibold text-sm">
                "{INSTITUTION_INFO.motto}"
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                La <strong>Academia Bíblica El Evangelio</strong> nació de una profunda carga pastoral y un llamado compartido: un grupo de líderes y pastores se ha unido para impartir educación bíblica y teológica de alta calidad a hombres y mujeres apasionados por el Evangelio que tradicionalmente carecen de oportunidades de estudio en sus comunidades.
              </p>
              
              <p>
                Sabemos que muchos de los siervos de Dios más fieles pastorean iglesias en cantones, aldeas y zonas rurales remotas de Centroamérica. La distancia geográfica, los horarios laborales y los costos elevados no deben ser impedimento para recibir una formación espiritual y académica sólida, acreditada tanto a nivel nacional como internacional.
              </p>

              <p>
                A través de nuestras sedes físicas y nuestro sistema por correspondencia, llevamos materiales de nivel técnico universitario directo a las manos de quienes tienen sed de aprender y comunicar con fidelidad la Palabra de Cristo.
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-400 font-medium">
                <span>Alianza interdenominacional en 5 países</span>
                <button
                  onClick={() => setActiveTab('mision-vision')}
                  className="text-white hover:text-amber-300 underline underline-offset-4 cursor-pointer"
                >
                  Conocer Misión y Visión →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MISIÓN Y VISIÓN */}
        {activeTab === 'mision-vision' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-in fade-in duration-300">
            {/* Misión Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Nuestra Misión
              </h3>
              <div className="text-amber-400 font-serif font-semibold text-sm">
                "{INSTITUTION_INFO.motto}"
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Educar y formar hombres y mujeres en la Palabra de Dios con rigor bíblico, teológico y práctico, facilitando el acceso a una educación técnica acreditada en las regiones rurales más apartadas para fortalecer a la Iglesia de Jesucristo.
              </p>
            </div>

            {/* Visión Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Nuestra Visión
              </h3>
              <div className="text-blue-400 font-serif font-semibold text-sm">
                Expansión del Reino en Centroamérica
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ser un referente en la formación teológica accesible en Centroamérica, viendo congregaciones saludables, lideradas por pastores bíblicamente capacitados, apasionados por predicar a Cristo y ministrar con gracia y fidelidad a sus comunidades.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: PILARES INSTITUCIONALES */}
        {activeTab === 'pilares' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-serif font-bold text-2xl text-amber-400 block">01.</span>
              <h4 className="font-serif font-bold text-base text-white">Fidelidad Bíblica</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ensenanza apegada a la inerrancia y suficiencia de las Sagradas Escrituras, sin modas pasajeras.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-serif font-bold text-2xl text-amber-400 block">02.</span>
              <h4 className="font-serif font-bold text-base text-white">Accesibilidad Rural</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Materiales impresos y videos sin dependencia obligatoria de internet, adaptados a la jornada de trabajo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-serif font-bold text-2xl text-amber-400 block">03.</span>
              <h4 className="font-serif font-bold text-base text-white">Pasión Ministerial</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Amor ardiente por las almas, compasión en la consejería y humildad en el servicio pastoral.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-serif font-bold text-2xl text-amber-400 block">04.</span>
              <h4 className="font-serif font-bold text-base text-white">Acreditación Oficial</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Programas con nivel técnico universitario, con validez y reconocimiento nacional e internacional.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
