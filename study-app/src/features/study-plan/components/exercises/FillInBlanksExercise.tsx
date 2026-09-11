import React, { useState } from 'react';
import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import type { ExerciseData } from '../../types';

interface Props {
  data: ExerciseData;
  onComplete: () => void;
}

export const FillInBlanksExercise: React.FC<Props> = ({ data, onComplete }) => {
  const questions = data.questions || [];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="body2" gutterBottom>
        Complete the sentences with the correct verb form (Present Perfect or Past Simple).
      </Typography>

      {questions.map((q, index) => {
        const parts = q.sentence.split('__________');
        const isCorrect = submitted && answers[q.id]?.trim().toLowerCase() === q.answer.toLowerCase();
        const showHint = submitted && !isCorrect;

        return (
          <Box key={q.id} sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
              Question {index + 1}
            </Typography>
            <Stack direction="row" sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body1">{parts[0]}</Typography>
              <TextField
                variant="outlined"
                size="small"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                error={showHint}
                sx={{ minWidth: 150 }}
              />
              <Typography variant="body1">{parts[1]}</Typography>
            </Stack>
            {showHint && (
              <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
                Hint: the answer is "{q.answer}"
              </Typography>
            )}
          </Box>
        );
      })}

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Check Answers
        </Button>
        {submitted && (
          <Button variant="outlined" color="primary" onClick={() => onComplete()}>
            Finish & Close
          </Button>
        )}
      </Stack>
    </Box>
  );
};
