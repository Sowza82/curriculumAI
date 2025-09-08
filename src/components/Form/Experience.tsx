// src/components/Form/Experience.tsx

import React, { useState } from 'react';
import { type ExperienceType } from '../../types/cv.types';

interface ExperienceProps {
  experiences: ExperienceType[];
  onExperiencesChange: (experiences: ExperienceType[]) => void;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, onExperiencesChange }) => {
  const [newExperience, setNewExperience] = useState<ExperienceType>({
    company: '',
    role: '',
    period: '',
    description: '',
    isCurrent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setNewExperience(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddExperience = () => {
    if (!newExperience.company || !newExperience.role) return;
    onExperiencesChange([...experiences, newExperience]);
    setNewExperience({ company: '', role: '', period: '', description: '', isCurrent: false });
  };

  const handleRemoveExperience = (index: number) => {
    const updated = experiences.filter((_, i) => i !== index);
    onExperiencesChange(updated);
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white font-sans text-gray-800 mt-6">
      <h3 className="text-xl font-semibold mb-4">Experiências</h3>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          value={newExperience.company}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="role"
          placeholder="Cargo"
          value={newExperience.role}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="period"
          placeholder="Período (Ex: Jan 2020 - Dez 2022)"
          value={newExperience.period}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Descrição das responsabilidades e conquistas"
          value={newExperience.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isCurrent"
            checked={newExperience.isCurrent}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Trabalho atual</span>
        </label>
        <button
          onClick={handleAddExperience}
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
        >
          Adicionar Experiência
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative shadow-sm">
            <h4 className="font-semibold text-lg">{exp.role}</h4>
            <p className="text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.period}</p>
            <p className="text-gray-600 mt-2 whitespace-pre-wrap">{exp.description}</p>
            <button
              onClick={() => handleRemoveExperience(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors font-semibold"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
