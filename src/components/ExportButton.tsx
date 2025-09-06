// src/components/ExportButton.tsx

import React, { useState } from 'react';
import { exportCVAsPDF } from '../services/pdfService';
import { CVData } from '../types/cv.types.ts'; // ✅ Import com extensão .ts
import { truncateText } from '../utils/textProcessing';
import LoadingSpinner from './UI/LoadingSpinner';

interface ExportButtonProps {
  cvData: CVData;
  previewRef: React.RefObject<HTMLDivElement>; // recebe a ref do preview
}

const ExportButton: React.FC<ExportButtonProps> = ({ cvData, previewRef }) => {
  const [isExporting, setIsExporting] = useState(false);

  // Gera um nome de arquivo dinâmico com base no nome do usuário
  const getFileName = () => {
    const baseName = cvData.personalInfo.name || 'Currículo';
    return truncateText(baseName, 20).replace(/\s+/g, '_');
  };

  const handleExport = async () => {
    setIsExporting(true);

    const previewElement = previewRef.current;

    if (previewElement) {
      try {
        await exportCVAsPDF(previewElement, getFileName());
      } catch (error) {
        console.error('Erro ao exportar o PDF:', error);
        alert('Ocorreu um erro ao exportar o PDF.');
      }
    } else {
      console.error('Elemento de pré-visualização não encontrado.');
      alert('Não foi possível encontrar a pré-visualização para exportar.');
    }

    setIsExporting(false);
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={`p-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2 ${
        isExporting
          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
          : 'bg-red-600 text-white hover:bg-red-700'
      }`}
    >
      {isExporting && <LoadingSpinner size="sm" />}
      {isExporting ? 'Exportando...' : 'Exportar para PDF'}
    </button>
  );
};

export default ExportButton;
