import React from 'react';
import { MapPin, Building2, CheckCircle2, MessageCircle } from 'lucide-react';
import { PHYSICAL_BRANCHES, buildWhatsAppUrl, INSTITUTION_INFO } from '../data/academyData';

export const PhysicalBranches: React.FC = () => {
  return (
    <section id="sedes" className="py-20 lg:py-24 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Presencia Física en Centroamérica</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Nuestras Sedes Oficiales Físicas
          </h2>
          
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Contamos con centros de estudio y formación presencial estratégicamente ubicados para recibir a los estudiantes en sus encuentros mensuales y canalizar materiales.
          </p>
        </div>

        {/* 6 Physical Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHYSICAL_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      {branch.country}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    Sede Oficial
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {branch.city}
                </h3>
                
                <p className="text-xs font-semibold text-slate-300 mt-1 mb-3">
                  {branch.type}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {branch.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {branch.fullLocation}
                </span>
                <a
                  href={buildWhatsAppUrl(`Hola, deseo consultar sobre las actividades y estudios en la sede física de ${branch.fullLocation}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="underline underline-offset-2">Consultar Sede</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Direct WhatsApp support */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">¿Deseas abrir un aula o punto de estudio en tu congregación?</span>
              Coordinamos con pastores locales para habilitar nuevas sedes rurales y entrega de materiales.
            </div>
          </div>
          <a
            href={buildWhatsAppUrl("Hola, soy pastor y me interesa solicitar la apertura de una sede de la Academia Bíblica El Evangelio en mi congregación.")}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
