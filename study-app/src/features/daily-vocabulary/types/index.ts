import type { EnglishLevel } from '@/types';

export type VerbTenseName = 
  | 'Present Simple' 
  | 'Present Continuous' 
  | 'Past Simple' 
  | 'Present Perfect' 
  | 'Modal / Passive';

export interface VerbTenseVariant {
  tense: VerbTenseName;
  form: string;
  sentence: string;
  sentenceEs: string;
  contextNote?: string;
}

export type VocabCategory = 'Tech & Engineering' | 'Business & Leadership' | 'Everyday Fluency' | 'Idioms & Phrasal Verbs';

export interface DailyVocabularyWord {
  id: string;
  verb: string;
  phonetic: string;
  partOfSpeech: string;
  level: EnglishLevel;
  category: VocabCategory;
  definitionEn: string;
  definitionEs: string;
  collocations: string[];
  tenses: VerbTenseVariant[];
}

// Dictionary API v2 types
export interface DictionaryPhonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
}

export interface DictionaryDefinition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface DictionaryMeaning {
  partOfSpeech: string;
  definitions: DictionaryDefinition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics?: DictionaryPhonetic[];
  origin?: string;
  meanings: DictionaryMeaning[];
  sourceUrls?: string[];
}
