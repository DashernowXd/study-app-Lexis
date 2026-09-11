import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
  TextField,
  Paper
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { EssayPrompt } from '../types';
import { EssayPromptCard } from './EssayPromptCard';
import { EssayUpgradeEvaluator } from './EssayUpgradeEvaluator';

const INITIAL_PROMPT: EssayPrompt = {
  id: 'c1-essay-1',
  title: 'Modern Corporate Work Environments',
  category: 'Part 1 • Discursive Essay',
  targetBand: 'Band 8.5 / C1 Target',
  description: 'Evaluate whether the permanent transition to hybrid work models hampers corporate mentorship. Support your reasoning with concrete institutional examples. Write between 220–260 words.',
  minWords: 220,
  maxWords: 260,
  mandatoryAngles: [
    { id: 'angle-1', label: 'Tacit mentorship erosion', checked: true },
    { id: 'angle-2', label: 'Autonomy vs. collaboration', checked: true },
    { id: 'angle-3', label: 'Policy standardization', checked: false }
  ],
  suggestedUpgrades: [
    {
      original: 'shows clearly',
      replacement: 'demonstrates unequivocally',
      rationale: 'Elevate informal transitive phrase to formal academic discourse.'
    },
    {
      original: 'a lot of people think',
      replacement: 'it is widely contended by organizational theorists',
      rationale: 'Replace vague attribution with formal passive reporting verb.'
    }
  ]
};

const INITIAL_DRAFT = `The rapid proliferation of hybrid work modalities has fundamentally restructured corporate workflows across the globe. While proponents champion unprecedented autonomy and enhanced employee well-being, this structural shift shows clearly that informal learning pipelines risk profound stagnation. 

In traditional corporate headquarters, tacit knowledge was absorbed through spontaneous interactions and informal shadowing. In remote environments, junior personnel are deprived of organic access to senior decision-makers, which inadvertently exacerbates imposter syndrome and impairs professional development.`;

const styles: Record<string, SxProps<Theme>> = {
  container: {
    maxWidth: 900,
    mx: 'auto',
    p: { xs: 2, md: 4 },
    bgcolor: '#ffffff',
    borderRadius: 3,
    boxShadow: '0 8px 24px rgba(20, 33, 117, 0.06)'
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pb: 2,
    borderBottom: '1px solid rgba(20, 33, 117, 0.08)'
  }
};

export interface EssayWritingScreenProps {
  onBack?: () => void;
}

export const EssayWritingScreen: React.FC<EssayWritingScreenProps> = ({ onBack }) => {
  const [promptOpen, setPromptOpen] = useState<boolean>(true);
  const [essayText, setEssayText] = useState<string>(INITIAL_DRAFT);
  const [angles, setAngles] = useState(INITIAL_PROMPT.mandatoryAngles);
  const [activeUpgradeIndex, setActiveUpgradeIndex] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const wordCount = useMemo(() => {
    const trimmed = essayText.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [essayText]);

  const handleToggleAngle = useCallback((id: string) => {
    setAngles(prev => prev.map(a => a.id === id ? { ...a, checked: !a.checked } : a));
  }, []);

  const handleApplyUpgrade = useCallback(() => {
    const upgrade = INITIAL_PROMPT.suggestedUpgrades[activeUpgradeIndex];
    if (upgrade && essayText.includes(upgrade.original)) {
      setEssayText(prev => prev.replace(upgrade.original, upgrade.replacement));
      if (activeUpgradeIndex < INITIAL_PROMPT.suggestedUpgrades.length - 1) {
        setActiveUpgradeIndex(prev => prev + 1);
      }
    }
  }, [activeUpgradeIndex, essayText]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const currentUpgrade = INITIAL_PROMPT.suggestedUpgrades[activeUpgradeIndex];
  const canApplyUpgrade = currentUpgrade && essayText.includes(currentUpgrade.original);

  return (
    <Box sx={styles.container}>
      {/* Top Session Header */}
      <Box sx={styles.topBar}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {onBack && (
            <IconButton
              onClick={onBack}
              size="small"
              aria-label="Volver al panel de estudio"
              sx={{ bgcolor: 'rgba(20,33,117,0.06)' }}
            >
              <CloseIcon />
            </IconButton>
          )}
          <Chip label="C1" size="small" sx={{ bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Extended Writing Workshop
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#006b5f', fontWeight: 600 }}>
            <TimerOutlinedIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>08:45</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#890027', fontWeight: 600 }}>
            <LocalFireDepartmentIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 600 }}>7 Days Streak</Typography>
          </Box>
        </Box>
      </Box>

      {/* Prompt Directive Accordion (Connect Phase) */}
      <EssayPromptCard
        promptOpen={promptOpen}
        title={INITIAL_PROMPT.title}
        question={INITIAL_PROMPT.description}
        angles={angles}
        onTogglePrompt={() => setPromptOpen(prev => !prev)}
        onToggleAngle={handleToggleAngle}
      />

      {/* Real-time Diagnostics Bar (Activate Phase) */}
      <EssayUpgradeEvaluator
        currentUpgrade={currentUpgrade}
        canApplyUpgrade={canApplyUpgrade}
        onApplyUpgrade={handleApplyUpgrade}
      />

      {/* Writing Canvas Workspace (Reinforce Phase) */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2.5,
          border: '1px solid #e0e6f5',
          overflow: 'hidden',
          mb: 3
        }}
      >
        {/* Status & Live Metrics Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1.2, bgcolor: '#f8faff', borderBottom: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#142175', textTransform: 'uppercase' }}>
              Draft
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#006b5f' }} />
              <Typography variant="caption" color="text.secondary">Autosaved</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: wordCount >= 220 && wordCount <= 260 ? '#006b5f' : '#64748b' }}>
              {wordCount} / 260 words
            </Typography>
            <Chip
              label={wordCount >= 220 ? 'Optimal Range' : 'Drafting'}
              size="small"
              sx={{
                fontSize: 11,
                height: 20,
                bgcolor: wordCount >= 220 ? '#dcfce7' : '#f1f5f9',
                color: wordCount >= 220 ? '#15803d' : '#64748b'
              }}
            />
          </Box>
        </Box>

        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={12}
            variant="standard"
            slotProps={{ input: { disableUnderline: true } }}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder="Type your C1 essay here..."
            sx={{
              '& .MuiInputBase-input': {
                fontSize: 16,
                lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif'
              }
            }}
          />
        </Box>
      </Paper>

      {/* Action Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          Target: 220–260 words • Formal academic tone
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          disabled={submitted || wordCount < 50}
          startIcon={submitted ? <CheckCircleIcon /> : undefined}
          sx={{ px: 4, py: 1.2, fontWeight: 700, borderRadius: 2 }}
        >
          {submitted ? 'Essay Submitted' : 'Submit for C1 Evaluation'}
        </Button>
      </Box>
    </Box>
  );
};

export default EssayWritingScreen;
