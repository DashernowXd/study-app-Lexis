export type EnglishLevel = 'B1' | 'B2' | 'C1';
export type TaskCategory = 'Capture' | 'Activate' | 'Reinforce' | 'Evaluate';

export type ExerciseType = 'reading' | 'fill-in-blanks' | 'error-spotting' | 'recording' | 'writing' | 'none';

export interface ErrorSpottingItem {
  id: string;
  sentence: string;
  errorWord?: string;
  correctAnswer: string;
  explanation: string;
}

export interface ExerciseData {
  text?: string;
  vocabulary?: string[];
  questions?: { id: string; sentence: string; answer: string }[];
  errorItems?: ErrorSpottingItem[];
  prompt?: string;
}

export interface StudyTask {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  completed: boolean;
  level: EnglishLevel;
  exerciseType?: ExerciseType;
  exerciseData?: ExerciseData;
}
