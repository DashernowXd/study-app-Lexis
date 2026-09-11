export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
  feedback: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  totalQuestions: number;
  topic: string;
  unit: string;
  targetDomain: string;
  questionText: string;
  grammarTipTitle: string;
  grammarTipRule: string;
  options: QuizOption[];
}
