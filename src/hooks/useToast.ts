// src/hooks/useToast.ts

import { useCallback, useState } from 'react';
import { ToastType } from '../components/UI/Toast'; // Importa o tipo do componente de UI

interface ToastState {
  message: string;
  type: ToastType;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState | null>(null);

  // Função para mostrar um toast
  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
  }, []);

  // Função para fechar o toast
  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return { toast, showToast, hideToast };
};
