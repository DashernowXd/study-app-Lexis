import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Paper, Chip } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { motion } from 'framer-motion';
import { playQuizSound } from '../../../quiz-session/utils/quizAudio';
import type { ExerciseData } from '../../types';

interface Props {
  data: ExerciseData;
  onComplete: () => void;
}

const MotionPaper = motion.create(Paper);

export const ErrorDetectionExercise: React.FC<Props> = ({ data, onComplete }) => {
  const items = data.errorItems || [];
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);

  const handleInputChange = (id: string, val: string) => {
    setUserInputs(prev => ({ ...prev, [id]: val }));
  };

  const handleCheck = () => {
    setChecked(true);
    setAttemptKey(k => k + 1);

    const hasAnyError = items.some(item => {
      const userVal = (userInputs[item.id] || '').trim().toLowerCase();
      const expected = item.correctAnswer.trim().toLowerCase();
      return !(userVal === expected || (item.errorWord && userInputs[item.id]?.toLowerCase().includes(expected)));
    });

    playQuizSound(hasAnyError ? 'error' : 'success');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
          Spot & Correct the Error (Encuentra y corrige el error)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Each sentence below contains a common grammatical or lexical mistake at B2 level. Identify the incorrect part and write the correct word or phrase.
        </Typography>
      </Box>

      {items.map((item, index) => {
        const userVal = (userInputs[item.id] || '').trim().toLowerCase();
        const expected = item.correctAnswer.trim().toLowerCase();
        const isMatch = checked && (userVal === expected || (item.errorWord && userInputs[item.id]?.toLowerCase().includes(expected)));

        const hasError = checked && !isMatch;

        return (
          <MotionPaper
            key={`error-item-${item.id}-${attemptKey}`}
            elevation={0}
            initial={{ x: 0, scale: 1 }}
            animate={
              checked
                ? hasError
                  ? { x: [0, -11, 11, -8, 8, -4, 4, 0] }
                  : { scale: [1, 1.02, 1] }
                : { x: 0, scale: 1 }
            }
            transition={{
              duration: hasError ? 0.42 : 0.28,
              ease: 'easeInOut'
            }}
            sx={{
              p: 2.5,
              borderRadius: '12px',
              border: '1px solid',
              borderColor: checked ? (isMatch ? 'success.light' : 'warning.light') : 'divider',
              bgcolor: checked ? (isMatch ? 'rgba(46, 125, 50, 0.04)' : 'rgba(237, 108, 2, 0.04)') : 'background.paper',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Chip
                label={`Sentence ${index + 1}`}
                size="small"
                color="secondary"
                variant="outlined"
                sx={{ fontWeight: 600, fontSize: '0.75rem' }}
              />
              {checked && (
                <Chip
                  icon={isMatch ? <CheckCircleOutlinedIcon /> : <ErrorOutlinedIcon />}
                  label={isMatch ? "Correct!" : "Review correction"}
                  color={isMatch ? "success" : "warning"}
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              )}
            </Box>

            <Typography variant="body1" sx={{ fontWeight: 500, my: 1.5, color: 'text.primary' }}>
              "{item.sentence}"
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mt: 1 }}>
              <TextField
                size="small"
                placeholder="Type the correction..."
                value={userInputs[item.id] || ''}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                sx={{ minWidth: 260, flexGrow: 1 }}
              />
            </Box>

            {checked && (
              <Alert severity={isMatch ? "success" : "info"} sx={{ mt: 2, borderRadius: '8px' }}>
                <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                  Correct form: <span style={{ textDecoration: 'underline' }}>{item.correctAnswer}</span>
                  {item.errorWord && ` (Replaces: "${item.errorWord}")`}
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                  💡 {item.explanation}
                </Typography>
              </Alert>
            )}
          </MotionPaper>
        );
      })}

      <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
        <Button variant="contained" color="secondary" onClick={handleCheck}>
          Check Corrections
        </Button>
        {checked && (
          <Button variant="contained" color="primary" onClick={onComplete}>
            Mark as Done & Finish
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ErrorDetectionExercise;
