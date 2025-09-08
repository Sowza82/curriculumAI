// vite.config.js (CORRIGIDO)

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// A CORREÇÃO ESTÁ AQUI: importamos o plugin específico para o Vite
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});