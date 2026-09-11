import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Alert,
  LinearProgress,
  Tooltip,
  Divider,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { SpeakingScenario } from '../types';

interface SpeakingRecorderConsoleProps {
  activeScenario: SpeakingScenario;
  recorderState: 'idle' | 'recording' | 'paused' | 'stopped';
  elapsedSeconds: number;
  audioUrl: string | null;
  errorMessage: string | null;
  isSupported: boolean;
  checkedItems: Record<string, boolean>;
  completedNotification: boolean;
  styles: Record<string, SxProps<Theme>>;
  formatTime: (sec: number) => string;
  onStartRecording: () => void;
  onPauseRecording: () => void;
  onResumeRecording: () => void;
  onStopRecording: () => void;
  onResetRecording: () => void;
  onToggleCheck: (item: string) => void;
  onCompleteDrill: () => void;
}

export const SpeakingRecorderConsole: React.FC<SpeakingRecorderConsoleProps> = ({
  activeScenario,
  recorderState,
  elapsedSeconds,
  audioUrl,
  errorMessage,
  isSupported,
  checkedItems,
  completedNotification,
  styles,
  formatTime,
  onStartRecording,
  onPauseRecording,
  onResumeRecording,
  onStopRecording,
  onResetRecording,
  onToggleCheck,
  onCompleteDrill
}) => {
  const progressPercent = Math.min(100, Math.round((elapsedSeconds / activeScenario.targetDurationSeconds) * 100));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Voice Recording Widget */}
      <Paper elevation={0} sx={styles.cardPanel}>
        <Box sx={{ p: 2.5, borderBottom: '1px solid rgba(20,33,117,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GraphicEqIcon sx={{ color: '#142175' }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175' }}>
              Voice Recording Console
            </Typography>
          </Box>
          {recorderState === 'recording' && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={styles.pulseIndicator} />
              <Typography variant="caption" sx={{ color: '#ba1a1a', fontWeight: 800, textTransform: 'uppercase' }}>
                Live Recording
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={styles.recorderBox}>
          {!isSupported && (
            <Alert severity="warning" sx={{ width: '100%' }}>
              Your browser does not permit direct microphone recording. Try Chrome, Edge, or Firefox.
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          )}

          {/* Big Timer */}
          <Box sx={{ my: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: recorderState === 'recording' ? '#ba1a1a' : '#142175', letterSpacing: 2 }}>
              {formatTime(elapsedSeconds)}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
              Target: {formatTime(activeScenario.targetDurationSeconds)}
            </Typography>
          </Box>

          {/* Progress bar towards target duration */}
          <Box sx={{ width: '100%', px: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'rgba(20,33,117,0.08)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: progressPercent >= 100 ? '#006b5f' : '#142175',
                  borderRadius: 4,
                }
              }}
            />
          </Box>

          {/* Recorder Control Buttons */}
          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mt: 2 }}>
            {recorderState === 'idle' && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<MicIcon />}
                onClick={onStartRecording}
                disabled={!isSupported}
                sx={{ borderRadius: 3, fontWeight: 700, px: 3, py: 1.2 }}
              >
                Start Recording
              </Button>
            )}

            {recorderState === 'recording' && (
              <>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<PauseIcon />}
                  onClick={onPauseRecording}
                  sx={{ borderRadius: 3, fontWeight: 700 }}
                >
                  Pause
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<StopIcon />}
                  onClick={onStopRecording}
                  sx={{ borderRadius: 3, fontWeight: 700, px: 3 }}
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
                  onClick={onResumeRecording}
                  sx={{ borderRadius: 3, fontWeight: 700 }}
                >
                  Resume
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<StopIcon />}
                  onClick={onStopRecording}
                  sx={{ borderRadius: 3, fontWeight: 700 }}
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
                onClick={onResetRecording}
                sx={{ borderRadius: 3, fontWeight: 700 }}
              >
                Record Again
              </Button>
            )}
          </Box>

          {/* Recorded Audio Playback */}
          {audioUrl && (
            <Paper elevation={0} sx={{ mt: 2, p: 2, width: '100%', bgcolor: '#ffffff', borderRadius: 3, border: '1px solid rgba(0,107,95,0.2)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#006b5f' }}>
                  <CheckCircleIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Audio Ready for Self-Review
                  </Typography>
                </Box>
                <Tooltip title="Download Audio File (.webm)">
                  <IconButton
                    component="a"
                    href={audioUrl}
                    download={`speaking_${activeScenario.id}.webm`}
                    size="small"
                    aria-label="Descargar archivo de grabación de audio"
                  >
                    <DownloadIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box component="audio" controls src={audioUrl} sx={{ width: '100%', mt: 0.5 }} />
            </Paper>
          )}
        </Box>
      </Paper>

      {/* Self-Assessment Rubric */}
      <Paper elevation={0} sx={{ ...styles.cardPanel, p: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175', mb: 1 }}>
          Self-Assessment Rubric
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Listen to your recording and verify the following criteria:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {activeScenario.selfChecklist.map((item) => (
            <FormControlLabel
              key={`chk-${item}`}
              control={
                <Checkbox
                  checked={!!checkedItems[item]}
                  onChange={() => onToggleCheck(item)}
                  color="secondary"
                />
              }
              label={
                <Typography variant="body2" sx={{ fontWeight: checkedItems[item] ? 700 : 400 }}>
                  {item}
                </Typography>
              }
            />
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        {completedNotification && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Great work! Your session has been marked as completed for today. Keep building your oral fluency!
          </Alert>
        )}

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          size="large"
          disabled={!audioUrl}
          onClick={onCompleteDrill}
          startIcon={<CheckCircleIcon />}
          sx={{ borderRadius: 3, fontWeight: 800, py: 1.2 }}
        >
          Complete Speaking Drill
        </Button>
      </Paper>
    </Box>
  );
};
