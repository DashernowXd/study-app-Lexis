import React from 'react';
import { Box, Typography, Paper, Grid, Button, Chip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { AppView } from '@/components/layout/MainLayout';

interface StudiosGridProps {
  onNavigate: (view: AppView) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    mb: 8
  },
  header: {
    maxWidth: 720,
    mb: 4
  },
  studioCard: {
    p: 3,
    borderRadius: 3,
    bgcolor: '#ffffff',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 4px 16px rgba(20,33,117,0.04)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(20,33,117,0.08)'
    }
  }
};

export const StudiosGrid: React.FC<StudiosGridProps> = ({ onNavigate }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Chip
          label="Interactive Learning Environments"
          size="small"
          sx={{ bgcolor: '#e6eeff', color: '#142175', fontWeight: 700, mb: 1.5 }}
        />
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#142175', mb: 1.5 }}>
          Explore the Four Purpose-Built Studios
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Deliberate daily practice through focused web applications designed for deep linguistic mastery.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {/* Studio 1: Reading Studio */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={0} sx={styles.studioCard}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, color: '#142175' }}>
                <MenuBookIcon />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Reading Studio</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Longform articles across B1, B2, and C1 registers with font scaling, warm reader theme, and clickable phonetics.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => onNavigate('reading')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Studio
            </Button>
          </Paper>
        </Grid>

        {/* Studio 2: Quiz Studio */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={0} sx={styles.studioCard}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, color: '#006b5f' }}>
                <QuizIcon />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Quiz Studio</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Syntactic and grammatical drills with live question timers, audio pronunciation, and instant pedagogical rules.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => onNavigate('quiz')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Start Quiz
            </Button>
          </Paper>
        </Grid>

        {/* Studio 3: Writing Workshop */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={0} sx={styles.studioCard}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, color: '#890027' }}>
                <EditNoteIcon />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Writing Workshop</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Discursive and argumentative essay studio with live word count tracking, angle requirements, and real-time stylistic upgrades.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => onNavigate('writing')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Workshop
            </Button>
          </Paper>
        </Grid>

        {/* Studio 4: Speaking Studio */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={0} sx={styles.studioCard}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, color: '#006b5f' }}>
                <RecordVoiceOverIcon />
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Speaking Studio</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Native microphone recording, audio playback, waveform diagnostics, and realistic boardroom scenario roleplay.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => onNavigate('speaking')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Start Speaking
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudiosGrid;
