import type { EnglishLevel } from '../../study-plan/types';

export interface SpeakingScenario {
  id: string;
  title: string;
  category: 'Daily Standup' | 'Technical Pitch' | 'Crisis Management' | 'Executive Meeting' | 'Debate & Persuasion';
  level: EnglishLevel;
  targetDurationSeconds: number; // e.g. 60 to 120s
  context: string;
  prompt: string;
  shadowingModelText?: string;
  recommendedKeyPhrases: { phrase: string; note: string }[];
  selfChecklist: string[];
}

export interface AudioRecordingResult {
  blob: Blob;
  url: string;
  durationSeconds: number;
  recordedAt: string;
}
