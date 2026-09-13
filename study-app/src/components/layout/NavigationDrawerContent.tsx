import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  LinearProgress,
  Button
} from '@mui/material';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import type { AppView } from './MainLayout';
import type { EnglishLevel } from '../../features/study-plan/types';
import logoImg from '@/assets/logo.jpg';

interface NavigationDrawerContentProps {
  currentView: AppView;
  level: EnglishLevel;
  weeklyProgress: number;
  onSelectView: (view: AppView) => void;
  onLevelChange: (lvl: EnglishLevel) => void;
}

export const NavigationDrawerContent: React.FC<NavigationDrawerContentProps> = ({
  currentView,
  level,
  weeklyProgress,
  onSelectView,
  onLevelChange
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#f0f4fc', color: '#0d1c2e' }}>
      {/* Stitch Profile & Brand Header */}
      <Box
        onClick={() => onSelectView('landing')}
        sx={{
          p: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer',
          transition: 'background-color 0.15s',
          '&:hover': { bgcolor: 'rgba(20,33,117,0.04)' }
        }}
      >
        <Box
          component="img"
          src={logoImg}
          alt="Lexis Logo"
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2.5,
            objectFit: 'cover',
            boxShadow: '0 4px 10px rgba(20, 33, 117, 0.2)',
            border: '1px solid rgba(109, 245, 225, 0.3)'
          }}
        />
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#142175', lineHeight: 1.2 }}>
            Lexis English
          </Typography>
          <Typography variant="caption" sx={{ color: '#454651', fontWeight: 600 }}>
            {level} Track Active
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', color: '#006b5f', fontWeight: 700 }}>
            {weeklyProgress}% Weekly Goal
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(20, 33, 117, 0.08)' }} />

      {/* Navigation Sections */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 1.5 }}>
        {/* Studios / Main Views */}
        <Typography variant="caption" sx={{ px: 1.5, py: 0.5, fontWeight: 700, color: '#767682', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
          Studios & Views
        </Typography>
        <List disablePadding sx={{ mb: 2 }}>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentView === 'dashboard'}
              onClick={() => onSelectView('dashboard')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ color: currentView === 'dashboard' ? '#142175' : '#767682', minWidth: 38 }}>
                <DashboardCustomizeOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 14, fontWeight: currentView === 'dashboard' ? 700 : 500 }}>Daily Dashboard</Typography>}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentView === 'reading'}
              onClick={() => onSelectView('reading')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ color: currentView === 'reading' ? '#142175' : '#767682', minWidth: 38 }}>
                <MenuBookOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 14, fontWeight: currentView === 'reading' ? 700 : 500 }}>Reading Studio</Typography>}
              />
              <Chip label={level} size="small" sx={{ height: 20, fontSize: 10, bgcolor: '#6df5e1', color: '#006f64', fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentView === 'quiz'}
              onClick={() => onSelectView('quiz')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ color: currentView === 'quiz' ? '#142175' : '#767682', minWidth: 38 }}>
                <QuizOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 14, fontWeight: currentView === 'quiz' ? 700 : 500 }}>Quiz Studio</Typography>}
              />
              <Chip label="Interactive" size="small" sx={{ height: 20, fontSize: 10, bgcolor: '#ffdad6', color: '#ba1a1a', fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentView === 'writing'}
              onClick={() => onSelectView('writing')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ color: currentView === 'writing' ? '#142175' : '#767682', minWidth: 38 }}>
                <HistoryEduOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 14, fontWeight: currentView === 'writing' ? 700 : 500 }}>Writing Workshop</Typography>}
              />
              <Chip label="Essay" size="small" sx={{ height: 20, fontSize: 10, bgcolor: '#e6eeff', color: '#2e3a8c', fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentView === 'speaking'}
              onClick={() => onSelectView('speaking')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ color: currentView === 'speaking' ? '#142175' : '#767682', minWidth: 38 }}>
                <RecordVoiceOverOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 14, fontWeight: currentView === 'speaking' ? 700 : 500 }}>Speaking Studio</Typography>}
              />
              <Chip label="Mic" size="small" sx={{ height: 20, fontSize: 10, bgcolor: '#e8f5e9', color: '#2e7d32', fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ my: 1.5, borderColor: 'rgba(20, 33, 117, 0.08)' }} />

        {/* CEFR Learning Tracks */}
        <Typography variant="caption" sx={{ px: 1.5, py: 0.5, fontWeight: 700, color: '#767682', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
          Learning Track
        </Typography>
        <List disablePadding>
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={level === 'B1'}
              onClick={() => onLevelChange('B1')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: level === 'B1' ? '#142175' : '#767682' }}>
                <SchoolIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 13, fontWeight: level === 'B1' ? 700 : 500 }}>B1 Intermediate</Typography>}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={level === 'B2'}
              onClick={() => onLevelChange('B2')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: level === 'B2' ? '#142175' : '#767682' }}>
                <AutoStoriesIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 13, fontWeight: level === 'B2' ? 700 : 500 }}>B2 Upper Intermediate</Typography>}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={level === 'C1'}
              onClick={() => onLevelChange('C1')}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': { bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 700 }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: level === 'C1' ? '#142175' : '#767682' }}>
                <MilitaryTechIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: 13, fontWeight: level === 'C1' ? 700 : 500 }}>C1 Advanced Mastery</Typography>}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Footer Weekly Goal Box */}
      <Box sx={{ p: 2, m: 1.5, bgcolor: '#ffffff', borderRadius: 2.5, boxShadow: '0 2px 8px rgba(20,33,117,0.06)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 700, color: '#142175' }}>Weekly Goal</Typography>
          <Typography variant="caption" sx={{ fontWeight: 800, color: '#006b5f' }}>{weeklyProgress}%</Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={weeklyProgress}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: '#dce9ff',
            '& .MuiLinearProgress-bar': {
              bgcolor: '#006b5f',
              borderRadius: 4
            }
          }}
        />
      </Box>

      {/* Exit to Landing Page Button */}
      <Box sx={{ px: 1.5, pb: 1.5 }}>
        <Button
          fullWidth
          size="small"
          startIcon={<HomeOutlinedIcon />}
          onClick={() => onSelectView('landing')}
          sx={{
            borderRadius: 2,
            color: '#454651',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'none',
            justifyContent: 'flex-start',
            px: 1.5,
            py: 0.8,
            '&:hover': { bgcolor: '#dfe0ff', color: '#142175' }
          }}
        >
          Exit to Landing Page
        </Button>
      </Box>
    </Box>
  );
};
