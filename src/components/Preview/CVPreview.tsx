import React from 'react';
import { CVData } from '../../types/cv.types';
import ExperienceSection from './ExperienceSection';
import PersonalHeader from './PersonalHeader';
import SkillsSection from './SkillsSection';

interface CVPreviewProps {
  cvData: CVData;
}

const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const { personalInfo, skills, experiences } = cvData;
  const isDataEmpty =
    !personalInfo?.name &&
    (!skills || skills.length === 0) &&
    (!experiences || experiences.length === 0);

  return (
    <div className="w-full h-full p-6 bg-gray-50 shadow-lg rounded-2xl border border-gray-200 overflow-y-auto">
      {isDataEmpty ? (
        <div className="flex items-center justify-center h-full text-gray-500 text-center text-lg italic">
          <p>
            Preencha o formulário para visualizar seu currículo com estilo
            profissional ✨
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <PersonalHeader personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ExperienceSection experiences={experiences} />
        </div>
      )}
    </div>
  );
};

export default CVPreview;
