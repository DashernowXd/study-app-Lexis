import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  CircularProgress,
  Alert,
  Button
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { VocabularyCardHeader } from './VocabularyCardHeader';
import { VocabularyCardBody } from './VocabularyCardBody';
import { useWordExamples } from '../hooks/useWordExamples';
import { useSentenceTokens } from '../hooks/useSentenceTokens';
import type { EnglishLevel } from '@/types';
import type { DictionaryEntry } from '../types';
import { dictionaryApi, getDailyWordForLevel } from '../api/dictionaryApi';
import { vocabularyApi } from '../api/vocabularyApi';

interface Props {
  level: EnglishLevel;
}

const CYCLE_INTERVAL_MS = 9000; // 9 seconds per example / auto transition
const TICK_MS = 100;

const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto 24px auto',
  },
  card: {
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f4f6fd 100%)',
    border: '1px solid rgba(20, 33, 117, 0.12)',
    boxShadow: '0 10px 25px -5px rgba(20, 33, 117, 0.08), 0 8px 10px -6px rgba(20, 33, 117, 0.04)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      boxShadow: '0 16px 30px -5px rgba(20, 33, 117, 0.12), 0 10px 12px -6px rgba(20, 33, 117, 0.06)',
    },
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(20, 33, 117, 0.06)',
    '& .MuiLinearProgress-bar': {
      backgroundColor: 'secondary.main',
      transition: 'transform 0.1s linear',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 1.5,
    mb: 2,
  },
  searchBar: {
    width: { xs: '100%', sm: 280 },
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      bgcolor: 'background.paper',
      fontSize: '0.85rem',
      height: 38,
    },
  },
  wordTitleBox: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 1.5,
    flexWrap: 'wrap',
  },
  wordTitle: {
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'primary.main',
    fontSize: { xs: '1.85rem', sm: '2.4rem' },
    textTransform: 'lowercase',
  },
  phonetic: {
    fontFamily: 'monospace',
    color: 'text.secondary',
    fontSize: '1rem',
    bgcolor: 'rgba(20, 33, 117, 0.05)',
    px: 1,
    py: 0.2,
    borderRadius: '6px',
  },
  sentenceContainer: {
    p: 2.5,
    borderRadius: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    border: '1px solid rgba(20, 33, 117, 0.1)',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.02)',
    my: 2,
    position: 'relative',
  },
  sentenceText: {
    fontSize: { xs: '1.05rem', sm: '1.18rem' },
    lineHeight: 1.6,
    color: '#1a1f36',
    fontWeight: 500,
  },
  wordHighlight: {
    backgroundColor: 'rgba(0, 107, 95, 0.14)',
    color: '#006b5f',
    padding: '2px 8px',
    borderRadius: '6px',
    fontWeight: 700,
    borderBottom: '2px solid #006b5f',
    display: 'inline-block',
  },
  hiddenBlank: {
    backgroundColor: 'rgba(20, 33, 117, 0.08)',
    color: 'transparent',
    userSelect: 'none',
    borderBottom: '2px dashed #142175',
    padding: '2px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(20, 33, 117, 0.16)',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pt: 1.5,
    borderTop: '1px solid rgba(20, 33, 117, 0.08)',
    flexWrap: 'wrap',
    gap: 1,
  },
};

interface VocabularyCardsState {
  wordOffset: number;
  searchedWord: string | null;
  activeMeaningIndex: number;
  activeExampleIndex: number;
  elapsedMs: number;
  isAutoPlaying: boolean;
  hideWordInSentence: boolean;
  fadeKey: number;
}

type VocabularyCardsAction =
  | { type: 'NEXT_EXAMPLE'; totalExamples: number }
  | { type: 'PREV_EXAMPLE' }
  | { type: 'NEXT_WORD' }
  | { type: 'PREV_WORD' }
  | { type: 'SHUFFLE_WORD'; delta: number }
  | { type: 'SEARCH_WORD'; word: string }
  | { type: 'RESET_TO_DAILY' }
  | { type: 'SET_ACTIVE_MEANING'; index: number }
  | { type: 'TOGGLE_AUTOPLAY' }
  | { type: 'TICK_ELAPSED'; ms: number }
  | { type: 'RESET_ELAPSED' }
  | { type: 'REVEAL_HIDDEN_WORD' }
  | { type: 'TOGGLE_HIDE_WORD' };

const initialVocabularyCardsState: VocabularyCardsState = {
  wordOffset: 0,
  searchedWord: null,
  activeMeaningIndex: 0,
  activeExampleIndex: 0,
  elapsedMs: 0,
  isAutoPlaying: true,
  hideWordInSentence: false,
  fadeKey: 0
};

function vocabularyCardsReducer(
  state: VocabularyCardsState,
  action: VocabularyCardsAction
): VocabularyCardsState {
  switch (action.type) {
    case 'NEXT_EXAMPLE': {
      const hasMoreExamples = action.totalExamples > 1 && state.activeExampleIndex < action.totalExamples - 1;
      if (hasMoreExamples) {
        return {
          ...state,
          activeExampleIndex: state.activeExampleIndex + 1,
          elapsedMs: 0,
          fadeKey: state.fadeKey + 1
        };
      }
      return {
        ...state,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1,
        wordOffset: state.searchedWord ? state.wordOffset : state.wordOffset + 1
      };
    }
    case 'PREV_EXAMPLE': {
      if (state.activeExampleIndex > 0) {
        return {
          ...state,
          activeExampleIndex: state.activeExampleIndex - 1,
          elapsedMs: 0,
          fadeKey: state.fadeKey + 1
        };
      }
      return {
        ...state,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1,
        wordOffset: state.searchedWord ? state.wordOffset : state.wordOffset - 1
      };
    }
    case 'NEXT_WORD':
      return {
        ...state,
        searchedWord: null,
        wordOffset: state.wordOffset + 1,
        activeMeaningIndex: 0,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'PREV_WORD':
      return {
        ...state,
        searchedWord: null,
        wordOffset: state.wordOffset - 1,
        activeMeaningIndex: 0,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'SHUFFLE_WORD':
      return {
        ...state,
        searchedWord: null,
        wordOffset: state.wordOffset + action.delta,
        activeMeaningIndex: 0,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'SEARCH_WORD':
      return {
        ...state,
        searchedWord: action.word.trim().toLowerCase(),
        activeMeaningIndex: 0,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'RESET_TO_DAILY':
      return {
        ...state,
        searchedWord: null,
        wordOffset: 0,
        activeMeaningIndex: 0,
        activeExampleIndex: 0,
        elapsedMs: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'SET_ACTIVE_MEANING':
      return {
        ...state,
        activeMeaningIndex: action.index,
        activeExampleIndex: 0,
        fadeKey: state.fadeKey + 1
      };
    case 'TOGGLE_AUTOPLAY':
      return {
        ...state,
        isAutoPlaying: !state.isAutoPlaying
      };
    case 'TICK_ELAPSED':
      return {
        ...state,
        elapsedMs: action.ms
      };
    case 'RESET_ELAPSED':
      return {
        ...state,
        elapsedMs: 0
      };
    case 'REVEAL_HIDDEN_WORD':
      return {
        ...state,
        hideWordInSentence: false
      };
    case 'TOGGLE_HIDE_WORD':
      return {
        ...state,
        hideWordInSentence: !state.hideWordInSentence
      };
    default:
      return state;
  }
}

export const DailyVocabularyCards: React.FC<Props> = ({ level }) => {
  const [state, dispatch] = useReducer(vocabularyCardsReducer, initialVocabularyCardsState);
  const {
    wordOffset,
    searchedWord,
    activeMeaningIndex,
    activeExampleIndex,
    elapsedMs,
    isAutoPlaying,
    hideWordInSentence,
    fadeKey
  } = state;

  const [searchInput, setSearchInput] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Starred bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => vocabularyApi.getBookmarkedIds());

  // Determine current active word query
  const targetWord = useMemo(() => {
    if (searchedWord && searchedWord.trim().length > 0) {
      return searchedWord.trim().toLowerCase();
    }
    return getDailyWordForLevel(level, wordOffset);
  }, [searchedWord, level, wordOffset]);

  // Fetch word definitions live from the Free Dictionary API
  const { data: dictEntry, isLoading, isError, error, refetch } = useQuery<DictionaryEntry>({
    queryKey: ['dictionary-definition', targetWord],
    queryFn: () => dictionaryApi.fetchWordDefinition(targetWord),
    retry: 1,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  // Compile all available examples for this word
  const allExamples = useWordExamples(dictEntry, targetWord, activeMeaningIndex);
  const activeExample = allExamples[activeExampleIndex % (allExamples.length || 1)];

  // Audio URL from API phonetics
  const nativeAudioUrl = useMemo(() => {
    if (!dictEntry?.phonetics) return null;
    const found = dictEntry.phonetics.find(p => p.audio && p.audio.trim().length > 0);
    return found?.audio || null;
  }, [dictEntry]);

  // Audio Playback: Play native MP3 or fallback to Web Speech Synthesis
  const handlePlayAudio = useCallback((textToSpeak?: string) => {
    if (nativeAudioUrl && !textToSpeak) {
      setIsPlayingAudio(true);
      const audio = new Audio(nativeAudioUrl);
      audio.onended = () => setIsPlayingAudio(false);
      audio.onerror = () => {
        setIsPlayingAudio(false);
        // Fallback to speech synthesis on audio error
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(targetWord);
          utterance.lang = 'en-US';
          window.speechSynthesis.speak(utterance);
        }
      };
      audio.play().catch(() => setIsPlayingAudio(false));
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak || targetWord);
      utterance.lang = 'en-US';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  }, [nativeAudioUrl, targetWord]);

  // Cycle to next example or next word
  const handleNextExample = useCallback(() => {
    dispatch({ type: 'NEXT_EXAMPLE', totalExamples: allExamples.length });
  }, [allExamples.length]);

  const handlePrevExample = useCallback(() => {
    dispatch({ type: 'PREV_EXAMPLE' });
  }, []);

  const handleNextWord = useCallback(() => {
    dispatch({ type: 'NEXT_WORD' });
  }, []);

  const handlePrevWord = useCallback(() => {
    dispatch({ type: 'PREV_WORD' });
  }, []);

  const handleShuffle = useCallback(() => {
    const delta = Math.floor(Math.random() * 10) + 1;
    dispatch({ type: 'SHUFFLE_WORD', delta });
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      dispatch({ type: 'SEARCH_WORD', word: searchInput });
      setSearchInput('');
    }
  };

  const handleResetToDaily = useCallback(() => {
    dispatch({ type: 'RESET_TO_DAILY' });
  }, []);

  // Stable callback ref to prevent timer re-subscription on callback change
  const onNextExampleRef = useRef(handleNextExample);
  useEffect(() => {
    onNextExampleRef.current = handleNextExample;
  });

  // Timer loop for auto-change
  useEffect(() => {
    if (!isAutoPlaying || isLoading || isError) return;

    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += TICK_MS;
      if (elapsed >= CYCLE_INTERVAL_MS) {
        elapsed = 0;
        dispatch({ type: 'RESET_ELAPSED' });
        onNextExampleRef.current();
      } else {
        dispatch({ type: 'TICK_ELAPSED', ms: elapsed });
      }
    }, TICK_MS);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isLoading, isError]);

  // Highlight word or render blank with stable keys
  const renderedSentence = useSentenceTokens(
    activeExample,
    targetWord,
    hideWordInSentence,
    styles.hiddenBlank,
    styles.wordHighlight,
    () => dispatch({ type: 'REVEAL_HIDDEN_WORD' })
  );

  const progressPercent = (elapsedMs / CYCLE_INTERVAL_MS) * 100;
  const isBookmarked = bookmarkedIds.includes(targetWord);

  return (
    <Box sx={styles.container}>
      <Card sx={styles.card} elevation={0}>
        {/* Progress Bar for Auto-Cycle */}
        <LinearProgress
          variant="determinate"
          value={isAutoPlaying ? progressPercent : 0}
          sx={styles.progressBar}
        />

        <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
          {/* Header Row */}
          <VocabularyCardHeader
            level={level}
            searchedWord={searchedWord}
            searchInput={searchInput}
            isAutoPlaying={isAutoPlaying}
            isBookmarked={isBookmarked}
            searchBarStyle={styles.searchBar}
            headerStyle={styles.header}
            onSearchInputChange={setSearchInput}
            onSearchSubmit={handleSearchSubmit}
            onResetToDaily={handleResetToDaily}
            onToggleAutoplay={() => dispatch({ type: 'TOGGLE_AUTOPLAY' })}
            onShuffle={handleShuffle}
            onToggleBookmark={() => {
              vocabularyApi.toggleBookmark(targetWord);
              setBookmarkedIds(vocabularyApi.getBookmarkedIds());
            }}
          />

          {/* Loading State */}
          {isLoading && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 6, gap: 2 }}>
              <CircularProgress size={28} color="secondary" />
              <Typography variant="body2" color="text.secondary">
                Querying <code>api.dictionaryapi.dev</code> for "{targetWord}"...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {isError && (
            <Alert
              severity="warning"
              sx={{ my: 2 }}
              action={
                <Button color="inherit" size="small" onClick={() => refetch()}>
                  Retry
                </Button>
              }
            >
              {(error as Error)?.message || `Could not fetch definitions for "${targetWord}".`}
            </Alert>
          )}

          {/* Success Content */}
          {!isLoading && !isError && dictEntry && (
            <VocabularyCardBody
              dictEntry={dictEntry}
              targetWord={targetWord}
              fadeKey={fadeKey}
              nativeAudioUrl={nativeAudioUrl}
              isPlayingAudio={isPlayingAudio}
              activeMeaningIndex={activeMeaningIndex}
              activeExampleIndex={activeExampleIndex}
              allExamples={allExamples}
              activeExample={activeExample}
              renderedSentence={renderedSentence}
              hideWordInSentence={hideWordInSentence}
              styles={styles}
              onPlayAudio={handlePlayAudio}
              onSelectMeaning={(idx) => dispatch({ type: 'SET_ACTIVE_MEANING', index: idx })}
              onToggleHideWord={() => dispatch({ type: 'TOGGLE_HIDE_WORD' })}
              onSearchWord={(word) => dispatch({ type: 'SEARCH_WORD', word })}
              onPrevExample={handlePrevExample}
              onNextExample={handleNextExample}
              onPrevWord={handlePrevWord}
              onNextWord={handleNextWord}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DailyVocabularyCards;
