import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplayIcon from '@mui/icons-material/Replay';
import type { EnglishLevel } from '@/types';

interface QuizCompletionCardProps {
  activeLevel: EnglishLevel;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onLevelSelect: (lvl: EnglishLevel) => void;
}

export const QuizCompletionCard: React.FC<QuizCompletionCardProps> = ({
  activeLevel,
  score,
  totalQuestions,
  onRestart,
  onLevelSelect
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          maxWidth: 520,
          mx: 'auto',
          borderRadius: 3,
          border: '1px solid rgba(20,33,117,0.1)',
          background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)'
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: '#006b5f',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
            boxShadow: '0 8px 20px rgba(0,107,95,0.25)'
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 36 }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
          {activeLevel} Quiz Completed!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          You answered {score} out of {totalQuestions} questions correctly ({percentage}% accuracy).
        </Typography>

        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<ReplayIcon />}
            onClick={onRestart}
            sx={{ borderRadius: 2, fontWeight: 700 }}
          >
            Retry {activeLevel}
          </Button>
          {activeLevel !== 'C1' && (
            <Button
              variant="contained"
              onClick={() => onLevelSelect(activeLevel === 'B1' ? 'B2' : 'C1')}
              sx={{ borderRadius: 2, fontWeight: 700 }}
            >
              Try {activeLevel === 'B1' ? 'B2' : 'C1'}
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};
