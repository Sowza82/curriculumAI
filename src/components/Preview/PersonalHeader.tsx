// src/components/Preview/PersonalHeader.tsx
import React from 'react';
import { type PersonalInfoType } from '../../types/cv.types';
import { DocumentTextIcon } from '@heroicons/react/24/solid';

interface PersonalHeaderProps {
  personalInfo: PersonalInfoType;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personalInfo }) => {
  return (
    <div className="mb-6 p-6 bg-blue-50 rounded-lg shadow-sm flex items-center gap-4">
      {/* Ícone do currículo */}
      <DocumentTextIcon className="h-10 w-10 text-blue-400" />

      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
          {personalInfo.name || 'Nome do Candidato'}
        </h1>

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
    </div>
  );
};

export default PersonalHeader;
