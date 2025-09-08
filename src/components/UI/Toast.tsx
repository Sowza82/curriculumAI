// src/components/UI/Toast.tsx (CORRIGIDO)

import React, { useState, useEffect } from 'react';

// A CORREÇÃO ESTÁ AQUI:
export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}

const typeClasses = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 text-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out z-50 ${typeClasses[type]}`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button 
          onClick={() => {
            setIsVisible(false);
            onClose();
          }} 
          className="ml-4 text-white font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;