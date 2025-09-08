// src/components/Form/ExportSection.tsx

import React, { useState, useRef } from 'react';
import { exportCVAsPDF } from '../services/pdfService';
import { type CVData } from '../types/cv.types';
import LoadingSpinner from './UI/LoadingSpinner';

interface ExportSectionProps {
  cvData: CVData;
}

const ExportSection: React.FC<ExportSectionProps> = ({ cvData }) => {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState<'GPT' | 'Gemini'>('GPT');
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!previewRef.current) return;

    setIsExporting(true);
    try {
      // Passa apiKey e model caso precise no serviço (aqui apenas placeholder)
      await exportCVAsPDF(previewRef.current, cvData.personalInfo.name || 'Curriculo');
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      alert('Não foi possível exportar o PDF.');
    }
    setIsExporting(false);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">

      {/* Input da API Key */}
      <input
        type="text"
        placeholder="Insira sua API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Seletor de Modelo */}
      <select
        value={model}
        onChange={(e) => setModel(e.target.value as 'GPT' | 'Gemini')}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="GPT">GPT</option>
        <option value="Gemini">Gemini</option>
      </select>

      {/* Botão de Exportar PDF */}
      <button
        onClick={handleExport}
        disabled={isExporting}
        className={`p-2 sm:px-4 rounded-md font-semibold text-white transition-colors flex items-center justify-center gap-2 ${
          isExporting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isExporting && <LoadingSpinner size="sm" />}
        {isExporting ? 'Exportando...' : 'Exportar PDF'}
      </button>
    </div>
  );
};

export default ExportSection;
