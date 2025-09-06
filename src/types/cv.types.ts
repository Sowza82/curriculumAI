// src/types/cv.types.ts

// Define a estrutura para as informações pessoais
export interface PersonalInfoType {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

// Define a estrutura para uma única habilidade
export interface SkillType {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
}

// Define a estrutura para uma única experiência profissional
export interface ExperienceType {
  company: string;
  role: string;
  period: string;
  description: string;
  isCurrent: boolean;
}

// A interface principal que representa a estrutura completa dos dados do currículo
export interface CVData {
  personalInfo: PersonalInfoType;
  skills: SkillType[];
  experiences: ExperienceType[];
}
