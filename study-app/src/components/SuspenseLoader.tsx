import React, { Suspense } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '200px',
    p: 3,
  },
  text: {
    mt: 2,
    color: 'text.secondary',
  },
};

interface SuspenseLoaderProps {
  children: React.ReactNode;
  message?: string;
}

export const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ 
  children, 
  message = 'Loading...' 
}) => {
  return (
    <Suspense
      fallback={
        <Box sx={styles.container}>
          <CircularProgress size={40} thickness={4} />
          <Typography variant="body2" sx={styles.text}>
            {message}
          </Typography>
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseLoader;
