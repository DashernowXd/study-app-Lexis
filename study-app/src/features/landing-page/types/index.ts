import type { AppView } from '@/components/layout/MainLayout';
import type { EnglishLevel } from '@/features/study-plan/types';

export interface LandingPageScreenProps {
  /** Callback to navigate to a specific app view */
  onNavigate: (view: AppView) => void;
  /** Current active English Level */
  level?: EnglishLevel;
  /** Callback to change English Level */
  onLevelChange?: (level: EnglishLevel) => void;
}

export type TransformationMode = 'hedging' | 'inversion' | 'cleft' | 'subjunctive';

export interface TransformationItem {
  id: TransformationMode;
  label: string;
  category: string;
  originalText: string;
  originalPhrase: string;
  elevatedText: string;
  elevatedPhrase: string;
  grammaticalRule: string;
  registerRationale: string;
  cefrLevel: string;
}
