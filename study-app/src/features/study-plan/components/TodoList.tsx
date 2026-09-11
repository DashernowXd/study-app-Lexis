import React, { useState } from 'react';
import { 
  Box, Typography, Paper, Checkbox, 
  FormControlLabel, LinearProgress, Chip, Stack, CardActionArea 
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { planApi } from '../api/planApi';
import type { EnglishLevel, StudyTask } from '../types';
import { ExerciseModal } from './ExerciseModal';

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
    p: 2,
  },
  progressBox: {
    mb: 2,
  },
  card: {
    borderRadius: '16px', // rounded-lg
    boxShadow: '0 4px 6px -1px rgba(20, 33, 117, 0.04), 0 2px 4px -1px rgba(20, 33, 117, 0.02)',
    overflow: 'hidden',
  },
  cardActionArea: {
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1.5,
  },
  categoryChip: {
    fontWeight: 600,
    letterSpacing: '0.05em',
    fontSize: '12px',
    alignSelf: 'flex-start',
  }
};

const categoryColors: Record<string, 'primary' | 'secondary' | 'error' | 'default'> = {
  'Capture': 'primary', // Indigo
  'Activate': 'secondary', // Teal
  'Reinforce': 'default', 
  'Evaluate': 'error' // Coral
};

interface TodoListProps {
  level: EnglishLevel;
  selectedDayIndex?: number;
}

export const TodoList: React.FC<TodoListProps> = ({ level, selectedDayIndex }) => {
  const queryClient = useQueryClient();
  const [selectedTask, setSelectedTask] = useState<StudyTask | null>(null);

  const dayIndex = selectedDayIndex !== undefined ? selectedDayIndex : planApi.getActiveDayIndex();

  const { data: tasks } = useSuspenseQuery<StudyTask[]>({
    queryKey: ['tasks', level, dayIndex],
    queryFn: () => planApi.getTasksByLevelAndDay(level, dayIndex),
  });

  const toggleMutation = useMutation({
    mutationFn: (taskId: string) => planApi.toggleTaskCompletion(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    }
  });

  const completeMutation = useMutation({
    mutationFn: (taskId: string) => planApi.completeTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      setSelectedTask(null);
    }
  });

  const handleToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // prevent modal opening
    toggleMutation.mutate(id);
  };

  const handleCardClick = (task: StudyTask) => {
    setSelectedTask(task);
  };

  const handleExerciseComplete = (id: string) => {
    completeMutation.mutate(id);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.progressBox}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Daily Goal</Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>
            {Math.round(progress)}%
          </Typography>
        </Stack>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          color="secondary"
          sx={{ height: 8, borderRadius: 4 }}
        />
      </Box>

      {tasks.map((task) => (
        <Paper key={task.id} sx={styles.card} elevation={0}>
          <CardActionArea sx={styles.cardActionArea} onClick={() => handleCardClick(task)}>
            <Chip 
              label={task.category.toUpperCase()} 
              size="small" 
              color={categoryColors[task.category]}
              sx={styles.categoryChip}
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={task.completed} 
                  onClick={(e) => handleToggle(e, task.id)} 
                  color="secondary"
                />
              }
              label={
                <Typography 
                  variant="body1" 
                  sx={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.6 : 1 }}
                >
                  {task.title}
                </Typography>
              }
              onClick={(e) => e.stopPropagation()}
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              {task.description}
            </Typography>
          </CardActionArea>
        </Paper>
      ))}

      <ExerciseModal 
        open={!!selectedTask} 
        task={selectedTask} 
        onClose={() => setSelectedTask(null)}
        onComplete={handleExerciseComplete}
      />
    </Box>
  );
};

export default TodoList;
