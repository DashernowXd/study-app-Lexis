import { useMemo } from 'react';
import { Box, Tooltip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ExampleItem } from '../hooks/useWordExamples';

export function useSentenceTokens(
  activeExample: ExampleItem | undefined,
  targetWord: string,
  hideWordInSentence: boolean,
  hiddenBlankStyle: SxProps<Theme>,
  wordHighlightStyle: SxProps<Theme>,
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
        if (hideWordInSentence) {
          return (
            <Tooltip key={token.id} title="Click to reveal hidden word">
              <Box
                component="span"
                sx={hiddenBlankStyle}
                onClick={onRevealWord}
              >
                [ {token.text} ]
              </Box>
            </Tooltip>
          );
        }
        return (
          <Box key={token.id} component="span" sx={wordHighlightStyle}>
            {token.text}
          </Box>
        );
      }
      return <span key={token.id}>{token.text}</span>;
    });
  }, [activeExample, targetWord, hideWordInSentence, hiddenBlankStyle, wordHighlightStyle, onRevealWord]);
}
