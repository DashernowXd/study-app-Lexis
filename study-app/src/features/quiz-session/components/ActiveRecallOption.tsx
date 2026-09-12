/**
 * Component: ActiveRecallOption
 * Description: Interactive response option for Active Recall quizzes.
 * Integrates MUI v7 Button with framer-motion keyframe animations
 * and native Web Audio API sound feedback.
 */
import React, { useState, useCallback } from 'react';
import { Button, Typography, useTheme } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { motion, type Variants } from 'framer-motion';
import { playQuizSound } from '../utils/quizAudio';

export interface ActiveRecallOptionProps {
  /** Unique option identifier */
  id: string | number;
  /** Label/content of the option */
  text: string;
  /** Whether this option represents the correct answer */
  isCorrect: boolean;
  /** Disable interaction when question is locked/resolved */
  disabled?: boolean;
  /** Optional callback invoked when the user selects this option */
  onSelect?: (isCorrect: boolean, id: string | number) => void;
}

type OptionState = 'idle' | 'success' | 'error';

// Motion-enhanced MUI Button inheriting theme typography and accessibility
const MotionButton = motion.create(Button);

export const ActiveRecallOption: React.FC<ActiveRecallOptionProps> = ({
  id,
  text,
  isCorrect,
  disabled = false,
  onSelect,
}) => {
  const theme = useTheme();
  const [status, setStatus] = useState<OptionState>('idle');

  const variants: Variants = {
    idle: {
      scale: 1,
      x: 0,
    },
    hover: {
      scale: 1.01,
      transition: { duration: 0.15 },
    },
    success: {
      scale: [1, 1.04, 1],
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      borderColor: theme.palette.success.dark,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    error: {
      x: [0, -9, 9, -7, 7, -4, 4, 0],
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      borderColor: theme.palette.error.dark,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const handleClick = useCallback(() => {
    if (disabled || status !== 'idle') return;

    const nextStatus: OptionState = isCorrect ? 'success' : 'error';
    setStatus(nextStatus);
    playQuizSound(nextStatus);

    if (onSelect) {
      onSelect(isCorrect, id);
    }
  }, [disabled, status, isCorrect, id, onSelect]);

  return (
    <MotionButton
      fullWidth
      variant="outlined"
      variants={variants}
      initial="idle"
      animate={status}
      whileHover={status === 'idle' && !disabled ? 'hover' : undefined}
      onClick={handleClick}
      disabled={disabled && status === 'idle'}
      sx={{
        py: 1.75,
        px: 2.5,
        borderRadius: 2.5,
        justifyContent: 'space-between',
        textTransform: 'none',
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 500, textAlign: 'left' }}>
        {text}
      </Typography>

      {status === 'success' && <CheckCircleOutlineRoundedIcon fontSize="small" />}
      {status === 'error' && <HighlightOffRoundedIcon fontSize="small" />}
    </MotionButton>
  );
};

export default ActiveRecallOption;
