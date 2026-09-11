import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuspenseLoader } from './components/SuspenseLoader';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { MainLayout, type AppView } from './components/layout/MainLayout';
import type { EnglishLevel } from './features/study-plan/types';
import { planApi } from './features/study-plan/api/planApi';

import { useSessionStats } from './hooks/useSessionStats';

// Lazy loaded feature screens compliant with frontend-expert standards
const DailyDashboardView = React.lazy(() => import('./components/dashboard/DailyDashboardView').then(m => ({ default: m.DailyDashboardView })));
const ReadingStudioScreen = React.lazy(() => import('./features/reading-studio/components/ReadingStudioScreen'));
const QuizSessionScreen = React.lazy(() => import('./features/quiz-session/components/QuizSessionScreen'));
const EssayWritingScreen = React.lazy(() => import('./features/writing-workshop/components/EssayWritingScreen'));
const SpeakingStudioScreen = React.lazy(() => import('./features/speaking-studio/components/SpeakingStudioScreen'));
const LandingPageScreen = React.lazy(() => import('./features/landing-page/components/LandingPageScreen'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Stitch-inspired Material 3 / v7 theme
const theme = createTheme({
  palette: {
    background: {
      default: '#f8f9ff',
      paper: '#ffffff',
    },
    primary: {
      main: '#142175', // Deep Indigo
      light: '#2e3a8c',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#006b5f', // Vibrant Teal
      light: '#6df5e1',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ba1a1a', // Coral
      light: '#ffdad6',
    },
    text: {
      primary: '#0d1c2e',
      secondary: '#454651'
    }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  shape: {
    borderRadius: 12,
  }
});

function App() {
  const [level, setLevel] = useState<EnglishLevel>('C1');
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(() => planApi.getActiveDayIndex());

  const {
    formattedTime,
    isTimerRunning,
    toggleTimer,
    streakDays,
    weeklyProgress
  } = useSessionStats(level);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          {currentView === 'landing' ? (
            <SuspenseLoader message="Loading Lexis Executive Landing...">
              <LandingPageScreen
                onNavigate={setCurrentView}
                level={level}
                onLevelChange={setLevel}
              />
            </SuspenseLoader>
          ) : (
          <MainLayout
            currentView={currentView}
            onViewChange={setCurrentView}
            level={level}
            onLevelChange={setLevel}
            sessionTime={formattedTime}
            isTimerRunning={isTimerRunning}
            onToggleTimer={toggleTimer}
            streakDays={streakDays}
            weeklyProgress={weeklyProgress}
          >
            {/* View: Reading Studio */}
            {currentView === 'reading' && (
            <SuspenseLoader message="Loading Reading Studio...">
              <ReadingStudioScreen
                onBack={() => setCurrentView('dashboard')}
                level={level}
                onLevelChange={setLevel}
              />
            </SuspenseLoader>
          )}

          {/* View: Quiz Studio */}
          {currentView === 'quiz' && (
            <SuspenseLoader message="Loading Quiz Studio...">
              <QuizSessionScreen
                onBack={() => setCurrentView('dashboard')}
                level={level}
                onLevelChange={setLevel}
              />
            </SuspenseLoader>
          )}

          {/* View: Writing Workshop */}
          {currentView === 'writing' && (
            <SuspenseLoader message="Loading Writing Workshop...">
              <EssayWritingScreen onBack={() => setCurrentView('dashboard')} />
            </SuspenseLoader>
          )}

          {/* View: Speaking Studio */}
          {currentView === 'speaking' && (
            <SuspenseLoader message="Loading Speaking Studio...">
              <SpeakingStudioScreen onBack={() => setCurrentView('dashboard')} level={level} />
            </SuspenseLoader>
          )}

          {/* View: Daily Dashboard */}
          {currentView === 'dashboard' && (
            <SuspenseLoader message="Loading Dashboard...">
              <DailyDashboardView
                level={level}
                selectedDayIndex={selectedDayIndex}
                onSelectDayIndex={setSelectedDayIndex}
                onNavigate={setCurrentView}
              />
            </SuspenseLoader>
          )}
          </MainLayout>
          )}
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
