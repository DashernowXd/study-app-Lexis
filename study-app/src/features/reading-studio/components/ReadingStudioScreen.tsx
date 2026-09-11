import React, { useState, useEffect, useCallback } from 'react';
import { Box, Divider } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { EnglishLevel } from '../../study-plan/types';
import type { GlossaryTerm } from '../types';
import { READING_ARTICLES } from '../data/readingData';
import { ReadingStudioTopBar } from './ReadingStudioTopBar';
import { ReadingArticleReader } from './ReadingArticleReader';
import { ReadingComprehensionSection } from './ReadingComprehensionSection';

export interface ReadingStudioScreenProps {
  onBack?: () => void;
  level?: EnglishLevel;
  onLevelChange?: (level: EnglishLevel) => void;
}

export const ReadingStudioScreen: React.FC<ReadingStudioScreenProps> = ({
  onBack,
  level = 'C1',
  onLevelChange
}) => {
  const [activeLevel, setActiveLevel] = useState<EnglishLevel>(level);
  const [fontSizeOffset, setFontSizeOffset] = useState<number>(0);
  const [themeMode, setThemeMode] = useState<'light' | 'warm'>('light');
  const [selectedGlossary, setSelectedGlossary] = useState<GlossaryTerm | null>(null);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);
  
  // Reactive reading session timer
  const [readingSeconds, setReadingSeconds] = useState<number>(0);
  const [isReadingTimerActive, setIsReadingTimerActive] = useState<boolean>(true);

  // Reactive answers per level
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submittedByLevel, setSubmittedByLevel] = useState<Record<string, boolean>>({});

  // Synchronize internal activeLevel with external prop during render (React recommended pattern)
  const [prevLevel, setPrevLevel] = useState<EnglishLevel>(level);
  if (level !== prevLevel) {
    setPrevLevel(level);
    setActiveLevel(level);
  }

  // Timer interval
  useEffect(() => {
    if (!isReadingTimerActive) return;
    const timer = setInterval(() => {
      setReadingSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isReadingTimerActive]);

  const handleLevelSelect = useCallback((lvl: EnglishLevel) => {
    setActiveLevel(lvl);
    onLevelChange?.(lvl);
  }, [onLevelChange]);

  const currentArticle = READING_ARTICLES[activeLevel]?.[0] || READING_ARTICLES['C1'][0];

  const handleOpenGlossary = useCallback((e: React.MouseEvent<HTMLElement>, key: string) => {
    const term = currentArticle.glossary[key];
    if (term) {
      setSelectedGlossary(term);
      setPopoverAnchor(e.currentTarget);
    }
  }, [currentArticle]);

  const handleCloseGlossary = useCallback(() => {
    setPopoverAnchor(null);
    setSelectedGlossary(null);
  }, []);

  const handleSpeakWord = useCallback((word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const getAnswerKey = useCallback((qIdx: number) => `${activeLevel}-${qIdx}`, [activeLevel]);

  const handleAnswerChange = useCallback((qIdx: number, val: string) => {
    setAnswers(prev => ({ ...prev, [getAnswerKey(qIdx)]: val }));
  }, [getAnswerKey]);

  const isCurrentSubmitted = Boolean(submittedByLevel[activeLevel]);

  const handleSubmit = useCallback(() => {
    setSubmittedByLevel(prev => ({ ...prev, [activeLevel]: true }));
  }, [activeLevel]);

  const formattedReadingTime = (() => {
    const m = Math.floor(readingSeconds / 60);
    const s = readingSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  })();

  const isWarm = themeMode === 'warm';
  const surfaceBg = isWarm ? '#fbf7ee' : '#ffffff';
  const textBg = isWarm ? '#2c2518' : '#0d1c2e';

  const styles: Record<string, SxProps<Theme>> = {
    container: {
      maxWidth: 920,
      mx: 'auto',
      p: { xs: 2, md: 4 },
      bgcolor: surfaceBg,
      color: textBg,
      borderRadius: 3,
      boxShadow: '0 8px 24px rgba(20, 33, 117, 0.06)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    },
    topBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 1.5,
      pb: 2,
      borderBottom: '1px solid',
      borderColor: isWarm ? 'rgba(44, 37, 24, 0.15)' : 'rgba(20, 33, 117, 0.1)'
    }
  };

  return (
    <Box sx={styles.container}>
      {/* Top Session Header & Toolbar */}
      <ReadingStudioTopBar
        onBack={onBack}
        activeLevel={activeLevel}
        isWarm={isWarm}
        formattedReadingTime={formattedReadingTime}
        isReadingTimerActive={isReadingTimerActive}
        currentArticle={currentArticle}
        themeMode={themeMode}
        onLevelSelect={handleLevelSelect}
        onToggleTimer={() => setIsReadingTimerActive(prev => !prev)}
        onFontSizeDecrease={() => setFontSizeOffset(prev => Math.max(-2, prev - 1))}
        onFontSizeIncrease={() => setFontSizeOffset(prev => Math.min(4, prev + 1))}
        onThemeModeChange={setThemeMode}
      />

      {/* Article Body with Paragraph Numbers and Interactive Glossary */}
      <ReadingArticleReader
        currentArticle={currentArticle}
        fontSizeOffset={fontSizeOffset}
        isWarm={isWarm}
        selectedGlossary={selectedGlossary}
        popoverAnchor={popoverAnchor}
        onOpenGlossary={handleOpenGlossary}
        onCloseGlossary={handleCloseGlossary}
        onSpeakWord={handleSpeakWord}
      />

      <Divider sx={{ my: 4 }} />

      {/* Comprehension and Analysis Questions */}
      <ReadingComprehensionSection
        activeLevel={activeLevel}
        questions={currentArticle.comprehensionQuestions}
        articleId={currentArticle.id}
        answers={answers}
        isCurrentSubmitted={isCurrentSubmitted}
        getAnswerKey={getAnswerKey}
        onAnswerChange={handleAnswerChange}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default ReadingStudioScreen;
