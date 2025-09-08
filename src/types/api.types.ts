// src/types/api.types.ts (CORRIGIDO)

import { type CVData } from './cv.types'; // <-- Adicione esta linha

// Define a estrutura da requisição para aprimoramento de texto pela IA
// O 'type' pode ser 'summary' ou 'experience_description'
export interface AIEnhanceRequest {
  type: 'summary' | 'experience_description';
  text: string;
}

// Define a estrutura da resposta da API de aprimoramento de texto
export interface AIEnhanceResponse {
  enhancedText: string;
}

// Estruturas de dados para a API de persistência (opcional)
export interface SaveCVRequest {
  cvData: CVData;
}

export interface SaveCVResponse {
  message: string;
  cvId: string;
}