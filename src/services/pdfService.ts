// src/services/pdfService.ts

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Gera e baixa o currículo como um arquivo PDF.
 * @param element O elemento HTML que contém a pré-visualização do currículo (ex: o div do CVPreview).
 * @param filename O nome do arquivo para o download.
 */
export const exportCVAsPDF = async (element: HTMLElement, filename: string) => {
  // Configurações para a geração do PDF em formato A4
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  try {
    // 1. Converte o elemento HTML para um canvas (imagem)
    const canvas = await html2canvas(element, { scale: 2 }); // A escala de 2 melhora a qualidade

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Calcula as dimensões para caber na página do PDF
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    // 2. Adiciona a imagem ao documento PDF
    pdf.addImage(imgData, 'JPEG', 0, 0, scaledWidth, scaledHeight);

    // 3. Salva o arquivo com o nome especificado
    pdf.save(`${filename}.pdf`);
    console.log('PDF gerado e baixado com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar o PDF:', error);
    alert('Não foi possível gerar o PDF. Tente novamente.');
  }
};
