// src/components/Preview/ExperienceSection.tsx

import React from 'react';
import { type ExperienceType } from '../../types/cv.types';

interface ExperienceSectionProps {
  experiences: ExperienceType[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
        Experiências
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900 text-lg">
              {exp.position || 'Cargo'}
            </h3>
            <p className="text-gray-700 text-sm italic">
              {exp.company || 'Empresa'} — {exp.startDate} até{' '}
              {exp.endDate || 'Presente'}
            </p>
            {exp.description && (
              <p className="mt-2 text-gray-700 leading-relaxed text-sm">
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
