// src/components/Preview/PersonalHeader.tsx (CORRIGIDO)

import React from 'react';
import { type PersonalInfoType } from '../../types/cv.types';

interface PersonalHeaderProps {
  personalInfo: PersonalInfoType;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personalInfo }) => {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name || 'Nome do Candidato'}</h1>
      
      <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-600">
        {personalInfo.email && <span>{personalInfo.email}</span>}
        {personalInfo.phone && <span>{personalInfo.phone}</span>}
        {personalInfo.linkedin && (
          <a 
            href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>

      {personalInfo.summary && (
        <p className="mt-4 text-gray-700 text-justify">
          {personalInfo.summary}
        </p>
      )}
    </div>
  );
};

export default PersonalHeader;