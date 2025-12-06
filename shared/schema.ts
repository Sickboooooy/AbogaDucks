import { z } from "zod";

export enum DuckProfile {
  PENAL = "Penal",
  CIVIL = "Civil",
  CONSTITUCIONAL = "Constitucional",
  LABORAL = "Laboral",
  MERCANTIL = "Mercantil",
  FISCAL = "Fiscal",
  ADMINISTRATIVO = "Administrativo",
  INTERNACIONAL = "Internacional",
  AMBIENTAL = "Ambiental",
  DIGITAL = "Digital",
  NOTARIAL = "Notarial",
  AGRARIO = "Agrario",
}

export enum Dimension {
  ANALISIS_LOGICO = "Análisis lógico-jurídico",
  COMUNICACION_ORAL = "Comunicación oral",
  REDACCION = "Redacción y argumentación escrita",
  NEGOCIACION = "Negociación y mediación",
  INVESTIGACION = "Investigación documental",
  ETICA = "Ética profesional",
  TOLERANCIA_ESTRES = "Tolerancia al estrés",
  TRABAJO_EQUIPO = "Trabajo en equipo",
  LIDERAZGO = "Liderazgo",
  EMPATIA = "Empatía y sensibilidad social",
}

export interface AnswerOption {
  text: string;
  weights: Partial<Record<DuckProfile, number>> & Partial<Record<Dimension, number>>;
}

export interface Question {
  id: number;
  section: "Situacional" | "Aptitudes" | "Valores";
  text: string;
  type: "multiple_choice" | "likert" | "ranking" | "binary";
  options: AnswerOption[];
}

export const userProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export type UserProfile = z.infer<typeof userProfileSchema>;

export interface TestResult {
  profile: DuckProfile;
  scores: Record<Dimension, number>;
  description: string;
  imageUrl?: string;
}
