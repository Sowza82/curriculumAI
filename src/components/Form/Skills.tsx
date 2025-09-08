// src/components/Form/Skills.tsx

import React, { useState } from 'react';
import { type SkillType } from '../../types/cv.types';

interface SkillsProps {
  skills: SkillType[];
  onSkillsChange: (skills: SkillType[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, onSkillsChange }) => {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<'Básico' | 'Intermediário' | 'Avançado'>('Básico');

  const handleAddSkill = () => {
    if (newSkillName.trim() === '') return;
    const newSkill = { name: newSkillName, level: newSkillLevel };
    const updatedSkills = [...skills, newSkill];
    onSkillsChange(updatedSkills);
    setNewSkillName('');
    setNewSkillLevel('Básico');
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onSkillsChange(updatedSkills);
  };

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Habilidades</h3>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Nome da Habilidade"
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          className="p-3 border border-gray-300 rounded-md flex-grow"
        />
        <select
          value={newSkillLevel}
          onChange={(e) => setNewSkillLevel(e.target.value as 'Básico' | 'Intermediário' | 'Avançado')}
          className="p-3 border border-gray-300 rounded-md"
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button onClick={handleAddSkill} className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors">
          Adicionar
        </button>
      </div>
      <ul className="list-none space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
            <span className="text-gray-700">{skill.name} - <span className="font-medium text-gray-900">{skill.level}</span></span>
            <button onClick={() => handleRemoveSkill(index)} className="text-red-500 hover:text-red-700 transition-colors">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;