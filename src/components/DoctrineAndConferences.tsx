import React, { useState } from 'react';
import { Shield, Calendar, MapPin, Users, BookOpen, ChevronDown, ChevronUp, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { DOCTRINAL_POINTS, CONFERENCES_DATA } from '../data/academyData';
import { ConferenceEvent } from '../types';

interface DoctrineAndConferencesProps {
  onRegisterConference: (conference: ConferenceEvent) => void;
}

export const DoctrineAndConferences: React.FC<DoctrineAndConferencesProps> = ({
  onRegisterConference,
}) => {
  const [activeTab, setActiveTab] = useState<'doctrina' | 'conferencias'>('doctrina');
  const [expandedDoctrineId, setExpandedDoctrineId] = useState<string | null>('escrituras');

  const toggleDoctrine = (id: string) => {
    setExpandedDoctrineId(expandedDoctrineId === id ? null : id);
  };

  return (
    <section id="doctrina-eventos" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Doctrina y Vida Eclesial</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Confesión de Fe y Próximas Conferencias
          </h2>
          
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Nuestra convicción teológica es el fundamento de cada clase, y las conferencias anuales son el punto de encuentro fraternal para los pastores y líderes de la región.
          </p>

          {/* Clean Segmented Tab Control */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('doctrina')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'doctrina'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Confesión de Fe (Base Doctrinal)</span>
            </button>
            
            <button
              onClick={() => setActiveTab('conferencias')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'conferencias'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Conferencias y Eventos ({CONFERENCES_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* TAB CONTENT 1: CONFESIÓN DE FE */}
        {activeTab === 'doctrina' && (
          <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-200">
            <div className="bg-slate-900/90 border border-amber-500/20 p-5 rounded-xl text-center text-xs text-slate-300">
              <span className="text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Fundamento Innegociable
              </span>
              Sostenemos con firmeza las verdades bíblicas históricas del cristianismo evangélico y los principios de la Reforma: <em>Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, Soli Deo Gloria</em>.
            </div>

            <div className="space-y-3">
              {DOCTRINAL_POINTS.map((point) => {
                const isExpanded = expandedDoctrineId === point.id;
                return (
                  <div
                    key={point.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDoctrine(point.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-serif font-bold text-amber-400 text-lg tabular-nums pt-0.5">
                          {point.number}
                        </span>
                        <div>
                          <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                            {point.title}
                          </h3>
                          <p className="text-xs text-amber-300/80 font-mono mt-0.5">
                            {point.scriptureRef}
                          </p>
                          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                            {point.summary}
                          </p>
                        </div>
                      </div>

                      <div className="p-1 rounded-md bg-slate-800 text-slate-400 shrink-0 mt-1">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                        <p>{point.fullExplanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 text-center">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-xs text-amber-400 hover:underline font-medium"
              >
                <span>¿Tienes dudas doctrinales específicas? Contáctanos y te compartimos el documento de fe íntegro.</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: CONFERENCIAS Y EVENTOS */}
        {activeTab === 'conferencias' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Visual Header for Conferences */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="aspect-[21/9] sm:aspect-[24/9] w-full">
                <img
                  src="/src/assets/images/conferences_fellowship_1794497819929.jpg"
                  alt="Pastores y líderes reunidos en conferencia teológica"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end p-6 sm:p-10">
                <div className="max-w-2xl space-y-2">
                  <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                    Comunión y Formación Continua
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Encuentros que Fortalecen el Ministerio Pastoral
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Nuestras conferencias reúnen a pastores rurales y urbanos para orar juntos, escuchar la fiel predicación de la Palabra y regresar renovados a sus congregaciones.
                  </p>
                </div>
              </div>
            </div>

            {/* Conference Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONFERENCES_DATA.map((conf) => (
                <div
                  key={conf.id}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
                        {conf.modality}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {conf.time}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                        {conf.theme}
                      </p>
                      <h4 className="font-serif text-lg font-bold text-white mt-1">
                        {conf.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {conf.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{conf.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{conf.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{conf.speakers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <button
                      onClick={() => onRegisterConference(conf)}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow"
                    >
                      Inscribirme a esta Conferencia
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      {conf.availableSpots}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
