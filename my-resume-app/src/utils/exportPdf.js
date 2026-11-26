// Text-based PDF (selectable / ATS-friendly). jsPDF is loaded on demand.
export async function exportResumePdf({ personalDetails, ExperienceDetails, EducationDetail, SkillDetails }) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 48;
  const width = doc.internal.pageSize.getWidth() - margin * 2;
  const bottom = doc.internal.pageSize.getHeight() - margin;
  let y = margin;

  const write = (text, { size = 11, bold = false, color = 30, gap = 4, indent = 0 } = {}) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    if (Array.isArray(color)) doc.setTextColor(...color);
    else doc.setTextColor(color);
    doc.splitTextToSize(String(text), width - indent).forEach((line) => {
      if (y > bottom) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin + indent, y);
      y += size * 1.3;
    });
    y += gap;
  };

  const section = (title) => {
    y += 8;
    write(title.toUpperCase(), { size: 12, bold: true, color: [5, 150, 105], gap: 2 });
    doc.setDrawColor(5, 150, 105);
    doc.line(margin, y - 4, margin + width, y - 4);
    y += 6;
  };

  const p = personalDetails?.[0];
  if (p) {
    write(p.Name, { size: 24, bold: true, gap: 2 });
    if (p.title) write(p.title, { size: 13, color: 90, gap: 4 });
    write([p.email, p.phone, p.addr].filter(Boolean).join('  |  '), { size: 10, color: 90, gap: 2 });
    const links = [p.linkedin, p.github, p.website].filter(Boolean).join('  |  ');
    if (links) write(links, { size: 10, color: 90, gap: 2 });
    if (p.summary) {
      section('Summary');
      write(p.summary);
    }
  }

  if (ExperienceDetails?.length) {
    section('Work Experience');
    ExperienceDetails.forEach((e) => {
      write(`${e.designation} — ${e.CompanyName}`, { bold: true, size: 11, gap: 0 });
      write(e.Year, { size: 10, color: 100, gap: 2 });
      if (e.description) {
        e.description.split('\n').filter((l) => l.trim()).forEach((l) => write(`• ${l.trim()}`, { size: 10, indent: 10, gap: 1 }));
      }
      y += 6;
    });
  }

  if (EducationDetail?.length) {
    section('Education');
    EducationDetail.forEach((e) => {
      write(e.Degree, { bold: true, gap: 0 });
      write(`${e.CollegeName} — ${e.PassedYear}`, { size: 10, color: 100, gap: e.CGPA ? 0 : 6 });
      if (e.CGPA) write(`CGPA: ${e.CGPA} / ${e.CGPAScale || 10}`, { size: 10, color: 100, gap: 6 });
    });
  }

  if (SkillDetails?.length) {
    section('Skills');
    write(SkillDetails.join(', '));
  }

  const name = (p?.Name || 'Resume').replace(/[^\w-]+/g, '_');
  doc.save(`${name}_Resume.pdf`);
}
