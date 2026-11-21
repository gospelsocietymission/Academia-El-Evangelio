import React, { useState } from 'react';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  FileCheck2,
  GraduationCap,
  Layers,
  MessageCircle,
  Share2,
} from 'lucide-react';
import srlLogoBlanco from '../assets/images/srl_logo_blanco.svg';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface ViewMaestriasSrlProps {
  onBackToProgramas: () => void;
}

type MasterKey = 'macb' | 'maet';

interface StudyPlanCourse {
  area: 'Área Exegética' | 'Área Sistemática' | 'Área Histórica' | 'Área Práctica';
  course: string;
}

interface SrlMasterProgram {
  key: MasterKey;
  acronym: string;
  title: string;
  shortTitle: string;
  semestersLabel: string;
  creditsLabel: string;
  coursesCount: number;
  inscriptionCost: string;
  courseCost: string;
  frequencyLabel: string;
  description: string;
  objectives: string[];
  planIntro: string;
  semesters: { semester: string; courses: StudyPlanCourse[] }[];
}

const SRL_MASTERS: Record<MasterKey, SrlMasterProgram> = {
  macb: {
    key: 'macb',
    acronym: 'MACB',
    title: 'Maestría en Artes en Consejería Bíblica',
    shortTitle: 'Consejería Bíblica',
    semestersLabel: '4 semestres (aprox. 2 años)',
    creditsLabel: '60 créditos · 20 cursos',
    coursesCount: 20,
    inscriptionCost: '$40 USD',
    courseCost: '$60 USD',
    frequencyLabel: 'Una materia cada 7 semanas',
    description:
      'Diseñada para proporcionar una comprensión profunda de los principios bíblicos y teológicos que forman la consejería cristiana, integrando la teología reformada y la práctica pastoral para acompañar a creyentes en crisis, matrimonio, familia e iglesia local.',
    objectives: [
      'Integrar la teología cristiana reformada con la práctica de la consejería bíblica.',
      'Abordar crisis personales, familiares, finanzas y desafíos culturales desde las Escrituras.',
      'Equipar a pastores y consejeros con herramientas éticas, espirituales y prácticas en la iglesia local.',
    ],
    planIntro:
      'Un programa diseñado para abordar las Escrituras desde las principales ramas de la teología y las enseñanzas de los reformadores del siglo XVI, aplicado a la consejería bíblica.',
    semesters: [
      {
        semester: 'Semestre I',
        courses: [
          { area: 'Área Exegética', course: 'Introducción a la Apologética' },
          { area: 'Área Exegética', course: 'Principios de Interpretación Bíblica' },
          { area: 'Área Exegética', course: 'Introducción a la Teología Sistemática' },
          { area: 'Área Práctica', course: 'Introducción a la Consejería Bíblica' },
          { area: 'Área Sistemática', course: 'Introducción a la Antropología' },
        ],
      },
      {
        semester: 'Semestre II',
        courses: [
          { area: 'Área Práctica', course: 'Ética Cristiana' },
          { area: 'Área Histórica', course: 'Teología del Antiguo Testamento' },
          { area: 'Área Histórica', course: 'Teología del Nuevo Testamento' },
          { area: 'Área Sistemática', course: 'Unión con Cristo' },
          { area: 'Área Práctica', course: 'Consejería en la Iglesia Local' },
        ],
      },
      {
        semester: 'Semestre III',
        courses: [
          { area: 'Área Práctica', course: 'Consejería de Niños y Orientación a Adolescentes' },
          { area: 'Área Práctica', course: 'Aconsejando en Medio de los Desafíos de la Cultura' },
          { area: 'Área Práctica', course: 'Consejería Familiar Integral' },
          { area: 'Área Práctica', course: 'Seminario I' },
          { area: 'Área Práctica', course: 'Práctica en Consejería' },
        ],
      },
      {
        semester: 'Semestre IV',
        courses: [
          { area: 'Área Práctica', course: 'Consejería en Finanzas' },
          { area: 'Área Práctica', course: 'Modelos de Fe: Personajes Bíblicos y su Relevancia para la Consejería' },
          { area: 'Área Práctica', course: 'Aconsejando en Situaciones de Crisis y Manejo de Emociones' },
          { area: 'Área Práctica', course: 'Seminario II' },
          { area: 'Área Práctica', course: 'Práctica en Consejería II' },
        ],
      },
    ],
  },
  maet: {
    key: 'maet',
    acronym: 'MAET',
    title: 'Maestría en Artes en Estudios Teológicos',
    shortTitle: 'Estudios Teológicos',
    semestersLabel: '3 semestres (aprox. 2 años)',
    creditsLabel: '45 créditos · 15 cursos',
    coursesCount: 15,
    inscriptionCost: '$40 USD',
    courseCost: '$80 USD',
    frequencyLabel: 'Una materia cada 7 semanas',
    description:
      'Formación teológica integral de posgrado orientada a profundizar en las áreas exegética, sistemática, histórica y práctica, brindando bases bíblicas e históricas sólidas para la enseñanza, la predicación expositiva y el liderazgo pastoral.',
    objectives: [
      'Fortalecer el dominio hermenéutico y expositivo del Antiguo y Nuevo Testamento.',
      'Recorrer sistemáticamente las doctrinas centrales de la fe cristiana y la Reforma.',
      'Potenciar el ministerio pastoral y la predicación expositiva centrada en el Evangelio.',
    ],
    planIntro:
      'Un programa diseñado para abordar las Escrituras desde las principales ramas de la teología y las enseñanzas de los reformadores del siglo XVI.',
    semesters: [
      {
        semester: 'Semestre I',
        courses: [
          { area: 'Área Exegética', course: 'Introducción al Antiguo Testamento' },
          { area: 'Área Exegética', course: 'Introducción al Nuevo Testamento' },
          { area: 'Área Exegética', course: 'Hermenéutica' },
          { area: 'Área Sistemática', course: 'Teología Propia' },
          { area: 'Área Sistemática', course: 'Antropología' },
        ],
      },
      {
        semester: 'Semestre II',
        courses: [
          { area: 'Área Sistemática', course: 'Cristología' },
          { area: 'Área Histórica', course: 'Historia de la Iglesia Antigua' },
          { area: 'Área Sistemática', course: 'Soteriología' },
          { area: 'Área Histórica', course: 'Historia de la Iglesia Medieval' },
          { area: 'Área Histórica', course: 'Historia de la Reforma Protestante' },
        ],
      },
      {
        semester: 'Semestre III',
        courses: [
          { area: 'Área Histórica', course: 'Teología de la Reforma' },
          { area: 'Área Sistemática', course: 'Eclesiología' },
          { area: 'Área Sistemática', course: 'Escatología' },
          { area: 'Área Práctica', course: 'Teología Pastoral' },
          { area: 'Área Práctica', course: 'Predicación Expositiva' },
        ],
      },
    ],
  },
};

const SHARE_URL = 'https://academiabiblica.net/#maestrias-srl';

const SHARE_TEXT = `🎓 *Maestrías de SRL Recomendadas por la Academia Bíblica El Evangelio*
SRL Sede Semipresencial · Profesores con Doctorados en Teología

1) Maestría en Artes en Consejería Bíblica (60 créditos · $40 inscripción / $60 por materia)
2) Maestría en Artes en Estudios Teológicos (45 créditos · $40 inscripción / $80 por materia)

Consulta requisitos, admisión, costos y planes de estudio completos aquí:
${SHARE_URL}`;

export const ViewMaestriasSrl: React.FC<ViewMaestriasSrlProps> = ({ onBackToProgramas }) => {
  const [selectedMasterKey, setSelectedMasterKey] = useState<MasterKey>('macb');
  const [copied, setCopied] = useState(false);

  const selectedMaster = SRL_MASTERS[selectedMasterKey];

  const handleSelectMaster = (key: MasterKey) => {
    setSelectedMasterKey(key);
    const detailEl = document.getElementById('detalle-maestria-srl');
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Maestrías de SRL Recomendadas — Academia Bíblica El Evangelio',
          text: SHARE_TEXT,
          url: SHARE_URL,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }

    try {
      await navigator.clipboard.writeText(SHARE_TEXT);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = SHARE_TEXT;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-8 lg:py-14 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToProgramas}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Volver a Programas</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? '¡Enlace Copiado!' : 'Compartir Maestrías SRL'}</span>
          </button>
        </div>

        {/* Page Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-500/35 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 shrink-0 shadow-lg">
              <img
                src={srlLogoBlanco}
                alt="Seminario Reformado Latinoamericano (SRL)"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Recomendación de Estudios · Posgrado · SRL Sede Semipresencial</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Maestrías de SRL
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                La <strong>Academia Bíblica El Evangelio</strong> recomienda los dos programas de Maestría del <strong>Seminario Reformado Latinoamericano (SRL)</strong> en sede semipresencial, impartidos por <strong>Profesores con Doctorados en Teología</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Cards for the 2 Master's Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {(['macb', 'maet'] as MasterKey[]).map((key) => {
            const master = SRL_MASTERS[key];
            const isSelected = selectedMasterKey === key;
            return (
              <div
                key={master.key}
                className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between space-y-5 ${
                  isSelected
                    ? 'bg-slate-900 border-amber-400 shadow-2xl ring-1 ring-amber-400/40'
                    : 'bg-slate-900/70 border-slate-800 hover:border-amber-500/40 shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
                      {master.acronym} · SRL Sede Semipresencial
                    </span>
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                      {master.courseCost} USD / materia
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {master.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {master.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Duración y Créditos
                      </span>
                      <span className="text-white font-semibold block">{master.semestersLabel}</span>
                      <span className="text-amber-300 text-[11px] block">{master.creditsLabel}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Costos 2027-2028
                      </span>
                      <span className="text-white font-semibold block">
                        Inscripción: {master.inscriptionCost} <span className="text-[10px] text-slate-400 font-normal">(*anual)</span>
                      </span>
                      <span className="text-emerald-300 font-bold text-[11px] block">
                        Materia: {master.courseCost} ({master.frequencyLabel.toLowerCase()})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSelectMaster(master.key)}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg'
                        : 'bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/40'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>{isSelected ? 'Viendo Plan y Detalles Abajo' : 'Ver Plan de Estudio y Detalles'}</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      `Hola, deseo recibir orientación de la Academia Bíblica El Evangelio sobre la ${master.title} (${master.acronym}) en SRL Sede Semipresencial.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Section for Selected Master's Program */}
        <div
          id="detalle-maestria-srl"
          className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden scroll-mt-24"
        >
          {/* Switcher + Tabs Bar */}
          <div className="bg-slate-950 border-b border-slate-800 p-5 sm:p-7 space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                  Detalles Completos · {selectedMaster.acronym}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedMaster.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-amber-200 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    Profesores con Doctorados en Teología
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {selectedMaster.semestersLabel} · {selectedMaster.creditsLabel}
                  </span>
                </div>
              </div>

              {/* Quick Program Switcher */}
              <div className="grid grid-cols-1 sm:inline-flex gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 w-full lg:w-auto self-start">
                <button
                  type="button"
                  onClick={() => setSelectedMasterKey('macb')}
                  className={`px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                    selectedMasterKey === 'macb'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Consejería Bíblica ($60)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMasterKey('maet')}
                  className={`px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                    selectedMasterKey === 'maet'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Estudios Teológicos ($80)
                </button>
              </div>
            </div>

            {/* Responsive Quick-Jump Links (No Horizontal Overflow on Mobile) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection('srl-plan')}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>Plan de Estudio</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('srl-costos')}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <DollarSign className="w-3.5 h-3.5 shrink-0" />
                <span>Costos</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('srl-requisitos')}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <FileCheck2 className="w-3.5 h-3.5 shrink-0" />
                <span>Requisitos</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('srl-admision')}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                <ClipboardList className="w-3.5 h-3.5 shrink-0" />
                <span>Pasos de Admisión</span>
              </button>
            </div>
          </div>

          {/* All Sections Always Visible */}
          <div className="p-5 sm:p-8 space-y-10">
            {/* 1. Plan de Estudios */}
            <section id="srl-plan" className="space-y-5 scroll-mt-28">
              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Plan de Estudios ({selectedMaster.creditsLabel})</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedMaster.planIntro}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(['Área Exegética', 'Área Sistemática', 'Área Histórica', 'Área Práctica'] as const).map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  selectedMaster.semesters.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                } gap-4`}
              >
                {selectedMaster.semesters.map((sem) => (
                  <div
                    key={sem.semester}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
                  >
                    <div className="pb-2 border-b border-slate-800 flex items-center justify-between">
                      <h4 className="font-serif font-bold text-amber-400 text-base">
                        {sem.semester}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {sem.courses.length} cursos
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {sem.courses.map((item, idx) => (
                        <li key={idx} className="space-y-0.5 text-xs">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90 block">
                            {item.area}
                          </span>
                          <div className="flex items-start gap-1.5 text-slate-200 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item.course}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Costos */}
            <section id="srl-costos" className="space-y-5 pt-8 border-t border-slate-800 scroll-mt-28">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costos, Aranceles y Becas — {selectedMaster.acronym}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El <strong>Seminario Reformado Latinoamericano (SRL)</strong> maneja los aranceles de su programa en sede semipresencial mediante matrícula e inscripción, los cuales se actualizan en cada convocatoria oficial; consúltanos para este dato.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2.5">
                  <h4 className="font-serif font-bold text-amber-300 text-base">
                    Costos Oficiales de 2027-2028 ({selectedMaster.shortTitle})
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <li>
                      <strong>Montos vigentes en dólares estadounidenses (USD).</strong>
                    </li>
                    <li>
                      • <strong>Inscripción:</strong> {selectedMaster.inscriptionCost} <em>(*una vez anual)</em>.
                    </li>
                    <li>
                      • <strong>Cada curso (materia):</strong> {selectedMaster.courseCost}, se recibe una materia cada 7 semanas.
                    </li>
                    <li>
                      • Puedes recibirla <strong>presencial o semipresencial</strong>.
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <h4 className="font-serif font-bold text-amber-300 text-base">
                    Sistema de Becas y Subsidios
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    El SRL cuenta con políticas de becas y subsidios institucionales diseñadas para facilitar el acceso a la formación teológica reformada de posgrado en toda América Latina. Escríbenos para orientarte sobre la mejor opción según tus metas ministeriales.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Requisitos de Admisión */}
            <section id="srl-requisitos" className="space-y-5 pt-8 border-t border-slate-800 scroll-mt-28">
              <div className="space-y-3">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Requisitos de Admisión — {selectedMaster.shortTitle}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  De acuerdo con los lineamientos del Seminario Reformado Latinoamericano (SRL) para la sede semipresencial de posgrado, el aspirante debe reunir los siguientes requisitos:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Título universitario previo:</strong> Adjuntar el diploma o título de grado universitario (licenciatura o pregrado), además del diploma o certificado del último grado escolar previo (en PDF).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Documento de identidad:</strong> Copia vigente de cédula, DNI o pasaporte (en formato PDF).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Carta de recomendación pastoral:</strong> Aval formal emitido por el pastor o liderazgo de la iglesia local donde se congrega, dando testimonio de su vida cristiana y servicio eclesiástico.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Resumen teológico:</strong> Escrito argumentativo redactado por el aspirante (entre 250 y 300 palabras) sobre un tema teológico.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Convicción y perfil espiritual:</strong> Convicciones firmes en las verdades del Evangelio, interés genuino en las Escrituras y disposición de servicio a la iglesia local.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Objetivos Destacados del Programa
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedMaster.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Acreditación y naturaleza del título:</strong> El SRL está registrado como institución religiosa en Florida bajo el Estatuto 1005.06 (1) (f) y es miembro de la <em>Association of Reformed Theological Seminaries</em>; sus grados son de carácter eclesiástico/religioso.
                </p>
              </div>
            </section>

            {/* 4. Pasos de Admisión */}
            <section id="srl-admision" className="space-y-5 pt-8 border-t border-slate-800 scroll-mt-28">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Pasos de Admisión — {selectedMaster.shortTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-serif font-bold text-amber-400 text-base block">01. Consulta e Información</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Escríbenos a nosotros, te orientamos con mucho gusto.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-serif font-bold text-amber-400 text-base block">02. Preparación de Documentos</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Reúne en formato PDF tu documento de identidad, diploma escolar, título universitario de pregrado, carta de recomendación pastoral y el resumen teológico de 250–300 palabras.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-serif font-bold text-amber-400 text-base block">03. Pago de Inscripción</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Te diremos dónde realizar el pago correspondiente al proceso de inscripción a través de los canales autorizados por el SRL en Nicaragua y guarda el comprobante.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <span className="font-serif font-bold text-amber-400 text-base block">04. Registro en Línea</span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Completa el formulario oficial de inscripción seleccionando por SRL en la sede semipresencial — {selectedMaster.title}, adjunta los documentos requeridos y acepta las normativas estudiantiles.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer CTA inside Detail Card */}
          <div className="bg-slate-950 px-5 sm:px-8 py-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Orientación directa: <strong className="text-slate-200">{INSTITUTION_INFO.phone}</strong> · {INSTITUTION_INFO.domain}
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <a
                href={buildWhatsAppUrl(
                  `Hola, deseo recibir orientación de la Academia Bíblica El Evangelio sobre la ${selectedMaster.title} (${selectedMaster.acronym}) en SRL Sede Semipresencial.`
                )}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contáctenos — Academia Bíblica</span>
              </a>
              <button
                type="button"
                onClick={handleShare}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
