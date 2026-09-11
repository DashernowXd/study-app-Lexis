import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
  Collapse,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface Angle {
  id: string;
  label: string;
  checked: boolean;
}

interface EssayPromptCardProps {
  promptOpen: boolean;
  title: string;
  question: string;
  angles: Angle[];
  onTogglePrompt: () => void;
  onToggleAngle: (id: string) => void;
}

export const EssayPromptCard: React.FC<EssayPromptCardProps> = ({
  promptOpen,
  title,
  question,
  angles,
  onTogglePrompt,
  onToggleAngle
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        mb: 2.5,
        borderRadius: 2.5,
        bgcolor: '#f8faff',
        border: '1px solid #e0e6f5'
      }}
    >
      <Box
        onClick={onTogglePrompt}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label="Prompt Briefing"
            size="small"
            sx={{ bgcolor: '#142175', color: '#ffffff', fontWeight: 700, fontSize: 11 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175' }}>
            {title}
          </Typography>
        </Box>
        <IconButton size="small" aria-label={promptOpen ? "Contraer instrucciones del ensayo" : "Expandir instrucciones del ensayo"}>
          {promptOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={promptOpen}>
        <Typography variant="body2" sx={{ mt: 2, mb: 1.5, color: '#454651', lineHeight: 1.6 }}>
          {question}
        </Typography>

        <Typography variant="caption" sx={{ fontWeight: 700, color: '#142175', display: 'block', mb: 1 }}>
          Mandatory Angles Checklist (C.A.R.E. Structured Output):
        </Typography>

        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {angles.map(angle => (
            <FormControlLabel
              key={angle.id}
              control={
                <Checkbox
                  size="small"
                  checked={angle.checked}
                  onChange={() => onToggleAngle(angle.id)}
                  sx={{ color: '#006b5f', '&.Mui-checked': { color: '#006b5f' } }}
                />
              }
              label={<Typography variant="caption" sx={{ fontWeight: 600 }}>{angle.label}</Typography>}
              sx={{
                bgcolor: '#ffffff',
                px: 1.5,
                py: 0.2,
                borderRadius: 2,
                border: '1px solid #e2e8f0',
                m: 0
              }}
            />
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
};
