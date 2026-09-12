/**
 * Component: QuizQuestionCard
 * Description: Container for active recall assessment demonstrating
 * integration with ActiveRecallOption for advanced CEFR C1/C2 grammar & collocations.
 */
import React, { useState, useCallback } from 'react';
import { Box, Paper, Typography, Chip, Collapse, Button, Alert } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { ActiveRecallOption } from './ActiveRecallOption';

export interface QuizOptionItem {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface C1QuestionData {
  id: string;
  level: 'C1' | 'C2';
  category: string;
  prompt: string;
  contextSentence: string;
  ruleExplanation: string;
  options: QuizOptionItem[];
}

// Sample CEFR C1 Negative Inversion question
const SAMPLE_C1_QUESTION: C1QuestionData = {
  id: 'c1-inversion-01',
  level: 'C1',
  category: 'Negative Inversion & Register',
  prompt: 'Choose the grammatically accurate inverted structure to complete the academic statement:',
  contextSentence: 'Rarely ______ such a direct correlation between linguistic immersion and neuroplastic adaptation.',
  ruleExplanation:
    'In formal English, when negative or restrictive adverbs like "rarely", "seldom", or "scarcely" begin a clause, subject-auxiliary inversion is mandatory ("Rarely have researchers witnessed...").',
  options: [
    { id: 'opt-a', text: 'researchers have witnessed', isCorrect: false },
    { id: 'opt-b', text: 'have researchers witnessed', isCorrect: true },
    { id: 'opt-c', text: 'did researchers witnessed', isCorrect: false },
    { id: 'opt-d', text: 'researchers witnessed', isCorrect: false },
  ],
};

const styles: Record<string, SxProps<Theme>> = {
  container: {
    p: { xs: 2.5, md: 3.5 },
    borderRadius: 3,
    bgcolor: 'background.paper',
    boxShadow: '0 8px 32px rgba(20, 33, 117, 0.08)',
    border: '1px solid rgba(20, 33, 117, 0.08)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.75,
    my: 3,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pt: 1,
  },
};

export interface QuizQuestionCardProps {
  question?: C1QuestionData;
  onAnswerResolved?: (isCorrect: boolean, questionId: string) => void;
}

export const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  question = SAMPLE_C1_QUESTION,
  onAnswerResolved,
}) => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleOptionSelect = useCallback(
    (isCorrect: boolean) => {
      if (hasAnswered) return;

      setHasAnswered(true);
      setWasCorrect(isCorrect);
      setShowExplanation(true);

      onAnswerResolved?.(isCorrect, question.id);
    },
    [hasAnswered, onAnswerResolved, question.id]
  );

  const handleReset = useCallback(() => {
    setHasAnswered(false);
    setWasCorrect(null);
    setShowExplanation(false);
  }, []);

  return (
    <Paper sx={styles.container} elevation={0}>
      {/* Header with CEFR badge and Category */}
      <Box sx={styles.header}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            label={question.level}
            size="small"
            color="primary"
            sx={{ fontWeight: 800, borderRadius: 1.5 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
            {question.category}
          </Typography>
        </Box>
        {hasAnswered && (
          <Button
            size="small"
            startIcon={<ReplayRoundedIcon />}
            onClick={handleReset}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Retry
          </Button>
        )}
      </Box>

      {/* Question Prompt */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {question.prompt}
      </Typography>
      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700, lineHeight: 1.5 }}>
        {question.contextSentence}
      </Typography>

      {/* Options using ActiveRecallOption */}
      <Box sx={styles.optionsGrid}>
        {question.options.map((opt) => (
          <ActiveRecallOption
            key={opt.id}
            id={opt.id}
            text={opt.text}
            isCorrect={opt.isCorrect}
            disabled={hasAnswered}
            onSelect={handleOptionSelect}
          />
        ))}
      </Box>

      {/* Pedagogical Rule Collapse */}
      <Collapse in={showExplanation}>
        <Alert
          severity={wasCorrect ? 'success' : 'info'}
          icon={<LightbulbOutlinedIcon fontSize="inherit" />}
          sx={{ borderRadius: 2, mb: 2 }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            {wasCorrect ? 'Excellent Mastery!' : 'CEFR Grammar Insight'}
          </Typography>
          <Typography variant="body2">{question.ruleExplanation}</Typography>
        </Alert>
      </Collapse>

      {/* Footer */}
      <Box sx={styles.footer}>
        <Typography variant="caption" color="text.secondary">
          {hasAnswered
            ? wasCorrect
              ? 'Answer recorded: Correct'
              : 'Answer recorded: Review the grammar rule'
            : 'Select the best option to test recall'}
        </Typography>
      </Box>
    </Paper>
  );
};

export default QuizQuestionCard;
