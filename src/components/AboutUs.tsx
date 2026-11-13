import React from 'react';
import { BookOpen, Users, Compass, Award, Globe, HeartHandshake } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/academyData';

export const AboutUs: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-20 lg:py-28 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Quiénes Somos</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Unidos por la Educación Bíblica y la Fe en Jesucristo
          </h2>
          
          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-semibold text-base sm:text-lg">
            "{INSTITUTION_INFO.motto}"
          </div>
        </div>

        {/* Story Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Editorial Text with Drop Cap */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              La <strong>Academia Bíblica El Evangelio</strong> nació de una profunda carga pastoral y un llamado compartido: un grupo de pastores y líderes comprometidos se ha unido para impartir educación bíblica y teológica de alta calidad a hombres y mujeres apasionados por el Evangelio que tradicionalmente carecen de oportunidades de estudio en sus comunidades.
            </p>
            
            <p>
              Sabemos que muchos de los siervos de Dios más fieles pastorean iglesias en cantones, aldeas y zonas rurales remotas de Centroamérica. La distancia geográfica, los horarios laborales y los costos elevados no deben ser impedimento para recibir una formación espiritual y académica sólida, acreditada tanto a nivel nacional como internacional.
            </p>
            
            <p>
              Por eso disenamos un sistema educativo semipresencial por correspondencia que rompe barreras de aislamiento, llevando materiales estructurados de nivel técnico universitario directo a las manos de quienes tienen sed de aprender y predicar la verdad de Cristo.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-amber-300/80 font-medium">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-400" />
                Presencia en El Salvador y Centroamérica
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                Alianza pastoral interdenominacional
              </span>
            </div>
          </div>

          {/* Misión & Visión Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Misión Card */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-amber-500/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Educar y formar hombres y mujeres en la Palabra de Dios con rigor bíblico, teológico y práctico, facilitando el acceso a una educación técnica acreditada en las regiones rurales más apartadas para fortalecer a la Iglesia de Jesucristo.
              </p>
            </div>

            {/* Visión Card */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ser un referente en la formación teológica accesible en Centroamérica, viendo congregaciones saludables, lideradas por pastores bíblicamente capacitados, apasionados por predicar a Cristo y ministrar con gracia y fidelidad a sus comunidades.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Institutional Character */}
        <div className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-lg bg-slate-950/40 border border-slate-800/80">
            <span className="text-amber-400 font-serif font-bold text-lg block mb-1">01. Fidelidad Bíblica</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ensenanza apegada a la inerrancia y suficiencia de las Sagradas Escrituras, sin modas pasajeras.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-950/40 border border-slate-800/80">
            <span className="text-amber-400 font-serif font-bold text-lg block mb-1">02. Accesibilidad Rural</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Materiales impresos y videos sin dependencia obligatoria de internet, adaptados a la jornada de trabajo.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-950/40 border border-slate-800/80">
            <span className="text-amber-400 font-serif font-bold text-lg block mb-1">03. Pasión Ministerial</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              No solo conocimiento intelectual, sino amor ardiente por las almas, compasión y humildad pastoral.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-slate-950/40 border border-slate-800/80">
            <span className="text-amber-400 font-serif font-bold text-lg block mb-1">04. Validez y Acreditación</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Programas con rigor técnico universitario, respaldados para el reconocimiento ministerial nacional e internacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
