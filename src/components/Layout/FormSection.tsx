// src/components/Layout/FormSection.tsx (CORRIGIDO)

import React from 'react';
// A CORREÇÃO ESTÁ AQUI: o caminho correto é '../../'
import { type CVData } from '../../types/cv.types';
import AIEnhanceButton from '../Form/AIEnhanceButton';
import Experience from '../Form/Experience';
import PersonalInfo from '../Form/PersonalInfo';
import Skills from '../Form/Skills';

interface FormSectionProps {
  cvData: CVData;
  onUpdate: (data: Partial<CVData>) => void;
  onAIEnhance: () => void;
  isEnhancing: boolean;
}

const FormSection: React.FC<FormSectionProps> = ({ cvData, onUpdate, onAIEnhance, isEnhancing }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50 border-r border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Gerador de Currículo</h2>
      <div className="space-y-8">
        <PersonalInfo
          personalInfo={cvData.personalInfo}
          onDataChange={(data) => onUpdate({ personalInfo: data })}
        />
        <Skills
          skills={cvData.skills}
          onSkillsChange={(data) => onUpdate({ skills: data })}
        />
        <Experience
          experiences={cvData.experiences}
          onExperiencesChange={(data) => onUpdate({ experiences: data })}
        />
        <AIEnhanceButton onClick={onAIEnhance} isLoading={isEnhancing} />
      </div>
    </div>
  );
};

export default FormSection;