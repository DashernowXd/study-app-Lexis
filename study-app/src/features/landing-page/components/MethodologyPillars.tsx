import React from 'react';
import { Box, Typography, Paper, Grid, Button, Stack, Chip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TerminalIcon from '@mui/icons-material/Terminal';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { AppView } from '@/components/layout/MainLayout';

interface MethodologyPillarsProps {
  onNavigate: (view: AppView) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    mb: 8,
    p: { xs: 3, md: 5 },
    borderRadius: 4,
    bgcolor: '#f8f9ff',
    border: '1px solid rgba(20,33,117,0.06)'
  },
  header: {
    maxWidth: 680,
    mb: 5
  },
  pillarCard: {
    p: 3.5,
    borderRadius: 3,
    bgcolor: '#ffffff',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 4px 16px rgba(20,33,117,0.03)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(20,33,117,0.07)'
    }
  }
};

export const MethodologyPillars: React.FC<MethodologyPillarsProps> = ({ onNavigate }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Chip
          label="The C.A.R.E. Architecture"
          size="small"
          sx={{ bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700, mb: 1.5 }}
        />
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#142175', mb: 1.5 }}>
          The Three Pillars of Native-Level Articulation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A scientific curriculum eliminating language plateaus through cognitive linguistic immersion, contextual reading, and deliberate structural practice.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Pillar 1 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={styles.pillarCard}>
            <Box>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: '#e6eeff',
                  color: '#142175',
                  fontWeight: 800,
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5
                }}
              >
                01
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                Deep Analytical Reading
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                Longform articles across geopolitics, systems architecture, and economics. Dissect implicit nuance, collocations, and register shifts with clickable definitions and audio phonetics.
              </Typography>

              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#f4f6fc', mb: 3 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#142175', display: 'block', mb: 0.5 }}>
                  Targeted Text Scope:
                </Typography>
                <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center', color: '#006b5f' }}>
                  <MenuBookIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#454651' }}>
                    Agile Tech, Cloud Scaling & Algorithmic Trade
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Button
              size="small"
              variant="text"
              onClick={() => onNavigate('reading')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ fontWeight: 700, color: '#006b5f', p: 0, justifyContent: 'flex-start' }}
            >
              Explore Reading Studio
            </Button>
          </Paper>
        </Grid>

        {/* Pillar 2 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={styles.pillarCard}>
            <Box>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: '#6df5e1',
                  color: '#006f64',
                  fontWeight: 800,
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5
                }}
              >
                02
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                High-Syntax Grammar & Drills
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                Internalize the syntactic frameworks that project natural authority: negative inversion, third/mixed counterfactual conditionals, cleft sentences, and the mandative subjunctive.
              </Typography>

              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#f4fbf9', mb: 3 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#006b5f', display: 'block', mb: 0.5 }}>
                  Grammatical Scope:
                </Typography>
                <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center', color: '#006b5f' }}>
                  <TerminalIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#454651' }}>
                    "Rarely had we...", "Had the team flagged..."
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Button
              size="small"
              variant="text"
              onClick={() => onNavigate('quiz')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ fontWeight: 700, color: '#006b5f', p: 0, justifyContent: 'flex-start' }}
            >
              Inspect Grammar Drills
            </Button>
          </Paper>
        </Grid>

        {/* Pillar 3 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} sx={styles.pillarCard}>
            <Box>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: '#ffdadb',
                  color: '#92002a',
                  fontWeight: 800,
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5
                }}
              >
                03
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                Extended Rhetoric & Speech Pacing
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                Simulate executive verbal presence and Cambridge CPE speaking tests: acoustic prosody, phonological pacing, emphatic stress markers, and unscripted technical debate.
              </Typography>

              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#fdf4f4', mb: 3 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#ba1a1a', display: 'block', mb: 0.5 }}>
                  Speaking Caliber:
                </Typography>
                <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center', color: '#ba1a1a' }}>
                  <RecordVoiceOverIcon sx={{ fontSize: 16 }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: '#454651' }}>
                    Acoustic intonation & shadowing drills
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Button
              size="small"
              variant="text"
              onClick={() => onNavigate('speaking')}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              sx={{ fontWeight: 700, color: '#006b5f', p: 0, justifyContent: 'flex-start' }}
            >
              Open Speaking Studio
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MethodologyPillars;
