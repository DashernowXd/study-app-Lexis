import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import type { ExerciseData } from '../../types';

interface Props {
  data: ExerciseData;
  onComplete: () => void;
}

export const GenericExercise: React.FC<Props> = ({ data, onComplete }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="body2">
        Please follow the prompt below to complete this activity.
      </Typography>
      
      {data.text && (
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>Read the following text:</Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
            {data.text}
          </Typography>
        </Box>
      )}

      <Box sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {data.prompt || 'No specific prompt provided.'}
        </Typography>
      </Box>

      <Button variant="contained" color="primary" onClick={() => {
        // Assume user completed it manually for now
        onComplete();
      }} sx={{ alignSelf: 'flex-start' }}>
        Mark as Done
      </Button>
    </Box>
  );
};
