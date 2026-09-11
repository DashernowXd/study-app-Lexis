import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  Button
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import type { SpeakingScenario } from '../types';
import type { EnglishLevel } from '../../study-plan/types';

interface SpeakingScenarioBriefingProps {
  availableScenarios: SpeakingScenario[];
  selectedScenarioId: string;
  activeScenario: SpeakingScenario;
  activeLevel: EnglishLevel;
  isSynthesizing: boolean;
  styles: Record<string, SxProps<Theme>>;
  onSelectScenario: (sc: SpeakingScenario) => void;
  onPlayShadowingAudio: () => void;
}

export const SpeakingScenarioBriefing: React.FC<SpeakingScenarioBriefingProps> = ({
  availableScenarios,
  selectedScenarioId,
  activeScenario,
  activeLevel,
  isSynthesizing,
  styles,
  onSelectScenario,
  onPlayShadowingAudio
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Scenario Selector Pills */}
      <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 0.5 }}>
        {availableScenarios.map(sc => (
          <Chip
            key={sc.id}
            label={sc.title}
            onClick={() => onSelectScenario(sc)}
            color={selectedScenarioId === sc.id ? 'primary' : 'default'}
            variant={selectedScenarioId === sc.id ? 'filled' : 'outlined'}
            sx={{
              fontWeight: 700,
              borderRadius: 2.5,
              cursor: 'pointer',
              bgcolor: selectedScenarioId === sc.id ? '#142175' : 'background.paper',
              color: selectedScenarioId === sc.id ? '#ffffff' : 'text.primary',
            }}
          />
        ))}
      </Box>

      {/* Selected Scenario Briefing Card */}
      <Paper elevation={0} sx={{ ...styles.cardPanel, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Chip
              label={activeScenario.category}
              size="small"
              color="secondary"
              sx={{ fontWeight: 700, mb: 1, fontSize: 11 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175' }}>
              {activeScenario.title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#006b5f', fontWeight: 700 }}>
            <TimerOutlinedIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              Target: {activeScenario.targetDurationSeconds}s
            </Typography>
          </Box>
        </Box>

        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#454651', mb: 0.5 }}>
          Context & Objective:
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {activeScenario.context}
        </Typography>

        <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(0,107,95,0.05)', borderRadius: 2.5, border: '1px solid rgba(0,107,95,0.15)', mb: 2.5 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#006b5f', mb: 0.5 }}>
            Simulation Prompt:
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', color: '#0d1c2e', fontWeight: 500 }}>
            {activeScenario.prompt}
          </Typography>
        </Paper>

        {/* Shadowing & Native Model Section */}
        {activeScenario.shadowingModelText && (
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PsychologyIcon fontSize="small" sx={{ color: '#142175' }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#142175' }}>
                  Native Shadowing Model (Imitate Pronunciation & Rhythm)
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                startIcon={<VolumeUpIcon fontSize="small" />}
                onClick={onPlayShadowingAudio}
                color={isSynthesizing ? 'error' : 'primary'}
                sx={{ borderRadius: 2, fontWeight: 700 }}
              >
                {isSynthesizing ? 'Stop Listening' : 'Listen Model'}
              </Button>
            </Box>

            <Paper elevation={0} sx={{ p: 2, bgcolor: '#f8f9ff', borderRadius: 2.5, border: '1px solid rgba(20,33,117,0.08)' }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#142175', lineHeight: 1.6 }}>
                "{activeScenario.shadowingModelText}"
              </Typography>
            </Paper>
          </Box>
        )}
      </Paper>

      {/* Key Phrases to Include */}
      <Paper elevation={0} sx={{ ...styles.cardPanel, p: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175', mb: 1.5 }}>
          High-Impact Key Phrases ({activeLevel})
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Try incorporating these professional formulations into your spoken monologue:
        </Typography>

        {activeScenario.recommendedKeyPhrases.map((item) => (
          <Box key={`phrase-${item.phrase}`} sx={styles.keyPhraseItem}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#142175' }}>
              "{item.phrase}"
            </Typography>
            <Typography variant="caption" sx={{ color: '#454651' }}>
              {item.note}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
