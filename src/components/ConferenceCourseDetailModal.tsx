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
        {modalId === 'conf-cartago-israel-feb-2027' && renderCostaRicaTierra()}
        {modalId === 'conf-cartago-escrituras-feb-2027' && renderEscriturasCostaRica()}
        {modalId === 'conf-managua-feb-2027' && renderManaguaConference()}

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <span>Agenda Ministerial 2027 · Academia Bíblica El Evangelio</span>
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
