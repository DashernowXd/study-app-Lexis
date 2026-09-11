import React from 'react';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
  Divider,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import type { EnglishLevel } from '../../study-plan/types';
import type { ReadingArticle } from '../types';

interface ReadingStudioTopBarProps {
  onBack?: () => void;
  activeLevel: EnglishLevel;
  isWarm: boolean;
  formattedReadingTime: string;
  isReadingTimerActive: boolean;
  currentArticle: ReadingArticle;
  themeMode: 'light' | 'warm';
  onLevelSelect: (lvl: EnglishLevel) => void;
  onToggleTimer: () => void;
  onFontSizeDecrease: () => void;
  onFontSizeIncrease: () => void;
  onThemeModeChange: (mode: 'light' | 'warm') => void;
}

const LEVELS: EnglishLevel[] = ['B1', 'B2', 'C1'];

export const ReadingStudioTopBar: React.FC<ReadingStudioTopBarProps> = ({
  onBack,
  activeLevel,
  isWarm,
  formattedReadingTime,
  isReadingTimerActive,
  currentArticle,
  themeMode,
  onLevelSelect,
  onToggleTimer,
  onFontSizeDecrease,
  onFontSizeIncrease,
  onThemeModeChange
}) => {
  return (
    <>
      {/* Top Session Header */}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
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
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175' }}>
            Reading Studio
          </Typography>

          {/* Reactive Level Selector */}
          <Stack direction="row" spacing={0.8} sx={{ ml: { sm: 1 } }}>
            {LEVELS.map(lvl => {
              const isSelected = activeLevel === lvl;
              return (
                <Chip
                  key={lvl}
                  label={lvl}
                  onClick={() => onLevelSelect(lvl)}
                  size="small"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '12px',
                    bgcolor: isSelected ? '#142175' : isWarm ? '#e8decb' : '#f0f4fc',
                    color: isSelected ? '#ffffff' : '#142175',
                    border: isSelected ? '1px solid #142175' : '1px solid transparent',
                    '&:hover': {
                      bgcolor: isSelected ? '#142175' : isWarm ? '#dfd2bc' : '#dfe0ff'
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Box>

        {/* Live Reactive Session Timers */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#006b5f',
              fontWeight: 700,
              bgcolor: 'rgba(0,107,95,0.08)',
              px: 1.2,
              py: 0.5,
              borderRadius: 2
            }}
          >
            <TimerOutlinedIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              {formattedReadingTime}
            </Typography>
            <IconButton
              size="small"
              onClick={onToggleTimer}
              aria-label={isReadingTimerActive ? "Pausar cronómetro de lectura" : "Reanudar cronómetro de lectura"}
              sx={{ p: 0.2, color: '#006b5f' }}
            >
              {isReadingTimerActive ? <PauseIcon sx={{ fontSize: 14 }} /> : <PlayArrowIcon sx={{ fontSize: 14 }} />}
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#890027', fontWeight: 600 }}>
            <LocalFireDepartmentIcon fontSize="small" />
            <Typography variant="caption" sx={{ fontWeight: 700 }}>7 Days Streak</Typography>
          </Box>
        </Box>
      </Box>

      {/* Reader Controls Toolbar (Font resize & Warm Theme) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 1.5,
          my: 2.5,
          p: 1.5,
          bgcolor: isWarm ? '#f2ece0' : '#f0f4ff',
          borderRadius: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            icon={<PublicIcon fontSize="small" />}
            label={currentArticle.category}
            size="small"
            sx={{ bgcolor: '#6df5e1', color: '#006f64', fontWeight: 700 }}
          />
          <Chip
            label={`${activeLevel} Track`}
            size="small"
            sx={{ bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: 13 }}>
            <MenuBookIcon fontSize="small" />
            <Typography variant="caption">{currentArticle.readTime}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Font Resizer */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, bgcolor: isWarm ? '#e8decb' : '#e2e8fc', borderRadius: 1.5, p: 0.3 }}>
            <Button
              size="small"
              onClick={onFontSizeDecrease}
              sx={{ minWidth: 32, fontWeight: 700, px: 1 }}
            >
              A-
            </Button>
            <Divider orientation="vertical" flexItem sx={{ height: 16, my: 'auto' }} />
            <Button
              size="small"
              onClick={onFontSizeIncrease}
              sx={{ minWidth: 32, fontWeight: 700, px: 1 }}
            >
              A+
            </Button>
          </Box>

          {/* Theme Switcher */}
          <Box sx={{ display: 'flex', gap: 0.5, bgcolor: isWarm ? '#e8decb' : '#e2e8fc', borderRadius: 1.5, p: 0.3 }}>
            <Button
              size="small"
              variant={themeMode === 'light' ? 'contained' : 'text'}
              onClick={() => onThemeModeChange('light')}
              sx={{
                fontSize: 12,
                px: 1.2,
                py: 0.3,
                bgcolor: themeMode === 'light' ? '#142175' : 'transparent',
                color: themeMode === 'light' ? '#ffffff' : '#142175'
              }}
            >
              Light
            </Button>
            <Button
              size="small"
              variant={themeMode === 'warm' ? 'contained' : 'text'}
              onClick={() => onThemeModeChange('warm')}
              sx={{
                fontSize: 12,
                px: 1.2,
                py: 0.3,
                bgcolor: themeMode === 'warm' ? '#8a6d3b' : 'transparent',
                color: themeMode === 'warm' ? '#ffffff' : '#8a6d3b'
              }}
            >
              Warm
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
