import React from 'react';
import { Box, Typography, Button, Stack, Chip, Paper, Grid } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import type { AppView } from '@/components/layout/MainLayout';
import type { EnglishLevel } from '@/features/study-plan/types';

interface LandingHeroProps {
  onNavigate: (view: AppView) => void;
  level?: EnglishLevel;
  onLevelChange?: (level: EnglishLevel) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  heroContainer: {
    position: 'relative',
    overflow: 'hidden',
    pt: { xs: 4, md: 8 },
    pb: { xs: 6, md: 10 },
    background: 'linear-gradient(180deg, #f0f4fc 0%, #ffffff 100%)',
    borderRadius: { xs: 3, md: 5 },
    px: { xs: 2.5, sm: 4, md: 6 },
    mb: 6,
    boxShadow: '0 4px 24px rgba(20,33,117,0.04)'
  },
  glowOrb: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -80,
    right: -60,
    width: 380,
    height: 380,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(109,245,225,0.25) 0%, rgba(20,33,117,0.05) 50%, transparent 70%)',
    filter: 'blur(40px)',
  },
  badgeGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 1.5,
    mb: 3
  },
  headline: {
    fontWeight: 800,
    color: '#142175',
    letterSpacing: '-0.02em',
    lineHeight: { xs: 1.2, md: 1.15 },
    mb: 2.5,
    fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' }
  },
  leadCopy: {
    color: '#454651',
    fontSize: { xs: '1rem', md: '1.2rem' },
    lineHeight: 1.6,
    maxWidth: 760,
    mb: 4
  },
  metricCard: {
    p: 3,
    borderRadius: 3,
    bgcolor: '#ffffff',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 8px 24px rgba(20,33,117,0.06)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

export const LandingHero: React.FC<LandingHeroProps> = ({
  onNavigate,
  level = 'C1',
  onLevelChange
}) => {
  return (
    <Box sx={styles.heroContainer}>
      <Box sx={styles.glowOrb} />

      {/* Trust Badges */}
      <Box sx={styles.badgeGroup}>
        <Chip
          icon={<VerifiedIcon sx={{ color: '#006b5f !important', fontSize: 18 }} />}
          label="Executive English & CEFR C1/C2 Mastery"
          size="small"
          sx={{
            fontWeight: 700,
            fontSize: '12px',
            bgcolor: 'rgba(0,107,95,0.08)',
            color: '#006b5f',
            border: '1px solid rgba(0,107,95,0.2)',
            py: 0.5
          }}
        />
        <Chip
          icon={<SchoolIcon sx={{ color: '#142175 !important', fontSize: 18 }} />}
          label="Cambridge CAE, CPE & IELTS 8.5+ Framework"
          size="small"
          sx={{
            fontWeight: 700,
            fontSize: '12px',
            bgcolor: '#e6eeff',
            color: '#142175',
            py: 0.5
          }}
        />
      </Box>

      {/* Hero Grid */}
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Typography component="h1" sx={styles.headline}>
            Master the Register of{' '}
            <Box component="span" sx={{ color: '#006b5f', fontStyle: 'italic' }}>
              Global Leadership
            </Box>{' '}
            & C1/C2 Distinction.
          </Typography>

          <Typography sx={styles.leadCopy}>
            Sophisticated linguistic agility for boardroom negotiations, high-stakes debate, and tier-1 certifications. Built on the structured C.A.R.E. curriculum with real-time lexical calibration and zero cognitive fluff.
          </Typography>

          {/* Action CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => onNavigate('dashboard')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#142175',
                color: '#ffffff',
                px: 3.5,
                py: 1.5,
                borderRadius: 2.5,
                fontWeight: 800,
                fontSize: '15px',
                boxShadow: '0 8px 20px rgba(20,33,117,0.22)',
                '&:hover': { bgcolor: '#0b1348', boxShadow: '0 12px 24px rgba(20,33,117,0.3)' }
              }}
            >
              Launch Daily Dashboard
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => onNavigate('reading')}
              startIcon={<MenuBookIcon />}
              sx={{
                borderColor: 'rgba(20,33,117,0.2)',
                color: '#142175',
                px: 3,
                py: 1.5,
                borderRadius: 2.5,
                fontWeight: 700,
                fontSize: '15px',
                bgcolor: '#ffffff',
                '&:hover': { bgcolor: '#f0f4fc', borderColor: '#142175' }
              }}
            >
              Open Reading Studio
            </Button>

            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => onNavigate('quiz')}
              startIcon={<QuizIcon />}
              sx={{
                borderColor: 'rgba(0,107,95,0.25)',
                color: '#006b5f',
                px: 3,
                py: 1.5,
                borderRadius: 2.5,
                fontWeight: 700,
                fontSize: '15px',
                bgcolor: '#ffffff',
                '&:hover': { bgcolor: 'rgba(0,107,95,0.06)' }
              }}
            >
              Start Quiz Studio
            </Button>
          </Stack>

          {/* Active Level Track Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#454651', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Active Track:
            </Typography>
            {(['B1', 'B2', 'C1'] as EnglishLevel[]).map(lvl => (
              <Chip
                key={lvl}
                label={lvl === 'B1' ? 'B1 Intermediate' : lvl === 'B2' ? 'B2 Upper-Intermediate' : 'C1 Advanced Mastery'}
                size="small"
                onClick={() => onLevelChange?.(lvl)}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '12px',
                  bgcolor: level === lvl ? '#142175' : '#ffffff',
                  color: level === lvl ? '#ffffff' : '#142175',
                  border: level === lvl ? '1px solid #142175' : '1px solid rgba(20,33,117,0.15)',
                  '&:hover': { bgcolor: level === lvl ? '#142175' : '#e6eeff' }
                }}
              />
            ))}
          </Box>
        </Grid>

        {/* Diagnostic Snapshot Card */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Paper elevation={0} sx={styles.metricCard}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Chip
                  label="Linguistic Calibration"
                  size="small"
                  sx={{ bgcolor: '#e6eeff', color: '#142175', fontWeight: 700, fontSize: 11 }}
                />
                <Chip
                  label={`${level} Verified`}
                  size="small"
                  sx={{ bgcolor: '#6df5e1', color: '#006f64', fontWeight: 700, fontSize: 11 }}
                />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
                C.A.R.E. 4-Phase System
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                Every study module transitions systematically through 4 cognitive phases:
              </Typography>

              <Stack spacing={1.2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#142175' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#0d1c2e' }}>
                    <strong>Capture:</strong> Authentic high-register reading & lexical acquisition.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#006b5f' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#0d1c2e' }}>
                    <strong>Activate:</strong> Precision grammar drills & structural inversion.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4b57aa' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#0d1c2e' }}>
                    <strong>Reinforce:</strong> Acoustic speech recording & shadowing.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ba1a1a' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#0d1c2e' }}>
                    <strong>Evaluate:</strong> Discursive essay writing & rubric feedback.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => onNavigate('dashboard')}
              sx={{ borderRadius: 2, fontWeight: 700, py: 1 }}
            >
              Start Today's Tasks
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingHero;
