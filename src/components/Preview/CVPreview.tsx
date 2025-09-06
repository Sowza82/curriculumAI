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
  const isDataEmpty = !personalInfo?.name && skills?.length === 0 && experiences?.length === 0;

  return (
    <div className="w-full h-full p-8 bg-white shadow-lg rounded-lg border border-gray-200 overflow-y-auto">
      {isDataEmpty ? (
        <div className="flex items-center justify-center h-full text-gray-500 text-center text-lg">
          <p>Comece a preencher o formulário para ver seu currículo aqui!</p>
        </div>
      ) : (
        <>
          <PersonalHeader personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ExperienceSection experiences={experiences} />
        </>
      )}
    </div>
  );
};

export default CVPreview;
