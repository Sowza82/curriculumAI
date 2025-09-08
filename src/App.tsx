// src/App.tsx (VERSÃO CORRETA E FINAL)

import React, { useRef } from 'react';
import ExportButton from './components/ExportButton';
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import Toast from './components/UI/Toast';

import { useAIEnhancement } from './hooks/useAIEnhancement';
import { useCVData } from './hooks/useCVData';
import { useToast } from './hooks/useToast';

// A CORREÇÃO PRINCIPAL ESTÁ AQUI:
import { type AIEnhanceRequest } from './types/api.types';

const App: React.FC = () => {
  const { cvData, updateCVData, setCvData } = useCVData();
  const { enhance, isEnhancing } = useAIEnhancement();
  const { toast, showToast, hideToast } = useToast();

  const previewRef = useRef<HTMLDivElement>(null);

  const handleAIEnhance = async () => {
    if (!cvData.personalInfo.summary) {
      showToast('Por favor, preencha o resumo profissional.', 'info');
      return;
    }

    const requestData: AIEnhanceRequest = {
      type: 'summary',
      text: cvData.personalInfo.summary,
    };

    const enhancedText = await enhance(requestData);

    if (enhancedText) {
      // Usando a função de callback para garantir o estado mais recente
      setCvData(prevData => ({
        ...prevData,
        personalInfo: { ...prevData.personalInfo, summary: enhancedText },
      }));
      showToast('Resumo aprimorado com sucesso!', 'success');
    } else {
      showToast('Falha ao aprimorar com IA.', 'error');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">CurriculumAI</h1>
        <div className="flex items-center gap-4">
          <ExportButton cvData={cvData} previewRef={previewRef} />
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <FormSection
            cvData={cvData}
            onUpdate={updateCVData}
            onAIEnhance={handleAIEnhance}
            isEnhancing={isEnhancing}
          />
        </div>

        <div ref={previewRef} className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <PreviewSection cvData={cvData} />
        </div>
      </main>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default App;