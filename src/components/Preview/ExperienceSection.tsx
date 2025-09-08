// src/components/Preview/ExperienceSection.tsx (CORRIGIDO)

import React from 'react';
import { type ExperienceType } from '../../types/cv.types';

interface ExperienceSectionProps {
  experiences: ExperienceType[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  // Se não houver experiências, não renderiza a seção
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">
        Experiência Profissional
      </h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h4 className="font-semibold text-lg text-gray-900">{exp.role}</h4>
            <p className="text-md text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.period}</p>
            <p className="text-gray-600 mt-2 whitespace-pre-wrap">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;