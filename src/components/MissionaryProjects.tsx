import React, { useState } from 'react';
import { HeartHandshake, MapPin, Users, Compass, ArrowRight, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { MISSIONARY_PROJECTS, buildWhatsAppUrl } from '../data/academyData';
import { MissionaryProject } from '../types';

interface MissionaryProjectsProps {
  onSelectProjectForEnrollment?: (project: MissionaryProject) => void;
}

export const MissionaryProjects: React.FC<MissionaryProjectsProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? MISSIONARY_PROJECTS
    : MISSIONARY_PROJECTS.filter((p) => p.country.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Misiones y Obra Social</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Proyectos y Oportunidades
          </h2>
          
          <div className="mt-4 inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-serif font-semibold text-base sm:text-lg">
            "Invitamos a Misioneros a sumarse a estos proyectos"
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Nuestra visión trasciende el aula: desarrollamos ministerios pioneros en salud, recuperación de adicciones, centros de estudio y entrenamiento de campo en Centroamérica. ¡Hay un lugar para ti en la mies!
          </p>

          {/* Clean Filter by Country */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todos los Proyectos ({MISSIONARY_PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Nicaragua')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Nicaragua'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Nicaragua
            </button>
            <button
              onClick={() => setSelectedCategory('Guatemala')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Guatemala'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Guatemala
            </button>
            <button
              onClick={() => setSelectedCategory('Honduras')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'Honduras'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Honduras
            </button>
            <button
              onClick={() => setSelectedCategory('El Salvador')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'El Salvador'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              El Salvador
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image if available */}
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

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  {!project.image && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}, {project.country} · {project.category}</span>
                    </div>
                  )}

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Missionary Callout */}
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Llamado a Misioneros y Voluntarios</span>
                    </div>
                    <p className="leading-relaxed text-slate-200">
                      {project.missionaryCall}
                    </p>
                  </div>

                  {/* Specific needs list */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Áreas de Servicio y Oportunidad:
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

              {/* Action Button: Directly to WhatsApp */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={buildWhatsAppUrl(`Hola, soy misionero/voluntario y deseo sumarme al proyecto "${project.title}" en ${project.location}, ${project.country}. ¿Cómo puedo colaborar?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Sumarme a este Proyecto por WhatsApp</span>
                </a>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Conexión directa con la coordinación pastoral en WhatsApp (+505 8934-1763)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom missionary call banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            ¿Sientes el llamado a servir en Centroamérica?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Recibimos a misioneros de corto y largo plazo, maestros de instituto bíblico, profesionales de la salud y consejeros. Escríbenos directamente y busquemos juntos el lugar donde Dios desea usarte.
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl("Hola, siento el llamado de Dios para sumarme como misionero en Centroamérica con la Academia Bíblica El Evangelio. Quisiera conversar sobre las oportunidades de servicio.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Contactar a Coordinación Misionera</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
