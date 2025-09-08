// src/hooks/useCVData.ts (CORRIGIDO)

import { useEffect, useState } from 'react';
// A CORREÇÃO ESTÁ AQUI:
import { type CVData } from '../types/cv.types';

const LOCAL_STORAGE_KEY = 'cv_builder_data';

// Tenta carregar os dados do localStorage na inicialização
const getInitialData = (): CVData => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : {
      personalInfo: { name: '', email: '', phone: '', linkedin: '', summary: '' },
      skills: [],
      experiences: [],
    };
  } catch (error) {
    console.error("Erro ao carregar dados do localStorage", error);
    return {
      personalInfo: { name: '', email: '', phone: '', linkedin: '', summary: '' },
      skills: [],
      experiences: [],
    };
  }
};

export const useCVData = () => {
  const [cvData, setCvData] = useState<CVData>(getInitialData);

  // Salva os dados no localStorage sempre que o estado do CV mudar
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cvData));
    } catch (error) {
      console.error("Erro ao salvar dados no localStorage", error);
    }
  }, [cvData]);

  // Função para atualizar partes específicas do estado do CV
  const updateCVData = (newData: Partial<CVData>) => {
    setCvData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  return { cvData, updateCVData, setCvData };
};