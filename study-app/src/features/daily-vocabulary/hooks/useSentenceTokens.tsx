import { useMemo } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { ExampleItem } from '../hooks/useWordExamples';
import { AnimatedSentenceWord } from '../components/AnimatedSentenceWord';

export function useSentenceTokens(
  activeExample: ExampleItem | undefined,
  targetWord: string,
  hideWordInSentence: boolean,
  _hiddenBlankStyle: SxProps<Theme>,
  _wordHighlightStyle: SxProps<Theme>,
  onRevealWord: () => void
) {
  return useMemo(() => {
    if (!activeExample?.sentence) return null;
    const sentence = activeExample.sentence;
    const wordToMatch = targetWord;

    // Match word or simple inflections (e.g. hello, helloed, implementing, implements, etc.)
    const regex = new RegExp(`(\\b${wordToMatch}[a-z]*\\b)`, 'gi');
    const parts = sentence.split(regex);

    let tokenIndex = 0;
    const tokens = parts.map(text => {
      tokenIndex += 1;
      return {
        id: `chunk-${targetWord}-${tokenIndex}`,
        text,
        isMatch: regex.test(text)
      };
    });

    return tokens.map(token => {
      if (token.isMatch) {
        return (
          <AnimatedSentenceWord
            key={token.id}
            text={token.text}
            isHidden={hideWordInSentence}
            onReveal={onRevealWord}
          />
        );
      }
      return <span key={token.id}>{token.text}</span>;
    });
  }, [activeExample, targetWord, hideWordInSentence, onRevealWord]);
}
