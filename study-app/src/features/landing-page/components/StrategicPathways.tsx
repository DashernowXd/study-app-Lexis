import React from 'react';
import { Box, Typography, Paper, Grid, Button, Stack, Chip } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { AppView } from '@/components/layout/MainLayout';

interface StrategicPathwaysProps {
  onNavigate: (view: AppView) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    mb: 8
  },
  header: {
    textAlign: 'center',
    maxWidth: 720,
    mx: 'auto',
    mb: 5
  },
  trackCard: {
    p: { xs: 3, md: 4 },
    borderRadius: 3,
    bgcolor: '#ffffff',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 8px 24px rgba(20,33,117,0.04)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 32px rgba(20,33,117,0.08)'
    }
  }
};

export const StrategicPathways: React.FC<StrategicPathwaysProps> = ({ onNavigate }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Chip
          label="Bespoke Strategic Alignment"
          size="small"
          sx={{ bgcolor: 'rgba(0,107,95,0.08)', color: '#006b5f', fontWeight: 700, mb: 1.5 }}
        />
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#142175', mb: 1.5 }}>
          Two Rigorous Pathways. One Incontrovertible Standard.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Whether preparing high-stakes technical proposals or sitting the Cambridge CPE exam, Lexis structures your syntax for decisive impact.
        </Typography>
      </Box>

      <Grid container spacing={3.5}>
        {/* Pathway 1: Executive Track */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={styles.trackCard}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    bgcolor: '#142175',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(20,33,117,0.2)'
                  }}
                >
                  <BusinessCenterIcon />
                </Box>
                <Chip
                  label="Leadership & Global Teams"
                  size="small"
                  sx={{ bgcolor: '#e6eeff', color: '#142175', fontWeight: 700, fontSize: 11 }}
                />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                Executive Global Register Track
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                Engineered for senior software engineers, engineering managers, and technical leaders who require authoritative register, diplomatic hedging, and crystalline communication.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Rhetorical Diplomacy & Tactical Hedging:</strong> Disagree constructively in architecture reviews and cross-functional meetings.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Executive Synthesis:</strong> Formulate concise technical post-mortems and multi-stakeholder project status briefings.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>High-Stakes Technical Debate:</strong> Extemporaneous technical defense during RFC discussions and sprint planning.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Idiomatic Precision Without Cliché:</strong> Replace low-register jargon with timeless, persuasive professional discourse.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={() => onNavigate('speaking')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 2.5,
                fontWeight: 700,
                py: 1.2,
                bgcolor: '#142175',
                '&:hover': { bgcolor: '#0b1348' }
              }}
            >
              Enter Speaking Studio
            </Button>
          </Paper>
        </Grid>

        {/* Pathway 2: Official Certification Track */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={0} sx={styles.trackCard}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    bgcolor: '#006b5f',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,107,95,0.2)'
                  }}
                >
                  <SchoolIcon />
                </Box>
                <Chip
                  label="Cambridge CAE / CPE / IELTS 8.5+"
                  size="small"
                  sx={{ bgcolor: '#6df5e1', color: '#006f64', fontWeight: 700, fontSize: 11 }}
                />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                C1/C2 Official Certification Track
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                Structured specifically to fulfill Cambridge C1 Advanced (CAE), C2 Proficiency (CPE), and IELTS Academic scoring descriptors with diagnostic precision.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Discursive Essay Calibration:</strong> Master the 4 Cambridge criteria: Content, Communicative Achievement, Organization, and Language.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Inversion & Cleft Mastery:</strong> Systematic grammar drills covering negative fronting, mixed conditionals, and subjunctive syntax.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Analytical Reading Deconstruction:</strong> In-depth longform comprehension dissecting academic articles and technical whitepapers.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 20, mt: 0.2 }} />
                  <Typography variant="body2" sx={{ color: '#0d1c2e' }}>
                    <strong>Timed Oral Simulations:</strong> Structured speech tasks and long-turn responses evaluated under examiner clock constraints.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => onNavigate('quiz')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 2.5,
                fontWeight: 700,
                py: 1.2
              }}
            >
              Practice Certification Quizzes
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StrategicPathways;
