import React from 'react';
import { Box, Button, Chip, Stack } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LexisLogo } from '@/components/common/LexisLogo';
import type { AppView } from '@/components/layout/MainLayout';
import type { EnglishLevel } from '@/features/study-plan/types';

interface LandingHeaderProps {
  onNavigate: (view: AppView) => void;
  level: EnglishLevel;
  onLevelChange?: (level: EnglishLevel) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1200,
    width: '100%',
    bgcolor: 'rgba(248, 249, 255, 0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(20, 33, 117, 0.08)',
    boxShadow: '0 2px 12px rgba(20, 33, 117, 0.04)'
  },
  innerContainer: {
    maxWidth: 1280,
    mx: 'auto',
    px: { xs: 2.5, sm: 4, md: 6 },
    height: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: 2,
    bgcolor: '#142175',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(20, 33, 117, 0.2)'
  }
};

const scrollTo = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export const LandingHeader: React.FC<LandingHeaderProps> = ({
  onNavigate,
  level,
  onLevelChange
}) => {

  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.innerContainer}>
        {/* Brand */}
        <LexisLogo
          size={38}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Section Anchors (Desktop) */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
        >
          <Button
            size="small"
            onClick={() => scrollTo('diagnostic-engine')}
            sx={{ fontWeight: 600, color: '#454651', fontSize: 13, '&:hover': { color: '#142175', bgcolor: 'rgba(20,33,117,0.04)' } }}
          >
            Linguistic Engine
          </Button>
          <Button
            size="small"
            onClick={() => scrollTo('strategic-pathways')}
            sx={{ fontWeight: 600, color: '#454651', fontSize: 13, '&:hover': { color: '#142175', bgcolor: 'rgba(20,33,117,0.04)' } }}
          >
            Pathways
          </Button>
          <Button
            size="small"
            onClick={() => scrollTo('methodology-pillars')}
            sx={{ fontWeight: 600, color: '#454651', fontSize: 13, '&:hover': { color: '#142175', bgcolor: 'rgba(20,33,117,0.04)' } }}
          >
            Methodology
          </Button>
          <Button
            size="small"
            onClick={() => scrollTo('studios-grid')}
            sx={{ fontWeight: 600, color: '#454651', fontSize: 13, '&:hover': { color: '#142175', bgcolor: 'rgba(20,33,117,0.04)' } }}
          >
            Studios
          </Button>
        </Stack>

        {/* Actions: Level Switcher & Enter Dashboard CTA */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Track Switcher */}
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {(['B1', 'B2', 'C1'] as EnglishLevel[]).map(lvl => (
              <Chip
                key={lvl}
                label={lvl}
                size="small"
                onClick={() => onLevelChange?.(lvl)}
                sx={{
                  fontWeight: 700,
                  fontSize: 11,
                  cursor: 'pointer',
                  bgcolor: level === lvl ? '#142175' : '#eef2fc',
                  color: level === lvl ? '#ffffff' : '#142175',
                  '&:hover': {
                    bgcolor: level === lvl ? '#142175' : '#dfe0ff'
                  }
                }}
              />
            ))}
          </Stack>

          {/* Primary CTA */}
          <Button
            variant="contained"
            size="small"
            onClick={() => onNavigate('dashboard')}
            endIcon={<ArrowForwardIcon fontSize="small" />}
            sx={{
              bgcolor: '#006b5f',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '13px',
              borderRadius: 2,
              px: 2.2,
              py: 0.9,
              boxShadow: '0 4px 12px rgba(0,107,95,0.25)',
              '&:hover': { bgcolor: '#00544a', boxShadow: '0 6px 16px rgba(0,107,95,0.35)' }
            }}
          >
            Enter Dashboard
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingHeader;
