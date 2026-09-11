import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import type { EnglishLevel } from '@/types';

interface QuizTopBarProps {
  onBack: () => void;
  activeLevel: EnglishLevel;
  formattedTimer: string;
  isTimerRunning: boolean;
  score: number;
  answeredCount: number;
  onLevelSelect: (lvl: EnglishLevel) => void;
  onToggleTimer: () => void;
}

const LEVELS: EnglishLevel[] = ['B1', 'B2', 'C1'];

export const QuizTopBar: React.FC<QuizTopBarProps> = ({
  onBack,
  activeLevel,
  formattedTimer,
  isTimerRunning,
  score,
  answeredCount,
  onLevelSelect,
  onToggleTimer
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 1.5,
        pb: 2,
        borderBottom: '1px solid rgba(20, 33, 117, 0.08)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          size="small"
          sx={{ fontWeight: 700, borderRadius: 2 }}
        >
          Dashboard
        </Button>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175' }}>
          Quiz Studio
        </Typography>

        {/* Level Selector */}
        <Stack direction="row" spacing={0.8} sx={{ ml: 2 }}>
          {LEVELS.map(lvl => (
            <Chip
              key={lvl}
              label={lvl}
              size="small"
              onClick={() => onLevelSelect(lvl)}
              aria-label={`Seleccionar nivel ${lvl}`}
              sx={{
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                bgcolor: activeLevel === lvl ? '#142175' : '#eef2fc',
                color: activeLevel === lvl ? '#ffffff' : '#142175',
                '&:hover': {
                  bgcolor: activeLevel === lvl ? '#142175' : '#dfe0ff'
                }
              }}
            />
          ))}
        </Stack>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: '#006b5f',
            fontWeight: 700,
            bgcolor: 'rgba(0,107,95,0.08)',
            px: 1,
            py: 0.4,
            borderRadius: 2
          }}
        >
          <TimerOutlinedIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            {formattedTimer}
          </Typography>
          <IconButton
            size="small"
            onClick={onToggleTimer}
            aria-label={isTimerRunning ? "Pausar cronómetro del examen" : "Reanudar cronómetro del examen"}
            sx={{ p: 0.2, color: 'inherit' }}
          >
            {isTimerRunning ? <PauseIcon sx={{ fontSize: 13 }} /> : <PlayArrowIcon sx={{ fontSize: 13 }} />}
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#890027', fontWeight: 700 }}>
          <LocalFireDepartmentIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            Score {score}/{answeredCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
