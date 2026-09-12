import React, { useState } from 'react';
import { Box, Typography, TextField, Stack, Button, Chip } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { motion } from 'framer-motion';
import { playQuizSound } from '../../../quiz-session/utils/quizAudio';
import type { ExerciseData } from '../../types';

interface Props {
  data: ExerciseData;
  onComplete: () => void;
}

const MotionBox = motion.create(Box);

export const FillInBlanksExercise: React.FC<Props> = ({ data, onComplete }) => {
  const questions = data.questions || [];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setAttemptKey(prev => prev + 1);

    const hasAnyError = questions.some(
      q => answers[q.id]?.trim().toLowerCase() !== q.answer.toLowerCase()
    );

    playQuizSound(hasAnyError ? 'error' : 'success');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="body2" color="text.secondary">
        Complete the sentences with the correct verb form (Present Perfect or Past Simple).
      </Typography>

      {questions.map((q, index) => {
        const parts = q.sentence.split('__________');
        const isCorrect = submitted && answers[q.id]?.trim().toLowerCase() === q.answer.toLowerCase();
        const hasError = submitted && !isCorrect;

        return (
          <MotionBox
            key={`blank-${q.id}-${attemptKey}`}
            initial={{ x: 0, scale: 1 }}
            animate={
              submitted
                ? hasError
                  ? { x: [0, -11, 11, -8, 8, -4, 4, 0] }
                  : { scale: [1, 1.025, 1] }
                : { x: 0, scale: 1 }
            }
            transition={{
              duration: hasError ? 0.42 : 0.28,
              ease: 'easeInOut'
            }}
            sx={{
              p: 2,
              borderRadius: 2.5,
              border: '1.5px solid',
              borderColor: submitted
                ? isCorrect
                  ? 'success.light'
                  : 'error.light'
                : 'divider',
              bgcolor: submitted
                ? isCorrect
                  ? 'rgba(46, 125, 50, 0.04)'
                  : 'rgba(211, 47, 47, 0.04)'
                : 'background.paper',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 700 }}>
                Sentence {index + 1}
              </Typography>
              {submitted && (
                <Chip
                  icon={isCorrect ? <CheckCircleOutlineRoundedIcon fontSize="small" /> : <ErrorOutlineRoundedIcon fontSize="small" />}
                  label={isCorrect ? 'Correct' : 'Needs Correction'}
                  color={isCorrect ? 'success' : 'error'}
                  size="small"
                  sx={{ fontWeight: 700 }}
                />
              )}
            </Box>

            <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{parts[0]}</Typography>
              <TextField
                variant="outlined"
                size="small"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                error={hasError}
                sx={{
                  minWidth: 160,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    bgcolor: 'background.paper'
                  }
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{parts[1]}</Typography>
            </Stack>

            {hasError && (
              <Typography variant="caption" color="error" sx={{ mt: 1.2, display: 'block', fontWeight: 600 }}>
                💡 Hint: the expected form is "{q.answer}"
              </Typography>
            )}
          </MotionBox>
        );
      })}

      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
        <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ fontWeight: 700, borderRadius: 2 }}>
          Check Answers
        </Button>
        {submitted && (
          <Button variant="outlined" color="primary" onClick={() => onComplete()} sx={{ fontWeight: 700, borderRadius: 2 }}>
            Finish & Close
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default FillInBlanksExercise;
