import React from 'react';
import { ExperienceType } from '../../types/cv.types';

interface ExperienceSectionProps {
  experiences: ExperienceType[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return null; // Não renderiza a seção se não houver experiências
  }

  return (
    <div>
      <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">
        Experiência Profissional
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <h3 className="font-semibold text-gray-900 text-lg">
              {exp.role} <span className="text-gray-500 font-normal">em</span> {exp.company}
            </h3>
            <p className="text-sm text-gray-500 italic mt-1">{exp.period}</p>
            {exp.description && (
              <p className="mt-2 text-sm text-gray-700 leading-snug">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
