import React, { useState } from 'react';
import {
  X,
  BookOpen,
  MapPin,
  Monitor,
  DollarSign,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  Calendar,
  Share2,
  Check,
  FileText,
  Sparkles,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../data/academyData';

export type SpecialConferenceModalId =
  | 'conf-gotera-escrituras-nov-2026'
  | 'conf-tacana-liderazgo-nov-2026'
  | 'conf-tipitapa-economia-dic-2026'
  | 'conf-honduras-corazon-dic-2026'
  | 'conf-cartago-israel-feb-2027'
  | 'conf-cartago-escrituras-feb-2027'
  | 'conf-managua-feb-2027'
  | null;

interface ConferenceCourseDetailModalProps {
  modalId: SpecialConferenceModalId;
  onClose: () => void;
}

const COSTA_RICA_COURSE_I_LESSONS = [
  'Bienvenida y fundamento: Lucas 24 como clave, objetivos y metodología, Juan 3:30 y el clavo romano (Is 53:5)',
  '¿Por qué estudiar la Tierra de la Biblia? Sal 42 y 125, Éx 17 y Núm 20, Jn 4, Lc 7, 1 Co 10',
  'La Gran Idea: Israel y Jerusalén como “ombligo” (Ez 5 y 38:12) y el mundo circundante',
  'Las rutas comerciales I: Camino del Mar y Ruta del Incienso',
  'Las rutas comerciales II y dimensiones: Transjordana, Desierto y Patriarcas, más el tamaño y la diversidad de la Tierra',
  'Las regiones: Baly y las 26 regiones según JUC, con repaso general.',
];

export const ConferenceCourseDetailModal: React.FC<ConferenceCourseDetailModalProps> = ({
  modalId,
  onClose,
}) => {
  const [crModality, setCrModality] = useState<'Opción Sede Presencial Cartago, Costa Rica' | 'Opción Virtual Videos grabados Asincrónico'>('Opción Sede Presencial Cartago, Costa Rica');
  const [escriturasMaterial, setEscriturasMaterial] = useState<'Solicitar PDF Online Gratuito' | 'Documento Impreso ($3)'>('Solicitar PDF Online Gratuito');
  const [goteraMaterial, setGoteraMaterial] = useState<'Solicitar PDF Online Gratuito' | 'Documento Impreso ($2)'>('Solicitar PDF Online Gratuito');
  const [copied, setCopied] = useState(false);

  if (!modalId) return null;

  const handleCopyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Determine modal content based on modalId
  const renderCostaRicaTierra = () => {
    const waText = `Hola, deseo inscribirme en el curso "La Tierra de Israel — Costa Rica" (23 de Enero al 2 de Febrero, 2027) con el Dr. Joe Fitzpatrick.\n\n📍 Modalidad elegida: ${crModality}\nQuedo atento a las indicaciones y confirmación de costo.`;
    const shareText = `📖 *La Tierra de Israel — Costa Rica* (23 de Enero al 2 de Febrero, 2027)\nDr. Joe Fitzpatrick · Academia Bíblica El Evangelio\n\nCurso I presencial en Cartago, Costa Rica y Curso II disponible en videos grabados asincrónicos.\nMás información en: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                23 de Enero al 2 de Febrero, 2027 · Costa Rica
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-white truncate">
                La Tierra de Israel — Costa Rica
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
              title="Compartir curso"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Dr. Joe Fitzpatrick */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/FITZPATRICK.png"
                alt="Dr. Joe Fitzpatrick"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Profesor Invitado</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Dr. Joe Fitzpatrick</h3>
              <p className="text-xs text-amber-200/90">
                Dr. en Teología · Misionero de MTW, USA · 23 de Enero al 2 de Febrero, 2027
              </p>
            </div>
          </div>

          {/* Course Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              Descripción del curso
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
              <p>
                Bienvenidos al estudio de la Tierra de la Biblia. Aprenderán cómo la geografía, el clima, las rutas y los cultivos de Israel dieron forma a los relatos de las Escrituras.
              </p>
              <p>
                Nuestro propósito es que la Palabra de Dios ayude a ustedes y crezcamos en amor por Cristo, de quien toda la Escritura da testimonio.
              </p>
              <p className="text-amber-200 font-medium">
                El curso está dividido en dos: nosotros veremos el Curso I, y el Curso II puede un alumno continuarlo por medio de videos grabados asincrónicos.
              </p>
            </div>
          </div>

          {/* Curso I */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="pb-2 border-b border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                Programa Presencial en Costa Rica
              </span>
              <h5 className="font-serif font-bold text-white text-base sm:text-lg">
                Curso I: La Tierra de la Biblia I (fundamentos, mapa y geografía)
              </h5>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {COSTA_RICA_COURSE_I_LESSONS.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-slate-800/80 text-xs text-blue-300 flex items-start gap-2">
              <Monitor className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>La segunda parte (Curso II) puede verla en videos grabados asincrónicamente.</span>
            </div>
          </div>

          {/* Cost & Study Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costo por cada uno de los Cursos:</span>
              </div>
              <p className="text-sm font-bold text-white">Por confirmar.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Opción Sede Presencial:</strong> Cartago, Costa Rica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Monitor className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Opción Virtual:</strong> Videos grabados Asincrónico</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enrollment CTA */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Selecciona tu modalidad de estudio
              </label>
              <select
                value={crModality}
                onChange={(e) => setCrModality(e.target.value as typeof crModality)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Opción Sede Presencial Cartago, Costa Rica">Opción Sede Presencial Cartago, Costa Rica</option>
                <option value="Opción Virtual Videos grabados Asincrónico">Opción de Virtual Videos grabados Asincrónico</option>
              </select>
            </div>

            <a
              href={buildWhatsAppUrl(waText)}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inscribirse Ahora</span>
            </a>
          </div>
        </div>
      </>
    );
  };

  const renderEscriturasCostaRica = () => {
    const waText = `Hola, deseo inscribirme en el curso "¿Cómo nos Llegaron las Sagradas Escrituras en Español?" (14 de Febrero, 2027 en Cartago, Costa Rica).\n\n📖 Material seleccionado: ${escriturasMaterial}\n📍 Sede Presencial: Cartago, Costa Rica\n\nQuedo atento a las indicaciones.`;
    const shareText = `📖 *¿Cómo nos Llegaron las Sagradas Escrituras en Español?* (14 de Febrero, 2027)\nPastor Isaías Martínez · Cartago, Costa Rica\nAcademia Bíblica El Evangelio\nPDF Online gratuito o documento impreso por $3.\nMás información en: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                14 de Febrero, 2027 · Costa Rica
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                ¿Cómo nos Llegaron las Sagradas Escrituras en Español?
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Pastor Isaías Martínez */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaiasc.jpg"
                alt="Pastor Isaías Martínez"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>14 de Febrero, 2027 · Cartago, Costa Rica</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pastor Isaías Martínez
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                Utilizaremos los recursos de los artículos proporcionados por nuestros colaboradores <strong>Sociedad Bíblica Trinitaria</strong> que nos otorgan contenido de calidad.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              ¿Cómo nos Llegaron las Sagradas Escrituras en Español?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              A veces la mano de la providencia de Dios es obvia y a veces es más difícil de discernir, pero el cristiano entiende que todo, desde el surgimiento y caída de naciones hasta el número de cabellos en su cabeza, está en las manos soberanas de Dios. Acompáñame mientras estudiamos con cuánta fidelidad Dios guió uno de los eventos más importantes de la historia: dar Su Palabra perfecta (las Sagradas Escrituras) al hombre caído.
            </p>
          </div>

          {/* Cost & Study Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costos</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Puedes solicitar el <strong className="text-white">PDF Online gratuito</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>o el <strong className="text-white">documento impreso por $3</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Opción Sede Presencial:</strong> Cartago, Costa Rica.</span>
              </p>
            </div>
          </div>

          {/* Enrollment CTA */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Selecciona tu formato de material
              </label>
              <select
                value={escriturasMaterial}
                onChange={(e) => setEscriturasMaterial(e.target.value as typeof escriturasMaterial)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Solicitar PDF Online Gratuito">PDF Online gratuito</option>
                <option value="Documento Impreso ($3)">Documento impreso ($3)</option>
              </select>
            </div>

            <a
              href={buildWhatsAppUrl(waText)}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inscribirse Ahora</span>
            </a>
          </div>
        </div>
      </>
    );
  };

  const renderManaguaConference = () => {
    const waText = `Hola, deseo registrarme para la conferencia "Amando a tu Prójimo como a ti Mismo" con el Pastor José Luis Amézquita (4 al 7 de Febrero, 2027 en Managua, Nicaragua). ¡Quedo atento para apartar mi cupo!`;
    const shareText = `📖 *Amando a tu Prójimo como a ti Mismo*\n4 al 7 de Febrero, 2027 · Managua, Nicaragua\nConferencia especial con el Pastor José Luis Amézquita (Cornerstone Church, Simi Valley, CA)\n¡Los cupos son limitados! Más información: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                4 al 7 de Febrero, 2027 · Nicaragua
              </span>
              <h2 className="font-serif text-lg sm:text-2xl font-bold text-white truncate">
                Amando a tu Prójimo como a ti Mismo
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Speaker: Pastor José Luis Amézquita */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/joseluis.png"
                alt="Pastor José Luis Amézquita"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>4 al 7 de Febrero, 2027 · Managua, Nicaragua</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Pastor José Luis Amézquita
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
                Pastor en Cornerstone Church en Simi Valley, California, USA · Equipping the Church International (ECI)
              </p>
            </div>
          </div>

          {/* Conference Content */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              Contenido de la Conferencia
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed">
              <p>
                Tenemos el inmenso honor de recibir al <strong className="text-white">Pastor José Luis Amézquita</strong>, un hombre de Dios con una amplia y fructífera trayectoria ministerial. A lo largo de los años, ha liderado numerosas misiones de Red de Misericordia, dedicando su vida a servir y a enseñarnos con su ejemplo el verdadero significado de amar al prójimo.
              </p>
              <p>
                Escucharlo es una experiencia sumamente valiosa y edificante para el espíritu. En esta ocasión, viaja especialmente desde Simi Valley, California, para compartir con nosotros este hermoso encuentro que sin duda marcará nuestras vidas. <strong className="text-amber-300">¡No te lo puedes perder!</strong>
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-100">
                <p>
                  ¿Alguna vez te has preguntado cómo mejorar tus relaciones? Te invitamos a nuestra próxima conferencia: <strong>"Amando a tu prójimo como a ti mismo"</strong>. Un espacio para reflexionar sobre el amor propio, la empatía y cómo transformar nuestro entorno desde el corazón. <strong>¡Los cupos son limitados! Regístrate hoy mismo.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <a
            href={buildWhatsAppUrl(waText)}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inscribirse Ahora (Cupos Limitados)</span>
          </a>
        </div>
      </>
    );
  };

  const renderEscriturasGotera = () => {
    const waText = `Hola, deseo inscribirme gratis en la conferencia "¿Cómo nos Llegaron las Sagradas Escrituras en Español?" (20 de Noviembre 2026, 9:00 AM en San Francisco Gotera, Morazán, El Salvador) con el Pastor Isaías Martínez.\n\n📖 Material seleccionado: ${goteraMaterial}\n📍 Lugar: Invitación de la Asociación de Pastores de San Francisco Gotera, Morazán, El Salvador.\n\nQuedo atento a las indicaciones.`;
    const shareText = `📖 *¿Cómo nos Llegaron las Sagradas Escrituras en Español?* (20 de Noviembre, 2026 · 9:00 AM)\nPastor Isaías Martínez · San Francisco Gotera, Morazán, El Salvador\nAcademia Bíblica El Evangelio (Recursos de Sociedad Bíblica Trinitaria)\nInscripción gratuita · PDF Online gratuito o documento impreso por $2.\nMás información en: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                20 de Noviembre, 2026 · 9:00 AM · El Salvador
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                ¿Cómo nos Llegaron las Sagradas Escrituras en Español?
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Pastor Isaías Martínez */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaiasc.jpg"
                alt="Pastor Isaías Martínez"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>20 de Noviembre, 2026 · 9:00 AM · San Francisco Gotera, Morazán</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pastor Isaías Martínez
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                Utilizaremos los recursos de los artículos proporcionados por nuestros colaboradores <strong>Sociedad Bíblica Trinitaria</strong> que nos otorgan contenido de calidad.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              ¿Cómo nos Llegaron las Sagradas Escrituras en Español?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              A veces la mano de la providencia de Dios es obvia y a veces es más difícil de discernir, pero el cristiano entiende que todo, desde el surgimiento y caída de naciones hasta el número de cabellos en su cabeza, está en las manos soberanas de Dios. Acompáñame mientras estudiamos con cuánta fidelidad Dios guió uno de los eventos más importantes de la historia: dar Su Palabra perfecta (las Sagradas Escrituras) al hombre caído.
            </p>
          </div>

          {/* Cost & Study Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costos</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Puedes solicitar el <strong className="text-white">PDF Online gratuito</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>o el <strong className="text-white">documento impreso por $2</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Invitación de la <strong className="text-white">Asociación de Pastores de San Francisco Gotera, Morazán, El Salvador</strong>.</span>
              </p>
            </div>
          </div>

          {/* Enrollment CTA */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Selecciona tu formato de material
              </label>
              <select
                value={goteraMaterial}
                onChange={(e) => setGoteraMaterial(e.target.value as typeof goteraMaterial)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Solicitar PDF Online Gratuito">PDF Online gratuito</option>
                <option value="Documento Impreso ($2)">Documento impreso ($2)</option>
              </select>
            </div>

            <a
              href={buildWhatsAppUrl(waText)}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inscribirte Gratis</span>
            </a>
          </div>
        </div>
      </>
    );
  };

  const renderTacanaLiderazgo = () => {
    const waText = `Hola, deseo inscribirme en la conferencia especial "Liderazgo de Jesús: modelo de servicio, relación y propósito" (26, 27 y 28 de Noviembre, 2026 en Cheguate, Tacaná, Guatemala) con el Pastor Isaías Martínez.`;
    const shareText = `📖 *Liderazgo de Jesús: modelo de servicio, relación y propósito* (26, 27 y 28 de Noviembre, 2026)\nPastor Isaías Martínez · Cheguate, Tacaná, Guatemala · Jornadas Especiales\n1. El fundamento: El líder como siervo (Juan 13:1-17)\n2. El motor: Relaciones profundas sobre las tareas (Juan 15:12-15; Juan 1:35-39)\n3. La brújula: El ejemplo arrastra más que las palabras (Juan 13:15; Juan 6:1-15)\nMás información: https://academiabiblica.net`;

    const modules = [
      {
        num: '1. El fundamento: El líder como siervo',
        verse: 'Juan 13:1-17 (El lavatorio de los pies)',
        text: 'En el mundo antiguo, el líder era quien mandaba y a quien se le servía. Jesús, siendo el Maestro y el Señor, toma una vasija y una toalla para lavar los pies de sus discípulos.',
      },
      {
        num: '2. El motor: Relaciones profundas sobre las tareas',
        verse: 'Juan 15:12-15 (Permanecer en amor) y Juan 1:35-39 ("Ven y ve")',
        text: 'Jesús no trataba a los discípulos como "empleados" o ejecutores de metas frías, sino que los llamó amigos. Invirtió tiempo en conocerlos, caminar con ellos y compartir su visión.',
      },
      {
        num: '3. La brújula: El ejemplo arrastra más que las palabras',
        verse: 'Juan 13:15 («Ejemplo os he dado, para que como yo os he hecho, vosotros también hagáis») y Juan 6:1-15 (La multiplicación de los panes / manejo eficiente de recursos)',
        text: 'Jesús no pedía nada que Él mismo no estuviera dispuesto a hacer o a vivir. En Juan 6, involucra a sus discípulos en la solución del problema en lugar de alejarlos o ignorar la necesidad.',
      },
    ];

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                26, 27 y 28 de Noviembre, 2026 · Guatemala
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                Liderazgo de Jesús: modelo de servicio, relación y propósito
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Pastor Isaías Martínez */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaias.jpg"
                alt="Pastor Isaías Martínez"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>26, 27 y 28 de Noviembre, 2026 · Cheguate, Tacaná, Guatemala</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pastor Isaías Martínez
              </h3>
              <p className="text-xs font-semibold text-amber-300">
                Fundador & Misionero Itinerante
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ha servido a Dios desde 1998 en muchos países en zonas remotas.
              </p>
            </div>
          </div>

          {/* 3 Conference Modules */}
          <div className="space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              Detalles del Curso — Jornadas Especiales
            </h4>
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2"
              >
                <h5 className="font-serif text-base sm:text-lg font-bold text-white">
                  {mod.num}
                </h5>
                <p className="text-xs font-semibold text-amber-300">
                  {mod.verse}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {mod.text}
                </p>
              </div>
            ))}
          </div>

          {/* Sede & CTA */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white block">Sede Presencial:</span>
              Cheguate, Tacaná, Guatemala · Conferencia Especial.
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(waText)}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inscribirse Ahora</span>
          </a>
        </div>
      </>
    );
  };

  const renderTipitapaEconomia = () => {
    const waText = `Hola, deseo inscribirme gratis en la enseñanza "La economía y 'el presente siglo malo'" (5 de Diciembre, 2026 en Tipitapa, Nicaragua) con el Pastor Isaías Martínez.`;
    const shareText = `📖 *La economía y "el presente siglo malo"* (5 de Diciembre, 2026)\nProfesor: Pastor Isaías Martínez · Tipitapa, Nicaragua\nArtículo del Dr. Richard L. Smith del Centro Kyper, Argentina.\nCostos: $0 · Materiales: $0 (PDF descargado desde el Centro Kyper)\nMás información: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                5 de Diciembre, 2026 · Nicaragua
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                La economía y "el presente siglo malo"
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Pastor Isaías Martínez */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaias.jpg"
                alt="Pastor Isaías Martínez"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>5 de Diciembre, 2026 · Tipitapa, Nicaragua</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pastor Isaías Martínez
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                Esta enseñanza será impartida por el <strong>Pastor Isaías Martínez</strong>, basada en el artículo del <strong>Dr. Richard L. Smith</strong> del Centro Kyper, Argentina.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              Detalles del Curso
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              El artículo del Dr. Richard L. Smith examina cómo el pecado y el consumismo moderno distorsionan los sistemas económicos desde una perspectiva teológica y bíblica. A través del análisis de ejemplos históricos y bíblicos, la obra contrasta la administración divina original o <em>oikonomia</em> con las estructuras opresivas del poder y la idolatría económica contemporánea.
            </p>
          </div>

          {/* Cost & Study Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costos y Materiales</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-white">Costos:</strong> $0</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Costo de los Materiales:</strong> $0 (descargados en PDF desde el Centro Kyper)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Sede Presencial:</strong> Tipitapa, Nicaragua.</span>
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(waText)}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inscribirte Gratis</span>
          </a>
        </div>
      </>
    );
  };

  const renderHondurasCorazon = () => {
    const waText = `Hola, deseo inscribirme gratis en la enseñanza "Tal corazón como este" (6 de Diciembre, 2026 en Centro Misionero "Heme aquí, envíame a mí", San Lorenzo, Valle, Honduras) con el Pastor Isaías Martínez.`;
    const shareText = `📖 *Tal corazón como este (Such a Mind as This)* (6 de Diciembre, 2026)\nProfesor: Pastor Isaías Martínez · Centro Misionero "Heme aquí, envíame a mí", San Lorenzo, Valle, Honduras\nObra del Dr. Richard L. Smith del Centro Kyper, Argentina.\nCostos: $0 · Materiales: $0 (PDF descargado desde el Centro Kyper)\nMás información: https://academiabiblica.net`;

    return (
      <>
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                6 de Diciembre, 2026 · Honduras
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                Tal corazón como este — Dr. Richard L. Smith
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyText(shareText)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor: Pastor Isaías Martínez */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/isaias.jpg"
                alt="Pastor Isaías Martínez"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>6 de Diciembre, 2026 · San Lorenzo, Valle, Honduras</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Pastor Isaías Martínez
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                Esta enseñanza será impartida por el <strong>Pastor Isaías Martínez</strong>, basada en el texto del <strong>Dr. Richard L. Smith</strong> del Centro Kyper, Argentina.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="font-serif text-base sm:text-lg font-bold text-amber-400">
              Detalles del Curso
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              En el texto <em>Tal corazón como este</em> (originalmente en inglés <em>Such a Mind as This</em>) del Dr. Richard L. Smith, la enseñanza central es que amar a Dios implica necesariamente usar la mente, estudiar y cultivar el pensamiento crítico.
            </p>
          </div>

          {/* Cost & Study Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costos y Materiales</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong className="text-white">Costos:</strong> $0</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Costo de los Materiales:</strong> $0 (descargados en PDF desde el Centro Kyper)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Sede Presencial:</strong> Centro Misionero "Heme aquí, envíame a mí", San Lorenzo, Valle, Honduras.</span>
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(waText)}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inscribirte Gratis</span>
          </a>
        </div>
      </>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-amber-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {modalId === 'conf-gotera-escrituras-nov-2026' && renderEscriturasGotera()}
        {modalId === 'conf-tacana-liderazgo-nov-2026' && renderTacanaLiderazgo()}
        {modalId === 'conf-tipitapa-economia-dic-2026' && renderTipitapaEconomia()}
        {modalId === 'conf-honduras-corazon-dic-2026' && renderHondurasCorazon()}
        {modalId === 'conf-cartago-israel-feb-2027' && renderCostaRicaTierra()}
        {modalId === 'conf-cartago-escrituras-feb-2027' && renderEscriturasCostaRica()}
        {modalId === 'conf-managua-feb-2027' && renderManaguaConference()}

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <span>Agenda Ministerial 2026 – 2027 · Academia Bíblica El Evangelio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
