import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import type { ExerciseData } from '../../types';

interface Props {
  data: ExerciseData;
}

export const ReadingExercise: React.FC<Props> = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="body2">
        Please read the following text carefully. Try to infer the meaning from context before looking at the vocabulary list.
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, bgcolor: 'grey.100', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {data.text}
        </Typography>
      </Paper>

      {data.vocabulary && data.vocabulary.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom color="primary">Key Vocabulary</Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {data.vocabulary.map((vocab) => (
              <ListItem key={`vocab-${vocab}`} disablePadding sx={{ mb: 1 }}>
                <ListItemText primary={vocab} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};
