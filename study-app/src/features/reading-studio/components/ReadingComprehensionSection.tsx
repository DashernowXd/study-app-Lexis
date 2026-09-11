import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Paper,
  TextField,
  Button,
  Alert
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { EnglishLevel } from '@/types';

interface ReadingComprehensionSectionProps {
  activeLevel: EnglishLevel;
  questions: string[];
  articleId: string;
  answers: Record<string, string>;
  isCurrentSubmitted: boolean;
  getAnswerKey: (index: number) => string;
  onAnswerChange: (index: number, val: string) => void;
  onSubmit: () => void;
}

export const ReadingComprehensionSection: React.FC<ReadingComprehensionSectionProps> = ({
  activeLevel,
  questions,
  articleId,
  answers,
  isCurrentSubmitted,
  getAnswerKey,
  onAnswerChange,
  onSubmit
}) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175' }}>
          Comprehension & Critical Analysis ({questions.length} Exercises)
        </Typography>
        <Chip
          label={`${activeLevel} Question Set`}
          size="small"
          sx={{ bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Formulate your analytical responses using vocabulary from the text and clear structural connectors.
      </Typography>

      {isCurrentSubmitted && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
          Great job! Your analytical responses for <strong>{activeLevel}</strong> reading have been saved and validated.
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        {questions.map((q, idx) => {
          const val = answers[getAnswerKey(idx)] || '';
          return (
            <Paper
              key={`q-${articleId}-${q.slice(0, 30)}`}
              elevation={0}
              sx={{
                p: 2.5,
                border: '1px solid',
                borderColor: val.trim().length > 0 ? 'rgba(0,107,95,0.3)' : '#e0e4f0',
                borderRadius: 2.5,
                bgcolor: val.trim().length > 0 ? 'rgba(0,107,95,0.02)' : 'transparent',
                transition: 'border-color 0.2s'
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#142175', mb: 1 }}>
                {q}
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                placeholder="Write your analysis in English..."
                size="small"
                value={val}
                onChange={(e) => onAnswerChange(idx, e.target.value)}
                disabled={isCurrentSubmitted}
              />
              <Box sx={{ mt: 0.8, display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: 11 }}>
                  {val.trim() ? `${val.trim().split(/\s+/).length} words` : '0 words'}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onSubmit}
          disabled={isCurrentSubmitted}
          startIcon={isCurrentSubmitted ? <CheckCircleIcon /> : undefined}
          sx={{ px: 4, py: 1.2, fontWeight: 800, borderRadius: 2 }}
        >
          {isCurrentSubmitted ? 'Responses Saved' : `Submit ${questions.length} Responses`}
        </Button>
      </Box>
    </Box>
  );
};
