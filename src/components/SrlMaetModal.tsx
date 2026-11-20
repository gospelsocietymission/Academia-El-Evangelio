import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ClipboardList,
  DollarSign,
  FileCheck2,
  MessageCircle,
  Share2,
  Check,
  Clock,
  GraduationCap,
  Award,
  BookOpen,
} from 'lucide-react';
import srlLogoBlanco from '../assets/images/srl_logo_blanco.svg';
import { INSTITUTION_INFO, buildWhatsAppUrl } from '../data/academyData';

interface SrlMaetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SrlTab = 'requisitos' | 'admision' | 'costos' | 'plan';

interface StudyPlanCourse {
  area: 'Área Exegética' | 'Área Sistemática' | 'Área Histórica' | 'Área Práctica';
  course: string;
}

const STUDY_PLAN_SEMESTERS: { semester: string; courses: StudyPlanCourse[] }[] = [
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
];

const SHARE_SRL_URL = 'https://academiabiblica.net/#maestria-srl';

const SHARE_SRL_TEXT = `🎓 *Maestría en Artes en Consejería Bíblica — SRL Sede Semipresencial*
Recomendado por la Academia Bíblica El Evangelio

Profesores con Doctorados en Teología · 4 semestres (60 créditos).
Consulta los Requisitos, Pasos de Admisión, Costos 2027-2028 ($40 inscripción / $60 por materia) y Plan de Estudios directamente aquí:
${SHARE_SRL_URL}`;

export const SrlMaetModal: React.FC<SrlMaetModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<SrlTab>('requisitos');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShareDetails = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Maestría en Artes en Consejería Bíblica — SRL Sede Semipresencial',
          text: SHARE_SRL_TEXT,
          url: SHARE_SRL_URL,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }

    try {
      await navigator.clipboard.writeText(SHARE_SRL_TEXT);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = SHARE_SRL_TEXT;
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
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl border border-amber-500/30 text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="srl-macb-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-slate-950 text-white relative border-b border-amber-500/30 shrink-0">
          <div className="p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pr-16">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                <img
                  src={srlLogoBlanco}
                  alt="Logo Seminario Reformado Latinoamericano (SRL)"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Recomendación de Estudios · SRL Sede Semipresencial
                </span>
                <h2
                  id="srl-macb-modal-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  Maestría en Artes en Consejería Bíblica
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 pt-0.5">
                  <span className="inline-flex items-center gap-1.5 text-amber-200 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    Profesores con Doctorados en Teología.
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    4 semestres (aprox. 2 años · 60 créditos)
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleShareDetails}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
                title="Compartir detalles de la maestría"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 px-6 border-t border-slate-800/80 bg-slate-900/90 overflow-x-auto">
            <button
              onClick={() => setActiveTab('requisitos')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 inline-flex items-center gap-1.5 ${
                activeTab === 'requisitos'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Requisitos</span>
            </button>
            <button
              onClick={() => setActiveTab('admision')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 inline-flex items-center gap-1.5 ${
                activeTab === 'admision'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ClipboardList className="w-3.5 h-3.5" />
              <span>Pasos de Admisión</span>
            </button>
            <button
              onClick={() => setActiveTab('costos')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 inline-flex items-center gap-1.5 ${
                activeTab === 'costos'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>Costos</span>
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border-b-2 inline-flex items-center gap-1.5 ${
                activeTab === 'plan'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Plan de Estudio</span>
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-slate-950/60">
          {activeTab === 'requisitos' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Descripción y Requisitos de Admisión</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  La <strong>Maestría en Artes en Consejería Bíblica</strong> está diseñada para proporcionar a los estudiantes una comprensión profunda de los principios bíblicos y teológicos que forman la consejería cristiana, integrando la fe y la práctica ministerial. De acuerdo con los lineamientos del Seminario Reformado Latinoamericano (SRL) para la sede semipresencial de posgrado, el aspirante debe reunir los siguientes requisitos:
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
                      <strong>Perfil espiritual y llamado a la consejería:</strong> Fe firme en el Evangelio, genuino llamado al ministerio de cuidado pastoral y consejería, sensibilidad hacia el sufrimiento humano, compromiso con la autoridad de las Escrituras y espíritu de servicio en la iglesia local.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Acreditación y naturaleza del título:</strong> El SRL está registrado como institución religiosa en Florida bajo el Estatuto 1005.06 (1) (f) y es miembro de la <em>Association of Reformed Theological Seminaries</em>; sus grados otorgados son de carácter eclesiástico/religioso.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'admision' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Pasos de Admisión</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="font-serif font-bold text-amber-400 text-base block">01. Consulta e Información</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Escríbenos a nosotros, te orientamos con mucho gusto.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="font-serif font-bold text-amber-400 text-base block">02. Preparación de Documentos</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Reúne en formato PDF tu documento de identidad, diploma escolar, título universitario de pregrado, carta de recomendación pastoral y el resumen teológico de 250–300 palabras.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="font-serif font-bold text-amber-400 text-base block">03. Pago de Inscripción</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Te diremos dónde realizar el pago correspondiente al proceso de inscripción a través de los canales autorizados por el SRL en Nicaragua y guarda el comprobante.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <span className="font-serif font-bold text-amber-400 text-base block">04. Registro en Línea</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Completa el formulario oficial de inscripción seleccionando por SRL en la sede semipresencial — Maestría en Artes en Consejería Bíblica, adjunta los documentos requeridos y acepta las normativas estudiantiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'costos' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Costos, Aranceles y Becas</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    El <strong>Seminario Reformado Latinoamericano (SRL)</strong> maneja los aranceles de su programa en sede semipresencial mediante matrícula e inscripción, los cuales se actualizan en cada convocatoria oficial; consúltanos para este dato.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <h4 className="font-serif font-bold text-amber-300 text-sm">
                        Sistema de Becas y Subsidios
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        El SRL cuenta con políticas de becas y subsidios institucionales diseñadas para facilitar el acceso a la formación teológica reformada de posgrado en toda América Latina.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                      <h4 className="font-serif font-bold text-amber-300 text-sm">
                        Costos Oficiales de 2027-2028
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-200 leading-relaxed">
                        <li>
                          <strong>Montos vigentes en dólares estadounidenses (USD).</strong>
                        </li>
                        <li>
                          • <strong>Inscripción:</strong> $40 USD <em>(*una vez anual)</em>.
                        </li>
                        <li>
                          • <strong>Cada curso (materia):</strong> $60 USD, se recibe una materia cada 7 semanas.
                        </li>
                        <li>
                          • Puedes recibirla <strong>presencial o semipresencial</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'plan' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Plan de Estudios (60 Créditos · 4 Semestres)</span>
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Un programa diseñado para abordar las Escrituras desde las principales ramas de la teología y las enseñanzas de los reformadores del siglo XVI, aplicado a la consejería bíblica.
                    </p>
                  </div>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {STUDY_PLAN_SEMESTERS.map((sem) => (
                    <div
                      key={sem.semester}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
                    >
                      <div className="pb-2 border-b border-slate-800 flex items-center justify-between">
                        <h4 className="font-serif font-bold text-amber-400 text-base">
                          {sem.semester}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">
                          5 cursos
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
              </div>
            </div>
          )}

          {/* Action Buttons Footer inside Modal */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={buildWhatsAppUrl(
                'Hola, deseo recibir orientación de la Academia Bíblica El Evangelio sobre el programa recomendado de SRL Sede Semipresencial: Maestría en Artes en Consejería Bíblica.'
              )}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contáctenos — Academia Bíblica</span>
            </a>

            <button
              type="button"
              onClick={handleShareDetails}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? '¡Enlace Copiado!' : 'Compartir Detalles de la Maestría'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-950 px-6 py-3.5 flex items-center justify-between border-t border-slate-800 text-xs text-slate-400 shrink-0">
          <span>
            {INSTITUTION_INFO.domain} · Orientación: {INSTITUTION_INFO.phone}
          </span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-medium underline cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
