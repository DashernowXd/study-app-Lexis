import { useMemo } from 'react';
import type { DictionaryEntry } from '../types';
import { DAILY_VOCABULARY } from '../data/vocabularyData';

export interface ExampleItem {
  sentence: string;
  source: string;
  translationEs?: string;
  note?: string;
}

export function useWordExamples(
  dictEntry: DictionaryEntry | undefined,
  targetWord: string,
  activeMeaningIndex: number
): ExampleItem[] {
  const curatedMatch = useMemo(() => {
    return DAILY_VOCABULARY.find(item => item.verb.toLowerCase() === targetWord.toLowerCase());
  }, [targetWord]);

  const activeMeaning = dictEntry?.meanings[activeMeaningIndex] || dictEntry?.meanings[0];

  return useMemo<ExampleItem[]>(() => {
    const list: ExampleItem[] = [];

    // 1. Examples from the active Dictionary API meaning definitions
    if (activeMeaning) {
      activeMeaning.definitions.forEach((def, i) => {
        if (def.example && def.example.trim()) {
          list.push({
            sentence: def.example.trim(),
            source: `Dictionary API (${activeMeaning.partOfSpeech} #${i + 1})`,
            note: def.definition
          });
        }
      });
    }

    // 2. Examples from other meanings in the Dictionary API
    if (dictEntry?.meanings) {
      dictEntry.meanings.forEach((meaning, mIdx) => {
        if (mIdx !== activeMeaningIndex) {
          meaning.definitions.forEach((def, dIdx) => {
            if (def.example && def.example.trim()) {
              list.push({
                sentence: def.example.trim(),
                source: `Dictionary API (${meaning.partOfSpeech} #${dIdx + 1})`,
                note: def.definition
              });
            }
          });
        }
      });
    }

    // 3. Multi-tense contextual sentence variations from curated dataset
    if (curatedMatch?.tenses) {
      curatedMatch.tenses.forEach(t => {
        list.push({
          sentence: t.sentence,
          source: t.tense,
          translationEs: t.sentenceEs,
          note: t.contextNote || curatedMatch.definitionEn
        });
      });
    }

    // Fallback if no specific example was found in the entry
    if (list.length === 0 && activeMeaning?.definitions[0]?.definition) {
      list.push({
        sentence: `The word "${targetWord}" is defined as: ${activeMeaning.definitions[0].definition}`,
        source: 'Definition in context'
      });
    }

    return list;
  }, [activeMeaning, dictEntry, curatedMatch, targetWord, activeMeaningIndex]);
}
