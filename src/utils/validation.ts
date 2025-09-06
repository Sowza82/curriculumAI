// src/utils/validation.ts

import { PersonalInfoType } from '../types/cv.types';

// Valida se o email tem um formato válido usando regex simples
export const isValidEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// Valida se a string não está vazia ou contém apenas espaços em branco
export const isNonEmptyString = (text: string): boolean => {
  return text.trim().length > 0;
};

// Valida se a URL é válida
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// Exemplo de validação para a seção de informações pessoais
export const validatePersonalInfo = (data: PersonalInfoType): string[] => {
  const errors: string[] = [];
  if (!isNonEmptyString(data.name)) {
    errors.push('O nome é obrigatório.');
  }
  if (!isNonEmptyString(data.email) || !isValidEmail(data.email)) {
    errors.push('O e-mail é obrigatório e precisa ser válido.');
  }
  // Adicione outras validações conforme necessário
  return errors;
};
