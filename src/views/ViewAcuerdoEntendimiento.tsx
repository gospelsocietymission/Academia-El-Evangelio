import React, { useState } from 'react';
import {
  FileText,
  Download,
  Share2,
  RotateCcw,
  Calendar,
  Building2,
  User,
  MapPin,
  CheckCircle2,
  Copy,
  MessageCircle,
  FileCheck2
} from 'lucide-react';
import { AcuerdoFormData, buildAcuerdoPdf } from '../utils/acuerdoPdfGenerator';
import { buildWhatsAppUrl } from '../data/academyData';

interface ViewAcuerdoEntendimientoProps {
  onShowToast?: (message: string) => void;
}

const SPANISH_MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

const INITIAL_FORM: AcuerdoFormData = {
  entityName: '',
  representativeName: '',
  city: '',
  day: '',
  month: '',
  yearDigit: '6',
};

export const ViewAcuerdoEntendimiento: React.FC<ViewAcuerdoEntendimientoProps> = ({
  onShowToast,
}) => {
  const [formData, setFormData] = useState<AcuerdoFormData>(INITIAL_FORM);
  const [shareFallbackVisible, setShareFallbackVisible] = useState(false);

  const notify = (msg: string) => {
    if (onShowToast) onShowToast(msg);
  };

  const handleFillToday = () => {
    const now = new Date();
    const yearStr = String(now.getFullYear());
    setFormData((prev) => ({
      ...prev,
      day: String(now.getDate()),
      month: SPANISH_MONTHS[now.getMonth()],
      yearDigit: yearStr.startsWith('202') ? yearStr.slice(3) : yearStr.slice(-1),
    }));
  };

  const handleReset = () => {
    setFormData({
      entityName: '',
      representativeName: '',
      city: '',
      day: '',
      month: '',
      yearDigit: '',
    });
    setShareFallbackVisible(false);
  };

  const handleDownloadPdf = () => {
    const { doc, fileName } = buildAcuerdoPdf(formData);
    doc.save(fileName);
    notify(`PDF descargado: ${fileName}`);
  };

  const handleSharePdf = async () => {
    const { doc, fileName } = buildAcuerdoPdf(formData);
    const pdfBlob = doc.output('blob');
    const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });

    const shareTitle = 'Acuerdo de Entendimiento - Academia Bíblica El Evangelio';
    const entityText = formData.entityName.trim()
      ? ` con ${formData.entityName.trim()}`
      : '';
    const shareText = `Comparto el Acuerdo de Entendimiento y Cooperación Ministerial${entityText} de la Academia Bíblica El Evangelio en formato PDF listo para firmas.`;

    const nav = navigator as Navigator & {
      canShare?: (data?: ShareData) => boolean;
    };

    if (typeof nav.share === 'function' && typeof nav.canShare === 'function') {
      try {
        if (nav.canShare({ files: [pdfFile] })) {
          await nav.share({
            title: shareTitle,
            text: shareText,
            files: [pdfFile],
          });
          notify('Acuerdo PDF compartido exitosamente.');
          return;
        }
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
      }
    }

    doc.save(fileName);
    setShareFallbackVisible(true);
    notify('PDF descargado. Usa WhatsApp o copia el enlace abajo para compartirlo.');
  };

  const handleCopyAgreementLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#acuerdo`;
    try {
      await navigator.clipboard.writeText(url);
      notify('Enlace del acuerdo copiado al portapapeles.');
    } catch {
      notify('Copia el enlace desde la barra de direcciones.');
    }
  };

  const entityLabel = formData.entityName.trim();
  const repLabel = formData.representativeName.trim();
  const cityLabel = formData.city.trim();
  const dayLabel = formData.day.trim();
  const monthLabel = formData.month.trim();
  const yearLabel = formData.yearDigit.trim();

  const whatsappShareMessage = [
    '*Acuerdo de Entendimiento y Cooperación Ministerial*',
    'Academia Bíblica El Evangelio ("Nuestra misión es educar")',
    entityLabel ? `Iglesia / Entidad: ${entityLabel}` : null,
    repLabel ? `Representante: ${repLabel}` : null,
    cityLabel ? `Ciudad: ${cityLabel}` : null,
    '',
    `Llena y descarga el PDF oficial aquí: ${window.location.origin}${window.location.pathname}#acuerdo`,
  ]
    .filter(Boolean)
    .join('\n');

  const renderBlankOrValue = (value: string, placeholderLine: string) => {
    if (value) {
      return (
        <span className="font-bold text-slate-950 underline decoration-amber-600 decoration-2 underline-offset-4 bg-amber-100/70 px-1.5 py-0.5 rounded">
          {value}
        </span>
      );
    }
    return (
      <span className="font-mono text-slate-500 tracking-tight select-none">
        {placeholderLine}
      </span>
    );
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 lg:py-16 w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-400">
            <span className="w-6 h-[1px] bg-amber-400"></span>
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Documento oficial autorellenable</span>
            <span className="w-6 h-[1px] bg-amber-400"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Acuerdo de Entendimiento y Cooperación Ministerial
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Completa los datos de tu iglesia o ministerio para rellenar automáticamente el convenio en tiempo real, descárgalo en{' '}
            <strong className="text-amber-300">PDF listo para firmas</strong> o compártelo con tu equipo pastoral.
          </p>
        </div>

        {/* Main 2-Column Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Auto-Fill Form & PDF Actions */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
            <div className="bg-slate-900 rounded-3xl p-5 sm:p-7 border border-amber-500/30 shadow-2xl space-y-5">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-lg text-white">
                      Datos del convenio
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Se actualiza en el documento y en el PDF
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Dejar líneas en blanco para llenar a mano"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>En blanco</span>
                </button>
              </div>

              <div className="space-y-4">
                {/* Entity Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Iglesia / Ministerio / Entidad ("la Iglesia Aliada")</span>
                  </label>
                  <input
                    type="text"
                    value={formData.entityName}
                    onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                    placeholder="Ej. Iglesia Cristiana Pacto de Vida"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Representative Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Nombre del representante / pastor</span>
                  </label>
                  <input
                    type="text"
                    value={formData.representativeName}
                    onChange={(e) =>
                      setFormData({ ...formData, representativeName: e.target.value })
                    }
                    placeholder="Ej. Pastor Mario Miranda Astorga"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Ciudad de firma</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. Cartago, Costa Rica / Tipitapa, Nicaragua"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none text-sm text-white placeholder:text-slate-500"
                  />
                </div>

                {/* Date of Signature */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Fecha de firma</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleFillToday}
                      className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 cursor-pointer"
                    >
                      Usar fecha de hoy
                    </button>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-3">
                      <input
                        type="text"
                        maxLength={2}
                        value={formData.day}
                        onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                        placeholder="Día"
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none text-sm text-white text-center placeholder:text-slate-500"
                      />
                    </div>
                    <div className="col-span-6">
                      <select
                        value={formData.month}
                        onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-amber-400 focus:outline-none text-sm text-white"
                      >
                        <option value="">Mes...</option>
                        {SPANISH_MONTHS.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-3 flex items-center bg-slate-950 border border-slate-700 focus-within:border-amber-400 rounded-xl px-2">
                      <span className="text-xs text-slate-400 font-mono">202</span>
                      <input
                        type="text"
                        maxLength={2}
                        value={formData.yearDigit}
                        onChange={(e) => setFormData({ ...formData, yearDigit: e.target.value })}
                        placeholder="_"
                        className="w-full py-2 bg-transparent focus:outline-none text-sm text-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Download PDF & Share PDF */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Descargar PDF para firmas</span>
                </button>

                <button
                  type="button"
                  onClick={handleSharePdf}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 shrink-0" />
                  <span>Compartir PDF descargable</span>
                </button>

                {shareFallbackVisible && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2.5 animate-in fade-in duration-200">
                    <p className="text-[11px] text-emerald-300 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>PDF descargado listo para adjuntar y enviar:</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={buildWhatsAppUrl(whatsappShareMessage)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyAgreementLink}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar enlace</span>
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Si dejas los campos vacíos, el PDF se descargará con líneas en blanco para llenarse a mano al momento de la firma.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Printable Agreement Document Preview */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border-2 border-amber-500/30 overflow-hidden">
              {/* Institutional Document Header */}
              <div className="bg-slate-900 text-white px-6 sm:px-10 py-6 border-b-4 border-amber-500 text-center space-y-1.5">
                <span className="text-xs font-semibold tracking-wide text-amber-400 block">
                  Academia Bíblica El Evangelio · "Nuestra misión es educar"
                </span>
                <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-wide text-white">
                  Acuerdo de Entendimiento y Cooperación Ministerial
                </h2>
                <p className="text-[11px] text-slate-300">
                  academiabiblica.net &nbsp;|&nbsp; WhatsApp: +505 8934-1763 &nbsp;|&nbsp; gospelsocietymission@gmail.com
                </p>
              </div>

              {/* Document Body */}
              <div className="px-6 sm:px-12 py-8 sm:py-10 font-serif text-[14px] sm:text-[15px] leading-relaxed text-slate-800 space-y-6">
                <div className="space-y-3">
                  <p className="font-sans font-bold text-sm text-slate-900">
                    Entre:
                  </p>
                  <p>
                    Por una parte, <strong className="text-slate-950">Academia Bíblica El Evangelio</strong>, en adelante denominada{' '}
                    <strong className="text-slate-950">"la Academia"</strong>;
                  </p>
                  <p>
                    Y por la otra parte,{' '}
                    {renderBlankOrValue(entityLabel, '__________________________________________')} (Iglesia / Ministerio / Entidad), en adelante denominada{' '}
                    <strong className="text-slate-950">"la Iglesia Aliada"</strong> (o{' '}
                    <strong className="text-slate-950">"el Centro de Capacitación"</strong>), representada por{' '}
                    {renderBlankOrValue(repLabel, '__________________________________________')}.
                  </p>
                  <p>
                    Ambas instituciones, denominadas conjuntamente como{' '}
                    <strong className="text-slate-950">"las Partes"</strong>, acuerdan celebrar el presente Acuerdo de Entendimiento bajo las siguientes declaraciones y cláusulas:
                  </p>
                </div>

                <hr className="border-slate-300" />

                {/* Cláusula Primera */}
                <section className="space-y-2">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Primera: Naturaleza de la relación
                  </h3>
                  <p>
                    Las partes acuerdan expresamente que el presente convenio constituye una{' '}
                    <strong>alianza de cooperación y relación ministerial</strong>, y bajo ninguna circunstancia crea o implica una relación de subordinación laboral, sociedad mercantil, agencia o dependencia administrativa entre ellas. Ambas entidades actuarán con plena autonomía institucional durante la vigencia de este acuerdo.
                  </p>
                </section>

                {/* Cláusula Segunda */}
                <section className="space-y-2.5">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Segunda: Oferta académica y programa pastoral
                  </h3>
                  <p>
                    <strong>La Academia</strong>, en cumplimiento de su función educativa y diseño de planes de estudio, pone a disposición el siguiente programa:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5">
                    <li>
                      <strong>Actualización Ministerial: Capacitación continua para pastores y líderes de iglesias</strong>
                    </li>
                    <li>
                      <strong>Modalidad:</strong> Programa flexible mediante el cual se invita a{' '}
                      <strong>la Iglesia Aliada</strong> a constituirse como un{' '}
                      <strong>Centro de Capacitación Ministerial</strong> de <strong>la Academia</strong>.
                    </li>
                    <li>
                      <strong>Operatividad:</strong> <strong>La Academia</strong> proveerá una extensa variedad de temas y materiales de estudio (en formato PDF o mediante su plataforma en línea). Los pastores de las iglesias locales fungirán como{' '}
                      <strong>Mentores de Campo</strong>, impartiendo las clases a sus propios miembros o a creyentes invitados.
                    </li>
                    <li>
                      <strong>Creación de nuevos cursos:</strong> El Mentor de Campo podrá preparar material propio para impartirlo; no obstante, deberá someterlo previamente a{' '}
                      <strong>la Academia</strong> para su revisión, aprobación, modificación o rechazo antes de ser enseñado bajo el respaldo institucional.
                    </li>
                    <li>
                      <strong>Duración y certificación:</strong> Cada curso impartido deberá tener una duración promedio de{' '}
                      <strong>50 minutos</strong>. El alumno deberá aprobar un mínimo de{' '}
                      <strong>10 cursos</strong> para hacerse acreedor a un Diploma o Certificado de Participación. Independientemente del tiempo calendario que tome completar los módulos, el diploma será emitido una vez que el estudiante alcance los 10 cursos aprobados.
                    </li>
                  </ul>
                </section>

                {/* Cláusula Tercera */}
                <section className="space-y-2.5">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Tercera: Compromisos doctrinales y administrativos de la iglesia aliada
                  </h3>
                  <p>
                    Por medio del presente acuerdo,{' '}
                    {renderBlankOrValue(entityLabel, '__________________________________________')} asume los siguientes compromisos:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Fidelidad doctrinal:</strong> Enseñar fielmente los contenidos provistos por{' '}
                      <strong>la Academia</strong>, o acatar íntegramente las correcciones realizadas a los materiales propios sometidos a revisión.{' '}
                      <strong>La Academia</strong>, siendo de convicción y corte <strong>Reformado</strong>, mantiene un estándar riguroso respecto a la doctrina impartida; aunque respeta la identidad de todas las denominaciones cristianas, toda enseñanza impartida bajo el nombre y respaldo de{' '}
                      <strong>la Academia</strong> deberá apegarse estrictamente a los contenidos teológicos Reformados suministrados.
                    </li>
                    <li>
                      <strong>Registro y control:</strong> Mantener actualizado el registro de asistencia y la base de datos de los estudiantes inscritos en su Centro de Capacitación, reportándolos oportunamente a{' '}
                      <strong>la Academia</strong> para el seguimiento académico y la emisión de certificados.
                    </li>
                  </ol>
                </section>

                {/* Cláusula Cuarta */}
                <section className="space-y-2">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Cuarta: Régimen económico y aranceles
                  </h3>
                  <p>
                    <strong>La Academia</strong> no realizará ningún cobro institucional por la implementación de estos programas ni por la provisión de los materiales de estudio. Sin embargo, el{' '}
                    <strong>Mentor de Campo</strong> queda en plena libertad de establecer y cobrar a sus miembros o estudiantes locales la cuota de recuperación que considere pertinente para cubrir sus costos operativos, sin obligación de rendir cuentas financieras a{' '}
                    <strong>la Academia</strong> por dichos ingresos.
                  </p>
                </section>

                {/* Cláusula Quinta */}
                <section className="space-y-2.5">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Quinta: Colaboración espiritual y ofrenda misionera voluntaria
                  </h3>
                  <p>
                    Como expresión de comunión cristiana y respaldo mutuo en la obra del Evangelio, se establece lo siguiente de manera estrictamente voluntaria:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Respaldo a la Academia:</strong>{' '}
                      {renderBlankOrValue(entityLabel, '__________________________________________')} tendrá a bien incluir dentro de sus reuniones de oración un tiempo especial para interceder por{' '}
                      <strong>la Academia</strong> y sus estudiantes internacionales. Asimismo, de serle posible y como un gesto de amor y aprecio ministerial, procurará enviar una ofrenda misionera mensual voluntaria no menor a{' '}
                      <strong>$0.75 USD</strong> (setenta y cinco centavos de dólar estadounidense).
                    </li>
                    <li>
                      <strong>Respaldo a la obra misionera:</strong>{' '}
                      {renderBlankOrValue(entityLabel, '__________________________________________')} asume el compromiso fraternal de orar por el Misionero{' '}
                      <strong>Isaías Martínez</strong> y sus proyectos educativos, así como contribuir en la medida de sus posibilidades al fortalecimiento de las relaciones ministeriales que él desarrolla. De igual manera, si le fuere posible, procurará recolectar una ofrenda misionera anual voluntaria no menor a{' '}
                      <strong>$1.00 USD</strong> (un dólar estadounidense) al año, como gesto de amor para bendecir el avance de la obra.
                    </li>
                  </ol>
                </section>

                {/* Cláusula Sexta (Indefinida) */}
                <section className="space-y-2">
                  <h3 className="font-sans font-bold text-sm text-slate-900 border-b border-amber-500/50 pb-1">
                    Cláusula Sexta: Vigencia y terminación
                  </h3>
                  <p>
                    El presente Acuerdo de Entendimiento entrará en vigor a partir de la fecha de su firma y tendrá una duración{' '}
                    <strong>indefinida</strong>, pudiendo darse por terminado por cualquiera de las partes mediante aviso previo por escrito con al menos treinta (30) días de anticipación, procurando siempre concluir los módulos que se encuentren en curso para no perjudicar a los estudiantes.
                  </p>
                </section>

                <hr className="border-slate-300" />

                {/* Closing and Signatures */}
                <div className="space-y-8 pt-1">
                  <p>
                    En señal de conformidad y mutuo acuerdo, las partes firman el presente documento en dos ejemplares del mismo tenor y valor, en la ciudad de{' '}
                    {renderBlankOrValue(cityLabel, '________________________')}, a los{' '}
                    {renderBlankOrValue(dayLabel, '______')} días del mes de{' '}
                    {renderBlankOrValue(monthLabel, '__________________')} del año 202
                    {renderBlankOrValue(yearLabel, '___')}.
                  </p>

                  <div className="space-y-12">
                    <p className="font-sans font-bold text-sm text-slate-900">
                      Firmas:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                      <div className="space-y-1.5">
                        <div className="border-t-2 border-slate-700 pt-2">
                          <p className="font-bold text-slate-950 text-sm">Por la Academia</p>
                          <p className="text-sm text-slate-800">Pastor Isaías Martínez</p>
                          <p className="text-xs text-slate-500 font-sans">
                            Fundador & Director — Academia Bíblica El Evangelio
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="border-t-2 border-slate-700 pt-2">
                          <p className="font-bold text-slate-950 text-sm">
                            Por la Iglesia Aliada / Centro de Capacitación
                          </p>
                          <p className="text-sm text-slate-800">
                            {repLabel || 'Nombre y firma del representante'}
                          </p>
                          <p className="text-xs text-slate-500 font-sans">
                            {entityLabel || 'Iglesia / Ministerio / Entidad'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
