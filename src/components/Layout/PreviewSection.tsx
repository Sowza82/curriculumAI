import React from 'react';
import { CVData } from '../../types/cv.types';
import ExperienceSection from '../Preview/ExperienceSection';
import PersonalHeader from '../Preview/PersonalHeader';
import SkillsSection from '../Preview/SkillsSection';

// Propriedades: recebe todos os dados do CV para renderização
interface PreviewSectionProps {
  cvData: CVData;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ cvData }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
      <div className="w-full h-full p-8 bg-white border border-gray-200 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Pré-visualização do Currículo</h2>
        <div className="space-y-6">
          {/* Passa a seção de dados pessoais para o componente de cabeçalho */}
          <PersonalHeader personalInfo={cvData.personalInfo} />

          {/* Passa a lista de habilidades para o componente de seção de habilidades */}
          <SkillsSection skills={cvData.skills} />

          {/* Passa a lista de experiências para o componente de seção de experiências */}
          <ExperienceSection experiences={cvData.experiences} />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
