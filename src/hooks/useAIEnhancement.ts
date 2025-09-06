// src/hooks/useAIEnhancement.ts

import { useState } from 'react';
import { enhanceTextWithAI } from '../services/aiservice'; // A ser implementado
import { AIEnhanceRequest } from '../types/api.types';

export const useAIEnhancement = () => {
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enhance = async (data: AIEnhanceRequest): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    try {
      const response = await enhanceTextWithAI(data); // Chama o serviço
      setIsEnhancing(false);
      return response.enhancedText;
    } catch (err) {
      setError("Falha ao aprimorar com IA. Tente novamente.");
      setIsEnhancing(false);
      return null;
    }
  };

  return { enhance, isEnhancing, error };
};
