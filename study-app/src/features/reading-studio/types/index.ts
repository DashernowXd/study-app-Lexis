export interface GlossaryTerm {
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

export interface ReadingParagraph {
  id: number;
  textParts: Array<{
    text: string;
    glossaryKey?: string;
  }>;
}

export interface ReadingArticle {
  id: string;
  level: string;
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  paragraphs: ReadingParagraph[];
  glossary: Record<string, GlossaryTerm>;
  comprehensionQuestions: string[];
}
