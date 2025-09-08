// src/hooks/useAIEnhancement.ts (CORRIGIDO)

import { useState } from 'react';
import { type AIEnhanceRequest } from '../types/api.types';

export const useAIEnhancement = () => {
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enhance = async (data: AIEnhanceRequest): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    try {
      console.log('Simulando chamada para a API de IA com os dados:', data);
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      const simulatedResponse = { 
        enhancedText: `${data.text} (este texto foi aprimorado pela simulação da IA!)` 
      };
      
      setIsEnhancing(false);
      return simulatedResponse.enhancedText;

    } catch (err) {
      // A CORREÇÃO ESTÁ AQUI:
      console.error("Erro na simulação da IA:", err);
      setError("Falha ao aprimorar com IA. Tente novamente.");
      setIsEnhancing(false);
      return null;
    }
  };

  return { enhance, isEnhancing, error };
};