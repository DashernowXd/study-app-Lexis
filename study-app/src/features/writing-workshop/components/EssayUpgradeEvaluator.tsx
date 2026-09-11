import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface SuggestedUpgrade {
  original: string;
  replacement: string;
}

interface EssayUpgradeEvaluatorProps {
  currentUpgrade?: SuggestedUpgrade;
  canApplyUpgrade: boolean;
  onApplyUpgrade: () => void;
}

export const EssayUpgradeEvaluator: React.FC<EssayUpgradeEvaluatorProps> = ({
  currentUpgrade,
  canApplyUpgrade,
  onApplyUpgrade
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        mb: 3,
        borderRadius: 2.5,
        bgcolor: '#ffffff',
        border: '1px solid #e0e6f5',
        boxShadow: '0 4px 16px rgba(20,33,117,0.04)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#142175' }}>
          <PsychologyIcon />
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Real-time C1 Evaluator</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#006b5f' }}>
          <VerifiedIcon fontSize="small" />
          <Typography variant="caption" sx={{ fontWeight: 700 }}>Lexical Sophistication: 88%</Typography>
        </Box>
      </Box>

      {/* Suggested Upgrade Micro-Card */}
      {currentUpgrade && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            p: 1.5,
            bgcolor: '#f1f5f9',
            borderRadius: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: '#71f8e4',
                color: '#00201c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AutoFixHighIcon fontSize="small" />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>
                Style Upgrade
              </Typography>
              <Typography variant="body2" sx={{ color: '#0f172a' }}>
                Replace <span style={{ textDecoration: 'line-through', color: '#ba1a1a' }}>"{currentUpgrade.original}"</span> with{' '}
                <span style={{ fontWeight: 700, color: '#142175' }}>"{currentUpgrade.replacement}"</span>
              </Typography>
            </Box>
          </Box>

          <Button
            size="small"
            variant="contained"
            disabled={!canApplyUpgrade}
            onClick={onApplyUpgrade}
            sx={{
              bgcolor: '#006b5f',
              '&:hover': { bgcolor: '#005048' },
              borderRadius: 1.5,
              textTransform: 'none',
              fontWeight: 700
            }}
          >
            Accept
          </Button>
        </Box>
      )}
    </Paper>
  );
};
