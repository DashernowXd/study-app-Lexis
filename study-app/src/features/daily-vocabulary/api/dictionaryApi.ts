import type { EnglishLevel } from '@/types';
import type { DictionaryEntry } from '../types';
import { DAILY_VOCABULARY } from '../data/vocabularyData';

export const LEVEL_WORDS_POOL: Record<EnglishLevel, string[]> = {
  B1: [
    'implement',
    'rejuvenate',
    'persist',
    'coordinate',
    'achieve',
    'maintain',
    'approach',
    'discover',
    'struggle',
    'connect',
    'improve',
    'manage',
    'inspire',
    'vibrant'
  ],
  B2: [
    'streamline',
    'foster',
    'tackle',
    'enhance',
    'overhaul',
    'anticipate',
    'elaborate',
    'negotiate',
    'substitute',
    'evaluate',
    'advocate',
    'allocate',
    'accelerate'
  ],
  C1: [
    'leverage',
    'spearhead',
    'scrutinize',
    'articulate',
    'reconcile',
    'unravel',
    'disseminate',
    'catalyze',
    'substantiate',
    'consolidate',
    'mitigate',
    'differentiate',
    'fluctuate'
  ]
};

// Calculate Day of the Year (1-366) for deterministic daily rotation
export const getDayOfYear = (): number => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const getDailyWordForLevel = (level: EnglishLevel, offset: number = 0): string => {
  const pool = LEVEL_WORDS_POOL[level] || LEVEL_WORDS_POOL.B1;
  const dayIndex = (getDayOfYear() + offset) % pool.length;
  const normalizedIndex = (dayIndex + pool.length) % pool.length;
  return pool[normalizedIndex];
};

const createLocalFallbackEntry = (cleanWord: string): DictionaryEntry => {
  const match = DAILY_VOCABULARY.find(item => item.verb.toLowerCase() === cleanWord);
  if (match) {
    return {
      word: match.verb,
      phonetic: match.phonetic,
      phonetics: [{ text: match.phonetic }],
      origin: 'Curated English Study Agent Entry (Resilience / Offline Mode)',
      meanings: [
        {
          partOfSpeech: match.partOfSpeech.toLowerCase().includes('verb') ? 'verb' : 'noun',
          definitions: [
            {
              definition: match.definitionEn,
              example: match.tenses[0]?.sentence || undefined,
              synonyms: match.collocations,
              antonyms: []
            }
          ],
          synonyms: match.collocations,
          antonyms: []
        }
      ]
    };
  }

  // Generic fallback if not in curated list (e.g. hello, connect)
  const capitalized = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
  return {
    word: cleanWord,
    phonetic: `/${cleanWord}/`,
    phonetics: [],
    origin: 'Vocabulary Entry (Local Resilience Mode)',
    meanings: [
      {
        partOfSpeech: 'verb / noun',
        definitions: [
          {
            definition: `${capitalized}: Essential vocabulary term for English fluency. (Dictionary API connection timed out).`,
            example: `We regularly use "${cleanWord}" to express ideas with clarity in English.`,
            synonyms: [],
            antonyms: []
          }
        ],
        synonyms: [],
        antonyms: []
      }
    ]
  };
};

export const dictionaryApi = {
  fetchWordDefinition: async (word: string): Promise<DictionaryEntry> => {
    const cleanWord = word.trim().toLowerCase();
    if (!cleanWord) {
      throw new Error('Word cannot be empty');
    }

    // 1. Check persistent localStorage cache for instant repeat lookups
    const cacheKey = `dict_cache_${cleanWord}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch {
      // Ignore storage error
    }

    // 2. Select appropriate endpoints: in dev, proxy avoids CORS; in production, use direct API
    const endpoints = import.meta.env.DEV
      ? [
          `/api-dict/v2/entries/en/${encodeURIComponent(cleanWord)}`,
          `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`
        ]
      : [
          `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`
        ];

    let lastError: Error | null = null;

    for (const url of endpoints) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!res.ok) {
          if (res.status === 404 && url.includes('api.dictionaryapi.dev')) {
            throw new Error(`Word "${cleanWord}" not found in Dictionary API. Check the spelling or try another word.`);
          }
          throw new Error(`Dictionary API returned ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error(`No definition entries returned for "${cleanWord}".`);
        }

        const primaryEntry: DictionaryEntry = data[0];

        // Normalize audio URLs that might start with //
        if (primaryEntry.phonetics) {
          primaryEntry.phonetics = primaryEntry.phonetics.map(p => ({
            ...p,
            audio: p.audio?.startsWith('//') ? `https:${p.audio}` : p.audio
          }));
        }

        // Persist to localStorage cache
        try {
          localStorage.setItem(cacheKey, JSON.stringify(primaryEntry));
        } catch {
          // Ignore quota errors
        }

        return primaryEntry;
      } catch (err) {
        lastError = err as Error;
        // Continue to fallback if network or timeout
      }
    }

    // If word is not found (404), rethrow so UI can notify user of spelling mistake
    if (lastError?.message.includes('not found')) {
      throw lastError;
    }

    // If external service is completely down (522 Cloudflare / CORS / timeout), use local fallback
    console.warn(`[DictionaryAPI] External service unreachable (${lastError?.message}), using local fallback for "${cleanWord}"`);
    const fallback = createLocalFallbackEntry(cleanWord);
    return fallback;
  }
};
