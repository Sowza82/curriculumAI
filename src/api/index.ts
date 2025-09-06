// src/api/index.ts

import { SaveCVRequest, SaveCVResponse } from '../types/api.types';
import { CVData } from '../types/cv.types';

// URL base da API (simulada)
const API_BASE_URL = 'https://api.cvbuilderai.com';

/**
 * Simula uma requisição POST para salvar o currículo no backend.
 * @param cvData Os dados do currículo a serem salvos.
 * @returns Uma Promise que resolve com a resposta da API (ID do CV salvo).
 */
export const saveCV = async (cvData: CVData): Promise<SaveCVResponse> => {
  console.log('API: Tentando salvar o currículo...');

  const requestBody: SaveCVRequest = { cvData };

  // Simula a chamada de rede e a resposta do servidor com um atraso de 1.5s
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula um ID único gerado pelo servidor
      const cvId = `cv_${Date.now()}`;
      console.log(`API: Currículo salvo com sucesso. ID: ${cvId}`);
      resolve({ message: 'Currículo salvo com sucesso!', cvId });
    }, 1500);
  });
};

/**
 * Simula uma requisição GET para carregar um currículo do backend.
 * @param cvId O ID do currículo a ser carregado.
 * @returns Uma Promise que resolve com os dados do currículo.
 */
export const loadCV = async (cvId: string): Promise<CVData> => {
  console.log(`API: Tentando carregar currículo com ID: ${cvId}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula um erro caso o ID não seja encontrado
      if (!cvId) {
        reject(new Error('ID do currículo inválido.'));
      }

      // Simula os dados de um currículo pré-existente
      const mockCVData: CVData = {
        personalInfo: {
          name: 'João Silva',
          email: 'joao.silva@exemplo.com',
          phone: '55 11 98765-4321',
          linkedin: 'https://www.linkedin.com/in/joaosilva',
          summary: 'Desenvolvedor Full Stack com 5 anos de experiência.',
        },
        skills: [
          { name: 'React', level: 'Avançado' },
          { name: 'Node.js', level: 'Intermediário' },
        ],
        experiences: [
          { company: 'Tech Solutions', role: 'Dev Pleno', period: 'Jan 2020 - Presente', description: 'Desenvolvimento de APIs e interfaces de usuário.', isCurrent: true },
        ],
      };

      console.log(`API: Currículo com ID ${cvId} carregado com sucesso.`);
      resolve(mockCVData);
    }, 1500);
  });
};
