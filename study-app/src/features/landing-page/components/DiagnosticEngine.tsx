import React, { useState, useCallback } from 'react';
import { Box, Typography, Paper, Chip, Button, Stack, Grid, IconButton } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { AppView } from '@/components/layout/MainLayout';
import type { TransformationItem, TransformationMode } from '../types';

interface DiagnosticEngineProps {
  onNavigate: (view: AppView) => void;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'hedging',
    label: 'Tactical Hedging',
    category: 'Diplomatic Nuance',
    originalText: 'In regard to the forthcoming cross-border restructuring,',
    originalPhrase: 'we think this causes problems across autonomous regional entities.',
    elevatedText: 'In regard to the forthcoming cross-border restructuring,',
    elevatedPhrase: 'we anticipate this may precipitate institutional friction across autonomous regional entities.',
    grammaticalRule: 'Substitutes informal conviction ("we think") with epistemic hedging ("we anticipate may") and high-register causative phrasing ("precipitate friction").',
    registerRationale: 'Prevents adversarial polarization in multilateral negotiations while maintaining strategic caution.',
    cefrLevel: 'C1 / C2 Register'
  },
  {
    id: 'inversion',
    label: 'Negative Inversion',
    category: 'Rhetorical Emphasis',
    originalText: 'The audit committee must not overlook the secondary compliance externalities.',
    originalPhrase: 'The committee should not overlook the issues.',
    elevatedText: 'Under no circumstances',
    elevatedPhrase: 'should the audit committee overlook the secondary compliance externalities identified in Section 4.2.',
    grammaticalRule: 'Fronting a restrictive or negative adverbial phrase requires immediate subject-auxiliary inversion: [Negative Adverbial] + [Auxiliary] + [Subject] + [Main Verb].',
    registerRationale: 'Establishes absolute regulatory boundary conditions and formal authority in executive governance.',
    cefrLevel: 'C2 Mastery'
  },
  {
    id: 'cleft',
    label: 'Wh-Cleft Focus',
    category: 'Boardroom Presentation',
    originalText: 'The unexpected regulatory audit delayed the multi-region deployment.',
    originalPhrase: 'The audit caused the delay.',
    elevatedText: 'What delayed the multi-region deployment',
    elevatedPhrase: 'was the unanticipated regulatory audit across autonomous regional branches.',
    grammaticalRule: 'Pseudo-cleft structure: [What-clause] + [Copular Be] + [Focal Element]. Draws audience attention strictly to the operative constraint.',
    registerRationale: 'Essential in boardroom presentations to distinguish root cause bottlenecks from tangential symptoms.',
    cefrLevel: 'C1 Advanced'
  },
  {
    id: 'subjunctive',
    label: 'Mandative Subjunctive',
    category: 'Statutory Directives',
    originalText: 'It is essential that the lead engineer submits the vulnerability report.',
    originalPhrase: 'It is essential that he submits the report.',
    elevatedText: 'It is imperative that',
    elevatedPhrase: 'the lead security architect submit the forensic vulnerability disclosure without procedural delay.',
    grammaticalRule: 'Following adjectives of urgent necessity (imperative, essential, mandatory that), standard formal English requires the uninflected bare infinitive base form.',
    registerRationale: 'Standard in legal directives, executive decrees, and formal governance declarations.',
    cefrLevel: 'C1 / C2 Register'
  }
];

const styles: Record<string, SxProps<Theme>> = {
  container: {
    mb: 8,
    p: { xs: 3, md: 5 },
    borderRadius: 4,
    bgcolor: '#ffffff',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 8px 32px rgba(20,33,117,0.05)'
  },
  headerRow: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: { xs: 'flex-start', md: 'flex-end' },
    gap: 2,
    mb: 4
  },
  windowMockup: {
    borderRadius: 3,
    overflow: 'hidden',
    border: '1px solid rgba(20,33,117,0.1)',
    bgcolor: '#f8f9ff',
    boxShadow: '0 12px 28px rgba(20,33,117,0.06)'
  },
  windowTitleBar: {
    bgcolor: '#e6eeff',
    px: 2.5,
    py: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(20,33,117,0.08)'
  }
};

export const DiagnosticEngine: React.FC<DiagnosticEngineProps> = ({ onNavigate }) => {
  const [activeMode, setActiveMode] = useState<TransformationMode>('hedging');

  const currentItem = TRANSFORMATIONS.find(t => t.id === activeMode) || TRANSFORMATIONS[0];

  const handleSpeak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return (
    <Box sx={styles.container}>
      {/* Section Header */}
      <Box sx={styles.headerRow}>
        <Box sx={{ maxWidth: 650 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#006b5f', mb: 1 }}>
            <PsychologyIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Syntactic & Lexical Calibration Engine
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#142175', lineHeight: 1.2 }}>
            Instant Stylistic Upgrades & Syntactic Calibration
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 440, lineHeight: 1.6 }}>
          Observe how informal, colloquial phrasing transforms into precise executive discourse calibrated for Cambridge CAE/CPE rubrics and boardroom negotiations.
        </Typography>
      </Box>

      {/* Mode Selector Buttons */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
        {TRANSFORMATIONS.map(item => {
          const isSelected = item.id === activeMode;
          return (
            <Button
              key={item.id}
              variant={isSelected ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setActiveMode(item.id)}
              startIcon={<AutoFixHighIcon fontSize="small" />}
              sx={{
                borderRadius: 2,
                fontWeight: 700,
                fontSize: 13,
                px: 2,
                py: 0.8,
                bgcolor: isSelected ? '#142175' : '#ffffff',
                color: isSelected ? '#ffffff' : '#142175',
                borderColor: isSelected ? '#142175' : 'rgba(20,33,117,0.15)',
                '&:hover': {
                  bgcolor: isSelected ? '#0b1348' : '#eff4ff',
                  borderColor: '#142175'
                }
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>

      {/* Desktop App Studio Mockup */}
      <Box sx={styles.windowMockup}>
        {/* Mockup Title Bar */}
        <Box sx={styles.windowTitleBar}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ba1a1a' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e6a100' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#006b5f' }} />
            <Typography variant="caption" sx={{ ml: 1, fontWeight: 700, color: '#142175' }}>
              Lexis Diagnostic Studio • {currentItem.category}
            </Typography>
          </Box>
          <Chip
            label={currentItem.cefrLevel}
            size="small"
            sx={{ bgcolor: '#ffffff', color: '#142175', fontWeight: 800, fontSize: 11 }}
          />
        </Box>

        {/* Mockup Body Grid */}
        <Grid container>
          {/* Left: Text Elevation Editor */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ p: { xs: 2.5, md: 4 }, bgcolor: '#ffffff' }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: '#767682', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 1.5 }}>
                Interactive Sentence Elevation
              </Typography>

              {/* Original Draft Box */}
              <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#fff5f5', border: '1px solid #ffd6d6', mb: 2 }}>
                <Typography variant="caption" sx={{ color: '#ba1a1a', fontWeight: 700, display: 'block', mb: 0.5 }}>
                  Informal / Low-Register Expression:
                </Typography>
                <Typography variant="body1" sx={{ color: '#5f0018', textDecoration: 'line-through' }}>
                  "{currentItem.originalText} {currentItem.originalPhrase}"
                </Typography>
              </Box>

              {/* Elevated Box */}
              <Box sx={{ p: 2.5, borderRadius: 2.5, bgcolor: '#f4fbf9', border: '1.5px solid #006b5f', mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#006b5f' }}>
                    <CheckCircleIcon fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      Elevated Executive Register:
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => handleSpeak(`${currentItem.elevatedText} ${currentItem.elevatedPhrase}`)}
                    sx={{ color: '#006b5f' }}
                    title="Pronounce sentence"
                    aria-label="Escuchar pronunciación del registro elevado"
                  >
                    <VolumeUpIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#003824', lineHeight: 1.6 }}>
                  "{currentItem.elevatedText} <Box component="span" sx={{ bgcolor: 'rgba(0,107,95,0.12)', px: 0.5, borderRadius: 1, color: '#006b5f' }}>{currentItem.elevatedPhrase}</Box>"
                </Typography>
              </Box>
            </Box>

            {/* Linguistic Rationale Pill */}
            <Paper elevation={0} sx={{ p: 2, borderRadius: 2, bgcolor: '#f0f4fc', border: '1px solid rgba(20,33,117,0.08)' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#142175', mb: 0.5 }}>
                Linguistic Rationale
              </Typography>
              <Typography variant="body2" sx={{ color: '#454651', mb: 1, lineHeight: 1.5 }}>
                {currentItem.grammaticalRule}
              </Typography>
              <Typography variant="caption" sx={{ color: '#006b5f', fontWeight: 700, display: 'block' }}>
                Context: {currentItem.registerRationale}
              </Typography>
            </Paper>
          </Grid>

          {/* Right: Structural Diagnostics Panel */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ p: { xs: 2.5, md: 4 }, bgcolor: '#f8f9ff', borderLeft: { md: '1px solid rgba(20,33,117,0.08)' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 3 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 800, color: '#142175', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', mb: 2 }}>
                Syntactic Structure
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#ffffff', boxShadow: '0 2px 8px rgba(20,33,117,0.04)' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                    Target Domain
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#142175' }}>
                    {currentItem.category}
                  </Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#ffffff', boxShadow: '0 2px 8px rgba(20,33,117,0.04)' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                    CEFR Benchmark
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#006b5f' }}>
                    {currentItem.cefrLevel}
                  </Typography>
                </Box>

                <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#ffffff', boxShadow: '0 2px 8px rgba(20,33,117,0.04)' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.5 }}>
                    Methodology Phase
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#142175' }}>
                    Activate & Reinforce
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack spacing={1.5}>
              <Button
                variant="contained"
                size="small"
                onClick={() => onNavigate('quiz')}
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{ borderRadius: 2, fontWeight: 700, py: 1 }}
              >
                Drill in Quiz Studio
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => onNavigate('writing')}
                sx={{ borderRadius: 2, fontWeight: 700, py: 1 }}
              >
                Apply in Essay Workshop
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DiagnosticEngine;
