import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { LandingHeader } from './LandingHeader';
import { LandingHero } from './LandingHero';
import { DiagnosticEngine } from './DiagnosticEngine';
import { StrategicPathways } from './StrategicPathways';
import { MethodologyPillars } from './MethodologyPillars';
import { StudiosGrid } from './StudiosGrid';
import { LandingFooter } from './LandingFooter';
import type { LandingPageScreenProps } from '../types';

const styles: Record<string, SxProps<Theme>> = {
  pageWrapper: {
    minHeight: '100vh',
    bgcolor: '#f8f9ff',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  contentContainer: {
    maxWidth: 1280,
    mx: 'auto',
    width: '100%',
    px: { xs: 2, sm: 3, md: 4 },
    flex: 1
  }
};

/**
 * LandingPageScreen
 * 
 * Standalone executive landing page displayed as the entry screen before accessing the study dashboard.
 * Features the complete Stitch layout and design system without simulated metrics or fake profiles.
 */
export const LandingPageScreen: React.FC<LandingPageScreenProps> = ({
  onNavigate,
  level = 'C1',
  onLevelChange
}) => {
  return (
    <Box sx={styles.pageWrapper}>
      {/* 1. Standalone Stitch Header */}
      <LandingHeader
        onNavigate={onNavigate}
        level={level}
        onLevelChange={onLevelChange}
      />

      <Box component="main" sx={styles.contentContainer}>
        {/* 2. Hero & Value Proposition */}
        <LandingHero
          onNavigate={onNavigate}
          level={level}
          onLevelChange={onLevelChange}
        />

        {/* 3. Interactive Syntactic Calibration Engine */}
        <Box id="diagnostic-engine">
          <DiagnosticEngine onNavigate={onNavigate} />
        </Box>

        {/* 4. Strategic Pathways */}
        <Box id="strategic-pathways">
          <StrategicPathways onNavigate={onNavigate} />
        </Box>

        {/* 5. Three Pillars of C.A.R.E. Methodology */}
        <Box id="methodology-pillars">
          <MethodologyPillars onNavigate={onNavigate} />
        </Box>

        {/* 6. Direct Studio Launch Grid */}
        <Box id="studios-grid">
          <StudiosGrid onNavigate={onNavigate} />
        </Box>

        {/* 7. Institutional Footer */}
        <LandingFooter onNavigate={onNavigate} />
      </Box>
    </Box>
  );
};

export default LandingPageScreen;
