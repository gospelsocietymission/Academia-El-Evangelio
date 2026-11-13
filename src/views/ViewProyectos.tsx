import React, { useState } from 'react';
import { HeartHandshake, MapPin, Sparkles, CheckCircle2, MessageCircle, Compass } from 'lucide-react';
import { MISSIONARY_PROJECTS, buildWhatsAppUrl, INSTITUTION_INFO } from '../data/academyData';

export const ViewProyectos: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  const filteredProjects = selectedCountry === 'all'
    ? MISSIONARY_PROJECTS
    : MISSIONARY_PROJECTS.filter((p) => p.country.toLowerCase().includes(selectedCountry.toLowerCase()));

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Misiones y Servicio Comunitario</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Proyectos y Oportunidades
          </h1>
          
          <div className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-bold text-base sm:text-lg">
            "Invitamos a Misioneros a sumarse a estos proyectos"
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            La fe cristiana se manifiesta en amor práctico y servicio abnegado. Te invitamos a conocer los cuatro proyectos donde requerimos el apoyo de misioneros, líderes de ministerio y profesionales con vocación de servicio en Centroamérica.
          </p>

          {/* Filter Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCountry('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCountry === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todos los Proyectos ({MISSIONARY_PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCountry('Nicaragua')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCountry === 'Nicaragua'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Nicaragua (El Crucero)
            </button>
            <button
              onClick={() => setSelectedCountry('Guatemala')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCountry === 'Guatemala'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Guatemala (Tacaná)
            </button>
            <button
              onClick={() => setSelectedCountry('Honduras')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCountry === 'Honduras'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Honduras (San Lorenzo)
            </button>
            <button
              onClick={() => setSelectedCountry('El Salvador')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCountry === 'El Salvador'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              El Salvador
            </button>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div>
                {project.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-md text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.location}, {project.country}</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest block">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Convocatoria Misionera:</span>
                    </div>
                    <p className="leading-relaxed text-slate-200">
                      {project.missionaryCall}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Áreas donde puedes colaborar:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.needs.map((need, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={buildWhatsAppUrl(`Hola, soy misionero/voluntario y deseo sumarme al proyecto "${project.title}" en ${project.location}, ${project.country}. ¿Cómo puedo coordinar mi participación?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Sumarme a este Proyecto por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            ¿Deseas Servir como Misionero o Voluntario?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Recibimos a maestros bíblicos, médicos, consejeros y siervos dispuestos a servir en comunidades rurales. Escríbenos directamente y buscaremos juntos el proyecto adecuado.
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl("Hola, siento el llamado de Dios para sumarme como misionero en Centroamérica con la Academia Bíblica El Evangelio. Quisiera conversar sobre las oportunidades de servicio.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
            >
              <Compass className="w-4 h-4" />
              <span>Contactar a Coordinación Misionera (+505 8934-1763)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
