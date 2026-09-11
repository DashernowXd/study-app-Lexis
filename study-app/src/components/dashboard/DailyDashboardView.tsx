import {
  Box,
  Paper,
  Typography,
  Chip,
  Grid,
  Button
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import QuizIcon from '@mui/icons-material/Quiz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SuspenseLoader } from '../SuspenseLoader';
import { DailyVocabularyCards } from '../../features/daily-vocabulary/components/DailyVocabularyCards';
import { StudyCalendar } from '../../features/study-plan/components/StudyCalendar';
import { TodoList } from '../../features/study-plan/components/TodoList';
import type { EnglishLevel } from '../../features/study-plan/types';
import type { AppView } from '../layout/MainLayout';

interface DailyDashboardViewProps {
  level: EnglishLevel;
  selectedDayIndex: number;
  onSelectDayIndex: (index: number) => void;
  onNavigate: (view: AppView) => void;
}

export function DailyDashboardView({
  level,
  selectedDayIndex,
  onSelectDayIndex,
  onNavigate,
}: DailyDashboardViewProps) {
  return (
    <Box sx={{ maxWidth: 1280, mx: 'auto' }}>
      {/* Executive Welcome Strip */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3 },
          mb: 3.5,
          borderRadius: 3,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 4px 20px -2px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              Executive English Protocol
            </Typography>
            <Chip
              label={`Active Tier: ${level}`}
              color="primary"
              size="small"
              sx={{ fontWeight: 800, borderRadius: 1.5 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Structured C.A.R.E. immersion engineered for high-stakes leadership, engineering, and negotiation.
          </Typography>
        </Box>
      </Paper>

      {/* Quick Launch Studios */}
      <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: 1.2, mb: 1.5, display: 'block' }}>
        Interactive Practice Studios
      </Typography>
      <Grid container spacing={2.5} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: 'primary.main',
                transform: 'translateY(-3px)',
                boxShadow: (theme) => `0 10px 24px -4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(37,99,235,0.12)'}`,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box sx={{ p: 1.2, borderRadius: 2, bgcolor: 'primary.50', color: 'primary.main', display: 'inline-flex', mb: 1.5 }}>
                <AutoStoriesIcon />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                Reading Studio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Executive business and tech case analysis with active contextual lookup.
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              onClick={() => onNavigate('reading')}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Studio
            </Button>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: 'success.main',
                transform: 'translateY(-3px)',
                boxShadow: (theme) => `0 10px 24px -4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(16,185,129,0.12)'}`,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box sx={{ p: 1.2, borderRadius: 2, bgcolor: 'success.50', color: 'success.main', display: 'inline-flex', mb: 1.5 }}>
                <QuizIcon />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                Quiz Studio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Adaptive multiple-choice challenge across tense precision, idioms & grammar.
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              color="success"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              onClick={() => onNavigate('quiz')}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Studio
            </Button>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: 'warning.main',
                transform: 'translateY(-3px)',
                boxShadow: (theme) => `0 10px 24px -4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(245,158,11,0.12)'}`,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box sx={{ p: 1.2, borderRadius: 2, bgcolor: 'warning.50', color: 'warning.main', display: 'inline-flex', mb: 1.5 }}>
                <EditNoteIcon />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                Writing Workshop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rigorous essay & executive summary editor with live lexical analysis.
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              color="warning"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              onClick={() => onNavigate('writing')}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Studio
            </Button>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: 'secondary.main',
                transform: 'translateY(-3px)',
                boxShadow: (theme) => `0 10px 24px -4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(124,58,237,0.12)'}`,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box sx={{ p: 1.2, borderRadius: 2, bgcolor: 'secondary.50', color: 'secondary.main', display: 'inline-flex', mb: 1.5 }}>
                <RecordVoiceOverIcon />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                Speaking Studio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Speech laboratory with mic recording, live playback, and CEFR criteria checks.
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              endIcon={<ArrowForwardIcon fontSize="small" />}
              onClick={() => onNavigate('speaking')}
              sx={{ borderRadius: 2, fontWeight: 700, alignSelf: 'flex-start' }}
            >
              Open Studio
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Daily Verbs & Vocabulary Cards */}
      <SuspenseLoader message="Loading daily verbs & vocabulary...">
        <DailyVocabularyCards key={level} level={level} />
      </SuspenseLoader>

      {/* Reusable 4-Week Study Calendar */}
      <SuspenseLoader message="Loading study calendar...">
        <StudyCalendar
          level={level}
          selectedDayIndex={selectedDayIndex}
          onSelectDay={onSelectDayIndex}
        />
      </SuspenseLoader>

      {/* C.A.R.E. Tasks & Exercises */}
      <SuspenseLoader message="Loading tasks for your day...">
        <TodoList level={level} selectedDayIndex={selectedDayIndex} />
      </SuspenseLoader>
    </Box>
  );
}
