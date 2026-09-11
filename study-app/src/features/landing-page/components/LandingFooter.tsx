import React from 'react';
import { Box, Typography, Divider, Stack, Button } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { LexisLogo } from '@/components/common/LexisLogo';
import type { AppView } from '@/components/layout/MainLayout';

interface LandingFooterProps {
  onNavigate: (view: AppView) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  footer: {
    pt: 6,
    pb: 6,
    mt: 6,
    borderTop: '1px solid rgba(20,33,117,0.08)',
    bgcolor: '#f0f4fc',
    borderRadius: { xs: 2.5, md: 4 },
    px: { xs: 3, md: 6 }
  }
};

export const LandingFooter: React.FC<LandingFooterProps> = ({ onNavigate }) => {
  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 3, mb: 4 }}>
        <Box>
          <Box sx={{ mb: 1.5 }}>
            <LexisLogo size={32} />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 440 }}>
            Structured linguistic curriculum engineered for ambitious software engineers and technical leaders mastering B1, B2, and C1 professional registers.
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button
            size="small"
            onClick={() => onNavigate('dashboard')}
            sx={{ fontWeight: 700, color: '#142175' }}
          >
            Daily Dashboard
          </Button>
          <Button
            size="small"
            onClick={() => onNavigate('reading')}
            sx={{ fontWeight: 700, color: '#142175' }}
          >
            Reading Studio
          </Button>
          <Button
            size="small"
            onClick={() => onNavigate('quiz')}
            sx={{ fontWeight: 700, color: '#142175' }}
          >
            Quiz Studio
          </Button>
          <Button
            size="small"
            onClick={() => onNavigate('writing')}
            sx={{ fontWeight: 700, color: '#142175' }}
          >
            Writing Workshop
          </Button>
          <Button
            size="small"
            onClick={() => onNavigate('speaking')}
            sx={{ fontWeight: 700, color: '#142175' }}
          >
            Speaking Studio
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 3, borderColor: 'rgba(20,33,117,0.06)' }} />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Lexis English Mastery. Aligned with CEFR (Common European Framework of Reference for Languages).
        </Typography>
        <Typography variant="caption" sx={{ color: '#006b5f', fontWeight: 700 }}>
          C.A.R.E. Architecture: Capture • Activate • Reinforce • Evaluate
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingFooter;
