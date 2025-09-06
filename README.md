CurriculumAI
Um gerador de currículos inteligente com visualização em tempo real, desenvolvido para otimizar o processo de criação de um currículo profissional de forma rápida e intuitiva.

O projeto foi construído com uma arquitetura robusta e moderna, utilizando React com TypeScript para um desenvolvimento mais seguro e escalável. O layout é otimizado para desktop, oferecendo uma experiência de usuário fluida em uma tela dividida.

🚀 Funcionalidades Principais
Layout Split-Screen: Tela dividida em duas colunas, com formulário de dados à esquerda e pré-visualização em tempo real à direita.

Gerenciamento Dinâmico: Listas para adicionar e remover habilidades e experiências profissionais.

Preview em Tempo Real: O currículo é atualizado instantaneamente conforme o usuário digita.

Persistência de Dados: Os dados do currículo são salvos automaticamente no localStorage do navegador para evitar a perda de progresso.

Exportação para PDF: Funcionalidade opcional para gerar um arquivo PDF do currículo, com um design profissional e otimizado para impressão.

Aprimoramento com IA: Integração opcional para aprimorar o texto do resumo profissional e das experiências com o uso de inteligência artificial.

💻 Tecnologias Utilizadas
Framework: React 19

Linguagem: TypeScript

Build Tool: Vite

Estilização: TailwindCSS v4

Geração de PDF: jsPDF e html2canvas

📁 Estrutura do Projeto
A aplicação segue uma estrutura modular, com responsabilidades bem definidas para cada pasta e arquivo.

src/
├── components/
│   ├── Form/           (Componentes de formulário)
│   ├── Layout/          (Componentes para o layout split-screen)
│   ├── Preview/         (Componentes de visualização do currículo)
│   ├── UI/              (Componentes genéricos de UI, como spinner e toasts)
│   └── ExportButton.tsx (Botão de exportação)
├── services/          (Lógica para interação com APIs e serviços externos)
├── hooks/             (Custom hooks para lógica de estado e efeitos)
├── utils/             (Funções utilitárias e de validação)
├── types/             (Definições de tipos TypeScript)
├── api/               (Camada opcional para persistência de dados em servidor)
└── App.tsx            (Componente principal)
---

⚙️ Como Executar o Projeto
Siga os passos abaixo para clonar o repositório e executar a aplicação em seu ambiente local
---

Pré-requisitos
Node.js (versão 18 ou superior)

npm ou yarn
---

Instalação
Clone o repositório:

Bash

git clone [URL_DO_REPOSITORIO]
cd curriculumai

---

Instale as dependências:

Bash

npm install

# ou

yarn install
Execute a aplicação:

Bash

npm run dev

# ou

yarn dev
---

Abra seu navegador e acesse <http://localhost:5173/> para visualizar a aplicação
---

💡 Detalhes de Implementação
Gerenciamento de Dados
O estado do currículo é gerenciado pelo custom hook useCVData. Ele utiliza a API de contexto do React para centralizar as informações e o localStorage do navegador para salvar automaticamente o progresso do usuário, garantindo que ele não perca seu trabalho
---

Visualização em Tempo Real
Os componentes FormSection e PreviewSection trabalham em conjunto. O FormSection passa os dados para o App.tsx via callbacks, e o App.tsx propaga o estado atualizado para o PreviewSection, que o renderiza instantaneamente
---

Exportação para PDF
A funcionalidade de exportação é controlada pelo componente ExportButton.tsx. Ao ser clicado, ele chama a função exportCVAsPDF do serviço pdfService.ts, que usa html2canvas para capturar a visualização do currículo e jsPDF para criar o arquivo PDF
---

Aprimoramento com IA
O AIEnhanceButton.tsx e o useAIEnhancement se conectam ao serviço aiservice.ts. O hook gerencia o estado de carregamento do botão enquanto a chamada de API (simulada) processa e retorna o texto aprimorado, que então atualiza o formulário.
