// src/components/Layout/PreviewSection.tsx

import React from 'react';
import { type CVData } from '../../types/cv.types';
import PersonalHeader from '../Preview/PersonalHeader';
import SkillsSection from '../Preview/SkillsSection';
import ExperienceSection from '../Preview/ExperienceSection';

interface PreviewSectionProps {
  cvData: CVData;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ cvData }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
      <div className="w-full h-full p-6 bg-white border border-gray-200 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Pré-visualização do Currículo
        </h2>

        <div className="space-y-6">
          <PersonalHeader personalInfo={cvData.personalInfo} />
          <SkillsSection skills={cvData.skills} />
          <ExperienceSection experiences={cvData.experiences} />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
