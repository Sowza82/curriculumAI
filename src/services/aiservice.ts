// src/services/aiservice.ts

import { AIEnhanceRequest, AIEnhanceResponse } from '../types/api.types';

/**
 * Simula uma chamada de API para aprimorar o texto com IA.
 * Em um cenário real, esta função faria uma requisição fetch() ou axios.post()
 * para um endpoint de API.
 */
export const enhanceTextWithAI = (data: AIEnhanceRequest): Promise<AIEnhanceResponse> => {
  console.log('Chamando serviço de IA com os seguintes dados:', data);

  // Simula a resposta da API com um atraso de 1.5 segundos
  return new Promise((resolve) => {
    setTimeout(() => {
      let enhancedText = data.text;

      // Lógica de simulação de aprimoramento
      if (data.type === 'summary') {
        enhancedText = `Um resumo profissional conciso e impactante sobre ${data.text}.`;
      } else if (data.type === 'experience_description') {
        enhancedText = `Gerenciei e otimizei ${data.text}, resultando em melhoria de performance.`;
      }

      const response: AIEnhanceResponse = { enhancedText };
      console.log('Resposta da IA recebida:', response);
      resolve(response);
    }, 1500); // Simula o tempo de latência da rede
  });
};
