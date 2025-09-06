# 📄 CurriculumAI

Um **gerador de currículos inteligente** com **visualização em tempo real**, desenvolvido para otimizar o processo de criação de um currículo profissional de forma **rápida, moderna e intuitiva**.

O projeto foi construído com uma **arquitetura robusta e escalável**, utilizando **React + TypeScript**, e um layout otimizado para **desktop** em tela dividida (*split-screen*).

---

## 🚀 Funcionalidades Principais

- **Layout Split-Screen**: tela dividida em duas colunas (formulário à esquerda e pré-visualização à direita).
- **Gerenciamento Dinâmico**: adição e remoção de habilidades e experiências profissionais.
- **Preview em Tempo Real**: currículo atualizado instantaneamente conforme o usuário digita.
- **Persistência de Dados**: informações salvas automaticamente no `localStorage` para evitar perda de progresso.
- **Exportação para PDF**: geração de currículo em PDF com design profissional.
- **Aprimoramento com IA** *(opcional)*: integração com serviços de IA para melhorar descrições e resumos profissionais.

---

## 💻 Tecnologias Utilizadas

- **Framework**: React 19
- **Linguagem**: TypeScript
- **Build Tool**: Vite
- **Estilização**: TailwindCSS v4
- **PDF**: jsPDF + html2canvas

---

## 📁 Estrutura do Projeto

```bash
src/
├── components/
│   ├── Form/            # Componentes de formulário
│   ├── Layout/          # Componentes do layout split-screen
│   ├── Preview/         # Visualização do currículo
│   ├── UI/              # Componentes genéricos (spinner, toast etc.)
│   └── ExportButton.tsx # Botão de exportação
├── services/            # Lógica para APIs e serviços externos
├── hooks/               # Custom hooks para estado e efeitos
├── utils/               # Funções utilitárias e validações
├── types/               # Definições de tipos TypeScript
├── api/                 # Camada opcional de persistência em servidor
└── App.tsx              # Componente principal

---
⚙️ Como Executar o Projeto
🔑 Pré-requisitos

Node.js 18+

npm ou yarn

📥 Instalação

Clone o repositório:

git clone [URL_DO_REPOSITORIO]
cd curriculumai


Instale as dependências:

npm install
# ou
yarn install


Execute a aplicação:

npm run dev
# ou
yarn dev


Abra no navegador:
👉 http://localhost:5173/



💡 Detalhes de Implementação
🗂 Gerenciamento de Dados

O estado global é centralizado via custom hook useCVData, com suporte a React Context API.

O progresso é salvo automaticamente no localStorage, garantindo que o usuário não perca seus dados.

⚡ Visualização em Tempo Real

O FormSection envia dados ao App.tsx, que repassa o estado atualizado para o PreviewSection.

A renderização acontece de forma instantânea.

🖨 Exportação para PDF

Controlada pelo componente ExportButton.tsx.

Usa html2canvas para capturar a visualização e jsPDF para gerar o PDF.

🤖 Aprimoramento com IA

O AIEnhanceButton.tsx utiliza o hook useAIEnhancement para chamar o serviço aiservice.ts.

O texto é processado e retornado com melhorias sugeridas pela IA.
