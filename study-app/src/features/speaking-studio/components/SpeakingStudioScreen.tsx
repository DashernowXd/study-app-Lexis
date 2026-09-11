import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
  Paper,
  Grid
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import type { EnglishLevel } from '../../study-plan/types';
import type { SpeakingScenario } from '../types';
import { SPEAKING_SCENARIOS } from '../data/speakingScenarios';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import { SpeakingScenarioBriefing } from './SpeakingScenarioBriefing';
import { SpeakingRecorderConsole } from './SpeakingRecorderConsole';

export interface SpeakingStudioScreenProps {
  onBack?: () => void;
  level?: EnglishLevel;
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    maxWidth: 1200,
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    pb: 6,
  },
  headerBanner: {
    p: { xs: 2.5, md: 3.5 },
    borderRadius: '24px',
    background: 'linear-gradient(135deg, #142175 0%, #1e3299 60%, #006b5f 100%)',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: { xs: 'flex-start', sm: 'center' },
    flexWrap: 'wrap',
    gap: 2,
    boxShadow: '0 12px 32px rgba(20,33,117,0.18)',
  },
  cardPanel: {
    borderRadius: '16px',
    border: '1px solid rgba(20,33,117,0.08)',
    boxShadow: '0 4px 16px rgba(20,33,117,0.04)',
    overflow: 'hidden',
    bgcolor: '#ffffff',
  },
  recorderBox: {
    p: 3,
    borderRadius: '16px',
    bgcolor: '#f5f7fd',
    border: '1px solid rgba(20,33,117,0.12)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  pulseIndicator: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    bgcolor: '#ba1a1a',
    display: 'inline-block',
    animation: 'pulse 1.4s infinite ease-in-out',
    '@keyframes pulse': {
      '0%': { transform: 'scale(0.8)', opacity: 0.5 },
      '50%': { transform: 'scale(1.3)', opacity: 1 },
      '100%': { transform: 'scale(0.8)', opacity: 0.5 },
    }
  },
  keyPhraseItem: {
    p: 1.5,
    borderRadius: '12px',
    bgcolor: 'rgba(20,33,117,0.03)',
    border: '1px solid rgba(20,33,117,0.06)',
    mb: 1.5,
  }
};

// Module-scope pure utility function
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const SpeakingStudioScreen: React.FC<SpeakingStudioScreenProps> = ({
 onBack, level = 'C1' }) => {
  const [activeLevel, setActiveLevel] = useState<EnglishLevel>(level);
  const availableScenarios = useMemo(() => {
    return SPEAKING_SCENARIOS.filter(s => s.level === activeLevel);
  }, [activeLevel]);

  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(() => {
    return availableScenarios[0]?.id || SPEAKING_SCENARIOS[0].id;
  });

  const activeScenario = useMemo<SpeakingScenario>(() => {
    const found = SPEAKING_SCENARIOS.find(s => s.id === selectedScenarioId);
    return found || availableScenarios[0] || SPEAKING_SCENARIOS[0];
  }, [selectedScenarioId, availableScenarios]);

  // Audio recorder state
  const {
    recorderState,
    elapsedSeconds,
    audioUrl,
    errorMessage,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    resetRecording,
    isSupported,
  } = useAudioRecorder();

  // Self-checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [completedNotification, setCompletedNotification] = useState(false);

  // Switch scenarios
  const handleSelectScenario = (scenario: SpeakingScenario) => {
    resetRecording();
    setSelectedScenarioId(scenario.id);
    setCheckedItems({});
    setCompletedNotification(false);
  };

  // Text to Speech for Shadowing model
  const handlePlayShadowingAudio = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSynthesizing) {
      window.speechSynthesis.cancel();
      setIsSynthesizing(false);
      return;
    }

    const textToRead = activeScenario.shadowingModelText || activeScenario.prompt;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US';
    utterance.rate = 0.95; // slightly deliberate for clarity

    utterance.onstart = () => setIsSynthesizing(true);
    utterance.onend = () => setIsSynthesizing(false);
    utterance.onerror = () => setIsSynthesizing(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [activeScenario, isSynthesizing]);

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <Box sx={styles.container}>
      {/* Header Banner */}
      <Paper elevation={0} sx={styles.headerBanner}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <RecordVoiceOverIcon sx={{ fontSize: 32, color: '#6df5e1' }} />
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Speaking & Pronunciation Studio
            </Typography>
            <Chip
              label={`${activeLevel} Practice`}
              size="small"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontWeight: 700 }}
            />
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 680 }}>
            Master spontaneous speech delivery, execute high-impact shadowing drills, and record executive responses with immediate feedback.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Level Switchers */}
          {(['B1', 'B2', 'C1'] as EnglishLevel[]).map(lvl => (
            <Button
              key={lvl}
              variant={activeLevel === lvl ? 'contained' : 'outlined'}
              size="small"
              onClick={() => {
                setActiveLevel(lvl);
                const nextScenarios = SPEAKING_SCENARIOS.filter(s => s.level === lvl);
                if (nextScenarios.length > 0) {
                  handleSelectScenario(nextScenarios[0]);
                }
              }}
              sx={{
                borderRadius: 2,
                fontWeight: 700,
                color: activeLevel === lvl ? '#142175' : '#ffffff',
                bgcolor: activeLevel === lvl ? '#ffffff' : 'transparent',
                borderColor: 'rgba(255,255,255,0.4)',
                '&:hover': {
                  bgcolor: activeLevel === lvl ? '#e8ebff' : 'rgba(255,255,255,0.1)',
                  borderColor: '#ffffff',
                }
              }}
            >
              {lvl}
            </Button>
          ))}

          {onBack && (
            <IconButton
              onClick={onBack}
              aria-label="Volver al panel de estudio"
              sx={{ color: '#ffffff', ml: 1 }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Paper>

      {/* Main Grid: Left Scenarios & Key Phrases | Right Studio Recorder */}
      <Grid container spacing={3}>
        {/* Left Column: Scenario details & Shadowing Model */}
        <Grid size={{ xs: 12, md: 7 }}>
          <SpeakingScenarioBriefing
            availableScenarios={availableScenarios}
            selectedScenarioId={selectedScenarioId}
            activeScenario={activeScenario}
            activeLevel={activeLevel}
            isSynthesizing={isSynthesizing}
            styles={styles}
            onSelectScenario={handleSelectScenario}
            onPlayShadowingAudio={handlePlayShadowingAudio}
          />
        </Grid>

        {/* Right Column: Audio Recorder & Evaluation */}
        <Grid size={{ xs: 12, md: 5 }}>
          <SpeakingRecorderConsole
            activeScenario={activeScenario}
            recorderState={recorderState}
            elapsedSeconds={elapsedSeconds}
            audioUrl={audioUrl}
            errorMessage={errorMessage}
            isSupported={isSupported}
            checkedItems={checkedItems}
            completedNotification={completedNotification}
            styles={styles}
            formatTime={formatTime}
            onStartRecording={startRecording}
            onPauseRecording={pauseRecording}
            onResumeRecording={resumeRecording}
            onStopRecording={stopRecording}
            onResetRecording={resetRecording}
            onToggleCheck={toggleCheck}
            onCompleteDrill={() => setCompletedNotification(true)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpeakingStudioScreen;
