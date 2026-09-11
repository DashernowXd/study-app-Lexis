import React, { useState, useCallback } from 'react';
import {
  Box,
  Drawer,
  useMediaQuery,
  useTheme
} from '@mui/material';
import type { EnglishLevel } from '../../features/study-plan/types';
import { NavigationDrawerContent } from './NavigationDrawerContent';
import { MainLayoutTopBar } from './MainLayoutTopBar';

export type AppView = 'landing' | 'dashboard' | 'reading' | 'quiz' | 'writing' | 'speaking';

export interface MainLayoutProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  level: EnglishLevel;
  onLevelChange: (lvl: EnglishLevel) => void;
  sessionTime?: string;
  isTimerRunning?: boolean;
  onToggleTimer?: () => void;
  streakDays?: number;
  weeklyProgress?: number;
  children: React.ReactNode;
}

const DRAWER_WIDTH = 280;

export const MainLayout: React.FC<MainLayoutProps> = ({
  currentView,
  onViewChange,
  level,
  onLevelChange,
  sessionTime = '08:45',
  isTimerRunning = true,
  onToggleTimer,
  streakDays = 7,
  weeklyProgress = 75,
  children
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const handleSelectView = useCallback((view: AppView) => {
    onViewChange(view);
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [onViewChange, isMobile]);

  const drawerElement = (
    <NavigationDrawerContent
      currentView={currentView}
      level={level}
      weeklyProgress={weeklyProgress}
      onSelectView={handleSelectView}
      onLevelChange={onLevelChange}
    />
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9ff' }}>
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(20,33,117,0.08)'
          }
        }}
        open
      >
        {drawerElement}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' }
        }}
      >
        {drawerElement}
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Sticky TopAppBar */}
        <MainLayoutTopBar
          currentView={currentView}
          level={level}
          sessionTime={sessionTime}
          isTimerRunning={isTimerRunning}
          streakDays={streakDays}
          onDrawerToggle={handleDrawerToggle}
          onSelectView={handleSelectView}
          onLevelChange={onLevelChange}
          onToggleTimer={onToggleTimer}
        />

        {/* Dynamic Screen View Container */}
        <Box sx={{ p: { xs: 2, md: 3.5 }, flex: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
