import React, { useState } from 'react';
import { ExperienceType } from '../../types/cv.types';

interface ExperienceProps {
  onExperiencesChange: (experiences: ExperienceType[]) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onExperiencesChange }) => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
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
    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    onExperiencesChange(updatedExperiences);
    setNewExperience({ // Limpa os campos para uma nova experiência
      company: '',
      role: '',
      period: '',
      description: '',
      isCurrent: false,
    });
  };

  const handleRemoveExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    onExperiencesChange(updatedExperiences);
  };

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Experiências</h3>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="company"
          placeholder="Empresa"
          value={newExperience.company}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="role"
          placeholder="Cargo"
          value={newExperience.role}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="period"
          placeholder="Período (Ex: Jan 2020 - Dez 2022)"
          value={newExperience.period}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Descrição das responsabilidades e conquistas"
          value={newExperience.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isCurrent"
            checked={newExperience.isCurrent}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="text-gray-700">Trabalho atual</span>
        </label>
        <button onClick={handleAddExperience} className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-colors">
          Adicionar Experiência
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="p-4 bg-gray-50 border rounded-md relative">
            <h4 className="font-semibold text-lg">{exp.role}</h4>
            <p className="text-gray-700">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="text-gray-600 mt-2">{exp.description}</p>
            <button onClick={() => handleRemoveExperience(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors">
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
