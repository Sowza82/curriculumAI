import React from 'react';
import { type SkillType } from '../../types/cv.types';

interface SkillsSectionProps {
  skills: SkillType[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null; // Não renderiza a seção se não houver habilidades
  }

  return (
    <div>
      <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3 text-gray-800">
        Habilidades
      </h2>
      <ul className="flex flex-wrap gap-2 text-sm">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
            {skill.name} ({skill.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
