import { jsPDF } from 'jspdf';

export interface AcuerdoFormData {
  entityName: string;
  representativeName: string;
  city: string;
  day: string;
  month: string;
  yearDigit: string;
}

interface TextSegment {
  text: string;
  bold?: boolean;
  underline?: boolean;
}

interface WordToken {
  word: string;
  bold: boolean;
  underline: boolean;
  width: number;
}

function addPageFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setDrawColor(200, 180, 130);
  doc.setLineWidth(0.3);
  doc.line(20, pageHeight - 16, pageWidth - 20, pageHeight - 16);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(110, 110, 110);
  doc.text(
    'Academia Bíblica El Evangelio · Acuerdo de Entendimiento y Cooperación Ministerial · academiabiblica.net',
    20,
    pageHeight - 11
  );
  doc.text(`Página ${pageNum} de ${totalPages}`, pageWidth - 20, pageHeight - 11, {
    align: 'right',
  });
}

function createRichRenderer(doc: jsPDF) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 20;
  const maxWidth = pageWidth - marginX * 2;
  const topMargin = 22;
  const bottomMargin = 24;
  let y = 20;

  const ensureSpace = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - bottomMargin) {
      doc.addPage();
      y = topMargin;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(130, 130, 130);
      doc.text(
        'Acuerdo de Entendimiento y Cooperación Ministerial — Academia Bíblica El Evangelio',
        marginX,
        13
      );
      doc.setDrawColor(217, 119, 6);
      doc.setLineWidth(0.25);
      doc.line(marginX, 15.5, pageWidth - marginX, 15.5);
    }
  };

  const renderSectionTitle = (title: string) => {
    ensureSpace(14);
    y += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title, marginX, y);
    y += 1.8;
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.5);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 5;
  };

  const renderRichParagraph = (
    segments: TextSegment[],
    options?: { indent?: number; fontSize?: number; lineHeight?: number; spaceAfter?: number }
  ) => {
    const indent = options?.indent ?? 0;
    const fontSize = options?.fontSize ?? 10.5;
    const lineHeight = options?.lineHeight ?? 5.4;
    const spaceAfter = options?.spaceAfter ?? 3.5;
    const effectiveWidth = maxWidth - indent;

    const tokens: WordToken[] = [];
    for (const seg of segments) {
      const bold = Boolean(seg.bold);
      const underline = Boolean(seg.underline);
      doc.setFont('times', bold ? 'bold' : 'normal');
      doc.setFontSize(fontSize);

      const parts = seg.text.split(/(\s+)/);
      for (const part of parts) {
        if (part.length === 0) continue;
        tokens.push({
          word: part,
          bold,
          underline,
          width: doc.getTextWidth(part),
        });
      }
    }

    const lines: WordToken[][] = [];
    let currentLine: WordToken[] = [];
    let currentWidth = 0;

    for (const token of tokens) {
      const isWhitespace = /^\s+$/.test(token.word);
      if (currentLine.length === 0 && isWhitespace) {
        continue;
      }
      if (currentWidth + token.width > effectiveWidth && currentLine.length > 0 && !isWhitespace) {
        while (currentLine.length > 0 && /^\s+$/.test(currentLine[currentLine.length - 1].word)) {
          currentLine.pop();
        }
        lines.push(currentLine);
        currentLine = [token];
        currentWidth = token.width;
      } else {
        currentLine.push(token);
        currentWidth += token.width;
      }
    }
    if (currentLine.length > 0) {
      while (currentLine.length > 0 && /^\s+$/.test(currentLine[currentLine.length - 1].word)) {
        currentLine.pop();
      }
      if (currentLine.length > 0) {
        lines.push(currentLine);
      }
    }

    for (const line of lines) {
      ensureSpace(lineHeight);
      let cursorX = marginX + indent;
      for (const tok of line) {
        doc.setFont('times', tok.bold ? 'bold' : 'normal');
        doc.setFontSize(fontSize);
        doc.setTextColor(30, 41, 59);
        doc.text(tok.word, cursorX, y);
        if (tok.underline && !/^\s+$/.test(tok.word)) {
          doc.setDrawColor(71, 85, 105);
          doc.setLineWidth(0.25);
          doc.line(cursorX, y + 0.9, cursorX + tok.width, y + 0.9);
        }
        cursorX += tok.width;
      }
      y += lineHeight;
    }

    y += spaceAfter;
  };

  const renderBullet = (bulletPrefix: string, segments: TextSegment[]) => {
    const indent = 6;
    ensureSpace(6);
    doc.setFont('times', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(180, 83, 9);
    doc.text(bulletPrefix, marginX + 1.5, y);
    renderRichParagraph(segments, { indent, spaceAfter: 2.5 });
  };

  return {
    getY: () => y,
    setY: (newY: number) => {
      y = newY;
    },
    ensureSpace,
    renderSectionTitle,
    renderRichParagraph,
    renderBullet,
    marginX,
    pageWidth,
    maxWidth,
  };
}

export function buildAcuerdoPdf(data: AcuerdoFormData): { doc: jsPDF; fileName: string } {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter',
  });

  const entityDisplay = data.entityName.trim() || '________________________________________';
  const repDisplay = data.representativeName.trim() || '____________________________________';
  const cityDisplay = data.city.trim() || '________________________';
  const dayDisplay = data.day.trim() || '______';
  const monthDisplay = data.month.trim() || '__________________';
  const yearDigitDisplay = data.yearDigit.trim() || '___';

  const r = createRichRenderer(doc);

  // Institutional Top Banner
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, r.pageWidth, 34, 'F');
  doc.setFillColor(245, 158, 11);
  doc.rect(0, 34, r.pageWidth, 1.4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(251, 191, 36);
  doc.text('Academia Bíblica El Evangelio · "Nuestra misión es educar"', r.pageWidth / 2, 11, {
    align: 'center',
  });

  doc.setFont('times', 'bold');
  doc.setFontSize(15.5);
  doc.setTextColor(255, 255, 255);
  doc.text('Acuerdo de Entendimiento y Cooperación Ministerial', r.pageWidth / 2, 20.5, {
    align: 'center',
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225);
  doc.text(
    'academiabiblica.net  |  WhatsApp: +505 8934-1763  |  gospelsocietymission@gmail.com',
    r.pageWidth / 2,
    28.5,
    { align: 'center' }
  );

  r.setY(45);

  // Entre:
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Entre:', r.marginX, r.getY());
  r.setY(r.getY() + 6);

  r.renderRichParagraph([
    { text: 'Por una parte, ' },
    { text: 'Academia Bíblica El Evangelio', bold: true },
    { text: ', en adelante denominada ' },
    { text: '"la Academia"', bold: true },
    { text: ';' },
  ]);

  r.renderRichParagraph([
    { text: 'Y por la otra parte, ' },
    { text: entityDisplay, bold: true, underline: Boolean(data.entityName.trim()) },
    { text: ' (Iglesia / Ministerio / Entidad), en adelante denominada ' },
    { text: '"la Iglesia Aliada"', bold: true },
    { text: ' (o ' },
    { text: '"el Centro de Capacitación"', bold: true },
    { text: '), representada por ' },
    { text: repDisplay, bold: true, underline: Boolean(data.representativeName.trim()) },
    { text: '.' },
  ]);

  r.renderRichParagraph([
    { text: 'Ambas instituciones, denominadas conjuntamente como ' },
    { text: '"las Partes"', bold: true },
    {
      text: ', acuerdan celebrar el presente Acuerdo de Entendimiento bajo las siguientes declaraciones y cláusulas:',
    },
  ]);

  // Cláusula Primera
  r.renderSectionTitle('Cláusula Primera: Naturaleza de la relación');
  r.renderRichParagraph([
    { text: 'Las partes acuerdan expresamente que el presente convenio constituye una ' },
    { text: 'alianza de cooperación y relación ministerial', bold: true },
    {
      text: ', y bajo ninguna circunstancia crea o implica una relación de subordinación laboral, sociedad mercantil, agencia o dependencia administrativa entre ellas. Ambas entidades actuarán con plena autonomía institucional durante la vigencia de este acuerdo.',
    },
  ]);

  // Cláusula Segunda
  r.renderSectionTitle('Cláusula Segunda: Oferta académica y programa pastoral');
  r.renderRichParagraph([
    { text: 'La Academia', bold: true },
    {
      text: ', en cumplimiento de su función educativa y diseño de planes de estudio, pone a disposición el siguiente programa:',
    },
  ]);

  r.renderBullet('•', [
    {
      text: 'Actualización Ministerial: Capacitación continua para pastores y líderes de iglesias.',
      bold: true,
    },
  ]);
  r.renderBullet('•', [
    { text: 'Modalidad: ', bold: true },
    { text: 'Programa flexible mediante el cual se invita a ' },
    { text: 'la Iglesia Aliada', bold: true },
    { text: ' a constituirse como un ' },
    { text: 'Centro de Capacitación Ministerial', bold: true },
    { text: ' de ' },
    { text: 'la Academia', bold: true },
    { text: '.' },
  ]);
  r.renderBullet('•', [
    { text: 'Operatividad: ', bold: true },
    { text: 'La Academia', bold: true },
    {
      text: ' proveerá una extensa variedad de temas y materiales de estudio (en formato PDF o mediante su plataforma en línea). Los pastores de las iglesias locales fungirán como ',
    },
    { text: 'Mentores de Campo', bold: true },
    { text: ', impartiendo las clases a sus propios miembros o a creyentes invitados.' },
  ]);
  r.renderBullet('•', [
    { text: 'Creación de nuevos cursos: ', bold: true },
    {
      text: 'El Mentor de Campo podrá preparar material propio para impartirlo; no obstante, deberá someterlo previamente a ',
    },
    { text: 'la Academia', bold: true },
    {
      text: ' para su revisión, aprobación, modificación o rechazo antes de ser enseñado bajo el respaldo institucional.',
    },
  ]);
  r.renderBullet('•', [
    { text: 'Duración y certificación: ', bold: true },
    { text: 'Cada curso impartido deberá tener una duración promedio de ' },
    { text: '50 minutos', bold: true },
    { text: '. El alumno deberá aprobar un mínimo de ' },
    { text: '10 cursos', bold: true },
    {
      text: ' para hacerse acreedor a un Diploma o Certificado de Participación. Independientemente del tiempo calendario que tome completar los módulos, el diploma será emitido una vez que el estudiante alcance los 10 cursos aprobados.',
    },
  ]);

  // Cláusula Tercera
  r.renderSectionTitle(
    'Cláusula Tercera: Compromisos doctrinales y administrativos de la iglesia aliada'
  );
  r.renderRichParagraph([
    { text: 'Por medio del presente acuerdo, ' },
    { text: entityDisplay, bold: true, underline: Boolean(data.entityName.trim()) },
    { text: ' asume los siguientes compromisos:' },
  ]);
  r.renderBullet('1.', [
    { text: 'Fidelidad doctrinal: ', bold: true },
    { text: 'Enseñar fielmente los contenidos provistos por ' },
    { text: 'la Academia', bold: true },
    { text: ', o acatar íntegramente las correcciones realizadas a los materiales propios sometidos a revisión. ' },
    { text: 'La Academia', bold: true },
    { text: ', siendo de convicción y corte ' },
    { text: 'Reformado', bold: true },
    {
      text: ', mantiene un estándar riguroso respecto a la doctrina impartida; aunque respeta la identidad de todas las denominaciones cristianas, toda enseñanza impartida bajo el nombre y respaldo de ',
    },
    { text: 'la Academia', bold: true },
    { text: ' deberá apegarse estrictamente a los contenidos teológicos Reformados suministrados.' },
  ]);
  r.renderBullet('2.', [
    { text: 'Registro y control: ', bold: true },
    {
      text: 'Mantener actualizado el registro de asistencia y la base de datos de los estudiantes inscritos en su Centro de Capacitación, reportándolos oportunamente a ',
    },
    { text: 'la Academia', bold: true },
    { text: ' para el seguimiento académico y la emisión de certificados.' },
  ]);

  // Cláusula Cuarta
  r.renderSectionTitle('Cláusula Cuarta: Régimen económico y aranceles');
  r.renderRichParagraph([
    { text: 'La Academia', bold: true },
    {
      text: ' no realizará ningún cobro institucional por la implementación de estos programas ni por la provisión de los materiales de estudio. Sin embargo, el ',
    },
    { text: 'Mentor de Campo', bold: true },
    {
      text: ' queda en plena libertad de establecer y cobrar a sus miembros o estudiantes locales la cuota de recuperación que considere pertinente para cubrir sus costos operativos, sin obligación de rendir cuentas financieras a ',
    },
    { text: 'la Academia', bold: true },
    { text: ' por dichos ingresos.' },
  ]);

  // Cláusula Quinta
  r.renderSectionTitle('Cláusula Quinta: Colaboración espiritual y ofrenda misionera voluntaria');
  r.renderRichParagraph([
    {
      text: 'Como expresión de comunión cristiana y respaldo mutuo en la obra del Evangelio, se establece lo siguiente de manera estrictamente voluntaria:',
    },
  ]);
  r.renderBullet('1.', [
    { text: 'Respaldo a la Academia: ', bold: true },
    { text: entityDisplay, bold: true, underline: Boolean(data.entityName.trim()) },
    {
      text: ' tendrá a bien incluir dentro de sus reuniones de oración un tiempo especial para interceder por ',
    },
    { text: 'la Academia', bold: true },
    {
      text: ' y sus estudiantes internacionales. Asimismo, de serle posible y como un gesto de amor y aprecio ministerial, procurará enviar una ofrenda misionera mensual voluntaria no menor a ',
    },
    { text: '$0.75 USD', bold: true },
    { text: ' (setenta y cinco centavos de dólar estadounidense).' },
  ]);
  r.renderBullet('2.', [
    { text: 'Respaldo a la obra misionera: ', bold: true },
    { text: entityDisplay, bold: true, underline: Boolean(data.entityName.trim()) },
    { text: ' asume el compromiso fraternal de orar por el Misionero ' },
    { text: 'Isaías Martínez', bold: true },
    {
      text: ' y sus proyectos educativos, así como contribuir en la medida de sus posibilidades al fortalecimiento de las relaciones ministeriales que él desarrolla. De igual manera, si le fuere posible, procurará recolectar una ofrenda misionera anual voluntaria no menor a ',
    },
    { text: '$1.00 USD', bold: true },
    { text: ' (un dólar estadounidense) al año, como gesto de amor para bendecir el avance de la obra.' },
  ]);

  // Cláusula Sexta (Indefinida)
  r.renderSectionTitle('Cláusula Sexta: Vigencia y terminación');
  r.renderRichParagraph([
    {
      text: 'El presente Acuerdo de Entendimiento entrará en vigor a partir de la fecha de su firma y tendrá una duración ',
    },
    { text: 'indefinida', bold: true },
    {
      text: ', pudiendo darse por terminado por cualquiera de las partes mediante aviso previo por escrito con al menos treinta (30) días de anticipación, procurando siempre concluir los módulos que se encuentren en curso para no perjudicar a los estudiantes.',
    },
  ]);

  // Closing and signatures
  r.setY(r.getY() + 2);
  r.renderRichParagraph([
    {
      text: 'En señal de conformidad y mutuo acuerdo, las partes firman el presente documento en dos ejemplares del mismo tenor y valor, en la ciudad de ',
    },
    { text: cityDisplay, bold: true, underline: Boolean(data.city.trim()) },
    { text: ', a los ' },
    { text: dayDisplay, bold: true, underline: Boolean(data.day.trim()) },
    { text: ' días del mes de ' },
    { text: monthDisplay, bold: true, underline: Boolean(data.month.trim()) },
    { text: ' del año 202' },
    { text: yearDigitDisplay, bold: true, underline: Boolean(data.yearDigit.trim()) },
    { text: '.' },
  ]);

  r.ensureSpace(44);
  r.setY(r.getY() + 4);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Firmas:', r.marginX, r.getY());
  r.setY(r.getY() + 18);

  const colWidth = 78;
  const leftX = r.marginX;
  const rightX = r.pageWidth - r.marginX - colWidth;
  const lineY = r.getY();

  doc.setDrawColor(51, 65, 85);
  doc.setLineWidth(0.45);
  doc.line(leftX, lineY, leftX + colWidth, lineY);
  doc.line(rightX, lineY, rightX + colWidth, lineY);

  // Left signature text
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Por la Academia', leftX, lineY + 5);
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.text('Pastor Isaías Martínez', leftX, lineY + 10);
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8.5);
  doc.text('Fundador & Director — Academia Bíblica El Evangelio', leftX, lineY + 14.5);

  // Right signature text
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Por la Iglesia Aliada / Centro de Capacitación', rightX, lineY + 5);
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  const sigRep = data.representativeName.trim() || 'Nombre y firma del representante';
  const sigEntity = data.entityName.trim() || 'Iglesia / Ministerio / Entidad';
  const repLines = doc.splitTextToSize(sigRep, colWidth);
  doc.text(repLines, rightX, lineY + 10);
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8.5);
  const entLines = doc.splitTextToSize(sigEntity, colWidth);
  doc.text(entLines, rightX, lineY + 10 + repLines.length * 4.5);

  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addPageFooter(doc, p, totalPages);
  }

  const slug = data.entityName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '_')
    .replace(/^_+|_+$/g, '');
  const fileName = slug
    ? `Acuerdo_Entendimiento_${slug}.pdf`
    : 'Acuerdo_Entendimiento_Academia_El_Evangelio.pdf';

  return { doc, fileName };
}
