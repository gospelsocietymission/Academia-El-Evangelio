import { MissionaryReport } from '../types';

/**
 * Normalizes text to safe PDF WinAnsi / ASCII characters
 */
function toPdfSafeText(input: string): string {
  return input
    .replace(/\u00f1/g, 'n')
    .replace(/\u00d1/g, 'N')
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ÁÀÄÂ]/g, 'A')
    .replace(/[ÉÈËÊ]/g, 'E')
    .replace(/[ÍÌÏÎ]/g, 'I')
    .replace(/[ÓÒÖÔ]/g, 'O')
    .replace(/[ÚÙÜÛ]/g, 'U')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[—–]/g, '-')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if ((current + ' ' + word).trim().length <= maxChars) {
      current = (current + ' ' + word).trim();
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Generates a valid single-page PDF 1.4 Blob for a Missionary Report
 */
export function generateReportPdfUrl(report: MissionaryReport): string {
  const lines: { text: string; size: number; bold?: boolean; gapAfter?: number }[] = [
    { text: 'ACADEMIA BIBLICA EL EVANGELIO', size: 15, bold: true, gapAfter: 6 },
    { text: 'REPORTE MISIONERO OFICIAL (EJEMPLO)', size: 11, bold: true, gapAfter: 14 },
    { text: `Titulo: ${report.title}`, size: 13, bold: true, gapAfter: 6 },
    { text: `Fecha: ${report.date}  |  Lugar: ${report.location}`, size: 10, gapAfter: 4 },
    { text: `Responsable: ${report.author}`, size: 10, gapAfter: 12 },
    { text: '--------------------------------------------------------------------------', size: 10, gapAfter: 10 },
    { text: 'RESUMEN DEL REPORTE:', size: 11, bold: true, gapAfter: 6 },
  ];

  for (const wrapped of wrapText(report.summary, 78)) {
    lines.push({ text: wrapped, size: 10, gapAfter: 4 });
  }

  lines.push({ text: '', size: 10, gapAfter: 8 });
  lines.push({ text: 'LOGROS Y ACTIVIDADES PRINCIPALES:', size: 11, bold: true, gapAfter: 6 });

  for (const h of report.highlights) {
    const wrappedHighlight = wrapText(`* ${h}`, 76);
    for (const wh of wrappedHighlight) {
      lines.push({ text: wh, size: 10, gapAfter: 4 });
    }
  }

  lines.push({ text: '', size: 10, gapAfter: 10 });
  lines.push({ text: 'PETICIONES DE ORACION Y NECESIDADES:', size: 11, bold: true, gapAfter: 6 });
  for (const wrappedPrayer of wrapText(report.prayerNeeds, 78)) {
    lines.push({ text: wrappedPrayer, size: 10, gapAfter: 4 });
  }

  lines.push({ text: '', size: 10, gapAfter: 14 });
  lines.push({ text: '--------------------------------------------------------------------------', size: 10, gapAfter: 8 });
  lines.push({ text: 'Contacto: academiabiblica.net | WhatsApp: +505 8934-1763', size: 9, gapAfter: 4 });
  lines.push({ text: 'Correo: gospelsocietymission@gmail.com', size: 9, gapAfter: 4 });

  // Build PDF content stream
  let stream = 'BT\n';
  let y = 745;

  for (const line of lines) {
    if (y < 55) break;
    const font = line.bold ? '/F2' : '/F1';
    const safe = toPdfSafeText(line.text);
    stream += `${font} ${line.size} Tf\n`;
    stream += `1 0 0 1 54 ${y} Tm\n`;
    stream += `(${safe}) Tj\n`;
    y -= line.size + (line.gapAfter ?? 4);
  }
  stream += 'ET\n';

  // Assemble PDF objects
  const objects: string[] = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n');
  objects.push(`4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}endstream\nendobj\n`);
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n');
  objects.push('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n');

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (const off of offsets) {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
}
