// src/components/Form/PersonalInfo.tsx

import React from 'react';
import { type PersonalInfoType } from '../../types/cv.types';

interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
  onDataChange: (data: PersonalInfoType) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo, onDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onDataChange({ ...personalInfo, [name]: value });
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white font-sans text-gray-800">
      <h3 className="text-xl font-semibold mb-4">Dados Pessoais</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={personalInfo.name}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={personalInfo.email}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={personalInfo.phone}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="URL do LinkedIn"
          value={personalInfo.linkedin}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <textarea
          name="summary"
          placeholder="Resumo Profissional (máx. 500 caracteres)"
          value={personalInfo.summary}
          onChange={handleChange}
          rows={5}
          maxLength={500}
          className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <div className="text-sm text-right text-gray-500 mt-1">
          {personalInfo.summary.length} / 500
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
