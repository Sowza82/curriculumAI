// src/utils/textProcessing.ts

/**
 * Trunca uma string para um comprimento máximo especificado.
 * @param text A string a ser truncada.
 * @param maxLength O comprimento máximo permitido.
 * @returns A string truncada com reticências (...) se for mais longa que o limite.
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

/**
 * Capitaliza a primeira letra de cada palavra em uma string.
 * @param text A string a ser capitalizada.
 * @returns A string com a primeira letra de cada palavra em maiúsculo.
 */
export const capitalizeWords = (text: string): string => {
  return text.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};
