import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Atualiza o estado para que a próxima renderização mostre a UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erros
    console.error("ErrorBoundary capturou um erro:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Retorna a UI de fallback personalizada
      return this.props.fallback;
    }

    // Se não houver erro, renderiza os componentes filhos
    return this.props.children;
  }
}

export default ErrorBoundary;