import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
  Collapse,
  LinearProgress,
  Button
} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { QuizQuestion } from '../types';

interface QuizQuestionViewProps {
  currentQ: QuizQuestion;
  currentIdx: number;
  totalQuestions: number;
  progressPercent: number;
  showHint: boolean;
  selectedOptionKey?: string;
  hasAnswered: boolean;
  onToggleHint: () => void;
  onSpeakQuestion: (text: string) => void;
  onSelectOption: (key: string, isCorrect: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const QuizQuestionView: React.FC<QuizQuestionViewProps> = ({
  currentQ,
  currentIdx,
  totalQuestions,
  progressPercent,
  showHint,
  selectedOptionKey,
  hasAnswered,
  onToggleHint,
  onSpeakQuestion,
  onSelectOption,
  onPrev,
  onNext
}) => {
  return (
    <>
      {/* Progress Header */}
      <Box sx={{ my: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Chip
              label={`Question ${currentIdx + 1} of ${totalQuestions}`}
              size="small"
              sx={{ bgcolor: '#e6eeff', color: '#142175', fontWeight: 700 }}
            />
            <Chip
              label={currentQ.unit}
              size="small"
              sx={{ bgcolor: '#dfe0ff', color: '#000d60', fontWeight: 600 }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              {currentQ.topic}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ fontWeight: 700, color: '#006b5f' }}>
            {progressPercent}% Complete
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            height: 6,
            borderRadius: 3,
            bgcolor: '#e6eeff',
            '& .MuiLinearProgress-bar': { bgcolor: '#142175', borderRadius: 3 }
          }}
        />
      </Box>

      {/* Question Body */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0d1c2e', lineHeight: 1.4, mb: 1 }}>
            {currentQ.questionText}
          </Typography>
          <IconButton
            size="small"
            onClick={() => onSpeakQuestion(currentQ.questionText)}
            sx={{ color: '#006b5f', shrink: 0 }}
            title="Listen to question"
            aria-label="Escuchar enunciado de la pregunta"
          >
            <VolumeUpIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontStyle: 'italic' }}>
          Target Domain: {currentQ.targetDomain}
        </Typography>
      </Box>

      {/* Grammar Tip Accordion/Collapse */}
      <Paper
        elevation={0}
        sx={{
          mb: 3,
          p: 1.5,
          borderRadius: 2,
          bgcolor: '#f4fbf9',
          border: '1px solid rgba(0,107,95,0.2)'
        }}
      >
        <Box
          onClick={onToggleHint}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#006b5f' }}>
            <LightbulbOutlinedIcon fontSize="small" />
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Grammar Rule: {currentQ.grammarTipTitle}
            </Typography>
          </Box>
          {showHint ? <ExpandLessIcon sx={{ color: '#006b5f' }} /> : <ExpandMoreIcon sx={{ color: '#006b5f' }} />}
        </Box>

        <Collapse in={showHint}>
          <Typography variant="body2" sx={{ mt: 1.5, color: '#004d44', lineHeight: 1.5 }}>
            {currentQ.grammarTipRule}
          </Typography>
        </Collapse>
      </Paper>

      {/* Options List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
        {currentQ.options.map(opt => {
          const isSelected = selectedOptionKey === opt.key;
          const showResult = hasAnswered;
          let borderColor = 'rgba(20,33,117,0.12)';
          let bgcolor = '#ffffff';

          if (showResult) {
            if (opt.isCorrect) {
              borderColor = '#006b5f';
              bgcolor = 'rgba(0,107,95,0.06)';
            } else if (isSelected && !opt.isCorrect) {
              borderColor = '#ba1a1a';
              bgcolor = 'rgba(186,26,26,0.06)';
            }
          } else if (isSelected) {
            borderColor = '#142175';
            bgcolor = '#f0f4ff';
          }

          return (
            <Paper
              key={opt.key}
              elevation={0}
              onClick={() => onSelectOption(opt.key, opt.isCorrect)}
              sx={{
                p: 2,
                borderRadius: 2.5,
                border: '1.5px solid',
                borderColor,
                bgcolor,
                cursor: hasAnswered ? 'default' : 'pointer',
                transition: 'all 0.15s ease',
                '&:hover': {
                  borderColor: hasAnswered ? borderColor : '#142175',
                  bgcolor: hasAnswered ? bgcolor : '#f8f9ff'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: isSelected ? (opt.isCorrect ? '#006b5f' : '#ba1a1a') : '#f0f4fc',
                    color: isSelected ? '#ffffff' : '#142175',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    shrink: 0,
                    mt: 0.2
                  }}
                >
                  {opt.key}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: isSelected ? 700 : 500, color: '#0d1c2e' }}>
                    {opt.text}
                  </Typography>

                  {/* Immediate Feedback */}
                  {showResult && (isSelected || opt.isCorrect) && (
                    <Box sx={{ mt: 1, display: 'flex', alignItems: 'flex-start', gap: 0.8 }}>
                      {opt.isCorrect ? (
                        <CheckCircleIcon sx={{ color: '#006b5f', fontSize: 18, mt: 0.2 }} />
                      ) : (
                        <CancelOutlinedIcon sx={{ color: '#ba1a1a', fontSize: 18, mt: 0.2 }} />
                      )}
                      <Typography
                        variant="caption"
                        sx={{
                          color: opt.isCorrect ? '#006b5f' : '#ba1a1a',
                          fontWeight: 600,
                          lineHeight: 1.4
                        }}
                      >
                        {opt.feedback}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>

      {/* Navigation Controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onPrev}
          disabled={currentIdx === 0}
          sx={{ fontWeight: 700, borderRadius: 2 }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={onNext}
          disabled={!hasAnswered}
          sx={{ px: 3, fontWeight: 700, borderRadius: 2 }}
        >
          {currentIdx === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </Box>
    </>
  );
};
