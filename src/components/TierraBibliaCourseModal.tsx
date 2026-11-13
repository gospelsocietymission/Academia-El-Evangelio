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
  AlertCircle,
  Share2,
  Copy,
  Check,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../data/academyData';

interface TierraBibliaCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COURSE_I_LESSONS = [
  '1. Bienvenida y fundamento: Lucas 24 como clave, objetivos y metodología, Juan 3:30 y el clavo romano (Is 53:5)',
  '2. ¿Por qué estudiar la Tierra de la Biblia? Sal 42 y 125, Éx 17 y Núm 20, Jn 4, Lc 7, 1 Co 10',
  '3. La Gran Idea: Israel y Jerusalén como “ombligo” (Ez 5 y 38:12) y el mundo circundante',
  '4. Las rutas comerciales I: Camino del Mar y Ruta del Incienso',
  '5. Las rutas comerciales II y dimensiones: Transjordana, Desierto y Patriarcas, más el tamaño y la diversidad de la Tierra',
  '6. Las regiones: Baly y las 26 regiones según JUC, con repaso general',
];

const COURSE_II_LESSONS = [
  '1. Las tres fuentes de agua (Dt 8:7): manantiales, pozos y cisternas',
  '2. Las siete especies de alimentos (Dt 8:8, Neh 9:25)',
  '3. La lluvia y el año agrícola (Dt 11:13-16)',
  '4. Las fiestas solemnes (Dt 16:16, Lv 23): Pascua, Semanas/Pentecostés y Tabernáculos',
  '5. Dios, nuestra Roca: la geología y sus capas',
  '6. Conectando los puntos y la historia: las regiones entre sí y el repaso por mapas (Salomón, exilio, Persia, Alejandro, Macabeos)',
];

const SHARE_COURSE_URL = 'https://academiabiblica.net/#tierra-de-la-biblia';

const SHARE_COURSE_TEXT = `📖 *Curso: La Tierra de la Biblia* — Dr. Joe Fitzpatrick
Academia Bíblica El Evangelio

Bienvenidos al estudio de la Tierra de la Biblia: cómo la geografía, el clima, las rutas, las aguas, los cultivos y las fiestas de Israel dieron forma a las Escrituras y revelan el pacto de Dios en Cristo.

✅ *Dividido en 2 Cursos (6 lecciones c/u):*
• Curso I: La Tierra de la Biblia I (fundamentos, mapa y geografía)
• Curso II: La Tierra de la Biblia II (Dios, pacto, tierra y pueblo)

💵 Costo por curso: $18.75 (donación voluntaria no reembolsable)
📍 Lugar de Estudio: Presencial en Ahuachapán, El Salvador · o Virtual (ZOOM Sincrónico / Videos Asincrónico)

Ver contenido completo e inscribirse aquí:
${SHARE_COURSE_URL}`;

export const TierraBibliaCourseModal: React.FC<TierraBibliaCourseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<'Curso I ($18.75)' | 'Curso II ($18.75)' | 'Ambos Cursos (I y II)'>('Curso I ($18.75)');
  const [selectedModality, setSelectedModality] = useState<'Sede Presencial Ahuachapán, El Salvador' | 'Virtual en ZOOM Sincrónico' | 'Videos grabados Asincrónico'>('Sede Presencial Ahuachapán, El Salvador');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const waEnrollmentMessage = `Hola, deseo inscribirme en el curso "La Tierra de la Biblia" con el Dr. Joe Fitzpatrick.\n\n📚 Curso seleccionado: ${selectedCourse}\n📍 Modalidad / Lugar de estudio: ${selectedModality}\n💵 Costo por curso: $18.75 (donación voluntaria no reembolsable)\n\nQuedo atento a las indicaciones para completar mi inscripción.`;

  const whatsappShareHref = `https://wa.me/?text=${encodeURIComponent(SHARE_COURSE_TEXT)}`;

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_COURSE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = SHARE_COURSE_TEXT;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'La Tierra de la Biblia — Academia Bíblica El Evangelio',
          text: SHARE_COURSE_TEXT,
          url: SHARE_COURSE_URL,
        });
        return;
      } catch {
        // User cancelled or share not permitted inside iframe -> fall back to copy
      }
    }
    await handleCopyShare();
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
        aria-labelledby="tierra-biblia-modal-title"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block truncate">
                Programa Especial · Enero 2027
              </span>
              <h2
                id="tierra-biblia-modal-title"
                className="font-serif text-lg sm:text-2xl font-bold text-white truncate"
              >
                La Tierra de la Biblia
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
              title="Compartir contenido del curso"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado' : 'Compartir'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Instructor Profile: Dr. Joe Fitzpatrick */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl shrink-0 bg-slate-900">
              <img
                src="https://raw.githubusercontent.com/gospelsocietymission/Academia-El-Evangelio/main/fotoscomun/FITZPATRICK.png"
                alt="Dr. Joe Fitzpatrick"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Profesor Titular del Curso</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Dr. Joe Fitzpatrick
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
                Dr. en Teología · Misionero de MTW, USA · Facultad Invitada de la Academia Bíblica El Evangelio
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Maestro y misionero dedicado a enseñar el trasfondo histórico, geográfico y cultural de las Sagradas Escrituras para capacitar a pastores, líderes y creyentes en América Latina.
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
                Bienvenidos al estudio de la Tierra de la Biblia. Aprenderán cómo la geografía, el clima, las rutas y los cultivos de Israel dieron forma a los relatos de las Escrituras, y cómo conocerlos nos ayuda a leer la Palabra con los ojos de sus autores y primeros oyentes.
              </p>
              <p>
                Veremos cómo Dios usó la tierra misma, con sus aguas, sus alimentos, sus lluvias, sus fiestas y sus rocas, para enseñar a su pueblo quién es Él y cómo se relaciona con ellos por medio del pacto.
              </p>
              <p>
                Nuestro propósito es que la Palabra cobre un sabor nuevo para ustedes y que, al verla en su escenario real, crezcamos en amor por Cristo, de quien toda la Escritura da testimonio.
              </p>
            </div>
          </div>

          {/* Two Courses Section */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                Estructura: Dividido en dos cursos (6 lecciones cada uno)
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Curso I */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="pb-2 border-b border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    6 Lecciones
                  </span>
                  <h5 className="font-serif font-bold text-white text-sm sm:text-base">
                    Curso I: La Tierra de la Biblia I (fundamentos, mapa y geografía)
                  </h5>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  {COURSE_I_LESSONS.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curso II */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="pb-2 border-b border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    6 Lecciones
                  </span>
                  <h5 className="font-serif font-bold text-white text-sm sm:text-base">
                    Curso II: La Tierra de la Biblia II (Dios, pacto, tierra y pueblo)
                  </h5>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  {COURSE_II_LESSONS.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cost & Study Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cost */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Costo por cada uno de los Cursos: $18.75</span>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-amber-100/90 leading-relaxed pt-1 border-t border-amber-500/20">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  * Todos los pagos realizados no son reembolsables. Cualquier monto enviado a la Academia Bíblica se considera una donación voluntaria para apoyar nuestra misión como entidad sin fines de lucro.
                </p>
              </div>
            </div>

            {/* Study Location / Modality */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
              <h5 className="font-serif font-bold text-white text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lugar de Estudio</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Opción Sede Presencial:</strong> Ahuachapán, El Salvador
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Monitor className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Opción Virtual:</strong> en ZOOM Sincrónico o Videos grabados Asincrónico
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Enrollment Selector & CTA */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <h5 className="font-serif font-bold text-white text-base">
              Selecciona tu opción para inscribirte:
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Curso de interés
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value as typeof selectedCourse)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Curso I ($18.75)">Curso I: La Tierra de la Biblia I ($18.75)</option>
                  <option value="Curso II ($18.75)">Curso II: La Tierra de la Biblia II ($18.75)</option>
                  <option value="Ambos Cursos (I y II)">Ambos Cursos: I y II ($18.75 c/u)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Modalidad / Lugar de Estudio
                </label>
                <select
                  value={selectedModality}
                  onChange={(e) => setSelectedModality(e.target.value as typeof selectedModality)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Sede Presencial Ahuachapán, El Salvador">Opción Sede Presencial: Ahuachapán, El Salvador</option>
                  <option value="Virtual en ZOOM Sincrónico">Opción Virtual en ZOOM Sincrónico</option>
                  <option value="Videos grabados Asincrónico">Opción Virtual: Videos grabados Asincrónico</option>
                </select>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl(waEnrollmentMessage)}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inscribirse Ahora</span>
            </a>
          </div>

          {/* Share Course Panel */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <h5 className="font-serif font-bold text-amber-300 text-sm sm:text-base flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Compartir este curso con otros</span>
                </h5>
                <p className="text-xs text-slate-400">
                  Invita a pastores, líderes o miembros de tu iglesia compartiendo el contenido del curso.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={whatsappShareHref}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[160px] py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Compartir en WhatsApp</span>
              </a>

              <button
                onClick={handleCopyShare}
                className="flex-1 min-w-[160px] py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '¡Invitación Copiada!' : 'Copiar Invitación y Enlace'}</span>
              </button>

              <button
                onClick={handleNativeShare}
                className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
          <span>La Tierra de la Biblia · Dr. Joe Fitzpatrick</span>
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
