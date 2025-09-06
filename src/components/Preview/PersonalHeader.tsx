import React from 'react';
import { PersonalInfoType } from '../../types/cv.types';

interface PersonalHeaderProps {
  personalInfo: PersonalInfoType;
}

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personalInfo }) => {
  const { name, email, phone, linkedin, summary } = personalInfo;

  return (
    <div className="border-b-2 border-gray-300 pb-4 mb-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800">{name || "Seu Nome"}</h1>
      <div className="text-sm text-gray-600 mt-2 flex justify-center space-x-4">
        {email && <span>{email}</span>}
        {phone && <span>{phone}</span>}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        )}
      </div>
      {summary && (
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
          {summary}
        </p>
      )}
    </div>
  );
};

export default PersonalHeader;
