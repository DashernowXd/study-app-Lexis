/**
 * Component: AnimatedSentenceWord
 * Description: Interactive cloze/highlight word component with emphasis animations
 * via framer-motion when hiding and revealing target vocabulary terms.
 */
import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { motion, AnimatePresence } from 'framer-motion';

export interface AnimatedSentenceWordProps {
  /** Target word text */
  text: string;
  /** Whether the word is currently obscured/hidden for active recall */
  isHidden: boolean;
  /** Callback triggered when clicking on the hidden blank to reveal it */
  onReveal: () => void;
}

export const AnimatedSentenceWord: React.FC<AnimatedSentenceWordProps> = ({
  text,
  isHidden,
  onReveal,
}) => {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        mx: 0.5,
        verticalAlign: 'baseline',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isHidden ? (
          <Tooltip key="hidden" title="Click to reveal word (Active Recall)" arrow>
            <motion.span
              onClick={onReveal}
              initial={{ opacity: 0, scale: 0.82, filter: 'blur(4px)', y: 2 }}
              animate={{
                opacity: 1,
                scale: [0.92, 1.06, 1],
                filter: 'blur(0px)',
                y: 0,
              }}
              exit={{ opacity: 0, scale: 0.85, filter: 'blur(3px)', y: -2 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(20, 33, 117, 0.16)',
              }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                userSelect: 'none',
                backgroundColor: 'rgba(20, 33, 117, 0.09)',
                border: '2px dashed #142175',
                color: '#142175',
                fontWeight: 700,
                fontSize: '0.92em',
                lineHeight: 1.2,
                boxShadow: '0 2px 6px rgba(20, 33, 117, 0.08)',
                transition: 'background-color 0.2s ease',
              }}
            >
              <VisibilityRoundedIcon sx={{ fontSize: 15, opacity: 0.85 }} />
              <Typography
                component="span"
                sx={{
                  letterSpacing: '0.12em',
                  fontFamily: 'monospace',
                  fontSize: '0.95em',
                  fontWeight: 700,
                }}
              >
                [{'•'.repeat(Math.min(Math.max(text.length, 3), 8))}]
              </Typography>
            </motion.span>
          </Tooltip>
        ) : (
          <Tooltip key="revealed" title="Target Vocabulary Term" arrow>
            <motion.span
              initial={{ opacity: 0, scale: 0.86, filter: 'blur(4px)', y: -2 }}
              animate={{
                opacity: 1,
                scale: [1, 1.14, 1],
                filter: 'blur(0px)',
                y: 0,
                boxShadow: [
                  '0 0 0px rgba(0, 107, 95, 0)',
                  '0 0 18px rgba(0, 107, 95, 0.45)',
                  '0 2px 8px rgba(0, 107, 95, 0.18)',
                ],
              }}
              exit={{ opacity: 0, scale: 0.88, filter: 'blur(3px)', y: 2 }}
              transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 4px 14px rgba(0, 107, 95, 0.28)',
              }}
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(0, 107, 95, 0.15)',
                color: '#006b5f',
                padding: '3px 10px',
                borderRadius: '8px',
                fontWeight: 800,
                borderBottom: '2.5px solid #006b5f',
                lineHeight: 1.2,
                cursor: 'default',
              }}
            >
              {text}
            </motion.span>
          </Tooltip>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedSentenceWord;
