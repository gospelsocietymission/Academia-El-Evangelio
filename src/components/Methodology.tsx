import React, { useState } from 'react';
import { Video, Users, FileEdit, Award, Eye, Clock, CheckCircle2, BookOpen } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/academyData';
import { SampleBookletModal } from './SampleBookletModal';

interface MethodologyProps {
  onOpenEnrollment: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenEnrollment }) => {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  const pillars = [
    {
      id: "teoria",
      percentage: "10%",
      label: "Teoría Didáctica",
      sublabel: "30 Horas de Video",
      icon: Video,
      description: "Videos pregrabados claros, profundos y adaptados al contexto cultural de Centroamérica. Disponibles en memoria USB o descarga para estudiar sin necesidad de conexión permanente a internet.",
      color: "from-blue-500/20 to-blue-600/10",
      accent: "text-blue-400",
      border: "border-blue-500/30"
    },
    {
      id: "practica",
      percentage: "90%",
      label: "Práctica Pastoral",
      sublabel: "Encuentros Mensuales",
      icon: Users,
      description: "Encuentros mensuales intensivos diseñados para resolver dudas cara a cara, realizar exposiciones guiadas, debates teológicos y laboratorios reales de predicación y consejería.",
      color: "from-amber-500/20 to-amber-600/10",
      accent: "text-amber-400",
      border: "border-amber-500/30"
    },
    {
      id: "material",
      percentage: "Guías",
      label: "Material Didáctico",
      sublabel: "Folletos con Espacios para Rellenar",
      icon: FileEdit,
      description: "Folletos físicos impresos con espacios guiados para rellenar, tomar notas personales y aplicar directamente lo aprendido a los desafíos de la congregación local.",
      color: "from-emerald-500/20 to-emerald-600/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/30"
    },
    {
      id: "acreditacion",
      percentage: "Nivel",
      label: "Acreditación Oficial",
      sublabel: "Técnico Universitario",
      icon: Award,
      description: "Certificación de Nivel Técnico Universitario con validez y reconocimiento tanto a nivel nacional como internacional, avalando la idoneidad teológica y ministerial del egresado.",
      color: "from-purple-500/20 to-purple-600/10",
      accent: "text-purple-400",
      border: "border-purple-500/30"
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <span>Metodología de Enseñanza</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Sistema de Estudio por Correspondencia y Autogestión
          </h2>
          
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Diseñado para que cada estudiante aprenda a su propio ritmo sin abandonar su congregación, su familia ni sus labores diarias, complementando el estudio en casa con encuentros mensuales de práctica intensiva.
          </p>
        </div>

        {/* 4 Visual Pillars (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-slate-900/90 border ${pillar.border} shadow-lg flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-extrabold text-white group-hover:scale-105 transition-transform">
                      {pillar.percentage}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-950/80 border border-slate-700 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${pillar.accent}`} />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-1">
                    {pillar.label}
                  </h3>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${pillar.accent}`}>
                    {pillar.sublabel}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight: Didactic Material & Study Booklets */}
        <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photo of the Study Booklet */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-lg border border-slate-700 group">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/src/assets/images/methodology_study_materials_1794497818833.jpg"
                  alt="Material didáctico y folleto de correspondencia de Academia Bíblica El Evangelio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 font-medium">
                Folletos impresos con guía paso a paso y espacios de notas.
              </div>
            </div>

            {/* Explanatory Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                <BookOpen className="w-4 h-4" />
                <span>Didáctica Diseñada para la Realidad Rural</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Folletos Escritos: Tu Aula de Clase en Casa
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Nuestros folletos no son simples resúmenes; son cuadernos de trabajo interactivos. Cada lección contiene preguntas de comprensión, cuadros sinópticos y espacios diseñados para que el estudiante redacte sus propios bosquejos y reflexiones teológicas.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Estudias a tu propio ritmo durante el mes (de 3 a 5 horas semanales).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Videos grabados en alta definición con audio claro y explicaciones pastorales.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Espacio mensual para convivir, almorzar juntos y orar como consiervos.</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSampleModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Muestra de Folleto Didáctico</span>
                </button>

                <button
                  onClick={onOpenEnrollment}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Solicitar Admisión</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Step-by-Step Monthly Timeline */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              ¿Cómo Funciona el Ciclo Mensual de Formación?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Cuatro etapas continuas para asegurar el aprendizaje teórico y la aplicación en tu congregación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif font-bold text-xl text-amber-400 tabular-nums">
                      Paso {item.step}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      {item.accent}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400/90 font-medium">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Sample Booklet Modal */}
      <SampleBookletModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        onEnrollClick={onOpenEnrollment}
      />
    </section>
  );
};
