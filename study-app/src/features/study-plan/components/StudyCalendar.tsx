import React, { useState, useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Button,
  Chip,
  Tooltip,
  Paper
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TodayIcon from '@mui/icons-material/Today';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import type { EnglishLevel } from '@/types';
import { DAYS_OF_WEEK, DAYS_PER_WEEK, TOTAL_WEEKS } from '../data/curriculumGenerator';
import { planApi } from '../api/planApi';

interface Props {
  level: EnglishLevel;
  selectedDayIndex: number;
  onSelectDay: (dayIndex: number) => void;
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto 20px auto',
  },
  card: {
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f6f8fe 100%)',
    border: '1px solid rgba(20, 33, 117, 0.12)',
    boxShadow: '0 8px 20px -4px rgba(20, 33, 117, 0.06)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2,
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: { xs: 0.8, sm: 1.2 },
    mt: 1.5,
  },
  dayHeaderCell: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: { xs: '0.72rem', sm: '0.8rem' },
    color: 'text.secondary',
    py: 0.5,
  },
  dayCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: { xs: 1, sm: 1.5 },
    borderRadius: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    minHeight: { xs: 68, sm: 80 },
    position: 'relative',
    userSelect: 'none',
  },
  summaryBanner: {
    mt: 2.5,
    p: 1.5,
    borderRadius: '12px',
    bgcolor: 'rgba(20, 33, 117, 0.04)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 1,
  },
};

export const StudyCalendar: React.FC<Props> = ({ level, selectedDayIndex, onSelectDay }) => {
  const [activeWeekTab, setActiveWeekTab] = useState<number>(() => Math.floor(selectedDayIndex / DAYS_PER_WEEK));
  const [showFullGrid, setShowFullGrid] = useState(false);

  // Read progress for all 28 days
  const progressMap = useMemo(() => {
    return planApi.getAllDaysProgress(level);
  }, [level]);

  // Total completed across all 28 days (140 activities total: 28 days * 5 activities)
  const totalCompleted = useMemo(() => {
    return Object.values(progressMap).reduce((acc, curr) => acc + curr.completed, 0);
  }, [progressMap]);

  const defaultDayIndex = planApi.getActiveDayIndex();

  const handleWeekChange = (_: React.SyntheticEvent, newWeek: number) => {
    setActiveWeekTab(newWeek);
  };

  const handleSelectDay = (dayIndex: number) => {
    onSelectDay(dayIndex);
    setActiveWeekTab(Math.floor(dayIndex / DAYS_PER_WEEK));
  };

  const selectedDayInfo = useMemo(() => {
    const dayNumber = selectedDayIndex + 1;
    const weekNumber = Math.floor(selectedDayIndex / DAYS_PER_WEEK) + 1;
    const dayOfWeek = DAYS_OF_WEEK[selectedDayIndex % DAYS_PER_WEEK];
    const progress = progressMap[selectedDayIndex] || { completed: 0, total: 5 };
    return { dayNumber, weekNumber, dayOfWeek, progress };
  }, [selectedDayIndex, progressMap]);

  return (
    <Box sx={styles.container}>
      <Card sx={styles.card} elevation={0}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          {/* Header Row */}
          <Box sx={styles.header}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarMonthIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.15rem' }}>
                4-Week Generic Study Calendar
              </Typography>
              <Chip
                label="28 Days / 5 Daily Activities"
                size="small"
                color="secondary"
                sx={{ fontWeight: 700, fontSize: '0.72rem' }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Tooltip title={showFullGrid ? "Show single week tabs" : "Show all 4 weeks in grid"}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={showFullGrid ? <ViewWeekIcon /> : <GridViewIcon />}
                  onClick={() => setShowFullGrid(prev => !prev)}
                  sx={{ textTransform: 'none', borderRadius: '8px', fontSize: '0.78rem' }}
                >
                  {showFullGrid ? "Week View" : "Full 4-Week Grid"}
                </Button>
              </Tooltip>

              <Tooltip title="Jump to today's scheduled day">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  startIcon={<TodayIcon />}
                  onClick={() => handleSelectDay(defaultDayIndex)}
                  sx={{ textTransform: 'none', borderRadius: '8px', fontSize: '0.78rem' }}
                >
                  Today
                </Button>
              </Tooltip>
            </Box>
          </Box>

          {/* Week Selector Tabs (when not in full grid mode) */}
          {!showFullGrid && (
            <Tabs
              value={activeWeekTab}
              onChange={handleWeekChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: '1px solid rgba(20, 33, 117, 0.08)',
                mb: 1.5,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  minHeight: 42,
                }
              }}
            >
              <Tab label="Week 1 (Days 1–7)" />
              <Tab label="Week 2 (Days 8–14)" />
              <Tab label="Week 3 (Days 15–21)" />
              <Tab label="Week 4 (Days 22–28)" />
            </Tabs>
          )}

          {/* Days of Week Header (Mon-Sun) */}
          <Box sx={styles.daysGrid}>
            {DAYS_OF_WEEK.map((d) => (
              <Box key={d.short} sx={styles.dayHeaderCell}>
                {d.short.toUpperCase()}
                <Typography variant="caption" sx={{ display: 'block', fontSize: '0.65rem', opacity: 0.8 }}>
                  {d.es.slice(0, 3)}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Calendar Day Cells */}
          {showFullGrid ? (
            // Full 4-Week Grid (28 cells: 4 rows x 7 columns)
            Array.from({ length: TOTAL_WEEKS }).map((_, wIdx) => (
              <Box key={wIdx} sx={{ mb: 1.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', display: 'block', my: 0.5 }}>
                  WEEK {wIdx + 1}
                </Typography>
                <Box sx={styles.daysGrid}>
                  {Array.from({ length: DAYS_PER_WEEK }).map((_, dIdx) => {
                    const dayIndex = wIdx * DAYS_PER_WEEK + dIdx;
                    return renderDayButton(dayIndex);
                  })}
                </Box>
              </Box>
            ))
          ) : (
            // Single Week Grid (7 cells for active week)
            <Box sx={styles.daysGrid}>
              {Array.from({ length: DAYS_PER_WEEK }).map((_, dIdx) => {
                const dayIndex = activeWeekTab * DAYS_PER_WEEK + dIdx;
                return renderDayButton(dayIndex);
              })}
            </Box>
          )}

          {/* Selected Day Info Banner */}
          <Box sx={styles.summaryBanner}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                📅 Week {selectedDayInfo.weekNumber}, Day {selectedDayInfo.dayNumber} ({selectedDayInfo.dayOfWeek.full} / {selectedDayInfo.dayOfWeek.es}):
              </Typography>
              <Chip
                label={`${selectedDayInfo.progress.completed} of 5 Completed`}
                size="small"
                color={selectedDayInfo.progress.completed === 5 ? "success" : selectedDayInfo.progress.completed > 0 ? "secondary" : "default"}
                sx={{ fontWeight: 700, fontSize: '0.72rem' }}
              />
            </Box>

            <Typography variant="caption" color="text.secondary">
              Overall Roadmap: <strong>{totalCompleted} / 140</strong> activities done ({Math.round((totalCompleted / 140) * 100)}%)
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );

  function renderDayButton(dayIndex: number) {
    const dayNumber = dayIndex + 1;
    const isSelected = dayIndex === selectedDayIndex;
    const isToday = dayIndex === defaultDayIndex;
    const dayProgress = progressMap[dayIndex] || { completed: 0, total: 5 };
    const isFullyCompleted = dayProgress.completed === 5;

    return (
      <Paper
        key={dayIndex}
        elevation={0}
        onClick={() => handleSelectDay(dayIndex)}
        sx={{
          ...styles.dayCell,
          border: isSelected
            ? '2px solid #142175'
            : isToday
            ? '1.5px dashed #006b5f'
            : '1px solid rgba(20, 33, 117, 0.1)',
          bgcolor: isSelected
            ? 'rgba(20, 33, 117, 0.08)'
            : isFullyCompleted
            ? 'rgba(46, 125, 50, 0.08)'
            : 'background.paper',
          transform: isSelected ? 'scale(1.03)' : 'none',
          boxShadow: isSelected ? '0 4px 12px rgba(20, 33, 117, 0.12)' : 'none',
          '&:hover': {
            bgcolor: isSelected ? 'rgba(20, 33, 117, 0.12)' : 'rgba(20, 33, 117, 0.04)',
          }
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: isSelected ? 800 : 600,
            color: isSelected ? 'primary.main' : 'text.primary',
            fontSize: { xs: '0.85rem', sm: '0.95rem' }
          }}
        >
          Day {dayNumber}
        </Typography>

        {/* Status Badge */}
        {isFullyCompleted ? (
          <CheckCircleIcon color="success" sx={{ fontSize: 18, mt: 0.5 }} />
        ) : dayProgress.completed > 0 ? (
          <Chip
            label={`${dayProgress.completed}/5`}
            size="small"
            color="secondary"
            variant="outlined"
            sx={{ height: 18, fontSize: '0.65rem', mt: 0.5, fontWeight: 700 }}
          />
        ) : (
          <Typography variant="caption" sx={{ fontSize: '0.68rem', color: 'text.secondary', mt: 0.5 }}>
            5 tasks
          </Typography>
        )}

        {isToday && (
          <Box
            sx={{
              position: 'absolute',
              top: 3,
              right: 4,
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'secondary.main',
            }}
          />
        )}
      </Paper>
    );
  }
};

export default StudyCalendar;
