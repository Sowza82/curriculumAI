// src/components/Form/AIEnhanceButton.tsx

import React from 'react';

interface AIEnhanceButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const AIEnhanceButton: React.FC<AIEnhanceButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`w-full p-3 rounded-md font-semibold transition-colors text-white
        ${isLoading
          ? 'bg-blue-300 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'}
      `}
    >
      {isLoading ? 'Aprimorando...' : 'Aprimorar com IA'}
    </button>
  );
};

export default AIEnhanceButton;
