import React, { useState, forwardRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box, Typography, Zoom, Fade } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import type { StudyTask } from '../types';

import { ReadingExercise } from './exercises/ReadingExercise';
import { FillInBlanksExercise } from './exercises/FillInBlanksExercise';
import { ErrorDetectionExercise } from './exercises/ErrorDetectionExercise';
import { GenericExercise } from './exercises/GenericExercise';
import { SpeakingExercise } from './exercises/SpeakingExercise';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  task: StudyTask | null;
  onClose: () => void;
  onComplete: (taskId: string) => void;
}

export const ExerciseModal: React.FC<Props> = ({ open, task, onClose, onComplete }) => {
  const [completingTaskId, setCompletingTaskId] = useState<string | null>(null);
  const isCompleting = Boolean(task && completingTaskId === task.id);

  if (!task) return null;

  const handleClose = () => {
    setCompletingTaskId(null);
    onClose();
  };

  const handleComplete = () => {
    setCompletingTaskId(task.id);
    // Wait for animation to finish before closing and saving
    setTimeout(() => {
      onComplete(task.id);
      setCompletingTaskId(null);
    }, 1500);
  };

  const renderExercise = () => {
    if (!task.exerciseData) return <GenericExercise data={{}} onComplete={handleComplete} />;
    
    switch (task.exerciseType) {
      case 'reading':
        return (
          <>
            <ReadingExercise data={task.exerciseData} />
            <Button variant="contained" color="primary" onClick={handleComplete} sx={{ mt: 3 }}>
              I have finished reading
            </Button>
          </>
        );
      case 'fill-in-blanks':
        return <FillInBlanksExercise data={task.exerciseData} onComplete={handleComplete} />;
      case 'error-spotting':
        return <ErrorDetectionExercise data={task.exerciseData} onComplete={handleComplete} />;
      case 'recording':
        return <SpeakingExercise data={task.exerciseData} onComplete={handleComplete} />;
      case 'writing':
      default:
        return <GenericExercise data={task.exerciseData} onComplete={handleComplete} />;
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={isCompleting ? undefined : handleClose} 
      maxWidth="md" 
      fullWidth 
      scroll="paper"
      slots={{ transition: Transition }}
      keepMounted={false}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {task.title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          disabled={isCompleting}
          sx={(theme) => ({
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ position: 'relative', minHeight: 200 }}>
        <Fade in={!isCompleting} unmountOnExit>
          <Box>
            {renderExercise()}
          </Box>
        </Fade>
        
        <Fade in={isCompleting} unmountOnExit>
          <Box sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
            zIndex: 10,
          }}>
            <Zoom in={isCompleting} style={{ transitionDelay: isCompleting ? '200ms' : '0ms' }}>
              <CheckCircleOutlinedIcon color="success" sx={{ fontSize: 100, mb: 2 }} />
            </Zoom>
            <Fade in={isCompleting} style={{ transitionDelay: isCompleting ? '500ms' : '0ms' }}>
              <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>
                ¡Excelente trabajo!
              </Typography>
            </Fade>
          </Box>
        </Fade>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit" disabled={isCompleting}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
