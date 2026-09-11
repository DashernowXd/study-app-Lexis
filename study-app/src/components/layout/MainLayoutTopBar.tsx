import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import type { AppView } from './MainLayout';
import type { EnglishLevel } from '../../features/study-plan/types';

interface MainLayoutTopBarProps {
  currentView: AppView;
  level: EnglishLevel;
  sessionTime?: string;
  isTimerRunning?: boolean;
  streakDays?: number;
  onDrawerToggle: () => void;
  onSelectView: (view: AppView) => void;
  onLevelChange: (lvl: EnglishLevel) => void;
  onToggleTimer?: () => void;
}

const LEVELS: EnglishLevel[] = ['B1', 'B2', 'C1'];

export const MainLayoutTopBar: React.FC<MainLayoutTopBarProps> = ({
  currentView,
  level,
  sessionTime = '08:45',
  isTimerRunning = true,
  streakDays = 7,
  onDrawerToggle,
  onSelectView,
  onLevelChange,
  onToggleTimer
}) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 4 },
        py: 1.5,
        bgcolor: 'rgba(248, 249, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(20, 33, 117, 0.06)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        <IconButton
          onClick={onDrawerToggle}
          aria-label="Abrir barra lateral de navegación"
          sx={{ display: { md: 'none' }, color: '#142175' }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => onSelectView('landing')}
          title="Return to Landing Page"
          aria-label="Volver a página de presentación de Lexis"
          sx={{ color: '#142175', bgcolor: '#eef2fc', borderRadius: 2, p: 0.7 }}
        >
          <HomeOutlinedIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#142175' }}>
          {currentView === 'dashboard' && `${level} Daily Dashboard`}
          {currentView === 'reading' && `${level} Reading Studio`}
          {currentView === 'quiz' && `${level} Quiz Studio`}
          {currentView === 'writing' && `${level} Writing Workshop`}
          {currentView === 'speaking' && `${level} Speaking Studio`}
        </Typography>

        {/* Quick Level Switcher in TopAppBar */}
        <Stack direction="row" spacing={0.6} sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>
          {LEVELS.map(lvl => (
            <Chip
              key={lvl}
              label={lvl}
              size="small"
              onClick={() => onLevelChange(lvl)}
              aria-label={`Seleccionar nivel ${lvl}`}
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
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.2, sm: 2 } }}>
        {/* Reactive Session Timer with Pause/Play */}
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
            Session {sessionTime}
          </Typography>
          {onToggleTimer && (
            <IconButton
              size="small"
              onClick={onToggleTimer}
              sx={{ p: 0.2, color: '#006b5f' }}
              title={isTimerRunning ? 'Pause Session' : 'Resume Session'}
              aria-label={isTimerRunning ? 'Pausar cronómetro de sesión' : 'Reanudar cronómetro de sesión'}
            >
              {isTimerRunning ? <PauseIcon sx={{ fontSize: 13 }} /> : <PlayArrowIcon sx={{ fontSize: 13 }} />}
            </IconButton>
          )}
        </Box>

        {/* Reactive Streak Days */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#890027', fontWeight: 700 }}>
          <LocalFireDepartmentIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            {streakDays} Days Streak
          </Typography>
        </Box>

        <Avatar
          alt="Estudiante Abel P."
          aria-label="Perfil del estudiante"
          sx={{ width: 34, height: 34, bgcolor: '#142175', fontSize: 13, fontWeight: 700 }}
        >
          AP
        </Avatar>
      </Box>
    </Box>
  );
};
