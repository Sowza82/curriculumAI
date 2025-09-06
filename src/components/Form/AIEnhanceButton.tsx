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
      className={`w-full p-3 rounded-md font-semibold transition-colors ${
        isLoading
          ? 'bg-purple-300 text-purple-100 cursor-not-allowed'
          : 'bg-purple-600 text-white hover:bg-purple-700'
      }`}
    >
      {isLoading ? 'Aprimorando...' : 'Aprimorar com IA'}
    </button>
  );
};

export default AIEnhanceButton;
