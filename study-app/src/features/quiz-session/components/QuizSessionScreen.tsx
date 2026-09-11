import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { EnglishLevel } from '../../study-plan/types';
import { QUIZ_QUESTIONS_BY_LEVEL } from '../data/quizData';
import { QuizTopBar } from './QuizTopBar';
import { QuizCompletionCard } from './QuizCompletionCard';
import { QuizQuestionView } from './QuizQuestionView';

export interface QuizSessionScreenProps {
  onBack?: () => void;
  level?: EnglishLevel;
  onLevelChange?: (level: EnglishLevel) => void;
}

interface QuestionAnswerState {
  selectedOptionKey: string | null;
  isCorrect: boolean;
}

interface QuizState {
  activeLevel: EnglishLevel;
  currentIdx: number;
  showHint: boolean;
  quizTimerSeconds: number;
  isTimerRunning: boolean;
  isQuizCompleted: boolean;
}

type QuizAction =
  | { type: 'SET_LEVEL'; level: EnglishLevel }
  | { type: 'NEXT_QUESTION'; maxIndex: number }
  | { type: 'PREV_QUESTION' }
  | { type: 'TOGGLE_HINT' }
  | { type: 'TOGGLE_TIMER' }
  | { type: 'TICK_TIMER' }
  | { type: 'RESTART_QUIZ' };

const createInitialQuizState = (initialLevel: EnglishLevel): QuizState => ({
  activeLevel: initialLevel,
  currentIdx: 0,
  showHint: false,
  quizTimerSeconds: 45,
  isTimerRunning: true,
  isQuizCompleted: false
});

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_LEVEL':
      return {
        ...state,
        activeLevel: action.level,
        currentIdx: 0,
        showHint: false,
        quizTimerSeconds: 45,
        isQuizCompleted: false
      };
    case 'NEXT_QUESTION':
      if (state.currentIdx < action.maxIndex) {
        return {
          ...state,
          currentIdx: state.currentIdx + 1,
          showHint: false,
          quizTimerSeconds: 45
        };
      }
      return {
        ...state,
        isQuizCompleted: true,
        isTimerRunning: false
      };
    case 'PREV_QUESTION':
      if (state.currentIdx > 0) {
        return {
          ...state,
          currentIdx: state.currentIdx - 1,
          showHint: false,
          quizTimerSeconds: 45
        };
      }
      return state;
    case 'TOGGLE_HINT':
      return { ...state, showHint: !state.showHint };
    case 'TOGGLE_TIMER':
      return { ...state, isTimerRunning: !state.isTimerRunning };
    case 'TICK_TIMER':
      if (!state.isTimerRunning || state.isQuizCompleted || state.quizTimerSeconds <= 0) {
        return state;
      }
      return { ...state, quizTimerSeconds: state.quizTimerSeconds - 1 };
    case 'RESTART_QUIZ':
      return {
        ...state,
        currentIdx: 0,
        showHint: false,
        quizTimerSeconds: 45,
        isQuizCompleted: false
      };
    default:
      return state;
  }
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    maxWidth: 840,
    mx: 'auto',
    p: { xs: 2, md: 4 },
    bgcolor: '#ffffff',
    borderRadius: 3,
    boxShadow: '0 8px 24px rgba(20, 33, 117, 0.06)'
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 1.5,
    pb: 2,
    borderBottom: '1px solid rgba(20, 33, 117, 0.08)'
  }
};

export const QuizSessionScreen: React.FC<QuizSessionScreenProps> = ({
  onBack,
  level = 'C1',
  onLevelChange
}) => {
  const [state, dispatch] = useReducer(quizReducer, level, createInitialQuizState);
  const { activeLevel, currentIdx, showHint, quizTimerSeconds, isTimerRunning, isQuizCompleted } = state;

  // Adjust state during render when level prop changes (React recommended pattern)
  const [prevLevel, setPrevLevel] = useState<EnglishLevel>(level);
  if (level !== prevLevel) {
    setPrevLevel(level);
    dispatch({ type: 'SET_LEVEL', level });
  }

  // Answer state stored per level and question index
  const [levelAnswers, setLevelAnswers] = useState<Record<string, Record<number, QuestionAnswerState>>>({
    B1: {},
    B2: {},
    C1: {}
  });

  const currentQuestions = QUIZ_QUESTIONS_BY_LEVEL[activeLevel] || QUIZ_QUESTIONS_BY_LEVEL['C1'];
  const currentQ = currentQuestions[currentIdx] || currentQuestions[0];
  const currentAnswerState = levelAnswers[activeLevel]?.[currentIdx];
  const hasAnswered = Boolean(currentAnswerState?.selectedOptionKey);

  // Live timer tick
  useEffect(() => {
    if (!isTimerRunning || isQuizCompleted) return;

    const interval = setInterval(() => {
      dispatch({ type: 'TICK_TIMER' });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, isQuizCompleted]);

  const handleLevelSelect = useCallback((lvl: EnglishLevel) => {
    dispatch({ type: 'SET_LEVEL', level: lvl });
    onLevelChange?.(lvl);
  }, [onLevelChange]);

  const handleSelectOption = useCallback((key: string, isCorrect: boolean) => {
    if (hasAnswered) return;

    setLevelAnswers(prev => ({
      ...prev,
      [activeLevel]: {
        ...prev[activeLevel],
        [currentIdx]: { selectedOptionKey: key, isCorrect }
      }
    }));
  }, [hasAnswered, activeLevel, currentIdx]);

  const handleNext = useCallback(() => {
    dispatch({ type: 'NEXT_QUESTION', maxIndex: currentQuestions.length - 1 });
  }, [currentQuestions.length]);

  const handlePrev = useCallback(() => {
    dispatch({ type: 'PREV_QUESTION' });
  }, []);

  const handleRestart = useCallback(() => {
    setLevelAnswers(prev => ({
      ...prev,
      [activeLevel]: {}
    }));
    dispatch({ type: 'RESTART_QUIZ' });
  }, [activeLevel]);

  const handleSpeakQuestion = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Compute stats for the current level
  const activeLevelAnswersMap = levelAnswers[activeLevel] || {};
  const answeredCount = Object.keys(activeLevelAnswersMap).length;
  const score = Object.values(activeLevelAnswersMap).filter(a => a.isCorrect).length;
  const progressPercent = Math.round(((currentIdx + (hasAnswered ? 1 : 0)) / currentQuestions.length) * 100);

  const formattedTimer = (() => {
    const m = Math.floor(quizTimerSeconds / 60);
    const s = quizTimerSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  })();

  return (
    <Box sx={styles.container}>
      {/* Top Session Header */}
      <QuizTopBar
        onBack={onBack || (() => {})}
        activeLevel={activeLevel}
        formattedTimer={formattedTimer}
        isTimerRunning={isTimerRunning}
        score={score}
        answeredCount={answeredCount}
        onLevelSelect={handleLevelSelect}
        onToggleTimer={() => dispatch({ type: 'TOGGLE_TIMER' })}
      />

      {/* Completion Summary Card or Question View */}
      {isQuizCompleted ? (
        <QuizCompletionCard
          activeLevel={activeLevel}
          score={score}
          totalQuestions={currentQuestions.length}
          onRestart={handleRestart}
          onLevelSelect={handleLevelSelect}
        />
      ) : (
        <QuizQuestionView
          currentQ={currentQ}
          currentIdx={currentIdx}
          totalQuestions={currentQuestions.length}
          progressPercent={progressPercent}
          showHint={showHint}
          selectedOptionKey={currentAnswerState?.selectedOptionKey ?? undefined}
          hasAnswered={hasAnswered}
          onToggleHint={() => dispatch({ type: 'TOGGLE_HINT' })}
          onSpeakQuestion={handleSpeakQuestion}
          onSelectOption={handleSelectOption}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </Box>
  );
};

export default QuizSessionScreen;
