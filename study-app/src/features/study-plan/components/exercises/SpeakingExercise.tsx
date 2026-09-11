import React, { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Alert,
  LinearProgress,
  Tooltip,
  IconButton
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import DownloadIcon from '@mui/icons-material/Download';
import type { ExerciseData } from '../../types';
import { useAudioRecorder } from '../../../speaking-studio/hooks/useAudioRecorder';

interface Props {
  data: ExerciseData;
  onComplete: () => void;
}

// Module-scope pure utility
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const SpeakingExercise: React.FC<Props> = ({ data, onComplete }) => {
  const [isSynthesizing, setIsSynthesizing] = useState(false);
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
    isSupported
  } = useAudioRecorder();

  const promptText = data.prompt || 'Record your response based on today’s speaking drill.';

  const handleListenPrompt = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSynthesizing) {
      window.speechSynthesis.cancel();
      setIsSynthesizing(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(promptText);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSynthesizing(true);
    utterance.onend = () => setIsSynthesizing(false);
    utterance.onerror = () => setIsSynthesizing(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [promptText, isSynthesizing]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Exercise Prompt */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          bgcolor: 'rgba(20,33,117,0.03)',
          borderRadius: 3,
          border: '1px solid rgba(20,33,117,0.1)'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>
            Speaking & Communication Drill
          </Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<VolumeUpIcon fontSize="small" />}
            onClick={handleListenPrompt}
            color={isSynthesizing ? 'error' : 'primary'}
            sx={{ borderRadius: 2, fontWeight: 700 }}
          >
            {isSynthesizing ? 'Stop Audio' : 'Listen Prompt'}
          </Button>
        </Box>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', color: '#0d1c2e', lineHeight: 1.6 }}>
          {promptText}
        </Typography>
      </Paper>

      {/* Voice Recorder Console */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          bgcolor: '#f8f9ff',
          borderRadius: 3,
          border: '1px solid rgba(0,107,95,0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GraphicEqIcon sx={{ color: 'secondary.main' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175' }}>
            Voice Response Console
          </Typography>
        </Box>

        {errorMessage && (
          <Alert severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        )}

        {!isSupported && (
          <Alert severity="warning" sx={{ width: '100%' }}>
            Microphone recording is not available in your browser. You can still practice aloud and mark as done.
          </Alert>
        )}

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: recorderState === 'recording' ? 'error.main' : 'primary.main',
              letterSpacing: 2
            }}
          >
            {formatTime(elapsedSeconds)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {recorderState === 'recording' ? 'Recording live audio...' : 'Target: 1–2 minutes'}
          </Typography>
        </Box>

        {recorderState === 'recording' && (
          <LinearProgress
            color="error"
            sx={{ width: '100%', height: 6, borderRadius: 3 }}
          />
        )}

        {/* Recorder Buttons */}
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          {recorderState === 'idle' && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<MicIcon />}
              onClick={startRecording}
              disabled={!isSupported}
              sx={{ borderRadius: 2.5, fontWeight: 700, px: 3 }}
            >
              Record My Answer
            </Button>
          )}

          {recorderState === 'recording' && (
            <>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<PauseIcon />}
                onClick={pauseRecording}
                sx={{ borderRadius: 2.5, fontWeight: 700 }}
              >
                Pause
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<StopIcon />}
                onClick={stopRecording}
                sx={{ borderRadius: 2.5, fontWeight: 700, px: 3 }}
              >
                Stop
              </Button>
            </>
          )}

          {recorderState === 'paused' && (
            <>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayArrowIcon />}
                onClick={resumeRecording}
                sx={{ borderRadius: 2.5, fontWeight: 700 }}
              >
                Resume
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<StopIcon />}
                onClick={stopRecording}
                sx={{ borderRadius: 2.5, fontWeight: 700 }}
              >
                Finish
              </Button>
            </>
          )}

          {recorderState === 'stopped' && (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ReplayIcon />}
              onClick={resetRecording}
              sx={{ borderRadius: 2.5, fontWeight: 700 }}
            >
              Record Again
            </Button>
          )}
        </Box>

        {/* Playback Box */}
        {audioUrl && (
          <Paper
            elevation={0}
            sx={{
              width: '100%',
              p: 2,
              bgcolor: '#ffffff',
              borderRadius: 2.5,
              border: '1px solid rgba(0,107,95,0.2)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'secondary.main' }}>
                <CheckCircleIcon fontSize="small" />
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  Recording Captured ({formatTime(elapsedSeconds)})
                </Typography>
              </Box>
              <Tooltip title="Download Audio File">
                <IconButton
                  component="a"
                  href={audioUrl}
                  download="speaking_drill.webm"
                  size="small"
                  aria-label="Descargar archivo de audio del ejercicio"
                >
                  <DownloadIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box component="audio" controls src={audioUrl} sx={{ width: '100%' }} />
          </Paper>
        )}
      </Paper>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<CheckCircleIcon />}
        onClick={onComplete}
        sx={{ borderRadius: 3, fontWeight: 800, alignSelf: 'flex-start', px: 4, py: 1.2 }}
      >
        I have finished speaking
      </Button>
    </Box>
  );
};
