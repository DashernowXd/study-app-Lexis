import type { EnglishLevel } from '@/types';
import type { DailyVocabularyWord } from '../types';
import { DAILY_VOCABULARY } from '../data/vocabularyData';

const BOOKMARKS_STORAGE_KEY_V1 = 'lexis_starred_vocabulary_v1';
const LEGACY_STORAGE_KEY = 'lexis_starred_vocabulary';

export const vocabularyApi = {
  getDailyWords: async (level?: EnglishLevel): Promise<DailyVocabularyWord[]> => {
    // Quick artificial latency to trigger Suspense boundary cleanly
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (!level) {
      return DAILY_VOCABULARY;
    }

    const filtered = DAILY_VOCABULARY.filter(item => item.level === level);
    // If the level has entries, return them; otherwise fallback to full set
    return filtered.length > 0 ? filtered : DAILY_VOCABULARY;
  },

  getBookmarkedIds: (): string[] => {
    try {
      const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY_V1) || localStorage.getItem(LEGACY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark: (id: string): boolean => {
    const list = vocabularyApi.getBookmarkedIds();
    const index = list.indexOf(id);
    let isBookmarked = false;
    if (index >= 0) {
      list.splice(index, 1);
      isBookmarked = false;
    } else {
      list.push(id);
      isBookmarked = true;
    }
    localStorage.setItem(BOOKMARKS_STORAGE_KEY_V1, JSON.stringify(list));
    return isBookmarked;
  }
};
