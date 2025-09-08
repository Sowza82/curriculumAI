// src/hooks/useToast.ts (VERSÃO CORRETA)

import { useCallback, useState } from 'react';

// Este é o tipo que será usado para o estado.
// Ele precisa ser importado do componente visual.
import { type ToastType } from '../components/UI/Toast';

interface ToastState {
  message: string;
  type: ToastType;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback((message: string, type: ToastType) => {
    setToast({ message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  // O hook retorna o estado e as funções para controlá-lo.
  return { toast, showToast, hideToast };
};