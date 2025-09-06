// src/App.tsx

import React, { useRef } from 'react';
import ExportButton from './components/ExportButton';
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import Toast from './components/UI/Toast';

import { useAIEnhancement } from './hooks/useAIEnhancement';
import { useCVData } from './hooks/useCVData';
import { useToast } from './hooks/useToast';

import { AIEnhanceRequest } from './types/api.types';

const App: React.FC = () => {
  // Hooks customizados
  const { cvData, updateCVData } = useCVData();
  const { enhance, isEnhancing } = useAIEnhancement();
  const { toast, showToast, hideToast } = useToast();

  // Ref do container de preview
  const previewRef = useRef<HTMLDivElement>(null);

  // Lógica de aprimoramento de IA para o resumo profissional
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
      updateCVData({
        ...cvData, // mantém o restante do currículo
        personalInfo: { ...cvData.personalInfo, summary: enhancedText },
      });
      showToast('Resumo aprimorado com sucesso!', 'success');
    } else {
      showToast('Falha ao aprimorar com IA.', 'error');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Cabeçalho */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">CurriculumAI</h1>
        <div className="flex items-center gap-4">
          <ExportButton cvData={cvData} previewRef={previewRef} />
        </div>
      </header>

      {/* Layout principal */}
      <main className="flex flex-1 overflow-hidden">
        {/* Formulário */}
        <div className="flex-1 overflow-y-auto">
          <FormSection
            cvData={cvData}
            onUpdate={updateCVData}
            onAIEnhance={handleAIEnhance}
            isEnhancing={isEnhancing}
          />
        </div>

        {/* Preview */}
        <div ref={previewRef} className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <PreviewSection cvData={cvData} />
        </div>
      </main>

      {/* Toast de notificações */}
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
