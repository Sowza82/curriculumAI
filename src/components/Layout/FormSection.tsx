import React from 'react';
import { CVData } from '../../types/cv.types';
import AIEnhanceButton from '../Form/AIEnhanceButton';
import Experience from '../Form/Experience';
import PersonalInfo from '../Form/PersonalInfo';
import Skills from '../Form/Skills';

// Propriedades: recebe uma função para atualizar o estado do CV
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
        {/* Passa os dados e a função de atualização para o componente de dados pessoais */}
        <PersonalInfo
          personalInfo={cvData.personalInfo}
          onDataChange={(data) => onUpdate({ personalInfo: data })}
        />

        {/* Passa a lista de habilidades e a função de atualização para o componente de habilidades */}
        <Skills
          skills={cvData.skills}
          onSkillsChange={(data) => onUpdate({ skills: data })}
        />

        {/* Passa a lista de experiências e a função de atualização para o componente de experiências */}
        <Experience
          experiences={cvData.experiences}
          onExperiencesChange={(data) => onUpdate({ experiences: data })}
        />

        {/* Botão para aprimoramento de IA */}
        <AIEnhanceButton onClick={onAIEnhance} isLoading={isEnhancing} />
      </div>
    </div>
  );
};

export default FormSection;
